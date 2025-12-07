import React from 'react';
import Hero from './Hero';
import Marketplace from './Marketplace';
import NewsSection from './NewsSection';
import Consulting from './Consulting';
import '../styles/Sections.scss';

const Home: React.FC = () => {
    const [selectedToolCategory, setSelectedToolCategory] = React.useState<string>('All');
    const [selectedSolutionCategory, setSelectedSolutionCategory] = React.useState<string>('All');
    const [searchTerm, setSearchTerm] = React.useState<string>('');

    return (
        <>
            <Hero
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            {/* News Section */}
            <NewsSection />

            <Marketplace
                selectedToolCategory={selectedToolCategory}
                setSelectedToolCategory={setSelectedToolCategory}
                selectedSolutionCategory={selectedSolutionCategory}
                setSelectedSolutionCategory={setSelectedSolutionCategory}
                searchTerm={searchTerm}
            />
            <Consulting />
            {/* About Section */}
            <section id="about" className="section-premium">
                <div className="section-content-centered">
                    <div className="badge-pill">About Us</div>
                    <h2>Revolutionizing Business with AI</h2>
                    <p className="subtitle">
                        We are a team of AI researchers, engineers, and strategists dedicated to making
                        enterprise-grade artificial intelligence accessible, secure, and impactful.
                    </p>

                    <div className="stats-grid">
                        <div className="stat-box">
                            <span className="number">500+</span>
                            <span className="label">Enterprise Clients</span>
                        </div>
                        <div className="stat-box">
                            <span className="number">98%</span>
                            <span className="label">CSAT Score</span>
                        </div>
                        <div className="stat-box">
                            <span className="number">24/7</span>
                            <span className="label">Expert Support</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section-premium dark-bg">
                <div className="section-content-split">
                    <div className="contact-text">
                        <h2>Ready to Transform?</h2>
                        <p>
                            Get in touch with our solution architects to discuss your specific needs.
                            We help you navigate the AI landscape with confidence.
                        </p>
                        <div className="contact-details">
                            <p><strong>Email:</strong> info@axonai.com</p>
                            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                            <p><strong>HQ:</strong> San Francisco, CA</p>
                        </div>
                    </div>
                    <form className="contact-form glass-panel">
                        <h3>Send us a message</h3>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Work Email" />
                        <textarea placeholder="How can we help?" rows={4}></textarea>
                        <button type="submit" className="btn btn-primary full-width">Send Message</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Home;
