let lista = JSON.parse(localStorage.getItem('tarefas')) || [];

function renderizar() {
    const ul = document.getElementById('lista');
    ul.innerHTML = '';
    lista.forEach((item, index) => {
        ul.innerHTML += `<li>${item} <button onclick="remover(${index})">X</button></li>`;
    });
}

function adicionar() {
    const input = document.getElementById('tarefa');
    const valor = input.value.trim();
    if (valor === '') return;


lista.push(valor);
localStorage.setItem('tarefas', JSON.stringify(lista));
input.value = '';
renderizar();
}

function remover(i) {
    lista.splice(i, 1);
    localStorage.setItem('tarefas', JSON.stringify(lista));
    renderizar();
}

renderizar();