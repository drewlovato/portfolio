import React from "react";
import logo from "../logo.svg";

function NavBar() {
  // The return statement contains something called "JSX"
  // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
  // Expressions in JSX should be placed in curly braces {}
  return (
    <div className="nav-section">
      <ul className="nav-ul">
        <a href="#home">
          <img src={logo} className="logo" alt="logo" />
        </a>
        <div className="nav-links">
          <a href="#about">
            <li>ABOUT</li>
          </a>
          <a href="#portfolio">
            <li>WORK</li>
          </a>
          <a href="#contact">
            <li>CONTACT</li>
          </a>
        </div>
      </ul>
    </div>
  );
}

export default NavBar;
