// tutoriais/data/tutorials-data.js
const tutorialsData = {
    // Tutoriais existentes
    existing: [
        {
            id: 1,
            title: "CSS Grid: Layouts Modernos",
            description: "Aprenda CSS Grid do zero ao avançado. Domine layouts responsivos e grids complexos.",
            codePreview: "display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));",
            tag: "CSS",
            difficulty: "Intermediário",
            duration: "15 min",
            path: "pages/css-grid.html",
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
            path: "pages/javascript-async.html",
            category: "frontend"
        }
        // ... outros tutoriais existentes
    ],

    // NOVOS TUTORIAIS - SEGURANÇA
    security: [
        {
            id: 101,
            title: "XSS (Cross-Site Scripting)",
            description: "Entenda como prevenir ataques XSS. Tipos: Refletido, Armazenado e DOM-based.",
            codePreview: "// Sanitização de entrada\ndangerousString.replace(/[<>&]/g, function(m) {...})",
            tag: "Security",
            difficulty: "Intermediário",
            duration: "25 min",
            path: "pages/novos/security/xss.html",
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
            path: "pages/novos/security/csrf.html",
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
            path: "pages/novos/security/sql-injection.html",
            category: "security"
        },
        {
            id: 104,
            title: "JWT Security",
            description: "Boas práticas com JSON Web Tokens: assinatura, expiração e armazenamento seguro.",
            codePreview: "// JWT Verificação\njwt.verify(token, secret, { algorithms: ['HS256'] });",
            tag: "Security",
            difficulty: "Avançado",
            duration: "25 min",
            path: "pages/novos/security/jwt-security.html",
            category: "security"
        }
    ],

    // NOVOS TUTORIAIS - LINGUAGENS
    languages: [
        {
            id: 201,
            title: "PHP: Do Básico ao Avançado",
            description: "Aprenda PHP desde a sintaxe básica até recursos modernos como PDO e namespaces.",
            codePreview: "<?php\necho 'Hello, ' . $name . '!';\n?>",
            tag: "PHP",
            difficulty: "Iniciante",
            duration: "40 min",
            path: "pages/novos/languages/php-basico.html",
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
            path: "pages/novos/languages/php-poo.html",
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
            path: "pages/novos/languages/cpp-basico.html",
            category: "language"
        },
        {
            id: 204,
            title: "C++ Avançado",
            description: "Recursos modernos do C++: smart pointers, move semantics, STL e templates.",
            codePreview: "std::unique_ptr<Widget> ptr = std::make_unique<Widget>();",
            tag: "C++",
            difficulty: "Avançado",
            duration: "50 min",
            path: "pages/novos/languages/cpp-avancado.html",
            category: "language"
        },
        {
            id: 205,
            title: "Delphi/Object Pascal",
            description: "Desenvolvimento com Delphi: formulários, componentes e aplicações desktop.",
            codePreview: "procedure TForm1.Button1Click(Sender: TObject);\nbegin\n  ShowMessage('Hello');\nend;",
            tag: "Delphi",
            difficulty: "Intermediário",
            duration: "30 min",
            path: "pages/novos/languages/delphi-basico.html",
            category: "language"
        },
        {
            id: 206,
            title: "Python Avançado",
            description: "Decorators, generators, context managers, asyncio e metaprogramação.",
            codePreview: "@decorator\ndef minha_funcao():\n    yield from range(10)",
            tag: "Python",
            difficulty: "Avançado",
            duration: "35 min",
            path: "pages/novos/languages/python-avancado.html",
            category: "language"
        },
        {
            id: 207,
            title: "Rust: A Linguagem do Futuro",
            description: "Introdução ao Rust: ownership, borrowing e segurança de memória.",
            codePreview: "fn main() {\n    let s = String::from('Hello');\n    println!('{}', s);\n}",
            tag: "Rust",
            difficulty: "Intermediário",
            duration: "40 min",
            path: "pages/novos/languages/rust-basico.html",
            category: "language"
        }
    ],

    // NOVOS TUTORIAIS - BACKEND
    backend: [
        {
            id: 301,
            title: "Node.js + Express",
            description: "Construa APIs RESTful com Node.js, Express e MongoDB.",
            codePreview: "app.get('/api/users', (req, res) => {\n  res.json(users);\n});",
            tag: "Node.js",
            difficulty: "Intermediário",
            duration: "35 min",
            path: "pages/novos/backend/nodejs-express.html",
            category: "backend"
        },
        {
            id: 302,
            title: "Django: Framework Python",
            description: "Desenvolvimento web com Django: models, views, templates e admin.",
            codePreview: "class Post(models.Model):\n    title = models.CharField(max_length=200)",
            tag: "Django",
            difficulty: "Intermediário",
            duration: "45 min",
            path: "pages/novos/backend/django-basico.html",
            category: "backend"
        }
    ],

    // NOVOS TUTORIAIS - DATABASE
    database: [
        {
            id: 401,
            title: "SQL: Consultas Essenciais",
            description: "Domine SELECT, JOIN, GROUP BY e subconsultas em SQL.",
            codePreview: "SELECT u.name, COUNT(o.id)\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nGROUP BY u.id;",
            tag: "SQL",
            difficulty: "Iniciante",
            duration: "30 min",
            path: "pages/novos/database/sql-basico.html",
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
            path: "pages/novos/database/mongodb.html",
            category: "database"
        }
    ],

    // NOVOS TUTORIAIS - DEVOPS
    devops: [
        {
            id: 501,
            title: "Docker: Containerização",
            description: "Crie, gerencie e orquestre containers Docker para suas aplicações.",
            codePreview: "FROM node:18\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCMD ['npm', 'start']",
            tag: "Docker",
            difficulty: "Intermediário",
            duration: "35 min",
            path: "pages/novos/devops/docker-basico.html",
            category: "devops"
        },
        {
            id: 502,
            title: "CI/CD com GitHub Actions",
            description: "Automatize testes e deploys com pipelines de integração contínua.",
            codePreview: "name: CI\non: [push]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2",
            tag: "DevOps",
            difficulty: "Intermediário",
            duration: "30 min",
            path: "pages/novos/devops/ci-cd.html",
            category: "devops"
        }
    ]
};

// Função para buscar todos os tutoriais
function getAllTutorials() {
    return [
        ...tutorialsData.existing,
        ...tutorialsData.security,
        ...tutorialsData.languages,
        ...tutorialsData.backend,
        ...tutorialsData.database,
        ...tutorialsData.devops
    ];
}

// Função para filtrar por categoria
function getTutorialsByCategory(category) {
    return getAllTutorials().filter(t => t.category === category);
}

// Função para buscar tutorial por ID
function getTutorialById(id) {
    return getAllTutorials().find(t => t.id === id);
}