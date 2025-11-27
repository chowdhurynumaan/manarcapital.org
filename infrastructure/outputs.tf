# =============================================================================
# Manar Capital - Terraform Outputs
# =============================================================================

output "project_name" {
  description = "The name of the project"
  value       = local.project_name
}

output "environment" {
  description = "The current deployment environment"
  value       = var.environment
}

# Placeholder outputs for future resources
# output "portal_url" {
#   description = "The URL of the portal application"
#   value       = "https://portal.manarcapital.org"
# }
