/// <reference types="./commands.d.ts" />

Cypress.Commands.add('getBySel', (selector, ...args) => {
  return cy.get(`[data-testid="${selector}"]`, ...args);
});
