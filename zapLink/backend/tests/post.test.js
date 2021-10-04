const Code = require('@hapi/code');
const Lab = require('@hapi/lab');

const { init } = require('../server')

const { expect } = Code;
const { before, describe, it } = exports.lab = Lab.script();

describe('POST /contacts', () => {

    let resp;

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

    it('deve retornar 200', async () => {
        expect(resp.statusCode).to.equal(200) //validar se retornou 200
    })
    it('deve retornar o id do contato', async () => {
        console.log(resp.result._id)
        expect(resp.result._id).to.be.a.object() //valida se esta retornando de fato um objeto
        expect(resp.result._id.toString().length).to.equal(24) //valida se o id do contato retornado de fato contém 24 caracteres, para isso converto para string antes de contar, pois ele vem com undefined
    })
})