import React from 'react'
import Navbar from './Navbar'

export default function Content(data) {
  return (
    <div>
      <Navbar />
      <div className='content-home'>
      <h1>{data.title}-Page</h1>
      <p>{data.description}Page</p>
      </div>
    </div>
  )
}
