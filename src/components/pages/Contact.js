import React from "react";

// Import Components
import ContactForm from "../ContactForm";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <header className="contact-header">Contact</header>
        <ContactForm />
      </div>
      <div className="greeting-section">Let's Talk!</div>
    </div>
  );
}

export default Contact;
