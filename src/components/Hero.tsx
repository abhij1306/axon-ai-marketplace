import React from 'react';
import { ArrowRight, Cpu, Zap, Sparkles, Briefcase } from 'lucide-react';
import ThreeBackground from './ThreeBackground';
import '../styles/Hero.scss';

import { useNavigate, useLocation } from 'react-router-dom';

interface HeroProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Hero: React.FC<HeroProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /* 
   * Robust Scroll Helper
   * Handles both cross-page navigation (from /learning etc.) and in-page scrolling 
   */
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();

    // Function to perform the actual DOM scroll
    const doScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        // Offset for the fixed header (approx 85px)
        const headerOffset = 85;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      // Give React time to mount the Home component
      setTimeout(doScroll, 300);
    } else {
      doScroll();
    }
  };

  return (
    <section className="hero">
      <ThreeBackground />

      <div className="hero-content-wrapper">

        {/* Top: Wide Search Bar Removed (Moved to Header) */}
        <div className="hero-search-top fade-in-down" style={{ display: 'none' }}>
        </div>

        <div className="hero-split-layout">
          {/* Left Column: Brand & CTA */}
          <div className="hero-left">
            <div className="badge fade-in-up">
              <Sparkles size={14} className="icon-pulse" />
              <span>Now with Enterprise Agents</span>
            </div>
            <h1 className="fade-in-up delay-100">
              Build the Future <br />
              <span className="gradient-text">with Axon AI</span>
            </h1>
            <p className="tagline fade-in-up delay-200">
              The premier marketplace for cutting-edge AI tools and enterprise-grade automation solutions. Accelerate your business today.
            </p>
            <div className="cta-group fade-in-up delay-300">
              <button onClick={(e) => scrollToSection(e, 'solutions')} className="btn btn-primary btn-lg">
                Explore Solutions <ArrowRight size={20} style={{ marginLeft: '10px' }} />
              </button>
              <button onClick={(e) => scrollToSection(e, 'marketplace')} className="btn btn-secondary btn-lg">
                View Tools
              </button>
            </div>
          </div>

          {/* Right Column: Premium Navigation Options */}
          <div className="hero-right fade-in-right delay-200">

            <button onClick={(e) => scrollToSection(e, 'marketplace')} className="premium-card">
              <div className="card-icon"><Cpu size={28} /></div>
              <div className="card-text">
                <h3>AI Tools Registry</h3>
                <p>100+ Top-tier applications</p>
              </div>
              <div className="card-arrow"><ArrowRight size={16} /></div>
            </button>

            <button onClick={(e) => scrollToSection(e, 'solutions')} className="premium-card">
              <div className="card-icon"><Zap size={28} /></div>
              <div className="card-text">
                <h3>Enterprise Solutions</h3>
                <p>Custom HR & Finance setups</p>
              </div>
              <div className="card-arrow"><ArrowRight size={16} /></div>
            </button>

            <button onClick={(e) => scrollToSection(e, 'consulting')} className="premium-card">
              <div className="card-icon"><Briefcase size={28} /></div>
              <div className="card-text">
                <h3>AI Consulting</h3>
                <p>Expert Automation Strategy</p>
              </div>
              <div className="card-arrow"><ArrowRight size={16} /></div>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
