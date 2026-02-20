const f=document.getElementById('f'),i=document.getElementById('i'),L=document.getElementById('list'),E=document.getElementById('err'),C=document.getElementById('count');
const tasks=[];
function r(){L.textContent='';tasks.forEach((t,idx)=>{let li=document.createElement('li');li.innerHTML=`<span>${t}</span><button data-i="${idx}">remover</button>`;L.appendChild(li)});C.textContent=tasks.length}
L.addEventListener('click',e=>{if(e.target.tagName==='BUTTON'){tasks.splice(+e.target.dataset.i,1);r()}})
f.onsubmit=e=>{e.preventDefault();let v=i.value.trim();if(!v){E.textContent='Por favor escreva algo';return}tasks.push(v);i.value='';E.textContent='';r()}
