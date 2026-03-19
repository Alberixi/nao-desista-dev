# 🖼️ Tutorial de Esteganografia

## O que é Esteganografia?

Esteganografia é a técnica de esconder informações dentro de outros arquivos (imagens, áudios, vídeos) de forma que a existência da mensagem seja camuflada. Diferente da criptografia, que torna a mensagem ilegível, a esteganografia a torna invisível.

## 📌 Conceitos Básicos

### 1. LSB (Least Significant Bit)
O método mais comum em imagens. Altera o último bit de cada pixel para armazenar dados.

**Exemplo:**

Pixel original: 10101100 10110011 10101101
Dado a esconder: 1 0 1
Pixel modificado: 10101101 10110010 10101101



### 2. Metadados (EXIF)
Dados podem ser escondidos nos metadados de imagens (autor, câmera, GPS, etc.)

### 3. Esteganografia em Áudio
- **Espectrograma**: Mensagens visíveis nas frequências
- **LSB em áudio**: Bits menos significativos das amostras
- **Eco**: Informação codificada em ecos

## 🛠️ Ferramentas

### Para Imagens

# Steghide
steghide embed -cf imagem.jpg -ef mensagem.txt -pf senha
steghide extract -sf imagem.jpg -pf senha

# zsteg (PNG/BMP)
zsteg imagem.png

# Stegsolve (análise visual)
java -jar stegsolve.jar

# Exiftool (metadados)
exiftool imagem.jpg

========================================================================================

Para Áudio
# Sonic Visualiser (espectrograma)
sonic-visualiser audio.wav

# Audacity (análise e LSB)
audacity audio.wav

# mp3stego
mp3stego -X -P senha audio.mp3


========================================================================================
Para PDFs e Documentos

# pdfdetach
pdfdetach -saveall documento.pdf

# strings
strings documento.pdf | grep flag

========================================================================================
Técnicas de Detecção
1. Análise Visual
Inspecionar planos de bits em imagens (Stegsolve)

Verificar diferenças sutis nas cores

2. Análise Estatística
Testes qui-quadrado para LSB

Análise de entropia



========================================================================================
3. Ferramentas Automáticas

# stegdetect
stegdetect imagem.jpg

# stegbreak
stegbreak -r rules.ini -f imagem.jpg

========================================================================================
Exemplos Práticos
Exemplo 1: Esconder texto em imagem com steghide

# Criar mensagem
echo "flag{esteganografia_basica}" > mensagem.txt

# Esconder na imagem
steghide embed -cf gato.jpg -ef mensagem.txt -pf ""

# Extrair depois
steghide extract -sf gato.jpg -pf ""

========================================================================================
Exemplo 2: LSB manual com Python

from PIL import Image

def esconder_mensagem(imagem, mensagem):
    img = Image.open(imagem)
    pixels = list(img.getdata())

    # Converter mensagem para binário
    bin_mensagem = ''.join(format(ord(c), '08b') for c in mensagem)

    # Esconder nos LSBs
    novos_pixels = []
    for i, pixel in enumerate(pixels):
        if i < len(bin_mensagem):
            # Modificar LSB do vermelho
            novo_pixel = (pixel[0] & 0xFE) | int(bin_mensagem[i])
            novos_pixels.append((novo_pixel, pixel[1], pixel[2]))
        else:
            novos_pixels.append(pixel)

    # Salvar nova imagem
    img.putdata(novos_pixels)
    img.save('imagem_com_segredo.png')

========================================================================================
Exemplo 3: Espectrograma em áudio

# No Audacity:
# 1. Abrir arquivo de áudio
# 2. Menu: View > Spectrogram
# 3. Ajustar frequências
# 4. Mensagem aparece como texto visual
========================================================================================
 Puzzles Relacionados
Puzzle	Técnica
01	Espectrograma em áudio
03	LSB em imagens
11	Esteganografia LSB
12	Áudio espectro
21	Esteganografia avançada
28	Múltiplas camadas
📚 Guia Passo a Passo
Para puzzles de imagem:
Verifique metadados: exiftool imagem.jpg

Analise visualmente: Stegsolve

Teste ferramentas comuns: steghide, zsteg

Varredura binária: binwalk imagem.jpg

Extraia LSB: Scripts Python ou ferramentas dedicadas

Para puzzles de áudio:
Escute: Pode ter mensagem em morse

Espectrograma: Audacity/Sonic Visualiser

LSB de áudio: Python com numpy

Análise de eco: Ferramentas especializadas

Para PDFs/Documentos:
strings: strings documento.pdf | grep flag

Anexos: pdfdetach -saveall documento.pdf

Metadados: exiftool documento.pdf

Análise de streams: pdf-parser documento.pdf

⚠️ Boas Práticas
✅ Sempre faça backup dos originais

✅ Use senhas fortes quando necessário

✅ Teste a extração antes de considerar concluído

✅ Combine técnicas para maior segurança

🎓 Exercícios
Básico: Esconda "flag{teste}" em uma imagem PNG

Intermediário: Esconda uma imagem dentro de outra

Avançado: Combine LSB + criptografia XOR

Steganography Guide - Wikipedia <== https://en.wikipedia.org/wiki/Steganography

LSB Steganography - Tutorial    <== https://towardsdatascience.com/lsb-steganography

Steghide Manual                 <== https://steghide.sourceforge.net/documentation.php

========================================================================================
A arte de esconder é tão importante quanto a arte de revelar." 🕵️


## 📝 docs/tutoriais/forense.md

markdown
# 🔍 Tutorial de Forense Digital

## O que é Forense Digital?

Forense digital é a ciência de investigar dispositivos eletrônicos para encontrar evidências de crimes ou incidentes. Envolve recuperar dados deletados, analisar sistemas de arquivos, examinar memória RAM e investigar tráfego de rede.

## 📌 Áreas da Forense

### 1. Forense de Disco
- Recuperação de arquivos deletados
- Análise de sistemas de arquivos (NTFS, ext4, FAT32)
- Carving de arquivos por assinaturas

### 2. Forense de Memória (RAM)
- Análise de processos em execução
- Extração de senhas e chaves
- Detecção de malware residente

### 3. Forense de Rede
- Análise de PCAPs
- Reconstrução de fluxos TCP
- Identificação de ataques

### 4. Forense de Dispositivos Móveis
- Extração de dados de celulares
- Análise de backups
- Recuperação de mensagens deletadas

## 🛠️ Ferramentas Essenciais

### Para Disco
```bash
# The Sleuth Kit
fls -r imagem.dd                # Listar arquivos
icat imagem.dd 123 > arquivo    # Extrair por inode
fsstat imagem.dd                 # Info do sistema

# Foremost (carving)
foremost -i imagem.dd -o output/

# Scalpel
scalpel imagem.dd -o output/

# TestDisk / PhotoRec
testdisk imagem.dd
photorec imagem.dd

========================================================================================
Para Memória

# Volatility
volatility -f memory.raw imageinfo
volatility -f memory.raw --profile=Win10x64 pslist
volatility -f memory.raw --profile=Win10x64 cmdline
volatility -f memory.raw --profile=Win10x64 netscan
volatility -f memory.raw --profile=Win10x64 dumpfiles -Q 0x... -D ./

# Rekall
rekall -f memory.raw pslist

========================================================================================
Para Rede

# Wireshark (GUI)
wireshark captura.pcap

# tshark (CLI)
tshark -r captura.pcap -Y "http" -T fields -e ip.src -e ip.dst -e http.request.uri

# tcpflow (reconstruir fluxos)
tcpflow -r captura.pcap

# NetworkMiner (GUI)
mono NetworkMiner.exe -f captura.pcap

========================================================================================
Para Dispositivos Móveis

# ABE (Android Backup Extractor)
java -jar abe.jar unpack backup.ab backup.tar

# sqlite3 (analisar bancos)
sqlite3 /data/data/com.whatsapp/databases/msgstore.db "SELECT * FROM messages;"

🔍 Técnicas Fundamentais
1. Carving de Arquivos
Baseado em assinaturas (magic numbers):

Arquivo	Assinatura (hex)
JPEG	FF D8 FF
PNG	89 50 4E 47
PDF	25 50 44 46
ZIP	50 4B 03 04
ELF	7F 45 4C 46

2. Análise de Metadados

# exiftool para imagens
exiftool foto.jpg

# stat para arquivos
stat documento.txt

# mddeep para hashes
md5sum imagem.dd
sha256sum imagem.dd

3. Recuperação de Deletados

# Sistema de arquivos ext4
extundelete /dev/sda1 --restore-all

# NTFS
ntfsundelete /dev/sda1 -s -m *.txt

🧪 Exemplos Práticos
Exemplo 1: Analisar imagem de disco

# 1. Identificar partições
mmls imagem.dd

# 2. Listar arquivos
fls -o 2048 imagem.dd

# 3. Extrair arquivo específico
icat -o 2048 imagem.dd 12 > recuperado.txt

# 4. Carving de arquivos deletados
foremost -i imagem.dd -o recuperados/

========================================================================================
Exemplo 2: Analisar dump de memória

# 1. Identificar perfil
volatility -f memory.raw imageinfo

# 2. Listar processos
volatility -f memory.raw --profile=Win10x64 pslist

# 3. Ver conexões de rede
volatility -f memory.raw --profile=Win10x64 netscan

# 4. Extrair linhas de comando
volatility -f memory.raw --profile=Win10x64 cmdline

# 5. Dump de processo suspeito
volatility -f memory.raw --profile=Win10x64 procdump -p 1337 -D ./

Exemplo 3: Analisar PCAP

# 1. Estatísticas básicas
tshark -r captura.pcap -z io,stat,0

# 2. Filtrar por protocolo
tshark -r captura.pcap -Y "http"

# 3. Extrair arquivos
tshark -r captura.pcap --export-objects http,./

# 4. Reconstruir fluxo TCP
tshark -r captura.pcap -q -z follow,tcp,ascii,0


Exemplo 4: Recuperar mensagens WhatsApp

# 1. Extrair backup Android
java -jar abe.jar unpack backup.ab backup.tar

# 2. Extrair tar
tar xf backup.tar

# 3. Analisar banco SQLite
sqlite3 apps/com.whatsapp/db/msgstore.db "SELECT * FROM messages WHERE deleted=1;"

🎯 Puzzles Relacionados
Puzzle	Técnica Forense
06	Metadados de imagem
07	Strings ocultas
09	ZIP com senha
17	Forense de disco
18	Análise de PCAP
22	Forense de memória
31	Forense Android
41	Forense IoT
42	Cloud forensics
📊 Cadeia de Custódia
Documentação obrigatória:
Identificação do caso: Número, data, investigador

Dispositivo: Modelo, número de série, capacidade

Aquisição: Método, hash (MD5/SHA256), data/hora

Análise: Ferramentas usadas, procedimentos

Resultados: Evidências encontradas

Relatório: Conclusões e assinaturas

Exemplo de hash para integridade:

# Calcular hash antes e depois
sha256sum imagem.dd > imagem.hash

# Verificar integridade
sha256sum -c imagem.hash

⚠️ Boas Práticas
✅ Sempre use write blocker em discos originais

✅ Trabalhe com cópias, nunca no original

✅ Documente cada passo da investigação

✅ Calcule hashes para garantir integridade

✅ Mantenha cadeia de custódia rigorosa

✅ Use ambientes isolados para análise

✅ Atualize ferramentas regularmente

🧪 Exercícios Práticos
Básico: Recupere um arquivo deletado de uma imagem de disco

Intermediário: Encontre um processo malicioso em dump de memória

Avançado: Reconstrua uma conversa a partir de um PCAP

📖 Referências
NIST Computer Forensics   <== https://www.nist.gov/computer-forensics

SANS Forensics            <== https://www.sans.org/cyber-security-courses/advanced-incident-response-threat-hunting-training/

Volatility Documentation  <== https://github.com/volatilityfoundation/volatility/wiki

The Sleuth Kit Wiki       <== https://wiki.sleuthkit.org/index.php?title=The_Sleuth_Kit

========================================================================================
"A verdade está nos bits - basta saber onde procurar." 🔎


## 📝 docs/tutoriais/criptografia.md

```markdown
# 🔐 Tutorial de Criptografia

## O que é Criptografia?

Criptografia é a prática de proteger informações através da transformação em formato ilegível (cifrado), que só pode ser revertido com uma chave específica. É a base da segurança digital moderna.

## 📌 Conceitos Fundamentais

### 1. Criptografia Simétrica
Mesma chave para cifrar e decifrar.

**Exemplos:**
- AES (Advanced Encryption Standard)
- DES (Data Encryption Standard)
- RC4
- ChaCha20

### 2. Criptografia Assimétrica
Chaves diferentes: pública (para cifrar) e privada (para decifrar).

**Exemplos:**
- RSA
- ECC (Elliptic Curve Cryptography)
- Diffie-Hellman

### 3. Funções Hash
Funções unidirecionais que geram uma impressão digital.

**Exemplos:**
- MD5 (inseguro)
- SHA-1 (inseguro)
- SHA-256
- SHA-3

## 🛠️ Ferramentas

### OpenSSL
```bash
# Gerar hash
echo -n "mensagem" | openssl dgst -sha256

# Cifrar com AES
echo "mensagem secreta" | openssl enc -aes-256-cbc -base64 -k senha123

# Decifrar
echo "cifrado" | openssl enc -aes-256-cbc -base64 -d -k senha123

# Gerar chave RSA
openssl genrsa -out chave_privada.pem 2048
openssl rsa -in chave_privada.pem -pubout -out chave_publica.pem

========================================================================================
HashCat / John

# Identificar hash
hash-identifier 5f4dcc3b5aa765d61d8327deb882cf99

# Quebrar com wordlist
john --format=raw-md5 --wordlist=rockyou.txt hash.txt
hashcat -m 0 -a 0 hash.txt rockyou.txt

# Brute force
hashcat -m 0 -a 3 hash.txt ?a?a?a?a?a?a

Python (Criptografia)

import hashlib
from Crypto.Cipher import AES
import base64

# Hash
hash = hashlib.sha256(b"mensagem").hexdigest()

# AES
key = b"minha_chave_16b"
cipher = AES.new(key, AES.MODE_EAX)
ciphertext, tag = cipher.encrypt_and_digest(b"mensagem")

# Base64
encoded = base64.b64encode(b"mensagem")
decoded = base64.b64decode(encoded)

🔍 Tipos de Cifras Comuns
1. Cifras Clássicas

# Cifra de César
def cesar(texto, deslocamento):
    resultado = ""
    for c in texto:
        if c.isalpha():
            ascii_offset = 65 if c.isupper() else 97
            resultado += chr((ord(c) - ascii_offset + deslocamento) % 26 + ascii_offset)
        else:
            resultado += c
    return resultado

# ROT13 (César com 13)
def rot13(texto):
    return texto.translate(str.maketrans(
        "ABCDEFGHIJKLMabcdefghijklmNOPQRSTUVWXYZnopqrstuvwxyz",
        "NOPQRSTUVWXYZnopqrstuvwxyzABCDEFGHIJKLMabcdefghijklm"
    ))


    2. Base64


    import base64

# Codificar
mensagem = "flag{exemplo}"
codificada = base64.b64encode(mensagem.encode()).decode()
print(codificada)  # ZmxhZ3tleGVtcGxvfQ==

# Decodificar
decodificada = base64.b64decode(codificada).decode()
print(decodificada)  # flag{exemplo}

3. XOR

def xor_encrypt(texto, chave):
    resultado = ""
    for i, c in enumerate(texto):
        resultado += chr(ord(c) ^ ord(chave[i % len(chave)]))
    return resultado

# XOR é reversível com a mesma chave
texto = "mensagem"
chave = "key"
cifrado = xor_encrypt(texto, chave)
decifrado = xor_encrypt(cifrado, chave)
print(decifrado)  # mensagem

4. RSA (simplificado)


# RSA com números pequenos (APENAS PARA APRENDIZADO)
p = 61
q = 53
n = p * q
phi = (p-1) * (q-1)
e = 17  # chave pública

# Calcular chave privada d (e*d ≡ 1 mod phi)
d = pow(e, -1, phi)

# Cifrar mensagem (número)
mensagem = 42
cifrado = pow(mensagem, e, n)
decifrado = pow(cifrado, d, n)
print(decifrado)  # 42

🧪 Exemplos Práticos
Exemplo 1: Decodificar Base64

# String: Vm0wd2QyUXlVWGxV
echo "Vm0wd2QyUXlVWGxV" | base64 -d
# Resultado: use_steghide_na_imagem

Exemplo 2: Quebrar hash MD5

# Hash: 5f4dcc3b5aa765d61d8327deb882cf99
echo "5f4dcc3b5aa765d61d8327deb882cf99" > hash.txt
john --format=raw-md5 --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
# Resultado: password

Exemplo 3: Decifrar XOR

cifrado_hex = "1b0e1b0f1e1a0c1d0b1e0f1a0c1b0e1b0f1e"
chave = 0x42

# Converter hex para bytes
bytes_cifrado = bytes.fromhex(cifrado_hex)

# Aplicar XOR
mensagem = ''.join(chr(b ^ chave) for b in bytes_cifrado)
print(mensagem)  # flag{xor_e_reversivel}

Exemplo 4: JWT (JSON Web Token)

import jwt

# Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4ifQ...
token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4ifQ..."

# Decodificar sem verificar
decoded = jwt.decode(token, options={"verify_signature": False})
print(decoded)  # {'user': 'admin'}

# Ataque de algoritmo none
token_none = jwt.encode({"user": "admin"}, algorithm="none")

🎯 Puzzles Relacionados
Puzzle	Técnica
02	Base64 básico
03	ROT13
04	Hexadecimal
05	Binário
13	Base64 multicamadas
14	XOR
15	RSA básico
16	Hash identify
26	Crypto wallets
29	Encryption cracking
38	JWT tokens
49	Quantum crypto
📊 Comparação de Algoritmos
Algoritmo	Tipo	Tamanho da Chave	Uso Comum
AES	Simétrica	128/256 bits	Criptografia de dados
RSA	Assimétrica	2048+ bits	Chaves/SSL
SHA-256	Hash	-	Integridade
MD5	Hash	-	Legado (inseguro)
Base64	Codificação	-	Transferência de dados
⚠️ Ataques Comuns
1. Força Bruta
Tentar todas as combinações possíveis.

2. Dicionário/Wordlist
Usar listas de senhas comuns.

3. Rainbow Tables
Tabelas pré-computadas de hashes.

4. Side-Channel
Explorar informações físicas (tempo, consumo).

5. Ataques Específicos
RSA: Fatoração (para chaves pequenas)

XOR: Análise de frequência

JWT: Algoritmo "none"

🧪 Exercícios
Básico: Decodifique "ZmxhZ3t0ZXN0ZX0=" (Base64)

Intermediário: Quebre o hash MD5 de uma palavra de 4 letras

Avançado: Implemente um ataque de dicionário para XOR

📖 Referências
Cryptography 101    <== https://www.crypto101.io/

OpenSSL Cookbook    <== https://www.feistyduck.com/books/openssl-cookbook/

HashCat Wiki        <== https://hashcat.net/wiki/

JWT.io              <== https://jwt.io/
========================================================================================
"A criptografia não é sobre esconder, é sobre confiar." 🔐


Por hoje, completei mais 3 tutoriais:
- ✅ esteganografia.md
- ✅ forense.md
- ✅ criptografia.md

Amanhã continuamos com os últimos 2 tutoriais (**redes.md** e **web-security.md**) e depois as **referencias/**.

Estamos quase lá, mestre! 🚀

========================================================================================




========================================================================================
