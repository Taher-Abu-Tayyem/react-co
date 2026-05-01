import { Helmet } from 'react-helmet-async';
import '../App.css';
import Content from './Content';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../FireBase/Config';
/* 
import {useContext } from "react";
import Data from "../context/Data"; */

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  let navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/Content");
    }
  });
  return (
    <div >
    
          <Helmet>
            <title>ِApp Page</title>
          </Helmet>
      <Content title="Welcome to Our App" description="Discover amazing features!" />
    </div>
  );
}
