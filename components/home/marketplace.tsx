'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Star } from 'lucide-react';
import { toolsData, solutionsData } from '@/lib/data/tools';

const toolCategories = [
    { name: 'All', icon: '◈' },
    { name: 'Text Analysis', icon: '📝' },
    { name: 'Image Generation', icon: '🖼️' },
    { name: 'Video Creation', icon: '🎥' },
    { name: 'Productivity', icon: '⚡' },
    { name: 'Development', icon: '💻' },
    { name: 'Marketing', icon: '📢' },
];

const solutionCategories = [
    { name: 'All', icon: '◈' },
    { name: 'HR', icon: '👥' },
    { name: 'Finance', icon: '💰' },
    { name: 'Sales', icon: '📈' },
    { name: 'Marketing', icon: '🎯' },
    { name: 'Consulting', icon: '🤝' },
];

export default function Marketplace() {
    const [selectedToolCategory, setSelectedToolCategory] = useState('All');
    const [selectedSolutionCategory, setSelectedSolutionCategory] = useState('All');

    const filteredTools = toolsData.filter(tool =>
        selectedToolCategory === 'All' || tool.category === selectedToolCategory
    );

    const filteredSolutions = solutionsData.filter(sol =>
        selectedSolutionCategory === 'All' || sol.category === selectedSolutionCategory
    );

    return (
        <section id="marketplace" className="py-20 bg-background">
            <div className="container mx-auto">
                <div className="text-center mb-12 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">AI Tools Registry</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">Generative models and productivity enhancers</p>
                </div>

                {/* Tool Categories */}
                <div className="flex flex-wrap gap-3 justify-center mb-12">
                    {toolCategories.map(cat => (
                        <button
                            key={cat.name}
                            onClick={() => setSelectedToolCategory(cat.name)}
                            className={`px-6 py-3 rounded-full transition-all font-medium ${selectedToolCategory === cat.name
                                ? 'gradient-primary text-white shadow-glow'
                                : 'glass-panel hover:bg-white/10 hover:border-primary/50'
                                }`}
                        >
                            <span className="mr-2">{cat.icon}</span>
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Tools Horizontal Scroll */}
                <div className="-mx-4 md:-mx-6 lg:-mx-8">
                    <div className="overflow-x-auto pb-6 scrollbar-hide px-4 md:px-6 lg:px-8">
                        <div className="flex gap-6" style={{ minWidth: 'min-content' }}>
                            {filteredTools.map((tool, index) => (
                                <a
                                    key={tool.id}
                                    href={tool.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-glow p-4 rounded-2xl hover:bg-white/10 transition-all group flex-shrink-0 w-64 hover-lift animate-scale-in"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="aspect-video relative mb-3 rounded-lg overflow-hidden">
                                        <Image
                                            src={tool.imageUrl}
                                            alt={tool.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            unoptimized
                                            onError={(e) => {
                                                const target = e.currentTarget;
                                                target.src = '/placeholder.png';
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-base font-semibold group-hover:text-primary transition-colors">{tool.name}</h3>
                                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary flex-shrink-0 ml-2 transition-colors" />
                                    </div>
                                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{tool.description}</p>
                                    {tool.rating && (
                                        <div className="flex items-center gap-2">
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`h-4 w-4 ${i < Math.floor(tool.rating!) ? 'fill-primary text-primary' : 'text-gray-600'}`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm text-muted-foreground">
                                                {tool.rating} ({tool.reviewCount?.toLocaleString()})
                                            </span>
                                        </div>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Solutions Section */}
                <div id="solutions" className="pt-20">
                    <div className="text-center mb-12 animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="gradient-text">Enterprise Solutions</span>
                        </h2>
                        <p className="text-xl text-muted-foreground">Business-ready automation for HR, Finance, and Sales</p>
                    </div>

                    {/* Solution Categories */}
                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        {solutionCategories.map(cat => (
                            <button
                                key={cat.name}
                                onClick={() => setSelectedSolutionCategory(cat.name)}
                                className={`px-6 py-3 rounded-full transition-all font-medium ${selectedSolutionCategory === cat.name
                                    ? 'gradient-accent text-white shadow-glow'
                                    : 'glass-panel hover:bg-white/10 hover:border-accent/50'
                                    }`}
                            >
                                <span className="mr-2">{cat.icon}</span>
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* Solutions Horizontal Scroll */}
                    <div className="-mx-4 md:-mx-6 lg:-mx-8">
                        <div className="overflow-x-auto pb-6 custom-scrollbar px-4 md:px-6 lg:px-8">
                            <div className="flex gap-6" style={{ minWidth: 'min-content' }}>
                                {filteredSolutions.map((sol, index) => (
                                    <a
                                        key={sol.id}
                                        href={sol.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="glass-glow p-4 rounded-2xl hover:bg-white/10 transition-all group flex-shrink-0 w-64 hover-lift animate-scale-in"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className="aspect-video relative mb-3 rounded-lg overflow-hidden">
                                            <Image
                                                src={sol.imageUrl}
                                                alt={sol.name}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                unoptimized
                                                onError={(e) => {
                                                    const target = e.currentTarget;
                                                    target.src = '/placeholder.png';
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="text-base font-semibold group-hover:text-accent transition-colors">{sol.name}</h3>
                                            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent flex-shrink-0 ml-2 transition-colors" />
                                        </div>
                                        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{sol.description}</p>
                                        {sol.rating && (
                                            <div className="flex items-center gap-2">
                                                <div className="flex">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`h-4 w-4 ${i < Math.floor(sol.rating!) ? 'fill-accent text-accent' : 'text-gray-600'}`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-sm text-muted-foreground">
                                                    {sol.rating} ({sol.reviewCount?.toLocaleString()})
                                                </span>
                                            </div>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
