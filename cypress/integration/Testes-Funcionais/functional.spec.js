///<reference types = "cypress">
describe('Should test at a functional level',()=>{
    before(()=>{
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.get('#email').type('leo2@leo.com')
        cy.get('#senha').type('aaaa')
        cy.get('.btn').click()  
        cy.get('.alert').should('contain', 'Bem vindo')
    })


    it('Should create an account',()=>{
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(1) > a').click()
        cy.get('#nome').type('conta1')
        cy.get('.btn').click() 
        cy.get('.alert').should('contain','Conta adicionada')
    })
    
})
