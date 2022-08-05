/// <reference types="Cypress" /> 

describe('First Intercept HTTP TEST', function() {
    it("First Test" , function() {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, {
            statusCode: 200,
            body: [{
                "book_name" : "First Book",
                "isbn": "RSU",
                "aisle" : "2301"
            }]
        }).as('bookretrievals')

        cy.get('button[class="btn btn-primary"').click()
        cy.wait("@bookretrievals").should(({request, response}) =>  {
            cy.get('tr').should('have.length', response.body.length + 1 )
        })
    })
})