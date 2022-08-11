
//   describe('Open Get Started Page', () => {
//   cy.visit('http://localhost:3000/get-started')
//   cy.origin('http://localhost:3000/get-started', () => {
//   cy.visit("http://localhost:3000/get-started");
//     // cy.get('h1').contains('About our Founder, Marvin Acme') // 👍
//   })
// })

describe("Open Get-started", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/get-started");
    cy.contains('budget')
  });
});


describe("Make sure form button with className btn clicks", () => {
  it("passes", () => {
    cy.get('.btn').should('contain', 'Search')
  });
});