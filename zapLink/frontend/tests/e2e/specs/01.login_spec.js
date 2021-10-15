
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
            cy.doLogin(user.email, user.password)
        })

        it('Deve exibir a área logada', () => {
            //cy.contactList().should('be.visible') //valida se a lista de contatos esta visivel, porém quebra se não achar nenhum contato
            cy.contains('h4', 'Seu gerenciador digital de contatos').should('be.visible')
        })
    })

    describe('Quando submeto senha incorreta', () => {

        const expectMessage = 'Email e/ou senha invalidos!'

        before(() => {
            cy.doLogin(user.email, 'abc123')
        })

        it(`Deve exibir ${expectMessage}`, () => {
            cy.loginAlert(expectMessage).should('be.visible')
        })
    })
    describe('Quando não informo o email', () => {

        const expectMessage = 'Oops! Favor informar o seu email'

        before(() => {
            cy.doLogin('', 'abc123')
        })

        it(`Deve exibir ${expectMessage}`, () => {
            cy.loginAlert(expectMessage).should('be.visible')
        })
    })

    describe('Quando não informo a senha', () => {

        const expectMessage = 'Oops! Favor informar o sua senha'

        before(() => {
            cy.doLogin('user.email', '')
        })

        it(`Deve exibir ${expectMessage}`, () => {
            cy.loginAlert(expectMessage).should('be.visible')
        })
    })
})