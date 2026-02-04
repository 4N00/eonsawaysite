import type { Metadata } from "next";
import "./globals.css";
import CookieConsentBanner from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Eons Away - The Game",
  description: "Eons Away is an RPG focused on turn-based combat and progression. Explore Orya, a vibrant handpainted world full of mysteries and an incredible story.",
  keywords: ["Eons Away", "RPG", "turn-based combat", "indie game", "Nightward Games"],
  openGraph: {
    title: "Eons Away - The Game",
    description: "Eons Away is an RPG focused on turn-based combat and progression.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
