# Script de instalação de ferramentas para Windows
Write-Host "Instalando ferramentas forenses..." -ForegroundColor Green

# Criar pastas
New-Item -ItemType Directory -Path "C:\Tools\Forense" -Force
New-Item -ItemType Directory -Path "C:\Tools\Estego" -Force
New-Item -ItemType Directory -Path "C:\Tools\Rede" -Force
New-Item -ItemType Directory -Path "C:\Cases" -Force

Write-Host "Download de ferramentas:" -ForegroundColor Yellow
Write-Host "- Wireshark: https://www.wireshark.org/download.html"
Write-Host "- Autopsy: https://www.autopsy.com/download/"
Write-Host "- FTK Imager: https://www.exterro.com/ftk-imager"
Write-Host "- HxD Hex Editor: https://mh-nexus.de/en/hxd/"
Write-Host "- Process Monitor: https://learn.microsoft.com/en-us/sysinternals/downloads/procmon"

Write-Host "✅ Configuração concluída!" -ForegroundColor Green
