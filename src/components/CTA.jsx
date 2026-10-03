import React from "react";
import { CONFIG } from "../data";

export default function CTA() { 
  const whatsappUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
  
  return (
    <section className="cta-band">
      <div className="container">
        <span className="eyebrow">Get Started</span>
        <h2>Ready to take the next step?</h2>
        <p>Speak with our education counsellors and start planning your international study journey.</p>
        <div className="hero-ctas">
          <a href="/contact" className="btn btn-primary">Book Free Counselling</a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">WhatsApp Us</a>
        </div>
      </div>
    </section>
  ); 
}
