'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Newspaper, Calendar, Clock } from 'lucide-react';

interface NewsItem {
    id: string;
    title: string;
    description: string;
    url: string;
    imageUrl: string;
    date: string;
    source: string;
}

export default function NewsSection() {
    const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
    const [lastUpdated, setLastUpdated] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchNews() {
            try {
                const response = await fetch('/api/news');
                const data = await response.json();
                setNewsItems(data.news);
                setLastUpdated(new Date(data.lastUpdated).toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit'
                }));
            } catch (error) {
                console.error('Failed to fetch news:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchNews();
        // Refresh every 4 hours
        const interval = setInterval(fetchNews, 4 * 60 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <section className="py-20 bg-muted/20">
                <div className="container mx-auto">
                    <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 bg-muted/20">
            <div className="container mx-auto">
                <div className="flex items-center justify-between mb-12 animate-fade-in-up">
                    <div className="flex items-center gap-3">
                        <Newspaper className="h-8 w-8 text-accent" />
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Latest <span className="gradient-text">AI Developments</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-2 text-sm px-3 py-1 rounded-full glass-panel">
                        <Clock className="h-3 w-3 text-accent" />
                        <span className="text-muted-foreground">Updated {lastUpdated}</span>
                    </div>
                </div>

                <div className="overflow-x-auto pb-4 custom-scrollbar">
                    <div className="flex gap-6" style={{ minWidth: 'min-content' }}>
                        {newsItems.map((item, index) => (
                            <a
                                key={item.id}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex-shrink-0 w-64 glass-glow p-4 rounded-xl hover-lift transition-all animate-scale-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="aspect-video relative mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        unoptimized
                                        onError={(e) => {
                                            const target = e.currentTarget;
                                            target.src = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-medium">
                                            {item.source}
                                        </span>
                                    </div>

                                    <h3 className="font-bold text-base line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                                        {item.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t border-white/10">
                                        <Calendar className="h-3 w-3" />
                                        <span>{item.date}</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
