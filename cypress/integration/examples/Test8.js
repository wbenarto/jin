/// <reference types="Cypress" />
import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'

describe('Framework Test Angular', function() {
    before(function(){

        // This runs before test in it block
        // pulling data and store in this.data global 
        cy.fixture('example').then(function(data) {
            this.data = data
        })

    })
    
    it("Test Case", function(){
        // Explicitly declare spec files 
        Cypress.config('defaultCommandTimeout', 8000)
        const homePage = new HomePage()
        const productPage = new ProductPage()
        
        cy.visit(Cypress.env('url'))

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneur().should('be.disabled')
        Cypress.config('defaultCommandTimeout', 8000)
        homePage.getShopTab().click()

        // cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        // cy.get('select').select(this.data.gender)
        // cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
        // cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')
        // cy.get('#inlineRadio3').should('be.disabled')
        // cy.get(':nth-child(2) > .nav-link').click()
        // cy.selectProduct('Blackberry')
        // cy.selectProduct('Nokia Edge')

        this.data.productName.forEach((el) => {
            cy.selectProduct(el)
        })

        productPage.checkOutButton().click()
        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list ) => {
            const prodPrice = Number($el.text().split(' ')[1])
            sum += prodPrice
            cy.log(sum)
        })

        cy.get('h3 strong').then(function(el) {
            const amount = Number(el.text().split(' ')[1])

            // cypress assertion to compare value
            expect(amount).to.equal(sum)
        })
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force:true})
        cy.get('input[type="submit"]').click()
        // cy.get('.alert').should('have.text', "Success! Thank You! Your order will be deliverered in next few weeks :-)")
        cy.get('.alert').then(function(el){
            const text = el.text()
            expect(text.includes('Success')).to.be.true
        })
    })
})