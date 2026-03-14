import React from 'react'
import './css/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <form className="login-signup-fields">
          <input type="text" placeholder="Your Name" id="" />
          <input type="email" placeholder="Signup@gmail.com" id="" />
          <input type="password" placeholder="Password" id="" />
          <button type='submit'>Sign Up</button>
        </form>
        <p className="login-signup-login">Already have an account? <span>Login here</span></p>
        <div className="login-signup-agree">
          <input type="checkbox" name='' id='' required/>
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup