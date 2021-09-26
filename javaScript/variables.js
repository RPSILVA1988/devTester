
//teste 1

/*

tipagem fixa tenho que declarar o tipo da variavel, ex: String nome ta recebendo o texto tal | int idade ta recebendo valor numerico
String nome = "RANIELE"
int idade = 33

Ja no JavaScript não é necessario pois ele é tipagem Dynamic, ao passar variavel string ou int ele ja interpreta isso 

*/

var nome = "RANIELE"
var idade = 33
var legal = true

console.log(nome)
console.log(typeof nome) //ele vai imprimir qual é o tipo da variavel

console.log(idade)
console.log(typeof idade) //ele vai imprimir qual é o tipo da variavel

console.log(legal)
console.log(typeof legal) //ele vai imprimir qual é o tipo da variavel



//teste 2

var anoAtual = 2021;

var nome = prompt('Qual é o seu nome?'); //todo valor de prompt o javaScript recebe como String
var anoNascimento = prompt('Em que ano você nasceu?'); //todo valor de prompt o javaScript recebe como String

var idade = anoAtual - anoNascimento;

console.log("Seu nome é: " + nome + "\nE você tem: " + idade + " anos"); // quebra de linha \n
console.log(typeof nome);
console.log(typeof anoAtual);
console.log(typeof anoNascimento);
console.log(typeof idade);

alert("Seu nome é: " + nome + "\nE você tem: " + idade + " anos"); //surge na tela o resultado

