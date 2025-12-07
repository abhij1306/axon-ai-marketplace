import React from 'react';
import { ArrowRight, CheckCircle, BarChart, Bot } from 'lucide-react';
import '../styles/Consulting.scss';

const Consulting: React.FC = () => {
  return (
    <section id="consulting" className="consulting-section">
      <div className="consulting-container">

        {/* Text Content */}
        <div className="consulting-content fade-in-left">
          <div className="badge">
            <Bot size={14} />
            <span>Enterprise Automation</span>
          </div>
          <h2>Achieve Complete <br /><span className="gradient-text">AI Automation</span></h2>
          <p>
            Unlock unparalleled productivity and significant cost savings by fully automating
            your business processes. Our expert consultants build bespoke AI agents tailored to your data.
          </p>

          <ul className="benefit-list">
            <li><CheckCircle size={18} className="icon-check" /> <span>Custom LLM Implementation</span></li>
            <li><CheckCircle size={18} className="icon-check" /> <span>Workflow Automation Audits</span></li>
            <li><CheckCircle size={18} className="icon-check" /> <span>Employee Training & Onboarding</span></li>
          </ul>

          <button className="cta-button">
            Book a Free Consultation <ArrowRight size={18} />
          </button>
        </div>

        {/* Visual / Card Graphic */}
        <div className="consulting-visual fade-in-right">
          <div className="glass-card stat-card">
            <div className="stat-icon"><BarChart size={24} /></div>
            <div className="stat-info">
              <h4>Efficiency Boost</h4>
              <span className="stat-value">+300%</span>
            </div>
          </div>
          {/* Abstract Graphic Element */}
          <div className="gradient-orb"></div>
        </div>

      </div>
    </section>
  );
};

export default Consulting;
