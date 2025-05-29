const numeros = [1, 2, 3, 4, 5];

function testMap() {
    const dobro = numeros.map(num => num * 2);
    document.getElementById('resposta').innerText = `map(): [${dobro}]`;
}

function testFilter() {
    const e = numeros.filter(num => num % 2 === 0);
    document.getElementById('resposta').innerText = `filter(): [${e}]`;
}

function testReduce() {
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    document.getElementById('resposta').innerText = `reduce(): ${soma}`;
}

function testForEach() {
    let result = '';
    numeros.forEach(num => result += num + ' ');
    document.getElementById('resposta').innerText = `forEach(): ${result}`;
}

function exibirLista() {
    const lista = document.getElementById('listaNumeros');
    lista.innerHTML = ''; 

    numeros.forEach((num, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${num} 
            <button onclick="editarNumero(${index})">Editar</button>
            <button onclick="excluirNumero(${index})">Excluir</button>`;
        lista.appendChild(li);
    });
}

function editarNumero(index) {
    const novoNumero = prompt('Digite o novo valor para o número:', numeros[index]);
    if (novoNumero !== null && !isNaN(novoNumero)) {
        numeros[index] = Number(novoNumero);
        exibirLista(); 
    }
}

function excluirNumero(index) {
    if (confirm('Tem certeza que deseja excluir este número?')) {
        numeros.splice(index, 1);
        exibirLista(); 
    }
}

exibirLista();
