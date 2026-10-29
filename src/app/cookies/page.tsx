import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Cookie, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Cookie Policy & Tracking Transparency",
  description:
    "Cookie policy and tracking transparency standards for ARAVANTA TECH. Zero cross-site tracking guarantee.",
};

const COOKIE_TABLE = [
  {
    name: "aravanta_reduced_motion",
    type: "Functional Preference",
    duration: "Persistent (1 Year)",
    purpose: "Stores user preference for 3D camera motion reduction and reduced animation mode.",
  },
  {
    name: "aravanta_theme",
    type: "Functional Preference",
    duration: "Persistent (1 Year)",
    purpose: "Stores dark-mode interface state and accessible visual contrast settings.",
  },
  {
    name: "__cf_bm / cf_clearance",
    type: "Strictly Necessary Security",
    duration: "Session / 30 Minutes",
    purpose: "Cloudflare perimeter bot mitigation and DDoS protection to prevent malicious traffic flooding.",
  },
];

export default function CookiesPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 space-y-4">
          <Badge variant="gold" size="sm">
            LEGAL & PRIVACY TRANSPARENCY
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-sm text-brand-gray-400 font-mono">
            Last Updated: October 2026 • Effective Date: October 7, 2026
          </p>
        </div>

        {/* Zero-Tracker Guarantee Card */}
        <div className="p-6 rounded-2xl bg-[#0a0e14]/90 border border-brand-gold/30 shadow-2xl backdrop-blur-xl mb-12">
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white">Zero Third-Party Advertising Trackers Guarantee</h3>
              <p className="text-xs sm:text-sm text-brand-gray-300 leading-relaxed">
                ARAVANTA TECH does not deploy invasive third-party cross-site tracking cookies, behavioral remarketing pixels, or data-broker trackers on this website. Any storage mechanisms utilized are strictly intended for security, session health, and user accessibility preferences.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-brand-gray-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your browser or device by websites you visit. They are widely used to make websites function securely, remember user interface preferences, and provide aggregated telemetry to site operators.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Categories of Storage We Use</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#0d1017] border border-brand-border/70">
                <h4 className="font-semibold text-white text-sm mb-1">A. Strictly Necessary Security Cookies</h4>
                <p className="text-xs text-brand-gray-400">
                  Essential for our perimeter security and anti-DDoS protection. These cookies identify trusted web traffic and protect API inquiry endpoints from automated spam and abuse.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0d1017] border border-brand-border/70">
                <h4 className="font-semibold text-white text-sm mb-1">B. Functional Preference Cookies</h4>
                <p className="text-xs text-brand-gray-400">
                  Used solely to remember your chosen accessibility preferences, such as pausing high-intensity 3D camera motion or toggling high-contrast display modes.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Specific Storage Mechanisms Utilized</h2>
            <div className="overflow-x-auto rounded-xl border border-brand-border/80">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-[#121622] text-brand-gold uppercase text-[11px] border-b border-brand-border/60">
                  <tr>
                    <th className="p-3">Identifier</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Lifespan</th>
                    <th className="p-3">Operational Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border/40 text-brand-gray-300">
                  {COOKIE_TABLE.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02]">
                      <td className="p-3 text-white font-semibold">{row.name}</td>
                      <td className="p-3">{row.type}</td>
                      <td className="p-3">{row.duration}</td>
                      <td className="p-3 font-sans text-brand-gray-400">{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Managing Your Cookie Settings</h2>
            <p>
              You can control or disable cookies at any time through your browser settings. Most modern browsers allow you to block third-party cookies or clear cookies when closing your browser session. Note that blocking strictly necessary security tokens may impair form submission capability.
            </p>
          </section>

          <section className="pt-6 border-t border-brand-border/60">
            <h2 className="text-xl font-bold text-white mb-3">5. Contact Our Privacy Officer</h2>
            <p>
              If you have any questions regarding our cookie practices, please contact us at{" "}
              <a href="mailto:privacy@aravantatech.com" className="text-brand-gold hover:underline">
                privacy@aravantatech.com
              </a>{" "}
              or via our{" "}
              <Link href="/contact" className="text-brand-gold hover:underline">
                inquiry portal
              </Link>.
            </p>
          </section>
        </div>

        {/* Quick Links */}
        <div className="pt-16 border-t border-brand-border/60 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-brand-gray-400">
          <Link href="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy →</Link>
          <Link href="/terms" className="hover:text-brand-gold transition-colors">Terms of Service →</Link>
          <Link href="/security" className="hover:text-brand-gold transition-colors">Security Whitepaper →</Link>
          <Link href="/sla" className="hover:text-brand-gold transition-colors">Service Level Agreement →</Link>
          <Link href="/compliance" className="hover:text-brand-gold transition-colors">Responsible Disclosure →</Link>
        </div>

      </div>
    </div>
  );
}
