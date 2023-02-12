import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {
  const location=useLocation()
  const user =1;
  const navigate=useNavigate()
  
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


const checkAuth =()=>{
  if(user===null){
    alert("login or signup to ask a question")
  navigate('/Auth')
  } else{
    navigate('/AskQuestion')
  }
}
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
      {
        location.pathname ==='/' ? <h1>Top questions</h1>:<h1>All Questions </h1>
      }
      <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
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
