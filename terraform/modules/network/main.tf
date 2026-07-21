resource "azurerm_virtual_network" "this" {

  name                = var.vnet_name
  location            = var.location
  resource_group_name = var.resource_group_name

  address_space = [var.vnet_address_space]

  tags = var.tags
}

resource "azurerm_subnet" "this" {

  name                 = var.subnet_name
  resource_group_name  = var.resource_group_name
  virtual_network_name = azurerm_virtual_network.this.name

  address_prefixes = [var.subnet_prefix]
}

resource "azurerm_network_security_group" "this" {

  name                = var.nsg_name
  location            = var.location
  resource_group_name = var.resource_group_name

  tags = var.tags
}


resource "azurerm_network_security_rule" "http" {

  name                        = "AllowHTTP"
  priority                    = 100
  direction                   = "Inbound"
  access                      = "Allow"
  protocol                    = "Tcp"

  source_port_range           = "*"
  destination_port_range      = "80"

  source_address_prefix       = "*"
  destination_address_prefix  = "*"

  resource_group_name         = var.resource_group_name
  network_security_group_name = azurerm_network_security_group.this.name
}

resource "azurerm_network_security_rule" "ssh" {

  count = var.enable_ssh ? 1 : 0

  name                        = "AllowSSH"
  priority                    = 110
  direction                   = "Inbound"
  access                      = "Allow"
  protocol                    = "Tcp"

  source_port_range          = "*"
  destination_port_range     = "22"

  source_address_prefix      = "*"
  destination_address_prefix = "*"

  resource_group_name         = var.resource_group_name
  network_security_group_name = azurerm_network_security_group.this.name
}

resource "azurerm_public_ip" "this" {

  count = var.create_public_ip ? 1 : 0

  name                = var.public_ip_name
  location            = var.location
  resource_group_name = var.resource_group_name

  allocation_method = "Static"

  sku = "Standard"

  tags = var.tags
}

resource "azurerm_network_interface" "this" {

  name                = var.nic_name
  location            = var.location
  resource_group_name = var.resource_group_name

  ip_configuration {

    name = "internal"

    subnet_id = azurerm_subnet.this.id

    private_ip_address_allocation = "Dynamic"

    public_ip_address_id = var.create_public_ip ? azurerm_public_ip.this[0].id : null
  }

  tags = var.tags
}

resource "azurerm_network_interface_security_group_association" "this" {

  network_interface_id = azurerm_network_interface.this.id

  network_security_group_id = azurerm_network_security_group.this.id
}