import React, { useState, useEffect, useRef } from "react";

function AnimatedNumber({ value }) {
  const [count, setCount] = useState(0);
  const end = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasStarted) {
        setHasStarted(true);
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp = null;
    const duration = 2000;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, hasStarted]);

  return <span ref={ref} style={{ fontSize: "inherit", color: "inherit" }}>{count}{suffix}</span>;
}

export default function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="container grid">
        {[
          ["3500+", "Successful Admissions"],
          ["8+", "Years Experience"],
          ["18+", "Expert Staff"],
          ["100%", "Visa Success"]
        ].map(([number, label]) => (
          <div className="item" key={label}>
            <strong style={{ fontSize: "2.5rem", color: "var(--accent)", lineHeight: 1 }}>
              <AnimatedNumber value={number} />
            </strong>
            <span style={{ fontSize: "0.95rem", color: "var(--white)", display: "block", marginTop: "8px", fontWeight: 500 }}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

