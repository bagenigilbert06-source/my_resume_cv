import React from "react";

const qualities = [
  ["01", "Product-minded", "I look beyond the code to understand the problem, the person using the product, and the outcome we want to create."],
  ["02", "Collaborative", "I communicate clearly, welcome feedback, and enjoy working with people across design, product, and engineering."],
  ["03", "Always learning", "Technology changes quickly. I stay curious, experiment often, and continuously sharpen my craft."],
  ["04", "Purpose-driven", "I care about using technology to solve practical problems and make a positive, lasting impact."]
];

export default function Achievements() {
  return <section className="section section-tint" id="qualities"><div className="container"><p className="section-kicker">05 / How I work</p><div className="section-heading"><h2>More than the code</h2><p>The principles I bring to every team and every project.</p></div><div className="qualities-grid">{qualities.map(([number, title, text]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}
