
document.getElementById("barman").addEventListener("click", processaBarman);

function processaBarman() {
    var idade = document.querySelector("input[name=idade]").value
    var mensagem = document.getElementById("mensagem")

    if (idade >= 18) {
        //console.log("Você pode beber cerveja!")
        mensagem.innerHTML = "Você pode beber cerveja!"
        alert(mensagem.innerHTML) //vou mostra os dois no alert e na tela
    } else if (idade > 15) {
        //console.log("Aceita um suquinho de laranja?")
        mensagem.innerHTML = "Aceita um suquinho de laranja?"
        alert(mensagem.innerHTML) //vou mostra os dois no alert e na tela
    } else {
        mensagem.innerHTML = "Aceita um copo de Leite?"
        alert(mensagem.innerHTML) //vou mostra os dois no alert e na tela
    }
}
