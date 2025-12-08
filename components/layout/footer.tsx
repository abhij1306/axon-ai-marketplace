export default function Footer() {
    return (
        <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-primary">Axon AI</h3>
                        <p className="text-sm text-muted-foreground">
                            The One-Stop Solution for AI & Business Transformation
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="/#marketplace" className="hover:text-foreground transition-colors">Marketplace</a></li>
                            <li><a href="/#solutions" className="hover:text-foreground transition-colors">Solutions</a></li>
                            <li><a href="/learning" className="hover:text-foreground transition-colors">Learning</a></li>
                            <li><a href="/#consulting" className="hover:text-foreground transition-colors">Consulting</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="/#about" className="hover:text-foreground transition-colors">About</a></li>
                            <li><a href="/#contact" className="hover:text-foreground transition-colors">Contact</a></li>
                            <li><a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a></li>
                            <li><a href="/terms" className="hover:text-foreground transition-colors">Terms</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">GitHub</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Axon AI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
