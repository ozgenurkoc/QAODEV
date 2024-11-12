class LoginPage {

    fillEmail(value) {
       cy.get("[name='login[username]']").type(value);
       return this;
    }
 
    fillpassword(value) {
       cy.get("[name='login[password]']").type(value);
       return this;
    }
    clickLogin(){
       cy.get("[class='action login primary']").click()
       return this;
    }
 }
 
 export default LoginPage;