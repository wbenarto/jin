/// <reference types="Cypress" />

describe('My Second Test Suite' , function() {
    it('My First test case', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"').click()

        cy.on('window:alert',(str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm',(str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        cy.get('#opentab').invoke('removeAttr', 'target').click()
        // browser navigation

        cy.go('back')
    }) 
})