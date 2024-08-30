describe("scenario", () =>{
    beforeEach(() => {
        cy.visit("https://example.cypress.io/commands/actions")
    })
    it("type case", () => {
        cy.get("#email1").type("gopi@gmail.com")
        cy.get("#email1").should("have.value", "gopi@gmail.com").clear()
        cy.get("#email1").type("gopi@gmail.com", { delay : 100 })
        cy.get('.action-disabled').type('disabled error checking', { force: true })
    })

    it("focus", ()=> {
        cy.get(".action-focus").focus()
        cy.get(".action-focus").should("have.class", "focus")
        .prev().should("have.attr", "style", "color: orange;")
    })

    it("blur", ()=> {
        cy.get('.action-blur').type('About to blur')
        cy.wait(3000)
        cy.get('.action-blur').blur()
    })

    it.only("submit", ()=> {
        cy.get("#couponCode1").type("HEY007")
        cy.get(".action-form > .btn ").click()
        cy.get(".action-form").next().should("have.attr","style")
    })
})