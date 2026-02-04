"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function CreatorsPage() {
  return (
    <main>
      <Navigation />
      <div className="creators-page">
        {/* Hero Section */}
        <section className="creators-hero">
          <div className="creators-hero-content">
            <span className="creators-label">Content Creator Program</span>
            <h1>Join the Eons Away Creator Program</h1>
            <p>
              Partner with us to share the world of Orya with your audience.
              Get early access, exclusive content, and support from our team.
            </p>
            <Link href="#apply" className="creators-cta">
              Apply Now
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className="creators-section creators-section-dark">
          <div className="creators-container">
            <div className="creators-section-header">
              <span className="creators-label">About the Game</span>
              <h2>Eons Away</h2>
            </div>
            <div className="creators-about-grid">
              <div className="creators-about-content">
                <p>
                  Eons Away is a hand-drawn JRPG blending classic storytelling
                  with modern combat mechanics. Explore Orya, a vibrant handpainted world
                  full of mysteries and an incredible story.
                </p>
                <p>
                  Follow the journey of our heroes as they uncover ancient secrets and
                  battle through a world where every frame is a work of art.
                </p>
                <div className="creators-stats">
                  <div className="stat">
                    <span className="stat-value">40+</span>
                    <span className="stat-label">Hours of Gameplay</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">100%</span>
                    <span className="stat-label">Hand-Drawn Art</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">TBA</span>
                    <span className="stat-label">Release Year</span>
                  </div>
                </div>
              </div>
              <div className="creators-about-details">
                <div className="detail-item">
                  <span className="detail-label">Developer</span>
                  <span className="detail-value">Nightward Games</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Genre</span>
                  <span className="detail-value">Turn-Based JRPG</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Platform</span>
                  <div className="detail-platforms">
                    <span className="detail-value">PC (Steam)</span>
                    <span className="detail-subtext">Consoles to follow</span>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Status</span>
                  <span className="detail-value">In Development</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="creators-section">
          <div className="creators-container">
            <div className="creators-section-header">
              <span className="creators-label">Why Join</span>
              <h2>Creator Benefits</h2>
            </div>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">01</div>
                <h3>Early Access</h3>
                <p>Get access to the game before public release to create content and share your experience.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">02</div>
                <h3>Exclusive Assets</h3>
                <p>Access to high-resolution artwork, logos, screenshots, and video assets for your content.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">03</div>
                <h3>Game Keys</h3>
                <p>Receive game keys for yourself and giveaways to engage your community.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">04</div>
                <h3>Direct Support</h3>
                <p>Get direct communication with our team for questions, feedback, and collaboration opportunities.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">05</div>
                <h3>Feature Opportunities</h3>
                <p>Potential to be featured on our official channels and social media platforms.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">06</div>
                <h3>Behind the Scenes</h3>
                <p>Exclusive access to development updates, concept art, and behind-the-scenes content.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Press Kit Section */}
        <section className="creators-section">
          <div className="creators-container">
            <div className="creators-section-header">
              <span className="creators-label">Resources</span>
              <h2>Press Kit</h2>
            </div>
            <p className="creators-section-desc">
              Download official assets for your content. All assets are free to use for
              coverage of Eons Away.
            </p>
            <div className="presskit-grid">
              <div className="presskit-card">
                <div className="presskit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
                <h3>Screenshots</h3>
                <p>High-resolution in-game screenshots</p>
                <span className="presskit-meta">12 images / PNG</span>
              </div>
              <div className="presskit-card">
                <div className="presskit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3>Logos & Branding</h3>
                <p>Official logos and brand assets</p>
                <span className="presskit-meta">8 files / SVG, PNG</span>
              </div>
              <div className="presskit-card">
                <div className="presskit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="2.18" />
                    <path d="M10 8l6 4-6 4V8z" />
                  </svg>
                </div>
                <h3>Video Assets</h3>
                <p>Trailers and b-roll footage</p>
                <span className="presskit-meta">3 videos / MP4</span>
              </div>
              <div className="presskit-card">
                <div className="presskit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <path d="M14 2v6h6" />
                    <path d="M16 13H8M16 17H8M10 9H8" />
                  </svg>
                </div>
                <h3>Fact Sheet</h3>
                <p>Game information and key features</p>
                <span className="presskit-meta">PDF document</span>
              </div>
            </div>
            <div className="presskit-download">
              <Link href="mailto:press@eonsaway.com" className="presskit-btn">
                Request Press Kit
              </Link>
              <p className="presskit-note">
                Contact us to receive the full press kit with all assets.
              </p>
            </div>
          </div>
        </section>

        {/* Apply Section */}
        <section className="creators-section creators-section-dark" id="apply">
          <div className="creators-container">
            <div className="creators-section-header">
              <span className="creators-label">Get Started</span>
              <h2>Apply to the Program</h2>
            </div>
            <p className="creators-section-desc">
              We welcome content creators of all sizes. Fill out the form below and
              we&apos;ll review your application.
            </p>
            <div className="apply-content">
              <div className="apply-requirements">
                <h3>Requirements</h3>
                <ul>
                  <li>Active presence on YouTube, Twitch, or other platforms</li>
                  <li>Interest in RPGs, JRPGs, or indie games</li>
                  <li>Original content creation</li>
                  <li>Respectful community engagement</li>
                </ul>
                <p className="apply-note">
                  We review all applications regardless of follower count. Quality and
                  passion matter more than numbers.
                </p>
              </div>
              <div className="apply-form-container">
                <div className="apply-form-placeholder">
                  <p>To apply, please send us an email with:</p>
                  <ul>
                    <li>Your channel/profile links</li>
                    <li>Brief description of your content</li>
                    <li>Why you&apos;re interested in Eons Away</li>
                  </ul>
                  <Link href="mailto:creators@eonsaway.com" className="apply-btn">
                    Apply via Email
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="creators-section">
          <div className="creators-container">
            <div className="creators-contact">
              <div className="contact-item">
                <h3>Press Inquiries</h3>
                <p>For press and media requests</p>
                <Link href="mailto:press@eonsaway.com">press@eonsaway.com</Link>
              </div>
              <div className="contact-divider"></div>
              <div className="contact-item">
                <h3>Creator Program</h3>
                <p>For content creator applications</p>
                <Link href="mailto:creators@eonsaway.com">creators@eonsaway.com</Link>
              </div>
              <div className="contact-divider"></div>
              <div className="contact-item">
                <h3>General Contact</h3>
                <p>For other inquiries</p>
                <Link href="mailto:anoo@nightwardgames.com">anoo@nightwardgames.com</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
