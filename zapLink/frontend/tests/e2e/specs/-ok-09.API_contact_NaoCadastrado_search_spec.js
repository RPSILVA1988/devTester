
describe('Busca', () => {

    const user = { email: 'pinheiro@mail.com', password: 'pwd123' }

    before(() => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/user',
            headers: { 'Content-Type': 'application/json' },
            body: user,
            failOnStatusCode: false
        }).then((response) => {
            cy.log(JSON.stringify(response.body))
        })

        cy.doLogin(user.email, user.password)
        cy.get('.dashboard', { timeout: 5000 }).should('be.visible')
    })

    const contact = {
        name: 'Mike Portnoy',
        number: '22999995555',
        description: 'Aulas de Bateria'
    }

    describe(`Dado que eu tenho o seguinte contato ${contact.name}`, () => {
        before(() => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/contacts',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('user_token')
                },
                body: contact,
                failOnStatusCode: false
            }).then((response) => {
                cy.log(JSON.stringify(response.body))
            })
        })

        it('Quando faço a busca desse contato', () => {
            cy.dash()
            cy.searchContact(contact.number)
            cy.get('#loader', { timeout: 5000 }).should('not.visible')
        })

        it('Devo ver somente esse contato no dashboard', () => {
            cy.contactItem().should('have.length', 1) //ele vai validar se esta exibindo apenas 1 contato, apenas 1 Card
            cy.contactItem().contains(contact.name) //ele vai validar se neste contato esta exibindo de fato a minha massa "name" 
            cy.contactItem().contains(contact.description) //ele vai validar se neste contato esta exibindo de fato a minha massa "description" 
        })
    })

    context('Quando busco por um contato não cadastrado', () => {
        before(() => {
            cy.dash()
            cy.searchContact('18999993333')
            cy.get('#loader', { timeout: 5000 }).should('not.visible')
        })

        it('Deve retornar mensagem de alerta', () => {
            cy.get('.message-body').contains('Contato não encontrado')
        })
    })
})