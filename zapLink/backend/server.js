'use strict';

const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');

const mongoURL = "mongodb+srv://qaninja:qaninja@cluster0.mqfdm.mongodb.net/zaplinkdb?retryWrites=true&w=majority"

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.on('connected', () => {
    console.log('MongoDB Conneted');
})

mongoose.connection.on('error', (erro) => {
    console.log('MongoDB Error ' + error);
})

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