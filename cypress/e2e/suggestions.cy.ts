describe('Suggestions', () => {
  it('should successfully loads', async () => {
    cy.visit('/suggestions')
  })

  it('should load all feedback from db', async () => {
    cy.visit('/suggestions')

    cy.get('#feedbacks').should('have.length.at.least').eq(12)
  })

  it('should load all feedback filtered from url', async () => {
    cy.visit('/suggestions?category=bug')

    cy.url().should('include', 'category=bug')

    cy.get('#feedbacks').should('have.length.at.least').eq(2)
  })

  it('should load all feedback filtered feedback by clicking on a filter', async () => {
    cy.visit('/suggestions')

    cy.get('label[for=enhancement]').click()

    cy.url().should('include', 'category=enhancement')

    cy.get('#feedbacks').should('have.length.at.least').eq(3)
  })

  it('should load all feedback filtered feedback by clicking on multiple filter', async () => {
    cy.visit('/suggestions')

    cy.get('label[for=enhancement]').click()
    cy.get('label[for=bug]').click()
    cy.get('label[for=feature]').click()

    cy.url().should('include', 'category=enhancement')
    cy.url().should('include', 'category=bug')
    cy.url().should('include', 'category=feature')

    cy.get('#feedbacks').should('have.length.at.least').eq(12)
  })

  it('should load all feedback filtered feedback by clicking on multiple filter then clean up by clicking "All"', async () => {
    cy.visit('/suggestions')

    cy.get('label[for=enhancement]').click()
    cy.get('label[for=bug]').click()
    cy.get('label[for=feature]').click()
    
    cy.url().should('include', 'category=enhancement')
    cy.url().should('include', 'category=bug')
    cy.url().should('include', 'category=feature')
    
    cy.get('label[for=all]').click()
    cy.url().should('not.include', 'category')

    cy.get('#feedbacks').should('have.length.at.least').eq(12)
  })

})