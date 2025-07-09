import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-text">
        <h3>meet our</h3>
        <h2>EXPERT TEAM</h2>
        <p>
          Fiery curl color wavy frohawk ombre bantuknots. Wavy ultrashort natural fingerwave twist fingerwave, fauxhawk ultrashort halobraid fuchsia.
        </p>
        <p>
          Washandgo salon fauxhawk bouncy fuchsia afropuff fiery fingerwave hair. Locks microbraids curl ultrashort hair, fingerwave pompadour hair braids braids halobraid dye dredlocks.
        </p>
      </div>
      <div className="team-image">
        <img
          src="https://static.wixstatic.com/media/dde114_a4c5fea14aea486d8aa9ea4df0c5a96c~mv2.jpg/v1/fill/w_874,h_1312,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pexels-olia-danilevich-6591740-2_edited_.jpg"
          alt="Expert Team"
        />
      </div>
    </section>
  );
};

export default TeamSection;
