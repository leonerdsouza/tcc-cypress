///<reference types = "cypress">
describe('Should test the purchase feature',()=>{

    it('Should be able to buy an item',()=>{
        //go to the site
        cy.visit('https://www.saucedemo.com/')
        //type the user
        cy.get('#user-name').type('standard_user')
        //type the password
        cy.get('#password').type('secret_sauce')
        //click in the login button
        cy.get('#login-button').click()  
        //verify if it is in the correct page
        cy.get('.title').should('contain', 'Products')
        //click on the item to purchase
        cy.get('#item_4_title_link > .inventory_item_name').click()
        //add the item in the cart
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
        //go to the cart
        cy.get('.shopping_cart_link').click()
        //click in the checkout button
        cy.get('[data-test=checkout]').click()
        //fill in the personal information
        cy.get('[data-test=firstName]').type('Leonardo')
        cy.get('[data-test=lastName]').type('Souza')
        cy.get('[data-test=postalCode]').type('333333')
        //click in the continue button
        cy.get('[data-test=continue]').click()
        //verify if it is in the correct page
        cy.get('.title').should('contain', 'Checkout: Overview')
        //click in the finish button
        cy.get('[data-test=finish]').click()
        //verify if the message is correct
        cy.get('.complete-text').should('contain', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    })

})

