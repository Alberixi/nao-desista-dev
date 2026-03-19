# Script para aquisição de memória
param(
    [string]$OutputPath = "C:\Cases\memory.raw"
)

Write-Host "Iniciando aquisição de memória..." -ForegroundColor Yellow

# Verificar se winpmem existe
if (Test-Path ".\winpmem.exe") {
    .\winpmem.exe $OutputPath
    Write-Host "Memória salva em: $OutputPath" -ForegroundColor Green
} else {
    Write-Host "winpmem.exe não encontrado. Baixe de: https://github.com/google/rekall" -ForegroundColor Red
}
