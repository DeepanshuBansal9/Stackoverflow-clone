import React from 'react'
import { useParams,Link } from 'react-router-dom'
import downvote from '../../assets/sort-down.svg'
import upvote from '../../assets/sort-up.svg'
import './Questions.css'
import DisplayAnswer from './DisplayAnswers'
import Avatar from '../../components/Avatar/Avatar'
const QuestionDetails = () => {
    const { id } =useParams()
    var questionList=[{
        id:'1',
        votes:3,
        noOfanswers:2,
        questionTitle:"what is a Function",
        questionBody:"It meant to be",
        questionTags: ["java","nodejs","reactjs","mongodb" ],
        userPosted:"mano",
        askedOn:"jan 1"
      },
      {
        id:'2',
        votes:0,
        noOfanswers:0,
        questionTitle:"what is a Function",
        questionBody:"It meant to be",
        questionTags: ["javascript","R","python" ],
        userPosted:"mano",
        askedOn:"jan 1"
      },{
        id:'3',
        votes:1,
        noOfanswers:0,
        questionTitle:"what is a Function",
        questionBody:"It meant to be",
        questionTags: ["java","nodejs","reactjs","mongodb" ],
        userPosted:"mano",
        askedOn:"jan 1"
    
    }]

  return (
    <div className='question-details-page'>
      {
        questionList===null ?
        <h1>Loading...</h1>:
        <>
        {
            questionList.filter(question => question._id === id).map(question =>(
                <div key={question._id}>
                {console.log(question)}
                <section className='question-details-container'>
                <h1>{question.questionTitle}</h1>
                <div className='question-details-container-2'>
                <div className="question-votes">
                <img src="upvote" alt="" width='18'/>
                <p>{question.upVotes- question.downVotes}</p>
                <img src="downvote" alt="" />
                </div>
                <div style={{width: "100%"}}>
                <p className='question-body'>{question.questionBody}</p>
                <div className="question-details-tags">
                {
                    question.questionTags.map((tag) =>(
                    <p key={tag}>{tag}</p>
                    ))
                }
                                 </div>
                                 <div className="question-action-user">
                                 <div>
                                 <button type='button'>share</button>
                                 <button type='button'>Delete</button>
                                    </div>
                                    <div>
                                    <p>asked {question.askedOn}</p>
                                    <Link to={`/user/${question.userID}`} className='user-link' style={{color:'#0086d8'}}> 
                                      <Avatar backgroundColor="orange" px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>   
                                      <div>
                                            {question.userPosted}
                                             </div>
                                         </Link>
                                     </div>
                                 </div>
                            </div>
                       </div>
                 </section>
                 {
                    question.noOfanswers !== 0 && (
                        <section>
                        <h3>{question.noOfanswers} answers</h3>
                        <DisplayAnswer key={question.id} question={question}/>
                        </section>
                    )
                 }
                 <section className='post-ans-container'>
                 <h3>Your Answer</h3>
                 <form>
                 <textarea name="" id="" cols="30" rows="10"></textarea>
                 <input type="submit" className='post-ans-btn' value='post'></input>
                 <p>Browse other Question tagged
                 {
                  question.questionTags.map((tag)=> (
                  <Link to='/Tags' key={tag} className=''></Link>
                  ))
                 } or
                 <Link to='/AskQuestion' style={{textDecoration:"none", color:"#009dff"}}>Ask your own question</Link>
                 </p>
                 </form>
                 </section>
             </div>
  ))
        }
        </>
      }
    </div>
  )
}

export default QuestionDetails
