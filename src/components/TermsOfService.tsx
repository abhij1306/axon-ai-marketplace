import React from 'react';
import '../styles/Legal.scss';

const TermsOfService: React.FC = () => {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <h1>Terms of Service</h1>
                <span className="last-updated">Last Updated: December 7, 2025</span>

                <section>
                    <h2>1. Acceptance of Terms</h2>
                    <p>By accessing or using the Axon AI Marketplace, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
                </section>

                <section>
                    <h2>2. Use License</h2>
                    <p>Permission is granted to temporarily download one copy of the materials (information or software) on Axon AI's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                    <ul>
                        <li>modify or copy the materials;</li>
                        <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                        <li>attempt to decompile or reverse engineer any software contained on Axon AI's website;</li>
                        <li>remove any copyright or other proprietary notations from the materials; or</li>
                        <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                    </ul>
                </section>

                <section>
                    <h2>3. Disclaimer</h2>
                    <p>The materials on Axon AI's website are provided on an 'as is' basis. Axon AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                </section>

                <section>
                    <h2>4. Limitations</h2>
                    <p>In no event shall Axon AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Axon AI's website, even if Axon AI or an Axon AI authorized representative has been notified orally or in writing of the possibility of such damage.</p>
                </section>

                <section>
                    <h2>5. Governing Law</h2>
                    <p>These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
                </section>
            </div>
        </div>
    );
};

export default TermsOfService;
