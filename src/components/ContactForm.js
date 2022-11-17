import React, { useState } from "react";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="txtGreetingONE">Thank you!</div>
        <div className="txtGreetingTWO">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className="form-container"
    >
      <div className="name-section">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="txtInput"
          required
        />
      </div>
      <div className="email-section">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="txtInput"
          required
        />
      </div>
      <div className="message-section">
        <textarea
          placeholder="Your message"
          name="message"
          className="txtInput"
          required
        />
      </div>
      <div className="button-section">
        <button className="btnSubmit" type="submit">
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
