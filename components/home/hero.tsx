'use client';

import { ArrowRight, Cpu, Zap, Briefcase } from 'lucide-react';
import ThreeBackground from '@/components/three-background';

export default function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 85;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 pb-16">{/* Reduced from min-h-screen and py-20 */}
            <ThreeBackground />

            {/* Animated particles/dots for futuristic feel */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>

            <div className="relative z-10 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Brand & CTA */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 glass-glow rounded-full text-sm font-medium animate-float border border-primary/20">
                            <span className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></span>
                            Now with Enterprise Agents
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
                            <span className="block animate-slide-up" style={{ animationDelay: '0.1s' }}>Build the Future</span>
                            <span className="block gradient-text animate-gradient-shift" style={{ animationDelay: '0.2s' }}>
                                with Axon AI
                            </span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
                            The premier marketplace for cutting-edge AI tools and enterprise-grade automation solutions. Accelerate your business today.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => scrollToSection('solutions')}
                                className="group inline-flex items-center gap-2 px-6 py-3 gradient-primary text-white rounded-lg font-semibold hover-lift shadow-glow transition-all"
                            >
                                Explore Solutions
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => scrollToSection('marketplace')}
                                className="px-6 py-3 glass-strong rounded-lg font-semibold hover:bg-white/15 transition-all border border-white/20 hover:border-primary/50"
                            >
                                View Tools
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Premium Navigation Cards */}
                    <div className="space-y-4">
                        <button
                            onClick={() => scrollToSection('marketplace')}
                            className="w-full glass-glow p-6 rounded-2xl hover:bg-white/10 transition-all group text-left flex items-center justify-between hover-lift animate-scale-in"
                            style={{ animationDelay: '0.1s' }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 gradient-accent rounded-lg group-hover:scale-110 transition-transform">
                                    <Cpu className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">AI Tools Registry</h3>
                                    <p className="text-sm text-muted-foreground">100+ Top-tier applications</p>
                                </div>
                            </div>
                            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 group-hover:text-primary transition-all" />
                        </button>

                        <button
                            onClick={() => scrollToSection('solutions')}
                            className="w-full glass-glow p-6 rounded-2xl hover:bg-white/10 transition-all group text-left flex items-center justify-between hover-lift animate-scale-in"
                            style={{ animationDelay: '0.2s' }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 gradient-primary rounded-lg group-hover:scale-110 transition-transform">
                                    <Zap className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">Enterprise Solutions</h3>
                                    <p className="text-sm text-muted-foreground">Custom HR & Finance setups</p>
                                </div>
                            </div>
                            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 group-hover:text-primary transition-all" />
                        </button>

                        <button
                            onClick={() => scrollToSection('consulting')}
                            className="w-full glass-glow p-6 rounded-2xl hover:bg-white/10 transition-all group text-left flex items-center justify-between hover-lift animate-scale-in"
                            style={{ animationDelay: '0.3s' }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-gradient-to-br from-pink to-accent rounded-lg group-hover:scale-110 transition-transform">
                                    <Briefcase className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">AI Consulting</h3>
                                    <p className="text-sm text-muted-foreground">Expert Automation Strategy</p>
                                </div>
                            </div>
                            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 group-hover:text-primary transition-all" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
