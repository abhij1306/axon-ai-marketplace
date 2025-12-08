'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/contexts/auth-context';

export default function LoginPage() {
    const router = useRouter();
    const { login } = useAuth();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to log in');
            }

            // Save session and redirect
            login(data.user);
            router.push('/');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSocialLogin = (provider: string) => {
        alert(`${provider} OAuth is not yet configured. Please use email login for now.`);
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12">
            <div className="container mx-auto">
                <div className="w-full max-w-md mx-auto">
                    <div className="glass-glow p-6 rounded-2xl">
                        <h1 className="text-2xl font-bold mb-4 text-center">Welcome Back</h1>

                        {error && (
                            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm">
                                {error}
                            </div>
                        )}

                        {/* Social Login Buttons */}
                        <div className="space-y-2 mb-4">
                            <button
                                onClick={() => handleSocialLogin('Google')}
                                className="w-full px-4 py-2.5 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-all flex items-center justify-center gap-2 border border-gray-300 text-sm"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                Continue with Google
                            </button>

                            <button
                                onClick={() => handleSocialLogin('Apple')}
                                className="w-full px-4 py-2.5 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition-all flex items-center justify-center gap-2 text-sm"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                </svg>
                                Continue with Apple
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="relative my-4">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-border"></div>
                            </div>
                            <div className="relative flex justify-center text-xs">
                                <span className="px-3 bg-background text-muted-foreground">Or continue with email</span>
                            </div>
                        </div>

                        {/* Email/Password Form */}
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div>
                                <label className="block text-xs font-medium mb-1.5">Email</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-3 py-2 text-sm bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium mb-1.5">Password</label>
                                <input
                                    type="password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full px-3 py-2 text-sm bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full px-4 py-2.5 gradient-primary text-white rounded-lg font-semibold hover-lift shadow-glow transition-all text-sm mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Logging in...' : 'Log In'}
                            </button>
                        </form>

                        <p className="text-center mt-4 text-xs text-muted-foreground">
                            Don't have an account?{' '}
                            <Link href="/signup" className="text-primary hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
