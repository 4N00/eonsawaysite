export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nightward Games",
    url: "https://eonsaway.com",
    logo: "https://eonsaway.com/logo.png",
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
    image: "https://eonsaway.com/og-image.jpg",
    url: "https://eonsaway.com",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Eons Away",
    url: "https://eonsaway.com",
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
