import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header class="header">
      <div class="container header-inner">
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
        <nav class="nav" id="nav">
          <ul className="nav-list">
            <li>
              <Link to="/about" >Go to About</Link>
              
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
