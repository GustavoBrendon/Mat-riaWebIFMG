"use strict";

var _funcoes = _interopRequireDefault(require("./funcoes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { mudaParaKiwi } from "./funcoes.js";
// import { mudaParaMaca} from "./funcoes.js";
// // 1
// function executora(f){
//     f()
// }
// const minhaFuncao = function(){
//     alert('Executada 1.');
// }
// executora(minhaFuncao);
// // 2
// function executora(f){
//     f()
// }
// const minhaFuncao2 = () => {
//     alert('Executada 2.');
// }
// executora(minhaFuncao2);
// // 3
// function executora(f){
//     f()
// }
// executora(()=> {
//     alert('Executada 3');
// })
window.addEventListener('load', function () {
  alert('Janela Carregada');
});
var maca = document.getElementById('maca');
maca.addEventListener('click', _funcoes["default"].paraMaca);
var kiwi = document.getElementById('kiwi');
kiwi.addEventListener('click', _funcoes["default"].paraKiwi);