import React, { useEffect } from 'react'
import Content from './Content'
import { Helmet } from 'react-helmet-async'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../FireBase/Config';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const [user, loading, error] = useAuthState(auth);

  let navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/Content");
    }
  });
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
