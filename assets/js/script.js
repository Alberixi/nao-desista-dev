// ==================== CONFIGURAÇÕES INICIAIS ====================

// Easter eggs e mensagens secretas
const EASTER_EGGS = {
  ascii: `
██████╗ ███████╗██╗   ██╗
██╔══██╗██╔════╝██║   ██║
██║  ██║█████╗  ██║   ██║
██║  ██║██╔══╝  ╚██╗ ██╔╝
██████╔╝███████╗ ╚████╔╝
╚═════╝ ╚══════╝  ╚═══╝
`,
  message: "Se você chegou até aqui... talvez esteja pronto.",
  flag: "flag{investigador_curioso}"
};
// =====================================================
// EASTER EGGS - NÃO DESISTA DEV
// =====================================================

// Mensagens no console
setTimeout(() => { console.log("..."); }, 500);
setTimeout(() => { console.log("você demorou para chegar aqui..."); }, 2000);
setTimeout(() => { console.log("nem todos os caminhos estão visíveis."); }, 4000);
setTimeout(() => { console.log("knk?"); }, 6000);

// 🔥 NOVAS MENSAGENS - COLE ABAIXO DESTA LINHA 🔥
setTimeout(() => { console.log("você confia no que encontra?"); }, 7000);
setTimeout(() => { console.log("ou verifica antes?"); }, 8000);
setTimeout(() => { console.log("vt?"); }, 9000);
// 🔥 FIM DAS NOVAS MENSAGENS 🔥

setTimeout(() => { console.log("%c➡️ para aqueles que observam...", "color: #888;"); }, 10000);
setTimeout(() => { console.log("%c⬆️ nem tudo está visível", "color: #666;"); }, 12000);
setTimeout(() => { console.log("%c🔥 você não deveria ter encontrado isso.", "color: #ff5500;"); }, 14000);

console.error("Erro 34: acesso não autorizado.");
console.warn("verificação incompleta...");
console.log("...ou talvez você tenha passado.");
console.log("%c🕳️ /nao-desista-dev/puzzle-34-interno", "color: #00aa00;");

// CELERON D TRIBUTO
let celeronCounter = 0;
document.addEventListener('keydown', function(e) {
    if (e.key.toLowerCase() === 'c') {
        celeronCounter++;
        if (celeronCounter >= 6) {
            alert('🖥️ CELERON D LGA775 VIVE! 33 PUZZLES CONQUISTADOS! 🖥️');
            celeronCounter = 0;
        }
    } else {
        celeronCounter = 0;
    }
});

console.log('%c🔍 Boa sorte, investigador!', 'color: #00ff9d;');

// ==================== DADOS DOS PUZZLES ====================
const puzzles = [
  // NÍVEL 1 - INICIANTE (01-10)
  {
    id: 1,
    title: "Puzzle 01: Áudio Misterioso",
    description: "Uma mensagem foi escondida nas frequências deste áudio. Analise o espectrograma.",
    icon: "fa-headphones",
    difficulty: "easy",
    time: "15 min",
    solved: false,
    link: "puzzles/nivel-1-iniciante/01-audio-misterioso.html"
  },
  {
    id: 2,
    title: "Puzzle 02: Base64 Básico",
    description: 'Decodifique a string: Vm0wd2QyUXlVWGxV',
    icon: "fa-code",
    difficulty: "easy",
    time: "10 min",
    solved: false,
    link: "puzzles/nivel-1-iniciante/02-base64-basico.html"
  },
  {
    id: 3,
    title: "Puzzle 03: ROT13 Simples",
    description: "Uma cifra simples de substituição foi usada.",
    icon: "fa-font",
    difficulty: "easy",
    time: "10 min",
    solved: false,
    link: "puzzles/nivel-1-iniciante/03-rot13-simples.html"
  },
  {
    id: 4,
    title: "Puzzle 04: Hexadecimal 101",
    description: "Converta esta sequência hexadecimal para texto.",
    icon: "fa-hashtag",
    difficulty: "easy",
    time: "10 min",
    solved: false,
    link: "puzzles/nivel-1-iniciante/04-hexadecimal-101.html"
  },
  {
    id: 5,
    title: "Puzzle 05: Binário Básico",
    description: "01100110 01101100 01100001 01100111",
    icon: "fa-code-branch",
    difficulty: "easy",
    time: "10 min",
    solved: false,
    link: "puzzles/nivel-1-iniciante/05-binario-basico.html"
  },
  {
    id: 6,
    title: "Puzzle 06: Metadados de Imagem",
    description: "Analise os metadados EXIF da imagem.",
    icon: "fa-image",
    difficulty: "easy",
    time: "15 min",
    solved: false,
    link: "puzzles/nivel-1-iniciante/06-metadados-imagem.html"
  },
  {
    id: 7,
    title: "Puzzle 07: Strings Ocultas",
    description: "Use o comando 'strings' para encontrar a flag.",
    icon: "fa-file",
    difficulty: "easy",
    time: "15 min",
    solved: false,
    link: "puzzles/nivel-1-iniciante/07-strings-ocultas.html"
  },
  {
    id: 8,
    title: "Puzzle 08: Código Morse",
    description: "Decodifique a mensagem em morse.",
    icon: "fa-wave-square",
    difficulty: "easy",
    time: "10 min",
    solved: false,
    link: "puzzles/nivel-1-iniciante/08-morse-code.html"
  },
  {
    id: 9,
    title: "Puzzle 09: ZIP com Senha Fraca",
    description: "O arquivo ZIP está protegido. Descubra a senha.",
    icon: "fa-file-archive",
    difficulty: "easy",
    time: "20 min",
    solved: false,
    link: "puzzles/nivel-1-iniciante/09-zip-senha-fraca.html"
  },
  {
    id: 10,
    title: "Puzzle 10: HTML Oculto",
    description: "Há uma mensagem escondida no código fonte.",
    icon: "fa-code",
    difficulty: "easy",
    time: "5 min",
    solved: false,
    link: "puzzles/nivel-1-iniciante/10-html-hidden.html"
  },

  // NÍVEL 2 - INTERMEDIÁRIO (11-20)
  {
    id: 11,
    title: "Puzzle 11: Esteganografia LSB",
    description: "Bits menos significativos da imagem escondem um segredo.",
    icon: "fa-image",
    difficulty: "medium",
    time: "30 min",
    solved: false,
    link: "puzzles/nivel-2-intermediario/11-esteganografia-lsb.html"
  },
  {
    id: 12,
    title: "Puzzle 12: Áudio Espectro",
    description: "Uma imagem está escondida no espectrograma do áudio.",
    icon: "fa-music",
    difficulty: "medium",
    time: "30 min",
    solved: false,
    link: "puzzles/nivel-2-intermediario/12-audio-espectro.html"
  },
  {
    id: 13,
    title: "Puzzle 13: Base64 Multicamadas",
    description: "Múltiplas camadas de codificação Base64.",
    icon: "fa-layer-group",
    difficulty: "medium",
    time: "20 min",
    solved: false,
    link: "puzzles/nivel-2-intermediario/13-base64-multicamadas.html"
  },
  {
    id: 14,
    title: "Puzzle 14: XOR Encryption",
    description: "Mensagem criptografada com XOR de 1 byte.",
    icon: "fa-key",
    difficulty: "medium",
    time: "25 min",
    solved: false,
    link: "puzzles/nivel-2-intermediario/14-xor-encryption.html"
  },
  {
    id: 15,
    title: "Puzzle 15: RSA Básico",
    description: "Quebre uma chave RSA com números pequenos.",
    icon: "fa-lock",
    difficulty: "medium",
    time: "35 min",
    solved: false,
    link: "puzzles/nivel-2-intermediario/15-rsa-basico.html"
  },
  {
    id: 16,
    title: "Puzzle 16: Hash Identify",
    description: "Identifique o tipo de hash e encontre a palavra original.",
    icon: "fa-fingerprint",
    difficulty: "medium",
    time: "20 min",
    solved: false,
    link: "puzzles/nivel-2-intermediario/16-hash-identify.html"
  },
  {
    id: 17,
    title: "Puzzle 17: Forense Disco",
    description: "Analise uma imagem de disco para encontrar arquivos deletados.",
    icon: "fa-hard-drive",
    difficulty: "medium",
    time: "40 min",
    solved: false,
    link: "puzzles/nivel-2-intermediario/17-forense-disco.html"
  },
  {
    id: 18,
    title: "Puzzle 18: PCAP Analysis",
    description: "Capture de rede com uma comunicação suspeita.",
    icon: "fa-network-wired",
    difficulty: "medium",
    time: "30 min",
    solved: false,
    link: "puzzles/nivel-2-intermediario/18-pcap-analysis.html"
  },
  {
    id: 19,
    title: "Puzzle 19: EXIF Data",
    description: "Metadados EXIF avançados com coordenadas GPS.",
    icon: "fa-map-marker-alt",
    difficulty: "medium",
    time: "25 min",
    solved: false,
    link: "puzzles/nivel-2-intermediario/19-exif-data.html"
  },
  {
    id: 20,
    title: "Puzzle 20: PDF Embedded",
    description: "Arquivo PDF com conteúdo oculto em anexos.",
    icon: "fa-file-pdf",
    difficulty: "medium",
    time: "30 min",
    solved: false,
    link: "puzzles/nivel-2-intermediario/20-pdf-embedded.html"
  },

  // NÍVEL 3 - AVANÇADO (21-30)
  {
    id: 21,
    title: "Puzzle 21: Esteganografia em Áudio",
    description: "LSB + XOR em arquivo de áudio. Extraia a mensagem oculta.",
    icon: "fa-headphones",
    difficulty: "hard",
    time: "45 min",
    solved: false,
    link: "puzzles/nivel-3-avancado/21-esteganografia-audio.html"
  },
  {
    id: 22,
    title: "Puzzle 22: Forense de Memória",
    description: "Analise um dump de RAM com Volatility para encontrar o processo malicioso.",
    icon: "fa-memory",
    difficulty: "hard",
    time: "50 min",
    solved: false,
    link: "puzzles/nivel-3-avancado/22-forense-memoria.html"
  },
  {
    id: 23,
    title: "Puzzle 23: Reversing Simples",
    description: "Engenharia reversa de um binário que pede senha.",
    icon: "fa-code",
    difficulty: "hard",
    time: "40 min",
    solved: false,
    link: "puzzles/nivel-3-avancado/23-reversing-simples.html"
  },
  {
    id: 24,
    title: "Puzzle 24: Network Forensics",
    description: "Dados exfiltrados em pacotes ICMP. Reconstrua a flag.",
    icon: "fa-network-wired",
    difficulty: "hard",
    time: "45 min",
    solved: false,
    link: "puzzles/nivel-3-avancado/24-network-forensics.html"
  },
  {
    id: 25,
    title: "Puzzle 25: Malware Analysis",
    description: "Analise uma amostra de malware e descubra o domínio C2.",
    icon: "fa-bug",
    difficulty: "hard",
    time: "60 min",
    solved: false,
    link: "puzzles/nivel-3-avancado/25-malware-analysis.html"
  },
  {
    id: 26,
    title: "Puzzle 26: Crypto Wallets",
    description: "Recupere a chave privada de uma carteira de criptomoedas.",
    icon: "fa-bitcoin",
    difficulty: "hard",
    time: "50 min",
    solved: false,
    link: "puzzles/nivel-3-avancado/26-crypto-wallets.html"
  },
  {
    id: 27,
    title: "Puzzle 27: Blockchain Basics",
    description: "Analise uma transação na blockchain para encontrar a flag.",
    icon: "fa-link",
    difficulty: "hard",
    time: "45 min",
    solved: false,
    link: "puzzles/nivel-3-avancado/27-blockchain-basics.html"
  },
  {
    id: 28,
    title: "Puzzle 28: Steganography Multiple",
    description: "Múltiplas técnicas de esteganografia em uma única imagem.",
    icon: "fa-images",
    difficulty: "hard",
    time: "55 min",
    solved: false,
    link: "puzzles/nivel-3-avancado/28-steganography-multiple.html"
  },
  {
    id: 29,
    title: "Puzzle 29: Encryption Cracking",
    description: "Quebre um algoritmo de criptografia personalizado.",
    icon: "fa-lock",
    difficulty: "hard",
    time: "60 min",
    solved: false,
    link: "puzzles/nivel-3-avancado/29-encryption-cracking.html"
  },
  {
    id: 30,
    title: "Puzzle 30: OSINT Challenge",
    description: "Use técnicas de inteligência de fontes abertas para encontrar a flag.",
    icon: "fa-search",
    difficulty: "hard",
    time: "50 min",
    solved: false,
    link: "puzzles/nivel-3-avancado/30-osint-challenge.html"
  },

  // NÍVEL 4 - ESPECIALISTA (31-40)
  {
    id: 31,
    title: "Puzzle 31: Forense Android",
    description: "Recupere mensagens deletadas de um dump Android.",
    icon: "fa-android",
    difficulty: "expert",
    time: "60 min",
    solved: false,
    link: "puzzles/nivel-4-especialista/31-forense-android.html"
  },
  {
    id: 32,
    title: "Puzzle 32: WiFi Hacking",
    description: "Quebre a senha de um handshake WPA2 capturado.",
    icon: "fa-wifi",
    difficulty: "expert",
    time: "55 min",
    solved: false,
    link: "puzzles/nivel-4-especialista/32-wifi-hacking.html"
  },
  {
    id: 33,
    title: "Puzzle 33: Binary Exploitation",
    description: "Explore um buffer overflow para obter shell.",
    icon: "fa-terminal",
    difficulty: "expert",
    time: "70 min",
    solved: false,
    link: "puzzles/nivel-4-especialista/33-binary-exploitation.html"
  },
  {
    id: 34,
    title: "Puzzle 34: Web Vulnerabilities",
    description: "Bypass de login com SQL Injection.",
    icon: "fa-globe",
    difficulty: "expert",
    time: "45 min",
    solved: false,
    link: "puzzles/nivel-4-especialista/34-web-vulnerabilities.html"
  },
  {
    id: 35,
    title: "Puzzle 35: SQL Injection Lab",
    description: "Extraia dados de múltiplas tabelas com UNION SELECT.",
    icon: "fa-database",
    difficulty: "expert",
    time: "50 min",
    solved: false,
    link: "puzzles/nivel-4-especialista/35-sql-injection-lab.html"
  },
  {
    id: 36,
    title: "Puzzle 36: XSS Challenge",
    description: "Execute um alerta de XSS refletido e capture o cookie.",
    icon: "fa-code",
    difficulty: "expert",
    time: "40 min",
    solved: false,
    link: "puzzles/nivel-4-especialista/36-xss-challenge.html"
  },
  {
    id: 37,
    title: "Puzzle 37: CSRF Attack",
    description: "Crie um payload CSRF para alterar o email do admin.",
    icon: "fa-shield-alt",
    difficulty: "expert",
    time: "45 min",
    solved: false,
    link: "puzzles/nivel-4-especialista/37-csrf-attack.html"
  },
  {
    id: 38,
    title: "Puzzle 38: JWT Tokens",
    description: "Forge um token JWT com algoritmo 'none' para acessar /admin.",
    icon: "fa-key",
    difficulty: "expert",
    time: "35 min",
    solved: false,
    link: "puzzles/nivel-4-especialista/38-jwt-tokens.html"
  },
  {
    id: 39,
    title: "Puzzle 39: OAuth Bypass",
    description: "Bypasse a tela de login OAuth para acessar a conta do admin.",
    icon: "fa-user-secret",
    difficulty: "expert",
    time: "50 min",
    solved: false,
    link: "puzzles/nivel-4-especialista/39-oauth-bypass.html"
  },
  {
    id: 40,
    title: "Puzzle 40: API Security",
    description: "Descubra uma vulnerabilidade IDOR na API REST.",
    icon: "fa-cloud",
    difficulty: "expert",
    time: "40 min",
    solved: false,
    link: "puzzles/nivel-4-especialista/40-api-security.html"
  },

  // NÍVEL 5 - MESTRE (41-50)
  {
    id: 41,
    title: "Puzzle 41: Forense IoT",
    description: "Analise o firmware de um roteador para encontrar backdoor.",
    icon: "fa-microchip",
    difficulty: "master",
    time: "80 min",
    solved: false,
    link: "puzzles/nivel-5-mestre/41-forense-iot.html"
  },
  {
    id: 42,
    title: "Puzzle 42: Cloud Forensics",
    description: "Investigue um bucket S3 mal configurado com dados vazados.",
    icon: "fa-aws",
    difficulty: "master",
    time: "65 min",
    solved: false,
    link: "puzzles/nivel-5-mestre/42-cloud-forensics.html"
  },
  {
    id: 43,
    title: "Puzzle 43: DarkWeb Investigation",
    description: "Encontre um mercado na dark web usando técnicas de OSINT.",
    icon: "fa-mask",
    difficulty: "master",
    time: "90 min",
    solved: false,
    link: "puzzles/nivel-5-mestre/43-darkweb-investigation.html"
  },
  {
    id: 44,
    title: "Puzzle 44: Cryptocurrency Tracing",
    description: "Rastreie uma transação de Bitcoin até a carteira do criminoso.",
    icon: "fa-btc",
    difficulty: "master",
    time: "70 min",
    solved: false,
    link: "puzzles/nivel-5-mestre/44-cryptocurrency-tracing.html"
  },
  {
    id: 45,
    title: "Puzzle 45: Zero Day Analysis",
    description: "Analise um exploit de dia zero e crie uma assinatura.",
    icon: "fa-biohazard",
    difficulty: "master",
    time: "100 min",
    solved: false,
    link: "puzzles/nivel-5-mestre/45-zero-day-analysis.html"
  },
  {
    id: 46,
    title: "Puzzle 46: APT Simulation",
    description: "Simule uma investigação de APT (Advanced Persistent Threat).",
    icon: "fa-skull-crossbones",
    difficulty: "master",
    time: "120 min",
    solved: false,
    link: "puzzles/nivel-5-mestre/46-apt-simulation.html"
  },
  {
    id: 47,
    title: "Puzzle 47: Ransomware Lab",
    description: "Analise uma amostra de ransomware e recupere os arquivos.",
    icon: "fa-virus",
    difficulty: "master",
    time: "110 min",
    solved: false,
    link: "puzzles/nivel-5-mestre/47-ransomware-lab.html"
  },
  {
    id: 48,
    title: "Puzzle 48: Botnet Analysis",
    description: "Analise o tráfego de uma botnet e encontre o servidor C2.",
    icon: "fa-network-wired",
    difficulty: "master",
    time: "85 min",
    solved: false,
    link: "puzzles/nivel-5-mestre/48-botnet-analysis.html"
  },
  {
    id: 49,
    title: "Puzzle 49: Quantum Crypto",
    description: "Implemente um ataque Shor simplificado para quebrar RSA.",
    icon: "fa-atom",
    difficulty: "master",
    time: "95 min",
    solved: false,
    link: "puzzles/nivel-5-mestre/49-quantum-crypto.html"
  },
  {
    id: 50,
    title: "Puzzle 50: Final Challenge",
    description: "O desafio final combina todas as técnicas aprendidas.",
    icon: "fa-crown",
    difficulty: "master",
    time: "180 min",
    solved: false,
    link: "puzzles/nivel-5-mestre/50-final-challenge.html"
  }
];

// ==================== DADOS DAS FERRAMENTAS ====================
const tools = [
  { name: "Análise de Áudio", icon: "fa-music", description: "Audacity, Sonic Visualiser, Spek" },
  { name: "Forense Digital", icon: "fa-microscope", description: "Autopsy, Sleuth Kit, Volatility" },
  { name: "Criptografia", icon: "fa-lock", description: "OpenSSL, HashCat, John the Ripper" },
  { name: "Comandos Linux", icon: "fa-linux", description: "grep, awk, sed, xxd, strings" },
  { name: "Esteganografia", icon: "fa-image", description: "Steghide, Stegsolve, zsteg" },
  { name: "Rede", icon: "fa-network-wired", description: "Wireshark, Nmap, tcpdump" },
  { name: "Web Hacking", icon: "fa-globe", description: "Burp Suite, SQLMap, OWASP ZAP" },
  { name: "Engenharia Reversa", icon: "fa-code", description: "Ghidra, IDA Pro, GDB" }
];

// ==================== DADOS DA DOCUMENTAÇÃO ====================
const docs = [
  {
    title: "Como Começar",
    icon: "fa-compass",
    description: "Guia básico para iniciantes",
    link: "docs/guias/como-comecar.html"
  },
  {
    title: "Guia Rápido",
    icon: "fa-rocket",
    description: "Resumo para iniciantes",
    link: "docs/guias/guia-rapido-iniciante.html"
  },
  {
    title: "Comandos Linux",
    icon: "fa-linux",
    description: "Comandos essenciais para forense",
    link: "docs/guias/linux-commands.html"
  },
  {
    title: "Todas as Ferramentas",
    icon: "fa-tools",
    description: "Links para download seguro",
    link: "docs/referencias/ferramentas-completas.html"
  },
  {
    title: "Glossário",
    icon: "fa-book",
    description: "Termos técnicos explicados",
    link: "docs/guias/glossary.html"
  },
  {
    title: "Troubleshooting",
    icon: "fa-wrench",
    description: "Solução de problemas",
    link: "docs/guias/troubleshooting.html"
  },
  {
    title: "Esteganografia",
    icon: "fa-image",
    description: "Tutorial completo",
    link: "docs/tutoriais/esteganografia.html"
  },
  {
    title: "Forense Digital",
    icon: "fa-microscope",
    description: "Tutorial completo",
    link: "docs/tutoriais/forense.html"
  },
  {
    title: "Criptografia",
    icon: "fa-lock",
    description: "Tutorial completo",
    link: "docs/tutoriais/criptografia.html"
  },
  {
    title: "Redes",
    icon: "fa-network-wired",
    description: "Tutorial completo",
    link: "docs/tutoriais/redes.html"
  },
  {
    title: "Segurança Web",
    icon: "fa-globe",
    description: "Tutorial completo",
    link: "docs/tutoriais/web-security.html"
  },
  {
    title: "Livros",
    icon: "fa-book-open",
    description: "Recomendações de leitura",
    link: "docs/referencias/livros.html"
  },
  {
    title: "Cursos Online",
    icon: "fa-video",
    description: "Plataformas e cursos",
    link: "docs/referencias/cursos-online.html"
  },
  {
    title: "Certificações",
    icon: "fa-certificate",
    description: "Guia de certificações",
    link: "docs/referencias/certificacoes.html"
  },
  {
    title: "Comunidades",
    icon: "fa-users",
    description: "Fóruns e grupos",
    link: "docs/referencias/comunidades.html"
  }
];

// ==================== TERMINAL COMMANDS ====================
const TERMINAL_COMMANDS = {
  help: {
    description: "Mostra todos os comandos disponíveis",
    execute: () => {
      let output = "╔════════════════════════════════════╗<br>";
      output += "║    COMANDOS DISPONÍVEIS          ║<br>";
      output += "╚════════════════════════════════════╝<br><br>";

      output += "📁 <span class='text-secondary'>NAVEGAÇÃO:</span><br>";
      output += "  <span class='text-secondary'>ls</span>         - Lista arquivos e pastas<br>";
      output += "  <span class='text-secondary'>ll</span>         - Lista detalhada (igual ls -l)<br>";
      output += "  <span class='text-secondary'>la</span>         - Lista incluindo ocultos<br>";
      output += "  <span class='text-secondary'>pwd</span>        - Mostra diretório atual<br>";
      output += "  <span class='text-secondary'>cd [dir]</span>   - Muda de diretório<br>";
      output += "  <span class='text-secondary'>cd ..</span>      - Volta um nível<br>";
      output += "  <span class='text-secondary'>cd ~</span>       - Vai para home<br>";
      output += "  <span class='text-secondary'>dir</span>        - Alias para ls (Windows style)<br><br>";

      output += "🔍 <span class='text-secondary'>VISUALIZAÇÃO:</span><br>";
      output += "  <span class='text-secondary'>cat [arquivo]</span>  - Mostra conteúdo do arquivo<br>";
      output += "  <span class='text-secondary'>head [arquivo]</span> - Mostra primeiras 10 linhas<br>";
      output += "  <span class='text-secondary'>tail [arquivo]</span> - Mostra últimas 10 linhas<br>";
      output += "  <span class='text-secondary'>file [arquivo]</span> - Identifica tipo do arquivo<br><br>";

      output += "📊 <span class='text-secondary'>SISTEMA:</span><br>";
      output += "  <span class='text-secondary'>whoami</span>    - Usuário atual<br>";
      output += "  <span class='text-secondary'>date</span>      - Data e hora<br>";
      output += "  <span class='text-secondary'>uptime</span>    - Tempo de atividade<br>";
      output += "  <span class='text-secondary'>uname</span>     - Informações do sistema<br>";
      output += "  <span class='text-secondary'>df</span>        - Espaço em disco<br>";
      output += "  <span class='text-secondary'>free</span>      - Memória RAM<br>";
      output += "  <span class='text-secondary'>ps</span>        - Processos rodando<br><br>";

      output += "🔐 <span class='text-secondary'>REDE:</span><br>";
      output += "  <span class='text-secondary'>ifconfig</span>  - Interfaces de rede<br>";
      output += "  <span class='text-secondary'>ip</span>         - Endereços IP (use: ip a)<br>";
      output += "  <span class='text-secondary'>netstat</span>   - Conexões de rede<br>";
      output += "  <span class='text-secondary'>ping</span>       - Testa conectividade<br>";
      output += "  <span class='text-secondary'>wget</span>       - Baixa arquivo<br>";
      output += "  <span class='text-secondary'>curl</span>       - Requisição HTTP<br><br>";

      output += "🛠️ <span class='text-secondary'>UTILITÁRIOS:</span><br>";
      output += "  <span class='text-secondary'>grep</span>       - Busca em texto<br>";
      output += "  <span class='text-secondary'>find</span>       - Procura arquivos<br>";
      output += "  <span class='text-secondary'>wc</span>         - Conta linhas<br>";
      output += "  <span class='text-secondary'>sort</span>       - Ordena linhas<br>";
      output += "  <span class='text-secondary'>uniq</span>       - Remove duplicatas<br>";
      output += "  <span class='text-secondary'>base64</span>     - Decodifica Base64<br>";
      output += "  <span class='text-secondary'>echo</span>       - Repete texto<br>";
      output += "  <span class='text-secondary'>clear</span>      - Limpa a tela<br>";
      output += "  <span class='text-secondary'>cls</span>        - Alias para clear (Windows)<br>";
      output += "  <span class='text-secondary'>history</span>    - Histórico de comandos<br><br>";

      output += "🎮 <span class='text-secondary'>ESPECIAIS:</span><br>";
      output += "  <span class='text-secondary'>status</span>    - Status dos puzzles<br>";
      output += "  <span class='text-secondary'>about</span>     - Sobre o projeto<br>";
      output += "  <span class='text-secondary'>hint</span>      - Dica do dia<br>";
      output += "  <span class='text-secondary'>fortune</span>   - Mensagem inspiradora<br>";

      return output;
    }
  },

  ls: {
    description: "Lista arquivos e pastas",
    execute: (args) => {
      if (args === '-l') {
        let output = "total 64<br>";
        output += "drwxr-xr-x 10 investigador investigadores 4096 Mar 13 10:30 <span class='text-secondary'>.</span><br>";
        output += "drwxr-xr-x 3  investigador investigadores 4096 Mar 13 10:30 <span class='text-secondary'>..</span><br>";
        output += "drwxr-xr-x 2  investigador investigadores 4096 Mar 13 10:30 <span class='text-secondary'>assets</span><br>";
        output += "drwxr-xr-x 6  investigador investigadores 4096 Mar 13 10:30 <span class='text-secondary'>puzzles</span><br>";
        output += "drwxr-xr-x 4  investigador investigadores 4096 Mar 13 10:30 <span class='text-secondary'>docs</span><br>";
        output += "drwxr-xr-x 3  investigador investigadores 4096 Mar 13 10:30 <span class='text-secondary'>tools</span><br>";
        output += "-rw-r--r-- 1  investigador investigadores 2345 Mar 13 10:30 <span class='text-secondary'>README.md</span><br>";
        output += "-rw-r--r-- 1  investigador investigadores 15678 Mar 13 10:30 <span class='text-secondary'>script.js</span><br>";
        output += "-rw-r--r-- 1  investigador investigadores 8923 Mar 13 10:30 <span class='text-secondary'>style.css</span><br>";
        output += "-rw-r--r-- 1  investigador investigadores 4567 Mar 13 10:30 <span class='text-secondary'>index.html</span>";
        return output;
      } else if (args === '-a') {
        let output = TERMINAL_COMMANDS.ls.execute('-l');
        output += "<br>-rw-r--r-- 1  investigador investigadores 123 Mar 13 10:30 <span class='text-secondary'>.gitignore</span><br>";
        output += "-rw-r--r-- 1  investigador investigadores 456 Mar 13 10:30 <span class='text-secondary'>.env</span>";
        return output;
      } else {
        return "assets/  puzzles/  docs/  tools/  README.md  script.js  style.css  index.html";
      }
    }
  },

  ll: {
    description: "Lista detalhada (ls -l)",
    execute: () => {
      return TERMINAL_COMMANDS.ls.execute('-l');
    }
  },

  la: {
    description: "Lista incluindo ocultos (ls -a)",
    execute: () => {
      return TERMINAL_COMMANDS.ls.execute('-a');
    }
  },

  pwd: {
    description: "Mostra diretório atual",
    execute: () => {
      return "/home/investigador/nao-desista-dev";
    }
  },

  cd: {
    description: "Muda de diretório",
    execute: (args) => {
      if (!args || args === '~') {
        return "📂 Diretório alterado para: /home/investigador";
      } else if (args === '..') {
        return "📂 Diretório alterado para: /home/investigador";
      } else if (['assets', 'puzzles', 'docs', 'tools'].includes(args)) {
        return `📂 Diretório alterado para: /home/investigador/nao-desista-dev/${args}`;
      } else {
        return `❌ Diretório não encontrado: ${args}`;
      }
    }
  },

  dir: {
    description: "Alias para ls (Windows style)",
    execute: () => {
      return TERMINAL_COMMANDS.ls.execute();
    }
  },

  cat: {
    description: "Mostra conteúdo do arquivo",
    execute: (args) => {
      if (!args) return "❌ Use: cat [arquivo]";

      const files = {
        'README.md': '# Não Desista Dev\n\nPlataforma de investigação digital com 50 puzzles.\n\n## Níveis\n- Iniciante (1-10)\n- Intermediário (11-20)\n- Avançado (21-30)\n- Especialista (31-40)\n- Mestre (41-50)',
        'flag.txt': 'flag{parabens_agente}',
        'senha.txt': 'A senha é: 123456',
        'hint.txt': 'Dica: sempre inspecione o código fonte!'
      };

      return files[args] || `📄 Conteúdo do arquivo '${args}':\nArquivo não encontrado.`;
    }
  },

  head: {
    description: "Mostra primeiras 10 linhas",
    execute: (args) => {
      if (!args) return "❌ Use: head [arquivo]";
      return `📄 Primeiras linhas de ${args}:\nlinha 1\nlinha 2\nlinha 3\nlinha 4\nlinha 5\nlinha 6\nlinha 7\nlinha 8\nlinha 9\nlinha 10`;
    }
  },

  tail: {
    description: "Mostra últimas 10 linhas",
    execute: (args) => {
      if (!args) return "❌ Use: tail [arquivo]";
      return `📄 Últimas linhas de ${args}:\nlinha 91\nlinha 92\nlinha 93\nlinha 94\nlinha 95\nlinha 96\nlinha 97\nlinha 98\nlinha 99\nlinha 100`;
    }
  },

  file: {
    description: "Identifica tipo do arquivo",
    execute: (args) => {
      if (!args) return "❌ Use: file [arquivo]";

      const types = {
        'imagem.jpg': 'JPEG image data',
        'documento.pdf': 'PDF document',
        'script.js': 'JavaScript source',
        'style.css': 'CSS source',
        'arquivo.zip': 'Zip archive'
      };

      return types[args] || `📁 ${args}: ASCII text`;
    }
  },

  whoami: {
    description: "Usuário atual",
    execute: () => {
      return "investigador@nao-desista-dev";
    }
  },

  date: {
    description: "Data e hora",
    execute: () => {
      return new Date().toLocaleString('pt-BR');
    }
  },

  uptime: {
    description: "Tempo de atividade",
    execute: () => {
      return "10:30:23 up 3 days, 4:20, 1 user";
    }
  },

  uname: {
    description: "Informações do sistema",
    execute: (args) => {
      if (args === '-a') {
        return "Linux nao-desista-dev 5.10.0-generic x86_64 GNU/Linux";
      }
      return "Linux";
    }
  },

  df: {
    description: "Espaço em disco",
    execute: (args) => {
      if (args === '-h') {
        return "Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda1       100G   45G   55G  45% /";
      }
      return "Filesystem     1K-blocks    Used Available Use% Mounted on\n/dev/sda1       10485760 4718592  5767168  45% /";
    }
  },

  free: {
    description: "Memória RAM",
    execute: (args) => {
      if (args === '-h') {
        return "              total        used        free      shared  buff/cache   available\nMem:           7.7G        2.1G        3.2G        0.1G        2.4G        5.2G";
      }
      return "              total        used        free      shared  buff/cache   available\nMem:           8000000      2000000      3000000      100000      2500000      5200000";
    }
  },

  ps: {
    description: "Processos rodando",
    execute: (args) => {
      if (args === 'aux') {
        return "USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot         1  0.0  0.1  20000  1000 ?        Ss   Mar10   0:01 init\ninvestig+ 1234  0.5  2.5 500000 20000 ?        Sl   10:30   0:10 node server.js";
      }
      return "  PID TTY          TIME CMD\n 1234 pts/0    00:00:10 node";
    }
  },

  ifconfig: {
    description: "Interfaces de rede",
    execute: () => {
      return "eth0: inet 192.168.1.100  netmask 255.255.255.0\nlo: inet 127.0.0.1  netmask 255.0.0.0";
    }
  },

  ip: {
    description: "Endereços IP",
    execute: (args) => {
      if (args === 'a') {
        return TERMINAL_COMMANDS.ifconfig.execute();
      }
      return "Uso: ip a";
    }
  },

  netstat: {
    description: "Conexões de rede",
    execute: () => {
      return "tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN";
    }
  },

  ping: {
    description: "Testa conectividade",
    execute: (args) => {
      if (!args) return "❌ Use: ping [host]";
      return `PING ${args} - 64 bytes received, time=12.3ms`;
    }
  },

  wget: {
    description: "Baixa arquivo",
    execute: (args) => {
      if (!args) return "❌ Use: wget [url]";
      return `Arquivo baixado de ${args}`;
    }
  },

  curl: {
    description: "Requisição HTTP",
    execute: (args) => {
      if (!args) return "❌ Use: curl [url]";
      return `<html><body>Bem-vindo, agente!</body></html>`;
    }
  },

  grep: {
    description: "Busca em texto",
    execute: (args) => {
      if (!args) return "❌ Use: grep [padrão]";
      return `🔍 Resultados: 3 ocorrências encontradas`;
    }
  },

  find: {
    description: "Procura arquivos",
    execute: (args) => {
      if (!args) return "❌ Use: find [padrão]";
      return `./puzzles/nivel-1-iniciante/01-audio-misterioso.html\n./puzzles/nivel-1-iniciante/02-base64-basico.html`;
    }
  },

  wc: {
    description: "Conta linhas",
    execute: (args) => {
      if (args === '-l') {
        return "150 linhas";
      }
      return "150 450 10240";
    }
  },

  sort: {
    description: "Ordena linhas",
    execute: () => {
      return "arquivo1\narquivo2\narquivo3";
    }
  },

  uniq: {
    description: "Remove duplicatas",
    execute: () => {
      return "linha1\nlinha2\nlinha3";
    }
  },

  base64: {
    description: "Decodifica Base64",
    execute: (args) => {
      if (args && args.startsWith('-d ')) {
        const str = args.substring(3);
        try {
          return `Decodificado: ${atob(str)}`;
        } catch {
          return "❌ String Base64 inválida";
        }
      }
      return "Uso: base64 -d [string]";
    }
  },

  echo: {
    description: "Repete texto",
    execute: (args) => {
      return args || "";
    }
  },

  clear: {
    description: "Limpa o terminal",
    execute: () => {
      const terminal = document.getElementById('interactive-terminal');
      if (terminal) {
        terminal.innerHTML = '<div class="command-line">Digite \'help\' para comandos disponíveis</div>';
      }
      return null;
    }
  },

  cls: {
    description: "Alias para clear",
    execute: () => {
      return TERMINAL_COMMANDS.clear.execute();
    }
  },

  history: {
    description: "Histórico de comandos",
    execute: () => {
      return " 1  help\n 2  ls -la\n 3  cd puzzles\n 4  cat README.md";
    }
  },

  status: {
    description: "Status dos puzzles",
    execute: () => {
      const solved = localStorage.getItem('solvedPuzzles') ?
        JSON.parse(localStorage.getItem('solvedPuzzles')).length : 0;
      return `📊 Progresso: ${solved}/50 puzzles resolvidos`;
    }
  },

  about: {
    description: "Sobre o projeto",
    execute: () => {
      return "NÃO DESISTA DEV v3.0 - Plataforma educacional de investigação digital";
    }
  },

  hint: {
    description: "Dica do dia",
    execute: () => {
      const hints = [
        "Sempre inspecione o código fonte (F12)",
        "Esteganografia LSB esconde dados nos bits menos significativos",
        "Use 'strings' para extrair texto de binários",
        "Wireshark é seu melhor amigo para análise de rede"
      ];
      return "💡 DICA: " + hints[Math.floor(Math.random() * hints.length)];
    }
  },

  fortune: {
    description: "Mensagem inspiradora",
    execute: () => {
      const fortunes = [
        "Nunca desista, a flag está mais perto do que você imagina",
        "Todo mestre já foi um iniciante que não desistiu",
        "A investigação é 10% técnica e 90% persistência"
      ];
      return "🎯 " + fortunes[Math.floor(Math.random() * fortunes.length)];
    }
  }
};

// ==================== FUNÇÃO PROCESS COMMAND ====================
function processCommand(command) {
  const terminal = document.getElementById('interactive-terminal');
  const output = document.createElement('div');
  output.className = 'command-line';

  const parts = command.split(' ');
  const cmd = parts[0];
  const args = parts.slice(1).join(' ');

  if (cmd === 'clear' || cmd === 'cls') {
    TERMINAL_COMMANDS.clear.execute();
    return;
  }

  if (TERMINAL_COMMANDS[cmd]) {
    const result = TERMINAL_COMMANDS[cmd].execute(args);
    if (result !== null) {
      output.innerHTML = `$ ${command}<br>${result}`;
      terminal.appendChild(output);
    }
  } else if (command === '') {
    output.innerHTML = `$ `;
    terminal.appendChild(output);
  } else {
    output.innerHTML = `$ ${command}<br>Comando não encontrado: ${cmd}. Digite 'help'.`;
    terminal.appendChild(output);
  }

  const newInputLine = document.createElement('div');
  newInputLine.className = 'command-line';
  newInputLine.innerHTML = '$ <span contenteditable="true" class="terminal-input" id="terminal-input"></span>';
  terminal.appendChild(newInputLine);

  const newInput = document.getElementById('terminal-input');
  if (newInput) {
    newInput.focus();
    newInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        processCommand(newInput.innerText.trim().toLowerCase());
        newInput.innerText = '';
      }
    });
  }
}

// ==================== FUNÇÃO SETUP TERMINAL ====================
function setupTerminal() {
  const terminal = document.getElementById('interactive-terminal');
  const input = document.getElementById('terminal-input');

  if (!terminal || !input) return;

  input.focus();

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const command = input.innerText.trim().toLowerCase();
      processCommand(command);
      input.innerText = '';
    }
  });

  terminal.addEventListener('click', () => {
    input.focus();
  });
}

// ==================== FUNÇÕES PRINCIPAIS ====================
document.addEventListener('DOMContentLoaded', () => {
  console.log('%c🚀 Sistema de investigação iniciado...', 'color: #00ff9d');

  console.log(`%c${EASTER_EGGS.ascii}`, 'color: #00ff9d');
  console.log(`%c${EASTER_EGGS.message}`, 'color: #66c0f0');
  console.log(`%c${EASTER_EGGS.flag}`, 'color: #ff3e3e; font-weight: bold');

  inicializarComponentes();
  carregarPuzzles();
  carregarFerramentas();
  carregarDocs();
  setupTerminal();
  setupMatrix();
  setupEasterEggs();
  setupCounters();
});

function inicializarComponentes() {
  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) {
    heroTitle.innerHTML = '> INICIANDO INVESTIGAÇÃO...';
  }

  const solved = localStorage.getItem('solvedPuzzles');
  if (solved) {
    const solvedIds = JSON.parse(solved);
    puzzles.forEach(p => {
      if (solvedIds.includes(p.id)) {
        p.solved = true;
      }
    });
  }
}

function carregarPuzzles() {
  const grid = document.getElementById('puzzles-grid');
  if (!grid) return;

  grid.innerHTML = '';
  puzzles.forEach(puzzle => {
    const card = document.createElement('div');
    card.className = 'puzzle-card';
    card.dataset.id = puzzle.id;

    let difficultyColor = {
      'easy': '#00aa00',
      'medium': '#ffaa00',
      'hard': '#ff3e3e',
      'expert': '#9b59b6',
      'master': '#e74c3c'
    }[puzzle.difficulty];

    const statusClass = puzzle.solved ? 'solved' : 'unsolved';
    const statusIcon = puzzle.solved ? 'fa-check-circle' : 'fa-lock-open';
    const statusText = puzzle.solved ? 'RESOLVIDO' : 'NÃO RESOLVIDO';

    card.innerHTML = `
            <div class="puzzle-icon">
                <i class="fas ${puzzle.icon}"></i>
            </div>
            <h3>${puzzle.title}</h3>
            <p>${puzzle.description}</p>
            <span class="puzzle-difficulty" style="background: ${difficultyColor}20; color: ${difficultyColor}; border: 1px solid ${difficultyColor};">${puzzle.difficulty.toUpperCase()}</span>
            <div class="puzzle-status">
                <span><i class="far fa-clock"></i> ${puzzle.time}</span>
                <span class="${statusClass}"><i class="fas ${statusIcon}"></i> ${statusText}</span>
            </div>
            <a href="${puzzle.link}" class="puzzle-link">> ACESSAR PUZZLE <i class="fas fa-arrow-right"></i></a>
        `;

    grid.appendChild(card);
  });
}

function carregarFerramentas() {
  const grid = document.getElementById('tools-grid');
  if (!grid) return;

  grid.innerHTML = '';
  tools.forEach(tool => {
    const item = document.createElement('div');
    item.className = 'tool-item';
    item.innerHTML = `
            <i class="fas ${tool.icon}"></i>
            <div>
                <h4>${tool.name}</h4>
                <small>${tool.description}</small>
            </div>
        `;
    grid.appendChild(item);
  });
}

function carregarDocs() {
  const grid = document.getElementById('docs-grid');
  if (!grid) return;

  grid.innerHTML = '';
  docs.forEach(doc => {
    const item = document.createElement('a');
    item.href = doc.link;
    item.className = 'doc-item';
    item.innerHTML = `
            <i class="fas ${doc.icon}"></i>
            <div>
                <h4>${doc.title}</h4>
                <small>${doc.description}</small>
            </div>
        `;
    grid.appendChild(item);
  });
}

// ==================== MATRIX BACKGROUND ====================
function setupMatrix() {
  const canvas = document.getElementById('matrix');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
  const matrixArray = matrix.split("");

  const fontSize = 14; // Aumentado
  const columns = canvas.width / fontSize;

  const drops = [];
  for (let x = 0; x < columns; x++) {
    drops[x] = 1;
  }

  function drawMatrix() {
    // Fundo mais escuro = rastro mais longo
    ctx.fillStyle = '#00000015';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Verde mais brilhante
    ctx.fillStyle = '#00ff9d';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(drawMatrix, 30); // Mais rápido
}
//========= easteregg ============= /

function setupEasterEggs() {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;

  document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        mostrarEasterEgg();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }

    if (e.key === 'd' && e.ctrlKey && e.shiftKey) {
      mostrarEasterEgg();
    }
  });

  let clickCount = 0;
  const title = document.querySelector('.terminal-title');
  if (title) {
    title.addEventListener('click', () => {
      clickCount++;
      if (clickCount === 10) {
        mostrarEasterEgg();
        clickCount = 0;
      }
      setTimeout(() => {
        clickCount = 0;
      }, 3000);
    });
  }
}

function mostrarEasterEgg() {
  const modal = document.getElementById('easter-egg-modal');
  if (!modal) return;

  const asciiElement = modal.querySelector('.ascii-art');
  const messageElement = modal.querySelector('.easter-egg-message');

  if (asciiElement && messageElement) {
    asciiElement.textContent = EASTER_EGGS.ascii;
    messageElement.textContent = EASTER_EGGS.message + ' ' + EASTER_EGGS.flag;
    modal.style.display = 'block';

    const closeBtn = modal.querySelector('.close');
    if (closeBtn) {
      closeBtn.onclick = () => {
        modal.style.display = 'none';
      };
    }

    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  }
}

function setupCounters() {
  const agentCounter = document.getElementById('agent-counter');
  if (agentCounter) {
    setInterval(() => {
      const current = parseInt(agentCounter.textContent);
      const change = Math.floor(Math.random() * 10) - 5;
      let novo = current + change;
      if (novo < 1300) novo = 1300;
      if (novo > 1400) novo = 1400;
      agentCounter.textContent = novo;
    }, 5000);
  }

  const flagsCounter = document.getElementById('flags-count');
  if (flagsCounter) {
    const solved = localStorage.getItem('solvedPuzzles');
    flagsCounter.textContent = solved ? JSON.parse(solved).length : 0;
  }

  const puzzlesCounter = document.getElementById('puzzles-count');
  if (puzzlesCounter) {
    puzzlesCounter.textContent = puzzles.length;
  }
}

function marcarPuzzleResolvido(puzzleId) {
  let solved = localStorage.getItem('solvedPuzzles');
  solved = solved ? JSON.parse(solved) : [];

  if (!solved.includes(puzzleId)) {
    solved.push(puzzleId);
    localStorage.setItem('solvedPuzzles', JSON.stringify(solved));

    const flagsCounter = document.getElementById('flags-count');
    if (flagsCounter) {
      flagsCounter.textContent = solved.length;
    }

    carregarPuzzles();
  }
}

function decodeBase64(str) {
  try {
    return atob(str);
  } catch {
    return "Erro ao decodificar";
  }
}

function isBase64(str) {
  try {
    return btoa(atob(str)) === str;
  } catch {
    return false;
  }
}

window.investigador = {
  decodeBase64,
  isBase64,
  marcarPuzzleResolvido,
  puzzles,
  tools,
  docs
};

console.log('%cDigite investigador. para ver as funções disponíveis', 'color: #66c0f0');
