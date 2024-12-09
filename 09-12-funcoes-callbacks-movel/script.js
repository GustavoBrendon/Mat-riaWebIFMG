// import { mudaParaKiwi } from "./funcoes.js";
// import { mudaParaMaca} from "./funcoes.js";

import trocador from "./funcoes.js";

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


window.addEventListener('load', ()=> {
    alert('Janela Carregada');
})


const maca = document.getElementById('maca');
    
maca.addEventListener('click', trocador.paraMaca);

let kiwi = document.getElementById('kiwi');
kiwi.addEventListener('click', trocador.paraKiwi);

