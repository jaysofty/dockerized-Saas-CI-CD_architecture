variable "vm_name" {

  type = string

}

variable "location" {

  type = string

}

variable "resource_group_name" {

  type = string

}

variable "nic_id" {

  type = string

}

variable "admin_username" {

  type = string

}

variable "ssh_public_key_path" {

  type = string

}

variable "vm_size" {

  type    = string

  default = "Standard_D2s_v3"

}

variable "os_disk_size_gb" {

  type    = number

  default = 64

}

variable "tags" {

  type = map(string)

  default = {}

}