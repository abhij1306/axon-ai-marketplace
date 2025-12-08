import Hero from '@/components/home/hero';
import NewsSection from '@/components/home/news-section';
import Marketplace from '@/components/home/marketplace';
import Consulting from '@/components/home/consulting';
import About from '@/components/home/about';
import Contact from '@/components/home/contact';

export default function HomePage() {
    return (
        <>
            <Hero />
            <Marketplace />
            <Consulting />
            <NewsSection />
            <About />
            <Contact />
        </>
    );
}
