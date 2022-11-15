import React from "react";

// Icons for Social Media
import svgEmail from "../../src/assets/svgEmail.svg";
import svgGitHub from "../../src/assets/svgGitHub.svg";

export default function NavBar() {
  return (
    <div className="footer-section">
      <ul className="footer-ul">
        <a href="mailto:contact@drewlovato.com" className="lovato-email">
          <img src={svgEmail} className="svgEmail" alt="Email Logo" />
        </a>
        <a href="https://github.com/drewlovato" className="lovato-github">
          <img src={svgGitHub} className="svgGitHub" alt="GitHub Logo" />
        </a>
      </ul>
    </div>
  );
}
