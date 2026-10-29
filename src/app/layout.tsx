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
  metadataBase: new URL("https://aravanta.tech"),
  icons: {
    icon: [
      { url: "/brand/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/brand/icon.png",
    apple: "/brand/icon.png",
  },
  openGraph: {
    title: "ARAVANTA TECH | Empowering Cloud Transformation",
    description:
      "Enterprise cloud solutions, scalable application engineering, automated GitOps pipelines, and zero-trust cybersecurity. Simpler. Safer. Smarter.",
    url: "https://aravanta.tech",
    siteName: "ARAVANTA TECH",
    images: [
      {
        url: "https://aravanta.tech/brand/primary-logo.png",
        secureUrl: "https://aravanta.tech/brand/primary-logo.png",
        width: 1200,
        height: 630,
        type: "image/png",
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
      "Enterprise cloud solutions, scalable application engineering, and zero-trust cybersecurity.",
    images: ["https://aravanta.tech/brand/primary-logo.png"],
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
        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/brand/icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/brand/icon.png" />
        <link rel="shortcut icon" href="/brand/icon.png" />
        <link rel="apple-touch-icon" href="/brand/icon.png" />

        {/* Explicit Social / WhatsApp OpenGraph Tags */}
        <meta property="og:site_name" content="ARAVANTA TECH" />
        <meta property="og:title" content="ARAVANTA TECH | Empowering Cloud Transformation" />
        <meta
          property="og:description"
          content="Enterprise cloud solutions, scalable application engineering, automated GitOps pipelines, and zero-trust cybersecurity. Simpler. Safer. Smarter."
        />
        <meta property="og:image" content="https://aravanta.tech/brand/primary-logo.png" />
        <meta property="og:image:secure_url" content="https://aravanta.tech/brand/primary-logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="https://aravanta.tech" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://aravanta.tech/brand/primary-logo.png" />
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
