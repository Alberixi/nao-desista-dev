// Dados dos cards com tutoriais completos
const cardsData = [
    {
        id: 1,
        title: "CSS Grid: Layouts Modernos",
        sub: "Tutorial completo • 15 min leitura",
        content: "Aprenda CSS Grid do zero ao avançado. Domine layouts responsivos, grids complexos e dicas de performance.",
        codePreview: "display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));",
        tag: "CSS ESSENCIAL",
        difficulty: "Intermediário",
        link: "pages/css-grid.html"
    },
    {
        id: 2,
        title: "JavaScript Assíncrono na Prática",
        sub: "Tutorial avançado • 20 min leitura",
        content: "Entenda Promises, Async/Await, tratamento de erros e como evitar callback hell com exemplos reais.",
        codePreview: "async function fetchData() { const data = await fetch(url); return data.json(); }",
        tag: "JS MODERNO",
        difficulty: "Avançado",
        link: "pages/javascript-async.html"
    },
    {
        id: 3,
        title: "Dark Mode com Variáveis CSS",
        sub: "Projeto prático • 12 min leitura",
        content: "Implemente tema claro/escuro de forma nativa, persistência com localStorage e transições suaves.",
        codePreview: ":root { --bg: #fff; } body.dark { --bg: #000; }",
        tag: "UI/UX",
        difficulty: "Iniciante",
        link: "pages/dark-mode.html"
    },
    {
        id: 4,
        title: "React Hooks: useMemo e useCallback",
        sub: "Performance • 18 min leitura",
        content: "Otimize seus componentes React com hooks de memorização. Evite renderizações desnecessárias.",
        codePreview: "const memoizedValue = useMemo(() => expensiveCalc(data), [data]);",
        tag: "REACT",
        difficulty: "Intermediário",
        link: "pages/react-hooks.html"
    },
    {
        id: 5,
        title: "Python: Automação com Scripts",
        sub: "Ferramentas dev • 25 min leitura",
        content: "Crie scripts para automatizar tarefas repetitivas, organizar arquivos e enviar emails automaticamente.",
        codePreview: "import os; os.rename('old.txt', 'new.txt')",
        tag: "PYTHON",
        difficulty: "Iniciante",
        link: "pages/python-automation.html"
    },
    {
        id: 6,
        title: "Git Workflow para Equipes",
        sub: "Colaboração • 15 min leitura",
        content: "Git Flow, commits semânticos, pull requests e resolução de conflitos em equipes de desenvolvimento.",
        codePreview: "git commit -m 'feat: add dark mode toggle'",
        tag: "DEVOPS",
        difficulty: "Intermediário",
        link: "pages/git-workflow.html"
    },
    {
        id: 7,
        title: "Estrutura de Dados: Linked List",
        sub: "Algoritmos • 20 min leitura",
        content: "Implemente listas encadeadas em JavaScript. Entenda inserção, remoção e busca em estruturas de dados.",
        codePreview: "class Node { constructor(val) { this.val = val; this.next = null; } }",
        tag: "ALGORITMOS",
        difficulty: "Intermediário",
        link: "pages/data-structures.html"
    },
    {
        id: 8,
        title: "Vite vs Webpack: Qual usar?",
        sub: "Build tools • 12 min leitura",
        content: "Comparativo detalhado entre Vite e Webpack. Performance, configuração e casos de uso ideais.",
        codePreview: "npm create vite@latest my-app -- --template react",
        tag: "FERRAMENTAS",
        difficulty: "Intermediário",
        link: "pages/vite-webpack.html"
    },
    {
        id: 9,
        title: "Acessibilidade na Web (WCAG)",
        sub: "Inclusão • 15 min leitura",
        content: "Melhore a acessibilidade do seu site com práticas WCAG. Semântica, contraste e navegação por teclado.",
        codePreview: "<button aria-label='Fechar menu'>✖</button>",
        tag: "BEST PRACTICES",
        difficulty: "Iniciante",
        link: "pages/accessibility.html"
    }
];

// Função para renderizar os cards
function renderCards() {
    const container = document.getElementById('cardsContainer');
    if (!container) return;
    
    container.innerHTML = cardsData.map(card => `
        <article class="card">
            <div class="card-badge">${card.difficulty}</div>
            <div class="card-header">
                <h3 class="card-title">${card.title}</h3>
                <div class="card-sub">${card.sub}</div>
            </div>
            <div class="card-content">
                <p>${card.content}</p>
                <div class="code-preview">
                    <code>💻 ${card.codePreview}</code>
                </div>
            </div>
            <div class="card-footer">
                <span class="tag">${card.tag}</span>
                <a href="${card.link}" class="btn-link">Ver tutorial completo →</a>
            </div>
        </article>
    `).join('');
}

// Gerenciamento de Tema
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark');
        updateToggleButton(true);
    } else {
        document.body.classList.remove('dark');
        updateToggleButton(false);
    }
}

function updateToggleButton(isDark) {
    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
        const icon = btn.querySelector('.toggle-icon');
        const text = btn.querySelector('.toggle-text');
        if (isDark) {
            icon.textContent = '☀️';
            text.textContent = 'Modo Claro';
        } else {
            icon.textContent = '🌙';
            text.textContent = 'Modo Escuro';
        }
    }
}

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateToggleButton(isDark);
}

// Adicionar animação de entrada suave
function addScrollAnimation() {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${index * 0.1}s`;
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderCards();
    initTheme();
    
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }
    
    setTimeout(addScrollAnimation, 100);
});

// Salvar tema e preferências
window.addEventListener('beforeunload', () => {
    // Limpeza opcional
});