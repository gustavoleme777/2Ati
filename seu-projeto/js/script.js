const f=document.getElementById('f'),i=document.getElementById('i'),L=document.getElementById('list'),E=document.getElementById('err');
const tasks=[];
function r(){L.textContent='';tasks.forEach((t,idx)=>{let li=document.createElement('li');li.textContent=t;li.onclick=()=>{tasks.splice(idx,1);r()};L.appendChild(li)})}
f.onsubmit=e=>{e.preventDefault();let v=i.value.trim();if(!v){E.textContent='Digite uma tarefa';return}tasks.push(v);i.value='';E.textContent='';r()}
