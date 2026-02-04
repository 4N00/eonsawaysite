"use client";

const features = [
  {
    icon: "⚔️",
    title: "Strategic Turn-Based Combat",
    description:
      "Manipulate a visual time bar to push enemies back, advance allies, and control the flow of battle with precise, timing-based inputs.",
  },
  {
    icon: "🌟",
    title: "Corruption & Cleansing",
    description:
      "Cleanse corruption from creatures, then choose to spare, pact, or destroy them. Corruption can spread to allies too, forcing tough moral and tactical choices.",
  },
  {
    icon: "🤝",
    title: "Soulpact Creature Collection",
    description:
      "Form pacts with cleansed creatures and summon them as allies. Each offers unique skills and progression, adding a collectible layer to combat.",
  },
  {
    icon: "📅",
    title: "Life Simulation Elements",
    description:
      "Modern JRPG-inspired slice of life, jobs, and relationship-building that impact combat abilities, character growth, and story outcomes.",
  },
  {
    icon: "⏳",
    title: "Exploration Across Time",
    description:
      "Travel through temporal portals into distinct eras and biomes, each with unique challenges and mysteries to uncover.",
  },
  {
    icon: "🎨",
    title: "Hand-Drawn World",
    description:
      "Every sprite, character, and environment is lovingly hand-drawn, creating a distinctive aesthetic that brings the world of Orya to life.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <div className="features-header">
          <span className="section-label">Core Features</span>
          <h2>What Makes Eons Away Unique</h2>
          <p>
            A blend of classic JRPG storytelling with innovative combat mechanics
            and meaningful player choice.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
