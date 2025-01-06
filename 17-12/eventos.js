const bnt2 = document.getElementById('bnt2');
bnt2.addEventListener('click', testDocument);

function testeWindow(){
    // console.log(window);
    // console.log(window.document);
    // console.log(window.location);
    // window.open('https://www.google.com.br');
    // window.alert('Teste Window');

    console.log(window);
    console.log(document);
    console.log(location);
    open('https://www.google.com.br');
    alert('Teste Window');
}

const bnt1 = document.getElementById('bnt1');
bnt1.addEventListener('click', testeWindow);

function testDocument(){
    console.log(document);
    console.log(document.forms);
    console.log(document.links);
    console.log(document.images);
}

const bnt3 = document.getElementById('bnt3');
bnt3.addEventListener('click', testeBusca);

function testeBusca(){
    // pelo ID
    console.log(nome);

    // pelo ID pelo document
    const idNome = document.getElementById('nome');
    console.log(idNome);    

    // pelo nome da tag 
    const links = document.getElementsByTagName('a');
    console.log(links);

    // pelo seletor CSS (único elemento)
    const ele = document.querySelector('section a');
    console.log(ele);

    // pelo seletor CSS (vários elementos)
    const eles = document.querySelectorAll('section a');
    console.log(eles);
}

const bnt4 = document.getElementById('bnt4');
bnt4.addEventListener('click', testeCssTexto);

function testeCssTexto(){
    const h1 = document.querySelector('header h1');
    const h3 = document.querySelector('footer h3');
    const table = document.querySelector('table');
    h1.innerText = 'Texto Novo';
    h1.style.color = 'red';
    h1.style.textAlign = 'center';
    h1.style.borderBottom = '0.2px solid red'

    h3.className = 'tituloh1';
    console.log(h3.className);

    // table.classList.add('table')
     table.classList.toggle('table')

}


function testeRemover(event){
    const texto = event.target.getAttribute('data_texto');
    if(confirm(`Apagar a nome ${texto}?`)){
        event.target.parentNode.parentNode.remove();
    }
}


function testeCriarEncaixar(event){
    event.preventDefault();
    const corpoTabela = document.getElementById('corpo_tabela');
    const iptNome = document.getElementById('nome');
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const btEx = document.createElement('button');

    btEx.innerText = 'Excluir';
    btEx.setAttribute('data_texto', iptNome.value);
    btEx.addEventListener('click', testeRemover);
    td1.innerText = '#';
    td2.innerText = iptNome.value;
    td3.append(btEx);
    tr.append(td1,td2,td3);
    corpoTabela.append(tr);
    event.target.reset()
}


const form = document.querySelector('form');
form.addEventListener('submit', testeCriarEncaixar);