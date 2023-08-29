describe('Testing the correctness of filtering', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should be filtered by role correctly', () => {
    cy.getBySel('dropdown-container').as('dropdown');

    cy.get('@dropdown').contains('All Role').click();
    cy.get('div[value="Backend Developer"]').click();

    cy.get('@dropdown').should('contain.text', 'Backend Developer');
    cy.get('td:contains(Backend Developer)').should('have.length', 10);
  });

  it('should be filtered by company correctly', () => {
    cy.getBySel('dropdown-container').as('dropdown');

    cy.get('@dropdown').contains('All Company').click();
    cy.get('div[value="Amazon"]').click();

    cy.get('@dropdown').should('contain.text', 'Amazon');
    cy.get('td:contains(Amazon)').should('have.length', 10);
  });

  it('should search a staff correctly', () => {
    cy.getBySel('input-field').as('search');

    cy.get('@search').type('Gilberte Prin');
    cy.get('td:contains(Gilberte Prin)').should('have.length', 1);
  });

  it('should pagination working correctly', () => {
    cy.getBySel('pagination').as('pagination');

    cy.get('@pagination').contains('4').click();
    cy.get('@pagination').contains('Next').click();

    cy.get('@pagination')
      .contains('Next')
      .should('have.css', 'pointer-events', 'none');
    cy.get('@pagination').contains('4').should('not.exist');

    cy.getBySel('table-body-cell-id').should('contain.text', '50');
  });
});
