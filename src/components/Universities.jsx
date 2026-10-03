import React, { useState, useMemo } from "react";
import SectionHead from "./SectionHead";
import { UNIVERSITIES } from "../data";

export default function Universities() {
  const [country, setCountry] = useState("all");
  const [degree, setDegree] = useState("all");
  const [course, setCourse] = useState("all");
  const availableCountries = useMemo(() => {
    return [...new Set(UNIVERSITIES.filter(item => (degree === "all" || item[2] === degree) && (course === "all" || item[3] === course)).map(item => item[1]))];
  }, [degree, course]);

  const availableDegrees = useMemo(() => {
    return [...new Set(UNIVERSITIES.filter(item => (country === "all" || item[1] === country) && (course === "all" || item[3] === course)).map(item => item[2]))];
  }, [country, course]);

  const availableCourses = useMemo(() => {
    return [...new Set(UNIVERSITIES.filter(item => (country === "all" || item[1] === country) && (degree === "all" || item[2] === degree)).map(item => item[3]))];
  }, [country, degree]);
  
  const filtered = useMemo(() => UNIVERSITIES.filter(item => (country === "all" || item[1] === country) && (degree === "all" || item[2] === degree) && (course === "all" || item[3] === course)), [country, degree, course]);
  
  return (
    <section className="section" id="universities">
      <div className="container">
        <SectionHead 
          center={true}
          eyebrow="Global Partnerships" 
          title="Top Universities Worldwide" 
          text="We partner with leading institutions across the globe to bring you the best education opportunities. Filter by destination, degree, or course to find your perfect match. Our extensive network ensures you have access to world-class programs that align with your career goals."
        />
        <div className="filter-wrapper reveal">
          <div className="filter-group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <select value={country} onChange={e => setCountry(e.target.value)}>
              <option value="all">All Countries</option>
              {availableCountries.map(item => <option key={item} value={item}>{item}</option>)}
            </select>
          </div>
          <div className="filter-group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
            <select value={degree} onChange={e => setDegree(e.target.value)}>
              <option value="all">All Degrees</option>
              {availableDegrees.map(item => <option key={item} value={item}>{item}</option>)}
            </select>
          </div>
          <div className="filter-group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
            <select value={course} onChange={e => setCourse(e.target.value)}>
              <option value="all">All Courses</option>
              {availableCourses.map(item => <option key={item} value={item}>{item}</option>)}
            </select>
          </div>
        </div>
        {filtered.length > 0 ? (
          <div className="grid uni-grid">
            {filtered.map(([name, universityCountry, universityDegree, universityCourse, programs, logo]) => (
              <div className="uni-card reveal" key={name}>
                <div className="logo-box">
                  <img className="uni-logo" src={`https://www.google.com/s2/favicons?domain=${logo}&sz=128`} alt={`${name} logo`} loading="lazy" onError={event => { event.currentTarget.style.display = "none"; event.currentTarget.nextElementSibling.style.display = "block"; }} />
                  <span className="logo-fallback">{name.charAt(0)}</span>
                </div>
                <div className="country">{universityCountry}</div>
                <h3>{name}</h3>
                <p className="programs">{programs}</p>
                <a href="/contact" className="btn btn-dark" style={{ padding: "10px 20px", fontSize: "0.82rem" }}>View Details</a>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results reveal" style={{ textAlign: "center", padding: "5rem 2rem", background: "var(--white)", borderRadius: "var(--radius-m)", border: "2px dashed rgba(23,35,43,0.1)", margin: "2rem 0" }}>
             <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--muted)", margin: "0 auto 1rem" }}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
             <h4 style={{ fontSize: "1.3rem", color: "var(--dark)", marginBottom: "0.5rem" }}>No matching universities</h4>
             <p style={{ color: "var(--muted)", marginBottom: "1.8rem" }}>We couldn't find any universities matching your selected criteria.</p>
             <button className="btn btn-dark" onClick={() => { setCountry("all"); setDegree("all"); setCourse("all"); }} style={{ cursor: "pointer", border: "none", padding: "12px 24px" }}>Clear All Filters</button>
          </div>
        )}
        
        <div className="reveal" style={{ marginTop: "4rem", background: "rgba(217,138,74,0.1)", padding: "3.5rem 2rem", borderRadius: "var(--radius-m)", textAlign: "center", border: "1px solid rgba(217,138,74,0.2)" }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.9rem", color: "var(--dark)", marginBottom: "1.2rem" }}>Didn't find your dream university?</h3>
          <p style={{ color: "var(--text)", maxWidth: "650px", margin: "0 auto 2.2rem", fontSize: "1.05rem", lineHeight: "1.7" }}>
            This is just a curated selection of our popular partners. We have direct tie-ups and extensive experience placing students in over <strong>500+ top-ranked universities</strong> and institutions across 20+ countries worldwide. 
          </p>
          <a href="/contact" className="btn btn-primary" style={{ padding: "16px 36px", fontSize: "1rem" }}>Consult Our Experts</a>
        </div>
      </div>
    </section>
  );
}
