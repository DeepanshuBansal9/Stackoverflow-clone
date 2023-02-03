import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
import Questions from './Questions'
const HomeMainbar = () => {
 
  var questionList=[{
    id:1,
    votes:3,
    noOfanswers:2,
    questionTitle:"what is a Function",
    questionBody:"It meant to be",
    questionTags: ["java","nodejs","reactjs","mongodb" ],
    userPosted:"mano",
    askedOn:"jan 1"
  },
  {
    id:2,
    votes:0,
    noOfanswers:0,
    questionTitle:"what is a Function",
    questionBody:"It meant to be",
    questionTags: ["javascript","R","python" ],
    userPosted:"mano",
    askedOn:"jan 1"
  },{
    id:3,
    votes:1,
    noOfanswers:0,
    questionTitle:"what is a Function",
    questionBody:"It meant to be",
    questionTags: ["java","nodejs","reactjs","mongodb" ],
    userPosted:"mano",
    askedOn:"jan 1"

}]
const location=useLocation()
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
      {
        location.pathname ==='/' ? <h1>Top questions</h1>:<h1>All Questions </h1>
      }
      <Link to='/AskQuestion' className='ask-btn'>Ask Question</Link>
      </div>
      <div>
      {
      questionList === null ?
      <h1>Loading....</h1>:
      <>
        <p>{ questionList.length } questions</p>
        <QuestionList questionList={questionList} />
      </>
      
    }
    </div>
    </div>
  )
}

export default HomeMainbar
