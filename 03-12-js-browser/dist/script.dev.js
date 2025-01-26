"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function funcao01() {
  alert('Dentro da função 01');
  console.log('Dentro da função 01');
} // funcao01();


testeAlert();
alert('Teste JS');
console.log('Teste JS');

function teste01() {
  var a = 10;
  var b = 26.65;
  var c = false;
  var d = 'Gustavo';
  var e = [];
  var f = {};
  var g = "Luma";
  var h = "".concat(d, " e ").concat(g, " s\xE3o irm\xE3os!");
  console.log(_typeof(a));
  console.log(_typeof(b));
  console.log(_typeof(c));
  console.log(_typeof(d));
  console.log(_typeof(e));
  console.log(_typeof(f));
  console.log(_typeof(g));
  console.log(_typeof(h));
  console.log(h);
  console.log('1' + 1);
  console.log(Number.parseInt('1') + 1);
}

function LetConstVar() {
  if (true) {
    var a = 10;
    console.log(a);
  }

  var v = [2, 3, 36, 50];
  v[0] = 10;
  var d = 45;

  if (true) {
    var b = 10;
    console.log(b);
  }
}

function testeAlert() {
  var opt = confirm("Certeza?");

  if (opt) {
    alert("Seja bem-vindo!");
  } else {
    alert("Cancelado");
  }
}

function testeRepeticao() {
  for (var _i = 0; _i < 16; _i++) {
    console.log(_i * 2);
  }

  var i = 100;

  while (i < 120) {
    console.log(i);
    i++;
  }
}

function testeObjetos() {
  var pessoa = {
    "nome": 'Gustavo',
    "idade": 20,
    "cpf": "165-511-796-04"
  };
  console.log(_typeof(pessoa));
  console.log(pessoa);
  console.log(pessoa.nome);
  console.log(pessoa.idade);
  console.log(pessoa.cpf);
}

function testeArray() {
  var generico = [18, "Gustavo", 45];
  console.log(_typeof(generico));
  console.log(generico);

  for (var i = 0; i < generico.length; i++) {
    console.log(generico[i]);
  }
}

function testeArrayComObjetos() {
  var pessoas = [{
    "nome": 'Gustavo',
    "idade": 20
  }, {
    "nome": 'Binladen',
    "idade": 69
  }, {
    "nome": 'Caioba',
    "idade": 499
  }];

  for (var i = 0; i < pessoas.length; i++) {
    console.log(pessoas[i].nome + ': ' + pessoas[i].idade);
  }
}

function testesObjetosComArrays() {
  var pessoa = {
    "nome": 'Gustavo',
    "idade": 20,
    "Dependentes": ['Joaozinho', 'Caiobinha', 'Tuilinho']
  };
  console.log(pessoa);
  console.log('Nome: ' + pessoa.nome);
  console.log('Idade: ' + pessoa.idade);
  console.log(pessoa.Dependentes);
}