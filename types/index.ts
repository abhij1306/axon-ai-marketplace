export interface AITool {
    id: string;
    name: string;
    category: string;
    description: string;
    imageUrl: string;
    url?: string;
    logoUrl?: string;
    isSolution?: boolean;
    rating?: number;
    reviewCount?: number;
    sponsored?: boolean;
}

export interface LearningResource {
    name: string;
    category: string;
    desc: string;
    url: string;
    logoUrl?: string;
    subscribers?: string;
}

export interface NewsItem {
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
