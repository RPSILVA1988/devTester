
describe('Login', () => {

    before(() => {
        cy.visit('https://training-wheels-protocol.herokuapp.com/login')
        cy.get('#login').should('be.visible')//checkpoint
    })

    it('quando submeto minhas credenciais', () => {
        cy.get('#userId').type('stark')
        cy.get('#passId').type('jarvis!')
        cy.get('.btn-login').click()
    })

    it('quando submeto minhas credenciais', () => {
        cy.get('#flash').should('contain', 'Você acessou a área logada!')
    })
})