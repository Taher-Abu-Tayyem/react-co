import React from 'react'
import Content from './Content'
import { Helmet } from 'react-helmet-async'

export default function Contact() {
  return (
    <>
          <Helmet>
            <title>Contact Page</title>
            <meta
      name="description"
      content="Web site CONTACT description"
    />
          </Helmet>
      <Content title="Contact Us" description="Get in touch with us today!"  />
    </>
  )
}
