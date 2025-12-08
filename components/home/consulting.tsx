'use client';

import { ArrowRight } from 'lucide-react';

export default function Consulting() {
    return (
        <section id="consulting" className="py-20 bg-muted/20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text Content */}
                    <div className="space-y-6 animate-fade-in-up">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 glass-glow rounded-full text-sm font-medium border border-primary/20">
                            <span className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></span>
                            Enterprise Automation
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                            Achieve Complete <br />
                            <span className="gradient-text animate-gradient-shift">AI Automation</span>
                        </h2>

                        {/* Description */}
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Transform your business operations with our enterprise AI consulting services.
                            We help you implement cutting-edge automation solutions tailored to your needs.
                        </p>

                        {/* Benefits List */}
                        <div className="space-y-3 pt-4">
                            {[
                                'Custom AI agent development',
                                'Workflow automation & optimization',
                                'Enterprise integration & deployment',
                                'Ongoing support & maintenance'
                            ].map((benefit, index) => (
                                <div key={index} className="flex items-center gap-3 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center shadow-glow">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-base">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Animated Metrics & CTA */}
                    <div className="flex flex-col items-center gap-6 animate-scale-in">
                        {/* Animated Glow Container with Metric Tiles */}
                        <div className="relative w-full max-w-sm">
                            {/* Animated Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-pink/20 blur-3xl animate-glow-pulse"></div>

                            {/* Metric Tiles - Smaller */}
                            <div className="relative grid grid-cols-1 gap-3">
                                {/* Metric 1 */}
                                <div className="glass-glow p-4 rounded-xl hover-lift text-center">
                                    <div className="text-3xl font-bold gradient-text animate-glow-pulse">85%</div>
                                    <div className="text-xs text-muted-foreground mt-1">Cost Reduction</div>
                                </div>

                                {/* Metric 2 */}
                                <div className="glass-glow p-4 rounded-xl hover-lift text-center" style={{ animationDelay: '0.2s' }}>
                                    <div className="text-3xl font-bold gradient-text animate-glow-pulse" style={{ animationDelay: '0.2s' }}>10x</div>
                                    <div className="text-xs text-muted-foreground mt-1">Faster Processing</div>
                                </div>

                                {/* Metric 3 */}
                                <div className="glass-glow p-4 rounded-xl hover-lift text-center" style={{ animationDelay: '0.4s' }}>
                                    <div className="text-3xl font-bold gradient-text animate-glow-pulse" style={{ animationDelay: '0.4s' }}>24/7</div>
                                    <div className="text-xs text-muted-foreground mt-1">Availability</div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button Below Animation */}
                        <button
                            onClick={() => {
                                const element = document.getElementById('contact');
                                element?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-white rounded-full font-semibold hover-lift shadow-glow transition-all"
                        >
                            Schedule Consultation
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
