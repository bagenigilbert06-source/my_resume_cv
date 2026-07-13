import React from "react";

const roles = [
  { number: "01", title: "Backend Developer", tag: "Django · Flask · APIs", date: "2023 — Present", text: "Designing reliable server-side systems, data models, and APIs with a focus on scalability, performance, and maintainable code." },
  { number: "02", title: "Web Developer", tag: "Responsive web experiences", date: "2023", text: "Building responsive, accessible websites with HTML, CSS, JavaScript, React, and modern component-driven workflows." },
  { number: "03", title: "Project Developer", tag: "Product development", date: "2023", text: "Developed a delivery service application and a photography marketplace, translating product ideas into practical end-to-end experiences." }
];

export default function Experience() {
  return (
    <section className="section section-tint" id="experience">
      <div className="container"><p className="section-kicker">02 / Experience</p><div className="section-heading"><h2>Selected experience</h2><p>Building across the stack—from interfaces to the systems behind them.</p></div>
        <div className="experience-list">{roles.map(role => <article className="experience-card" key={role.title}><span className="card-number">{role.number}</span><div><p className="tag">{role.tag}</p><h3>{role.title}</h3><p>{role.text}</p></div><time>{role.date}</time></article>)}</div>
      </div>
    </section>
  );
}
