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

| Script          | Purpose                            |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start development server           |
| `npm run build` | Production build                   |
| `npm run start` | Serve the production build locally |
| `npm run lint`  | Run ESLint                         |

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
  ALB (internet-facing, HTTPS)
        │
        ▼
  ACM Certificate (<your-domain>)
        │
        ▼
  Private Fargate tasks (port 3000)
```

### Infrastructure files

| File                      | What it creates                                                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------ |
| `infra/cfn-ecr.yaml`      | ECR repository with scan-on-push and lifecycle policy                                            |
| `infra/cfn-acm.yaml`      | ACM SSL/TLS certificate for `<your-domain>` + `www.<your-domain>` (domain passed at deploy time) |
| `infra/cfn-ecs.yaml`      | VPC, subnets, NAT Gateway, ALB, HTTPS listener, ECS Cluster, Fargate service                     |
| `infra/cfn-pipeline.yaml` | CodeStar GitHub connection, CodeBuild project, CodePipeline                                      |
| `buildspec.yml`           | CodeBuild build specification (docker build → ECR push)                                          |
| `Dockerfile`              | Multi-stage Next.js container image (ECR Public base, Alpine, non-root)                          |
| `infra/deploy.sh`         | End-to-end deployment script (runs all 5 stacks in order)                                        |
| `infra/undeploy.sh`       | Full teardown script (deletes all stacks in reverse order)                                       |

---

## AWS Prerequisites

Before running `deploy.sh`, ensure the following are in place.

### 1. IAM user / role permissions

The AWS identity running the script (`aws configure`) must have the following IAM permissions. Attach an inline policy or a custom managed policy containing these actions:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "CloudFormation",
      "Effect": "Allow",
      "Action": [
        "cloudformation:CreateStack",
        "cloudformation:UpdateStack",
        "cloudformation:DeleteStack",
        "cloudformation:DescribeStacks",
        "cloudformation:DescribeStackEvents",
        "cloudformation:DescribeStackResource",
        "cloudformation:GetTemplate",
        "cloudformation:ValidateTemplate",
        "cloudformation:CreateChangeSet",
        "cloudformation:ExecuteChangeSet",
        "cloudformation:DescribeChangeSet",
        "cloudformation:DeleteChangeSet"
      ],
      "Resource": "*"
    },
    {
      "Sid": "ECR",
      "Effect": "Allow",
      "Action": [
        "ecr:CreateRepository",
        "ecr:DeleteRepository",
        "ecr:DescribeRepositories",
        "ecr:GetAuthorizationToken",
        "ecr:BatchCheckLayerAvailability",
        "ecr:GetDownloadUrlForLayer",
        "ecr:BatchGetImage",
        "ecr:InitiateLayerUpload",
        "ecr:UploadLayerPart",
        "ecr:CompleteLayerUpload",
        "ecr:PutImage",
        "ecr:ListImages",
        "ecr:BatchDeleteImage",
        "ecr:PutImageScanningConfiguration",
        "ecr:PutLifecyclePolicy"
      ],
      "Resource": "*"
    },
    {
      "Sid": "ECS",
      "Effect": "Allow",
      "Action": [
        "ecs:CreateCluster",
        "ecs:DeleteCluster",
        "ecs:DescribeClusters",
        "ecs:RegisterTaskDefinition",
        "ecs:DeregisterTaskDefinition",
        "ecs:DescribeTaskDefinition",
        "ecs:CreateService",
        "ecs:UpdateService",
        "ecs:DeleteService",
        "ecs:DescribeServices",
        "ecs:ListTasks",
        "ecs:DescribeTasks"
      ],
      "Resource": "*"
    },
    {
      "Sid": "EC2andVPC",
      "Effect": "Allow",
      "Action": [
        "ec2:CreateVpc",
        "ec2:DeleteVpc",
        "ec2:DescribeVpcs",
        "ec2:CreateSubnet",
        "ec2:DeleteSubnet",
        "ec2:DescribeSubnets",
        "ec2:CreateInternetGateway",
        "ec2:DeleteInternetGateway",
        "ec2:AttachInternetGateway",
        "ec2:DetachInternetGateway",
        "ec2:DescribeInternetGateways",
        "ec2:AllocateAddress",
        "ec2:ReleaseAddress",
        "ec2:DescribeAddresses",
        "ec2:CreateNatGateway",
        "ec2:DeleteNatGateway",
        "ec2:DescribeNatGateways",
        "ec2:CreateRouteTable",
        "ec2:DeleteRouteTable",
        "ec2:CreateRoute",
        "ec2:DeleteRoute",
        "ec2:AssociateRouteTable",
        "ec2:DisassociateRouteTable",
        "ec2:DescribeRouteTables",
        "ec2:CreateSecurityGroup",
        "ec2:DeleteSecurityGroup",
        "ec2:AuthorizeSecurityGroupIngress",
        "ec2:AuthorizeSecurityGroupEgress",
        "ec2:RevokeSecurityGroupIngress",
        "ec2:RevokeSecurityGroupEgress",
        "ec2:DescribeSecurityGroups",
        "ec2:ModifyVpcAttribute",
        "ec2:DescribeAvailabilityZones",
        "ec2:DescribeAccountAttributes"
      ],
      "Resource": "*"
    },
    {
      "Sid": "ELB",
      "Effect": "Allow",
      "Action": [
        "elasticloadbalancing:CreateLoadBalancer",
        "elasticloadbalancing:DeleteLoadBalancer",
        "elasticloadbalancing:DescribeLoadBalancers",
        "elasticloadbalancing:CreateTargetGroup",
        "elasticloadbalancing:DeleteTargetGroup",
        "elasticloadbalancing:DescribeTargetGroups",
        "elasticloadbalancing:CreateListener",
        "elasticloadbalancing:DeleteListener",
        "elasticloadbalancing:DescribeListeners",
        "elasticloadbalancing:ModifyListener",
        "elasticloadbalancing:ModifyLoadBalancerAttributes",
        "elasticloadbalancing:ModifyTargetGroupAttributes",
        "elasticloadbalancing:AddTags",
        "elasticloadbalancing:DescribeTags"
      ],
      "Resource": "*"
    },
    {
      "Sid": "ACM",
      "Effect": "Allow",
      "Action": [
        "acm:RequestCertificate",
        "acm:DeleteCertificate",
        "acm:DescribeCertificate",
        "acm:ListCertificates",
        "acm:AddTagsToCertificate"
      ],
      "Resource": "*"
    },
    {
      "Sid": "CodeBuildAndPipeline",
      "Effect": "Allow",
      "Action": [
        "codebuild:CreateProject",
        "codebuild:UpdateProject",
        "codebuild:DeleteProject",
        "codebuild:BatchGetProjects",
        "codebuild:StartBuild",
        "codebuild:BatchGetBuilds",
        "codepipeline:CreatePipeline",
        "codepipeline:UpdatePipeline",
        "codepipeline:DeletePipeline",
        "codepipeline:GetPipeline",
        "codepipeline:GetPipelineState",
        "codepipeline:ListPipelineExecutions",
        "codepipeline:StartPipelineExecution",
        "codestar-connections:CreateConnection",
        "codestar-connections:DeleteConnection",
        "codestar-connections:GetConnection",
        "codestar-connections:ListConnections",
        "codestar-connections:UseConnection",
        "codestar-connections:PassConnection"
      ],
      "Resource": "*"
    },
    {
      "Sid": "S3",
      "Effect": "Allow",
      "Action": [
        "s3:CreateBucket",
        "s3:DeleteBucket",
        "s3:PutBucketVersioning",
        "s3:PutBucketEncryption",
        "s3:PutLifecycleConfiguration",
        "s3:GetBucketLocation",
        "s3:ListBucket",
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:GetObjectVersion",
        "s3:GetBucketVersioning"
      ],
      "Resource": "*"
    },
    {
      "Sid": "IAM",
      "Effect": "Allow",
      "Action": [
        "iam:CreateRole",
        "iam:DeleteRole",
        "iam:GetRole",
        "iam:PassRole",
        "iam:AttachRolePolicy",
        "iam:DetachRolePolicy",
        "iam:PutRolePolicy",
        "iam:DeleteRolePolicy",
        "iam:GetRolePolicy",
        "iam:ListRolePolicies",
        "iam:ListAttachedRolePolicies"
      ],
      "Resource": "*"
    },
    {
      "Sid": "Logs",
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogGroup",
        "logs:DeleteLogGroup",
        "logs:DescribeLogGroups",
        "logs:PutRetentionPolicy",
        "logs:CreateLogStream",
        "logs:PutLogEvents",
        "logs:DescribeLogStreams",
        "logs:GetLogEvents",
        "logs:FilterLogEvents",
        "logs:DeleteLogGroup"
      ],
      "Resource": "*"
    }
  ]
}
```

> **Tip:** For a team setup, create a dedicated IAM user `marma-deploy`, attach this policy, and generate an access key for CI use. For production, prefer an IAM role with the same policy attached to your deployment machine or CI runner.

### 2. AWS CLI v2 installed and configured

```bash
# Install (Linux)
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip && sudo ./aws/install

# Configure
aws configure
# AWS Access Key ID     : <your-key>
# AWS Secret Access Key : <your-secret>
# Default region name   : ap-south-1
# Default output format : json

# Verify
aws sts get-caller-identity
```

### 3. Docker running locally

Required only for the initial image bootstrap in `deploy.sh` Step 2. Subsequent builds are handled by CodeBuild.

```bash
docker info   # should return engine details without error
```

### 4. GitHub repository access

The repository must be pushed to GitHub under the organisation/user you pass as `<github-owner>`. The CodeStar GitHub connection created during deployment will request OAuth access to that account.

### 5. Domain DNS access (for HTTPS)

You must be able to add DNS records for the domain you pass to `deploy.sh`. This is needed either:

- **Automatically** — if the domain is in Route 53 (provide the Hosted Zone ID to `deploy.sh`)
- **Manually** — if using Cloudflare, GoDaddy, etc. (you add the CNAME record shown in ACM Console)

---

## Deployment

### First-time deploy

Run the deploy script from the repository root. It executes all 5 CloudFormation stacks in dependency order.

**With Route 53 (fully automated DNS validation):**

```bash
chmod +x infra/deploy.sh
./infra/deploy.sh ap-south-1 UElement thedigitaldrift.in Z1PA6795UKMFR9
#                 ^region    ^github   ^domain             ^route53-zone-id
```

**Without Route 53 (manual DNS validation):**

```bash
chmod +x infra/deploy.sh
./infra/deploy.sh ap-south-1 UElement thedigitaldrift.in
#                 ^region    ^github   ^domain
```

When using manual validation, the script will pause at Step 3 and print instructions. You must add the CNAME records shown in **AWS Console → Certificate Manager** to your DNS provider before the script continues.

### What the deploy script does

| Step | Stack                     | Action                                                                      |
| ---- | ------------------------- | --------------------------------------------------------------------------- |
| 1    | `marma-security-ecr`      | Creates ECR repository                                                      |
| 2    | _(local Docker)_          | Builds and pushes initial image to ECR                                      |
| 3    | `marma-security-acm`      | Requests ACM certificate for `<domain>` + `www.<domain>` passed as argument |
| 4    | `marma-security-ecs`      | Deploys VPC, NAT, ALB with HTTPS listener, ECS Fargate service              |
| 5    | `marma-security-pipeline` | Deploys CodePipeline + CodeBuild (GitHub → ECR → ECS)                       |

> The script is idempotent — re-running after a partial failure is safe.

---

## Post-deployment steps

### 1 — Authorise the GitHub connection

The CodeStar connection is created in **Pending** state. The pipeline cannot run until authorised.

1. Go to **AWS Console → Developer Tools → Settings → Connections**
2. Find `marma-security-github` → click **Update pending connection**
3. Follow the OAuth flow to authorise AWS access to your GitHub account/org
4. Status changes to **Available**

### 2 — Point your domain to the ALB

The deploy script prints the ALB DNS name at the end. Add these records in your DNS provider:

| Type  | Name                | Value            |
| ----- | ------------------- | ---------------- |
| CNAME | `www.<your-domain>` | `<alb-dns-name>` |
| CNAME | `<your-domain>`     | `<alb-dns-name>` |

> If using Route 53, use an **A record with Alias** for the apex domain instead of CNAME.

### 3 — Trigger the pipeline

Push a commit to `main`:

```bash
git push origin main
```

Or start it manually:

```
AWS Console → CodePipeline → marma-security-pipeline → Release change
```

---

## Ongoing operations

### Updating the application

Every push to `main` automatically:

1. Triggers CodePipeline
2. CodeBuild builds a new image tagged with the short commit SHA, pushes to ECR
3. ECS performs a rolling deploy (50% min healthy, 200% max)

### Useful AWS CLI commands

```bash
REGION=ap-south-1

# Pipeline status
aws codepipeline list-pipeline-executions --pipeline-name marma-security-pipeline --region $REGION

# Running ECS tasks
aws ecs list-tasks --cluster marma-security-cluster --region $REGION

# Container logs (live)
aws logs tail /ecs/marma-security --follow --region $REGION

# Force a new deployment without a code push
aws ecs update-service \
  --cluster marma-security-cluster \
  --service marma-security-service \
  --force-new-deployment \
  --region $REGION

# List ECR images
aws ecr list-images --repository-name marma-security --region $REGION

# Check certificate status
aws acm list-certificates --region $REGION
```

---

## Teardown

To delete all AWS infrastructure:

```bash
chmod +x infra/undeploy.sh
./infra/undeploy.sh ap-south-1
```

The script will ask for confirmation, then delete stacks in reverse dependency order:

| Step | Action                                                              |
| ---- | ------------------------------------------------------------------- |
| 1    | Empty the S3 artifact bucket (required before stack deletion)       |
| 2    | Delete CodePipeline stack                                           |
| 3    | Scale ECS service to 0 tasks, then delete ECS stack (VPC, ALB, NAT) |
| 4    | Delete ACM certificate stack                                        |
| 5    | Delete ECR images and repository stack                              |

To keep ECR images (e.g. for a re-deploy):

```bash
./infra/undeploy.sh ap-south-1 --keep-ecr-images
```

> **Note:** The CloudWatch log group `/ecs/marma-security` is intentionally retained after teardown. Delete manually if needed:
>
> ```bash
> aws logs delete-log-group --log-group-name /ecs/marma-security --region ap-south-1
> ```
