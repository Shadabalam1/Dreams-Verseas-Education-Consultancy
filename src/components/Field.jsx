import React from "react";

export default function Field({ label, name, type = "text", placeholder, value, onChange }) { 
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  ); 
}
