/*let nomes = [];

function adicionarNome(){
    const input = document.getElementById("nomeInput");
    const nome = input. value .trim();
    
    if(nome === ""){
        alert("Por favor, digite um nome válido.");
        return;
    }
    nomes.push(nome);
    atualizarLista();
    input.value = "";
}
function atualizarLista(){
    const lista = document.getElementById("listaNome");
    lista.innerHTML = "";
    nomes.forEach((nome)=>{
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}
function sortearAmigo(){
    if(nomes.length === 0){
        alert ("Lista está vazia.Adicione nomes antes de sortear.");
        return;
    }
    const sorteado = nomes[Math.floor(Math.random()*nomes.length)];
    document.getElementById("resultado").textContent = `O amigo secreto é: ${sorteado}`;
}*/
const listaDeAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    listaDeAmigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    listaDeAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    const nomeSorteado = listaDeAmigos[indiceSorteado];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${nomeSorteado} foi sorteado!</li>`;
}
