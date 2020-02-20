class LoginPage {

    loginIn(email, password) {
        cy.get('#signin_email').type(email);
        cy.get('#password').type(password);
        cy.get('#submit').click();
    }

}

export default LoginPage