/// <reference types="Cypress" />

describe("API Test", function() {
    it('First API Test', function() {
        cy.request("POST", "http://216.10.245.166/Library/Addbook.php",{
            "name": "Learn Automation with Cypress",
            "isbn": "bcdsss",
            "aisle": "22s7",
            "author": "John foe"
        }).then(response => {
            expect(response.body).to.have.property('Msg', "successfully added")
            expect(response.status).to.eq(200)
        })
    })
})