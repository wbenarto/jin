/// <reference types="Cypress" />

describe('My Child window Test', function() {
    it('Test cases', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opentab').then(function(el) {
            const url=el.prop('href')
            cy.log(url)
            cy.visit(url)
        })

    })
})