import React from 'react';
import './LeftSection.css';
import Button from '../reusable-components/Button/Button';

const LeftSection = () => {
  return (
    <div className="left-section">
      <div className="welcome-text">
        <h2 className="welcome-line">Welcome to</h2>
        <h1 className="studio-line">THE STUDIO</h1>
        <p className="description">
          Fiery curl color wavy frohawk ombre bantuknots. Wavy ultrashort natural fingerwave twist fingerwave, fauxhawk ultrashort halobraid fuchsia.
        </p>
        <p className="extra-description">
          Washandgo salon fauxhawk bouncy fuchsia afropuff fiery fingerwave hair. Locks microbraids curl ultrashort hair, fingerwave pompadour hair braids braids halobraid dye dredlocks.
        </p>
        
       <Button label="VIEW SERVICES" />
      </div>
    </div>
  );
};

export default LeftSection;
