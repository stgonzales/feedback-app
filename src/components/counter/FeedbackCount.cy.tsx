import React from 'react'
import { FeedbackCount } from '@/components/counter'

describe('<FeedbackCount />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FeedbackCount count={5}/>)

    cy.get("#feedback-count").should("contain.text", "5 Suggestions")
  })
})