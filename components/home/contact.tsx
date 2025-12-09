'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setSuccess(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-background">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div className="animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Ready to <span className="gradient-text">Transform?</span>
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            Get in touch with our solution architects to discuss your specific needs.
                            We help you navigate the AI landscape with confidence.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 p-4 glass-panel rounded-lg hover-lift">
                                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                                    <span className="text-white text-xl">✉</span>
                                </div>
                                <div>
                                    <strong className="block text-sm text-muted-foreground">Email</strong>
                                    <span>abhij1306@gmail.com</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 glass-panel rounded-lg hover-lift">
                                <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center">
                                    <span className="text-white text-xl">📞</span>
                                </div>
                                <div>
                                    <strong className="block text-sm text-muted-foreground">Phone</strong>
                                    <span>+91 8999635679</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 glass-panel rounded-lg hover-lift">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink to-accent flex items-center justify-center">
                                    <span className="text-white text-xl">📍</span>
                                </div>
                                <div>
                                    <strong className="block text-sm text-muted-foreground">Location</strong>
                                    <span>Bhopal, India</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-glow p-8 rounded-2xl animate-scale-in">
                        <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

                        {error && (
                            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm">
                                {error}
                            </div>
                        )}

                        {success && (
                            <div className="mb-4 p-3 bg-green-500/10 border border-green-500/50 rounded-lg text-green-500 text-sm">
                                Message sent successfully! We'll get back to you soon.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={5}
                                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full px-6 py-3 gradient-primary text-white rounded-lg font-semibold hover-lift shadow-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
