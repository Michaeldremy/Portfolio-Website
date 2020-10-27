import React from "react";

// css
import "../views/styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-component-container">
      <div className="contact-component-text-container">
        <h1>Contact</h1>
        <p>
          For more information, please contact me by e-mail or linkedIn Message. Thank you!
        </p>
      </div>
      <div className="contact-component-social-links-container">
        <a
          href="mailto:michaeldremy@gmail.com"
          className="contact-component-email-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          email
        </a>
        <a
          href="https://www.linkedin.com/in/michaeldremy/"
          className="contact-component-linkedin-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
      </div>
    </div>
  );
};

export default Contact;
