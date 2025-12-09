'use client';

import { useState, useMemo } from 'react';
import { learningResources } from '@/lib/data/learning';
import { Users, Youtube, Search, SlidersHorizontal, Menu, X } from 'lucide-react';
import Image from 'next/image';

type SectionFilter = 'All' | 'YouTube' | 'GitHub' | 'Interactive' | 'Research' | 'Certifications';
type SortOption = 'popular' | 'name';

export default function LearningPageClient() {
    const [selectedSection, setSelectedSection] = useState<SectionFilter>('All');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState<SortOption>('popular');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Get categories based on selected section (section-specific)
    const allCategories = useMemo(() => {
        let filtered = learningResources;

        // Filter resources by section first
        if (selectedSection === 'YouTube') {
            filtered = filtered.filter(r => r.type === 'video');
        } else if (selectedSection === 'GitHub') {
            filtered = filtered.filter(r => r.type === 'github');
        } else if (selectedSection === 'Certifications') {
            filtered = filtered.filter(r => r.type === 'certification');
        } else if (selectedSection === 'Interactive') {
            filtered = filtered.filter(r => r.category === 'Interactive');
        } else if (selectedSection === 'Research') {
            filtered = filtered.filter(r => r.category === 'Research');
        }

        // Get unique categories from filtered resources
        const cats = new Set(filtered.map(r => r.category));
        const categoriesArray = Array.from(cats).filter(cat =>
            cat !== 'Interactive' && cat !== 'Research'
        );

        return ['All', ...categoriesArray];
    }, [selectedSection]);

    // Determine if we should show category pills
    const showCategoryPills = useMemo(() => {
        // Show for YouTube, GitHub, and Certifications (they have subcategories)
        // Hide for Interactive and Research (no subcategories)
        return selectedSection === 'All' ||
            selectedSection === 'YouTube' ||
            selectedSection === 'GitHub' ||
            selectedSection === 'Certifications';
    }, [selectedSection]);

    // Filter resources based on section, category, and search
    const filteredResources = useMemo(() => {
        let filtered = learningResources;

        // Filter by section
        if (selectedSection !== 'All') {
            if (selectedSection === 'YouTube') {
                filtered = filtered.filter(r => r.type === 'video');
            } else if (selectedSection === 'GitHub') {
                filtered = filtered.filter(r => r.type === 'github');
            } else if (selectedSection === 'Interactive') {
                filtered = filtered.filter(r => r.category === 'Interactive');
            } else if (selectedSection === 'Research') {
                filtered = filtered.filter(r => r.category === 'Research');
            } else if (selectedSection === 'Certifications') {
                filtered = filtered.filter(r => r.category === 'Certifications');
            }
        }

        // Filter by category
        if (selectedCategory !== 'All') {
            filtered = filtered.filter(r => r.category === selectedCategory);
        }

        // Filter by search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(r =>
                r.name.toLowerCase().includes(query) ||
                r.desc.toLowerCase().includes(query) ||
                r.category.toLowerCase().includes(query)
            );
        }

        // Sort
        if (sortBy === 'name') {
            filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        }

        return filtered;
    }, [selectedSection, selectedCategory, searchQuery, sortBy]);

    const getSectionIcon = (type: string) => {
        switch (type) {
            case 'video':
                return <Youtube className="h-4 w-4 text-red-500" />;
            case 'github':
                return (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                );
            case 'platform':
                return <SlidersHorizontal className="h-4 w-4 text-blue-500" />;
            default:
                return <SlidersHorizontal className="h-4 w-4 text-purple-500" />;
        }
    };

    return (
        <div className="min-h-screen py-20 bg-background">
            <div className="container mx-auto">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass-glow rounded-full text-sm font-medium mb-4 border border-primary/20">
                        <span className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></span>
                        Knowledge Hub
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
                        Master <span className="gradient-text">Artificial Intelligence</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Curated resources to take you from beginner to expert. Explore the best free content available on the web.
                    </p>
                </div>

                {/* Main Layout */}
                <div className="flex gap-6 relative">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="lg:hidden fixed top-24 left-4 z-50 p-2 glass-panel rounded-lg hover:bg-white/10"
                    >
                        {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>

                    {/* Left Sidebar */}
                    <aside className={`
                        fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] lg:h-auto
                        w-64 flex-shrink-0 glass-panel p-4 rounded-xl
                        transition-transform duration-300 z-40
                        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                    `}>
                        <div className="space-y-6 overflow-y-auto h-full custom-scrollbar">
                            {/* Main Sections */}
                            <div>
                                <h3 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                                    <SlidersHorizontal className="h-4 w-4" />
                                    Sections
                                </h3>
                                <div className="space-y-1">
                                    {(['All', 'YouTube', 'GitHub', 'Interactive', 'Research', 'Certifications'] as SectionFilter[]).map(section => (
                                        <button
                                            key={section}
                                            onClick={() => {
                                                setSelectedSection(section);
                                                setSidebarOpen(false);
                                            }}
                                            className={`w-full text-left px-3 py-2 rounded-lg transition-all text-sm font-medium ${selectedSection === section
                                                ? 'gradient-primary text-white shadow-glow'
                                                : 'hover:bg-white/5'
                                                }`}
                                        >
                                            {section === 'YouTube' && '📺 '}
                                            {section === 'GitHub' && '💻 '}
                                            {section === 'Interactive' && '🎮 '}
                                            {section === 'Research' && '📚 '}
                                            {section === 'Certifications' && '🎓 '}
                                            {section === 'All' && '◈ '}
                                            {section === 'YouTube' ? 'YouTube Channels' :
                                                section === 'GitHub' ? 'GitHub Repos' :
                                                    section === 'Interactive' ? 'Interactive Platforms' :
                                                        section}
                                        </button>
                                    ))}
                                </div>
                            </div>


                        </div>
                    </aside>

                    {/* Overlay for mobile */}
                    {sidebarOpen && (
                        <div
                            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                            onClick={() => setSidebarOpen(false)}
                        />
                    )}

                    {/* Main Content */}
                    <main className="flex-1 min-w-0">
                        {/* Top Bar */}
                        <div className="glass-panel p-4 rounded-xl mb-6 flex flex-col sm:flex-row gap-4">
                            {/* Search */}
                            <div className="flex-1 relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Search resources..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 bg-background/50 border border-white/10 rounded-lg focus:outline-none focus:border-primary/50 transition-colors"
                                />
                            </div>

                            {/* Sort */}
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as SortOption)}
                                className="px-4 py-2 bg-background/50 border border-white/10 rounded-lg focus:outline-none focus:border-primary/50 transition-colors cursor-pointer"
                            >
                                <option value="popular">Most Popular</option>
                                <option value="name">A-Z</option>
                            </select>
                        </div>

                        {/* Category Pills */}
                        {showCategoryPills && (
                            <div className="flex flex-wrap gap-2 mb-6">
                                {allCategories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 py-2 rounded-full transition-all text-sm font-medium ${selectedCategory === category
                                            ? 'gradient-primary text-white shadow-glow'
                                            : 'glass-panel hover:bg-white/10 hover:border-primary/50'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Results Count */}
                        <div className="mb-4 text-sm text-muted-foreground">
                            Showing {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''}
                        </div>

                        {/* Resource Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {filteredResources.map((resource, idx) => (
                                <a
                                    key={idx}
                                    href={resource.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-glow rounded-xl overflow-hidden hover:bg-white/10 transition-all group hover-lift"
                                >
                                    {/* Thumbnail/Logo */}
                                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-500/20 relative overflow-hidden">
                                        {resource.logoUrl && (
                                            <Image
                                                src={resource.logoUrl}
                                                alt={resource.name}
                                                fill
                                                className="object-cover"
                                                unoptimized
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-2 right-2">
                                            {getSectionIcon(resource.type)}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-3">
                                        <div className="flex items-start gap-2 mb-2">
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors mb-1">
                                                    {resource.name}
                                                </h3>
                                                <p className="text-xs text-muted-foreground line-clamp-2">
                                                    {resource.desc}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Metadata */}
                                        <div className="flex items-center justify-between text-xs text-muted-foreground mt-2 pt-2 border-t border-white/5">
                                            <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-medium">
                                                {resource.category}
                                            </span>
                                            {resource.subscribers && (
                                                <div className="flex items-center gap-1">
                                                    <Users className="h-3 w-3" />
                                                    <span>{resource.subscribers}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Empty State */}
                        {filteredResources.length === 0 && (
                            <div className="text-center py-12 glass-panel rounded-xl">
                                <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                                <h3 className="text-lg font-semibold mb-2">No resources found</h3>
                                <p className="text-muted-foreground">
                                    Try adjusting your filters or search query
                                </p>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}
