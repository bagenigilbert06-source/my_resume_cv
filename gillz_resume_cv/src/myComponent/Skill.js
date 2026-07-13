import React from "react";

const groups = [
  { title: "Frontend", skills: ["JavaScript", "React", "HTML & CSS", "Tailwind CSS", "Angular"] },
  { title: "Backend", skills: ["Python", "Django", "Flask", "Node.js", "REST APIs"] },
  { title: "Data & tools", skills: ["MongoDB", "Git & GitHub", "SQL", "Responsive Design", "Agile workflows"] }
];

export default function Skills() {
  return <section className="section skills-section" id="skills"><div className="container"><p className="section-kicker">04 / Skills</p><div className="section-heading"><h2>Tools I work with</h2><p>A versatile toolkit for taking products from idea to deployment.</p></div><div className="skill-grid">{groups.map(group => <article key={group.title}><h3>{group.title}</h3><div>{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div></div></section>;
}
