# 🪟 Ferramentas para Windows - Laboratório Forense

Este diretório contém ferramentas e scripts para análise forense no ambiente Windows.

## 📌 Índice

- [Ferramentas de Sistema](#ferramentas-de-sistema)
- [Forense Digital](#forense-digital)
- [Análise de Memória](#análise-de-memória)
- [Esteganografia](#esteganografia)
- [Rede](#rede)
- [Scripts Úteis](#scripts-úteis)
- [Links para Download](#links-para-download)

## 🛠️ Ferramentas de Sistema

| Ferramenta | Descrição | Comando |
|------------|-----------|---------|
| **Process Explorer** | Gerenciador de tarefas avançado | `procexp.exe` |
| **Process Monitor** | Monitora atividades do sistema em tempo real | `procmon.exe` |
| **Autoruns** | Gerencia programas que iniciam com o Windows | `autoruns.exe` |
| **Regshot** | Compara snapshots do registro | `regshot.exe` |
| **Handle** | Mostra quais arquivos estão abertos por processos | `handle.exe` |

## 🔍 Forense Digital

| Ferramenta | Descrição | Comando |
|------------|-----------|---------|
| **FTK Imager** | Cria imagens de disco e visualiza evidências | `FTK Imager.exe` |
| **Autopsy** | Plataforma forense completa | `autopsy.exe` |
| **HxD** | Editor hexadecimal | `HxD.exe` |
| **WinHex** | Editor hexadecimal avançado | `winhex.exe` |
| **AccessData Registry Viewer** | Visualizador de registry | `regviewer.exe` |
| **USBDeview** | Lista todos os dispositivos USB conectados | `USBDeview.exe` |

## 🧠 Análise de Memória

| Ferramenta | Descrição | Comando |
|------------|-----------|---------|
| **Volatility** | Framework para análise de memória | `volatility.exe` |
| **Rekall** | Alternativa ao Volatility | `rekall.exe` |
| **Memdump** | Utilitário para dump de memória | `memdump.exe` |
| **DumpIt** | Dump de memória simples | `DumpIt.exe` |
| **WinPMEM** | Driver para aquisição de memória | `winpmem.exe` |

## 🖼️ Esteganografia

| Ferramenta | Descrição | Comando |
|------------|-----------|---------|
| **StegSolve** | Análise visual de esteganografia | `stegsolve.jar` |
| **Steghide** | Esconde/extrai dados de imagens | `steghide.exe` |
| **ExifTool** | Leitura/escrita de metadados | `exiftool.exe` |
| **OpenStego** | Ferramenta GUI para esteganografia | `openstego.exe` |
| **PNGCheck** | Verifica integridade de PNG | `pngcheck.exe` |

## 🌐 Rede

| Ferramenta | Descrição | Comando |
|------------|-----------|---------|
| **Wireshark** | Analisador de protocolos | `wireshark.exe` |
| **Nmap** | Scanner de portas | `nmap.exe` |
| **Tcpview** | Visualiza conexões TCP/UDP | `tcpview.exe` |
| **Netcat** | Leitura/escrita em conexões de rede | `nc.exe` |
| **PuTTY** | Cliente SSH/Telnet | `putty.exe` |
| **WinDump** | Versão Windows do tcpdump | `windump.exe` |

## 📜 Scripts Úteis

### **get-system-info.ps1**
```powershell
# Script para coletar informações do sistema
Write-Host "Coletando informações do sistema..." -ForegroundColor Green

# Data e hora
Get-Date | Out-File -FilePath "C:\Cases\system_info.txt"

# Informações do sistema
Get-ComputerInfo | Out-File -FilePath "C:\Cases\system_info.txt" -Append

# Processos em execução
Get-Process | Sort-Object CPU -Descending | Select-Object -First 20 | Out-File -FilePath "C:\Cases\processos.txt"

# Conexões de rede
Get-NetTCPConnection | Out-File -FilePath "C:\Cases\conexoes.txt"

# Serviços
Get-Service | Where-Object {$_.Status -eq "Running"} | Out-File -FilePath "C:\Cases\servicos.txt"

# Eventos do sistema
Get-EventLog -LogName Security -Newest 100 | Out-File -FilePath "C:\Cases\eventos.log"

Write-Host "Informações salvas em C:\Cases\" -ForegroundColor Green

==========================================================================================

 Links para Download
Forense Digital
FTK Imager: https://www.exterro.com/ftk-imager

Autopsy: https://www.autopsy.com/download/

HxD: https://mh-nexus.de/en/hxd/

Process Monitor: https://learn.microsoft.com/en-us/sysinternals/downloads/procmon

Process Explorer: https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer

Esteganografia
StegSolve: https://github.com/zardus/ctf-tools/blob/master/stegsolve/install

Steghide: https://steghide.sourceforge.net/

ExifTool: https://exiftool.org/

Rede
Wireshark: https://www.wireshark.org/download.html

Nmap: https://nmap.org/download.html

PuTTY: https://www.putty.org/

Netcat: https://eternallybored.org/misc/netcat/

Memória
Volatility: https://www.volatilityfoundation.org/releases

WinPMEM: https://github.com/google/rekall/releases

🚀 Como Usar
Clone este repositório ou baixe as ferramentas individualmente

Coloque os executáveis nesta pasta

Execute os scripts PowerShell para automatizar tarefas

Os resultados serão salvos em C:\Cases\

📌 Dicas
Execute o PowerShell como Administrador para scripts que acessam áreas protegidas

Sempre calcule hashes (MD5/SHA256) das evidências coletadas

Documente todos os passos da investigação

Use o Get-Help no PowerShell para mais informações sobre comandos

=========================================================================================

"A evidência não mente, mas precisa ser encontrada." 🕵️



## 📁 **library/ebooks/portugues/**

### **library/ebooks/portugues/introducao-ao-hacking.txt**
```text
╔══════════════════════════════════════════════════════════════╗
║              INTRODUÇÃO AO HACKING ÉTICO                    ║
║                    Guia para Iniciantes                     ║
╚══════════════════════════════════════════════════════════════╝

┌──────────────────────────────────────────────────────────────┐
│  📘 CAPÍTULO 1: O QUE É HACKING?                             │
└──────────────────────────────────────────────────────────────┘

Hacking é a arte de explorar sistemas computacionais para entender
seu funcionamento, encontrar vulnerabilidades e, no caso do hacking
ético, ajudar a corrigir falhas de segurança.

┌──────────────────────────────────────────────────────────────┐
│  TIPOS DE HACKER                                             │
├──────────────────────────────────────────────────────────────┤
│  🟢 White Hat  - Hacker ético, trabalha com autorização      │
│  🔴 Black Hat  - Hacker malicioso, age sem autorização       │
│  🟡 Gray Hat   - Entre os dois, às vezes age sem autorização │
│  🔵 Blue Hat   - Trabalha para empresas testando sistemas    │
│  🟣 Red Team   - Simula ataques ofensivos                    │
│  🟠 Blue Team  - Defende e monitora sistemas                 │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  📘 CAPÍTULO 2: PRINCÍPIOS BÁSICOS                           │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  CONFIDENCIALIDADE                                           │
│  Garantir que apenas pessoas autorizadas acessem a informação│
├──────────────────────────────────────────────────────────────┤
│  INTEGRIDADE                                                  │
│  Garantir que a informação não foi alterada indevidamente    │
├──────────────────────────────────────────────────────────────┤
│  DISPONIBILIDADE                                              │
│  Garantir que a informação está acessível quando necessário  │
├──────────────────────────────────────────────────────────────┤
│  AUTENTICIDADE                                                │
│  Verificar se a informação vem de fonte confiável            │
├──────────────────────────────────────────────────────────────┤
│  NÃO-REPÚDIO                                                  │
│  Impedir que alguém negue ter feito algo                     │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  📘 CAPÍTULO 3: CICLO DO PENTEST                             │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  1. RECONHECIMENTO                                           │
│     Coletar informações sobre o alvo (OSINT)                 │
│     - Google Dorks                                           │
│     - Whois                                                  │
│     - DNS lookup                                             │
│     - Redes sociais                                          │
├──────────────────────────────────────────────────────────────┤
│  2. ESCANEAMENTO                                             │
│     Identificar portas abertas e serviços                    │
│     - Nmap                                                   │
│     - Masscan                                                │
│     - Nessus                                                 │
├──────────────────────────────────────────────────────────────┤
│  3. ENUMERAÇÃO                                               │
│     Coletar informações detalhadas dos serviços              │
│     - NetBIOS                                                │
│     - SNMP                                                   │
│     - LDAP                                                   │
├──────────────────────────────────────────────────────────────┤
│  4. EXPLORAÇÃO                                               │
│     Tentar explorar vulnerabilidades encontradas             │
│     - Metasploit                                             │
│     - Exploits manuais                                       │
├──────────────────────────────────────────────────────────────┤
│  5. PÓS-EXPLORAÇÃO                                           │
│     Manter acesso, escalar privilégios                       │
│     - Extrair hashes                                         │
│     - Instalar backdoors                                     │
├──────────────────────────────────────────────────────────────┤
│  6. RELATÓRIO                                                │
│     Documentar achados e recomendações                       │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  📘 CAPÍTULO 4: FERRAMENTAS ESSENCIAIS                       │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  KALI LINUX                                                  │
│  Distribuição Linux focada em testes de penetração          │
│  Inclui mais de 600 ferramentas pré-instaladas              │
│  Comandos básicos:                                           │
│  ├─ nmap -sV 192.168.1.1                                    │
│  ├─ msfconsole                                              │
│  ├─ wireshark                                               │
│  └─ aircrack-ng                                             │
├──────────────────────────────────────────────────────────────┤
│  NMAP                                                        │
│  Scanner de portas e descoberta de rede                     │
│  Exemplos:                                                   │
│  ├─ nmap -sS -p- 192.168.1.1                                │
│  ├─ nmap -sV -O 192.168.1.1                                 │
│  └─ nmap -sC -p 80,443 scanme.nmap.org                      │
├──────────────────────────────────────────────────────────────┤
│  METASPLOIT                                                  │
│  Framework para desenvolvimento e execução de exploits      │
│  Comandos:                                                   │
│  ├─ msfconsole                                              │
│  ├─ use exploit/multi/handler                               │
│  ├─ set PAYLOAD windows/meterpreter/reverse_tcp             │
│  └─ exploit                                                 │
├──────────────────────────────────────────────────────────────┤
│  WIRESHARK                                                   │
│  Analisador de protocolos de rede                           │
│  Filtros úteis:                                              │
│  ├─ http                                                     │
│  ├─ tcp contains "flag"                                      │
│  └─ ip.addr == 192.168.1.100                                │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  📘 CAPÍTULO 5: VULNERABILIDADES COMUNS                      │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  SQL INJECTION                                               │
│  Inserir comandos SQL maliciosos em entradas                │
│  Exemplo: ' OR '1'='1' --                                    │
│  Prevenção: Prepared Statements, validação de entrada       │
├──────────────────────────────────────────────────────────────┤
│  XSS (Cross-Site Scripting)                                 │
│  Injetar scripts maliciosos em páginas web                  │
│  Exemplo: <script>alert('XSS')</script>                     │
│  Prevenção: Escapar saída, CSP                              │
├──────────────────────────────────────────────────────────────┤
│  CSRF (Cross-Site Request Forgery)                          │
│  Forçar usuário a executar ações indesejadas                │
│  Prevenção: Tokens CSRF, SameSite cookies                   │
├──────────────────────────────────────────────────────────────┤
│  Buffer Overflow                                             │
│  Escrever mais dados que o buffer suporta                   │
│  Prevenção: Linguagens seguras, canários, ASLR              │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  📘 CAPÍTULO 6: CRIPTOGRAFIA BÁSICA                          │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  HASH                                                        │
│  Função unidirecional que gera impressão digital            │
│  Exemplos: MD5, SHA-1, SHA-256                              │
│  Uso: armazenar senhas, verificar integridade               │
├──────────────────────────────────────────────────────────────┤
│  CRIPTOGRAFIA SIMÉTRICA                                      │
│  Mesma chave para cifrar e decifrar                         │
│  Exemplos: AES, DES, ChaCha20                               │
│  Uso: cifrar arquivos, comunicações                         │
├──────────────────────────────────────────────────────────────┤
│  CRIPTOGRAFIA ASSIMÉTRICA                                    │
│  Chaves diferentes: pública e privada                       │
│  Exemplos: RSA, ECC                                         │
│  Uso: TLS/SSL, assinaturas digitais                         │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  📘 CAPÍTULO 7: BOAS PRÁTICAS                                │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  ✅ Sempre tenha autorização por escrito antes de testar    │
│  ✅ Documente todos os passos da investigação               │
│  ✅ Use ambientes isolados (VMs, Docker)                    │
│  ✅ Mantenha as ferramentas atualizadas                      │
│  ✅ Participe de comunidades e CTFs                         │
│  ✅ Estude constantemente                                   │
│  ✅ Compartilhe conhecimento                                │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  📚 RECURSOS PARA ESTUDO                                     │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  SITES                                                       │
│  ├─ Hack The Box (hackthebox.com)                           │
│  ├─ TryHackMe (tryhackme.com)                               │
│  ├─ PentesterLab (pentesterlab.com)                         │
│  └─ Root-Me (root-me.org)                                   │
├──────────────────────────────────────────────────────────────┤
│  CURSOS GRATUITOS                                            │
│  ├─ Cybrary                                                  │
│  ├─ PortSwigger Web Security Academy                        │
│  └─ OverTheWire                                              │
├──────────────────────────────────────────────────────────────┤
│  YOUTUBE                                                     │
│  ├─ IppSec                                                   │
│  ├─ The Cyber Mentor                                         │
│  ├─ John Hammond                                             │
│  └─ Gabriel Pato (PT-BR)                                     │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  🏁 CONCLUSÃO                                                 │
└──────────────────────────────────────────────────────────────┘

Lembre-se: hacking é uma jornada, não um destino. Comece com o
básico, pratique diariamente, participe de CTFs e nunca desista.

Como diz o lema deste projeto:

    "Alguns desafios não existem ainda.
     O verdadeiro investigador cria os próprios."

Agora é com você. Mãos ao teclado! 🚀


