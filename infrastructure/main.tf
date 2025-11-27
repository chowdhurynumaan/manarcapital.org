# =============================================================================
# Manar Capital - Infrastructure as Code
# =============================================================================
# Main Terraform configuration file
# This is a stub file to be expanded as infrastructure needs grow
# =============================================================================

terraform {
  required_version = ">= 1.0"

  # Backend configuration for remote state (uncomment when ready)
  # backend "s3" {
  #   bucket         = "manarcapital-terraform-state"
  #   key            = "infrastructure/terraform.tfstate"
  #   region         = "us-east-1"
  #   encrypt        = true
  #   dynamodb_table = "terraform-state-lock"
  # }
}

# =============================================================================
# Local Values
# =============================================================================

locals {
  project_name = "manarcapital"
  common_tags = {
    Project     = "Manar Capital"
    ManagedBy   = "Terraform"
    Environment = var.environment
  }
}

# =============================================================================
# Resources
# =============================================================================

# Placeholder for future infrastructure resources
# Examples:
# - Vercel project configuration
# - Database instances
# - CDN configuration
# - DNS records
# - SSL certificates
