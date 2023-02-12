import React from 'react'
import {Link } from 'react-router-dom'
import QuestionDetails from './QuestionDetails'
import Avatar from '../../components/Avatar/Avatar'
const DisplayAnswers = ({question}) => {
  return (
    <div>
    {
      question.answer.map((ans)=>(
<div className="display-ans" key={ans.id}>
<p>{ans.answerBody}</p>
<div className="question-actions-user">
<div>
<button type="button">Share</button>
<button type="button">Delete</button>
</div>
<div>
<p>answered {ans.answeredOn}</p>
<Link to={`/user/${question.userID}`} className='user-link' style={{color:'#0086d8'}}> 
 <Avatar backgroundColor="green" px='8px' py='5px'>{ans.userAnswered.userPosted.charAt(0).toUpperCase()}</Avatar>   
 <div>
 {question.userPosted}
 </div>
 </Link>
</div></div>
</div>
      ))
      }
    </div>
  )
}

export default DisplayAnswers
