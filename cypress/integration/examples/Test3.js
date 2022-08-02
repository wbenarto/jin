// Practice Page 
describe('My Third test Suite', function() {
    it("My First Test Case", ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Checkbox
        cy.get("#checkBoxOption1").check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2', ''])

        // Static Dropdown
        cy.get('select').select('option2').should('have.value', 'option2')

        // Dynamic Dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ul-menu-item div').each(($el, index, $list) => {
            if ($el.text() == 'India') {
                $el.click()
            }
        })
    })
})