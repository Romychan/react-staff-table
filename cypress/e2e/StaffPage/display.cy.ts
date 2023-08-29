describe('Testing the correctness of data display', () => {
  it('should the data be displayed correctly', () => {
    cy.visit('/');

    cy.getBySel('loader').should('be.visible');
    cy.get('h1').contains('Staff Management');

    cy.getBySel('table-body-cell-id').should('have.length', 10);
  });

  it('should show a message if there is no data', () => {
    cy.intercept('GET', '/users*', []).as('fetch-empty');

    cy.visit('/');

    cy.wait('@fetch-empty');
    cy.getBySel('table-body-empty').should('be.visible');

    cy.getBySel('table-body-cell-id').should('have.length', 0);
  });

  it('should show a message if an error has occurred', () => {
    cy.intercept('GET', '/users*', {
      forceNetworkError: true,
    }).as('fetch-error');

    cy.visit('/');

    cy.wait('@fetch-error');
    cy.getBySel('table-body-empty').should('be.visible');

    cy.getBySel('table-body-empty').should('be.visible');
    cy.getBySel('table-body-cell-id').should('have.length', 0);
  });

  it('should toggle theme correctly', () => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win, 'matchMedia')
          .withArgs('(prefers-color-scheme: dark)')
          .returns({
            matches: false,
          });
      },
    });

    cy.get('html').should('have.class', 'light');

    cy.getBySel('switch-toggle').as('toggle');
    cy.get('@toggle').click();

    cy.get('html').should('have.class', 'dark');
    cy.reload();
    cy.get('html').should('have.class', 'dark');
  });
});
