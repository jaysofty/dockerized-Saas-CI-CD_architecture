output "resource_group_name" {
  value = module.resource_group.name
}

output "vnet_name" {
  value = module.network.name
}

output "subnet_id" {
  value = module.subnet.id
}

output "nsg_name" {
  value = module.nsg.name
}

output "public_ip" {
  value = module.public_ip.ip_address
}

output "nic_name" {
  value = module.nic.name
}

output "private_ip" {
  value = module.nic.private_ip_address
}

output "vm_name" {
  value = module.vm.name
}

output "vm_id" {
  value = module.vm.id
}

output "bastion_id" {
  value = module.bastion.id
}