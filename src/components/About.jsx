import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function About() { 
  const { pathname } = useLocation();
  const isAboutPage = pathname === "/about";

  return (
    <>
      <section className="section about" id="about" style={{ paddingTop: isAboutPage ? "2rem" : "" }}>
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
            {!isAboutPage && <Link to="/about" className="btn btn-dark">Know More About Us</Link>}
          </div>
        </div>
      </section>

      {isAboutPage && (
        <>
          <section className="section" style={{ background: "var(--light)" }}>
            <div className="container reveal">
              <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                <h2 style={{ fontSize: "2.4rem", fontFamily: "'Playfair Display', serif", marginBottom: "1.5rem", color: "var(--dark)" }}>Our Story</h2>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--text)" }}>
                  Founded with a vision to make global education and travel accessible, <strong>Dreams Overseas</strong> has grown into a trusted partner for thousands of ambitious individuals. What started as a boutique consultancy has blossomed into a full-fledged advisory organization, connecting talented minds with top-tier institutions worldwide, and facilitating hassle-free tourist visas for eager travelers. 
                </p>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--text)", marginTop: "1rem" }}>
                  We believe that borders shouldn't limit potential. Our team of expert counselors and visa specialists work tirelessly to ensure that every application we handle is crafted with precision, care, and a deep understanding of our clients' unique goals. With direct tie-ups with over 500+ universities across 20+ countries, we are dedicated to transforming your global dreams into reality.
                </p>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container reveal">
              <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>
                <div style={{ background: "var(--white)", padding: "3rem", borderRadius: "var(--radius-m)", boxShadow: "0 10px 40px rgba(0,0,0,0.06)", borderTop: "4px solid var(--primary)" }}>
                  <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "rgba(217,138,74,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", marginBottom: "1.5rem" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                  </div>
                  <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem", fontFamily: "'Playfair Display', serif" }}>Our Mission</h3>
                  <p style={{ color: "var(--text)", lineHeight: "1.7", fontSize: "1.05rem" }}>To empower students and travelers by providing transparent, ethical, and high-quality consulting services. We strive to simplify the complex processes of university admissions and visa applications, ensuring a seamless and stress-free experience for everyone who walks through our doors.</p>
                </div>
                
                <div style={{ background: "var(--white)", padding: "3rem", borderRadius: "var(--radius-m)", boxShadow: "0 10px 40px rgba(0,0,0,0.06)", borderTop: "4px solid var(--dark)" }}>
                  <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "rgba(23,35,43,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--dark)", marginBottom: "1.5rem" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"></path></svg>
                  </div>
                  <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem", fontFamily: "'Playfair Display', serif" }}>Our Vision</h3>
                  <p style={{ color: "var(--text)", lineHeight: "1.7", fontSize: "1.05rem" }}>To be the world's most trusted and student-centric overseas education and visa consultancy, recognized globally for our unwavering commitment to client success, our ethical practices, and our extensive network of international partnerships.</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  ); 
}
