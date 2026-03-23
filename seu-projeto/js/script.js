// Lista simples de tarefas
let tasks = [];

const form = document.getElementById('form');
const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');
const error = document.getElementById('error');
const count = document.getElementById('count');

// Adicionar tarefa
form.addEventListener('submit', e => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) {
        error.textContent = 'Digite algo';
        return;
    }
    tasks.push(text);
    input.value = '';
    error.textContent = '';
    updateList();
});

// Atualizar lista
function updateList() {
    list.innerHTML = '';
    count.textContent = tasks.length;
    tasks.forEach((task, i) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <div>
                <button class="edit" data-i="${i}">Editar</button>
                <button class="remove" data-i="${i}">Excluir</button>
            </div>
        `;
        list.appendChild(li);
    });
}

// Editar ou excluir
list.addEventListener('click', e => {
    if (e.target.tagName !== 'BUTTON') return;
    const i = +e.target.dataset.i;
    if (e.target.classList.contains('remove')) {
        tasks.splice(i, 1);
    } else if (e.target.classList.contains('edit')) {
        const newText = prompt('Editar:', tasks[i]);
        if (newText !== null && newText.trim()) {
            tasks[i] = newText.trim();
        }
    }
    updateList();
});

updateList();
