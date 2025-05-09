# projecto_Docker

## 1. Instalacion ddependencias necesarias

Ya que en las maquinas virtuales que estamos usando estan practicamente 
virgenes lo primero que tuvimos que hacer para poder realizar el 
despliegue con kubernetes es instalar diferentes dependencias para poder

### SPICE (opcional)

para poder copiar y pegar comandos entre nuestra maquina host y la maquina
virtual, instalamos el spice-vdagent

$codigo$
sudo apt install spice-vdagent
sudo systemctl enable --now spice-vdagentd

y para revisar si esta funcionando usamos

$codigo$
systemctl status spice-vdagent

y si nos sale que esta en estado Active: active (running)

### 1. Minikube

Para poder levantar un cluster de manera local necesitamos instalar Minikube,
con este comando lo instalamos:

$codigo$
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

y para verificar la instalación:

$codigo$
minikube version


### 2. Docker

Tambien obviamente si tenemos que desplegar contenedores Docker necesitamos
tener en nuestro sistema Docker instalado, para eso usamos este comando:

$codigo$
sudo apt install docker.io -y
sudo usermod -aG docker $USER
newgrp docker

y ahora con el docker instalado ya podemos aplicar este comando para poder
comenzar a trabajar con kubernetes:

$codigo$
minikube start --driver=docker


Esto demora unos minutos en montarse asi que no hay que preocuparse, una vez
 termine probamos con el siguiente comando para verificar el montaje:

$código$
kubectl get nodes


## 2. Creación de los archivos.yaml

Para poder realizar este projecto 






