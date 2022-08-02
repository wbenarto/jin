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
    })
})