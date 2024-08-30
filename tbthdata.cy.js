describe("table th", ()=> {
    it("th data",()=> {
        cy.visit("https://datatables.net/examples/styling/bootstrap5.html")
        cy.get("#example>thead>tr>th").each(($th,index)=> {
            cy.log($th.text(),index)
        })
    })
 })