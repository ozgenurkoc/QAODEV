//// <reference types="cypress" />


import LoginPage from "./page/LoginPage"


describe('Login Tests', () => {
    const loginPage= new LoginPage();
    let longwait = 2500;
    beforeEach(() => {
       cy.viewport(1280, 880) 

    
      cy.visit('https://www.rossmann.com.tr/customer/account/login/')    
    })
  
    it('Başarılı kullanıcı girişi kontrolü', () => {

        loginPage.fillEmail("ozgenurkoc@outlook.com").fillpassword("KALAMAR10.").clickLogin();


    })

     it('Başarısız kullanıcı girişi kontrolü', () => {

        loginPage.fillEmail("ozgenurkoc@outlook.com").fillpassword("KALAMAR17.").clickLogin();

    })
    

    it('Başarılı ürün seçimi kontrolü', () => {

        Cypress.on('uncaught:exception', () => { return false })
        loginPage.fillEmail("ozgenurkoc@outlook.com").fillpassword("KALAMAR10.").clickLogin();
        cy.wait(longwait)
        cy.get("[id='search']").type("wella 6/73")
        cy.wait(longwait)
        cy.get("[title='Arama']").click()
    })


    })
