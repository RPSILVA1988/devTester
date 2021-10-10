
describe('Remover Contato', () => {

    const contact = {
        name: 'Paul Gilbert',
        number: '21999991111',
        description: 'Orçamento para instalação de Drywall'
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

        it('Quando apago esse contato', () => {
            cy.dash()
            cy.removeContact(contact.number)
        })
        it('Não deve exibir no dashboard', () => {
            cy.getContact(contact.number).should('not.visible')
        })
    })
})