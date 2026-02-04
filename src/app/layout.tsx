import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import CookieConsentBanner from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StructuredData from "@/components/StructuredData";

const siteUrl = "https://eonsaway.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Eons Away - Hand-Drawn JRPG by Nightward Games",
    template: "%s | Eons Away",
  },
  description:
    "Eons Away is a hand-drawn JRPG blending classic storytelling with modern combat mechanics. Explore Orya, a vibrant handpainted world full of mysteries and an incredible story.",
  keywords: [
    "Eons Away",
    "JRPG",
    "RPG",
    "turn-based combat",
    "indie game",
    "Nightward Games",
    "hand-drawn",
    "pixel art",
    "Steam",
    "PC game",
  ],
  authors: [{ name: "Nightward Games" }],
  creator: "Nightward Games",
  publisher: "Nightward Games",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Eons Away",
    title: "Eons Away - Hand-Drawn JRPG by Nightward Games",
    description:
      "A hand-drawn JRPG blending classic storytelling with modern combat mechanics. Explore Orya, a vibrant handpainted world.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eons Away - Hand-Drawn JRPG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eons Away - Hand-Drawn JRPG by Nightward Games",
    description:
      "A hand-drawn JRPG blending classic storytelling with modern combat mechanics.",
    images: ["/og-image.jpg"],
    creator: "@NightwardGames",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  other: {
    "theme-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        {children}
        <CookieConsentBanner />
        <GoogleAnalytics />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
