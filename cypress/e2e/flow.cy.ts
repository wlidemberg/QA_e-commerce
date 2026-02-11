/// <reference types="cypress" />

describe("Fluxo completo de compra", () => {
    beforeEach(() => {
        cy.visit(Cypress.config("baseUrl")!)
    })

    it("CT22 → Realizar compra completa com sucesso", () => {
        cy.get('[data-testid="header"]')
        .contains('Login')
        .click()

        cy.login()

        cy.get('[data-testid="add-to-cart"]')
        .first()
        .click()

        cy.get('[data-testid="go-to-cart"]')
        .click()

        cy.contains('Finalizar Compra')
        .click()

        cy.get('[data-testid="payment-card"]')
        .check()

        cy.get('[data-testid="confirm-order"]')
        .click()

        cy.visit(Cypress.config('baseUrl')!)

        cy.get('[data-testid="header-btn-open-cart"]')
        .click()

        cy.contains('Carrinho está vazio')
        .should('exist')
    })
})