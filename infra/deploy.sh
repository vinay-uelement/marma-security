#!/usr/bin/env bash
# Deploy marma-security CI/CD infrastructure to AWS
#
# Usage:
#   ./infra/deploy.sh <aws-region> <github-owner>
#
# Prerequisites:
#   - AWS CLI v2 configured with sufficient IAM permissions
#   - Docker running locally (for the initial image push)
#   - jq installed
#
# Steps performed:
#   1. Create ECR repository
#   2. Build & push an initial Docker image so ECS has something to start with
#   3. Deploy VPC + ALB + ECS cluster + Fargate service
#   4. Deploy CodePipeline + CodeBuild (GitHub → ECR → ECS)
#   5. Print next steps (GitHub connection auth + DNS)

set -euo pipefail

REGION="${1:-}"
GITHUB_OWNER="${2:-}"

if [[ -z "$REGION" || -z "$GITHUB_OWNER" ]]; then
  echo "Usage: $0 <aws-region> <github-owner>"
  echo "  e.g. $0 us-east-1 UElement"
  exit 1
fi

APP_NAME="marma-security"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ECR_STACK="${APP_NAME}-ecr"
ECS_STACK="${APP_NAME}-ecs"
PIPELINE_STACK="${APP_NAME}-pipeline"

# ── Step 1: ECR ────────────────────────────────────────────────────────────────
echo "=== [1/4] Deploying ECR repository ==="
aws cloudformation deploy \
  --template-file "${SCRIPT_DIR}/cfn-ecr.yaml" \
  --stack-name "$ECR_STACK" \
  --region "$REGION" \
  --no-fail-on-empty-changeset

ECR_URI=$(aws cloudformation describe-stacks \
  --stack-name "$ECR_STACK" \
  --region "$REGION" \
  --query "Stacks[0].Outputs[?OutputKey=='RepositoryUri'].OutputValue" \
  --output text)
echo "ECR URI: $ECR_URI"

# ── Step 2: Initial image push ─────────────────────────────────────────────────
echo ""
echo "=== [2/4] Building and pushing initial Docker image ==="
AWS_ACCOUNT=$(aws sts get-caller-identity --query Account --output text)
aws ecr get-login-password --region "$REGION" \
  | docker login --username AWS --password-stdin "${AWS_ACCOUNT}.dkr.ecr.${REGION}.amazonaws.com"
docker build -t "${ECR_URI}:latest" "${SCRIPT_DIR}/.."
docker push "${ECR_URI}:latest"

# ── Step 3: ECS infrastructure ─────────────────────────────────────────────────
echo ""
echo "=== [3/4] Deploying VPC, ALB, ECS cluster and Fargate service ==="
aws cloudformation deploy \
  --template-file "${SCRIPT_DIR}/cfn-ecs.yaml" \
  --stack-name "$ECS_STACK" \
  --region "$REGION" \
  --capabilities CAPABILITY_NAMED_IAM \
  --no-fail-on-empty-changeset \
  --parameter-overrides \
    AppName="$APP_NAME" \
    ECRImageUri="${ECR_URI}:latest"

ALB_DNS=$(aws cloudformation describe-stacks \
  --stack-name "$ECS_STACK" \
  --region "$REGION" \
  --query "Stacks[0].Outputs[?OutputKey=='LoadBalancerDNS'].OutputValue" \
  --output text)
ECS_CLUSTER=$(aws cloudformation describe-stacks \
  --stack-name "$ECS_STACK" \
  --region "$REGION" \
  --query "Stacks[0].Outputs[?OutputKey=='ECSClusterName'].OutputValue" \
  --output text)
ECS_SERVICE=$(aws cloudformation describe-stacks \
  --stack-name "$ECS_STACK" \
  --region "$REGION" \
  --query "Stacks[0].Outputs[?OutputKey=='ECSServiceName'].OutputValue" \
  --output text)
echo "ALB DNS   : $ALB_DNS"
echo "ECS Cluster: $ECS_CLUSTER"
echo "ECS Service: $ECS_SERVICE"

# ── Step 4: CI/CD pipeline ─────────────────────────────────────────────────────
echo ""
echo "=== [4/4] Deploying CodePipeline + CodeBuild ==="
aws cloudformation deploy \
  --template-file "${SCRIPT_DIR}/cfn-pipeline.yaml" \
  --stack-name "$PIPELINE_STACK" \
  --region "$REGION" \
  --capabilities CAPABILITY_NAMED_IAM \
  --no-fail-on-empty-changeset \
  --parameter-overrides \
    AppName="$APP_NAME" \
    GitHubOwner="$GITHUB_OWNER" \
    GitHubRepo="$APP_NAME" \
    GitHubBranch="main" \
    ECRRepositoryName="$APP_NAME" \
    ECSClusterName="$ECS_CLUSTER" \
    ECSServiceName="$ECS_SERVICE"

echo ""
echo "════════════════════════════════════════════════════════"
echo " DEPLOYMENT COMPLETE"
echo "════════════════════════════════════════════════════════"
echo ""
echo "App URL (HTTP):  http://${ALB_DNS}"
echo ""
echo "NEXT STEPS"
echo ""
echo "  1. Authorise GitHub connection (required before pipeline runs):"
echo "     AWS Console → Developer Tools → Settings → Connections"
echo "     Find '${APP_NAME}-github' → click 'Update pending connection'"
echo "     → authorise with your GitHub account"
echo ""
echo "  2. Trigger the pipeline:"
echo "     Push a commit to the 'main' branch — the pipeline fires automatically."
echo "     Or start it manually in the AWS Console:"
echo "     https://console.aws.amazon.com/codepipeline/home?region=${REGION}#/view/${APP_NAME}-pipeline"
echo ""
echo "  3. DNS integration (manual):"
echo "     a. Request an ACM certificate for your domain in us-east-1 (or ${REGION})."
echo "     b. Add an HTTPS listener (port 443) to the ALB in cfn-ecs.yaml"
echo "        referencing the certificate ARN, then re-deploy the stack."
echo "     c. In your DNS provider, create a CNAME (or ALIAS) record:"
echo "           <your-domain>  →  ${ALB_DNS}"
echo ""
