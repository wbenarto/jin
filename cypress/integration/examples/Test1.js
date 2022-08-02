// Cypress Test Case for Web Automation
//cypress - Spec
// Mocha testing framework standards

describe('My First test Suite', function() {
    it('My First Test Case', ()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        // cy.visit('https://jin-six.vercel.app/');
        // cy.get('.Navbar_navButton__TAATL').click()
        //fixture
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').find('.product').should('have.length', 4)
        cy.get('.products').as('div')
        cy.get('@div').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('.brand').should('have.text', 'GREENKART')
        cy.get('@div').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }

            cy.get('.brand').then((logoEl) => {
                cy.log(logoEl.text())
            })
        } )
    })
})
