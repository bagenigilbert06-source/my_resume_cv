import React from "react";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container two-column">
        <div><p className="section-kicker">01 / About</p><h2>Curious by nature.<br />Driven by impact.</h2></div>
        <div className="about-copy">
          <p>Versatile full-stack developer with a foundation in software engineering, committed to creating useful products through thoughtful, pragmatic solutions.</p>
          <p>I enjoy collaborating across disciplines, learning emerging technologies, and turning complex requirements into experiences people understand and enjoy using.</p>
          <div className="contact-grid">
            <a href="mailto:bagenigilbert@gmail.com"><span>Email</span>bagenigilbert@gmail.com</a>
            <div><span>Location</span>Nairobi, Kenya</div>
          </div>
        </div>
      </div>
    </section>
  );
}
