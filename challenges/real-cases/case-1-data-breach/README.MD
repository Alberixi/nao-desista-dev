
## 📁 **challenges/real-cases/**

### **challenges/real-cases/case-1-data-breach/README.md**

# 🔓 Caso 1: Data Breach - Vazamento de Dados

## Resumo do Caso
**Data do Incidente:** 15/03/2024
**Empresa Afetada:** TechStore Ltda
**Tipo:** Vazamento de dados de clientes
**Impacto:** 500.000 registros expostos

## 📋 Evidências Disponíveis
- [Logs de acesso](logs/access.log)
- [Imagem do servidor](evidence/server.dd)
- [PCAP de tráfego](evidence/network.pcap)
- [Arquivo com dados vazados](evidence/leaked_data.txt)

## 🔍 Investigação

### 1. Análise de Logs

cat access.log | grep -E "POST|GET" | grep "admin" | head -20

Descoberta: Múltiplas requisições suspeitas de IP 185.165.29.101

2. Análise de PCAP

tshark -r network.pcap -Y "http.request.method == POST" -T fields -e ip.src -e http.request.uri
Identificado: Exfiltração de dados via POST requests

3. Análise Forense do Disco

fls -r server.dd | grep -i "deleted"
Arquivos deletados encontrados:

/var/www/html/backup.sql

/tmp/export.php

🔑 Descobertas
Vulnerabilidade Explorada
SQL Injection no endpoint /search

Payload utilizado:

sql
' UNION SELECT username,password,credit_card FROM users --
Credenciais Expostas
csv
user@example.com, hash_md5, 4111111111111111
admin@techstore.com, 5f4dcc3b5aa765d61d8327deb882cf99, ************

🏁 Flag do Caso

flag{data_breach_sqli_2024}

📝 Relatório Final

O ataque ocorreu devido a falta de validação em input de busca,
permitindo SQL Injection que extraiu dados de 500k usuários.

Recomendações
Implementar prepared statements

Ativar WAF

Auditoria de código

Treinamento da equipe
