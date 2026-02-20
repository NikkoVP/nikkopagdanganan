import React from "react";
import aboutImg from "../images/about.jpg";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about-grid">
        <div className="about-image">
          <img src={aboutImg} alt="About Nikko" />
        </div>

        <div className="about-text">
          <h2>About Me</h2>

          <p>
            I started my career as a Software Tester working on automotive
            navigation systems, followed by ATM Integrated Switch Terminal (IST)
            testing and modern web platforms including online gaming systems. My
            role focuses on ensuring system reliability, accuracy, and a smooth
            user experience through functional, regression, integration, and
            exploratory testing.
          </p>

          <p>
            I later served two terms as a Municipal Councilor, where I developed
            strong leadership, communication, and decision-making skills. This
            experience strengthened my ability to understand user behavior,
            evaluate real-world impact, and collaborate with different
            stakeholders — skills that I now apply in software quality
            assurance.
          </p>

          <p>
            After public service, I returned to the tech industry with a broader
            perspective and a stronger sense of responsibility. The combination
            of technical testing experience and governance background allows me
            to view systems not only from a technical standpoint, but also from
            the user and business perspective, helping teams release stable and
            dependable products.
          </p>
        </div>
      </div>
    </section>
  );
}
