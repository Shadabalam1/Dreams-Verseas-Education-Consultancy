import React, { useState } from "react";
import SectionHead from "./SectionHead";
import { FAQS } from "../data";

export default function FAQ() { 
  const [open, setOpen] = useState(null); 
  
  return (
    <section className="section" id="faq" style={{ background: "var(--white)" }}>
      <div className="container">
        <SectionHead eyebrow="Questions" title="Frequently asked questions" center />
        <div className="faq-list">
          {FAQS.map(([question, answer], index) => (
            <div className={`faq-item${open === index ? " open" : ""}`} key={question}>
              <button className="faq-q" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)}>
                {question}<span className="plus">+</span>
              </button>
              <div className="faq-a">
                <p>{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ); 
}
