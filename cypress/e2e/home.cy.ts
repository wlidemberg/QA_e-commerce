/// <reference types="cypress" />

describe("Home - Página incial e listagem dos produtos QAStore", () => {
    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl')!)
    })

    it("deve exibir header, logo carrinho e login", () => {
        cy.get('[data-testid="header"]')
        .should('be.visible')

        cy.get('[data-testid="logo"]')
        .should('contain.text', 'QA Store')

        cy.get('[data-testid="link-login"]')
        .should('be.visible')

        cy.get('[data-testid="cart-count"]')
        .should('exist')

        cy.get('[data-testid="icon-cart"]')
        .should('exist')

        cy.get('[data-testid="header-btn-open-cart"]')
        .first()
        .click()

        cy.get('[data-testid="cart-drawer"]')
        .should('be.visible')

        cy.get('[data-testid="link-logout"]')
        .should('not.exist')
    })

    it("deve filtrar produtos por marca", () => {
        cy.get('[data-testid="filter-brand"]')
        .select("UrbanX")

        cy.get('[data-testid="product-name"]')
        .should("contain.text", "Air")
    })

    it("não deve exibir produtos indispiníveis quando o filtro estiver ativo", () => {
        cy.get('[data-testid="filter-available"]')
        .check()

        cy.get('[data-testid="product-unavailable"]')
        .should("not.exist")
    })

    it("CT-01 - deve listar produtos", () => {
        cy.get('[data-testid="product-card"]')
        .should("have.length.at.least", 1)
    })

    it("CT-02 - Deve exibir nome e preço do produto", () => {
        cy.get('[data-testid="product-name"]')
        .first()
        .should("not.be.empty")

        cy.get('[data-testid="product-price"]')
        .first()
        .should('not.be.empty')
    })

    it("CT-05 - deve abrir modal de detalhes do produto", () => {
        cy.get('[data-testid="open-product-details"]')
        .first()
        .click()

        cy.get('[data-testid="product-details-modal"]')
        .should('exist')
    })

    it("CT-07 - deve fechar o modal de detalhes", () => {
        cy.get('[data-testid="open-product-details"]')
        .first()
        .click()

        cy.get('[data-testid="product-details-modal"]')
        .should('exist')

        cy.get('[data-testid="details-close"]')
        .first()
        .click()

        cy.get('[data-testid="product-details-modal"]')
        .should('not.exist')
    })


})