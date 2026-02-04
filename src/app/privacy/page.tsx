"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main>
      <Navigation />
      <div className="privacy-policy">
        <div className="privacy-container">
          <h1>Privacy Policy</h1>
          <p className="privacy-intro">
            Welcome to Nightward Games' privacy policy for Eons Away.
          </p>
          <p>
            We respect your privacy and are committed to protecting your personal data. This policy explains how we ("Nightward Games", "we", "us", or "our") handle your information when you visit our website, play our game, or interact with our services.
          </p>

          <section>
            <h2>1. Who We Are</h2>
            <p>
              Nightward Games is an independent game studio developing Eons Away, a hand-drawn JRPG. This privacy policy applies to our website (eonsaway.com), our game distributed through platforms like Steam, and any related services we provide.
            </p>
            <p>
              <strong>Contact us:</strong><br />
              Email: <Link href="mailto:anoo@nightwardgames.com">anoo@nightwardgames.com</Link>
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Contact Information:</strong> Your email address if you sign up for our newsletter or contact us.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and general location when you visit our website.</li>
              <li><strong>Usage Data:</strong> How you interact with our website and game, including pages visited and features used.</li>
              <li><strong>Communications:</strong> Any messages or feedback you send us.</li>
            </ul>
            <p>
              We do not collect sensitive personal information such as financial details, health data, or government IDs through our website or game.
            </p>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Send you newsletters and updates about Eons Away (if you've signed up)</li>
              <li>Respond to your questions and feedback</li>
              <li>Improve our website and game based on usage patterns</li>
              <li>Analyze website traffic and performance</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>4. Cookies & Analytics</h2>
            <p>
              Our website may use cookies and similar technologies to enhance your experience and understand how visitors use our site. You can control cookies through your browser settings.
            </p>
            <p>
              We may use analytics services (like Google Analytics) to understand website traffic. These services collect anonymous data about your visit.
            </p>
          </section>

          <section>
            <h2>5. Third-Party Services</h2>
            <p>
              Our website and game may link to third-party services including:
            </p>
            <ul>
              <li>Steam (for game distribution and purchases)</li>
              <li>Discord (for community)</li>
              <li>Social media platforms (Twitter/X, Instagram, YouTube)</li>
            </ul>
            <p>
              These services have their own privacy policies, and we encourage you to review them. We are not responsible for their privacy practices.
            </p>
          </section>

          <section>
            <h2>6. Data Sharing</h2>
            <p>
              We don't sell your personal information. We may share data with:
            </p>
            <ul>
              <li>Service providers who help us operate our website and services</li>
              <li>Analytics providers to understand website usage</li>
              <li>Legal authorities if required by law</li>
            </ul>
          </section>

          <section>
            <h2>7. Data Security</h2>
            <p>
              We take reasonable measures to protect your information from unauthorized access, loss, or misuse. However, no internet transmission is completely secure, so we can't guarantee absolute security.
            </p>
          </section>

          <section>
            <h2>8. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent where applicable</li>
            </ul>
            <p>
              To exercise these rights, contact us at <Link href="mailto:anoo@nightwardgames.com">anoo@nightwardgames.com</Link>.
            </p>
          </section>

          <section>
            <h2>9. Children's Privacy</h2>
            <p>
              Our services are not directed at children under 13. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us so we can remove it.
            </p>
          </section>

          <section>
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We'll post any changes on this page with an updated date. Your continued use of our services after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2>11. Contact Us</h2>
            <p>
              If you have questions about this privacy policy or how we handle your data, please contact us:
            </p>
            <p>
              <strong>Nightward Games</strong><br />
              Email: <Link href="mailto:anoo@nightwardgames.com">anoo@nightwardgames.com</Link>
            </p>
          </section>

          <p className="privacy-updated">
            <em>Last updated: February 2025</em>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
