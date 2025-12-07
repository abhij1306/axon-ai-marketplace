import React, { useState, useEffect } from 'react';
import { Calendar, Newspaper } from 'lucide-react';
import '../styles/NewsSection.scss';

interface NewsItem {
    id: string;
    title: string;
    summary: string;
    date: string;
    source: string;
    sourceLogo?: string;
    imageUrl: string;
    category: string;
    url: string;
}

const NewsSection: React.FC = () => {
    const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Mock Data - Fallback
    const mockNewsItems: NewsItem[] = [
        {
            id: 'm1',
            title: "OpenAI Announces GPT-5 Release Date Rumors",
            summary: "Speculation grows as industry insiders hint at a mid-2025 release for the next generation of GPT, promising true multimodal reasoning.",
            date: "Dec 6, 2025",
            source: "TechCrunch",
            sourceLogo: "https://logo.clearbit.com/techcrunch.com",
            imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
            category: "Models",
            url: "#"
        },
        {
            id: 'm2',
            title: "Google Gemini 1.5 Pro Now Available to Everyone",
            summary: "Google's massive context window model is now generally available, featuring improved coding capabilities and 1M token context.",
            date: "Dec 5, 2025",
            source: "Google Blog",
            sourceLogo: "https://logo.clearbit.com/google.com",
            imageUrl: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?auto=format&fit=crop&q=80&w=800",
            category: "Product",
            url: "#"
        },
        {
            id: 'm3',
            title: "NVIDIA Reveals New Blackwell B200 GPU",
            summary: "The new AI superchip promises 30x inference speedup for trillion-parameter LLMs, setting a new standard for AI hardware.",
            date: "Dec 4, 2025",
            source: "The Verge",
            sourceLogo: "https://logo.clearbit.com/theverge.com",
            imageUrl: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800",
            category: "Hardware",
            url: "#"
        },
        {
            id: 'm4',
            title: "Anthropic Releases Claude 3.5 Opus",
            summary: "Anthropic's latest model claims to outperform GPT-4 on coding benchmarks while maintaining lower latency.",
            date: "Dec 3, 2025",
            source: "Anthropic",
            sourceLogo: "https://logo.clearbit.com/anthropic.com",
            imageUrl: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800",
            category: "Models",
            url: "#"
        },
        {
            id: 'm5',
            title: "Meta Open Sources Llama 4 70B",
            summary: "Meta continues its open-source dominance with Llama 4, featuring mixture-of-experts architecture and enhanced reasoning.",
            date: "Dec 2, 2025",
            source: "Meta AI",
            sourceLogo: "https://logo.clearbit.com/meta.com",
            imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
            category: "Open Source",
            url: "#"
        }
    ];

    // Array of AI/Tech fallback images to rotate through if RSS doesn't provide a valid image
    const fallbackImages = [
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
    ];

    useEffect(() => {
        const fetchNews = async () => {
            try {
                // Using rss2json to bypass CORS and get API-friendly data
                // URL switched to a more reliable one: TechCrunch AI
                // Old: https://www.artificialintelligence-news.com/feed/ (Gave bad images)
                const rssUrl = 'https://techcrunch.com/category/artificial-intelligence/feed/';
                const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
                const data = await response.json();

                if (data.status === 'ok') {
                    const fetchedItems: NewsItem[] = data.items.map((item: any, index: number) => {
                        // Image Extraction Strategy:
                        // 1. Check 'thumbnail' (common in many feeds)
                        // 2. Check 'enclosure' (standard RSS media)
                        // 3. Regex content for first <img>
                        // 4. Random fallback

                        let img = item.thumbnail;

                        if (!img && item.enclosure?.link && item.enclosure.type?.startsWith('image')) {
                            img = item.enclosure.link;
                        }

                        if (!img) {
                            const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
                            if (imgMatch) img = imgMatch[1];
                        }

                        // Fallback image if still none
                        if (!img || img.includes('placeholder') || img.includes('banner')) {
                            // Pick a deterministic fallback based on index so it doesn't jitter on re-render
                            const fallbackIndex = index % fallbackImages.length;
                            img = fallbackImages[fallbackIndex];
                        }

                        // Clean summary - remove HTML tags & Decode entities
                        let cleanSummary = item.description.replace(/<[^>]*>?/gm, '');
                        // Basic entity decoding
                        cleanSummary = cleanSummary.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').substring(0, 120) + '...';

                        return {
                            id: `rss-${index}`,
                            title: item.title,
                            summary: cleanSummary,
                            date: new Date(item.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                            source: 'TechCrunch',
                            sourceLogo: 'https://logo.clearbit.com/techcrunch.com',
                            imageUrl: img,
                            category: 'Latest',
                            url: item.link
                        };
                    });
                    setNewsItems(fetchedItems.slice(0, 10)); // Take top 10
                    setLoading(false);
                } else {
                    throw new Error('Failed to fetch RSS');
                }
            } catch (err) {
                console.error("News fetch error, falling back to mock data", err);
                setError(true);
                setNewsItems(mockNewsItems);
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    return (
        <section className="news-section">
            <div className="section-header">
                <h2>
                    <Newspaper size={28} className="text-accent" />
                    Latest AI Developments
                </h2>
                <div className="status-indicator">
                    {loading ? (
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Updating...</span>
                    ) : error ? (
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Featured</span>
                    ) : (
                        <span style={{ fontSize: '0.9rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }}></span>
                            Live Feed
                        </span>
                    )}
                </div>
            </div>

            <div className="news-scroll-container">
                {newsItems.map((item) => (
                    <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="news-card">
                        <div className="card-image">
                            <img src={item.imageUrl} alt={item.title} loading="lazy" />
                            <span className="category-badge">{item.category}</span>
                        </div>
                        <div className="card-content">
                            <div className="date">
                                <Calendar size={12} /> {item.date}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.summary}</p>
                            <div className="source">
                                <img src={item.sourceLogo} alt={item.source} onError={(e) => (e.target as HTMLImageElement).style.display = 'none'} />
                                <span>{item.source}</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default NewsSection;
