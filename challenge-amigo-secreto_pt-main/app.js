let nomes[];

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
        const item = document.creatElement("li");
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
    document.getElementById("resultado").textContent = 'O amigo secreto é :${sorteado}';//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.