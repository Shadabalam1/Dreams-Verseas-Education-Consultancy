import React from "react";
import SectionHead from "./SectionHead";
import { SERVICES } from "../data";

export default function Services() { 
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHead eyebrow="What We Offer" title="Guidance from first step to departure" />
        <div className="grid services-grid">
          {SERVICES.map(([icon, title, desc]) => (
            <div className="service-card reveal" key={title}>
              <div className="service-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <a href="/contact" className="learn">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  ); 
}
