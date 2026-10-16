#!/bin/bash

echo "=== 1. Restaurando todas las configuraciones (.config) ==="
mkdir -p ~/.config
# Copia el contenido de la carpeta configs/.config a tu ~/.config actual
cp -r configs/.config/* ~/.config/

echo "=== 2. Instalando paquetes de APT ==="
sudo dpkg --set-selections < apt-packages.txt
sudo apt-get dselect-upgrade -y

echo "=== 3. Instalando aplicaciones de Flatpak ==="
while read app; do
  flatpak install flathub "$app" -y
done < flatpak-packages.txt

echo "¡Listo! Configuración y aplicaciones restauradas."
