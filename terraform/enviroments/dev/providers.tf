terraform {

  required_version = ">=1.7"

  required_providers {

    azurerm = {

      source = "hashicorp/azurerm"

      version = "~>4.0"

    }

  }

  backend "azurerm" {

    resource_group_name = "formflow-tfstate-rg"

    storage_account_name = "formflowtfstate2026"

    container_name = "tfstate"

    key = "dev.terraform.tfstate"

  }

}

provider "azurerm" {

  features {}

}