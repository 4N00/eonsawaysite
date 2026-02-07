"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "What is Eons Away?",
    answer:
      "Eons Away is a hand-drawn JRPG developed by Nightward Games. It blends classic storytelling with modern combat mechanics, featuring a vibrant handpainted world called Orya filled with mysteries, memorable characters, and an incredible story.",
  },
  {
    question: "When does Eons Away release?",
    answer:
      "The release date for Eons Away is currently TBA (To Be Announced). We're focused on delivering a polished experience. Join our newsletter or follow us on social media to be the first to know when we announce the release date.",
  },
  {
    question: "What platforms will Eons Away be available on?",
    answer:
      "Eons Away will initially launch on PC via Steam. Console versions are planned to follow after the PC release. You can wishlist the game on Steam now to be notified when it launches.",
  },
  {
    question: "What type of game is Eons Away?",
    answer:
      "Eons Away is a turn-based JRPG with strategic combat, life simulation elements, and creature collection mechanics. It features a unique time bar system for combat, corruption and cleansing mechanics, and Soulpact creature summoning.",
  },
  {
    question: "Is there multiplayer in Eons Away?",
    answer:
      "Eons Away is a single-player experience focused on delivering a rich, narrative-driven adventure. The game is designed to be enjoyed at your own pace with deep character relationships and story choices.",
  },
  {
    question: "How long is Eons Away?",
    answer:
      "We're targeting 20+ hours of gameplay for a complete playthrough, with additional content for players who want to explore everything the world of Orya has to offer, including side quests, creature collection, and relationship building.",
  },
  {
    question: "What are the system requirements?",
    answer:
      "System requirements will be announced closer to release. As a 2D hand-drawn game, Eons Away is being developed to run smoothly on a wide range of PC hardware. Stay tuned for detailed specifications.",
  },
  {
    question: "Can I stream or create content about Eons Away?",
    answer:
      "Absolutely! We love content creators and have a dedicated Creator Program. Visit our Creators page to learn about early access, exclusive assets, and partnership opportunities.",
  },
  {
    question: "How can I support the development?",
    answer:
      "The best way to support us right now is to wishlist Eons Away on Steam, follow us on social media, and spread the word! Your wishlists help us tremendously and show your interest in the game.",
  },
  {
    question: "Where can I follow development updates?",
    answer:
      "Follow us on Twitter/X, join our Discord community, subscribe to our YouTube channel for devlogs, and sign up for our newsletter. We regularly share development progress, behind-the-scenes content, and announcements.",
  },
];

export default function FAQPage() {
  return (
    <main>
      <Navigation />
      <div className="faq-page">
        {/* Hero Section */}
        <section className="faq-hero">
          <div className="faq-hero-content">
            <span className="faq-label">Support</span>
            <h1>Frequently Asked Questions</h1>
            <p>
              Everything you need to know about Eons Away. Can&apos;t find the answer
              you&apos;re looking for? Feel free to reach out to us.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="faq-section">
          <div className="faq-container">
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                  <h2 className="faq-question">{faq.question}</h2>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="faq-section faq-section-dark">
          <div className="faq-container">
            <div className="faq-cta">
              <h2>Still have questions?</h2>
              <p>
                We&apos;re here to help. Reach out to us directly or join our community
                to connect with other fans and the development team.
              </p>
              <div className="faq-cta-buttons">
                <Link href="mailto:anoo@nightwardgames.com" className="faq-btn faq-btn-primary">
                  Contact Us
                </Link>
                <Link href="https://discord.gg/CesHW7HYw2" target="_blank" rel="noopener noreferrer" className="faq-btn faq-btn-secondary">
                  Join Discord
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
