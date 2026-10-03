import React, { useState, useEffect } from "react";
import SectionHead from "./SectionHead";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  useEffect(() => { 
    const timer = setInterval(() => setIndex(value => (value + 1) % TESTIMONIALS.length), 5000); 
    return () => clearInterval(timer); 
  }, []);
  
  return (
    <section className="section testimonials" id="success-stories" style={{ background: "var(--white)" }}>
      <div className="container">
        <SectionHead eyebrow="Success Stories" title="What Our Students Say" text="Thoughtful guidance can make the journey to an international education feel clearer and more confident." center />
        <div className="testi-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {TESTIMONIALS.map(([name, course, uni, quote, image]) => (
            <div className="testi-slide" key={name}>
              <div className="testi-card">
                <img className="avatar" src={image} alt={name} loading="lazy" />
                <div className="rating" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote>"{quote}"</blockquote>
                <div className="name">{name}</div>
                <div className="meta">{course} · {uni}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="testi-controls">
          <button className="testi-arrow" onClick={() => setIndex(value => (value - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} aria-label="Previous testimonial">‹</button>
          <div className="testi-dots">
            {TESTIMONIALS.map(([, name], itemIndex) => (
              <button className={`dot${itemIndex === index ? " active" : ""}`} key={name} onClick={() => setIndex(itemIndex)} aria-label={`Show testimonial ${itemIndex + 1}`}></button>
            ))}
          </div>
          <button className="testi-arrow" onClick={() => setIndex(value => (value + 1) % TESTIMONIALS.length)} aria-label="Next testimonial">›</button>
        </div>
      </div>
    </section>
  );
}
