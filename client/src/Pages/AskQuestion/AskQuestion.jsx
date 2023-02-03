import React from 'react'
import {redirect, useNavigate} from 'react-router-dom'
import './AskQuestion.css'
const AskQuestion = () => {
    const user= 1;
    const history= useNavigate()
    const redirect =() =>{
        alert("login or signup to ask a queation")
        history.push('/Auth') 
    }
  return (
    <>
    {
        user === null ?
       redirect():
       <div>

        </div>
    }

    </>
    )
}

export default AskQuestion
