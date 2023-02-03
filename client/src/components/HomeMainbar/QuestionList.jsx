import React from 'react'
import Questions from './Questions'
import QuestionList from './QuestionList.jsx'
const questionList = ({questionList}) => {
  return (
    <>
    {
        questionList.map((question)=> (
            <Questions question={question} key={question.id}/>
        ))
    }
      </>
  )
}

export default QuestionList
