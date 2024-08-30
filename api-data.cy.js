describe("apicall", ()=> {
    it("first test", () => {
        cy.request("GET", "https://66155bd4b8b8e32ffc7ab54e.mockapi.io/api/data").then((resp) => {
            expect(resp.status).to.eq(200)
        })
    })
    
    it("sec test", ()=>{
        cy.request("GET", "https://66155bd4b8b8e32ffc7ab54e.mockapi.io/api/data/25").then((resp) => {
            expect(resp.status).to.eq(200)
        })
    })

    it("third test", ()=> {
        cy.request({
            method  : "POST",
            url:'https://66155bd4b8b8e32ffc7ab54e.mockapi.io/api/data/',
            body : {
                "name" : "dhaya"
            }
        })
    })

    it("fourth test", ()=> {
        cy.request({
            method  : "PUT",
            url:'https://66155bd4b8b8e32ffc7ab54e.mockapi.io/api/data/27',
            body : {
                "name" : "kumar"
            }
        })
    })

    it.only("fifth test", ()=> {
        cy.request({
            method  : "DELETE",
            url:'https://66155bd4b8b8e32ffc7ab54e.mockapi.io/api/data/27',
        })
    })
})