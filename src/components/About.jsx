import React from "react";
import { Link } from "react-router-dom";

export default function About() { 
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-img reveal">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=85" alt="Education counsellor discussing study plans with a student" loading="lazy" />
        </div>
        <div className="reveal">
          <span className="eyebrow">About Dreams Overseas</span>
          <h2>Your journey. Your future. Our guidance.</h2>
          <p>Dreams Overseas helps students explore international education opportunities and provides comprehensive tourist visa assistance for global travelers. We navigate your journey with structured guidance and personalized support.</p>
          <ul className="feature-list">
            {["Study Abroad Counselling", "Tourist Visa Assistance", "Application Support"].map(item => (
              <li key={item}><span className="dot"></span>{item}</li>
            ))}
          </ul>
          <Link to="/about" className="btn btn-dark">Know More About Us</Link>
        </div>
      </div>
    </section>
  ); 
}
