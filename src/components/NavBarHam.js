import React, { useState } from "react";
import logo from "../logo.svg";

export default function NavBarHam({ currentPage, handlePageChange }) {
  const [burger_id, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="header-container">
      <div className="logo-container">
        <a
          href="#work"
          onClick={() => handlePageChange("Work")}
          className={currentPage === "Work" ? "active" : ""}
        >
          <img src={logo} className="logo" alt="Logo" />
        </a>
      </div>
      <nav>
        <div className="burger-menu">
          <a
            href="#work"
            onClick={() => [updateMenu, handlePageChange("Work")]}
            id={burger_id}
            className={currentPage === "Work" ? "active" : ""}
          ></a>
          <a
            href="#resume"
            onClick={() => [updateMenu, handlePageChange("Resume")]}
            id={burger_id}
            className={currentPage === "Resume" ? "active" : ""}
          ></a>
          <a
            href="#contact"
            onClick={() => [updateMenu, handlePageChange("Contact")]}
            id={burger_id}
            className={currentPage === "Contact" ? "active" : ""}
          ></a>
        </div>
      </nav>

      <div>className={menu_class}</div>
    </div>
  );
}
