// const mudaParaMaca = () =>{
//     const image = document.getElementById('image');
//     image.src = './maça.jpg';
// };

// const mudaParaKiwi = () =>{
//     const image = document.getElementById('image');
//     image.src = './kiwi.jpg';
// };


// export{mudaParaMaca, mudaParaKiwi};

const trocador = {
    "paraMaca": () => {
        const image = document.getElementById('image');
        image.src = './maça.jpg';
    },
    "paraKiwi": () => {
        const image = document.getElementById('image');
        image.src = './kiwi.jpg';
    }
}


export default trocador