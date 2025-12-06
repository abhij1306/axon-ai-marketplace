// src/components/Header.tsx
import React from 'react';
import '../styles/Header.scss'; // Will create this file next

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/">Axon AI</a>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#marketplace">Marketplace</a></li>
            <li><a href="#consulting">Consulting</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
