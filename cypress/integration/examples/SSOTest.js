/// <reference types="Cypress" />

describe('Logging In - Single Sign On', function() {
    it('Authenticate with cy.request', function() {
        cy.visit("http://localhost:7074/dashboard")

        const options = {
            method: "POST",
            url: "http://localhost:7074/login",
            qs: {
                redirectTo : 'http://localhost:7074/set_token'
            },
            body: {
                name: "Jane. Lane",
                password: 'password123'
            },
            form: true

        }
    })
})