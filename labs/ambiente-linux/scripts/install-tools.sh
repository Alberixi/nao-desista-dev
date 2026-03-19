#!/bin/bash
set -e

echo "========================================="
echo "LABORATÓRIO FORENSE - NAO DESISTA DEV"
echo "========================================="

# cores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

check_error() {
if [ $? -eq 0 ]; then
echo -e "${GREEN}OK - $1${NC}"
else
echo -e "${RED}ERRO - $1${NC}"
fi
}

echo -e "${YELLOW}Atualizando sistema...${NC}"

apt-get update -y
apt-get upgrade -y

# =========================
# BASE
# =========================

echo -e "${YELLOW}Ferramentas base...${NC}"

apt-get install -y \
wget curl git vim nano htop tree unzip zip \
gcc make build-essential \
python3 python3-pip python3-dev python3-venv \
ruby-full openjdk-17-jre \
net-tools dnsutils whois \
software-properties-common \
apt-transport-https ca-certificates gnupg

# =========================
# REDE
# =========================

echo -e "${YELLOW}Ferramentas de rede...${NC}"

apt-get install -y \
wireshark tshark \
nmap masscan \
tcpdump traceroute \
netcat socat ncat \
hydra medusa crunch \
nikto snort \
tcpreplay tcptrace ngrep

# =========================
# FORENSE
# =========================

echo -e "${YELLOW}Ferramentas forenses...${NC}"

apt-get install -y \
sleuthkit autopsy \
foremost scalpel \
testdisk photorec \
ddrescue dcfldd dc3dd \
afflib-tools ewf-tools \
hashdeep ssdeep \
guymager

# =========================
# ESTEGANOGRAFIA
# =========================

echo -e "${YELLOW}Esteganografia...${NC}"

apt-get install -y \
steghide outguess \
binwalk exiftool \
pngcheck jpegoptim optipng

gem install zsteg

# =========================
# CRIPTO
# =========================

echo -e "${YELLOW}Criptografia...${NC}"

apt-get install -y \
openssl gnupg \
hashcat john \
fcrackzip rarcrack \
pdfcrack truecrack

# =========================
# AUDIO FORENSE
# =========================

echo -e "${YELLOW}Audio forense...${NC}"

apt-get install -y \
audacity sonic-visualiser \
sox mpg123 mp3info \
mediainfo ffmpeg id3v2

# =========================
# IMAGEM
# =========================

echo -e "${YELLOW}Imagem...${NC}"

apt-get install -y \
imagemagick graphicsmagick \
gimp feh eog \
dcraw ufraw \
exiv2

# =========================
# PDF FORENSE
# =========================

echo -e "${YELLOW}PDF tools...${NC}"

apt-get install -y \
poppler-utils pdfgrep

pip3 install pdfid peepdf

# =========================
# MEMORIA
# =========================

echo -e "${YELLOW}Memoria forense...${NC}"

apt-get install -y \
volatility yara radare2

pip3 install volatility3 yara-python

# =========================
# PYTHON HACKING
# =========================

echo -e "${YELLOW}Ferramentas Python...${NC}"

pip3 install \
scapy \
pycryptodome \
cryptography \
pillow \
numpy matplotlib pandas \
requests beautifulsoup4 selenium \
paramiko impacket \
pwntools angr ropper \
keystone-engine capstone \
r2pipe lief pefile pyelftools

# =========================
# STEG EXTRA
# =========================

echo -e "${YELLOW}Ferramentas extras de stego...${NC}"

git clone https://github.com/zardus/ctf-tools /opt/ctf-tools

# =========================
# DOCKER
# =========================

echo -e "${YELLOW}Docker...${NC}"

curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
usermod -aG docker vagrant

# =========================
# METASPLOIT
# =========================

echo -e "${YELLOW}Metasploit...${NC}"

curl https://raw.githubusercontent.com/rapid7/metasploit-omnibus/master/config/templates/metasploit-framework-wrappers/msfupdate.erb > msfinstall

chmod +x msfinstall

./msfinstall

# =========================
# LIMPEZA
# =========================

apt-get autoremove -y
apt-get autoclean -y

echo "========================================="
echo "LABORATORIO INSTALADO"
echo "========================================="

echo "Ferramentas instaladas:"
echo "Forense: sleuthkit autopsy volatility"
echo "Rede: wireshark nmap tcpdump"
echo "Stego: steghide zsteg binwalk"
echo "Crypto: hashcat john"
echo "Python hacking tools"
echo ""

echo "Acesse com:"
echo "vagrant ssh"
