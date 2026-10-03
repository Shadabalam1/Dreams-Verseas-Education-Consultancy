import React, { useState, useMemo } from "react";
import SectionHead from "./SectionHead";
import { UNIVERSITIES } from "../data";

export default function Universities() {
  const [country, setCountry] = useState("all");
  const [degree, setDegree] = useState("all");
  const [course, setCourse] = useState("all");
  const countries = useMemo(() => [...new Set(UNIVERSITIES.map(item => item[1]))], []);
  const courses = useMemo(() => [...new Set(UNIVERSITIES.map(item => item[3]))], []);
  const filtered = useMemo(() => UNIVERSITIES.filter(item => (country === "all" || item[1] === country) && (degree === "all" || item[2] === degree) && (course === "all" || item[3] === course)), [country, degree, course]);
  
  return (
    <section className="section" id="universities">
      <div className="container">
        <SectionHead eyebrow="Opportunities" title="Explore university opportunities" />
        <div className="filters reveal">
          <select value={country} onChange={event => setCountry(event.target.value)}>
            <option value="all">All Countries</option>
            {countries.map(item => <option key={item}>{item}</option>)}
          </select>
          <select value={degree} onChange={event => setDegree(event.target.value)}>
            <option value="all">All Degrees</option>
            <option>Bachelor's</option>
            <option>Master's</option>
            <option>Diploma</option>
          </select>
          <select value={course} onChange={event => setCourse(event.target.value)}>
            <option value="all">All Courses</option>
            {courses.map(item => <option key={item}>{item}</option>)}
          </select>
        </div>
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
      </div>
    </section>
  );
}
