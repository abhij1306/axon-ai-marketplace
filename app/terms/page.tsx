import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Axon AI',
    description: 'Terms of service for Axon AI Marketplace',
};

export default function TermsPage() {
    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

                <div className="prose prose-invert max-w-none space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            By accessing and using Axon AI Marketplace, you accept and agree to be bound by the terms and provision of this agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Use License</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Permission is granted to temporarily access the materials on Axon AI Marketplace for personal, non-commercial transitory viewing only.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The materials on Axon AI Marketplace are provided on an 'as is' basis. Axon AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            For questions about these Terms, contact us at legal@axonai.com
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
