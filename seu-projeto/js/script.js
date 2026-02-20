// script.js - Lógica da Lista de Tarefas (AV1)

const tarefas = [];

// Seleções do DOM
const form = document.querySelector('#form-tarefa');
const inputTarefa = document.querySelector('#tarefa-input');
const listaTarefas = document.querySelector('#lista-tarefas');
const mensagemErro = document.querySelector('#mensagem-erro');

// Valida o texto da tarefa (retorna true se válido)
function validarTarefa(texto) {
  return texto && texto.trim() !== '';
}

// Renderiza a lista de tarefas a partir do array `tarefas`
function renderTarefas() {
  // Limpa a lista
  listaTarefas.textContent = '';

  // Renderiza cada tarefa
  tarefas.forEach((tarefa, index) => {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = tarefa;
    span.classList.add('tarefa-text');

    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.classList.add('tarefa-remover');
    btnRemover.addEventListener('click', () => {
      tarefas.splice(index, 1);
      renderTarefas();
    });

    li.appendChild(span);
    li.appendChild(btnRemover);
    listaTarefas.appendChild(li);
  });
}

// Mostra mensagem de erro no DOM
function mostrarErro(texto) {
  mensagemErro.textContent = texto;
  mensagemErro.classList.remove('hidden');
}

// Limpa mensagem de erro
function limparErro() {
  mensagemErro.textContent = '';
  mensagemErro.classList.add('hidden');
}

// Evento de submit do formulário
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const valor = inputTarefa.value;

  if (!validarTarefa(valor)) {
    mostrarErro('Por favor, insira uma tarefa não vazia.');
    return;
  }

  // Adiciona tarefa ao array e atualiza a interface
  tarefas.push(valor.trim());
  inputTarefa.value = '';
  limparErro();
  renderTarefas();
});

// Ao digitar, atualiza/limpa a mensagem de erro (feedback imediato)
inputTarefa.addEventListener('input', () => {
  if (mensagemErro.textContent) {
    if (validarTarefa(inputTarefa.value)) {
      limparErro();
    }
  }
});

// Render inicial (caso queira pré-popular)
renderTarefas();
