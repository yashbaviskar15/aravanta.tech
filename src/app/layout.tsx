import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ARAVANTA TECH | Empowering Cloud Transformation",
    template: "%s | ARAVANTA TECH",
  },
  description:
    "ARAVANTA TECH helps businesses simplify technology, modernize digital infrastructure, develop scalable applications, and explore cloud solutions with Aravanta CloudOS. Simpler. Safer. Smarter.",
  keywords: [
    "ARAVANTA TECH",
    "Cloud Solutions",
    "Digital Transformation",
    "Application Development",
    "IT Infrastructure",
    "DevOps Automation",
    "Cybersecurity",
    "IT Consulting",
    "Aravanta CloudOS",
    "Cloud Migration",
    "Enterprise Architecture",
  ],
  authors: [{ name: "ARAVANTA TECH" }],
  creator: "ARAVANTA TECH",
  metadataBase: new URL("https://aravantatech.com"),
  icons: {
    icon: [
      { url: "/brand/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/brand/icon.png",
  },
  openGraph: {
    title: "ARAVANTA TECH | Empowering Cloud Transformation",
    description:
      "Modern technology consulting, cloud architecture, and software engineering. Build Smarter. Grow Faster.",
    url: "https://aravantatech.com",
    siteName: "ARAVANTA TECH",
    images: [
      {
        url: "/brand/primary-logo.png",
        width: 1536,
        height: 1536,
        alt: "ARAVANTA TECH - Empowering Cloud Transformation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARAVANTA TECH | Empowering Cloud Transformation",
    description:
      "Modern cloud architecture, software engineering, and digital transformation.",
    images: ["/brand/primary-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#090a0d" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-brand-dark text-white min-h-screen flex flex-col antialiased selection:bg-brand-gold/20 selection:text-brand-gold`}
      >
        {/* Skip to main content landmark for keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-brand-gold text-brand-dark font-bold rounded shadow-lg"
        >
          Skip to main content
        </a>

        <CustomCursor />
        <ScrollProgress />
        <Navbar />

        <main id="main-content" className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
