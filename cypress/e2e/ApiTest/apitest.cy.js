/// <reference types="cypress" />

describe('Login Test', () => {
    const id = Math.floor(Math.random() * 9999999);
 
    it('Kullancı oluşturma', () => {
  
        const payload = {
            "id": id ,
            "username": "ozge_"+id,
            "firstName": "özge_"+id,
            "lastName": "koc_"+id,
            "email": "ozge"+id+"@gmail.com",
            "password": "123456789"+id,
            "phone": "5362264319"+id,
            "userStatus": 1
        }

        cy.request({
            method: "POST",
            url: "https://petstore.swagger.io/v2/user",
            body: payload
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
        

    })

    it('Kullanıcı oluşturma payload null', () => {

        const payload = null

        cy.request({
            method: "POST",
            url: "https://petstore.swagger.io/v2/user",
            body: payload,
            failOnStatusCode: false,
        })
        .then((response) => {
            expect(response.status).to.eq(415)
        })

    })

    it('Kullanıcı Güncelleme', () => {

        const payload = {
            "id": id ,
            "username": "ozge_"+id,
            "firstName": "özge_"+id,
            "lastName": "koc_"+id,
            "email": "ozge"+id+"@gmail.com",
            "password": "123456789"+id,
            "phone": "5362264319"+id,
            "userStatus": 1
          }

        cy.request({
            method: "PUT",
            url: "https://petstore.swagger.io/v2/user/denemekullanici",
            body: payload
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })

    })


    it('Kullanıcı Bilgisi', () => {
   
        cy.request("GET", "https://petstore.swagger.io/v2/user/ozge_"+id)
        .then((response) => {
            expect(response.status).to.eq(200)
        })

    })

    it('Olmayan Kullanıcı Bilgisi', () => {
   
        cy.request({
            method: "GET",
            url: "https://petstore.swagger.io/v2/user/ozge_yok__"+id,
            failOnStatusCode: false,
        })
        .then((response) => {
            expect(response.status).to.eq(404)
        })

    })

    it('Kullanıcı Silme', () => {

        cy.request({
            method: "DELETE",
            url: "https://petstore.swagger.io/v2/user/ozge_"+id
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })

    })
    

})