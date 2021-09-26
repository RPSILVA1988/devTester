
var vingadores = ['Capitão América', 'Hulk', 'Homem de Ferro']

/*
console.log(vingadores[0])
console.log(vingadores[1])
console.log(vingadores[2])
console.log(vingadores[3])
console.log(vingadores[4])
*/

//adiciona mais 2 ao array inicial
vingadores.push('Homem formiga')
vingadores.push('Viúva negra')

console.log(vingadores)

var index = vingadores.indexOf('Hulk')
console.log(index)

//vingadores.splice(index, 1) |  esse sódigo exclui no caso o Hulk da posição 1
//console.log(vingadores) |  imprime log sem o Hulk
