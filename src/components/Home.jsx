import React from "react";
import profile from "../images/IMG_3707.jpeg";

export default function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <div className="hero-pill">+3 YEARS OF EXPERIENCE</div>

        <h1 className="hero-title">
          Nikko Pagdanganan
          <br />
          <span>QA Engineer</span>
        </h1>

        <p className="hero-desc">
          QA engineer with experience across technology and public service,
          combining technical testing expertise with real-world decision-making
          perspective. Focused on product reliability, usability, and quality
          delivery.
        </p>

        {/* DOWNLOAD RESUME BUTTON */}
        <a
          className="hero-btn"
          href="/resume/Nikko_Pagdanganan_Resume.pdf"
          download="Nikko_Pagdanganan_Resume.pdf"
        >
          DOWNLOAD RESUME <span className="arrow">↓</span>
        </a>
      </div>

      <div className="hero-right">
        <img src={profile} alt="Nikko portrait" className="hero-img" />
      </div>
    </section>
  );
}
