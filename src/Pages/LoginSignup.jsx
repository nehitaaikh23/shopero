import React from 'react'
import './css/LoginSignup.css'
import { useState } from 'react'
import { data } from 'react-router-dom';

const LoginSignup = () => {

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })

  const signUpHandler = () => {
    if (state === "Login"){setState("Sign Up")}
    else { setState("Login")}
  }

  const login = async() => {
    console.log("Login Function Executed",formData)
    let responseData;
    await fetch(`${import.meta.env.VITE_API_URL}/login`,{
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    }).then((resp) => resp.json()).then((data) => responseData = data);

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/")
    } else {
      alert(responseData.errors);
    }
  }

  const signup = async() => {
    console.log("Sign Up Function Executed",formData);
    let responseData;

    await fetch(`${import.meta.env.VITE_API_URL}/signup`,{
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    }).then((resp) => resp.json()).then((data)=>responseData=data)

    console.log(responseData);

    if (responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/")
    } else {
      alert(responseData.error);
    }
  }

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>{state}</h1>
        <div className="login-signup-fields">
          {(state === "Sign Up") ? <input type="text" placeholder="Your Name" name='username' value={formData.username} onChange={changeHandler}/> : ""}
          <input type="email" name="email" value={formData.email} onChange={changeHandler} placeholder="Your Email"  />
          <input type="password" name='password' value={formData.password} onChange={changeHandler} placeholder="Password" id="" />
          <button onClick={()=>{(state === "Login")? login() : signup()}}>{state}</button>
        </div>
        {(state === "Sign Up") ?<p className="login-signup-login">Already have an account? <span onClick={()=>{signUpHandler()}}>Login here</span></p>: <p className="login-signup-login">New to Shopero? <span onClick={() => {signUpHandler()}}>Sign Up</span></p>}
        <div className="login-signup-agree">
          <input type="checkbox" name='' id='' required/>
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup