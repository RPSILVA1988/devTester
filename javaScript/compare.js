// igual (==)
// Return verdadeiro se os valores comparados forem iguais

var valor1 = 10
var valor2 = 20

console.log(valor1 == valor2) //nesta comparação será false
valor2 = 10
console.log(valor1 == valor2) //ja nessa comparação será true

valor2 = "10"
console.log(valor1 == valor2) //aqui será true independente de eu ter passado como String "dentro das aspas significa texto" o javaScript ignora o tipo e pega o valor e compara por isso foi true


//igual (mais critico) (===)
//retorna verdadeiro se os valores e tipos form iguais
console.log(valor1 === valor2) //nesse caso será false porque o comparador usado '===' é muito chato e vai de fato ver se o que esta sendo comparado é 'String' ou 'Int'



//não igual (!=)
//retorna verdadeiro se os valores comparados não forem iguais
valor1 = 10
valor2 = 5
console.log(valor1 != valor2) //comparado tipo não igual !=

/*

Outros tipos de comparadores;

Igual (==)
Retorna verdadeiro se os valores comparados forem iguais.
1=='1' //true

Não igual (!=)
Retorna verdadeiro se os valores comparados não forem iguais. Esse operador também pode ser chamado de diferente de.
4!=1 //true

Igual estrito (===)
Esse operador é mais crítico, só retorna verdadeiro se o valor e o tipo comparados forem iguais.
3==='3' //false
3===3 //true

Não igual estrito (!==)
Não se engane, esse operador vai retornar verdadeiro se os valores e ou os tipos forem diferentes
3!=='3' //true
3!==3 //false
3!==4 //true

Maior que (>)
Compara se o operador da esquerda é maior que o da direita. Caso seja retorna verdadeiro
1>2 //false
5>3 //true
4>'1' //true

Maior ou igual que (>=)
Compara se o operador da esquerda é maior ou igual ao da direita. Caso seja retorna verdadeiro
1>=2 //false
5>=3 //true
4>='1' //true
2>=2 // true

Menor que (<)
Compara se o operador da esquerda é menor que o da direita. Caso seja retorna verdadeiro
1<2 //true
5<3 //false
4<'1' //false

Menor ou igual que (<=)
Compara se o operador da esquerda é menor ou igual ao da direita. Caso seja retorna verdadeiro
1<=2 //true
5<=3 //false
4<='1' //false
2<=2 // true

*/