import React from "react";

export default function SectionHead({ eyebrow, title, text, center }) { 
  return (
    <div className={`section-head reveal${center ? " center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p style={center ? { margin: "auto" } : undefined}>{text}</p>}
    </div>
  );
}
