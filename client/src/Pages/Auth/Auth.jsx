import React, { useState } from 'react'
import './Auth.css'
import icon from '../../assets/logo.png'
import AboutAuth from './AboutAuth'
const Auth = () => {

 const  [isSignup, setIsSignup]= useState(false)  
 const [name, setName]=useState('')
 const [email,setEmail]=useState('')
 const [password, setPassword] = useState('')
  
 const handleSwitch=() =>{
  setIsSignup(!isSignup)
 }

   const handleSubmit = (e)=>{
    e.PreventDefault()
   console.log("hi how are you");
    console.log({name,email,password})
   }

  return (
    <section className='auth-section'>
    {isSignup && <AboutAuth />}
    <div className='auth-container-2'>
    {!isSignup && <img src={icon} alt='stack overflow' className='login-logo'/>}
    <form onSubmit={handleSubmit}>
          {
            isSignup && (
              <label htmlFor='name'>
              <h4>Display name</h4>
              <input type="text" id='name' name='name' onChange={(e)=>{setName(e.target.value)}}/> 
              </label>
            )
          }


    <label htmlFor="email">
    <h4> Email </h4>
    <input type="email" name="email" id='email' onChange={(e)=>{setEmail(e.target.value)}}/>
    </label>
    <label htmlFor="password">
    <div style={{display:"flex", justifyContent:"space-between"}}>
    <h4>  Password  </h4> 
    {!isSignup && <p style={{color:"#007ac6" ,fontSize:'13px'}}>Forgot Password</p>}
    </div>
     <input type="password" name="password" id='password' onChange={(e)=>{setPassword(e.target.value)}}/>
    { isSignup && <p style={{color:"#666767",fontSize:'13px'}}>Passwords must contain at least eight  <br/>character,including at least 1 letter and 1 <br/>number.</p>}
    </label>
    {isSignup && (
      <label htmlFor='check'>
      <input type="checkbox" id='check'/>
      <p style={{fontSize:"13px"}}>opt-in to  receive occassional, <br/>products updates ,user research invantions, <br />company announcemants, and digests.</p>
      </label>
    )
 }
<button type='submit' className='auto-btn'>{ isSignup ? 'Sign up':'Log in'}</button>

{
  isSignup &&(
    <p style={{color:"#666767",fontSize:"13px"}}>By Clicking "sign-up", you agree to our
    <span style={{color:"#007ac6"}}> terms of <br/>service</span>,
    <span style={{color:"#007ac6"}}> privacy policy</span> and
    <span style={{color:"#007ac6"}}> cookie policy </span>
    </p>
  )
}
 </form>
    <p>
    {isSignup ? 'Already have an account?' :" Don't have an account"}
    <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{ isSignup ? "Log in" :'sign up'}</button>
    </p> 
    </div>
    </section>
  )
}

export default Auth
