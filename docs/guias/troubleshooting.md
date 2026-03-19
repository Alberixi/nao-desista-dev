# 🔧 Guia de Troubleshooting

## Problemas Comuns e Soluções

## 🚫 Puzzle não carrega

### Sintoma
A página do puzzle fica em branco ou não carrega o CSS.

### Soluções
1. **Verifique o caminho dos arquivos**
   ```bash
   # Estrutura correta:
   raiz/
   ├── assets/
   │   ├── css/
   │   │   └── style.css
   │   └── js/
   │       └── script.js
   └── puzzles/
       └── nivel-x/
           └── puzzle.html

Links corretos no HTML

<link rel="stylesheet" href="../../assets/css/style.css">
<script src="../../assets/js/script.js"></script>

Abra o console do navegador (F12) e veja erros 404

🔗 Botões de navegação não funcionam
Sintoma
Os botões "Anterior" e "Próximo" não levam aos puzzles corretos.

Solução
Verifique os links no arquivo HTML:

<div class="nav-buttons">
    <a href="01-audio-misterioso.html" class="nav-button">ANTERIOR</a>
    <a href="../../index.html" class="nav-button">ÍNDICE</a>
    <a href="03-rot13-simples.html" class="nav-button">PRÓXIMO</a>
</div>

 CSS não aplica
Sintoma
Página aparece sem cores, só texto preto no fundo branco.

Soluções
Caminho incorreto: Ajuste o href do CSS

Cache do navegador: Limpe o cache (Ctrl+F5)

Arquivo style.css existe?: Verifique se está em assets/css/

📊 Progresso não salva
Sintoma
Puzzles resolvidos voltam a aparecer como não resolvidos.

Soluções
LocalStorage limpo: Não limpe os dados do navegador

Função marcarPuzzleResolvido: Verifique se está sendo chamada

if (flag === CORRECT_FLAG) {
    if (typeof marcarPuzzleResolvido === 'function') {
        marcarPuzzleResolvido(id);
    }
}

 Terminal interativo não responde
Sintoma
Digitar comandos no terminal não produz saída.

Soluções
Verifique o script.js: A função setupTerminal() deve ser chamada no DOMContentLoaded

Conflito de IDs: O input deve ter id="terminal-input"

Erro no console: Verifique erros no console (F12)

📁 Arquivos não baixam
Sintoma
Links de download de assets não funcionam.

Solução
Crie os arquivos dummy ou reais na pasta correta:

# Criar arquivos dummy
New-Item -Path "assets/audio/espectro/misterio.wav" -ItemType File
New-Item -Path "assets/images/stego/gato.jpg" -ItemType File
New-Item -Path "assets/files/compactados/arquivo.zip" -ItemType File

Flag não é aceita
Sintoma
Mesmo com a flag correta, a verificação falha.

Soluções
Case sensitive: flag{...} vs FLAG{...}

Espaços extras: Remova espaços antes/depois

Formato incorreto: Deve ser exatamente flag{...}

Verifique a flag no código:

const CORRECT_FLAG = "flag{...}";

Puzzle 50 não mostra celebração
Sintoma
Ao acertar a flag final, não aparece a mensagem de parabéns.

Solução
Verifique se a função mostrarCelebracao() está definida:

function mostrarCelebracao() {
    alert('🏆 PARABÉNS MESTRE! 🏆');
    console.log('%c🏆 50 PUZZLES COMPLETOS! 🏆', 'color: gold; font-size: 20px');
}

Links quebrados no menu
Sintoma
Cliques nos puzzles da página inicial levam a páginas 404.

Solução
Atualize o script.js com os caminhos corretos:

{
    id: 1,
    link: "puzzles/nivel-1-iniciante/01-audio-misterioso.html"  // Caminho correto
}

 Docker/Vagrant não sobe
Sintoma
Laboratórios não iniciam.

Soluções
Verifique se Docker está instalado: docker --version

Verifique se Vagrant está instalado: vagrant --version

Portas conflitantes: Mude as portas no docker-compose.yml

Permissões: Execute como administrador

🔐 Erro de permissão nos scripts
Sintoma
Scripts bash não executam no Linux.

Solução

chmod +x labs/ambiente-linux/scripts/*.sh

Arquivos .md não renderizam
Sintoma
Documentação aparece como texto puro.

Solução
Use uma extensão de Markdown no VSCode ou visualize diretamente no GitHub.

🐛 Outros problemas
Se nenhuma solução acima funcionar:

Abra o console do navegador (F12)

Copie o erro exibido

Reporte no GitHub com:

Descrição do problema

Passos para reproduzir

Screenshot do erro

Informações do sistema

Ainda com problemas? Venha conversar conosco no telegram! 💬


Por hoje, completei 4 arquivos de documentação:
- ✅ como-comecar.md
- ✅ glossary.md
- ✅ faq.md
- ✅ troubleshooting.md

Amanhã continuamos com **docs/tutoriais/** (esteganografia.md, forense.md, criptografia.md, redes.md, web-security.md) e depois **docs/referencias/**.

Estamos avançando! 🚀


