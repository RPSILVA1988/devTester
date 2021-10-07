
describe('Cadastro de Contatos', () => {

    describe('Dado que eu tenho um novo contato', () => {
        //variavel let contém a massa do teste a ser usada no cadastro do novo contato
        let contact = {
            name: 'RANIELE PINHEIRO 2',
            number: '11999997777',
            description: 'Solicitar orçamento para Consultoria'
        }
        //o it é o step do teste
        describe('Quando adiciono esse contato', () => {
            before(() => {
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

        describe('Quando submeto o cadastro sem o nome', () => {
            before(() => {
                cy.visit('/dashboard')
                cy.get('#addNewContact').click()

                //cy.get('.input-name input').type(contact.name)
                cy.get('.input-number input').type(contact.number)
                cy.get('.text-description textarea').type(contact.description)

                cy.get('#saveButton').click()
            })

            it('Deve mostrar uma notificação', () => {
                cy.get('.input-name small').contains('Nome é obrigatório.')
            })
        })

        describe('Quando submeto o cadastro sem o whatsApp', () => {
            before(() => {
                cy.visit('/dashboard')
                cy.get('#addNewContact').click()

                cy.get('.input-name input').type(contact.name)
                //cy.get('.input-number input').type(contact.number)
                cy.get('.text-description textarea').type(contact.description)

                cy.get('#saveButton').click()
            })

            it('Deve mostrar uma notificação', () => {
                cy.get('.input-number small', { timeout: 5000 }).contains('WhatsApp é obrigatório.')
                //cy.get('.input-number small', { timeout: 5000 }).contains('WhatsApp é obrigatório.')
            })
        })

        describe('Quando submeto o cadastro sem o Assunto', () => {
            before(() => {
                cy.visit('/dashboard')
                cy.get('#addNewContact').click()

                cy.get('.input-name input').type(contact.name)
                cy.get('.input-number input').type(contact.number)
                //cy.get('.text-description textarea').type(contact.description)

                cy.get('#saveButton').click()
            })

            it('Deve mostrar uma notificação', () => {
                cy.get('.text-description small', { timeout: 5000 }).contains('Assunto é obrigatório.')
                //cy.get('.text-description small', { timeout: 5000 }).contains('Assunto é obrigatório.')
            })
        })
    })
})


/*
//esse foi o ptimeiro teste realizado, defatoramos para ficar mais elegante
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