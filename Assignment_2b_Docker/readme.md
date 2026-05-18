# Docker Desktop Installation Guide for Windows

This guide explains how to install Docker Desktop on Windows and verify that Docker is working correctly.

---

# What is Docker?

Docker is a platform used to create, run, and manage containers. Containers help developers run applications in isolated environments.

---

# System Requirements

Before installing Docker Desktop, make sure your system meets these requirements:

- Windows 10 or Windows 11 (64-bit)
- Minimum 4 GB RAM
- Virtualization enabled in BIOS
- WSL 2 support enabled
- Administrator access

---

# Step 1: Enable Virtualization in BIOS

Docker requires hardware virtualization.

## How to Enable Virtualization

1. Restart your computer.
2. Enter BIOS settings by pressing one of these keys during startup:

```text
F2
DEL
ESC
F10
```

3. Find virtualization settings.

Depending on your processor, enable:

```text
Intel VT-x
or
AMD-V
```

4. Save changes and restart your computer.

---

# Step 2: Install WSL 2 (Windows Subsystem for Linux)

Docker Desktop uses WSL2 for better performance.

## Open PowerShell as Administrator

Search:

```text
PowerShell
```

Right-click and select:

```text
Run as Administrator
```

## Run the Following Command

```powershell
wsl --install
```

This command automatically:

- Installs WSL
- Installs WSL2
- Enables Virtual Machine Platform
- Downloads Ubuntu

---

# Step 3: Restart Your Computer

After WSL installation completes, restart your system.

---

# Step 4: Verify WSL Installation

Open PowerShell and run:

```powershell
wsl --status
```

You should see information about:

- Default Version: 2
- Linux distribution installed

---

# Step 5: Download Docker Desktop

Download Docker Desktop from the official website:

https://www.docker.com/products/docker-desktop/

Click:

```text
Download for Windows
```

---

# Step 6: Install Docker Desktop

1. Open the downloaded installer.
2. Follow the installation wizard.

## Keep These Options Checked

```text
Use WSL 2 instead of Hyper-V
Add shortcut to desktop
```

3. Click:

```text
OK → Install
```

4. Wait for installation to complete.

---

# Step 7: Restart the Computer

Restart your PC after installation.

---

# Step 8: Launch Docker Desktop

Open:

```text
Docker Desktop
```

Wait until Docker starts successfully.

You should see:

```text
Docker Engine Running
```

---

# Step 9: Verify Docker Installation

Open CMD or PowerShell and run:

```bash
docker --version
```

Example Output:

```text
Docker version 28.x.x
```

---









How to write the dockerfile for html 

# Use nginx base image
FROM nginx:latest

# Copy html file to nginx folder
COPY index.html /usr/share/nginx/html/index.html

# Expose port 80
EXPOSE 80

Build Docker Image

docker build -t my-html-app .

Run Docker container
docker run -d -p 8080:80 --name my-html-container my-html-app

then open in browser to check if the docker container is running or not 
http://localhost:8080

Important Docker command 

to check running container 
docker ps 

to stop contianer
docker stop <container-name>

to start container again 
docker start <container-name>

to remove  container 
docker rm <container-name>

to remove image
docekr rmi <image-name>
