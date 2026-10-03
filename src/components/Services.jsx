import React from "react";
import { Link } from "react-router-dom";
import SectionHead from "./SectionHead";
import { EDUCATION_SERVICES, TOURIST_VISA_SERVICES } from "../data";

export default function Services() { 
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHead eyebrow="What We Offer" title="Expert guidance for students and travelers" />
        
        <div className="service-category">
          <div className="category-banner reveal">
            <div className="banner-text">
              <h3>Study Abroad Consultancy</h3>
              <p>Navigate the complex journey of international education with our expert counsellors. From choosing the perfect university to settling into your new campus, we are with you every step of the way.</p>
              <Link to="/contact" className="btn btn-primary" style={{ width: "fit-content" }}>Book Free Session <span className="arrow">→</span></Link>
            </div>
            <div className="banner-img">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80" alt="Students on university campus" loading="lazy" />
            </div>
          </div>
          <div className="grid services-grid">
            {EDUCATION_SERVICES.map(([icon, title, desc]) => (
              <div className="service-card reveal" key={title}>
                <div className="service-icon">{icon}</div>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "0.6rem", fontFamily: "'Inter', sans-serif", color: "var(--dark)" }}>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="service-category">
          <div className="category-banner reverse reveal">
            <div className="banner-text">
              <h3>Tourist Visa Assistance</h3>
              <p>Planning a holiday or visiting family abroad? Our tourist visa experts ensure your documentation is flawless, maximizing your chances of a swift and successful visa approval.</p>
              <Link to="/contact" className="btn btn-dark" style={{ width: "fit-content" }}>Get Visa Support <span className="arrow">→</span></Link>
            </div>
            <div className="banner-img">
              <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80" alt="Airplane flying in the sky" loading="lazy" />
            </div>
          </div>
          <div className="grid services-grid">
            {TOURIST_VISA_SERVICES.map(([icon, title, desc]) => (
              <div className="service-card reveal" key={title}>
                <div className="service-icon">{icon}</div>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "0.6rem", fontFamily: "'Inter', sans-serif", color: "var(--dark)" }}>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  ); 
}
