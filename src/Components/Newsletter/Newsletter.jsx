import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <form>
            <input type="email" placeholder='subscribe@gmail.com'/>
            <button>Subscribe</button>
        </form>
    </div>
  )
}

export default Newsletter