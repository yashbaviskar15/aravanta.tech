"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  ChevronDown,
  ArrowUpRight,
  FileCheck,
  ArrowUp,
  Sparkles,
  Activity,
  Server,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      if ((window as any).__lenis) {
        (window as any).__lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const exploreLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Capabilities", href: "/technology" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Solutions", href: "/solutions" },
    { label: "Careers", href: "/careers" },
    { label: "FAQ", href: "/faq" },
  ];

  const serviceLinks = [
    { label: "Cloud Solutions", href: "/services/cloud-solutions" },
    { label: "Application Dev", href: "/services/application-development" },
    { label: "IT Infrastructure", href: "/services/it-infrastructure" },
    { label: "DevOps & GitOps", href: "/services/devops-automation" },
    { label: "Cybersecurity", href: "/services/cybersecurity" },
    { label: "Modernization", href: "/services/digital-transformation" },
    { label: "Architecture Review", href: "/services/it-consulting" },
  ];

  const platformLinks = [
    { label: "Aravanta CloudOS", href: "/cloudos", badge: "Preview" },
    { label: "Architecture Explorer", href: "/cloudos#architecture" },
    { label: "Platform Roadmap", href: "/cloudos#roadmap" },
    { label: "Request Briefing", href: "/contact?interest=CloudOS", external: true },
  ];

  const trustLinks = [
    { label: "Trust Center", href: "/security", icon: ShieldCheck },
    { label: "SLA (99.999%)", href: "/sla", icon: FileCheck },
    { label: "Compliance", href: "/compliance" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ];

  return (
    <footer
      className="relative z-30 bg-[#05070a] border-t border-white/10 text-zinc-400 pt-10 sm:pt-16 pb-8 shadow-2xl"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Aravanta Tech Footer
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Live Global Operations Telemetry Ticker */}
        <div className="mb-10 sm:mb-14 p-3 sm:p-4 rounded-2xl bg-[#0a0d15] border border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-white font-bold uppercase tracking-wider">
              OPERATIONAL STATUS:
            </span>
            <span className="text-emerald-400 font-semibold">ALL SYSTEMS NOMINAL (99.999% SLA)</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-zinc-400">
            <div className="flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-[#d4a342]" />
              <span>REGIONS: US-EAST • EU-CENTRAL • AP-SOUTH</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>p99 LATENCY: &lt;12ms</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>ZERO-TRUST: ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Main Grid: Desktop 6-col / Mobile Compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-10 mb-8 sm:mb-14">
          
          {/* Brand & Mission Column */}
          <div className="md:col-span-3 lg:col-span-2 space-y-3.5 pr-0 lg:pr-4">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-lg group"
                aria-label="ARAVANTA TECH Home"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#ffffff] via-[#f4f4f6] to-[#d8dade] p-1 border border-brand-gold/60 shadow-sm flex items-center justify-center shrink-0">
                  <Image
                    src="/brand/icon.png"
                    alt="Aravanta Tech Emblem"
                    width={28}
                    height={28}
                    className="object-contain w-full h-full"
                  />
                </div>
                <span className="font-extrabold text-base tracking-tight text-white font-mono">
                  ARAVANTA<span className="text-brand-gold ml-0.5">TECH</span>
                </span>
              </Link>

              {/* Mobile Back To Top Shortcut */}
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="md:hidden flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-white px-2.5 py-1 rounded-full bg-white/5 border border-white/10 transition-colors"
              >
                <span>Top</span>
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Empowering Cloud Transformation through pragmatic engineering,
              resilient distributed architecture, and zero-compromise security standards.
            </p>

            <div className="pt-1 flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0d0f15] border border-white/10 text-[11px] sm:text-xs text-brand-gold font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Simpler. Safer. Smarter.</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0d0f15] border border-white/10 text-[11px] sm:text-xs text-zinc-300 font-mono">
                <span>Build Smarter. Grow Faster.</span>
              </div>
            </div>

            <div className="text-[11px] text-zinc-400 font-mono pt-1">
              <span className="text-zinc-500">Practice:</span> Cloud &amp; Distributed Systems Engineering
            </div>
          </div>

          {/* Desktop Link Columns (Visible on md and up) */}
          <div className="hidden md:block col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-3 font-mono border-b border-white/10 pb-1.5">
              Explore
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm" role="list">
              {exploreLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-3 font-mono border-b border-white/10 pb-1.5">
              Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm" role="list">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors duration-200 block py-0.5 truncate"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-3 font-mono border-b border-white/10 pb-1.5">
              Platform
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm" role="list">
              {platformLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors duration-200 flex items-center justify-between py-0.5"
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[9px] bg-brand-gold/15 text-brand-gold px-1.5 py-0.5 rounded font-mono border border-brand-gold/30">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-3 font-mono border-b border-white/10 pb-1.5">
              Trust &amp; Legal
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm" role="list">
              {trustLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors duration-200 block py-0.5 truncate"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Accordion Nav (Visible only below md) */}
          <div className="md:hidden col-span-1 space-y-2 pt-2">
            {/* Explore Accordion */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
              <button
                type="button"
                onClick={() => toggleSection("explore")}
                className="w-full flex items-center justify-between p-3.5 text-xs font-mono font-bold uppercase tracking-wider text-white text-left focus:outline-none"
              >
                <span>Explore ({exploreLinks.length})</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-zinc-400 transition-transform duration-200",
                    openSection === "explore" && "rotate-180 text-brand-gold"
                  )}
                />
              </button>
              {openSection === "explore" && (
                <div className="px-3.5 pb-3 pt-1 grid grid-cols-2 gap-2 text-xs border-t border-white/5">
                  {exploreLinks.map((item) => (
                    <Link
                      key={`mob-${item.href}`}
                      href={item.href}
                      className="text-zinc-400 hover:text-brand-gold py-1"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services Accordion */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
              <button
                type="button"
                onClick={() => toggleSection("services")}
                className="w-full flex items-center justify-between p-3.5 text-xs font-mono font-bold uppercase tracking-wider text-white text-left focus:outline-none"
              >
                <span>Services ({serviceLinks.length})</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-zinc-400 transition-transform duration-200",
                    openSection === "services" && "rotate-180 text-brand-gold"
                  )}
                />
              </button>
              {openSection === "services" && (
                <div className="px-3.5 pb-3 pt-1 grid grid-cols-2 gap-2 text-xs border-t border-white/5">
                  {serviceLinks.map((item) => (
                    <Link
                      key={`mob-${item.href}`}
                      href={item.href}
                      className="text-zinc-400 hover:text-brand-gold py-1"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Platform Accordion */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
              <button
                type="button"
                onClick={() => toggleSection("platform")}
                className="w-full flex items-center justify-between p-3.5 text-xs font-mono font-bold uppercase tracking-wider text-white text-left focus:outline-none"
              >
                <span>Platform ({platformLinks.length})</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-zinc-400 transition-transform duration-200",
                    openSection === "platform" && "rotate-180 text-brand-gold"
                  )}
                />
              </button>
              {openSection === "platform" && (
                <div className="px-3.5 pb-3 pt-1 space-y-1.5 text-xs border-t border-white/5">
                  {platformLinks.map((item) => (
                    <Link
                      key={`mob-${item.href}`}
                      href={item.href}
                      className="text-zinc-400 hover:text-brand-gold py-1 flex items-center justify-between"
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="text-[9px] bg-brand-gold/15 text-brand-gold px-1.5 py-0.2 rounded font-mono border border-brand-gold/30">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Trust & Legal Accordion */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
              <button
                type="button"
                onClick={() => toggleSection("trust")}
                className="w-full flex items-center justify-between p-3.5 text-xs font-mono font-bold uppercase tracking-wider text-white text-left focus:outline-none"
              >
                <span>Trust &amp; Legal ({trustLinks.length})</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-zinc-400 transition-transform duration-200",
                    openSection === "trust" && "rotate-180 text-brand-gold"
                  )}
                />
              </button>
              {openSection === "trust" && (
                <div className="px-3.5 pb-3 pt-1 grid grid-cols-2 gap-2 text-xs border-t border-white/5">
                  {trustLinks.map((item) => (
                    <Link
                      key={`mob-${item.href}`}
                      href={item.href}
                      className="text-zinc-400 hover:text-brand-gold py-1"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Enterprise Commitment Banner */}
        <div className="border-t border-white/10 pt-5 pb-5 text-xs text-zinc-400">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#0a0d14] border border-white/10 shadow-lg">
            <div className="flex items-start sm:items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
              <span className="leading-relaxed text-[11px] sm:text-xs">
                <strong className="text-white">Enterprise Commitment:</strong> All
                client architectures and consulting engagements are operated under strict NDAs,
                zero-trust boundaries, and SLA commitments.
              </span>
            </div>
            <Link
              href="/contact"
              className="text-brand-gold hover:text-brand-gold-light font-medium inline-flex items-center gap-1 shrink-0 px-3 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 hover:bg-brand-gold/20 transition-all font-mono text-xs w-full sm:w-auto justify-center"
            >
              <span>Schedule Review</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Direct Links & Desktop Back-To-Top */}
        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-3 text-center sm:text-left">
          <p className="font-mono text-[11px]">
            © {currentYear} ARAVANTA TECH. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-mono text-[11px]">
            <Link href="/security" className="hover:text-white transition-colors">
              Security
            </Link>
            <Link href="/sla" className="hover:text-white transition-colors">
              SLA
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/compliance" className="hover:text-white transition-colors">
              Compliance
            </Link>
            <Link href="/contact" className="hover:text-brand-gold transition-colors text-zinc-300 font-semibold">
              Contact
            </Link>
          </div>

          {/* Desktop Back To Top Shortcut */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 hover:text-white px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform text-[#d4a342]" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
