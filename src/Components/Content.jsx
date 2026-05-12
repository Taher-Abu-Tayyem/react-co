import React from 'react'
import Navbar from './Navbar'

import {useContext } from "react";
import Data from "../context/Data";
import { FaRegSun } from 'react-icons/fa';
import { MdNightlight } from 'react-icons/md';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../FireBase/Config';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';



export default function Content(data) {
    const {theme, changeTheme} = useContext(Data);
    const [user, loading, error] = useAuthState(auth);
    

  return (
    <div className=''   >
      <Navbar />
      {user ? 
      <div className='content-home'>
        <p>HI {user?.displayName || "Guest"}</p>
        
      {/* <p>{data.title || "Default"}-Page</p>
      <p>{data.description || "Default description"}</p> */}
      <p>creationTime: <Moment fromNow date={user?.metadata?.creationTime} /></p>
      <button className='btn delete-account-btn' onClick={() => {
        // Implementation for delete account
      }}>Delete Account</button>
      </div> : <h1  className='content-home'><Link style={{color:"skyblue"} }to="/signin">Sign In</Link> to continue</h1>}  
      
    </div>
  )
}
