describe('Feedbacks', () => {
  it('should successfully loads', async () => {
    cy.visit('/')
  })

  it('should load all feedback from db', async () => {
    cy.visit('/')

    cy.get('#feedbacks').should('have.length.at.least').eq(12)
  })

  it('should load all feedback filtered from url', async () => {
    cy.visit('/?category=bug')

    cy.url().should('include', 'category=bug')

    cy.get("#feedback-count").should("contain.text", "2 Suggestions")
    cy.get('#feedbacks').should('have.length.at.least').eq(2)
  })

  it('should load all feedback filtered feedback by clicking on a filter', async () => {
    cy.visit('/')

    cy.get('label[for=enhancement]').click()

    cy.url().should('include', 'category=enhancement')

    cy.get("#feedback-count").should("contain.text", "3 Suggestions")
    cy.get('#feedbacks').should('have.length.at.least').eq(3)
  })

  it('should load all feedback filtered feedback by clicking on multiple filter', async () => {
    cy.visit('/')

    cy.get('label[for=enhancement]').click()
    cy.get('label[for=bug]').click()
    cy.get('label[for=feature]').click()

    cy.url().should('include', 'category=enhancement')
    cy.url().should('include', 'category=bug')
    cy.url().should('include', 'category=feature')

    cy.get("#feedback-count").should("contain.text", "12 Suggestions")
    cy.get('#feedbacks').should('have.length.at.least').eq(12)
  })

  it('should load all feedback filtered feedback by clicking on multiple filter then clean up by clicking "All"', async () => {
    cy.visit('/')

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