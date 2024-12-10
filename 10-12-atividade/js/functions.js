
const troca = (event) => {
    const img = document.getElementById('carta-costas1')
    const img2 = document.getElementById('carta-costas2')
    const img3 = document.getElementById('carta-costas3')
    const img4 = document.getElementById('carta-costas4')


    if (img.src.endsWith("Carta-Costas.png")) {
        img.src = './img/carta1.jpg';
    } else if(img2.src.endsWith("Carta-Costas.png")){
        img2.src = './img/carta2.jpg';
    }else if(img3.src.endsWith("Carta-Costas.png")){
        img3.src = './img/carta3.jpg';
    }else if(img4.src.endsWith("Carta-Costas.png")){
        img4.src = './img/carta4.jpg';
    }  
    
}


export default troca;