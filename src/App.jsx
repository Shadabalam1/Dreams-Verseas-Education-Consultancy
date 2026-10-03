import React, { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import About from "./components/About";
import Destinations from "./components/Destinations";
import Services from "./components/Services";
import Process from "./components/Process";
import WhyUs from "./components/WhyUs";
import Universities from "./components/Universities";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  const { pathname } = useLocation();
  const route = pathname.replace(/^\//, "") || "home";
  
  // Update title and scroll to top on route change
  useEffect(() => { 
    document.title = "Dreams Overseas Education Consultancy | Study Abroad Guidance";
    window.scrollTo({ top: 0, behavior: "instant" }); 
  }, [pathname]);
  
  // Re-initialize scroll animations on route change
  useEffect(() => { 
    const items = document.querySelectorAll(".reveal"); 
    if (!("IntersectionObserver" in window)) { 
      items.forEach(item => item.classList.add("in-view")); 
      return; 
    } 
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { 
      if (entry.isIntersecting) { 
        entry.target.classList.add("in-view"); 
        observer.unobserve(entry.target); 
      } 
    }), { threshold: 0.15 }); 
    items.forEach(item => observer.observe(item)); 
    return () => observer.disconnect(); 
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <Header route={route} />
      <main style={{ paddingTop: isHome ? "0" : "100px", minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <TrustBar />
              <About />
              <Destinations />
              <Services />
              <Process />
              <WhyUs />
              <Universities />
              <Testimonials />
              <CTA />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/services" element={<Services />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/success-stories" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
