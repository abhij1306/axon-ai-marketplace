// src/components/Consulting.tsx
import React from 'react';
import '../styles/Consulting.scss';

const Consulting: React.FC = () => {
  return (
    <section id="consulting" className="consulting-section">
      <div className="consulting-content">
        <h2>Achieve Complete AI Automation</h2>
        <p>Unlock unparalleled productivity and significant cost savings by fully automating your business processes with our expert AI consulting services.</p>
        <button className="cta-button neumorphic-flat">Book a Free Consultation</button>
      </div>
    </section>
  );
};

export default Consulting;
