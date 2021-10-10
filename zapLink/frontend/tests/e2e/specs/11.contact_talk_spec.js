
describe('Conversar', () => {

    const contact = {
        name: 'Jojo Todynho',
        number: '21999994444',
        description: 'Entrar em contato para agendar show de funk'
    }

    describe(`Dado que ${contact.name} é um contato indesejado`, () => {
        before(() => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/contacts',
                headers: { 'Content-Type': 'application/json' },
                body: contact,
                failOnStatusCode: false
            }).then((response) => {
                cy.log(JSON.stringify(response.body))
            })
        })

        it('Quando acesso o dashboard', () => {
            cy.dash()
        })

        it('Devo ver a propriedade href com o link do Whatsapp Web', () => {
            const externalLink = `https://api.whatsapp.com/send?phone=55${contact.number}`
                                //https://api.whatsapp.com/send?phone=5521999994444
                                //esta validando se ao clicar no botão ele ta direcionando para esse link
            cy.get(`a[href$="${contact.number}"]`).should('have.attr', 'href', externalLink)
        })
    })
})