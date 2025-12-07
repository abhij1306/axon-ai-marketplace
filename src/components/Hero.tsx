import React from 'react';
import { ArrowRight, Cpu, Zap, Sparkles, Briefcase } from 'lucide-react';
import ThreeBackground from './ThreeBackground';
import '../styles/Hero.scss';

interface HeroProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="hero">
      <ThreeBackground />

      <div className="hero-content-wrapper">

        {/* Top: Wide Search Bar Removed (Moved to Header) */}
        <div className="hero-search-top fade-in-down" style={{ display: 'none' }}>
          {/* Legacy search removed to avoid duplication */}
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
              <a href="#solutions" className="btn btn-primary btn-lg">
                Explore Solutions <ArrowRight size={20} style={{ marginLeft: '10px' }} />
              </a>
              <a href="#marketplace" className="btn btn-secondary btn-lg">
                View Tools
              </a>
            </div>
          </div>

          {/* Right Column: Premium Navigation Options */}
          <div className="hero-right fade-in-right delay-200">

            <a href="#marketplace" className="premium-card">
              <div className="card-icon"><Cpu size={28} /></div>
              <div className="card-text">
                <h3>AI Tools Registry</h3>
                <p>100+ Top-tier applications</p>
              </div>
              <div className="card-arrow"><ArrowRight size={16} /></div>
            </a>

            <a href="#solutions" className="premium-card">
              <div className="card-icon"><Zap size={28} /></div>
              <div className="card-text">
                <h3>Enterprise Solutions</h3>
                <p>Custom HR & Finance setups</p>
              </div>
              <div className="card-arrow"><ArrowRight size={16} /></div>
            </a>

            <a href="#consulting" className="premium-card">
              <div className="card-icon"><Briefcase size={28} /></div>
              <div className="card-text">
                <h3>AI Consulting</h3>
                <p>Expert Automation Strategy</p>
              </div>
              <div className="card-arrow"><ArrowRight size={16} /></div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
