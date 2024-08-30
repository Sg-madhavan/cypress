describe("locating scenario", ()=> {
    beforeEach(() => {
        cy.visit("https://www.wikipedia.org/")
    })

    it("case 1 ", ()=> {
        cy.get(".other-projects > :nth-child(1)").click()
        .should("contain", "Commons")
        cy.wait(500)
    })
    it("case 2 ", ()=> {
        cy.get(".other-projects > :nth-child(2)").click()
        .should("contain", "Wikivoyage")
        cy.wait(500)
    })
    it("case 3 ", ()=> {
        cy.get(".other-projects > :nth-child(3)").click()
        .should("contain", "Wiktionary")
        cy.wait(500)
    })
    it("case 4 ", ()=> {
        cy.get(".other-projects > :nth-child(4)").click()
        .should("contain", "Wikibooks")
        cy.wait(500)
    })
    it("case 5 ", ()=> {
        cy.get(".other-projects > :nth-child(5)").click()
        .should("contain", "Wikinews")
        cy.wait(500)
    })
    it("case 6 ", ()=> {
        cy.get(".other-projects > :nth-child(6)").click()
        .should("contain", "Wikidata")
        cy.wait(500)
    })
    it("case 7 ", ()=> {
        cy.get(".other-projects > :nth-child(7)").click()
        .should("contain", "Wikiversity")
        cy.wait(500)
    })
    it("case 8 ", ()=> {
        cy.get(".other-projects > :nth-child(8)").click()
        .should("contain", "Wikiquote")
        cy.wait(500)
    })
    it("case 9 ", ()=> {
        cy.get(".other-projects > :nth-child(9)").click()
        .should("contain", "MediaWiki")
        cy.wait(500)
    })
    it("case 10 ", ()=> {
        cy.get(".other-projects > :nth-child(10)").click()
        .should("contain", "Wikisource")
        cy.wait(500)
    })
    it("case 11 ", ()=> {
        cy.get(".other-projects > :nth-child(11)").click()
        .should("contain", "Wikispecies")
        cy.wait(500)
    })
    it("case 12 ", ()=> {
        cy.get(".other-projects > :nth-child(12)").click()
        .should("contain", "Wikifunctions")
        cy.wait(500)
    })
    it("case 13 ", ()=> {
        cy.get(".other-projects > :nth-child(13)").click()
        .should("contain", "Meta-Wiki")
        cy.wait(500)
    })
})