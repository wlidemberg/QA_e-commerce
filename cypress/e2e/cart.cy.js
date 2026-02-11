/// <reference types="cypress"/> 
describe("Carrinho - Verificar UI", () => {
    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'));
    });
    it("Verificar se carrinho está visivel, sem produtos e sem logar", () => {
        cy.get('[data-testid="cart-count"]')
            .first()
            .click();
        cy.get('[data-testid="cart-drawer"]')
            .should('exist');
        cy.get('[data-testid="logo"]')
            .should('contain.text', "QA Store");
        cy.get('[data-testid="link-login"]')
            .should('be.visible');
        cy.get('[data-testid="link-logout"]')
            .should('not.exist');
        cy.get('[data-testid="text-your-cart"]')
            .should('contain.text', "Seu Carrinho");
        cy.get('[data-testid="cart-is-empty"]')
            .should('contain.text', "Carrinho está vazio");
        cy.get('[data-testid="cart-btn-finalize-purchase"]')
            .should('not.exist');
        cy.get('[data-testid="cart-btn-continue-shopping"]')
            .should('not.exist');
        cy.get('[data-testid="cart-total"]')
            .should('be.visible');
    });
});
describe("Carrinho - Adicionar e acessar carrinho", () => {
    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'));
    });
    it("CT08 - Adicionar produto disponível ao carrinho", () => {
        // Clica no botão para adicionar ao carrinho
        cy.get('[data-testid="add-to-cart"]')
            .first()
            .click();
        // Clicar no botão para abrir o carrinho        
        cy.get('[data-testid="go-to-cart"]')
            .first()
            .click();
        // Carrinho deve tornar visível
        cy.get('[data-testid="cart-drawer"]')
            .should('be.visible');
        cy.get('[data-testid="cart-item"]')
            .should('exist');
    });
    it("CT09 - Deve exibir modal de confirmação ao adicionar o produto", () => {
        // Clicar no botão Adicionar ao carrinho
        cy.get('[data-testid="add-to-cart"]')
            .first()
            .click();
        // Modal deve estar visível
        cy.get('[data-testid="add-to-cart-modal"]')
            .should('be.visible');
        // should('be.visible') -> Verifica se o elemento existe e está visivel no DOM
        // should('exist') -> Verifica se existe, mas o elemento pode estar oculto (display:none)
    });
    it("CT11 - Abrir carrinho pelo modal de confirmação", () => {
        // Clicar no primeiro botão "Adicionar ao Carrinho"
        cy.get('[data-testid="add-to-cart"]')
            .first()
            .click();
        // Clicar no botão Ir para carrinho
        cy.get('[data-testid="go-to-cart"]')
            .click();
        // Produto deve aparecer na listagem
        cy.get('[data-testid="cart-item"]')
            .should('exist');
    });
});
