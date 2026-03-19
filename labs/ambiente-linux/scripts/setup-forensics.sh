#!/bin/bash

echo "========================================="
echo "🔧 CONFIGURANDO AMBIENTE FORENSE"
echo "========================================="

# Cores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Criar estrutura de diretórios
echo -e "${YELLOW}[1/6] Criando diretórios...${NC}"
mkdir -p /cases/{imagens,memoria,disco,rede,logs}
mkdir -p /tools/{forense,estego,cripto,rede}
mkdir -p /evidence/{case-001,case-002,case-003}

# Configurar permissões
chmod -R 755 /cases
chmod -R 755 /tools
chmod -R 755 /evidence

# Criar casos de exemplo
echo -e "${YELLOW}[2/6] Criando casos de exemplo...${NC}"
cat > /evidence/case-001/README.md << EOF
# Caso 001 - Data Breach
Data: 2024-03-15
Status: Em andamento
Descrição: Vazamento de dados de clientes
Evidências: logs/access.log, disco/backup.dd
EOF

cat > /evidence/case-002/README.md << EOF
# Caso 002 - Ransomware
Data: 2024-03-16
Status: Em andamento
Descrição: Máquina criptografada por ransomware
Evidências: memoria/ram.raw, disco/disk.dd
EOF

cat > /evidence/case-003/README.md << EOF
# Caso 003 - Insider Threat
Data: 2024-03-17
Status: Em andamento
Descrição: Funcionário exfiltrou dados
Evidências: rede/captura.pcap, logs/auth.log
EOF

# Criar arquivos de log simulados
echo -e "${YELLOW}[3/6] Criando logs simulados...${NC}"
cat > /evidence/case-001/logs/access.log << EOF
192.168.1.100 - - [15/Mar/2024:10:15:23] "GET /admin HTTP/1.1" 401 123
192.168.1.100 - - [15/Mar/2024:10:15:24] "POST /login HTTP/1.1" 200 456
192.168.1.105 - - [15/Mar/2024:10:16:01] "GET /backup.zip HTTP/1.1" 200 999999
EOF

cat > /evidence/case-002/logs/processos.txt << EOF
PID 1337 - malware.exe - CPU 95% - Conexão 185.165.29.101:4444
PID 1234 - svchost.exe - CPU 2% - Legítimo
EOF

# Criar wordlists
echo -e "${YELLOW}[4/6] Criando wordlists...${NC}"
mkdir -p /tools/wordlists
cat > /tools/wordlists/senhas.txt << EOF
admin
123456
password
12345678
qwerty
123456789
12345
1234
111111
1234567
dragon
football
baseball
welcome
monkey
abc123
letmein
trustno1
master
sunshine
EOF

# Configurar aliases úteis
echo -e "${YELLOW}[5/6] Configurando aliases...${NC}"
cat >> /home/vagrant/.bashrc << EOF

# Aliases forenses
alias lsf='ls -la | grep -E "\.(dd|raw|pcap|mem)"'
alias cases='cd /evidence'
alias tools='cd /tools'
alias generate-ctf='/scripts/generate-ctf.sh'
alias ctf-ls='ls -la /cases/generated'
alias ctf-new='generate-ctf && ctf-ls'

# Aliases de análise
alias strings='strings -a'
alias hex='xxd'
alias hexdump='xxd'
alias exif='exiftool'

# Mensagem de boas-vindas
echo ""
echo "🧪 LABORATÓRIO FORENSE - Não Desista Dev"
echo "========================================"
echo "📁 cases      = /evidence (casos reais)"
echo "🎯 generate-ctf = gerar novos puzzles"
echo "🔧 tools      = /tools (ferramentas)"
echo "📌 ctf-ls     = listar puzzles gerados"
echo "========================================"
EOF

# Criar alguns arquivos de exemplo para análise
echo -e "${YELLOW}[6/6] Criando arquivos de exemplo...${NC}"

# Imagem com flag escondida
echo "flag{exemplo_forense_$(openssl rand -hex 4)}" > /cases/imagens/flag.txt
convert -size 300x200 xc:gray +noise random /cases/imagens/exemplo.jpg
steghide embed -cf /cases/imagens/exemplo.jpg -ef /cases/imagens/flag.txt -pf "" > /dev/null 2>&1
rm /cases/imagens/flag.txt

# PCAP de exemplo
cat > /cases/rede/exemplo.pcap << EOF
Simulação de PCAP com tráfego suspeito
IP Origem: 192.168.1.100 -> IP Destino: 185.165.29.101
Porta: 4444
Dados: flag{exfiltracao_simulada}
EOF

# Dump de memória simulado
dd if=/dev/zero of=/cases/memoria/exemplo.raw bs=1M count=10 2>/dev/null
echo "flag{memoria_analisada}" >> /cases/memoria/exemplo.raw

echo -e "${GREEN}=========================================${NC}"
echo -e "${GREEN}✅ AMBIENTE FORENSE CONFIGURADO!${NC}"
echo -e "${GREEN}=========================================${NC}"
echo ""
echo "Comandos disponíveis:"
echo "  generate-ctf  - Gerar novos puzzles"
echo "  ctf-ls       - Listar puzzles gerados"
echo "  cases        - Ir para diretório de casos"
echo "  tools        - Ir para diretório de ferramentas"
echo ""
