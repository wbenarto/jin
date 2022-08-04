import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../../pageObjects/HomePage'
import ProductPage from '../../../pageObjects/ProductPage'

const productPage = new ProductPage()
const homePage = new HomePage()

beforeEach(function(){
    cy.fixture('example').then(function(data) {
        this.data = data
    })
})

Given("I open eCommerce Page", () => {
    cy.visit(Cypress.env('url'))
})

When('I add items to Cart', function(){
    homePage.getShopTab().click();

    this.data.productName.forEach(function(el) {
        cy.selectProduct(el)
    })
    productPage.checkOutButton().click()
})

And("Validate the total prices" , function() {
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
})

Then('select the country submit and verify Thank you', function() {
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