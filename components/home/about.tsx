export default function About() {
    return (
        <section id="about" className="py-20 bg-muted/20">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in-up">
                    <div className="inline-block px-4 py-2 glass-glow rounded-full text-sm text-primary mb-4">
                        About Us
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Revolutionizing Business with <span className="gradient-text">AI</span>
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        We are a team of AI researchers, engineers, and strategists dedicated to making
                        enterprise-grade artificial intelligence accessible, secure, and impactful.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="glass-glow p-8 rounded-2xl text-center hover-lift animate-scale-in" style={{ animationDelay: '0.1s' }}>
                        <div className="text-5xl font-bold gradient-text mb-2">500+</div>
                        <div className="text-muted-foreground">Enterprise Clients</div>
                    </div>
                    <div className="glass-glow p-8 rounded-2xl text-center hover-lift animate-scale-in" style={{ animationDelay: '0.2s' }}>
                        <div className="text-5xl font-bold gradient-text mb-2">98%</div>
                        <div className="text-muted-foreground">CSAT Score</div>
                    </div>
                    <div className="glass-glow p-8 rounded-2xl text-center hover-lift animate-scale-in" style={{ animationDelay: '0.3s' }}>
                        <div className="text-5xl font-bold gradient-text mb-2">24/7</div>
                        <div className="text-muted-foreground">Expert Support</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
