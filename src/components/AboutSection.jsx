import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-image">
        <img
          src="https://static.wixstatic.com/media/dde114_af7d291d8d644130a10e6360a4c09915~mv2.jpg/v1/crop/x_381,y_0,w_738,h_1000/fill/w_738,h_1000,al_c,q_85,enc_avif,quality_auto/lindsay-cash-Md_DhaFsnCQ-unsplash-2_edited.jpg"
          alt="Get To Know Us"
        />
      </div>
      <div className="about-text">
        <h3>GET TO KNOW US</h3>
        <h2>ABOUT our BUSINESS</h2>
        <p>
          Fiery curl color wavy frohawk ombre bantuknots. Wavy ultrashort
          natural fingerwave twist fingerwave, fauxhawk ultrashort halobraid
          fuchsia.
        </p>
        <p>
          Washandgo salon fauxhawk bouncy fuchsia afropuff fiery fingerwave
          hair. Locks microbraids curl ultrashort hair, fingerwave pompadour
          hair braids braids halobraid dye dredlocks.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
