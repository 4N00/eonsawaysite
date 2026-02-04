import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description:
    "Find answers to common questions about Eons Away - release date, platforms, gameplay, system requirements, and more. Get all the information you need about this hand-drawn JRPG.",
  keywords: [
    "Eons Away FAQ",
    "Eons Away release date",
    "Eons Away platforms",
    "Eons Away Steam",
    "Eons Away gameplay",
    "Eons Away system requirements",
    "JRPG FAQ",
  ],
  openGraph: {
    title: "FAQ - Frequently Asked Questions | Eons Away",
    description:
      "Find answers about Eons Away - release date, platforms, gameplay, and more.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Frequently Asked Questions | Eons Away",
    description:
      "Find answers about Eons Away - release date, platforms, gameplay, and more.",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
