import React from "react";
import SectionHead from "./SectionHead";
import { WHY_US } from "../data";

export default function WhyUs() { 
  return (
    <section className="section" style={{ background: "var(--white)" }}>
      <div className="container">
        <SectionHead eyebrow="Why Dreams Overseas" title="Why students choose Dreams Overseas" center />
        <div className="grid why-grid">
          {WHY_US.map(([title, desc]) => (
            <div className="why-card reveal" key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  ); 
}
