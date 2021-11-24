///<reference types = "cypress">
describe('Should test at a functional level',()=>{
    it('Should go to google',()=>{
        //go to the google site
        cy.visit('https://www.google.com')
        //get the google logo
        cy.get('.lnXdpd')
    })
})

