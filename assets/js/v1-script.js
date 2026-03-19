// script.js - Não Desista Dev

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

// Comandos do terminal interativo
const TERMINAL_COMMANDS = {
    help: {
        description: "Mostra todos os comandos disponíveis",
        execute: () => {
            let output = "Comandos disponíveis:<br>";
            Object.entries(TERMINAL_COMMANDS).forEach(([cmd, data]) => {
                if (cmd !== 'clear') {
                    output += `<span class="text-secondary">${cmd}</span> - ${data.description}<br>`;
                }
            });
            return output;
        }
    },
    ls: {
        description: "Lista os puzzles disponíveis",
        execute: () => {
            return `
puzzles/<br>
├── <span class="text-secondary">puzzle-01-audio</span><br>
├── <span class="text-secondary">puzzle-02-base64</span><br>
├── <span class="text-secondary">puzzle-03-esteganografia</span><br>
└── <span class="text-secondary">puzzle-final</span><br>
<br>
docs/<br>
├── <span class="text-secondary">como-investigar.md</span><br>
├── <span class="text-secondary">linux.md</span><br>
└── <span class="text-secondary">ferramentas.md</span>
            `;
        }
    },
    about: {
        description: "Informações sobre o projeto",
        execute: () => {
            return `
Projeto NÃO DESISTA DEV<br>
Plataforma educacional de investigação digital.<br>
<br>
Versão: 2.0<br>
Autor: Mestre dos Investigadores<br>
Desafios: 4 puzzles ativos<br>
            `;
        }
    },
    status: {
        description: "Verifica o status do sistema",
        execute: () => {
            const solved = localStorage.getItem('solvedPuzzles') ? 
                JSON.parse(localStorage.getItem('solvedPuzzles')).length : 0;
            return `
Status do Sistema:<br>
<span class="text-secondary">Sistema:</span> Online<br>
<span class="text-secondary">Puzzles resolvidos:</span> ${solved}/4<br>
<span class="text-secondary">Agentes ativos:</span> 1337<br>
<span class="text-secondary">Modo:</span> Investigação<br>
            `;
        }
    },
    clear: {
        description: "Limpa o terminal",
        execute: () => {
            document.getElementById('interactive-terminal').innerHTML = 
                '<div class="command-line">Digite \'help\' para comandos disponíveis</div>';
            return null;
        }
    },
    date: {
        description: "Mostra a data e hora atuais",
        execute: () => {
            const now = new Date();
            return `Data atual: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
        }
    },
    echo: {
        description: "Repete o texto digitado (use: echo [texto])",
        execute: (args) => {
            return args ? args : "Digite algo para ecoar";
        }
    },
    whoami: {
        description: "Mostra o usuário atual",
        execute: () => {
            return "investigador@nao-desista-dev";
        }
    }
};

// ==================== DADOS DOS PUZZLES ====================
const puzzles = [
    // NÍVEL 1 - INICIANTE (10 puzzles)
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
    
    // NÍVEL 2 - INTERMEDIÁRIO (10 puzzles)
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
    
    // NÍVEL 3 - AVANÇADO (10 puzzles)
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
    }
];
// Nota: Para os próximos níveis, você vai adicionando mais puzzles aqui
// seguindo o mesmo padrão. Por enquanto, vamos manter só os 10 primeiros.

// ==================== DADOS DAS FERRAMENTAS ====================

const tools = [
    { name: "Análise de Áudio", icon: "fa-music", description: "Audacity, Sonic Visualiser" },
    { name: "Forense Digital", icon: "fa-microscope", description: "Autopsy, Sleuth Kit" },
    { name: "Criptografia", icon: "fa-lock", description: "OpenSSL, HashCat" },
    { name: "Comandos Linux", icon: "fa-linux", description: "grep, awk, sed, xxd" },
    { name: "Esteganografia", icon: "fa-image", description: "Steghide, Stegsolve" },
    { name: "Rede", icon: "fa-network-wired", description: "Wireshark, Nmap" }
];

// ==================== DADOS DA DOCUMENTAÇÃO ====================

const docs = [
    { 
        title: "Como Investigar", 
        icon: "fa-search", 
        description: "Guia básico para iniciantes",
        link: "docs/como-investigar.md"
    },
    { 
        title: "Guias Linux", 
        icon: "fa-linux", 
        description: "Comandos essenciais",
        link: "docs/linux.md"
    },
    { 
        title: "Ferramentas", 
        icon: "fa-tools", 
        description: "Recursos e materiais",
        link: "docs/ferramentas.md"
    }
];

// ==================== FUNÇÕES PRINCIPAIS ====================

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c🚀 Sistema de investigação iniciado...', 'color: #00ff9d');
    
    // Mostrar Easter Egg no console
    console.log(`%c${EASTER_EGGS.ascii}`, 'color: #00ff9d');
    console.log(`%c${EASTER_EGGS.message}`, 'color: #66c0f0');
    console.log(`%c${EASTER_EGGS.flag}`, 'color: #ff3e3e; font-weight: bold');
    
    // Mensagem no código fonte
    console.log('%cAgente, se você está lendo o código fonte, já deu o primeiro passo.', 'color: #ffaa00');
    console.log('%cYmFzZTY0IG5hbyBlIG8gZmluYWw=', 'color: #666');
    
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
    // Typing effect
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = '> INICIANDO INVESTIGAÇÃO...';
    }
    
    // Carregar puzzles resolvidos do localStorage
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
        
        const difficultyClass = `difficulty-${puzzle.difficulty}`;
        const statusClass = puzzle.solved ? 'solved' : 'unsolved';
        const statusIcon = puzzle.solved ? 'fa-check-circle' : 'fa-lock';
        const statusText = puzzle.solved ? 'RESOLVIDO' : (puzzle.locked ? 'BLOQUEADO' : 'NÃO RESOLVIDO');
        
        card.innerHTML = `
            <div class="puzzle-icon">
                <i class="fas ${puzzle.icon}"></i>
            </div>
            <h3>${puzzle.title}</h3>
            <p>${puzzle.description}</p>
            <span class="puzzle-difficulty ${difficultyClass}">${puzzle.difficulty.toUpperCase()}</span>
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

// ==================== TERMINAL INTERATIVO ====================

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
            setTimeout(() => {
                input.scrollIntoView();
            }, 100);
        }
    });
    
    // Clicar no terminal foca o input
    terminal.addEventListener('click', () => {
        input.focus();
    });
}

function processCommand(command) {
    const terminal = document.getElementById('interactive-terminal');
    const output = document.createElement('div');
    output.className = 'command-line';
    
    // Parse command and arguments
    const parts = command.split(' ');
    const cmd = parts[0];
    const args = parts.slice(1).join(' ');
    
    if (cmd === 'clear') {
        const result = TERMINAL_COMMANDS.clear.execute();
        if (result === null) return;
    } else if (TERMINAL_COMMANDS[cmd]) {
        if (cmd === 'echo') {
            output.innerHTML = `$ ${command}<br>${TERMINAL_COMMANDS[cmd].execute(args)}`;
        } else {
            output.innerHTML = `$ ${command}<br>${TERMINAL_COMMANDS[cmd].execute()}`;
        }
    } else if (command === '') {
        // Comando vazio, só adiciona nova linha
        output.innerHTML = `$ `;
    } else {
        output.innerHTML = `$ ${command}<br>Comando não encontrado: ${cmd}. Digite 'help' para ver os comandos disponíveis.`;
    }
    
    terminal.appendChild(output);
    
    // Adicionar novo input
    const newInputLine = document.createElement('div');
    newInputLine.className = 'command-line';
    newInputLine.innerHTML = '$ <span contenteditable="true" class="terminal-input" id="terminal-input"></span>';
    terminal.appendChild(newInputLine);
    
    // Configurar novo input
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

// ==================== MATRIX BACKGROUND ====================

function setupMatrix() {
    const canvas = document.getElementById('matrix');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    
    const drops = [];
    for(let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function drawMatrix() {
        ctx.fillStyle = '#0000000a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff9d';
        ctx.font = fontSize + 'px monospace';
        
        for(let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(drawMatrix, 35);
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ==================== EASTER EGGS ====================

function setupEasterEggs() {
    // Konami Code
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        // Konami Code
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                mostrarEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
        
        // Cheat code: 'dev'
        if (e.key === 'd' && e.ctrlKey && e.shiftKey) {
            mostrarEasterEgg();
        }
    });
    
    // Clicar 10 vezes no título
    let clickCount = 0;
    const title = document.querySelector('.terminal-title');
    if (title) {
        title.addEventListener('click', () => {
            clickCount++;
            if (clickCount === 10) {
                mostrarEasterEgg();
                clickCount = 0;
            }
            
            // Reset após 3 segundos
            setTimeout(() => {
                clickCount = 0;
            }, 3000);
        });
    }
    
    // Easter egg no console (já feito no início)
    
    // Mensagem oculta no código fonte
    console.log('%cParabéns! Você encontrou uma mensagem oculta!', 'color: #00ff9d; font-size: 16px; font-weight: bold');
    console.log('%cAgora tente decodificar: ZXhwbG9yZSBvIGNvbnRlw7pkbyBkbyB0ZXJtaW5hbCBpbnRlcmF0aXZv', 'color: #ffaa00');
}

function mostrarEasterEgg() {
    const modal = document.getElementById('easter-egg-modal');
    const asciiElement = modal.querySelector('.ascii-art');
    const messageElement = modal.querySelector('.easter-egg-message');
    
    if (modal && asciiElement && messageElement) {
        asciiElement.textContent = EASTER_EGGS.ascii;
        messageElement.textContent = EASTER_EGGS.message + ' ' + EASTER_EGGS.flag;
        modal.style.display = 'block';
        
        // Fechar modal
        const closeBtn = modal.querySelector('.close');
        closeBtn.onclick = () => {
            modal.style.display = 'none';
        };
        
        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }
}

// ==================== CONTADORES ====================

function setupCounters() {
    // Contador de agentes (simulado)
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
    
    // Contador de flags (simulado)
    const flagsCounter = document.getElementById('flags-count');
    if (flagsCounter) {
        const solved = localStorage.getItem('solvedPuzzles');
        if (solved) {
            const count = JSON.parse(solved).length;
            flagsCounter.textContent = count;
        }
    }
}

// ==================== UTILITÁRIOS ====================

// Função para marcar puzzle como resolvido
function marcarPuzzleResolvido(puzzleId) {
    let solved = localStorage.getItem('solvedPuzzles');
    solved = solved ? JSON.parse(solved) : [];
    
    if (!solved.includes(puzzleId)) {
        solved.push(puzzleId);
        localStorage.setItem('solvedPuzzles', JSON.stringify(solved));
        
        // Atualizar contador
        const flagsCounter = document.getElementById('flags-count');
        if (flagsCounter) {
            flagsCounter.textContent = solved.length;
        }
        
        // Recarregar puzzles para atualizar status
        carregarPuzzles();
    }
}

// Função para decodificar Base64
function decodeBase64(str) {
    try {
        return atob(str);
    } catch (e) {
        return "Erro ao decodificar";
    }
}

// Função para verificar se é Base64 válido
function isBase64(str) {
    try {
        return btoa(atob(str)) === str;
    } catch (err) {
        return false;
    }
}

// Exportar funções úteis para o console
window.investigador = {
    decodeBase64,
    isBase64,
    marcarPuzzleResolvido,
    puzzles,
    tools,
    docs
};

console.log('%cDigite investigador. para ver as funções disponíveis', 'color: #66c0f0');