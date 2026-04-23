import React from 'react'
import Navbar from './Navbar'

import {useContext } from "react";
import Data from "../context/Data";
import { FaRegSun } from 'react-icons/fa';
import { MdNightlight } from 'react-icons/md';


export default function Content(data) {
    const {theme, changeTheme} = useContext(Data);

  return (
    <div className=''   >
      <Navbar />
        
      <div className='content-home'>
      <h1>{data.title}-Page</h1>
      <p>{data.description}Page</p>
      </div>
    </div>
  )
}
