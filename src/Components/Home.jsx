import { Helmet } from 'react-helmet-async';
import '../App.css';
import Content from './Content';
/* 
import {useContext } from "react";
import Data from "../context/Data"; */

export default function Home() {
  return (
    <div >
    
          <Helmet>
            <title>ِApp Page</title>
          </Helmet>
      <Content title="Welcome to Our App" description="Discover amazing features!" />
    </div>
  );
}
