import React from "react";
import "./RightSection.css";
import anushkaImage from "../images/anushka-2.jpg";

const RightSection = () => {
  return (
    <div className="right-section">
      <img src={anushkaImage} alt="Studio" className="full-image" />
    </div>
  );
};

export default RightSection;
