describe("testfuct", ()=>{
    beforeEach(()=>{
        cy.visit("https://example.cypress.io/commands/traversal")
    })
    it("parent",  ()=>{
        cy.get('.traversal-mark').parent().should("contain","consectetur ac")
    })
})