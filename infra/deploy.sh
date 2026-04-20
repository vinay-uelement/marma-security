#!/usr/bin/env bash
# Deploy marma-security CI/CD infrastructure to AWS
#
# Usage:
#   ./infra/deploy.sh <aws-region> <github-owner> [route53-hosted-zone-id]
#
# Arguments:
#   aws-region            e.g. ap-south-1
#   github-owner          GitHub org or username, e.g. UElement
#   route53-hosted-zone-id  Optional. If your domain is in Route 53, pass the
#                           Hosted Zone ID for fully-automated DNS validation.
#                           Omit if using Cloudflare / GoDaddy / other provider.
#
# Prerequisites:
#   - AWS CLI v2 configured with sufficient IAM permissions
#   - Docker running locally (for the initial image push)

set -euo pipefail

REGION="${1:-}"
GITHUB_OWNER="${2:-}"
HOSTED_ZONE_ID="${3:-}"

if [[ -z "$REGION" || -z "$GITHUB_OWNER" ]]; then
  echo "Usage: $0 <aws-region> <github-owner> [route53-hosted-zone-id]"
  echo "  e.g. $0 ap-south-1 UElement"
  echo "  e.g. $0 ap-south-1 UElement Z1PA6795UKMFR9"
  exit 1
fi

APP_NAME="marma-security"
DOMAIN="thedigitaldrift.in"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

ECR_STACK="${APP_NAME}-ecr"
ACM_STACK="${APP_NAME}-acm"
ECS_STACK="${APP_NAME}-ecs"
PIPELINE_STACK="${APP_NAME}-pipeline"

# ── Step 1: ECR ────────────────────────────────────────────────────────────────
echo "=== [1/5] Deploying ECR repository ==="
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
echo "=== [2/5] Building and pushing initial Docker image ==="
AWS_ACCOUNT=$(aws sts get-caller-identity --query Account --output text)
aws ecr get-login-password --region "$REGION" \
  | docker login --username AWS --password-stdin "${AWS_ACCOUNT}.dkr.ecr.${REGION}.amazonaws.com"
docker build -t "${ECR_URI}:latest" "${SCRIPT_DIR}/.."
docker push "${ECR_URI}:latest"

# ── Step 3: ACM certificate ────────────────────────────────────────────────────
echo ""
echo "=== [3/5] Deploying ACM certificate for ${DOMAIN} ==="

if [[ -n "$HOSTED_ZONE_ID" ]]; then
  echo "Route 53 Hosted Zone ID provided — DNS validation will be automated."
  aws cloudformation deploy \
    --template-file "${SCRIPT_DIR}/cfn-acm.yaml" \
    --stack-name "$ACM_STACK" \
    --region "$REGION" \
    --no-fail-on-empty-changeset \
    --parameter-overrides \
      DomainName="$DOMAIN" \
      Route53HostedZoneId="$HOSTED_ZONE_ID"
else
  echo "No Route 53 Hosted Zone ID provided — deploying certificate request."
  echo "CloudFormation will pause here until DNS validation is completed manually."
  echo ""
  echo "  ACTION REQUIRED:"
  echo "  After this command starts, go to AWS Console → Certificate Manager → Certificates"
  echo "  find the pending certificate for '${DOMAIN}', expand the domain entries,"
  echo "  and add the shown CNAME records to your DNS provider (Cloudflare / GoDaddy etc.)."
  echo "  CloudFormation will resume automatically once the certificate reaches 'Issued'."
  echo ""
  aws cloudformation deploy \
    --template-file "${SCRIPT_DIR}/cfn-acm.yaml" \
    --stack-name "$ACM_STACK" \
    --region "$REGION" \
    --no-fail-on-empty-changeset \
    --parameter-overrides \
      DomainName="$DOMAIN"
fi

CERT_ARN=$(aws cloudformation describe-stacks \
  --stack-name "$ACM_STACK" \
  --region "$REGION" \
  --query "Stacks[0].Outputs[?OutputKey=='CertificateArn'].OutputValue" \
  --output text)
echo "Certificate ARN: $CERT_ARN"

# ── Step 4: ECS infrastructure ─────────────────────────────────────────────────
echo ""
echo "=== [4/5] Deploying VPC, ALB, ECS cluster and Fargate service ==="
aws cloudformation deploy \
  --template-file "${SCRIPT_DIR}/cfn-ecs.yaml" \
  --stack-name "$ECS_STACK" \
  --region "$REGION" \
  --capabilities CAPABILITY_NAMED_IAM \
  --no-fail-on-empty-changeset \
  --parameter-overrides \
    AppName="$APP_NAME" \
    ECRImageUri="${ECR_URI}:latest" \
    CertificateArn="$CERT_ARN"

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
echo "ALB DNS    : $ALB_DNS"
echo "ECS Cluster: $ECS_CLUSTER"
echo "ECS Service: $ECS_SERVICE"

# ── Step 5: CI/CD pipeline ─────────────────────────────────────────────────────
echo ""
echo "=== [5/5] Deploying CodePipeline + CodeBuild ==="
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
echo "App URL (HTTPS): https://${DOMAIN}"
echo "App URL (ALB)  : http://${ALB_DNS}"
echo ""
echo "NEXT STEPS"
echo ""
echo "  1. Authorise GitHub connection (required before pipeline runs):"
echo "     AWS Console → Developer Tools → Settings → Connections"
echo "     Find '${APP_NAME}-github' → click 'Update pending connection'"
echo "     → authorise with your GitHub account"
echo ""
echo "  2. Point your domain to the ALB."
echo "     In your DNS provider add:"
echo "       CNAME  ${DOMAIN}      →  ${ALB_DNS}"
echo "       CNAME  www.${DOMAIN}  →  ${ALB_DNS}"
echo "     (If using Route 53, use an A-Alias record for the apex domain.)"
echo ""
echo "  3. Trigger the pipeline:"
echo "     Push a commit to 'main' — pipeline fires automatically, or:"
echo "     https://console.aws.amazon.com/codepipeline/home?region=${REGION}#/view/${APP_NAME}-pipeline"
echo ""
