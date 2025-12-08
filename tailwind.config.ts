import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                pink: {
                    DEFAULT: 'hsl(var(--pink))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                border: 'hsl(var(--border))',
            },
            backdropBlur: {
                xs: '2px',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'float': 'float 3s ease-in-out infinite',
                'shimmer': 'shimmer 2s infinite',
                'glow-pulse': 'glowPulse 2s ease-in-out infinite',
                'gradient-shift': 'gradientShift 8s ease infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' },
                },
                glowPulse: {
                    '0%, 100%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' },
                    '50%': { boxShadow: '0 0 40px hsl(var(--primary) / 0.6), 0 0 60px hsl(var(--accent) / 0.4)' },
                },
                gradientShift: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
            },
            boxShadow: {
                'glow': '0 0 20px hsl(var(--primary) / 0.3)',
                'glow-lg': '0 0 30px hsl(var(--primary) / 0.5), 0 0 60px hsl(var(--accent) / 0.3)',
            },
        },
    },
    plugins: [],
};

export default config;
