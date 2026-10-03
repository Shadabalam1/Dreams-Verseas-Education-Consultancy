import React from "react";
import { Link } from "react-router-dom";
import SectionHead from "./SectionHead";
import { DESTINATIONS } from "../data";

export default function Destinations() { 
  return (
    <section className="section" id="destinations" style={{ background: "var(--white)" }}>
      <div className="container">
        <SectionHead eyebrow="Where You Could Study" title="Choose your destination" text="Explore study opportunities across leading international destinations." center />
        <div className="grid dest-grid">
          {DESTINATIONS.map(destination => (
            <Link to="/contact" className="dest-card reveal" key={destination.name}>
              <img src={destination.img} alt={destination.name} loading="lazy" />
              <div className="body">
                <h3>{destination.name}</h3>
                <p>{destination.desc}</p>
                <span className="explore">Explore {destination.name} →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  ); 
}
