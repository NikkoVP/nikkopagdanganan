import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // close menu after clicking
  };

  return (
    <>
      <header className="navbar">
        <div className="nav-inner">
          <span className="logo" onClick={() => scrollToSection("home")}>
            Nikko
          </span>

          {/* Desktop Links */}
          <nav className="links desktop-links">
            <button onClick={() => scrollToSection("home")}>Home</button>
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("work-exp")}>
              Work Exp
            </button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </nav>

          {/* Burger */}
          <button
            className={`burger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("work-exp")}>Work Exp</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </div>
    </>
  );
}
