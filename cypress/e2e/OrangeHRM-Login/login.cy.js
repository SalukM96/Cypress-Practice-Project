///<reference types="Cypress"/>
import Login from "../../PageObjects/LoginPage.js";

describe('OrangeHRM Login', ()=> {
    it('', ()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture('orange-hrm').then((data)=>{
            const ln = new Login();
            ln.SetUsername(data.username)
            ln.SetPassword(data.password)
            ln.ClickSubmitBtn()
        })

    })
})