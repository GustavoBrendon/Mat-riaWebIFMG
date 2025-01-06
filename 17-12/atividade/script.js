function removeDadosTabela(event){
    const texto = event.target.getAttribute('data_texto');
    if(confirm('Excluir a linha ?')){
        event.target.parentNode.parentNode.remove();
    }
}

function inserirDadosTabela(event){
    event.preventDefault();
    const corpoTabela = document.getElementById('corpo_tabela');
    const iptNome = document.getElementById('nome');
    const iptEmail = document.getElementById('email');
    const iptTelefone = document.getElementById('telefone');
    const iptSenha = document.getElementById('senha');
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
    const td6 = document.createElement('td');
    const btEx = document.createElement('button');

    btEx.innerText = 'Excluir';
    btEx.classList.add('btn');
    btEx.classList.add('btn-danger');
    btEx.setAttribute('data_texto', iptNome.value);
    btEx.setAttribute('data_texto', iptEmail.value);
    btEx.setAttribute('data_texto', iptTelefone.value);
    btEx.setAttribute('data_texto', iptSenha.value);
    btEx.addEventListener('click', removeDadosTabela);
    td1.innerText = '#';
    td2.innerText = iptNome.value;
    td3.innerText = iptEmail.value;
    td4.innerText = iptTelefone.value;
    td5.innerText = iptSenha.value;
    td6.append(btEx);
    tr.append(td1,td2,td3,td4,td5, td6);
    corpoTabela.append(tr);
    event.target.reset()
}

const form = document.querySelector('form');
form.addEventListener('submit', inserirDadosTabela);