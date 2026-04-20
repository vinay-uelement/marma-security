#!/usr/bin/env bash
# Tear down all marma-security AWS infrastructure
#
# Usage:
#   ./infra/undeploy.sh <aws-region> [--keep-ecr-images]
#
# Arguments:
#   aws-region          e.g. ap-south-1
#   --keep-ecr-images   Optional. Skip deleting images from ECR before removing
#                       the repository (useful if you plan to redeploy later).
#
# Stacks deleted (in dependency order):
#   1. marma-security-pipeline  (CodePipeline, CodeBuild, S3 artifact bucket)
#   2. marma-security-ecs       (ECS, ALB, VPC, NAT Gateway)
#   3. marma-security-acm       (ACM certificate)
#   4. marma-security-ecr       (ECR repository)

set -euo pipefail

REGION="${1:-}"
KEEP_IMAGES="${2:-}"

if [[ -z "$REGION" ]]; then
  echo "Usage: $0 <aws-region> [--keep-ecr-images]"
  echo "  e.g. $0 ap-south-1"
  exit 1
fi

APP_NAME="marma-security"
AWS_ACCOUNT=$(aws sts get-caller-identity --query Account --output text)

ECR_STACK="${APP_NAME}-ecr"
ACM_STACK="${APP_NAME}-acm"
ECS_STACK="${APP_NAME}-ecs"
PIPELINE_STACK="${APP_NAME}-pipeline"
ARTIFACT_BUCKET="${APP_NAME}-pipeline-artifacts-${AWS_ACCOUNT}"

stack_exists() {
  aws cloudformation describe-stacks \
    --stack-name "$1" \
    --region "$REGION" \
    --query "Stacks[0].StackStatus" \
    --output text 2>/dev/null | grep -qv "DOES_NOT_EXIST" && return 0 || return 1
}

echo "════════════════════════════════════════════════════════"
echo " Tearing down marma-security infrastructure"
echo " Region : $REGION"
echo " Account: $AWS_ACCOUNT"
echo "════════════════════════════════════════════════════════"
echo ""
read -rp "This will permanently delete all infrastructure. Type 'yes' to confirm: " CONFIRM
if [[ "$CONFIRM" != "yes" ]]; then
  echo "Aborted."
  exit 0
fi

# ── Step 1: Empty the S3 artifact bucket ──────────────────────────────────────
echo ""
echo "=== [1/4] Emptying S3 artifact bucket: ${ARTIFACT_BUCKET} ==="
if aws s3api head-bucket --bucket "$ARTIFACT_BUCKET" --region "$REGION" 2>/dev/null; then
  aws s3 rm "s3://${ARTIFACT_BUCKET}" --recursive --region "$REGION"
  echo "Bucket emptied."
else
  echo "Bucket not found — skipping."
fi

# ── Step 2: Delete pipeline stack ─────────────────────────────────────────────
echo ""
echo "=== [2/4] Deleting pipeline stack: ${PIPELINE_STACK} ==="
if stack_exists "$PIPELINE_STACK"; then
  aws cloudformation delete-stack --stack-name "$PIPELINE_STACK" --region "$REGION"
  echo "Waiting for pipeline stack deletion..."
  aws cloudformation wait stack-delete-complete --stack-name "$PIPELINE_STACK" --region "$REGION"
  echo "Pipeline stack deleted."
else
  echo "Stack not found — skipping."
fi

# ── Step 3: Delete ECS stack ───────────────────────────────────────────────────
echo ""
echo "=== [3/4] Deleting ECS stack: ${ECS_STACK} ==="
if stack_exists "$ECS_STACK"; then
  # Scale down service to 0 before deleting to speed up stack deletion
  ECS_CLUSTER="${APP_NAME}-cluster"
  ECS_SERVICE="${APP_NAME}-service"
  if aws ecs describe-services \
      --cluster "$ECS_CLUSTER" \
      --services "$ECS_SERVICE" \
      --region "$REGION" \
      --query "services[0].status" \
      --output text 2>/dev/null | grep -q "ACTIVE"; then
    echo "Scaling ECS service to 0 tasks..."
    aws ecs update-service \
      --cluster "$ECS_CLUSTER" \
      --service "$ECS_SERVICE" \
      --desired-count 0 \
      --region "$REGION" > /dev/null
    aws ecs wait services-stable \
      --cluster "$ECS_CLUSTER" \
      --services "$ECS_SERVICE" \
      --region "$REGION"
  fi
  aws cloudformation delete-stack --stack-name "$ECS_STACK" --region "$REGION"
  echo "Waiting for ECS stack deletion (NAT Gateway deletion can take ~2 min)..."
  aws cloudformation wait stack-delete-complete --stack-name "$ECS_STACK" --region "$REGION"
  echo "ECS stack deleted."
else
  echo "Stack not found — skipping."
fi

# ── Step 4: Delete ACM stack ───────────────────────────────────────────────────
echo ""
echo "=== [4/5] Deleting ACM stack: ${ACM_STACK} ==="
if stack_exists "$ACM_STACK"; then
  aws cloudformation delete-stack --stack-name "$ACM_STACK" --region "$REGION"
  echo "Waiting for ACM stack deletion..."
  aws cloudformation wait stack-delete-complete --stack-name "$ACM_STACK" --region "$REGION"
  echo "ACM stack deleted."
else
  echo "Stack not found — skipping."
fi

# ── Step 5: Delete ECR stack ───────────────────────────────────────────────────
echo ""
echo "=== [5/5] Deleting ECR stack: ${ECR_STACK} ==="
if stack_exists "$ECR_STACK"; then
  if [[ "$KEEP_IMAGES" != "--keep-ecr-images" ]]; then
    echo "Deleting all images from ECR repository..."
    IMAGE_IDS=$(aws ecr list-images \
      --repository-name "$APP_NAME" \
      --region "$REGION" \
      --query "imageIds[*]" \
      --output json 2>/dev/null || echo "[]")
    if [[ "$IMAGE_IDS" != "[]" && -n "$IMAGE_IDS" ]]; then
      aws ecr batch-delete-image \
        --repository-name "$APP_NAME" \
        --region "$REGION" \
        --image-ids "$IMAGE_IDS" > /dev/null
      echo "ECR images deleted."
    else
      echo "No images found in ECR."
    fi
  else
    echo "Skipping ECR image deletion (--keep-ecr-images passed)."
  fi
  aws cloudformation delete-stack --stack-name "$ECR_STACK" --region "$REGION"
  echo "Waiting for ECR stack deletion..."
  aws cloudformation wait stack-delete-complete --stack-name "$ECR_STACK" --region "$REGION"
  echo "ECR stack deleted."
else
  echo "Stack not found — skipping."
fi

echo ""
echo "════════════════════════════════════════════════════════"
echo " TEARDOWN COMPLETE"
echo "════════════════════════════════════════════════════════"
echo ""
echo "All marma-security infrastructure has been removed from ${REGION}."
echo ""
echo "Note: CloudWatch log group '/ecs/${APP_NAME}' is retained by default."
echo "To delete it manually:"
echo "  aws logs delete-log-group --log-group-name /ecs/${APP_NAME} --region ${REGION}"
echo ""
