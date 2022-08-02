describe('Test Suite 5', function() {
    it('Test on table' , function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // To test element in table, go through all items in column
        // find the sibling, finish promise, turn into text
        // expect to compare values
        
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text=$el.text()
            if (text.includes('Python')) {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })
    })
})