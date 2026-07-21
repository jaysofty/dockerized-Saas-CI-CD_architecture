output "resource_group_name" {

  value = module.resource_group.name
}

output "resource_group_id" {

  value = module.resource_group.id
}

output "location" {

  value = module.resource_group.location
}

output "public_ip" {

  value = module.network.public_ip
}

output "nic_id" {

  value = module.network.nic_id
}

output "subnet_id" {

  value = module.network.subnet_id
}

output "vm_name" {

  value = module.virtual_machine.vm_name
}