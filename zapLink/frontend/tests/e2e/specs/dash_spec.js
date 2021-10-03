// https://docs.cypress.io/api/introduction/api.html

describe('Dashboard', () => {

  describe('Quando acesso o dashboard', () => {

    before(() => {
      cy.visit('/dashboard')
      cy.contains('h4', 'Seu gerenciador digital de contatos')
    })

    it('Então devo ver a lista de contatos', () => {
      /*
      Teste faz contagem, dos elementos do TIPO CARD presentes na tela, tem q bater com valor setado no código.
      
      cy.get('.card').should('have.length', 3)
      */

      //cy.wait(5000) segura o teste por 5 segs, não recomendavel
      cy.get('.card', { timeout: 5000 }).then((elements) => {
        expect(elements.length > 0).to.be.true
        //A quantidade de items  'CARD' tem q ser maior que ZERO
      })
    })
  })
})
