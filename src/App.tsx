import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Marketplace from './components/Marketplace';
import Consulting from './components/Consulting'; // Import Consulting component
import './styles/App.scss'; // General App styling

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Marketplace />
        <Consulting />
        {/* Placeholder for About section */}
        <section id="about" className="section-placeholder">
          <div className="section-content">
            <h2>About Axon AI</h2>
            <p>We are dedicated to revolutionizing businesses with cutting-edge AI solutions and strategic automation consulting.</p>
          </div>
        </section>
        {/* Placeholder for Contact section */}
        <section id="contact" className="section-placeholder">
          <div className="section-content">
            <h2>Contact Us</h2>
            <p>Have questions or ready to start your AI journey? Reach out to us!</p>
            <p>Email: info@axonai.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
