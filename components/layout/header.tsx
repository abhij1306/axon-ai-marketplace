'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Sun, Moon, Search, LayoutGrid, Zap, GraduationCap, Briefcase, Menu, X, User, LogOut, Link as LinkIcon, ExternalLink, ChevronRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useAuth } from '@/lib/contexts/auth-context';
import { toolsData, solutionsData } from '@/lib/data/tools';
import { learningResources } from '@/lib/data/learning';

interface SearchResultItem {
    id: string;
    name: string;
    category: string;
    type: 'Tool' | 'Solution' | 'Learning' | 'Page';
    url: string;
    description?: string;
}

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const { user, logout, isAuthenticated } = useAuth();
    const [mounted, setMounted] = useState(false);

    // Search State
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);
    const searchContainerRef = useRef<HTMLDivElement>(null);

    // Mobile Menu State
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // User Dropdown State
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const userDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Close search on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
                setIsSearchFocused(false);
            }
            if (userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) {
                setIsUserDropdownOpen(false);
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

        // Pages
        const pages = [
            { name: 'Marketplace', url: '/#marketplace', category: 'Page', type: 'Page' as const },
            { name: 'Solutions', url: '/#solutions', category: 'Page', type: 'Page' as const },
            { name: 'Consulting', url: '/#consulting', category: 'Page', type: 'Page' as const },
            { name: 'Learning Hub', url: '/learning', category: 'Page', type: 'Page' as const },
        ];
        pages.forEach(p => {
            if (p.name.toLowerCase().includes(query)) results.push({ ...p, id: `page-${p.name}` });
        });

        // Tools
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

        // Solutions
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

        // Learning Resources
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

        setSearchResults(results.slice(0, 8));
    }, [searchQuery]);

    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 85;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    const handleResultClick = (result: SearchResultItem) => {
        setIsSearchFocused(false);
        setIsMobileMenuOpen(false);
        setSearchQuery('');

        if (result.url.startsWith('http')) {
            window.open(result.url, '_blank', 'noopener,noreferrer');
        } else if (result.url.startsWith('/#')) {
            const sectionId = result.url.replace('/#', '');
            scrollToSection(sectionId);
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
            <div className="container mx-auto">
                <div className="flex h-16 items-center justify-between">

                    {/* Logo - Bold 3D Design */}
                    <Link href="/" className="flex items-center gap-3 font-bold text-xl group">
                        <div className="relative">
                            {/* 3D Logo with gradient and shadow */}
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300">
                                <defs>
                                    <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="hsl(var(--pink))" />
                                        <stop offset="50%" stopColor="hsl(var(--primary))" />
                                        <stop offset="100%" stopColor="hsl(var(--accent))" />
                                    </linearGradient>
                                </defs>
                                {/* Main triangle */}
                                <path d="M16 4L4 28H28L16 4Z" fill="url(#logo-gradient)" stroke="url(#logo-gradient)" strokeWidth="2" strokeLinejoin="round" />
                                {/* Inner highlight for 3D effect */}
                                <path d="M16 8L8 24H24L16 8Z" fill="white" fillOpacity="0.2" />
                            </svg>
                            {/* Glow effect behind logo */}
                            <div className="absolute inset-0 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" style={{ background: 'linear-gradient(135deg, hsl(var(--pink)), hsl(var(--primary)), hsl(var(--accent)))' }}></div>
                        </div>
                        <span className="hidden sm:inline gradient-text font-extrabold tracking-tight">Axon AI</span>
                    </Link>

                    {/* Desktop Search */}
                    <div className="hidden md:block flex-1 max-w-md mx-8" ref={searchContainerRef}>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search models, resources..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setIsSearchFocused(true)}
                                className="w-full pl-10 pr-4 py-2 rounded-full bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            />

                            {/* Search Dropdown */}
                            {isSearchFocused && searchQuery && (
                                <div className="absolute top-full mt-2 w-full bg-background border border-border rounded-lg shadow-lg max-h-96 overflow-y-auto">
                                    {searchResults.length > 0 ? (
                                        searchResults.map((result) => (
                                            <button
                                                key={result.id}
                                                onClick={() => handleResultClick(result)}
                                                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted/50 transition-colors text-left"
                                            >
                                                <div className="flex-shrink-0">
                                                    {result.type === 'Tool' && <LayoutGrid className="h-4 w-4 text-primary" />}
                                                    {result.type === 'Solution' && <Zap className="h-4 w-4 text-accent" />}
                                                    {result.type === 'Learning' && <GraduationCap className="h-4 w-4 text-green-500" />}
                                                    {result.type === 'Page' && <LinkIcon className="h-4 w-4 text-muted-foreground" />}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="font-medium truncate">{result.name}</div>
                                                    <div className="text-xs text-muted-foreground">{result.category} • {result.type}</div>
                                                </div>
                                                {result.url.startsWith('http') ? <ExternalLink className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                                            </button>
                                        ))
                                    ) : (
                                        <div className="px-4 py-8 text-center text-muted-foreground">
                                            No results found for "{searchQuery}"
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="/#marketplace" className="text-sm hover:text-primary transition-colors">
                            Models
                        </Link>
                        <Link href="/#solutions" className="text-sm hover:text-primary transition-colors">
                            Solutions
                        </Link>
                        <Link href="/learning" className={`text-sm hover:text-primary transition-colors ${pathname === '/learning' ? 'text-primary' : ''}`}>
                            Learn
                        </Link>
                        <Link href="/#consulting" className="text-sm hover:text-primary transition-colors">
                            Consulting
                        </Link>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="p-2 rounded-lg hover:bg-muted transition-colors"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                            </button>
                        )}

                        <div className="hidden md:flex items-center gap-2">
                            {isAuthenticated && user ? (
                                <div className="relative" ref={userDropdownRef}>
                                    <button
                                        onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-muted transition-colors"
                                    >
                                        <User className="h-4 w-4" />
                                        <span className="text-sm font-medium">{user.username}</span>
                                    </button>

                                    {isUserDropdownOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2">
                                            <div className="px-4 py-2 border-b border-border">
                                                <p className="text-sm font-medium">{user.name}</p>
                                                <p className="text-xs text-muted-foreground">{user.email}</p>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    logout();
                                                    setIsUserDropdownOpen(false);
                                                    router.push('/');
                                                }}
                                                className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors text-left"
                                            >
                                                <LogOut className="h-4 w-4" />
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <>
                                    <Link href="/login" className="text-sm px-4 py-2 hover:bg-muted rounded-lg transition-colors">
                                        Log In
                                    </Link>
                                    <Link href="/signup" className="text-sm px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                                        Sign Up
                                    </Link>
                                </>
                            )}
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-border bg-background">
                    <div className="container mx-auto px-4 py-4 space-y-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 rounded-full bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                        </div>

                        <nav className="flex flex-col gap-2">
                            <button onClick={() => scrollToSection('marketplace')} className="text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors">
                                Models
                            </button>
                            <button onClick={() => scrollToSection('solutions')} className="text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors">
                                Solutions
                            </button>
                            <Link href="/learning" className="px-4 py-2 hover:bg-muted rounded-lg transition-colors">
                                Learn
                            </Link>
                            <button onClick={() => scrollToSection('consulting')} className="text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors">
                                Consulting
                            </button>
                        </nav>

                        <div className="flex flex-col gap-2 pt-4 border-t border-border">
                            {isAuthenticated && user ? (
                                <>
                                    <div className="px-4 py-2 bg-muted/50 rounded-lg">
                                        <p className="text-sm font-medium">{user.username}</p>
                                        <p className="text-xs text-muted-foreground">{user.email}</p>
                                    </div>
                                    <button
                                        onClick={() => {
                                            logout();
                                            setIsMobileMenuOpen(false);
                                            router.push('/');
                                        }}
                                        className="flex items-center gap-2 px-4 py-2 hover:bg-muted rounded-lg transition-colors"
                                    >
                                        <LogOut className="h-4 w-4" />
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link href="/login" className="text-center px-4 py-2 hover:bg-muted rounded-lg transition-colors">
                                        Log In
                                    </Link>
                                    <Link href="/signup" className="text-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                                        Sign Up
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
