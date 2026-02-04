import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Creator Program",
  description:
    "Join the Eons Away Content Creator Program. Get early access, exclusive content, press kits, and direct support from Nightward Games.",
  openGraph: {
    title: "Content Creator Program | Eons Away",
    description:
      "Partner with Nightward Games to share the world of Orya with your audience. Get early access and exclusive content.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Creator Program | Eons Away",
    description:
      "Partner with Nightward Games to share the world of Orya with your audience.",
  },
};

export default function CreatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
