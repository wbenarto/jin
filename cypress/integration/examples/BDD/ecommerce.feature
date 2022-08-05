Feature: End to end Ecommerce validation
    @Regression
    Scenario: Ecommerce products delivery
        Given I open eCommerce Page
        When I add items to Cart
        And Validate the total prices
        Then select the country submit and verify Thank you

    @Smoke
    Scenario: Filling the form to shop
        Given I open eCommerce Page
        When I fill the form details
            | name  | gender |
            | bobz2 | Male   |
        Then Validate the forms behavior
        And Select the Shop Page