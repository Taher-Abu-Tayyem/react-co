import React from 'react'

export default function Content(data) {
  return (
    <div>
      <h1>{data.title}-Page</h1>
      <p>{data.description}Page</p>
    </div>
  )
}
