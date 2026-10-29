import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Cpu,
  Terminal,
  ArrowRight,
  ArrowUpRight,
  Lock,
  FileCheck,
  Sparkles,
  Server,
  Mail,
  Clock,
  Layers,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative z-30 bg-[#05070a] border-t border-brand-border text-brand-gray-300 pt-12 sm:pt-16 pb-10 shadow-2xl"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Aravanta Tech Footer
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid - 2 cols on mobile, 6 cols on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 mb-12 sm:mb-16">
          {/* Brand & Mission Column (Full width on mobile, spans 2 on desktop) */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2 space-y-3.5 pr-0 lg:pr-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-lg"
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

            <p className="text-xs sm:text-sm text-brand-gray-400 max-w-sm leading-relaxed">
              Empowering Cloud Transformation through pragmatic engineering,
              resilient distributed architecture, and zero-compromise security standards.
            </p>

            <div className="pt-1 flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0f1422] border border-brand-border text-[11px] sm:text-xs text-brand-gold font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                <span>Simpler. Safer. Smarter.</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0f1422] border border-brand-border text-[11px] sm:text-xs text-white/80 font-mono">
                <span>Build Smarter. Grow Faster.</span>
              </div>
            </div>

            <div className="pt-1 text-[11px] sm:text-xs text-brand-gray-400 font-mono">
              <span className="text-white/60">Practice:</span> Cloud &amp; Distributed Systems Engineering
            </div>
          </div>

          {/* Column 1: Explore */}
          <div className="col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-3 font-mono border-b border-white/10 pb-1.5">
              Explore
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm" role="list">
              <li>
                <Link
                  href="/"
                  className="text-brand-gray-400 hover:text-brand-gold transition-colors inline-block py-0.5"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-brand-gray-400 hover:text-brand-gold transition-colors inline-block py-0.5"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/technology"
                  className="text-brand-gray-400 hover:text-brand-gold transition-colors inline-block py-0.5"
                >
                  Capabilities
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-brand-gray-400 hover:text-brand-gold transition-colors inline-block py-0.5"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-brand-gray-400 hover:text-brand-gold transition-colors inline-block py-0.5"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-brand-gray-400 hover:text-brand-gold transition-colors inline-block py-0.5"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-brand-gray-400 hover:text-brand-gold transition-colors inline-block py-0.5"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Engineering Practices */}
          <div className="col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-3 font-mono border-b border-white/10 pb-1.5">
              Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm" role="list">
              <li>
                <Link
                  href="/services/cloud-solutions"
                  className="text-brand-gray-400 hover:text-brand-gold transition-colors inline-block py-0.5"
                >
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/application-development"
                  className="text-brand-gray-400 hover:text-brand-gold transition-colors inline-block py-0.5"
                >
                  Application Dev
                </Link>
              </li>
              <li>
                <Link
                  href="/services/it-infrastructure"
                  className="text-brand-gray-400 hover:text-brand-gold transition-colors inline-block py-0.5"
                >
                  IT Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/services/devops-automation"
                  className="text-brand-gray-400 hover:text-brand-gold transition-colors inline-block py-0.5"
                >
                  DevOps &amp; GitOps
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cybersecurity"
                  className="text-brand-gray-400 hover:text-brand-gold transition-colors inline-block py-0.5"
                >
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-transformation"
                  className="text-brand-gray-400 hover:text-brand-gold transition-colors inline-block py-0.5"
                >
                  Modernization
                </Link>
              </li>
              <li>
                <Link
                  href="/services/it-consulting"
                  className="text-brand-gray-400 hover:text-brand-gold transition-colors inline-block py-0.5"
                >
                  Architecture Review
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform & Products */}
          <div className="col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-3 font-mono border-b border-white/10 pb-1.5">
              Platform
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm" role="list">
              <li>
                <Link
                  href="/cloudos"
                  className="text-white hover:text-brand-gold transition-colors font-medium flex items-center gap-1.5 py-0.5"
                >
                  <span>Aravanta CloudOS</span>
                  <span className="text-[9px] bg-brand-gold/15 text-brand-gold px-1.5 py-0.2 rounded font-mono border border-brand-gold/30">
                    Preview
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/cloudos#architecture"
                  className="text-brand-gray-400 hover:text-brand-gold transition-colors inline-block py-0.5"
                >
                  Architecture Explorer
                </Link>
              </li>
              <li>
                <Link
                  href="/cloudos#roadmap"
                  className="text-brand-gray-400 hover:text-brand-gold transition-colors inline-block py-0.5"
                >
                  Platform Roadmap
                </Link>
              </li>
              <li>
                <Link
                  href="/contact?interest=CloudOS"
                  className="text-brand-gold hover:text-brand-gold-light transition-colors inline-flex items-center gap-1 py-0.5"
                >
                  <span>Request Briefing</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Governance & Legal */}
          <div className="col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-3 font-mono border-b border-white/10 pb-1.5">
              Trust &amp; Legal
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm" role="list">
              <li>
                <Link
                  href="/security"
                  className="text-white hover:text-brand-gold transition-colors font-medium flex items-center gap-1.5 py-0.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <span>Trust Center</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/sla"
                  className="text-white hover:text-brand-gold transition-colors font-medium flex items-center gap-1.5 py-0.5"
                >
                  <FileCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>SLA (99.999%)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance"
                  className="text-brand-gray-400 hover:text-brand-gold transition-colors inline-block py-0.5"
                >
                  Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-brand-gray-400 hover:text-brand-gold transition-colors inline-block py-0.5"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-brand-gray-400 hover:text-brand-gold transition-colors inline-block py-0.5"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-brand-gray-400 hover:text-brand-gold transition-colors inline-block py-0.5"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Operational Transparency Banner */}
        <div className="border-t border-brand-border/60 pt-6 pb-6 text-xs text-brand-gray-400">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 p-4 sm:p-5 rounded-xl bg-[#0a0e14] border border-brand-border shadow-lg">
            <div className="flex items-start sm:items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0 mt-0.5 sm:mt-0" />
              <span className="leading-relaxed text-[11px] sm:text-xs">
                <strong className="text-white">Enterprise Commitment:</strong> All
                client architectures and consulting engagements are operated under strict NDAs,
                zero-trust boundaries, and SLA commitments.
              </span>
            </div>
            <Link
              href="/contact"
              className="text-brand-gold hover:text-brand-gold-light font-medium inline-flex items-center gap-1 shrink-0 px-3 py-1.5 rounded-lg bg-brand-gold/10 border border-brand-gold/30 hover:bg-brand-gold/20 transition-all font-mono text-xs w-full sm:w-auto justify-center"
            >
              <span>Schedule Architecture Review</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Direct Links */}
        <div className="border-t border-brand-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-gray-400 gap-3 text-center sm:text-left">
          <p className="font-mono text-[11px] sm:text-xs">
            © {currentYear} ARAVANTA TECH. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 font-mono text-[11px]">
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
            <Link href="/contact" className="hover:text-brand-gold transition-colors text-white font-semibold">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
