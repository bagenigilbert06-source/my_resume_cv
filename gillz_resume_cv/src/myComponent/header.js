import React, { useState } from "react";

const links = ["about", "experience", "services", "education", "skills", "qualities"];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="nav container-wide" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Gilbert Bageni home">GB<span>.</span></a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          <span /><span />
        </button>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map(link => <a key={link} href={`#${link}`} onClick={() => setOpen(false)}>{link}</a>)}
          <a className="nav-cta" href="https://docs.google.com/document/d/1RDwbfRI5gCiI-Fz8tLELkRD38jncq3zTRNo48iA-sSw/export?format=pdf" target="_blank" rel="noopener noreferrer">Download CV ↓</a>
        </div>
      </nav>
    </header>
  );
}
