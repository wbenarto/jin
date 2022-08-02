
describe('My Second test Suite', function() {
    it('My First Test Case', ()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        cy.get('.products').as('productLocator')
        cy.get("@productLocator").find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()

            if (textVeg.includes('Cashews')) {
                $el.find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains("Place Order").click()
    })
})