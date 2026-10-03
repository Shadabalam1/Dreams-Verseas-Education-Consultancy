import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NAV_ITEMS } from "../data";

export default function Header({ route }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(route !== "home");
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20 || route !== "home");
    };
    // Initialize
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
  
  return <header className={`site-header${isScrolled ? " scrolled" : ""}`} id="siteHeader">
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
    <div className={`mobile-drawer${menuOpen ? " open" : ""}`} id="mobileDrawer">
      {NAV_ITEMS.map(([id, label]) => <a key={id} {...linkProps(id)} className={route === id ? "active" : ""} aria-current={route === id ? "page" : undefined}>{label}</a>)}
      <a {...linkProps("contact")} className="btn btn-dark" style={{ marginTop: "1rem" }}>Book Free Counselling</a>
    </div>
  </header>;
}
