describe('my first test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('welcome msg is visible', () => {
    cy.contains('Welcome');
  });

  it('Resource title is visible', () => {
    cy.contains('Resources');
  });
});
