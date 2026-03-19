#!/bin/bash

# ================================
# GERADOR DE PUZZLES CTF
# ================================
# "Alguns desafios não existem ainda.
#  O verdadeiro investigador cria os próprios."
# ================================

echo "================================="
echo "🧩 GERADOR DE PUZZLES CTF"
echo "================================="
echo ""

OUTPUT="/cases/generated"
mkdir -p $OUTPUT

echo "[📁] Diretório de saída: $OUTPUT"
echo ""

# ================================
# PUZZLE 1: BASE64
# ================================
echo "[1] 🔐 Gerando desafio BASE64"
FLAG="flag{base64_$(openssl rand -hex 4)}"
echo $FLAG | base64 > $OUTPUT/base64.txt
echo "    ✅ Desafio base64 criado: base64.txt"
echo "    🔑 Flag: $FLAG"
echo ""

# ================================
# PUZZLE 2: HASH MD5
# ================================
echo "[2] 🔢 Gerando desafio HASH MD5"
FLAG="flag{hash_$(openssl rand -hex 4)}"
echo -n $FLAG | md5sum | cut -d " " -f1 > $OUTPUT/hash.txt
echo "    ✅ Desafio hash criado: hash.txt"
echo "    🔑 Flag: $FLAG"
echo ""

# ================================
# PUZZLE 3: ZIP PROTEGIDO
# ================================
echo "[3] 📦 Gerando desafio ZIP com senha"
SENHA=$(openssl rand -base64 6 | tr -dc 'a-zA-Z0-9' | head -c8)
FLAG="flag{zip_$(openssl rand -hex 4)}"
echo $FLAG > $OUTPUT/secret.txt
zip -P $SENHA $OUTPUT/protected.zip $OUTPUT/secret.txt > /dev/null 2>&1
rm $OUTPUT/secret.txt
echo "    ✅ Desafio zip criado: protected.zip"
echo "    🔑 Senha: $SENHA"
echo "    🔑 Flag: $FLAG"
echo ""

# ================================
# PUZZLE 4: EXIF METADADOS
# ================================
echo "[4] 🖼️ Gerando desafio EXIF"
FLAG="flag{exif_$(openssl rand -hex 4)}"
convert -size 400x200 xc:white $OUTPUT/image.jpg > /dev/null 2>&1
exiftool -Comment="$FLAG" $OUTPUT/image.jpg > /dev/null 2>&1
echo "    ✅ Desafio exif criado: image.jpg"
echo "    🔑 Flag: $FLAG"
echo ""

# ================================
# PUZZLE 5: STRINGS OCULTAS
# ================================
echo "[5] 📝 Gerando desafio STRINGS"
FLAG="flag{strings_$(openssl rand -hex 4)}"
echo "Este é um arquivo binário com dados normais." > $OUTPUT/strings.bin
echo "Mas há uma mensagem escondida aqui: $FLAG" >> $OUTPUT/strings.bin
echo "Outro texto qualquer para completar." >> $OUTPUT/strings.bin
echo "    ✅ Desafio strings criado: strings.bin"
echo "    🔑 Flag: $FLAG"
echo ""

# ================================
# PUZZLE 6: XOR SIMPLES
# ================================
echo "[6] 🔄 Gerando desafio XOR"
FLAG="flag{xor_$(openssl rand -hex 4)}"
KEY=$(openssl rand -hex 1)

# XOR em Python para simplicidade
python3 << EOF > $OUTPUT/xor.bin
import binascii
flag = "$FLAG"
key = $((16#KEY))
resultado = ''.join(chr(ord(c) ^ key) for c in flag)
print(resultado)
EOF

echo "    ✅ Desafio xor criado: xor.bin"
echo "    🔑 Chave: $(printf "%d" $((16#$KEY)))"
echo "    🔑 Flag: $FLAG"
echo ""

# ================================
# PUZZLE 7: HEXADECIMAL
# ================================
echo "[7] 0x Gerando desafio HEXADECIMAL"
FLAG="flag{hex_$(openssl rand -hex 4)}"
echo $FLAG | xxd -p > $OUTPUT/hex.txt
echo "    ✅ Desafio hex criado: hex.txt"
echo "    🔑 Flag: $FLAG"
echo ""

# ================================
# PUZZLE 8: BINÁRIO
# ================================
echo "[8] 01 Gerando desafio BINÁRIO"
FLAG="flag{bin_$(openssl rand -hex 4)}"
echo $FLAG | xxd -b | cut -d' ' -f2-7 > $OUTPUT/binario.txt
echo "    ✅ Desafio binário criado: binario.txt"
echo "    🔑 Flag: $FLAG"
echo ""

# ================================
# PUZZLE 9: ROT13
# ================================
echo "[9] 🔄 Gerando desafio ROT13"
FLAG="flag{rot13_$(openssl rand -hex 4)}"
echo $FLAG | tr 'A-Za-z' 'N-ZA-Mn-za-m' > $OUTPUT/rot13.txt
echo "    ✅ Desafio rot13 criado: rot13.txt"
echo "    🔑 Flag: $FLAG"
echo ""

# ================================
# PUZZLE 10: PCAP SIMULADO
# ================================
echo "[10] 🌐 Gerando desafio PCAP"
FLAG="flag{pcap_$(openssl rand -hex 4)}"

# Criar um PCAP simples com tcpdump
cat << EOF > $OUTPUT/http.pcap
Simulação de PCAP com a flag: $FLAG
Para análise real, capture tráfego com tcpdump
EOF

echo "    ✅ Desafio pcap criado: http.pcap"
echo "    🔑 Flag: $FLAG"
echo ""

# ================================
# RESUMO FINAL
# ================================
echo "================================="
echo "📊 RESUMO DOS PUZZLES GERADOS"
echo "================================="
echo "📁 Local: $OUTPUT"
echo ""
echo "📄 Arquivos criados:"
ls -1 $OUTPUT | sed 's/^/   📌 /'
echo ""
echo "🔑 Flags geradas:"
grep -r "flag{" $OUTPUT/* 2>/dev/null | sed 's/^/   🏷️ /'
echo ""
echo "================================="
echo "🧪 Comandos úteis para resolver:"
echo "================================="
echo "🔐 base64:        cat $OUTPUT/base64.txt | base64 -d"
echo "🔢 hash:          cat $OUTPUT/hash.txt"
echo "📦 zip:           unzip -P [senha] $OUTPUT/protected.zip"
echo "🖼️ exif:          exiftool $OUTPUT/image.jpg | grep Comment"
echo "📝 strings:       strings $OUTPUT/strings.bin | grep flag"
echo "🔄 xor:           python3 xor_decoder.py $OUTPUT/xor.bin [chave]"
echo "0x hex:           cat $OUTPUT/hex.txt | xxd -p -r"
echo "01 bin:           cat $OUTPUT/binario.txt"
echo "🔄 rot13:         cat $OUTPUT/rot13.txt | tr 'A-Za-z' 'N-ZA-Mn-za-m'"
echo "🌐 pcap:          cat $OUTPUT/http.pcap"
echo ""
echo "================================="
echo "🎯 10 novos desafios criados!"
echo "\"Alguns desafios não existem ainda."
echo " O verdadeiro investigador cria os próprios.\""
echo "================================="
