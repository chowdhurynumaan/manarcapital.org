# Manar Capital Infrastructure

This directory contains Infrastructure as Code (IaC) using Terraform.

## Structure

```
infrastructure/
├── README.md           # This file
├── main.tf             # Main Terraform configuration
├── variables.tf        # Input variables
├── outputs.tf          # Output values
└── providers.tf        # Provider configurations
```

## Prerequisites

- [Terraform](https://www.terraform.io/downloads) >= 1.0
- Cloud provider credentials (AWS/GCP/Azure)

## Usage

```bash
# Initialize Terraform
terraform init

# Preview changes
terraform plan

# Apply changes
terraform apply
```

## Environments

Infrastructure is designed to support multiple environments:
- **development**: For development and testing
- **staging**: Pre-production environment
- **production**: Live environment

## Security

- Never commit `*.tfvars` files containing secrets
- Use environment variables or secret managers for sensitive values
- All state files should be stored remotely with encryption
