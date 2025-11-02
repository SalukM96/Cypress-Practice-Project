class Login {

    SetUsername(username){
        cy.get("[name='username']").type(username)
    }

    SetPassword(password){
        cy.get("[name='password']").type(password)
    }

    ClickSubmitBtn(){
        cy.get("[type='submit']").click()
    }
}

export default Login