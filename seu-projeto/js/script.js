// Código muito simples
const form = document.getElementById('form');
const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');
const errorBox = document.getElementById('error');
const count = document.getElementById('count');

const tasks = [];

function render(){
	list.innerHTML = '';
		tasks.forEach((t,i)=>{
			const li = document.createElement('li');
			// Botão Editar (data-action) e Remover
			li.innerHTML = `<span>${t}</span>
				<button class="edit" data-i="${i}" data-action="edit">Editar</button>
				<button class="remove" data-i="${i}" data-action="remove">Remover</button>`;
			list.appendChild(li);
		});
	count.textContent = tasks.length;
}

form.addEventListener('submit', e=>{
	e.preventDefault();
	const v = input.value.trim();
	if(!v){ errorBox.textContent='Digite algo'; return }
	tasks.push(v);
	input.value=''; errorBox.textContent=''; render();
});

list.addEventListener('click', e=>{
	if(e.target.tagName==='BUTTON'){
		const i = +e.target.dataset.i;
		const action = e.target.dataset.action;
		if(action === 'remove'){
			tasks.splice(i,1);
			render();
		} else if(action === 'edit'){
			// Pergunta ao usuário o novo texto; se vazio, não altera
			const novo = prompt('Editar tarefa:', tasks[i]);
			if(novo === null) return; // usuário cancelou
			const v = novo.trim();
			if(!v){ alert('Texto vazio. Edição cancelada.'); return }
			tasks[i] = v;
			render();
		}
	}
});

render();
