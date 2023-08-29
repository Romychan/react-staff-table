/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**  Custom command to select element by data-testid attribute. */
    getBySel(
      dataTestAttribute: string,
      args?: never,
    ): Chainable<JQuery<HTMLElement>>;
  }
}
