Lista de Tarefas - AV1

Este repositório contém a primeira parte (AV1) da avaliação.

Estrutura do projeto:
- index.html
- css/style.css
- js/script.js

Funcionalidades implementadas:
- Adicionar tarefas (formulário com submit e preventDefault)
- Validação simples (não permite tarefa vazia, usa trim())
- Exibição de mensagem de erro no DOM
- Renderização da lista a partir de um array em memória (`const tarefas = []`)
- Remover tarefa (botão "Remover")

Como testar localmente (Windows PowerShell):

cd "./seu-projeto"
python -m http.server 8000

Abra no navegador: http://localhost:8000
