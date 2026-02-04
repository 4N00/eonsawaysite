export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : "https://eonsaway.com";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Eons Away?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eons Away is a hand-drawn JRPG developed by Nightward Games. It blends classic storytelling with modern combat mechanics, featuring a vibrant handpainted world called Orya filled with mysteries, memorable characters, and an incredible story.",
        },
      },
      {
        "@type": "Question",
        name: "When does Eons Away release?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The release date for Eons Away is currently TBA (To Be Announced). Join our newsletter or follow us on social media to be the first to know when we announce the release date.",
        },
      },
      {
        "@type": "Question",
        name: "What platforms will Eons Away be available on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eons Away will initially launch on PC via Steam. Console versions are planned to follow after the PC release.",
        },
      },
      {
        "@type": "Question",
        name: "What type of game is Eons Away?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eons Away is a turn-based JRPG with strategic combat, life simulation elements, and creature collection mechanics.",
        },
      },
      {
        "@type": "Question",
        name: "Is there multiplayer in Eons Away?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eons Away is a single-player experience focused on delivering a rich, narrative-driven adventure.",
        },
      },
      {
        "@type": "Question",
        name: "How long is Eons Away?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We're targeting 20+ hours of gameplay for a complete playthrough, with additional content for side quests, creature collection, and relationship building.",
        },
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nightward Games",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: [
      "https://twitter.com/NightwardGames",
      "https://discord.gg/nightwardgames",
      "https://www.youtube.com/@NightwardGames",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "anoo@nightwardgames.com",
      contactType: "customer support",
    },
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "Eons Away",
    description:
      "A hand-drawn JRPG blending classic storytelling with modern combat mechanics. Explore Orya, a vibrant handpainted world full of mysteries and an incredible story.",
    genre: ["JRPG", "Turn-based RPG", "Indie Game"],
    gamePlatform: ["PC", "Steam"],
    applicationCategory: "Game",
    operatingSystem: "Windows",
    author: {
      "@type": "Organization",
      name: "Nightward Games",
    },
    publisher: {
      "@type": "Organization",
      name: "Nightward Games",
    },
    image: `${siteUrl}/og-image.jpg`,
    url: siteUrl,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Eons Away",
    url: siteUrl,
    description:
      "Official website for Eons Away, a hand-drawn JRPG by Nightward Games.",
    publisher: {
      "@type": "Organization",
      name: "Nightward Games",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoGameSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
