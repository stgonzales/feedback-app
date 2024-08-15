import React from 'react'
import { FeedbackItem } from '@/components/feedback'
import { Feedback } from '@prisma/client'

const feedback: Feedback = {
  category: "feature",
  commentsCount: 2,
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  id: "4890067c-0cb9-4400-a153-72d9d6123421",
  status: "suggestion",
  title: "Lorem Ipsum",
  upvotesCount: 0,
  userId: "4890067c-0cb9-4400-a153-72d9d6123421"
}

describe('<FeedbackItem />', () => {
  it('should mount FeedbackItem component', () => {
    
    cy.mount(<FeedbackItem {...feedback}/>)
  })
})