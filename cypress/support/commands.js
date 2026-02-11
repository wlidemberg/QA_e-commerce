Cypress.Commands.add('login', () => {
    cy.fixture('usuario').then((user) => {
        cy.visit('/login');
        cy.get('[data-testid="login-email"]').type(user.email);
        cy.get('[data-testid="login-password"]').type(user.pass);
        cy.get('[data-testid="login-submit"]').click();
    });
});
export {};
