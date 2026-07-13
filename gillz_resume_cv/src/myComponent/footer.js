import React from "react";

export default function Footer() {
  return <footer><div className="container footer-inner"><div><p className="section-kicker">Have a project in mind?</p><h2>Let’s build something<br /><em>worth using.</em></h2><a className="button primary" href="mailto:bagenigilbert@gmail.com">Start a conversation ↗</a></div><div className="footer-bottom"><p>© {new Date().getFullYear()} Gilbert Bageni</p><div><a href="https://github.com/gilbert2003-beep" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://www.linkedin.com/in/gilbert-bageni-9413242a3/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="#home">Back to top ↑</a></div></div></div></footer>;
}
