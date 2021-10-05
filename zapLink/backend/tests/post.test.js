const Code = require('@hapi/code');
const Lab = require('@hapi/lab');

const { init } = require('../server')

const { expect } = Code;
const { before, describe, it } = exports.lab = Lab.script();

describe('POST /contacts', () => {

    let resp;

    describe('quando o payload é bonitão', () => {
        before(async () => {
            var server = await init();

            let contact = {
                name: "RANIELE 21",
                number: "11 999997777",
                description: "Lorem Ispum Test"
            }

            resp = await server.inject({
                method: 'post',
                url: '/contacts',
                payload: contact
            })
        })

        it('então deve retornar 200', async () => {
            expect(resp.statusCode).to.equal(200) //validar se retornou 200
        })

        it('e deve retornar o id do contato', async () => {
            console.log(resp.result._id)
            expect(resp.result._id).to.be.a.object() //valida se esta retornando de fato um objeto
            expect(resp.result._id.toString().length).to.equal(24) //valida se o id do contato retornado de fato contém 24 caracteres, para isso converto para string antes de contar, pois ele vem com undefined
        })
    })

    describe('quando o payload não tem o nome', () => {
        before(async () => {
            var server = await init();

            let contact = {
                number: "11 999997777",
                description: "Lorem Ispum Test"
            }

            resp = await server.inject({
                method: 'post',
                url: '/contacts',
                payload: contact
            })
        })

        it('então deve retornar 409', async () => {
            expect(resp.statusCode).to.equal(409)
        })

        it('então deve retornar uma mensagem', async () => {
            expect(resp.result.message).to.equal('Name is required')
        })
    })

    describe('quando o campo nome esta em branco', () => {
        before(async () => {
            var server = await init();

            let contact = {
                name: "",
                number: "11 999997777",
                description: "Lorem Ispum Test"
            }

            resp = await server.inject({
                method: 'post',
                url: '/contacts',
                payload: contact
            })
        })

        it('então deve retornar 409', async () => {
            expect(resp.statusCode).to.equal(409)
        })
    })

    describe('quando o payload não tem o whatsapp/numero', () => {
        before(async () => {
            var server = await init();

            let contact = {
                name: "CAIO EDUARDO",
                description: "Lorem Ispum Test"
            }

            resp = await server.inject({
                method: 'post',
                url: '/contacts',
                payload: contact
            })
        })

        it('então deve retornar 409', async () => {
            expect(resp.statusCode).to.equal(409)
        })
    })

    describe('quando o campo whatsapp/numero esta em branco', () => {
        before(async () => {
            var server = await init();

            let contact = {
                name: "CAMILA ISABEL",
                number: "",
                description: "Lorem Ispum Test"
            }

            resp = await server.inject({
                method: 'post',
                url: '/contacts',
                payload: contact
            })
        })

        it('então deve retornar 409', async () => {
            expect(resp.statusCode).to.equal(409)
        })
    })

    describe('quando o payload não tem o ASSUNTO', () => {
        before(async () => {
            var server = await init();

            let contact = {
                name: "CAIO EDUARDO 2",
                number: "11 999997777"
            }

            resp = await server.inject({
                method: 'post',
                url: '/contacts',
                payload: contact
            })
        })

        it('então deve retornar 409', async () => {
            expect(resp.statusCode).to.equal(409)
        })
    })

    describe('quando o campo assunto esta em branco', () => {
        before(async () => {
            var server = await init();

            let contact = {
                name: "CAMILA ISABEL 2",
                number: "11 999997777",
                description: ""
            }

            resp = await server.inject({
                method: 'post',
                url: '/contacts',
                payload: contact
            })
        })

        it('então deve retornar 409', async () => {
            expect(resp.statusCode).to.equal(409)
        })
    })
})
