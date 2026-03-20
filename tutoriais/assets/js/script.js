// ============================================
// DADOS DOS TUTORIAIS
// ============================================

const tutorialsData = {
  // Tutoriais existentes
  frontend: [
    {
      id: 1,
      title: "CSS Grid: Layouts Modernos",
      description: "Aprenda CSS Grid do zero ao avançado. Domine layouts responsivos e grids complexos.",
      codePreview: "display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));",
      tag: "CSS",
      difficulty: "Intermediário",
      duration: "15 min",
      path: "pages/frontend/css-grid.html",
      category: "frontend"
    },
    {
      id: 2,
      title: "JavaScript Assíncrono",
      description: "Domine Promises, Async/Await e evite callback hell com exemplos práticos.",
      codePreview: "async function fetchData() { const data = await fetch(url); return data.json(); }",
      tag: "JavaScript",
      difficulty: "Avançado",
      duration: "20 min",
      path: "pages/frontend/javascript-async.html",
      category: "frontend"
    },
    {
      id: 3,
      title: "Dark Mode com Variáveis CSS",
      description: "Implemente tema claro/escuro de forma nativa, persistência com localStorage.",
      codePreview: ":root { --bg: #fff; } body.dark { --bg: #000; }",
      tag: "UI/UX",
      difficulty: "Iniciante",
      duration: "12 min",
      path: "pages/frontend/dark-mode.html",
      category: "frontend"
    },
    {
      id: 4,
      title: "React Hooks: useMemo e useCallback",
      description: "Otimize seus componentes React com hooks de memorização.",
      codePreview: "const memoizedValue = useMemo(() => expensiveCalc(data), [data]);",
      tag: "React",
      difficulty: "Intermediário",
      duration: "18 min",
      path: "pages/frontend/react-hooks.html",
      category: "frontend"
    }
  ],

  security: [
    {
      id: 101,
      title: "XSS (Cross-Site Scripting)",
      description: "Entenda como prevenir ataques XSS. Tipos: Refletido, Armazenado e DOM-based.",
      codePreview: "// Sanitização de entrada\ndangerousString.replace(/[<>&]/g, function(m) {...})",
      tag: "Security",
      difficulty: "Intermediário",
      duration: "25 min",
      path: "pages/security/xss.html",
      category: "security"
    },
    {
      id: 102,
      title: "CSRF (Cross-Site Request Forgery)",
      description: "Aprenda sobre CSRF e como proteger suas aplicações com tokens anti-CSRF.",
      codePreview: "// Token CSRF\n<input type='hidden' name='_token' value='{{ csrf_token() }}'>",
      tag: "Security",
      difficulty: "Intermediário",
      duration: "20 min",
      path: "pages/security/csrf.html",
      category: "security"
    },
    {
      id: 103,
      title: "SQL Injection",
      description: "Descubra como prevenir SQL Injection com prepared statements e ORM.",
      codePreview: "// Prepared Statement\n$stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?');",
      tag: "Security",
      difficulty: "Intermediário",
      duration: "30 min",
      path: "pages/security/sql-injection.html",
      category: "security"
    }
  ],

  languages: [
    {
      id: 201,
      title: "PHP: Do Básico ao Avançado",
      description: "Aprenda PHP desde a sintaxe básica até recursos modernos como PDO e namespaces.",
      codePreview: "<?php\necho 'Hello, ' . $name . '!';\n?>",
      tag: "PHP",
      difficulty: "Iniciante",
      duration: "40 min",
      path: "pages/languages/php-basico.html",
      category: "language"
    },
    {
      id: 202,
      title: "PHP: Programação Orientada a Objetos",
      description: "Domine POO em PHP: classes, herança, interfaces, traits e design patterns.",
      codePreview: "class User {\n    private $name;\n    public function __construct($name) {...}\n}",
      tag: "PHP",
      difficulty: "Intermediário",
      duration: "35 min",
      path: "pages/languages/php-poo.html",
      category: "language"
    },
    {
      id: 203,
      title: "C/C++: Fundamentos",
      description: "Introdução à programação com C e C++. Ponteiros, memória e estruturas de dados.",
      codePreview: "int main() {\n    printf('Hello World!\\n');\n    return 0;\n}",
      tag: "C/C++",
      difficulty: "Iniciante",
      duration: "45 min",
      path: "pages/languages/cpp-basico.html",
      category: "language"
    },
    {
      id: 204,
      title: "Delphi/Object Pascal",
      description: "Desenvolvimento com Delphi: formulários, componentes e aplicações desktop.",
      codePreview: "procedure TForm1.Button1Click(Sender: TObject);\nbegin\n  ShowMessage('Hello');\nend;",
      tag: "Delphi",
      difficulty: "Intermediário",
      duration: "30 min",
      path: "pages/languages/delphi-basico.html",
      category: "language"
    },
    {
      id: 205,
      title: "Python Avançado",
      description: "Decorators, generators, context managers, asyncio e metaprogramação.",
      codePreview: "@decorator\ndef minha_funcao():\n    yield from range(10)",
      tag: "Python",
      difficulty: "Avançado",
      duration: "35 min",
      path: "pages/languages/python-avancado.html",
      category: "language"
    }
  ],

  backend: [
    {
      id: 301,
      title: "Node.js + Express",
      description: "Construa APIs RESTful com Node.js, Express e MongoDB.",
      codePreview: "app.get('/api/users', (req, res) => {\n  res.json(users);\n});",
      tag: "Node.js",
      difficulty: "Intermediário",
      duration: "35 min",
      path: "pages/backend/nodejs-express.html",
      category: "backend"
    },
    {
      id: 302,
      title: "Django Framework",
      description: "Desenvolvimento web com Django: models, views, templates e admin.",
      codePreview: "class Post(models.Model):\n    title = models.CharField(max_length=200)",
      tag: "Django",
      difficulty: "Intermediário",
      duration: "45 min",
      path: "pages/backend/django-basico.html",
      category: "backend"
    }
  ],

  database: [
    {
      id: 401,
      title: "SQL: Consultas Essenciais",
      description: "Domine SELECT, JOIN, GROUP BY e subconsultas em SQL.",
      codePreview: "SELECT u.name, COUNT(o.id)\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nGROUP BY u.id;",
      tag: "SQL",
      difficulty: "Iniciante",
      duration: "30 min",
      path: "pages/database/sql-basico.html",
      category: "database"
    },
    {
      id: 402,
      title: "MongoDB: NoSQL na Prática",
      description: "Trabalhe com documentos, agregações e índices no MongoDB.",
      codePreview: "db.users.aggregate([\n  { $match: { age: { $gt: 18 } } },\n  { $group: { _id: '$city', count: { $sum: 1 } } }\n]);",
      tag: "MongoDB",
      difficulty: "Intermediário",
      duration: "30 min",
      path: "pages/database/mongodb.html",
      category: "database"
    }
  ],

  devops: [
    {
      id: 501,
      title: "Docker: Containerização",
      description: "Crie, gerencie e orquestre containers Docker para suas aplicações.",
      codePreview: "FROM node:18\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCMD ['npm', 'start']",
      tag: "Docker",
      difficulty: "Intermediário",
      duration: "35 min",
      path: "pages/devops/docker-basico.html",
      category: "devops"
    },
    {
      id: 502,
      title: "CI/CD com GitHub Actions",
      description: "Automatize testes e deploys com pipelines de integração contínua.",
      codePreview: "name: CI\non: [push]\njobs:\n  test:\n    runs-on: ubuntu-latest",
      tag: "DevOps",
      difficulty: "Intermediário",
      duration: "30 min",
      path: "pages/devops/ci-cd.html",
      category: "devops"
    },
    // {
    //     id: 503,
    //     title: "Vite vs Webpack: Qual Escolher?",
    //     description: "Comparativo detalhado entre Vite e Webpack. Performance, configuração e casos de uso ideais.",
    //    codePreview: "npm create vite@latest my-app -- --template react",
    //    tag: "Build Tools",
    //    difficulty: "Intermediário",
    //    duration: "15 min",
    //    path: "pages/devops/vite-webpack.html",
    //    category: "devops"
    // }
  ]
};

// ============================================
// FUNÇÕES DE ACESSO AOS DADOS
// ============================================

function getAllTutorials() {
  return [
    ...tutorialsData.frontend,
    ...tutorialsData.security,
    ...tutorialsData.languages,
    ...tutorialsData.backend,
    ...tutorialsData.database,
    ...tutorialsData.devops
  ];
}

function getTutorialsByCategory(category) {
  if (category === 'all') return getAllTutorials();
  return getAllTutorials().filter(t => t.category === category);
}

function getTutorialById(id) {
  return getAllTutorials().find(t => t.id === id);
}

// ============================================
// RENDERIZAÇÃO DOS CARDS
// ============================================

function renderCards(filteredTutorials = null) {
  const container = document.getElementById('cardsContainer');
  if (!container) return;

  const tutorials = filteredTutorials || getAllTutorials();

  if (tutorials.length === 0) {
    container.innerHTML = `
            <div style="text-align: center; padding: 3rem; grid-column: 1/-1;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-muted);"></i>
                <h3 style="margin-top: 1rem;">Nenhum tutorial encontrado</h3>
                <p style="color: var(--text-muted);">Tente buscar por outro termo ou categoria</p>
            </div>
        `;
    return;
  }

  container.innerHTML = tutorials.map(tutorial => `
        <article class="card" data-category="${tutorial.category}" data-tags="${tutorial.tag}">
            <div class="card-badge">${tutorial.difficulty}</div>
            <div class="card-header">
                <h3 class="card-title">${tutorial.title}</h3>
                <div class="card-sub">${tutorial.duration} • ${tutorial.tag}</div>
            </div>
            <div class="card-content">
                <p>${tutorial.description}</p>
                <div class="code-preview">
                    <code>💻 ${escapeHtml(tutorial.codePreview)}</code>
                </div>
            </div>
            <div class="card-footer">
                <span class="tag">${tutorial.tag}</span>
                <a href="${tutorial.path}" class="btn-link">Ver tutorial completo →</a>
            </div>
        </article>
    `).join('');
}

// Função auxiliar para escapar HTML
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ============================================
// FILTROS E BUSCA
// ============================================

let currentCategory = 'all';
let currentSearchTerm = '';

function filterTutorials() {
  let filtered = getTutorialsByCategory(currentCategory);

  if (currentSearchTerm) {
    const term = currentSearchTerm.toLowerCase();
    filtered = filtered.filter(tutorial =>
      tutorial.title.toLowerCase().includes(term) ||
      tutorial.description.toLowerCase().includes(term) ||
      tutorial.tag.toLowerCase().includes(term)
    );
  }

  renderCards(filtered);
}

function setupFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      currentCategory = category;

      // Atualizar botão ativo
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      filterTutorials();
    });
  });

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchTerm = e.target.value;
      filterTutorials();
    });
  }
}

// ============================================
// TEMA (DARK MODE)
// ============================================

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

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  renderCards();
  initTheme();
  setupFilters();

  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  console.log('✅ Portal de tutoriais carregado com sucesso!');
  console.log(`📚 Total de tutoriais disponíveis: ${getAllTutorials().length}`);
});
