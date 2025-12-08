import type { Metadata } from 'next';
import LearningPageClient from '@/components/home/learning-page-client';

export const metadata: Metadata = {
    title: 'Learning Hub | Axon AI',
    description: 'Explore curated AI learning resources, courses, platforms, and research papers to upskill in artificial intelligence and machine learning.',
};

export default function LearningPage() {
    return <LearningPageClient />;
}
