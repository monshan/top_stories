describe('User can click on any link in the top bar and be taken to the corresponding section', () => {
  beforeEach(() => {
    cy.intercept(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${Cypress.env('apikey')}`, { fixture: 'arts.json' })
    cy.visit('http://localhost:3000')
  })

  it('User should start on the home section as the landing page', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('Landing page should have (multiple) valid sections', () => {
    cy.get('[data-cy="Navigation"]')
      .should('contain', 'arts.')
      .and('contain', 'business.')
      .and('contain', 'insider.')
      .and('contain', 'opinion.')
      .and('contain', 'science.')
      .and('contain', 'technology.')
      .and('contain', 'world.')
  })

  it('Navigation should be visible regardless of path', () => {
    cy.get('[data-cy="Navigation"]')
      .should('exist').and('be.visible')
    
    cy.get('[data-cy="NavLink-arts"]').click()
    cy.get('[data-cy="Navigation"]')
      .should('exist').and('be.visible')
    
    cy.get('[data-cy="NavLink-politics"]').click()
    cy.get('[data-cy="Navigation"]')
      .should('exist').and('be.visible')
  })

  

  it('Clicking on a section will take user to appropriate section path', () => {
    cy.get('[data-cy="NavLink-sports"]').click()
    cy.url().should('eq', 'http://localhost:3000/sports')

    cy.get('[data-cy="NavLink-realestate"]').click()
    cy.url().should('eq', 'http://localhost:3000/realestate')

    cy.get('[data-cy="NavLink-nyregion"]').click()
    cy.url().should('eq', 'http://localhost:3000/nyregion')
  })

  // it('Clicking on an ArticleCard will take user to appropriate article path', () => {
  //   cy.visit('http://localhost:3000/arts')
  // })

  // it('Clicking on the go back button will take user back to section path', () => {

  // })
})