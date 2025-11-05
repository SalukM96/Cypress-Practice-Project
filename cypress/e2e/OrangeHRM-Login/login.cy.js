///<reference types="Cypress"/>
import Login from "../../PageObjects/LoginPage.js";

describe('OrangeHRM Login', ()=> {
    before(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })

    it('verify user should be able to login Orange HRM sucessfully', ()=> {
        cy.fixture('orange-hrm').then((data)=>{
            const ln = new Login();
            ln.SetUsername(data.username)
            ln.SetPassword(data.password)
            ln.ClickSubmitBtn()
            cy.get('h6', { timeout: 6000 }).should('contain', "Dashboard");
        })
    })

        it('verify error message should display when user enter incorrect credentials', ()=> {
        cy.fixture('data/Users/InvalidUser.json').then((data)=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            const ln = new Login();
            ln.SetUsername(data.username)
            ln.SetPassword(data.password)
            ln.ClickSubmitBtn()
            cy.get('.oxd-alert-content > .oxd-text').should('contain', data.message)
        })
    })


})