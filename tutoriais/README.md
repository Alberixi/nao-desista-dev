# 🚀 Não Desista Dev - Portal de Tutoriais

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

Um portal educacional focado em ajudar desenvolvedores a aprender através de **erros reais**, **correções práticas** e **evolução contínua** do código.

## ✨ Características

- 🎨 **Temas Claro/Escuro** com persistência local
- 📱 **Design Responsivo** para todos os dispositivos
- 📚 **9 Tutoriais Completos** com exemplos práticos
- ⚠️ **Seção de Erros Comuns** em cada tutorial
- 🚀 **Código Evolutivo** do básico ao avançado
- 🎯 **Exercícios Práticos** para fixação

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS para temas)
- JavaScript Vanilla
- CSS Grid e Flexbox
- LocalStorage API

## 📂 Estrutura do Projeto
nao-desista-dev/
│
├── index.html # Página principal
├── style.css # Estilos globais
├── script.js # JavaScript principal
│
├── pages/ # Tutoriais completos
│ ├── css-grid.html
│ ├── javascript-async.html
│ ├── dark-mode.html
│ ├── react-hooks.html
│ ├── python-automation.html
│ ├── git-workflow.html
│ ├── data-structures.html
│ ├── vite-webpack.html
│ └── accessibility.html
│
├── assets/ # Recursos estáticos
│ ├── images/
│ └── icons/
│
└── README.md

-------------------------------------------------------------------------------------------

## 📖 Tutoriais Incluídos

1. **CSS Grid: Layouts Modernos** - Aprenda desde o básico até técnicas avançadas de grid
2. **JavaScript Assíncrono** - Promises, Async/Await e tratamento de erros
3. **Dark Mode com Variáveis CSS** - Implementação completa com persistência
4. **React Hooks: useMemo e useCallback** - Otimização de performance
5. **Python: Automação com Scripts** - Automatize tarefas repetitivas
6. **Git Workflow para Equipes** - Colaboração e boas práticas
7. **Estrutura de Dados: Linked List** - Fundamentos de algoritmos
8. **Vite vs Webpack** - Comparativo de build tools
9. **Acessibilidade na Web (WCAG)** - Práticas inclusivas

## 🚀 Como Usar

### Opção 1: Visualizar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/nao-desista-dev.git

--------------------------------------------------------------------------------------------

Personalização
Cores do Tema
Para modificar as cores, edite as variáveis CSS no arquivo style.css:


:root {
    --accent: #f97316;     /* Laranja no modo claro */
    --accent-hover: #ea580c;
}

body.dark {
    --accent: #38bdf8;     /* Azul claro no modo escuro */
    --accent-hover: #0ea5e9;
}

---------------------------------------------------------------------------------------------

Adicionar Novos Tutoriais
Crie um novo arquivo HTML em pages/

Siga o modelo do tutorial existente

Adicione os dados no array cardsData em script.js

🤝 Como Contribuir
Faça um fork do projeto

Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)

Commit suas mudanças (git commit -m 'Add some AmazingFeature')

Push para a branch (git push origin feature/AmazingFeature)

Abra um Pull Request

📝 Estrutura de um Tutorial
Cada tutorial segue o padrão:

Introdução e objetivos

Erros comuns com exemplos

Correções passo a passo

Evolução do código (básico → avançado)

Dicas avançadas

Exercícios práticos

Recursos adicionais

🎯 Metodologia de Ensino
O projeto segue a filosofia "Aprenda com Erros":

Identifique o problema comum

Compreenda por que acontece

Corrija com a solução adequada

Evolua para práticas melhores

Pratique com exercícios reais

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

👥 Comunidade
GitHub: Não Desista Dev

Discord: Participe da nossa comunidade

Blog: Artigos e conteúdos exclusivos

🌟 Agradecimentos
A todos os desenvolvedores que compartilham conhecimento e ajudam a comunidade a crescer. Juntos, não desistimos!

---------------------------------------------------------------------------------------
Feito com ❤️ pela comunidade Não Desista Dev

template base para tutoriais no mesmo estilo. 


## 📝 Instruções para Completar os Demais Tutoriais

Cada tutorial deve seguir o mesmo padrão do `css-grid.html`. Aqui está um template que você pode usar para criar os outros 8 tutoriais:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[NOME DO TUTORIAL] | Não Desista Dev</title>
    <link rel="stylesheet" href="../style.css">
    <style>
        /* Copie os estilos do css-grid.html */
    </style>
</head>
<body>
    <!-- Header (igual ao css-grid.html) -->
    
    <main>
        <div class="container tutorial-container">
            <a href="../index.html" class="back-button">← Voltar para tutoriais</a>
            
            <div class="tutorial-header">
                <h1>[TÍTULO DO TUTORIAL]</h1>
                <div class="tutorial-meta">
                    <span>📖 [TEMPO] de leitura</span>
                    <span>🎯 Nível: [NÍVEL]</span>
                    <span>💻 Código prático</span>
                </div>
            </div>
            
            <!-- Seções do tutorial -->
            <div class="tutorial-section">
                <h2>📌 Introdução</h2>
                <p>[CONTEÚDO]</p>
            </div>
            
            <div class="tutorial-section">
                <h2>⚠️ Erro Comum #1</h2>
                <div class="error-box">
                    <strong>❌ Erro:</strong>
                    <div class="code-block">
                        <pre>[CÓDIGO COM ERRO]</pre>
                    </div>
                </div>
                <div class="success-box">
                    <strong>✅ Correção:</strong>
                    <div class="code-block">
                        <pre>[CÓDIGO CORRETO]</pre>
                    </div>
                </div>
            </div>
            
            <!-- Continue com mais seções -->
        </div>
    </main>
    
    <!-- Footer (igual ao css-grid.html) -->
    
    <script src="../script.js"></script>
</body>
</html>
