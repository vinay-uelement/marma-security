# Marma Security

A Next.js 16 web application for Marma Security, built with React 19, TypeScript, Tailwind CSS 4, and GSAP animations. This runs on a AWS serverless container.

---

## Local Development

**Prerequisites:** Node.js 20+, npm

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The page hot-reloads as you edit files under `app/` or `components/`.

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint |

---

## Running with Docker (local)

```bash
docker build -t marma-security .
docker run -p 3000:3000 marma-security
```

Open [http://localhost:3000](http://localhost:3000).

---

## CI/CD Pipeline — AWS (GitHub → CodeBuild → ECR → ECS)

### Architecture overview

```
GitHub (push to main)
        │
        ▼
  AWS CodePipeline
        │
   ┌────┴─────┐
   │ Source   │  CodeStar connection pulls source ZIP from GitHub
   └────┬─────┘
        │
   ┌────┴─────┐
   │  Build   │  CodeBuild: docker build → push to ECR, emit imagedefinitions.json
   └────┬─────┘
        │
   ┌────┴─────┐
   │  Deploy  │  ECS rolling deploy (Fargate) using imagedefinitions.json
   └──────────┘
        │
        ▼
  ALB (internet-facing) → private Fargate tasks
```

### Infrastructure files

| File | What it creates |
|------|----------------|
| `infra/cfn-ecr.yaml` | ECR repository with scan-on-push and lifecycle policy |
| `infra/cfn-ecs.yaml` | VPC, subnets, NAT Gateway, ALB, ECS Cluster, Fargate service |
| `infra/cfn-pipeline.yaml` | CodeStar GitHub connection, CodeBuild project, CodePipeline |
| `buildspec.yml` | CodeBuild build specification (docker build → ECR push) |
| `Dockerfile` | Multi-stage Next.js container image (Alpine, non-root) |

---

### Prerequisites

- AWS CLI v2 configured (`aws configure`) with permissions for:
  - CloudFormation, ECR, ECS, CodeBuild, CodePipeline, IAM, S3, EC2, CodeStar Connections
- Docker running locally (only needed for the initial bootstrap push)
- The repository pushed to GitHub under your organisation/user account

---

### Step 1 — Deploy all infrastructure

Run the deploy script from the repository root:

```bash
chmod +x infra/deploy.sh
./infra/deploy.sh <aws-region> <github-owner>

# Example
./infra/deploy.sh us-east-1 UElement
```

This script performs four ordered steps automatically:

1. Creates the ECR repository (`cfn-ecr.yaml`)
2. Builds and pushes an initial Docker image so ECS has a valid image to start with
3. Deploys the VPC, ALB, and ECS Fargate service (`cfn-ecs.yaml`)
4. Deploys CodePipeline and CodeBuild (`cfn-pipeline.yaml`)

At the end it prints your **ALB DNS name** and the remaining manual steps.

> The script is idempotent — re-running it after a partial failure is safe.

---

### Step 2 — Authorise the GitHub connection

The CodeStar connection is created in a **Pending** state and cannot pull from GitHub until you authorise it.

1. Go to **AWS Console → Developer Tools → Settings → Connections**
2. Find the connection named `marma-security-github`
3. Click **Update pending connection**
4. Follow the OAuth flow to authorise AWS access to your GitHub account/organisation
5. The connection status changes to **Available**

> Until this step is completed the pipeline cannot run.

---

### Step 3 — Trigger the pipeline

After the GitHub connection is authorised, push any commit to the `main` branch:

```bash
git push origin main
```

CodePipeline triggers automatically. To watch progress:

```
AWS Console → CodePipeline → marma-security-pipeline
```

Or use the AWS CLI:

```bash
aws codepipeline get-pipeline-state \
  --name marma-security-pipeline \
  --region <aws-region>
```

---

### Step 4 — DNS integration (manual)

Once the service is running and the ALB DNS name is confirmed healthy:

#### 4a — Request an ACM certificate

```bash
aws acm request-certificate \
  --domain-name "yourdomain.com" \
  --subject-alternative-names "www.yourdomain.com" \
  --validation-method DNS \
  --region <aws-region>
```

Follow the DNS validation instructions shown in the ACM console to prove domain ownership. Note the **certificate ARN** once it reaches `Issued` status.

#### 4b — Add HTTPS listener to the ALB

In `infra/cfn-ecs.yaml`, add an HTTPS listener resource after the existing `ALBListener`:

```yaml
ALBListenerHTTPS:
  Type: AWS::ElasticLoadBalancingV2::Listener
  Properties:
    LoadBalancerArn: !Ref LoadBalancer
    Port: 443
    Protocol: HTTPS
    Certificates:
      - CertificateArn: <your-acm-certificate-arn>
    DefaultActions:
      - Type: forward
        TargetGroupArn: !Ref TargetGroup
```

Optionally redirect HTTP → HTTPS by replacing the `ALBListener` default action:

```yaml
DefaultActions:
  - Type: redirect
    RedirectConfig:
      Protocol: HTTPS
      Port: "443"
      StatusCode: HTTP_301
```

Re-deploy the ECS stack to apply:

```bash
aws cloudformation deploy \
  --template-file infra/cfn-ecs.yaml \
  --stack-name marma-security-ecs \
  --region <aws-region> \
  --capabilities CAPABILITY_NAMED_IAM \
  --parameter-overrides AppName=marma-security ECRImageUri=<ecr-uri>:latest
```

#### 4c — Create a DNS record

In your DNS provider (Route 53, Cloudflare, etc.), create a record pointing your domain to the ALB:

| Type | Name | Value |
|------|------|-------|
| CNAME | `www.yourdomain.com` | `<alb-dns-name>` |
| ALIAS / CNAME | `yourdomain.com` | `<alb-dns-name>` |

If using Route 53, an **A record with Alias** is preferred over CNAME for the apex domain.

---

### Updating the application

Every push to `main` automatically:

1. Triggers CodePipeline
2. CodeBuild builds a new Docker image tagged with the short commit SHA and pushes it to ECR
3. CodePipeline updates the ECS service with a rolling deploy (50% minimum healthy, 200% maximum)

No manual intervention is needed after the initial setup.

---

### Useful AWS CLI commands

```bash
# View pipeline execution status
aws codepipeline list-pipeline-executions --pipeline-name marma-security-pipeline --region <region>

# View running ECS tasks
aws ecs list-tasks --cluster marma-security-cluster --region <region>

# View container logs
aws logs tail /ecs/marma-security --follow --region <region>

# Force a new ECS deployment (without a code push)
aws ecs update-service \
  --cluster marma-security-cluster \
  --service marma-security-service \
  --force-new-deployment \
  --region <region>

# List ECR images
aws ecr list-images --repository-name marma-security --region <region>
```

---

### Tearing down

Delete stacks in reverse order to avoid dependency errors:

```bash
REGION=us-east-1

aws cloudformation delete-stack --stack-name marma-security-pipeline --region $REGION
aws cloudformation wait stack-delete-complete --stack-name marma-security-pipeline --region $REGION

aws cloudformation delete-stack --stack-name marma-security-ecs --region $REGION
aws cloudformation wait stack-delete-complete --stack-name marma-security-ecs --region $REGION

aws cloudformation delete-stack --stack-name marma-security-ecr --region $REGION
```

> Empty the S3 artifact bucket manually before deleting the pipeline stack, or the deletion will fail:
> ```bash
> aws s3 rm s3://marma-security-pipeline-artifacts-<account-id> --recursive
> ```
