// Imports React && UseState
import React, { useState } from "react";

// HEADER & FOOTER COMPONENTS
import NavBar from "./NavBar";
// import Footer from "./Footer";

// PAGE COMPONENTS
import Work from "./pages/Work";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function PageLayout() {
  const [currentPage, setCurrentPage] = useState("Home");

  const render = () => {
    if (currentPage === "Work") {
      return <Work />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>{render()}</main>
    </div>
  );
}
