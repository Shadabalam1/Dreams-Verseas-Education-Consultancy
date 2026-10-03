import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const VIDEOS = [
  "https://videos.pexels.com/video-files/36248449/15372583_3840_2160_30fps.mp4",
  "https://videos.pexels.com/video-files/16071601/16071601-uhd_3840_2160_24fps.mp4"
];

export default function Hero() { 
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % VIDEOS.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentVideoIndex]);

  return (
    <section className="hero" id="home">
      {/* Video Container (fades in when ready) */}
      <div 
        style={{ 
          position: "absolute", 
          inset: 0, 
          zIndex: 0, 
          opacity: isVideoReady ? 1 : 0, 
          transition: "opacity 1s ease" 
        }}
      >
        <video 
          ref={videoRef}
          src={VIDEOS[currentVideoIndex]} 
          preload="auto"
          autoPlay 
          muted 
          playsInline 
          onCanPlay={() => setIsVideoReady(true)}
          onEnded={handleVideoEnded}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(13,23,29,0.72), rgba(13,23,29,0.55))" }} />
      </div>

      <div className="container hero-content" style={{ position: "relative", zIndex: 1 }}>
        <span className="eyebrow">Education & Visa Consultancy</span>
        <h1>Turn your travel and study abroad dreams into global opportunities</h1>
        <p>Expert guidance for students planning their international education journey, and complete assistance for tourists exploring the world.</p>
        <div className="hero-ctas">
          <Link to="/contact" className="btn btn-primary">Book Free Counselling <span className="arrow">→</span></Link>
          <Link to="/destinations" className="btn btn-outline">Explore Destinations</Link>
        </div>
        <div className="hero-trust">
          <span>Personalized Guidance</span>
          <span>Global Destinations</span>
          <span>Student & Visa Support</span>
        </div>
      </div>
    </section>
  ); 
}
