async function enviaCartaParaApi(e) {
    e.preventDefault();
    const dados = new FormData(e.target);
    const opt = {
      method: "post",
      body: dados,
    };
    const res = await fetch("http://localhost/14-01-25/carta/inserir", opt);
    const json = await res.json();
    alert(json.status);
    exibirDados();
  }

  async function exibirDados(e){
    const res = await fetch("http://localhost/14-01-25/carta/listar");
    const dados = await res.json();
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    for(i=0; i<=dados.length; i++){
        const tr= document.createElement('tr');
        const td1= document.createElement('td');
        const td2= document.createElement('td');
        td1.innerText = dados[i].nome;
        td2.innerText = dados[i].descricao;
        tr.append(td1,td2);
        tbody.append(tr);
    }
}

document.querySelector("form").addEventListener("submit", enviaCartaParaApi);
window.addEventListener('load', exibirDados);








  

  


 