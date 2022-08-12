describe("Make sure results page has selected words", () => {
    it("passes", () => {
        cy.visit("http://localhost:3000/results");
        cy.url().should('include', 'results')
        // cy.url().should('include', 'selectedEnergy')
        // cy.url().should('include', 'selectedDog')
        // cy.url().should('include', 'selectedLocation')
      
    });
  });

  describe("Make sure the button See Day Plan works", () => {
    it("passes", () => {
        cy.visit("http://localhost:3000/results");
    cy.contains('See Day Plan')
    cy.contains('See Day Plan').click()
    });
  });
  
//   need to create a mock function to test the url selectedEnergy etc. 