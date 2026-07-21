resource "azurerm_linux_virtual_machine" "this" {

  name = var.vm_name

  resource_group_name = var.resource_group_name

  location = var.location

  size = var.vm_size

  network_interface_ids = [

    var.nic_id

  ]

  admin_username = var.admin_username

  disable_password_authentication = true

  admin_ssh_key {

    username = var.admin_username

    public_key = file(var.ssh_public_key_path)

  }

  os_disk {

    caching = "ReadWrite"

    storage_account_type = "StandardSSD_LRS"

    disk_size_gb = var.os_disk_size_gb

  }

  source_image_reference {

    publisher = "Canonical"

    offer = "ubuntu-24_04-lts"

    sku = "server"

    version = "latest"

  }

  custom_data = base64encode(

    file("${path.module}/cloud-init.yaml")

  )

  tags = var.tags

}