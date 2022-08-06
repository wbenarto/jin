/// <reference types="Cypress" /> 

describe("HTTP Request and Test Security" , function() {
    it("It be like that", ()=> {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
 
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req)=> {
        req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
     
        req.continue((res)=>{
           // expect(res.statusCode).to.equal(403)
        })}  
        ).as("dummyUrl")
     
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@dummyUrl')
    })
    
 
})
