///<reference types = "cypress">
describe('Should test the login',()=>{

    it('Should be at the correct page',()=>{
        //go to the site
        cy.visit('https://seubarriga.wcaquino.me/login')
        //type the email
        cy.get('#email').type('leo2@leo.com')
        //type the password
        cy.get('#senha').type('aaaa')
        //click the login button
        cy.get('.btn').click()  
        //verify the alert message
        cy.get('.alert').should('contain', 'Bem vindo')
    })

})

