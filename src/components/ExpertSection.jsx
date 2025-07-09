import React from 'react';
import './ExpertSection.css';
import Button from '../reusable-components/Button/Button';

const ExpertSection = () => {
  return (
    <section className="expert-section">
      <p className="expert-subtitle">LEADING EXPERTS IN</p>
      <div className="expert-lines">
        <h2>BALAYAGE hair extensions HAIR</h2>
        <h2>CUT styling COLOR lash</h2>
        <h2>extensions FACIALS makeup</h2>
      </div>
     <p className="expert-description">
  Fiery curl color wavy frohawk ombre bantuknots. Wavy<br />
  ultrashort natural fingerwave twist fingerwave, fauxhawk<br />
  ultrashort halobraid fuchsia.
</p>

        <Button label="BOOK NOW" />
    </section>
  );
};

export default ExpertSection;
