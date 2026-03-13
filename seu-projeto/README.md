

# Lista de Tarefas — Versão didática

Este projeto foi reformulado para que um novo aluno de TI entenda facilmente como HTML, CSS e JavaScript trabalham juntos.

Arquivos principais
- `index.html` — estrutura da página e elementos (form, lista, contador).
- `css/style.css` — estilos visuais simples e claros.
- `js/script.js` — lógica em JavaScript, com comentários explicando cada parte.

Como rodar localmente (passo a passo)

1. Abra o PowerShell.
2. Navegue até a pasta do projeto:

	cd "c:\Users\gustavo_leme\Desktop\Ti\2Ati\seu-projeto"

3. Rode um servidor local rápido com Python (se tiver Python instalado):

	python -m http.server 8000

4. Abra o navegador em: http://localhost:8000

O que o professor costuma verificar

- Adicionar tarefa: digitar texto e clicar em "Adicionar" (o campo não aceita vazio).
- Mensagem de erro aparece quando você tenta adicionar um texto vazio.
- Remover tarefa: clicar no botão "Remover" ao lado da tarefa.
- Editar tarefa: clicar no botão "Editar" ao lado da tarefa — abre um prompt para alterar o texto.

Notas para estudantes

- O código JavaScript usa um array (`tasks`) para guardar os itens temporariamente em memória. Quando a página é recarregada, as tarefas são perdidas (sem armazenamento persistente).
- Como exercício: tente salvar as tarefas no `localStorage` para mantê-las entre recarregamentos.

Roteiro rápido para explicar em sala (2 minutos):

1. Mostre o HTML: input + botão + lista vazia.
2. Mostre `form` no JS: ele lê o valor com `input.value.trim()` e adiciona ao `tasks`.
3. Explique `render()`: transforma `tasks` em `<li>`s e atualiza o contador.
4. Explique os botões: `Editar` usa `prompt()` para receber novo texto; `Remover` usa `splice()` para apagar.

Link do repositório: https://github.com/gustavoleme777/2Ati
