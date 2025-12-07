import React, { useState, useMemo } from 'react';
import { ExternalLink, BookOpen, Video, GraduationCap, Bot, Zap, Code, BrainCircuit, Sparkles, LayoutGrid, Users, Github, Star } from 'lucide-react';
import '../styles/Learning.scss';
import '../styles/ToolCard.scss';

// Consolidated Resource Type
interface ResourceItem {
    name: string;
    url: string;
    desc: string;
    category: string; // Used for filtering (LLM, GenAI, etc.)
    type: 'video' | 'platform' | 'website' | 'github'; // Used for Sectioning
    logoText?: string;
    subscribers?: string; // Used for Subs or Stars
    logoUrl?: string; // Logic for real images
}

const Learning: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    // Raw Data with Real Logo URLs
    const allResources: ResourceItem[] = useMemo(() => [
        // --- YOUTUBE CHANNELS ---
        // LLMs
        { name: 'Andrej Karpathy', url: 'https://www.youtube.com/@AndrejKarpathy', desc: 'Deep dives into LLMs, tokenization, and neural nets.', category: 'Large Language Models', type: 'video', logoText: 'AK', subscribers: '2.5M', logoUrl: 'https://unavatar.io/youtube/AndrejKarpathy' },
        { name: 'AI Explained', url: 'https://www.youtube.com/@ai-explained-', desc: 'Rapid, in-depth analysis of latest LLM research.', category: 'Large Language Models', type: 'video', logoText: 'AI', subscribers: '500K', logoUrl: 'https://unavatar.io/youtube/ai-explained-' },
        { name: 'Cohere', url: 'https://www.youtube.com/@CohereAI', desc: 'Enterprise LLM tutorials and RAG implementations.', category: 'Large Language Models', type: 'video', logoText: 'CO', subscribers: '50K', logoUrl: 'https://unavatar.io/youtube/CohereAI' },
        { name: 'LangChain', url: 'https://www.youtube.com/@LangChain', desc: 'Building applications with LLMs and agents.', category: 'Large Language Models', type: 'video', logoText: 'LC', subscribers: '100K', logoUrl: 'https://unavatar.io/youtube/LangChain' },

        // GenAI
        { name: 'Two Minute Papers', url: 'https://www.youtube.com/user/keeroyz', desc: 'Visual summaries of SOTA generative models.', category: 'Generative AI', type: 'video', logoText: '2M', subscribers: '1.4M', logoUrl: 'https://unavatar.io/youtube/keeroyz' },
        { name: 'Sentdex', url: 'https://www.youtube.com/user/sentdex', desc: 'Python implementations of GenAI and neural nets.', category: 'Generative AI', type: 'video', logoText: 'SX', subscribers: '1.2M', logoUrl: 'https://unavatar.io/youtube/sentdex' },
        { name: 'IBM Technology', url: 'https://www.youtube.com/@IBMTechnology', desc: 'Conceptual explanations of Foundation Models.', category: 'Generative AI', type: 'video', logoText: 'IBM', subscribers: '800K', logoUrl: 'https://unavatar.io/youtube/IBMTechnology' },

        // Agents
        { name: 'David Shapiro', url: 'https://www.youtube.com/@DavidShapiroAutomator', desc: 'Autonomous agents, AGI alignment, and system design.', category: 'Agentic AI', type: 'video', logoText: 'DS', subscribers: '150K', logoUrl: 'https://unavatar.io/youtube/DavidShapiroAutomator' },
        { name: 'Matthew Berman', url: 'https://www.youtube.com/@matthew_berman', desc: 'Tutorials on AutoGPT and open source local models.', category: 'Agentic AI', type: 'video', logoText: 'MB', subscribers: '200K', logoUrl: 'https://unavatar.io/youtube/matthew_berman' },
        { name: 'Wes Roth', url: 'https://www.youtube.com/@WesRoth', desc: 'Daily news on the fast-moving world of AI agents.', category: 'Agentic AI', type: 'video', logoText: 'WR', subscribers: '100K', logoUrl: 'https://unavatar.io/youtube/WesRoth' },

        // Automation
        { name: 'Tech With Tim', url: 'https://www.youtube.com/@TechWithTim', desc: 'Python automation and software engineering.', category: 'Automation', type: 'video', logoText: 'TT', subscribers: '3M', logoUrl: 'https://unavatar.io/youtube/TechWithTim' },
        { name: 'NetworkChuck', url: 'https://www.youtube.com/@NetworkChuck', desc: 'IT automation, cloud, and hacking tutorials.', category: 'Automation', type: 'video', logoText: 'NC', subscribers: '4M', logoUrl: 'https://unavatar.io/youtube/NetworkChuck' },
        { name: 'Automate Boring Stuff', url: 'https://www.youtube.com/playlist?list=PL0-84-yl1fUnRuXGFe_F7qSH1LEnn9LkW', desc: 'Classic Python automation course playlist.', category: 'Automation', type: 'video', logoText: 'ABS', subscribers: '5M', logoUrl: 'https://unavatar.io/youtube/AlSweigart' },

        // DSA
        { name: 'NeetCode', url: 'https://www.youtube.com/@NeetCode', desc: 'LeetCode solutions and DSA patterns.', category: 'DSA', type: 'video', logoText: 'NC', subscribers: '800K', logoUrl: 'https://unavatar.io/youtube/NeetCode' },
        { name: 'Abdul Bari', url: 'https://www.youtube.com/@abdul_bari', desc: 'Legendary algorithms and CS concepts.', category: 'DSA', type: 'video', logoText: 'AB', subscribers: '1M', logoUrl: 'https://unavatar.io/youtube/abdul_bari' },
        { name: 'freeCodeCamp', url: 'https://www.youtube.com/@freecodecamp', desc: 'Full courses on Python and System Design.', category: 'DSA', type: 'video', logoText: 'FCC', subscribers: '9M', logoUrl: 'https://unavatar.io/youtube/freecodecamp' },

        // --- GITHUB REPOS ---
        // LLMs
        { name: 'Hugging Face Transformers', url: 'https://github.com/huggingface/transformers', desc: 'State-of-the-art Machine Learning for Pytorch and TensorFlow.', category: 'Large Language Models', type: 'github', logoText: 'HF', subscribers: '120k Stars', logoUrl: 'https://unavatar.io/github/huggingface' },
        { name: 'LlamaIndex', url: 'https://github.com/run-llama/llama_index', desc: 'Data framework for LLM applications to ingest context.', category: 'Large Language Models', type: 'github', logoText: 'LI', subscribers: '30k Stars', logoUrl: 'https://unavatar.io/github/run-llama' },
        { name: 'Ollama', url: 'https://github.com/ollama/ollama', desc: 'Get up and running with Llama 2, Mistral, and other large language models.', category: 'Large Language Models', type: 'github', logoText: 'OL', subscribers: '50k Stars', logoUrl: 'https://unavatar.io/github/ollama' },

        // GenAI
        { name: 'Stable Diffusion WebUI', url: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui', desc: 'Stable Diffusion web UI.', category: 'Generative AI', type: 'github', logoText: 'SD', subscribers: '130k Stars', logoUrl: 'https://unavatar.io/github/AUTOMATIC1111' },
        { name: 'ComfyUI', url: 'https://github.com/comfyanonymous/ComfyUI', desc: 'A node/graph based interface for Stable Diffusion.', category: 'Generative AI', type: 'github', logoText: 'CF', subscribers: '40k Stars', logoUrl: 'https://unavatar.io/github/comfyanonymous' },

        // Agents
        { name: 'AutoGPT', url: 'https://github.com/Significant-Gravitas/AutoGPT', desc: 'An experimental open-source attempt to make GPT-4 fully autonomous.', category: 'Agentic AI', type: 'github', logoText: 'AG', subscribers: '160k Stars', logoUrl: 'https://unavatar.io/github/Significant-Gravitas' },
        { name: 'LangGraph', url: 'https://github.com/langchain-ai/langgraph', desc: 'Building language agents as graphs.', category: 'Agentic AI', type: 'github', logoText: 'LG', subscribers: '10k Stars', logoUrl: 'https://unavatar.io/github/langchain-ai' },

        // Automation
        { name: 'Playwright', url: 'https://github.com/microsoft/playwright', desc: 'Framework for Web Testing and Automation.', category: 'Automation', type: 'github', logoText: 'PW', subscribers: '60k Stars', logoUrl: 'https://unavatar.io/github/microsoft' },
        { name: 'Selenium', url: 'https://github.com/SeleniumHQ/selenium', desc: 'A browser automation framework and ecosystem.', category: 'Automation', type: 'github', logoText: 'SE', subscribers: '30k Stars', logoUrl: 'https://unavatar.io/github/SeleniumHQ' },

        // DSA
        { name: 'The Algorithms - Python', url: 'https://github.com/TheAlgorithms/Python', desc: 'All Algorithms implemented in Python.', category: 'DSA', type: 'github', logoText: 'TA', subscribers: '180k Stars', logoUrl: 'https://unavatar.io/github/TheAlgorithms' },
        { name: 'JavaScript Algorithms', url: 'https://github.com/trekhleb/javascript-algorithms', desc: 'Algorithms and data structures implemented in JavaScript.', category: 'DSA', type: 'github', logoText: 'JS', subscribers: '170k Stars', logoUrl: 'https://unavatar.io/github/trekhleb' },


        // --- PLATFORMS ---
        { name: 'Coursera', url: 'https://www.coursera.org/', desc: 'Deep Learning Specialization by Andrew Ng.', category: 'Interactive', type: 'platform', logoText: 'C', subscribers: '100M+', logoUrl: 'https://logo.clearbit.com/coursera.org' },
        { name: 'Fast.ai', url: 'https://www.fast.ai/', desc: 'Practical Deep Learning for Coders.', category: 'Interactive', type: 'platform', logoText: 'F', subscribers: '200K+', logoUrl: 'https://logo.clearbit.com/fast.ai' },
        { name: 'Kaggle', url: 'https://www.kaggle.com/', desc: 'Datasets, notebooks, and competitions.', category: 'Interactive', type: 'platform', logoText: 'K', subscribers: '10M+', logoUrl: 'https://logo.clearbit.com/kaggle.com' },
        { name: 'Hugging Face', url: 'https://huggingface.co/learn', desc: 'NLP course and transformer docs.', category: 'Interactive', type: 'platform', logoText: 'HF', subscribers: '2M+', logoUrl: 'https://logo.clearbit.com/huggingface.co' },

        // --- WEBSITES ---
        { name: 'Papers with Code', url: 'https://paperswithcode.com/', desc: 'Trends in SOTA research with code.', category: 'Research', type: 'website', logoText: 'PC', subscribers: '1M+', logoUrl: 'https://logo.clearbit.com/paperswithcode.com' },
        { name: 'arXiv.org', url: 'https://arxiv.org/list/cs.AI/recent', desc: 'Primary source for AI papers.', category: 'Research', type: 'website', logoText: 'AX', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/arxiv.org' },
        { name: 'OpenAI Research', url: 'https://openai.com/research', desc: 'Cutting-edge research from OpenAI.', category: 'Research', type: 'website', logoText: 'OI', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/openai.com' },
        { name: 'Distill.pub', url: 'https://distill.pub/', desc: 'Clear, dynamic ML explanations.', category: 'Research', type: 'website', logoText: 'DP', subscribers: 'N/A', logoUrl: 'https://logo.clearbit.com/distill.pub' }
    ], []);

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
