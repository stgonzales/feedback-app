import React from 'react'
import { FeedbackCount } from '@/components/counter'

describe('<FeedbackCount />', () => {
  it('should mount FeedbackCount component', () => {
    
    cy.mount(<FeedbackCount count={5}/>)

    cy.get("#feedback-count").should("contain.text", "5 Suggestions")
  })
})