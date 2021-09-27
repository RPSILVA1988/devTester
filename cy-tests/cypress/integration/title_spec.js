
describe('TWP home page', () => {

    it('deve exibir o título da página', () => {

        cy.visit('https://training-wheels-protocol.herokuapp.com/')
        cy.title().should('contain', 'Training Wheels Protocol')

    })
})