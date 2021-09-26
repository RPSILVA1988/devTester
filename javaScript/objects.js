
var movie = new Object();

movie.title = "Karate Kid"
movie.year = 1984
movie.showInfo = function () {
    console.log('1- Título do filme: ' + this.title + ' - Lançado em: ' + this.year)

    console.log(`2- TÍtulo do filme: ${this.title} - Lançado em: ${this.year}`)
}

movie.showInfo()

var serie = {
    title: 'Cobra Kai',
    seaons: 2,
    producer: 'Netflix',
    showInfo: function () {
        console.log(`Título da série: ${this.title} - Temporadas: ${this.seaons} - Produtora: ${this.producer}`)
    }
}

serie.showInfo()

console.log(serie.title)
console.log(movie.title)
