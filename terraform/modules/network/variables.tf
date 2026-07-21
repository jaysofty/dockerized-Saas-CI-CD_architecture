variable "resource_group_name" {}

variable "location" {}

variable "vnet_name" {}

variable "subnet_name" {}

variable "nic_name" {}

variable "public_ip_name" {}

variable "nsg_name" {}

variable "vnet_address_space" {

  default = "10.0.0.0/16"
}

variable "subnet_prefix" {

  default = "10.0.1.0/24"
}

variable "create_public_ip" {

  type = bool

  default = true
}

variable "tags" {

  type = map(string)

  default = {}
}

variable "enable_ssh" {
  description = "Allow SSH access"
  type        = bool
  default     = true
}
