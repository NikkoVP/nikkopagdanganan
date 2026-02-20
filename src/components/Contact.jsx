import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const email = "nikkopagdanganan09@gmail.com";
  const mailtoLink = `mailto:${email}?subject=&body=`;

  return (
    <section id="contact" className="section">
      <div className="contact-wrapper">
        <h2 className="section-title">Contact</h2>

        <div className="contact-card">
          <p>
            <FaEnvelope className="icon" /> {email}
          </p>
          <p>
            <FaPhone className="icon" /> +63 976 451 5375
          </p>
          <p>
            <FaMapMarkerAlt className="icon" /> Kawit, Cavite
          </p>

          <a href={mailtoLink} className="email-btn">
            <FaPaperPlane /> Send Email
          </a>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/nikko-pagdanganan-2b5506264/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/NikkoVP"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.facebook.com/nikkonixx/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
