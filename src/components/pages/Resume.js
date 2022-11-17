import React from "react";
import ProfilePhoto from "../../assets/ProfilePhoto.jpg";

function Resume() {
  // The return statement contains something called "JSX"
  // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
  // Expressions in JSX should be placed in curly braces {}
  return (
    <div className="about-section">
      <img
        src={ProfilePhoto}
        alt="Andrew Lovato"
        className="profile-photo"
      ></img>
      <div className="type-section">
        <h1>Andrew Lovato</h1>
        <p className="about-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <a
          className="btnDownload"
          href="../../assets/Resume2022.pdf.zip"
          download="Resume.2022.pdf.zip"
        >
          Download
        </a>
      </div>
    </div>
  );
}

export default Resume;
