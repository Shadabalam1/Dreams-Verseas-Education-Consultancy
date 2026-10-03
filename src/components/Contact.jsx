import React, { useState, useCallback } from "react";
import Field from "./Field";
import { CONFIG } from "../data";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", country: "", qualification: "", intake: "", course: "", message: "" });
  
  const update = useCallback(event => setForm(current => ({ ...current, [event.target.name]: event.target.value })), []);
  
  const submit = useCallback(async event => {
    event.preventDefault();
    if (form.name.trim().length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !/^[+\d\s-]{7,15}$/.test(form.phone.trim())) { 
      setStatus("Please enter valid name, email and phone details."); 
      return; 
    }
    setStatus("Sending...");
    const payload = new FormData(event.currentTarget);
    payload.append("access_key", "15f0db8a-a010-4ffc-975a-294d14295f25");
    payload.append("_subject", `New counselling enquiry from ${form.name}`);
    try { 
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: payload }); 
      const result = await response.json(); 
      if (!response.ok || !result.success) throw new Error(); 
      setStatus("Thank you! Your enquiry has been sent successfully."); 
      setForm({ name: "", email: "", phone: "", country: "", qualification: "", intake: "", course: "", message: "" }); 
    } catch { 
      setStatus("Unable to send right now. Please try again or email riyankainat@gmail.com directly."); 
    }
  }, [form]);
  
  return (
    <section className="section" id="contact">
      <div className="container contact-wrap">
        <div className="contact-info reveal">
          <span className="eyebrow">Get In Touch</span>
          <h2 style={{ marginBottom: "1.4rem" }}>Speak with a counsellor</h2>
          <div className="info-row">
            <div className="ic">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div><strong>Call Us</strong><span>{CONFIG.phone}</span></div>
          </div>
          <div className="info-row">
            <div className="ic">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <div><strong>Email</strong><span>{CONFIG.email}</span></div>
          </div>
          <div className="info-row">
            <div className="ic">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div><strong>Office</strong><span>Office Address Here</span></div>
          </div>
        </div>
        <form className="enquiry-form reveal" onSubmit={submit}>
          <div className="form-row">
            <Field label="Full Name *" name="name" value={form.name} onChange={update} />
            <Field label="Email *" name="email" type="email" value={form.email} onChange={update} />
          </div>
          <div className="form-row">
            <Field label="Phone Number *" name="phone" value={form.phone} onChange={update} />
            <div className="field">
              <label htmlFor="country">Preferred Country</label>
              <select id="country" name="country" value={form.country} onChange={update}>
                <option value="">Select a country</option>
                {["Australia", "Canada", "UK", "USA", "Germany", "Ireland", "New Zealand"].map(item => <option key={item}>{item}</option>)}
              </select>
            </div>
          </div>
          <div className="form-row">
            <Field label="Highest Qualification" name="qualification" placeholder="e.g. Bachelor's in Computer Science" value={form.qualification} onChange={update} />
            <Field label="Preferred Intake" name="intake" placeholder="e.g. Fall 2027" value={form.intake} onChange={update} />
          </div>
          <Field label="Interested Course" name="course" placeholder="e.g. MSc Data Science" value={form.course} onChange={update} />
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="3" value={form.message} onChange={update} />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>Submit Enquiry</button>
          {status && <div className={`form-status show${status.startsWith("Thank") ? " success" : ""}`}>{status}</div>}
        </form>
      </div>
    </section>
  );
}
