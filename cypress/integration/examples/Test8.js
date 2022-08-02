/// <reference types="Cypress" />

describe('Framework Test Angular', function() {
    before(function(){

        // This runs before test in it block
        // pulling data and store in this.data global 
        cy.fixture('example').then(function(data) {
            this.data = data
        })

    })
    
    it("Test Case", function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get(':nth-child(2) > .nav-link').click()
        cy.selectProduct('Blackberry')
        cy.selectProduct('Nokia Edge')

        this.data.productName.forEach((el) => {
            cy.selectProduct(el)
        })
    })
})