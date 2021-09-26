'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return { message: 'Hello World!' };
        }
    });

    server.route({
        method: 'GET',
        path: '/user',
        handler: function (request, h) {
            return {
                id: 1,
                nickname: 'RANI',
                name: 'RANIELE',
                email: 'mail@mail.com'
            }
        }
    })

    //padrão javaScript mais usado para criar funções
    server.route({
        method: 'GET',
        path: '/user/js',
        //handler: function (request, h) {
        handler: (request, h) => {
            return {
                id: 2,
                nickname: 'RANI',
                name: 'RANIELE',
                email: 'mail@mail.com'
            }
        }
    })

    server.route({
        method: 'POST',
        path: '/user/POST',
        handler: (request, h) => {
            return { id: 7 }
        }
    })

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();