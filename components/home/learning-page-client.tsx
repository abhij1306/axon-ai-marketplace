'use client';

import { useState } from 'react';
import { learningResources } from '@/lib/data/learning';
import { Users, Youtube } from 'lucide-react';
import Image from 'next/image';

export default function LearningPageClient() {
    const youtubeCategories = ['Large Language Models', 'Generative AI', 'Agentic AI', 'Automation', 'DSA'];
    const [selectedYouTubeCategory, setSelectedYouTubeCategory] = useState('All');

    const youtubeResources = learningResources.filter(r => r.type === 'video');
    const filteredYouTube = selectedYouTubeCategory === 'All'
        ? youtubeResources
        : youtubeResources.filter(r => r.category === selectedYouTubeCategory);

    const githubResources = learningResources.filter(r => r.type === 'github');
    const interactiveResources = learningResources.filter(r => r.category === 'Interactive');
    const researchResources = learningResources.filter(r => r.category === 'Research');

    return (
        <div className="min-h-screen py-20 bg-background">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
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

                {/* YouTube Section */}
                <div className="mb-20">
                    <div className="flex flex-wrap gap-3 mb-8">
                        <button
                            onClick={() => setSelectedYouTubeCategory('All')}
                            className={`px-6 py-3 rounded-full transition-all font-medium ${selectedYouTubeCategory === 'All'
                                ? 'gradient-primary text-white shadow-glow'
                                : 'glass-panel hover:bg-white/10 hover:border-primary/50'
                                }`}
                        >
                            <span className="mr-2">◈</span>
                            All
                        </button>
                        {youtubeCategories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedYouTubeCategory(cat)}
                                className={`px-6 py-3 rounded-full transition-all font-medium ${selectedYouTubeCategory === cat
                                    ? 'gradient-primary text-white shadow-glow'
                                    : 'glass-panel hover:bg-white/10 hover:border-primary/50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 mb-6">
                        <Youtube className="h-6 w-6 text-red-500" />
                        <h2 className="text-2xl font-bold">Top YouTube Channels</h2>
                    </div>

                    <div className="-mx-4 md:-mx-6 lg:-mx-8">
                        <div className="overflow-x-auto pb-4 custom-scrollbar px-4 md:px-6 lg:px-8">
                            <div className="flex gap-4" style={{ minWidth: 'min-content' }}>
                                {filteredYouTube.map((resource, idx) => (
                                    <a
                                        key={idx}
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="glass-glow p-3 rounded-xl hover:bg-white/10 transition-all group flex-shrink-0 w-52 hover-lift"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            {resource.logoUrl && (
                                                <div className="w-10 h-10 relative flex-shrink-0 rounded-full overflow-hidden bg-muted">
                                                    <Image
                                                        src={resource.logoUrl}
                                                        alt={resource.name}
                                                        width={40}
                                                        height={40}
                                                        className="object-cover"
                                                        unoptimized
                                                        onError={(e) => {
                                                            e.currentTarget.style.display = 'none';
                                                        }}
                                                    />
                                                </div>
                                            )}
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold truncate text-xs group-hover:text-primary transition-colors">{resource.name}</h3>
                                            </div>
                                        </div>
                                        {resource.subscribers && (
                                            <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                                                <Users className="h-3 w-3" />
                                                <span>{resource.subscribers}</span>
                                            </div>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* GitHub Repositories Section */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub Repositories
                    </h2>
                    <div className="-mx-4 md:-mx-6 lg:-mx-8">
                        <div className="overflow-x-auto pb-4 custom-scrollbar px-4 md:px-6 lg:px-8">
                            <div className="flex gap-4" style={{ minWidth: 'min-content' }}>
                                {githubResources.map((resource, idx) => (
                                    <a
                                        key={idx}
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="glass-glow p-3 rounded-xl hover:bg-white/10 transition-all group flex-shrink-0 w-52 hover-lift"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            {resource.logoUrl && (
                                                <div className="w-10 h-10 relative flex-shrink-0 rounded-full overflow-hidden bg-muted">
                                                    <Image
                                                        src={resource.logoUrl}
                                                        alt={resource.name}
                                                        width={40}
                                                        height={40}
                                                        className="object-cover"
                                                        unoptimized
                                                        onError={(e) => {
                                                            e.currentTarget.style.display = 'none';
                                                        }}
                                                    />
                                                </div>
                                            )}
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold truncate text-xs group-hover:text-primary transition-colors">{resource.name}</h3>
                                            </div>
                                        </div>
                                        <p className="text-[10px] text-muted-foreground line-clamp-2 mb-2">{resource.desc}</p>
                                        {resource.subscribers && (
                                            <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <span>{resource.subscribers}</span>
                                            </div>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Interactive Section */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">Interactive Platforms</h2>
                    <div className="-mx-4 md:-mx-6 lg:-mx-8">
                        <div className="overflow-x-auto pb-4 custom-scrollbar px-4 md:px-6 lg:px-8">
                            <div className="flex gap-4" style={{ minWidth: 'min-content' }}>
                                {interactiveResources.map((resource, idx) => (
                                    <a
                                        key={idx}
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="glass-glow p-4 rounded-xl hover:bg-white/10 transition-all group flex-shrink-0 w-52 hover-lift"
                                    >
                                        <div className="flex items-center gap-3">
                                            {resource.logoUrl && (
                                                <div className="w-12 h-12 relative flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                                                    <Image
                                                        src={resource.logoUrl}
                                                        alt={resource.name}
                                                        width={48}
                                                        height={48}
                                                        className="object-cover"
                                                        unoptimized
                                                    />
                                                </div>
                                            )}
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold truncate text-sm group-hover:text-primary transition-colors">{resource.name}</h3>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Research Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">Research</h2>
                    <div className="-mx-4 md:-mx-6 lg:-mx-8">
                        <div className="overflow-x-auto pb-4 custom-scrollbar px-4 md:px-6 lg:px-8">
                            <div className="flex gap-4" style={{ minWidth: 'min-content' }}>
                                {researchResources.map((resource, idx) => (
                                    <a
                                        key={idx}
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="glass-glow p-4 rounded-xl hover:bg-white/10 transition-all group flex-shrink-0 w-52 hover-lift"
                                    >
                                        <div className="flex items-center gap-3">
                                            {resource.logoUrl && (
                                                <div className="w-12 h-12 relative flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                                                    <Image
                                                        src={resource.logoUrl}
                                                        alt={resource.name}
                                                        width={48}
                                                        height={48}
                                                        className="object-cover"
                                                        unoptimized
                                                    />
                                                </div>
                                            )}
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold truncate text-sm group-hover:text-primary transition-colors">{resource.name}</h3>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
