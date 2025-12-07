import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, Search, LayoutGrid, Zap, GraduationCap, Briefcase } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Header.scss';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* LEFT: LOGO */}
        <div className="header-left">
          <Link to="/" className="logo-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="logo-icon">
              {/* Minimalist 'A' Shape - Resized to match text */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 22H7L12 12L17 22H22L12 2Z" fill="currentColor" className="logo-fill" />
              </svg>
            </div>
            <span className="brand-text">Axon AI</span>
          </Link>
        </div>

        {/* CENTER: SEARCH BAR */}
        <div className={`header-center ${isSearchFocused ? 'focused' : ''}`}>
          <div className="search-pill">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search models, datasets, consulting..."
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>
        </div>

        {/* RIGHT: NAVIGATION & ACTIONS */}
        <div className="header-right">
          <nav className="nav-items">
            <button onClick={() => scrollToSection('marketplace')} className="nav-item">
              <LayoutGrid size={18} />
              <span>Models</span>
            </button>
            <button onClick={() => scrollToSection('solutions')} className="nav-item">
              <Zap size={18} />
              <span>Solutions</span>
            </button>
            <Link to="/learning" className={`nav-item ${location.pathname === '/learning' ? 'active' : ''}`}>
              <GraduationCap size={18} />
              <span>Learn</span>
            </Link>
            <button onClick={() => scrollToSection('consulting')} className="nav-item">
              <Briefcase size={18} />
              <span>Consulting</span>
            </button>
          </nav>

          <div className="header-actions">
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="auth-buttons">
              <Link to="/login" className="btn-login">Log In</Link>
              <Link to="/signup" className="btn-signup">Sign Up</Link>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
