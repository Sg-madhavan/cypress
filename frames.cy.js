describe("framestest", () =>{
    it("firstcase", ()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.wait(1000)
        cy.iframe("#mce_0_ifr").clear()
        cy.wait(1000)
        cy.get("[title='Italic']").click()
        cy.get("[title='Bold']").click()
        cy.wait(1000)
        cy.iframe("#mce_0_ifr").type("Ena da look uhh!!")
        cy.wait(1000)
        cy.get("[title='Undo']").click()
    })
})