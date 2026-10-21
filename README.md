# 🐧 Debian Dotfiles & System Setup

Repositorio de configuración personal (*dotfiles*) y lista de aplicaciones para **Debian** utilizando **Niri** (Wayland compositor) y **DMS** (Dank Material Shell / Noctalia).

---

## 📂 Estructura del Repositorio

* `configs/`: Copia de seguridad de la carpeta de configuración (`~/.config`).
* `apt-packages.txt`: Lista de paquetes instalados vía **APT**.
* `flatpak-packages.txt`: Lista de aplicaciones instaladas vía **Flatpak**.
* `bashrc`: Configuración de bash para la **terminal**.
* `install.sh`: Script de automatización para restaurar el entorno completo de un solo golpe.
* `instrucciones.txt`: Notas rápidas de uso y comandos de actualización.

---

## 🚀 Cómo restaurar en un sistema nuevo

Para replicar este entorno en una instalación limpia de Debian:

```bash
# 1. Instalar Git
sudo apt update && sudo apt install git -y

# 2. Clonar el repositorio
git clone https://github.com/addmzeus-pixel/Configuracion-de-mi-debian-

# 3. Entrar a la carpeta y ejecutar el script
cd ~/dotfiles
./install.sh




