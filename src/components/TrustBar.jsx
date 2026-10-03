import React from "react";

export default function TrustBar() { 
  return (
    <section className="trust-bar">
      <div className="container grid">
        {[
          ["12+", "Years Experience"], 
          ["20,000+", "Successful Recruitments"], 
          ["30+", "Expert Staff"], 
          ["100%", "Visa Success"]
        ].map(([number, label]) => (
          <div className="item" key={label}>
            <strong style={{ fontSize: "2.5rem", color: "var(--accent)", lineHeight: 1 }}>{number}</strong>
            <span style={{ fontSize: "0.95rem", color: "var(--white)", display: "block", marginTop: "8px", fontWeight: 500 }}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  ); 
}
