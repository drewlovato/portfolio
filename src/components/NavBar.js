import React from "react";
import logo from "../logo.svg";

function NavBar() {
  // The return statement contains something called "JSX"
  // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
  // Expressions in JSX should be placed in curly braces {}
  return (
    <div className="nav-section">
      <ul className="nav-ul">
        <a href="#work">
          <img src={logo} className="logo" alt="logo" />
        </a>
        <div className="nav-links">
          <a href="#resume">
            <li>work</li>
          </a>
          <a href="#contact">
            <li>resume</li>
          </a>
          <a href="#resume">
            <li>contact</li>
          </a>
        </div>
      </ul>
    </div>
  );
}

export default NavBar;
