'use client';

import Image from 'next/image';
import { Newspaper, Calendar } from 'lucide-react';

interface NewsItem {
    id: string;
    title: string;
    description: string;
    url: string;
    imageUrl: string;
    date: string;
}

function getNews(): NewsItem[] {
    // Mock data - in production, fetch from an API
    return [
        {
            id: '1',
            title: 'OpenAI Announces GPT-5 with Revolutionary Capabilities',
            description: 'The latest iteration promises unprecedented reasoning and multimodal understanding.',
            url: 'https://openai.com',
            imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
            date: 'Dec 7, 2024',
        },
        {
            id: '2',
            title: 'Google DeepMind Achieves Breakthrough in Protein Folding',
            description: 'AlphaFold 3 can now predict complex molecular interactions with 95% accuracy.',
            url: 'https://deepmind.google',
            imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80',
            date: 'Dec 6, 2024',
        },
        {
            id: '3',
            title: 'Meta Releases Open-Source Llama 3.5 Model',
            description: 'New model outperforms GPT-4 on several benchmarks while remaining fully open.',
            url: 'https://ai.meta.com',
            imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
            date: 'Dec 5, 2024',
        },
        {
            id: '4',
            title: 'Anthropic\'s Claude 3.5 Sonnet Sets New Safety Standards',
            description: 'Enhanced constitutional AI ensures more reliable and ethical responses.',
            url: 'https://anthropic.com',
            imageUrl: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&q=80',
            date: 'Dec 4, 2024',
        },
        {
            id: '5',
            title: 'Microsoft Copilot Integrates Advanced Vision Capabilities',
            description: 'New update allows real-time image analysis and generation within Office suite.',
            url: 'https://microsoft.com/copilot',
            imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
            date: 'Dec 3, 2024',
        },
        {
            id: '6',
            title: 'Stability AI Unveils SDXL Turbo for Real-Time Generation',
            description: 'Generate high-quality images in under a second with the new diffusion model.',
            url: 'https://stability.ai',
            imageUrl: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&q=80',
            date: 'Dec 2, 2024',
        },
    ];
}

export default function NewsSection() {
    const newsItems = getNews();

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
                    <div className="flex items-center gap-2 text-sm gradient-accent px-3 py-1 rounded-full glass-panel">
                        <span className="w-2 h-2 bg-accent rounded-full animate-glow-pulse"></span>
                        Live Feed
                    </div>
                </div>

                <div className="overflow-x-auto pb-4 custom-scrollbar">
                    <div className="flex gap-4" style={{ minWidth: 'min-content' }}>
                        {newsItems.map((item, index) => (
                            <a
                                key={item.id}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex-shrink-0 w-48 glass-glow p-3 rounded-xl hover-lift transition-all animate-scale-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="aspect-video relative mb-2 rounded-lg overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
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

                                <div className="space-y-1">
                                    <h3 className="font-semibold text-xs line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-[10px] text-muted-foreground line-clamp-2 leading-snug">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground pt-1">
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
