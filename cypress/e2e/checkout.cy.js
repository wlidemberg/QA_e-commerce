/// <reference types="cypress" />
describe("Checkout", () => {
    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'));
    });
    it('CT18 → Checkout - Acessando checkout usuário logado', () => {
        cy.get('[data-testid="header"]')
            .contains('Login')
            .click();
        cy.login();
        cy.get('[data-testid="add-to-cart"]')
            .first()
            .click();
        cy.get('[data-testid="go-to-cart"]')
            .first()
            .click();
        cy.contains('Finalizar Compra')
            .click();
        cy.url()
            .should('include', '/checkout');
    });
    it('CT19 → Checkout - Exibir informações do usuário, resumo de pedidos, forma de pagamento e botão de confirmar pedido', () => {
        cy.get('[data-testid="header"]')
            .contains('Login')
            .click();
        cy.login();
        cy.get('[data-testid="add-to-cart"]')
            .first()
            .click();
        cy.get('[data-testid="go-to-cart"]')
            .first()
            .click();
        cy.contains('Finalizar Compra')
            .click();
        cy.url()
            .should('include', '/checkout');
        cy.get('[data-testid="checkout-user"]')
            .should('be.visible')
            .then(($elemento) => {
            const usuario_email = $elemento.text();
            expect(usuario_email).to.include('@');
        });
        cy.get('[data-testid="checkout-item"]')
            .should('be.visible');
        cy.get('[data-testid="checkout-total"]')
            .should('be.visible');
        cy.get('[data-testid="payment-method"]')
            .should('exist');
    });
    it('CT20 → Checkout - Confirmar pagamento com sucesso', () => {
        cy.get('[data-testid="header"]')
            .contains('Login')
            .click();
        cy.login();
        cy.get('[data-testid="add-to-cart"]')
            .first()
            .click();
        cy.get('[data-testid="go-to-cart"]')
            .first()
            .click();
        cy.contains('Finalizar Compra')
            .click();
        cy.url()
            .should('include', '/checkout');
        cy.get('[data-testid="payment-pix"]')
            .check();
        cy.get('[data-testid="confirm-order"]')
            .click();
        cy.get('[data-testid="checkout-success"]')
            .should('be.visible');
    });
    it('CT21 → Carrinho - deve limpar carrinho após pagamento', () => {
        cy.get('[data-testid="header"]')
            .contains('Login')
            .click();
        cy.login();
        cy.get('[data-testid="add-to-cart"]')
            .first()
            .click();
        cy.get('[data-testid="go-to-cart"]')
            .first()
            .click();
        cy.contains('Finalizar Compra')
            .click();
        cy.get('[data-testid="payment-card"]')
            .check();
        cy.get('[data-testid="confirm-order"]')
            .click();
        cy.visit(Cypress.config('baseUrl'));
        cy.get('[data-testid="header-btn-open-cart"]')
            .click();
        cy.contains('Carrinho está vazio')
            .should('exist');
    });
});
