/// <reference types="Cypress" />

describe('Testing for hover', function() {
    it('First test Case ', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')
    })
})