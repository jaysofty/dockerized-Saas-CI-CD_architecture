variable "subscription_id" {

  type = string
}

variable "location" {

  type = string
}

variable "resource_group_name" {

  type = string
}

variable "vnet_name" {}

variable "subnet_name" {}

variable "nic_name" {}

variable "public_ip_name" {}

variable "nsg_name" {}

variable "vm_name" {}

variable "admin_username" {}

variable "ssh_public_key_path" {}

variable "vm_size" {}

variable "os_disk_size_gb" {}

variable "enable_ssh" {
  type    = bool
  default = true
}

