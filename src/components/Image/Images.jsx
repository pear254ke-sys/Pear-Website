import React from "react";
import "./images.css";
import {getCurrentTextData} from "../../Data_File/dataAbstract";
function Images() {
    const imageDataHeading=getCurrentTextData("imageData","imageDataHeading")
    const imageDataGoal=getCurrentTextData("imageData","imageDataGoal")
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="line-one">{imageDataHeading}</span>
          <span className="line-two"></span>
        </h1>
        <div className="hero-divider"></div>
        <p className="hero-tagline">{imageDataGoal}</p>
      </div>
    </section>
  );
}

export default Images;
