///<reference types="Cypress"/>
import Login from "../../PageObjects/LoginPage.js";

describe('OrangeHRM Login', ()=> {
    it('verify user should be able to login Orange HRM sucessfully', ()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture('orange-hrm').then((data)=>{
            const ln = new Login();
            ln.SetUsername(data.username)
            ln.SetPassword(data.password)
            ln.ClickSubmitBtn()
            cy.get('h6', { timeout: 6000 }).should('contain', "Dashboard");
        })

    })


})