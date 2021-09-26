
const http = require('http')

const server = http.createServer(function (req, res) {
    res.statusCode = 200
    res.end('Hello Node.js App')
})

server.listen(3000, '127.0.0.1', function () {
    console.log('Servidor no ar!')
})
