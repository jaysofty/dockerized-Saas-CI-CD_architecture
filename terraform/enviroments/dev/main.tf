module "resource_group" {
  source = "../../modules/resource-group"

  resource_group_name = var.resource_group_name
  location            = var.location
}

module "network" {
  source = "../../modules/network"

  resource_group_name = module.resource_group.name
  location            = module.resource_group.location

  vnet_name     = var.vnet_name
  address_space = var.address_space
}

module "subnet" {
  source = "../../modules/subnet"

  subnet_name          = var.subnet_name
  resource_group_name  = module.resource_group.name
  virtual_network_name = module.network.name

  address_prefixes = var.subnet_prefixes
}


module "nsg" {
  source = "../../modules/nsg"

  nsg_name            = var.nsg_name
  location            = module.resource_group.location
  resource_group_name = module.resource_group.name
}

module "nsg_association" {

  source = "../../modules/nsg-association"

  subnet_id = module.subnet.id

  nsg_id = module.nsg.id

}

module "public_ip" {
  source = "../../modules/public-ip"

  pip_name            = var.pip_name
  location            = module.resource_group.location
  resource_group_name = module.resource_group.name
}

module "nic" {
  source = "../../modules/nic"

  nic_name            = var.nic_name
  location            = module.resource_group.location
  resource_group_name = module.resource_group.name

  subnet_id    = module.subnet.id
  public_ip_id = module.public_ip.id
}

module "bastion_subnet" {
  source = "../../modules/subnet"

  subnet_name          = var.bastion_subnet_name
  resource_group_name  = module.resource_group.name
  virtual_network_name = module.network.name

  address_prefixes = var.bastion_subnet_prefixes
}

module "bastion" {
  source = "../../modules/bastion"

  bastion_name        = var.bastion_name
  location            = module.resource_group.location
  resource_group_name = module.resource_group.name

  subnet_id = module.bastion_subnet.id
}

module "vm" {
  source = "../../modules/vm"

  vm_name             = var.vm_name
  location            = module.resource_group.location
  resource_group_name = module.resource_group.name

  network_interface_id = module.nic.id

  vm_size = var.vm_size

  admin_username = var.admin_username

  ssh_public_key = var.ssh_public_key
}