"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const factSheet = [
  { label: "Developer", value: "Nightward Games" },
  { label: "Written by", value: 'Anouar "Anoo" Driouech' },
  { label: "Release Date", value: "TBA" },
  {
    label: "Platforms",
    value: "PC (Steam), PlayStation, Xbox, Nintendo Switch",
  },
  { label: "Genre", value: "Turn-Based JRPG" },
  { label: "Playtime", value: "20-25 hours" },
  { label: "Price", value: "TBA" },
  { label: "Development", value: "6+ years solo development" },
];

const features = [
  {
    title: "Corruption & Cleansing",
    description:
      "Every character has a corruption gauge. Cleanse corrupted enemies to form pacts, or embrace darkness for power at a moral cost.",
  },
  {
    title: "Strategic Combat",
    description:
      "Turn-based battles with a visible time bar for strategic manipulation. Action commands boost attacks, defense, and skills.",
  },
  {
    title: "Soulpact System",
    description:
      "Form pacts with cleansed creatures and summon them as allies. Each offers unique skills and progression paths.",
  },
  {
    title: "Emotional Storytelling",
    description:
      "Inspired by Final Fantasy and Studio Ghibli. A heartfelt narrative centered on Aris's quest to save his brother.",
  },
  {
    title: "Hand-Drawn World",
    description:
      "100% hand-illustrated characters, environments, and creatures. Every frame is lovingly crafted artwork.",
  },
  {
    title: "Life Simulation",
    description:
      "Day/night cycle with social bonds, jobs, fishing, cooking, and training. Your choices shape combat and story.",
  },
];

const influences = [
  {
    game: "Final Fantasy Series",
    aspect: "Narrative structure & character dynamics",
  },
  { game: "Ni No Kuni", aspect: "Art style & emotional storytelling" },
  {
    game: "Persona 5",
    aspect:
      "Battle system, capturing creatures, bond system, slice of life elements",
  },
  {
    game: "Metaphor ReFantazio",
    aspect: "Battle system, map & travel mechanics",
  },
  {
    game: "Chrono Trigger",
    aspect: "Time travel mechanics & impact on gameplay",
  },
  {
    game: "The Legend of Zelda",
    aspect: "Exploration & puzzle-solving elements",
  },
  { game: "Fable", aspect: "Good vs evil protagonist system" },
];

const screenshots = [
  { 
    id: 1, 
    src: "/assets/img/eons-away-combat-battle-gameplay.png",
    alt: "Eons Away strategic turn-based combat with corruption mechanics and time manipulation",
    title: "Strategic Combat"
  },
  { 
    id: 2, 
    src: "/assets/img/eons-away-boss-fight-creature.png",
    alt: "Eons Away boss battle featuring corrupted creature and Soulpact system",
    title: "Boss Encounter"
  },
  { 
    id: 3, 
    src: "/assets/img/eons-away-story-dialogue-character.png",
    alt: "Eons Away narrative storytelling with hand-drawn character dialogue",
    title: "Story Moment"
  },
  { 
    id: 4, 
    src: "/assets/img/eons-away-town-village-npcs.png",
    alt: "Eons Away village exploration with NPCs and relationship building",
    title: "Village Life"
  },
  { 
    id: 5, 
    src: "/assets/img/eons-away-dragon-boss-battle.png",
    alt: "Eons Away dragon boss fight showcasing turn-based JRPG combat",
    title: "Dragon Boss"
  },
  { 
    id: 6, 
    src: "/assets/img/eons-away-world-exploration-wasteland.png",
    alt: "Eons Away wasteland exploration in handpainted world of Orya",
    title: "World Exploration"
  },
];

const brandingAssets = [
  { name: "Logo (Light)", format: "PNG", size: "2MB" },
  { name: "Logo (Dark)", format: "PNG", size: "2MB" },
  { name: "Logo (SVG)", format: "SVG", size: "50KB" },
  { name: "Key Art", format: "PNG", size: "5MB" },
];

export default function PressKitPage() {
  return (
    <main>
      <Navigation />
      <div className="presskit-page">
        {/* Hero Section */}
        <section className="presskit-hero">
          <div className="presskit-hero-content">
            <span className="presskit-label">Media Resources</span>
            <h1>Press Kit</h1>
            <p>
              Official media resources for Eons Away. Everything journalists,
              content creators, and media outlets need to cover our game.
            </p>
            <Link href="mailto:press@eonsaway.com" className="presskit-cta">
              Request Full Press Kit
            </Link>
          </div>
        </section>

        {/* Fact Sheet Section */}
        <section className="presskit-section presskit-section-dark">
          <div className="presskit-container">
            <div className="presskit-section-header">
              <span className="presskit-label">Quick Reference</span>
              <h2>Fact Sheet</h2>
            </div>
            <div className="factsheet-grid">
              {factSheet.map((item, index) => (
                <div className="factsheet-item" key={index}>
                  <span className="factsheet-label">{item.label}</span>
                  <span className="factsheet-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Game Overview Section */}
        <section className="presskit-section">
          <div className="presskit-container">
            <div className="presskit-section-header">
              <span className="presskit-label">About the Game</span>
              <h2>Overview</h2>
            </div>
            <div className="overview-content">
              <p>
                <strong>Eons Away</strong> is a hand-drawn, turn-based JRPG
                blending classic storytelling with modern combat mechanics. You
                play as Aris, who leaps into a rift after his younger brother,
                only to awaken a thousand years in the future.
              </p>
              <p>
                Because of time distortion, his brother has grown older,
                hardened by survival, and ultimately becomes the game&apos;s
                antagonist. At its heart is a unique corruption and cleansing
                system: cleanse creatures to form pacts with them, or sacrifice
                them for power at a moral cost.
              </p>
              <p>
                These choices shape combat, relationships, and the story&apos;s
                outcome. The goal is a 20-25 hour story-driven adventure that
                feels both nostalgic and fresh, set in the vibrant, handpainted
                world of Orya.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="presskit-section presskit-section-dark">
          <div className="presskit-container">
            <div className="presskit-section-header">
              <span className="presskit-label">What Makes It Unique</span>
              <h2>Key Features</h2>
            </div>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div className="feature-card" key={index}>
                  <div className="feature-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section className="presskit-section">
          <div className="presskit-container">
            <div className="presskit-section-header">
              <span className="presskit-label">Visuals</span>
              <h2>Screenshots</h2>
            </div>
            <p className="presskit-section-desc">
              High-resolution screenshots available for press use. Contact us
              for additional assets.
            </p>
            <div className="screenshots-grid">
              {screenshots.map((screenshot) => (
                <div className="screenshot-item" key={screenshot.id}>
                  <img 
                    src={screenshot.src} 
                    alt={screenshot.alt}
                    loading="lazy"
                    width="1920"
                    height="1080"
                  />
                  <div className="screenshot-title">{screenshot.title}</div>
                </div>
              ))}
            </div>
            <div className="screenshots-cta">
              <Link href="mailto:press@eonsaway.com" className="presskit-btn">
                Request High-Res Screenshots
              </Link>
            </div>
          </div>
        </section>

        {/* Influences Section */}
        <section className="presskit-section presskit-section-dark">
          <div className="presskit-container">
            <div className="presskit-section-header">
              <span className="presskit-label">Inspiration</span>
              <h2>Influences</h2>
            </div>
            <p className="presskit-section-desc">
              Eons Away draws inspiration from beloved classics and modern
              masterpieces.
            </p>
            <div className="influences-grid">
              {influences.map((influence, index) => (
                <div className="influence-item" key={index}>
                  <span className="influence-game">{influence.game}</span>
                  <span className="influence-aspect">{influence.aspect}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Logo & Branding Section */}
        <section className="presskit-section">
          <div className="presskit-container">
            <div className="presskit-section-header">
              <span className="presskit-label">Brand Assets</span>
              <h2>Logos & Branding</h2>
            </div>
            <p className="presskit-section-desc">
              Official logos and branding assets for media use.
            </p>
            <div className="branding-grid">
              {brandingAssets.map((asset, index) => (
                <div className="branding-card" key={index}>
                  <div className="branding-preview">
                    <span>Preview</span>
                  </div>
                  <div className="branding-info">
                    <h4>{asset.name}</h4>
                    <span className="branding-meta">
                      {asset.format} / {asset.size}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="branding-cta">
              <Link href="mailto:press@eonsaway.com" className="presskit-btn">
                Request Brand Assets
              </Link>
            </div>
          </div>
        </section>

        {/* About the Developer Section */}
        <section className="presskit-section presskit-section-dark">
          <div className="presskit-container">
            <div className="presskit-section-header">
              <span className="presskit-label">The Studio</span>
              <h2>About Nightward Games</h2>
            </div>
            <div className="developer-content">
              <p>
                <strong>Nightward Games</strong> is an independent game studio
                founded by Anouar &quot;Anoo&quot; Driouech. Eons Away
                represents over 6 years of passionate solo development, with an
                estimated 1.5 years remaining until release.
              </p>
              <p>
                Every aspect of the game—from the hand-drawn art to the
                intricate combat systems—has been crafted with dedication to
                creating a meaningful JRPG experience that honors the classics
                while bringing fresh ideas to the genre.
              </p>
              <div className="developer-stats">
                <div className="dev-stat">
                  <span className="dev-stat-value">6+</span>
                  <span className="dev-stat-label">Years in Development</span>
                </div>
                <div className="dev-stat">
                  <span className="dev-stat-value">1</span>
                  <span className="dev-stat-label">Solo Developer</span>
                </div>
                <div className="dev-stat">
                  <span className="dev-stat-value">100%</span>
                  <span className="dev-stat-label">Hand-Drawn Art</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="presskit-section">
          <div className="presskit-container">
            <div className="presskit-section-header">
              <span className="presskit-label">Get in Touch</span>
              <h2>Contact</h2>
            </div>
            <div className="contact-grid">
              <div className="contact-card">
                <h3>Press Inquiries</h3>
                <p>For media coverage, review copies, and interviews</p>
                <Link href="mailto:press@eonsaway.com">press@eonsaway.com</Link>
              </div>
              <div className="contact-card">
                <h3>General Contact</h3>
                <p>For all other inquiries</p>
                <Link href="mailto:anoo@nightwardgames.com">
                  anoo@nightwardgames.com
                </Link>
              </div>
              <div className="contact-card">
                <h3>Social Media</h3>
                <p>Follow for updates and behind-the-scenes</p>
                <div className="contact-social">
                  <Link
                    href="https://twitter.com/eonsawaygame"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </Link>
                  <Link
                    href="https://discord.gg/4Z8QZ9Z"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discord
                  </Link>
                  <Link
                    href="https://youtube.com/@eonsawaygame"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
