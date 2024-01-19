import React from "react";
import "./contact.css"; // Make sure this file exists and is in the correct path

function Contact() {
  return (
    <div className="contact-container">
      <form
        action="https://formsubmit.co/23f7f20276ae91903f0afefa6024eb5b "
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
        />
        <input
          type="text"
          name="message"
          placeholder="Your Message"
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
