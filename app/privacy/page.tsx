import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Axon AI',
    description: 'Privacy policy for Axon AI Marketplace',
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

                <div className="prose prose-invert max-w-none space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We collect information you provide directly to us, including name, email address, and any other information you choose to provide.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            If you have any questions about this Privacy Policy, please contact us at privacy@axonai.com
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
