describe('User can click on any link in the top bar and be taken to the corresponding section', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Landing page should have (multiple) valid sections', () => {
    cy.get('[data-cy="Navigation"]')
      .should('contain', 'arts.')
  })
})