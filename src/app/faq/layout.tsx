import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Enterprise Knowledge Base | ARAVANTA TECH",
  description:
    "Explore candid answers regarding ARAVANTA TECH's cloud infrastructure consulting, software engineering capabilities, security paradigms, engagement models, and CloudOS initiatives.",
  openGraph: {
    title: "FAQ & Enterprise Knowledge Base | ARAVANTA TECH",
    description:
      "Direct answers on engineering methodologies, security protocols, SLAs, and engagement models for enterprise infrastructure.",
    type: "website",
    url: "https://aravanta.tech/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
