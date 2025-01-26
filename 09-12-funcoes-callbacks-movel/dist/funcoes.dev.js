"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// const mudaParaMaca = () =>{
//     const image = document.getElementById('image');
//     image.src = './maça.jpg';
// };
// const mudaParaKiwi = () =>{
//     const image = document.getElementById('image');
//     image.src = './kiwi.jpg';
// };
// export{mudaParaMaca, mudaParaKiwi};
var trocador = {
  "paraMaca": function paraMaca() {
    var image = document.getElementById('image');
    image.src = './maça.jpg';
  },
  "paraKiwi": function paraKiwi() {
    var image = document.getElementById('image');
    image.src = './kiwi.jpg';
  }
};
var _default = trocador;
exports["default"] = _default;