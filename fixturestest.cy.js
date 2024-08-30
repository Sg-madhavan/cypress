describe("fixture case", ()=> {
    it("firstcsae", ()=> {
        cy.fixture("sample.json").then((user) => {
            cy.log(user.id)
            cy.log(user.username)
            cy.log(user.mail)
            cy.log(user.address)
        })
    })
})