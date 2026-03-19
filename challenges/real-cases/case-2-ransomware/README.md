
### **challenges/real-cases/case-2-ransomware/README.md**
# 🦠 Caso 2: Ransomware Attack

## Resumo do Caso
**Data do Incidente:** 10/03/2024
**Empresa Afetada:** Hospital Regional
**Tipo:** Ransomware (LockBit 3.0)
**Impacto:** Sistemas parados por 3 semanas

## 📋 Evidências Disponíveis
- [Dump de memória](evidence/memory.raw)
- [Arquivos criptografados](evidence/encrypted_files/)
- [Nota de resgate](evidence/ransom_note.txt)
- [Logs de sistema](evidence/system.log)

## 🔍 Investigação

### 1. Análise da Nota de Resgate

cat ransom_note.txt
Conteúdo:


Seus arquivos foram criptografados!
Para recuperar, pague 50 BTC para:

bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
Contato: lockbit-supp@onionmail.org

2. Análise de Memória

volatility -f memory.raw imageinfo
volatility -f memory.raw --profile=Win10x64 pslist
Processos suspeitos:


PID: 1337 - svchost.exe (local suspeito: C:\Temp)
PID: 4444 - notepad.exe (abriu ransom note)
3. Análise de Rede

tshark -r network.pcap -Y "tcp.port == 4444"
Conexão com C2: 185.165.29.101:4444

🔑 Descobertas
Chave de Criptografia
Encontrada na memória:


volatility -f memory.raw --profile=Win10x64 memdump -p 1337 -D .
strings 1337.dmp | grep -i "key"
Chave: ransomware_key_2024

Decryptor
python
# decrypt.py
import os

def decrypt_file(encrypted_file, key):
    # Lógica de decriptação
    pass
🏁 Flag do Caso

flag{ransomware_lockbit_analysis}

📝 Relatório Final

Ransomware LockBit 3.0 entrou via phishing email.
Backups não estavam offline, resultando em perda total.

Recomendações
Backup offline 3-2-1

Treinamento anti-phishing

Segmentação de rede

EDR solution
