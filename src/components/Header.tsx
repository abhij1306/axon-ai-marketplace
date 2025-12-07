import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, Search, LayoutGrid, Zap, GraduationCap, Briefcase, ExternalLink, ChevronRight, Link as LinkIcon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { toolsData, solutionsData } from '../data/tools';
import { learningResources } from '../data/learningResources';
import '../styles/Header.scss';

// Unified Search Result Type
interface SearchResultItem {
    id: string;
    name: string;
    category: string;
    type: 'Tool' | 'Solution' | 'Learning' | 'Page';
    url: string;
    description?: string;
    icon?: React.ReactNode;
}

const Header: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();

    // Search State
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);
    const searchContainerRef = useRef<HTMLDivElement>(null);

    // Mobile Menu State
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Close search on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
                setIsSearchFocused(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    // Search Logic
    useEffect(() => {
        if (!searchQuery.trim()) {
            setSearchResults([]);
            return;
        }

        const query = searchQuery.toLowerCase();
        const results: SearchResultItem[] = [];

        // 1. Pages (Static)
        const pages = [
            { name: 'Marketplace', url: '/#marketplace', category: 'Page', type: 'Page' as const },
            { name: 'Solutions', url: '/#solutions', category: 'Page', type: 'Page' as const },
            { name: 'Consulting', url: '/#consulting', category: 'Page', type: 'Page' as const },
            { name: 'Learning Hub', url: '/learning', category: 'Page', type: 'Page' as const },
        ];
        pages.forEach(p => {
            if (p.name.toLowerCase().includes(query)) results.push({ ...p, id: `page-${p.name}` });
        });

        // 2. Tools
        toolsData.forEach(tool => {
            if (tool.name.toLowerCase().includes(query) || tool.category.toLowerCase().includes(query)) {
                results.push({
                    id: tool.id,
                    name: tool.name,
                    category: tool.category,
                    type: 'Tool',
                    url: tool.url || '',
                    description: tool.description
                });
            }
        });

        // 3. Solutions
        solutionsData.forEach(sol => {
            if (sol.name.toLowerCase().includes(query) || sol.category.toLowerCase().includes(query)) {
                results.push({
                    id: sol.id,
                    name: sol.name,
                    category: sol.category,
                    type: 'Solution',
                    url: sol.url || '',
                    description: sol.description
                });
            }
        });

        // 4. Learning Resources
        learningResources.forEach(res => {
            if (res.name.toLowerCase().includes(query) || res.category.toLowerCase().includes(query)) {
                results.push({
                    id: `lr-${res.name}`,
                    name: res.name,
                    category: res.category,
                    type: 'Learning',
                    url: res.url,
                    description: res.desc
                });
            }
        });

        setSearchResults(results.slice(0, 8)); // Limit to 8 results
    }, [searchQuery]);


    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false); // Close mobile menu if open

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    const headerOffset = 85;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            }, 300);
        } else {
            const element = document.getElementById(id);
            if (element) {
                const headerOffset = 85;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }
    };

    const handleResultClick = (result: SearchResultItem) => {
        setIsSearchFocused(false);
        setIsMobileMenuOpen(false); // Close mobile menu
        setSearchQuery(''); // Optional: Clear search on navigate

        if (result.url.startsWith('http')) {
            window.open(result.url, '_blank', 'noopener,noreferrer');
        } else if (result.url.startsWith('/#')) {
            const sectionId = result.url.replace('/#', '');
            scrollToSection(sectionId);
        } else {
            navigate(result.url);
        }
    };

    return (
        <header className="header">
            <div className="header-container">

                {/* LEFT: LOGO */}
                <div className="header-left">
                    <Link to="/" className="logo-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="logo-icon">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 22H7L12 12L17 22H22L12 2Z" fill="currentColor" className="logo-fill" />
                            </svg>
                        </div>
                        <span className="brand-text">Axon AI</span>
                    </Link>
                </div>

                {/* MOBILE MENU OVERLAY */}
                <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-menu-content">

                        {/* Mobile Search */}
                        <div className="mobile-search-container">
                            <div className="search-pill mobile">
                                <Search size={18} className="search-icon" />
                                <input
                                    type="text"
                                    placeholder="Search models, resources..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onFocus={() => setIsSearchFocused(true)}
                                />
                            </div>

                            {/* Mobile Search Results */}
                            {searchQuery && (
                                <div className="mobile-search-results">
                                    {searchResults.length > 0 ? (
                                        searchResults.map((result) => (
                                            <div
                                                key={result.id}
                                                className="search-result-item"
                                                onClick={() => handleResultClick(result)}
                                            >
                                                <div className="result-icon">
                                                    {result.type === 'Tool' && <LayoutGrid size={16} />}
                                                    {result.type === 'Solution' && <Zap size={16} />}
                                                    {result.type === 'Learning' && <GraduationCap size={16} />}
                                                    {result.type === 'Page' && <LinkIcon size={16} />}
                                                </div>
                                                <div className="result-info">
                                                    <span className="result-name">{result.name}</span>
                                                    <span className="result-meta">{result.category}</span>
                                                </div>
                                                <ChevronRight size={14} className="result-arrow" />
                                            </div>
                                        ))
                                    ) : (
                                        <div className="no-results">
                                            <span>No results found</span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <nav className="mobile-nav-items">
                            <button onClick={() => { setIsMobileMenuOpen(false); scrollToSection('marketplace'); }} className="mobile-nav-item">
                                <LayoutGrid size={20} />
                                <span>Models</span>
                            </button>
                            <button onClick={() => { setIsMobileMenuOpen(false); scrollToSection('solutions'); }} className="mobile-nav-item">
                                <Zap size={20} />
                                <span>Solutions</span>
                            </button>
                            <Link
                                to="/learning"
                                className={`mobile-nav-item ${location.pathname === '/learning' ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <GraduationCap size={20} />
                                <span>Learn</span>
                            </Link>
                            <button onClick={() => { setIsMobileMenuOpen(false); scrollToSection('consulting'); }} className="mobile-nav-item">
                                <Briefcase size={20} />
                                <span>Consulting</span>
                            </button>
                        </nav>

                        <div className="mobile-menu-footer">
                            <div className="mobile-auth-buttons">
                                <Link to="/login" className="btn-login mobile-btn" onClick={() => setIsMobileMenuOpen(false)}>Log In</Link>
                                <Link to="/signup" className="btn-signup mobile-btn" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
                            </div>
                            <button onClick={toggleTheme} className="mobile-theme-toggle">
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                            </button>
                        </div>

                    </div>
                </div>

                {/* CENTER: SEARCH BAR (Desktop) */}
                <div className="header-center" ref={searchContainerRef}>
                    <div className="search-pill">
                        <Search size={18} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search models, resources..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setIsSearchFocused(true)}
                        />
                    </div>

                    {/* SEARCH DROPDOWN */}
                    {isSearchFocused && searchQuery && (
                        <div className="search-dropdown fade-in-up">
                            {searchResults.length > 0 ? (
                                searchResults.map((result) => (
                                    <div
                                        key={result.id}
                                        className="search-result-item"
                                        onClick={() => handleResultClick(result)}
                                    >
                                        <div className="result-icon">
                                            {result.type === 'Tool' && <LayoutGrid size={16} />}
                                            {result.type === 'Solution' && <Zap size={16} />}
                                            {result.type === 'Learning' && <GraduationCap size={16} />}
                                            {result.type === 'Page' && <LinkIcon size={16} />}
                                        </div>
                                        <div className="result-info">
                                            <span className="result-name">{result.name}</span>
                                            <span className="result-meta">{result.category} • {result.type}</span>
                                        </div>
                                        <div className="result-action">
                                            {result.url.startsWith('http') ? <ExternalLink size={14} /> : <ChevronRight size={14} />}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="no-results">
                                    <span>No results found for "{searchQuery}"</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* RIGHT: NAVIGATION & ACTIONS */}
                <div className="header-right desktop-only">
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

                {/* MOBILE MENU TOGGLE */}
                <div className="header-right mobile-only">
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

            </div>
        </header>
    );
};

export default Header;
