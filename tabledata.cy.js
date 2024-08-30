describe("TABLE LOOP", ()=> {
    it("test", ()=> {
        cy.visit("https://datatables.net/examples/styling/bootstrap5.html")
        let pages = 10;
        for(let p=1;p<=pages;p++)
        {
            cy.get(".pagination>li:nth-child("+p+")").click()
            cy.get("#example>tbody>tr").each(($tr,index)=>{
                cy.wrap($tr).within(()=> {
                    cy.get("td").each(($td,index)=> {
                        cy.log($td.text())
                    })
                })
            })
        }
    })
})