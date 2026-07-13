import React from "react";
export default function HomePage() {
  const profile = `${process.env.PUBLIC_URL}/WhatsApp%20Image%202026-07-13%20at%2005.10.31.jpeg`;
  return (
    <section className="hero" id="home">
      <div className="hero-glow" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Available for opportunities</p>
          <h1>I build digital products that feel <em>simple.</em></h1>
          <p className="hero-intro">I’m Gilbert Bageni, a full-stack developer based in Nairobi. I turn ideas into thoughtful, reliable web experiences.</p>
          <div className="hero-actions">
            <a className="button primary" href="#experience">Explore my work <span>↓</span></a>
            <a className="button ghost" href="mailto:bagenigilbert@gmail.com">Let’s talk</a>
          </div>
          <div className="social-row">
            <a href="https://github.com/gilbert2003-beep" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/gilbert-bageni-9413242a3/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/bert_wilber" target="_blank" rel="noopener noreferrer">X / Twitter</a>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-card"><img src={profile} alt="Gilbert Bageni" /></div>
          <div className="floating-note"><span>Based in</span><strong>Nairobi, Kenya</strong></div>
        </div>
      </div>
    </section>
  );
}
