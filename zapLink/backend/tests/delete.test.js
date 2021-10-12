const Code = require('@hapi/code');
const Lab = require('@hapi/lab');

const { init } = require('../server')

const { expect } = Code;
const { before, describe, it } = exports.lab = Lab.script();

describe('DELETE /contacts', () => {

    let userToken;

    before(async () => {

        const user = { email: 'pinheiro1988@mail.com', password: '123pwd' }

        var server = await init();

        await server.inject({
            method: 'post',
            url: '/user',
            payload: user
        })

        resp = await server.inject({
            method: 'post',
            url: '/session',
            payload: user
        })

        //console.log(resp.result)

        userToken = resp.result.user_token

    })

    describe('Dado que eu tenho um contato indesejado', () => {

        const contact = {
            name: 'Joaquim Xavier',
            number: '11999996666',
            description: 'Corretor de Imóveis'
        }

        let server;
        let resp;
        let contactId;

        before(async () => {
            server = await init()

            resp = await server.inject({
                method: 'post',
                url: '/contacts',
                payload: contact,
                headers: { 'Authorization': userToken }
            })

            contactId = resp.result._id
        })

        it('Quando eu apago esse contato', async () => {
            resp = await server.inject({
                method: 'delete',
                url: '/contacts/' + contactId,
                headers: { 'Authorization': userToken }
            })
        })

        it('Deve retornar 204', () => {
            expect(resp.statusCode).to.equal(204)

            //console.log(resp)
        })
    })
})
