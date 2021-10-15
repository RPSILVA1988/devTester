//PageObject Padrão Cypress

describe('Cadastro de Contatos', () => {

    const user = { email: 'pinheiro88@mail.com', password: 'pwd123' }

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

    describe('Dado que eu tenho um novo contato', () => {
        //variavel let contém a massa do teste a ser usada no cadastro do novo contato
        let contact = {
            name: 'CAIO EDUARDO 09',
            number: '11999997777',
            description: 'Solicitar orçamento para Consultoria'
        }
        //o it é o step do teste
        describe('Quando adiciono esse contato', () => {

            before(() => {
                cy.dash()
                cy.createContact(contact)
            })

            it('Então devo ver esse contato no dashboard', () => {
                cy.contactList().contains(contact.name)
            })
        })

        describe('Quando submeto o cadastro sem o nome', () => {

            let contact = {
                number: '11999997777',
                description: 'Solicitar orçamento para Consultoria'
            }

            const expectNotice = 'Nome é obrigatório.'

            before(() => {
                cy.dash()
                cy.createContact(contact)
            })

            it(`Deve mostrar a notificação ${expectNotice.replace(/[^a-zA-Z]/g, '')}`, () => {
                cy.alertName().contains(expectNotice)
            })
        })

        describe('Quando submeto o cadastro sem o whatsApp', () => {

            let contact = {
                name: 'CAIO EDUARDO 09',
                description: 'Solicitar orçamento para Consultoria'
            }

            const expectNotice = 'WhatsApp é obrigatório.'

            before(() => {
                cy.dash()
                cy.createContact(contact)
            })

            it(`Deve mostrar a notificação ${expectNotice.replace(/[^a-zA-Z]/g, '')}`, () => {
                cy.alertNumber().contains(expectNotice)
                //cy.get('.input-number small', { timeout: 5000 }).contains('WhatsApp é obrigatório.')
            })
        })

        describe('Quando submeto o cadastro sem o Assunto', () => {

            let contact = {
                name: 'CAIO EDUARDO 09',
                number: '11999997777'
            }

            const expectNotice = 'Assunto é obrigatório.'

            before(() => {
                cy.dash()
                cy.createContact(contact)
            })

            it(`Deve mostrar a notificação ${expectNotice.replace(/[^a-zA-Z]/g, '')}`, () => {
                cy.alertDescription().contains(expectNotice)
                //cy.get('.text-description small', { timeout: 5000 }).contains('Assunto é obrigatório.')
            })
        })
    })
})


/*
//esse foi o ptimeiro teste realizado, refatoramos para ficar mais elegante
describe('Cadastro de Contatos', () => {
    describe('Dado que eu tenho um novo contato', () => {
        //variavel let contém a massa do teste a ser usada no cadastro do novo contato
        let contact = {
            name: 'RANIELE PINHEIRO',
            number: '11999997777',
            description: 'Solicitar orçamento para Consultoria'
        }
        //o it é o step do teste
        it('Quando adiciono esse contato', () => {
            cy.visit('/dashboard')
            cy.get('#addNewContact').click()

            cy.get('.input-name input').type(contact.name)
            cy.get('.input-number input').type(contact.number)
            cy.get('.text-description textarea').type(contact.description)

            cy.get('#saveButton').click()
        })

        it('Então devo ver esse contato no dashboard', () => {
            cy.get('.contact-list').contains(contact.name)
        })
    })
})
*/