
//uma função recebe argumentos
//e retorna resposta
//função SOMA
function soma(n1, n2) {
    return n1 + n2;
}

//2 é n1 e 4 é n4
//variavel resultado recebendo soma(n1, n2)
var resultado = soma(2, 4)
console.log(resultado)

resultado = soma(2, 3)
console.log(resultado)

document.getElementById("resultado").innerHTML = soma(4, 7);
