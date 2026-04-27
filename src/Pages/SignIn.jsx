import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
  <>
            <Helmet>
              <title>SignIn Page</title>
              <meta
        name="description"
        content="Web site SIGNIN description"
      />
            </Helmet>
            
        <Navbar/>
        <main className='content-home'>
         <form >
          
            <input type="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Sign In</button>
            <Link to="/signup"><p className="account">Sign Up</p></Link>
          </form>
        </main>
        
        

    </>
  )
}
