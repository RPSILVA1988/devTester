'use strict';

const Hapi = require('@hapi/hapi');
const contactRoutes = require('./routes/contact.routes');

const contacyRoutes = require('./routes/contact.routes')

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return { message: 'Welcome to ZapLink API', company: 'QA Ninja', course: 'DevTester' }
        }
    })

    server.route(contactRoutes)

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();