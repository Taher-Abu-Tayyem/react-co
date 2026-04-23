import React from "react";
import { FaRegSun } from "react-icons/fa";
import { MdNightlight } from "react-icons/md";
import { Link } from "react-router-dom";
import "../theme.css";

import {useContext } from "react";
import Data from "../context/Data";


export default function Navbar() {
    const {theme, changeTheme} = useContext(Data);

  return (
    <header className="header"  >
      <div className="container header-inner">
        <Link to="/" class="logo">
          Modern Musician
        </Link>
        <button
          class="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded="false"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
              < button  onClick={  () => {
                changeTheme(theme==="light"?"dark":"light")
              }
              }>
                {theme === "light" ? <MdNightlight /> : <FaRegSun/> }              </button>
            
        <nav className="nav" id="nav">
          <ul className="nav-list">
            
            <li>
              <Link to="/about">Go to About</Link>
            </li>
            <li>
              <Link to="/services">Go to Services</Link>
            </li>
            <li>
              <Link to="/contact">Go to Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
