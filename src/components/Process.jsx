import React from "react";
import SectionHead from "./SectionHead";
import { PROCESS_STEPS } from "../data";

export default function Process() { 
  return (
    <section className="section process">
      <div className="container">
        <SectionHead eyebrow="How It Works" title="Your study abroad journey, simplified" center />
        <div className="timeline">
          {PROCESS_STEPS.map((step, index) => (
            <div className="timeline-step reveal" key={step}>
              <div className="num">{String(index + 1).padStart(2, "0")}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  ); 
}
