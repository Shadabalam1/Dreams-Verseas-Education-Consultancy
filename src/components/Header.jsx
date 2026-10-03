import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NAV_ITEMS } from "../data";

const SOCIAL_LINKS = [
  { name: "Instagram", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
  { name: "Facebook", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> },
  { name: "LinkedIn", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
  { name: "YouTube", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg> }
];

export default function Header({ route }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(route !== "home");
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20 || route !== "home");
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [route]);

  useEffect(() => {
    document.body.classList.toggle("mobile-open", menuOpen);
    return () => document.body.classList.remove("mobile-open");
  }, [menuOpen]);
  
  useEffect(() => {
    const close = event => event.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  
  const linkProps = id => ({
    href: id === "home" ? "/" : `/${id}`,
    onClick: event => {
      event.preventDefault();
      setMenuOpen(false);
      navigate(id === "home" ? "/" : `/${id}`);
    }
  });
  
  return (
    <>
      <header className={`site-header${isScrolled ? " scrolled" : ""}`} id="siteHeader">
        <div className="container">
          <a href="/" className="logo"><img src="/DREAMS%20Banner.png" alt="Dreams Overseas Education Consultancy" className="brand-banner" /></a>
          <nav className="nav-links" aria-label="Primary navigation">
            {NAV_ITEMS.map(([id, label]) => <a key={id} {...linkProps(id)} className={route === id ? "active" : ""} aria-current={route === id ? "page" : undefined}>{label}</a>)}
          </nav>
          <div className="header-cta">
            <a href="/contact" className="btn btn-primary desktop-only">Book Free Counselling</a>
            <button type="button" className="hamburger" id="hamburger" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(value => !value)}><span></span><span></span><span></span></button>
          </div>
        </div>
      </header>

      <div className={`drawer-overlay${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(false)}></div>
      
      <div className={`mobile-drawer${menuOpen ? " open" : ""}`} id="mobileDrawer">
        <div className="drawer-header">
          <img src="/DREAMS%20Banner.png" alt="Dreams" className="brand-banner" />
          <button type="button" className="close-btn" aria-label="Close menu" onClick={() => setMenuOpen(false)}>✕</button>
        </div>
        
        <div className="drawer-nav">
          {NAV_ITEMS.map(([id, label]) => (
            <a key={id} {...linkProps(id)} className={`drawer-link ${route === id ? "active" : ""}`} aria-current={route === id ? "page" : undefined}>
              {label}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          ))}
        </div>
        
        <div className="drawer-footer">
          <a {...linkProps("contact")} className="btn btn-dark drawer-btn">Book Free Counselling</a>
          <div className="drawer-social">
            {SOCIAL_LINKS.map(item => <a href="#" aria-label={item.name} key={item.name}>{item.icon}</a>)}
          </div>
        </div>
      </div>
    </>
  );
}
