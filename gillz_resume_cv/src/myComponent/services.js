import React from "react";

const services = [
  { icon: "01", title: "E-commerce", text: "Online stores with product management, secure checkout, payments, orders, and customer accounts.", tags: ["Payments", "Inventory"] },
  { icon: "02", title: "Logistics Platforms", text: "Delivery, dispatch, fleet, parcel tracking, route management, and real-time status systems.", tags: ["Tracking", "Operations"] },
  { icon: "03", title: "Point of Sale", text: "Reliable POS systems for sales, receipts, stock control, staff access, and business reporting.", tags: ["Sales", "Reporting"] },
  { icon: "04", title: "Learning Management", text: "LMS platforms for courses, lessons, assessments, student progress, and instructor workflows.", tags: ["Courses", "Progress"] },
  { icon: "05", title: "Booking & Reservations", text: "Appointment, event, hospitality, and service-booking websites with calendars and notifications.", tags: ["Scheduling", "Alerts"] },
  { icon: "06", title: "Business Portals", text: "Admin dashboards, customer portals, internal tools, analytics, and workflow automation.", tags: ["Dashboards", "Automation"] },
  { icon: "07", title: "APIs & Integrations", text: "Secure backend services and integrations that connect payments, data, mobile apps, and third-party tools.", tags: ["REST APIs", "Integrations"] },
  { icon: "08", title: "Custom Websites", text: "Fast, responsive websites tailored to your idea—from portfolios and company sites to full web applications.", tags: ["Responsive", "Custom"] }
];

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <p className="section-kicker">03 / What I build</p>
        <div className="section-heading">
          <h2>Digital products for<br />real-world needs.</h2>
          <p>From a focused business website to a complete operational platform, I create solutions that are practical, scalable, and easy to use.</p>
        </div>
        <div className="services-grid">
          {services.map(service => (
            <article className="service-card" key={service.title}>
              <span className="service-number">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="service-tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
        <div className="custom-callout">
          <div><span>Have something different in mind?</span><h3>I can build around your idea.</h3></div>
          <a className="button primary" href="mailto:bagenigilbert@gmail.com?subject=Website%20project%20inquiry">Discuss your project ↗</a>
        </div>
      </div>
    </section>
  );
}
