import React from 'react';
import './Contact.css'; // NEW: Import the CSS file for styling

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Get in touch</h2>
      <p className="contact-description">
        If you're interested in collaborating or just want to connect, feel free to reach out!
      </p>
      <a href="mailto:alcy.atorres@gmail.com" className="contact-email">
        alcy.atorres@gmail.com
      </a>
    </section>
  );
}

export default Contact;
