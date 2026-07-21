module "resource_group" {

  source = "../../modules/resource-group"

  resource_group_name = var.resource_group_name

  location = var.location

  tags = {

    Environment = "Development"

    Project = "FormFlow"

    ManagedBy = "Terraform"
  }
}

module "network" {

  source = "../../modules/network"

  resource_group_name = module.resource_group.name

  location = var.location

  vnet_name = var.vnet_name

  subnet_name = var.subnet_name

  nic_name = var.nic_name

  public_ip_name = var.public_ip_name

  nsg_name = var.nsg_name

  create_public_ip = true

  enable_ssh = var.enable_ssh

  tags = {

    Environment = "Development"

    Project = "FormFlow"

    ManagedBy = "Terraform"

  }

}

module "virtual_machine" {

  source = "../../modules/virtual-machine"

  vm_name = var.vm_name

  location = var.location

  resource_group_name = module.resource_group.name

  nic_id = module.network.nic_id

  admin_username = var.admin_username

  ssh_public_key_path = var.ssh_public_key_path

  vm_size = var.vm_size

  os_disk_size_gb = var.os_disk_size_gb

  tags = {

    Environment = "Development"

    Project = "FormFlow"

    ManagedBy = "Terraform"

  }

}
