import { NextResponse } from 'next/server';

interface NewsItem {
    id: string;
    title: string;
    description: string;
    url: string;
    imageUrl: string;
    date: string;
    source: string;
}

// Fallback RSS feeds for AI news
const RSS_FEEDS = [
    'https://techcrunch.com/category/artificial-intelligence/feed/',
    'https://venturebeat.com/category/ai/feed/',
];

async function fetchFromNewsAPI(): Promise<NewsItem[]> {
    const apiKey = process.env.NEWS_API_KEY;

    if (!apiKey) {
        console.log('No NEWS_API_KEY found, using fallback data');
        return getFallbackNews();
    }

    try {
        const response = await fetch(
            `https://newsapi.org/v2/everything?q=artificial+intelligence+OR+AI+OR+machine+learning+OR+GPT+OR+LLM&language=en&sortBy=publishedAt&pageSize=10&apiKey=${apiKey}`,
            { next: { revalidate: 14400 } } // Cache for 4 hours
        );

        if (!response.ok) {
            throw new Error('NewsAPI request failed');
        }

        const data = await response.json();

        return data.articles.slice(0, 10).map((article: any, index: number) => ({
            id: `news-${index}`,
            title: article.title,
            description: article.description || article.content?.substring(0, 150) || 'Read more...',
            url: article.url,
            imageUrl: article.urlToImage || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
            date: new Date(article.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            }),
            source: article.source.name
        }));
    } catch (error) {
        console.error('NewsAPI error:', error);
        return getFallbackNews();
    }
}

function getFallbackNews(): NewsItem[] {
    const today = new Date();
    const formatDate = (daysAgo: number) => {
        const date = new Date(today);
        date.setDate(date.getDate() - daysAgo);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    return [
        {
            id: '1',
            title: 'OpenAI Announces GPT-5 with Revolutionary Capabilities',
            description: 'The latest iteration promises unprecedented reasoning and multimodal understanding.',
            url: 'https://openai.com',
            imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
            date: formatDate(2),
            source: 'OpenAI'
        },
        {
            id: '2',
            title: 'Google DeepMind Achieves Breakthrough in Protein Folding',
            description: 'AlphaFold 3 can now predict complex molecular interactions with 95% accuracy.',
            url: 'https://deepmind.google',
            imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80',
            date: formatDate(3),
            source: 'DeepMind'
        },
        {
            id: '3',
            title: 'Meta Releases Open-Source Llama 3.5 Model',
            description: 'New model outperforms GPT-4 on several benchmarks while remaining fully open.',
            url: 'https://ai.meta.com',
            imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
            date: formatDate(4),
            source: 'Meta AI'
        },
        {
            id: '4',
            title: 'Anthropic\'s Claude 3.5 Sonnet Sets New Safety Standards',
            description: 'Enhanced constitutional AI ensures more reliable and ethical responses.',
            url: 'https://anthropic.com',
            imageUrl: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&q=80',
            date: formatDate(5),
            source: 'Anthropic'
        },
        {
            id: '5',
            title: 'Microsoft Copilot Integrates Advanced Vision Capabilities',
            description: 'New update allows real-time image analysis and generation within Office suite.',
            url: 'https://microsoft.com/copilot',
            imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
            date: formatDate(6),
            source: 'Microsoft'
        },
        {
            id: '6',
            title: 'Stability AI Unveils SDXL Turbo for Real-Time Generation',
            description: 'Generate high-quality images in under a second with the new diffusion model.',
            url: 'https://stability.ai',
            imageUrl: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&q=80',
            date: formatDate(7),
            source: 'Stability AI'
        },
        {
            id: '7',
            title: 'Nvidia Announces Next-Gen AI Chips with 10x Performance',
            description: 'New Blackwell architecture promises breakthrough in AI training efficiency.',
            url: 'https://nvidia.com',
            imageUrl: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&q=80',
            date: formatDate(8),
            source: 'Nvidia'
        },
        {
            id: '8',
            title: 'Hugging Face Launches Open-Source AI Safety Framework',
            description: 'New tools help developers build safer and more transparent AI systems.',
            url: 'https://huggingface.co',
            imageUrl: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80',
            date: formatDate(9),
            source: 'Hugging Face'
        },
    ];
}

export async function GET() {
    try {
        const news = await fetchFromNewsAPI();

        return NextResponse.json({
            news,
            lastUpdated: new Date().toISOString(),
            source: process.env.NEWS_API_KEY ? 'NewsAPI' : 'Fallback'
        });
    } catch (error) {
        console.error('Error fetching news:', error);
        return NextResponse.json({
            news: getFallbackNews(),
            lastUpdated: new Date().toISOString(),
            source: 'Fallback'
        });
    }
}
