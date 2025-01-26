"use strict";

var bnt2 = document.getElementById('bnt2');
bnt2.addEventListener('click', testDocument);

function testeWindow() {
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

var bnt1 = document.getElementById('bnt1');
bnt1.addEventListener('click', testeWindow);

function testDocument() {
  console.log(document);
  console.log(document.forms);
  console.log(document.links);
  console.log(document.images);
}

var bnt3 = document.getElementById('bnt3');
bnt3.addEventListener('click', testeBusca);

function testeBusca() {
  // pelo ID
  console.log(nome); // pelo ID pelo document

  var idNome = document.getElementById('nome');
  console.log(idNome); // pelo nome da tag 

  var links = document.getElementsByTagName('a');
  console.log(links); // pelo seletor CSS (único elemento)

  var ele = document.querySelector('section a');
  console.log(ele); // pelo seletor CSS (vários elementos)

  var eles = document.querySelectorAll('section a');
  console.log(eles);
}

var bnt4 = document.getElementById('bnt4');
bnt4.addEventListener('click', testeCssTexto);

function testeCssTexto() {
  var h1 = document.querySelector('header h1');
  var h3 = document.querySelector('footer h3');
  var table = document.querySelector('table');
  h1.innerText = 'Texto Novo';
  h1.style.color = 'red';
  h1.style.textAlign = 'center';
  h1.style.borderBottom = '0.2px solid red';
  h3.className = 'tituloh1';
  console.log(h3.className); // table.classList.add('table')

  table.classList.toggle('table');
}

function testeRemover(event) {
  var texto = event.target.getAttribute('data_texto');

  if (confirm("Apagar a nome ".concat(texto, "?"))) {
    event.target.parentNode.parentNode.remove();
  }
}

function testeCriarEncaixar(event) {
  event.preventDefault();
  var corpoTabela = document.getElementById('corpo_tabela');
  var iptNome = document.getElementById('nome');
  var tr = document.createElement('tr');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var btEx = document.createElement('button');
  btEx.innerText = 'Excluir';
  btEx.setAttribute('data_texto', iptNome.value);
  btEx.addEventListener('click', testeRemover);
  td1.innerText = '#';
  td2.innerText = iptNome.value;
  td3.append(btEx);
  tr.append(td1, td2, td3);
  corpoTabela.append(tr);
  event.target.reset();
}

var form = document.querySelector('form');
form.addEventListener('submit', testeCriarEncaixar);