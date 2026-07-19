variable "resource_group_name" {
  type = string
}

variable "location" {
  type = string
}

variable "vnet_name" {
  type = string
}

variable "address_space" {
  type = list(string)
}

variable "subnet_name" {
  type = string
}

variable "subnet_prefixes" {
  type = list(string)
}

variable "nsg_name" {
  type = string
}

variable "pip_name" {
  type = string
}

variable "nic_name" {
  type = string
}

variable "bastion_name" {
  type = string
}

variable "bastion_subnet_name" {
  type = string
}

variable "bastion_subnet_prefixes" {
  type = list(string)
}

variable "vm_name" {
  type = string
}

variable "vm_size" {
  type = string
}

variable "admin_username" {
  type = string
}

variable "ssh_public_key" {
  type = string
}