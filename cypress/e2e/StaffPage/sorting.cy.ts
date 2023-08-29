describe('Testing the correctness of sorting', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.getBySel('table-header-cell').as('header-cell');
  });

  it('should sort id by ascending and descending correctly', () => {
    cy.get('@header-cell').contains('ID').as('header-cell-id');

    cy.getBySel('table-body-cell-id').eq(0).should('have.text', '1');
    cy.get('@header-cell-id').click();
    cy.getBySel('table-body-cell-id').eq(0).should('have.text', '50');

    cy.get('@header-cell-id').click();
    cy.getBySel('table-body-cell-id').eq(0).should('have.text', '1');
  });

  it('should sort profile by ascending and descending correctly', () => {
    cy.get('@header-cell').contains('Profile').as('header-cell-profile');
    cy.get('@header-cell-profile').click();

    cy.getBySel('table-body-cell-name').as('profile');
    cy.get('@profile').eq(0).should('contain.text', 'Abdel Adrianello');

    cy.get('@header-cell-profile').click();
    cy.get('@profile').eq(0).should('contain.text', 'Wilbur Gentile');
  });

  it('should sort status by ascending and descending correctly', () => {
    cy.get('@header-cell').contains('Status').as('header-cell-status');
    cy.get('@header-cell-status').click();

    cy.getBySel('table-body-cell-status').as('status');
    cy.get('@status').eq(0).should('have.text', 'offline');

    cy.get('@header-cell-status').click();
    cy.get('@status').eq(0).should('have.text', 'online');
  });
});
