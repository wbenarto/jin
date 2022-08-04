Feature: End to end Ecommerce validation
    Scenario: Ecommerce products delivery
        Given I open eCommerce Page
        When I add items to Cart
        And Validate the total prices
        Then select the country submit and verify Thank you