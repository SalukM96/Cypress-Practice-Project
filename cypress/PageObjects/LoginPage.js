class Login {

    SetUsername(username){
        // cy.get("[placeholder='Username']").type(username)
        cy.get("[name='username']").type(username)
    }

    SetPassword(password){
        cy.get("[name='password']").type(password)
    }

    ClickSubmitBtn(){
        // cy.get(".oxd-button oxd-button--medium oxd-button--main orangehrm-login-button").click()
        cy.get("[type='submit']").click()
    }
}

export default Login