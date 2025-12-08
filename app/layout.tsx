import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/layout/theme-provider';
import { AuthProvider } from '@/lib/contexts/auth-context';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Axon AI Marketplace | AI Tools & Enterprise Solutions',
    description: 'Discover top AI tools, enterprise solutions, and expert consulting for your business. Explore cutting-edge AI models, learn from industry leaders, and transform your organization with AI.',
    keywords: ['AI marketplace', 'AI tools', 'enterprise AI', 'machine learning', 'artificial intelligence', 'AI consulting', 'AI solutions'],
    authors: [{ name: 'Axon AI Team' }],
    openGraph: {
        title: 'Axon AI Marketplace | AI Tools & Enterprise Solutions',
        description: 'Discover top AI tools, enterprise solutions, and expert consulting for your business.',
        url: 'https://axonai.vercel.app',
        siteName: 'Axon AI',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Axon AI Marketplace',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Axon AI Marketplace | AI Tools & Enterprise Solutions',
        description: 'Discover top AI tools, enterprise solutions, and expert consulting for your business.',
        images: ['/og-image.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={outfit.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <AuthProvider>
                        <Header />
                        <main>{children}</main>
                        <Footer />
                    </AuthProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
