// const Code = require('@hapi/code');
// const Lab = require('@hapi/lab');

// const { init } = require('../server')

// const { expect } = Code;
// const { before, describe, it } = exports.lab = Lab.script();

// describe('GET /contacts', () => {

//     let resp;

//     before(async () => {
//         var server = await init();

//         resp = await server.inject({
//             method: 'get',
//             url: '/contacts'
//         })
//     })

//     it('então deve retornar 200', async () => {
//         expect(resp.statusCode).to.equal(200)
//     })

//     it('então deve retornar uma lista', async () => {
//         expect(resp.result).to.be.array()

//         console.log(resp)
//     })
// })