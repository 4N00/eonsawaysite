import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press Kit - Media Resources",
  description:
    "Official press kit for Eons Away. Download logos, screenshots, and media assets. A hand-drawn JRPG inspired by Final Fantasy, Persona, and Chrono Trigger.",
  keywords: [
    "Eons Away press kit",
    "Eons Away media",
    "JRPG press kit",
    "Nightward Games press",
    "indie game press kit",
    "Eons Away screenshots",
    "Eons Away logo",
  ],
  openGraph: {
    title: "Press Kit | Eons Away",
    description:
      "Official press kit for Eons Away. Download logos, screenshots, and media assets for coverage.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Press Kit | Eons Away",
    description:
      "Official press kit for Eons Away. Download logos, screenshots, and media assets.",
  },
};

export default function PressKitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
