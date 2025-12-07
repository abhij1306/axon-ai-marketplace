import React, { useState, useMemo } from 'react';
import { ExternalLink, BookOpen, Video, GraduationCap, Bot, Zap, Code, BrainCircuit, Sparkles, LayoutGrid, Users, Github, Star } from 'lucide-react';
import '../styles/Learning.scss';
import '../styles/ToolCard.scss';

import { learningResources, ResourceItem } from '../data/learningResources';

const Learning: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    // Use imported data
    const allResources: ResourceItem[] = useMemo(() => learningResources, []);

    // Filter Logic for YouTube AND GitHub
    const youtubeItems = allResources.filter(r => r.type === 'video');
    const githubItems = allResources.filter(r => r.type === 'github');

    const filteredYoutubeItems = useMemo(() => {
        if (activeCategory === 'All') return youtubeItems;
        return youtubeItems.filter(r => r.category === activeCategory);
    }, [activeCategory, youtubeItems]);

    const filteredGithubItems = useMemo(() => {
        if (activeCategory === 'All') return githubItems;
        return githubItems.filter(r => r.category === activeCategory);
    }, [activeCategory, githubItems]);

    const platformItems = allResources.filter(r => r.type === 'platform');
    const websiteItems = allResources.filter(r => r.type === 'website');

    // Categories List (Pills)
    const categories = [
        { name: 'All', icon: <LayoutGrid size={16} /> },
        { name: 'Large Language Models', icon: <BrainCircuit size={16} /> },
        { name: 'Generative AI', icon: <Sparkles size={16} /> },
        { name: 'Agentic AI', icon: <Bot size={16} /> },
        { name: 'Automation', icon: <Zap size={16} /> },
        { name: 'DSA', icon: <Code size={16} /> },
    ];

    // Helper to render a card
    const renderCard = (item: ResourceItem, idx: number) => {
        // Icon logic: if type is github, use Star, else User
        const MetricIcon = item.type === 'github' ? Star : Users;
        const metricColor = item.type === 'github' ? '#FFB800' : 'var(--text-muted)';
        const metricFill = item.type === 'github' ? '#FFB800' : 'none';

        return (
            <div key={idx} className="tool-card-wrapper">
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="tool-card g2-style">
                    <div className="card-header">
                        <div className="logo-container">
                            {item.logoUrl ? (
                                <img
                                    src={item.logoUrl}
                                    alt={item.name}
                                    className="company-logo"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                        (e.target as HTMLImageElement).nextElementSibling?.removeAttribute('style');
                                    }}
                                />
                            ) : null}
                            <div
                                className="logo-placeholder"
                                style={item.logoUrl ? { display: 'none' } : {}}
                            >
                                {item.logoText}
                            </div>
                        </div>
                        <div className="title-area">
                            <h3>{item.name}</h3>
                            {item.subscribers && item.subscribers !== 'N/A' && (
                                <div className="rating-row" style={{ marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                                    <MetricIcon size={14} fill={metricFill} stroke={metricColor} />
                                    <span>{item.subscribers}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="tool-info">
                        <div className="tool-category">
                            {item.category.toUpperCase()}
                        </div>
                        <p className="tool-description">{item.desc}</p>

                        <div className="card-footer">
                            <button className="btn btn-secondary visit-btn">
                                Visit Website <ExternalLink size={14} />
                            </button>
                        </div>
                    </div>
                </a>
            </div>
        );
    };

    return (
        <div className="learning-page">
            <div className="learning-hero">
                <div className="hero-content">
                    <span className="badge"><GraduationCap size={16} /> Knowledge Hub</span>
                    <h1>Master Artificial Intelligence</h1>
                    <p>Curated resources to take you from beginner to expert. Explore the best free content available on the web.</p>
                </div>
            </div>

            <div className="content-container">

                {/* GLOBAL FILTERS: Apply to YouTube and GitHub sections */}
                <div className="category-container">
                    <div className="category-list">
                        {categories.map((cat) => (
                            <button
                                key={cat.name}
                                className={`category-item ${activeCategory === cat.name ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat.name)}
                            >
                                <div className="icon">{cat.icon}</div>
                                <span>{cat.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* SECTION 1: Top YouTube Channels */}
                <section className="resource-section">
                    <h2><Video className="section-icon text-red" /> Top YouTube Channels</h2>
                    <div className="grid-cards">
                        {filteredYoutubeItems.map(renderCard)}
                    </div>
                    {filteredYoutubeItems.length === 0 && (
                        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '2rem' }}>
                            No channels found for this category.
                        </p>
                    )}
                </section>

                {/* Separator */}
                <hr className="section-divider" style={{ borderColor: 'var(--border-color)', margin: '4rem 0', opacity: 0.3 }} />

                {/* SECTION 2: Top GitHub Repos */}
                <section className="resource-section">
                    <h2><Github className="section-icon text-purple" /> Top GitHub Repositories</h2>
                    <div className="grid-cards">
                        {filteredGithubItems.map(renderCard)}
                    </div>
                    {filteredGithubItems.length === 0 && (
                        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '2rem' }}>
                            No repositories found for this category.
                        </p>
                    )}
                </section>

                {/* Separator */}
                <hr className="section-divider" style={{ borderColor: 'var(--border-color)', margin: '4rem 0', opacity: 0.3 }} />

                {/* SECTION 3: Interactive Platforms */}
                <section className="resource-section">
                    <h2><GraduationCap className="section-icon text-blue" /> Interactive Platforms</h2>
                    <div className="grid-cards">
                        {platformItems.map(renderCard)}
                    </div>
                </section>

                {/* Separator */}
                <hr className="section-divider" style={{ borderColor: 'var(--border-color)', margin: '4rem 0', opacity: 0.3 }} />

                {/* SECTION 4: Essential Research */}
                <section className="resource-section">
                    <h2><BookOpen className="section-icon text-purple" /> Essential Research</h2>
                    <div className="grid-cards">
                        {websiteItems.map(renderCard)}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Learning;
