// https://docs.cypress.io/api/introduction/api.html

describe('Dashboard', () => {
  it('Acessar Dashboard', () => {
    cy.visit('/dashboard')
    cy.contains('h1', 'Seu gerenciador digital de contatos')
  })
})
