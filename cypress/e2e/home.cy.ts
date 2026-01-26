/// <reference types="cypress" />

describe("Home QAStore", () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it("deve exibir header e o logo", () => {
        cy.get('[data-testid="header"]').should('be.visible')
        cy.get('[data-testid="logo"]').should('contain.text', 'QA Store')
    })

    it("deve listar produtos", () => {
        cy.get('[data-testid="product-card"]').should("have.length.at.least", 1)
    })

    it("deve filtrar produtos por marca", () => {
        cy.get('[data-testid="filter-brand"]').select("UrbanX")
        cy.get('[data-testid="product-name"]').should("contain.text", "Air")
    })

    it("não deve exibir produtos indispiníveis quando o filtro estiver ativo", () => {
        cy.get('[data-testid="filter-available"]').check()
        cy.get('[data-testid="product-unavailable"]').should("not.exist")
    })
})