import React from "react";
import "./images.css";

function Images() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="line-one">Building Locally Made Solutions</span>
          <span className="line-two">For Africa By Africans</span>
        </h1>
        <div className="hero-divider"></div>
        <p className="hero-tagline">Empowering the continent through innovation.</p>
      </div>
    </section>
  );
}

export default Images;
