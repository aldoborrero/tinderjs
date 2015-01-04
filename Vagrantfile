# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  # https://atlas.hashicorp.com/search
  config.vm.box = "ubuntu/trusty64"
  config.vm.box_check_update = false

  # config.vm.network "private_network", ip: "192.168.33.10"
  # config.vm.network "public_network"

  config.vm.provider "virtualbox" do |vb|
     #vb.gui = true
     vb.memory = "1024"
  end

end
