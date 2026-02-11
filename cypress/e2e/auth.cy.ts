/// <reference types="cypress" />
describe('Autenticação e redirecionamento', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl')!)
    })

    it("CT15 - Login pela navegação principal com dados válidos", () => {
        cy.get('[data-testid="header"]')
        .contains('Login')
        .click()

        cy.login()

        cy.get('[data-testid="user-name"]')
        .should('be.visible')
        
        
    })

    it("CT16 - Redirecionar para a tela de login ao tentar finalizar compra sem estar logado", () => {
        cy.get('[data-testid="add-to-cart"]')
        .first()
        .click()

        cy.get('[data-testid="go-to-cart"]')
        .click()

        cy.get('[data-testid="cart-item"]')
        .should('exist')

        cy.get('[data-testid="cart-btn-finalize-purchase"]')
        .click()

        cy.url().should('include', '/login')
    })

    it("CT17 - Deve voltar tela do carrinho logado", () => {
        cy.get('[data-testid="add-to-cart"]')
        .first()
        .click()

        cy.get('[data-testid="go-to-cart"]')
        .click()

        cy.get('[data-testid="cart-item"]')
        .should('exist')

        cy.get('[data-testid="cart-btn-finalize-purchase"]')
        .click()

        cy.url()
        .should('include', '/login')

        cy.login()

    })


})