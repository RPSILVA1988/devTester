
describe('Login', () => {

    const user = { email: 'rps1988@mail.com', password: 'pwd123' }

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
    })
    context('Quando submeto credenciais validas', () => {
        before(() => {
            cy.visit('/')
            cy.get('input[name=email]').type(user.email)
            cy.get('input[name=password]').type(user.password)
            cy.get('#sigIn').click()
        })

        it('Deve exibir a área logada', () => {
            //cy.contactList().should('be.visible') //valida se a lista de contatos esta visivel, porém quebra se não achar nenhum contato
            cy.contains('h4', 'Seu gerenciador digital de contatos').should('be.visible')
        })
    })
})