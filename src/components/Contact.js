import React from 'react';

function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold mb-4 text-white">Get in touch</h2>
      <p className="text-white text-center max-w-xl px-4 mb-4">
        If you're interested in collaborating or just want to connect, feel free to reach out!
      </p>
      <a href="mailto:alcy.atorres@gmail.com" className="text-blue-400 text-xl">
        alcy.atorres@gmail.com
      </a>
    </section>
  );
}

export default Contact;
