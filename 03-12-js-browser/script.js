function funcao01(){
    alert('Dentro da função 01')
    console.log('Dentro da função 01')
}
// funcao01();
testeAlert()
alert('Teste JS')
console.log('Teste JS')

function teste01(){
    let a = 10;
    let b = 26.65;
    let c = false;
    let d = 'Gustavo';
    let e = [];
    let f = {};
    let g = "Luma";
    let h = `${d} e ${g} são irmãos!`

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
console.log(typeof h);
console.log(h);
console.log ('1' + 1);
console.log (Number.parseInt('1') + 1);
}

function LetConstVar(){
    if(true){
        var a = 10;
        console.log(a);
    }

    const v =[2,3,36,50];
    v[0] = 10;

    const d = 45;

    if(true){
        let b = 10;
        console.log(b);
    }
}

function testeAlert(){
    const opt = confirm("Certeza?");
    if(opt){
        alert("Seja bem-vindo!");
    }else{
        alert("Cancelado");
    }
}

function testeRepeticao(){
    for(let i=0; i<16;i++){
        console.log(i * 2);
    }
    let i = 100;
    while(i < 120){
        console.log(i);
        i++;
    }
}

function testeObjetos(){
    const pessoa = {
        "nome": 'Gustavo',
        "idade": 20,
        "cpf": "165-511-796-04",
    }
    console.log(typeof pessoa);
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.idade);
    console.log(pessoa.cpf);
}

function testeArray(){
    const generico = [18, "Gustavo", 45];
    console.log(typeof generico);
    console.log(generico);
    for(let i=0;i<generico.length;i++){
        console.log(generico[i]);
    }
}

function testeArrayComObjetos(){
    const pessoas = [
        {"nome": 'Gustavo',"idade": 20},
        {"nome": 'Binladen',"idade": 69},
        {"nome": 'Caioba',"idade": 499},
]
    for(let i=0; i<pessoas.length;i++){
       console.log(pessoas[i].nome + ': ' + pessoas[i].idade);
    }
}

function testesObjetosComArrays(){
    const pessoa = {
        "nome": 'Gustavo',
        "idade": 20,
        "Dependentes": ['Joaozinho', 'Caiobinha', 'Tuilinho']
    };
    console.log(pessoa);
    console.log(pessoa.Dependentes);
}
