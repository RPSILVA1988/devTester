
document.getElementById("barman").addEventListener("click", processaBarman);

function processaBarman() {
    var idade = document.querySelector("input[name=idade]").value
    var mensagem = document.getElementById("mensagem")

    switch (true) {
        case idade >= 18:
            mensagem.innerHTML = "Você pode beber cerveja!"
            alert(mensagem.innerHTML) //vou mostra os dois no alert e na tela
            break;
        case idade > 15:
            mensagem.innerHTML = "Aceita um suquinho de laranja?"
            alert(mensagem.innerHTML) //vou mostra os dois no alert e na tela
            break;
        case idade >= 1:
            mensagem.innerHTML = "Aceita um copo de Leite?"
            alert(mensagem.innerHTML) //vou mostra os dois no alert e na tela
            break;
        default:
            mensagem.innerHTML = "Valor incorreto"
            alert(mensagem.innerHTML) //vou mostra os dois no alert e na tela
            break;
    }
}
