import React from "react";
import leftImage from "../images/glass-image.avif";
import rightImage from "../images/right-glass.avif";
import "./TwoImageSection.css";
const TwoImageSection = () => {
  return (
    <>
      <section className="two-image-section">
        <div className="image-container left-image">
          <img src={leftImage} alt="Left" />
        </div>
        <div className="image-container right-image">
          <img src={rightImage} alt="Right" />
        </div>
      </section>
    </>
  );
};

export default TwoImageSection;
