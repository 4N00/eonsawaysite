import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Eons Away and Nightward Games. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Eons Away",
    description:
      "Privacy Policy for Eons Away and Nightward Games. Learn how we handle your data.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Eons Away",
    description: "Privacy Policy for Eons Away and Nightward Games.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
