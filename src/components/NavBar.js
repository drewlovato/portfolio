import React from "react";
import logo from "../logo.svg";

export default function NavBar({ currentPage, handlePageChange }) {
  // The return statement contains something called "JSX"
  // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
  // Expressions in JSX should be placed in curly braces {}
  return (
    <div className="nav-section">
      <ul className="nav-ul">
        <a
          href="#work"
          onClick={() => handlePageChange("Work")}
          className={currentPage === "Work" ? "active" : ""}
        >
          <img src={logo} className="logo" alt="Logo" />
        </a>
        <div className="nav-links">
          <a
            href="#work"
            onClick={() => handlePageChange("Work")}
            className={currentPage === "Work" ? "active" : ""}
          >
            work
          </a>
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={currentPage === "Resume" ? "active" : ""}
          >
            resume
          </a>
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={currentPage === "Contact" ? "active" : ""}
          >
            contact
          </a>
        </div>
      </ul>
    </div>
  );
}
