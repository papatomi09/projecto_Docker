# projecto_Docker

## 1. Instalación de dependencias necesarias

Ya que en las máquinas virtuales que estamos usando están prácticamente 
vírgenes, lo primero que tuvimos que hacer para poder realizar el 
despliegue con Kubernetes es instalar diferentes dependencias.

### SPICE (opcional)

Para poder copiar y pegar comandos entre nuestra máquina host y la máquina
virtual, instalamos el `spice-vdagent`:

```bash
sudo apt install spice-vdagent
sudo systemctl enable --now spice-vdagentd
```

Y para revisar si está funcionando usamos:

```bash
systemctl status spice-vdagent
```

Si el servicio está activo, debe mostrar: `Active: active (running)`.

### 1. Minikube

Para poder levantar un clúster de manera local necesitamos instalar Minikube. 
Con este comando lo instalamos:

```bash
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
```

Y para verificar la instalación:

```bash
minikube version
```

### 2. Docker

También, si tenemos que desplegar contenedores Docker, necesitamos
tener Docker instalado en el sistema. Para eso usamos este comando:

```bash
sudo apt install docker.io -y
sudo usermod -aG docker $USER
newgrp docker
```

Ahora, con Docker instalado, ya podemos aplicar este comando para poder
comenzar a trabajar con Kubernetes:

```bash
minikube start --driver=docker
```

Esto demora unos minutos en montarse, así que no hay que preocuparse. 
Una vez termine, probamos con el siguiente comando para verificar el montaje:

```bash
kubectl get nodes
```

## 2. Creación de los archivos YAML

(Contenido en desarrollo)


Para poder realizar este projecto 






