describe('Open Homepage', () => {
  it('passes', () => {
    cy.visit("http://localhost:3000");
    cy.contains('Start Here')
    cy.contains('Start Here').click()
  })
})

describe('Go to get-started page', () => {
  it('passes', () => {
    cy.visit("http://localhost:3000");
    cy.contains('Start Here').click()
    cy.url().should('include', '/get-started')
  })
})
