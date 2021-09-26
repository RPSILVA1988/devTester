// Divisão /

var valor1 = prompt('Informe o Valor 1:')
var valor2 = prompt('Informe o Valor 2:')

console.log(typeof valor1);
console.log(typeof valor2);

var total = parseInt(valor1) / parseInt(valor2);
console.log("O resultado da divisão é: " + parseFloat(total).toFixed(2)) //conversão do resultado para PontoFlutuante 'parseFloat' e o 'toFixed(2)' quer dizer que o resultado terá duas casas decimais

console.log(typeof total);
