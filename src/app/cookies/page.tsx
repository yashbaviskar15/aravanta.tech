import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Cookie, ShieldCheck, CheckCircle2, ArrowRight, Settings2, Info } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Cookie Policy & Tracking Transparency | ARAVANTA TECH",
  description:
    "Cookie policy and tracking transparency standards for ARAVANTA TECH. Zero cross-site tracking guarantee and minimal functional storage.",
};

const COOKIE_TABLE = [
  {
    name: "aravanta_reduced_motion",
    type: "Functional Preference",
    duration: "Persistent (1 Year)",
    purpose: "Stores user preference for 3D WebGL camera motion reduction and reduced animation mode.",
  },
  {
    name: "aravanta_theme",
    type: "Functional Preference",
    duration: "Persistent (1 Year)",
    purpose: "Stores dark-mode interface state and high-contrast accessible visual styling settings.",
  },
  {
    name: "__cf_bm / cf_clearance",
    type: "Strictly Necessary Security",
    duration: "Session / 30 Minutes",
    purpose: "Perimeter bot mitigation and DDoS prevention to block automated malicious scraping.",
  },
];

export default function CookiesPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 text-white min-h-screen bg-[#08090d]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 space-y-4">
          <Badge variant="emerald" size="sm" dot>
            LEGAL &amp; TRACKING TRANSPARENCY
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
            Cookie <br />
            <span className="emerald-gradient-text">Transparency.</span>
          </h1>
          <p className="text-sm font-mono text-zinc-400">
            Last Updated: October 2026 • Tracking Transparency Version 2.4 • Effective Immediately
          </p>
        </div>

        {/* Zero-Tracker Guarantee Card */}
        <div className="p-6 rounded-2xl bg-[#0d0f15] border border-emerald-500/20 shadow-2xl backdrop-blur-xl mb-12">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white font-sans">Zero Third-Party Advertising Trackers Guarantee</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                ARAVANTA TECH does not deploy invasive third-party cross-site advertising cookies, remarketing beacons, or data-broker trackers on this website. Any storage mechanisms utilized are strictly intended for perimeter security, session health, and user accessibility preferences.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-10 text-zinc-300 text-sm leading-relaxed">
          {/* Section 1 */}
          <section className="p-6 rounded-2xl bg-[#0d0f15] border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
              <span>01</span>
              <span>•</span>
              <span>Definitions</span>
            </div>
            <h2 className="text-xl font-bold text-white">1. What Are Cookies &amp; Local Storage?</h2>
            <p className="text-zinc-400">
              Cookies and local storage objects are small encrypted data strings stored on your local device browser. They allow modern web applications to persist security challenge results, remember UI accessibility preferences (such as reduced motion), and ensure high-performance asset delivery.
            </p>
          </section>

          {/* Section 2 */}
          <section className="p-6 rounded-2xl bg-[#0d0f15] border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
              <span>02</span>
              <span>•</span>
              <span>Categorization</span>
            </div>
            <h2 className="text-xl font-bold text-white">2. Storage Categories Deployed</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <h4 className="font-semibold text-white text-sm">Strictly Necessary Security</h4>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Crucial for perimeter anti-DDoS filtering, rate-limiting API inquiry forms, and defending against automated bot scanning.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2">
                  <Settings2 className="w-4 h-4 text-cyan-400" />
                  <h4 className="font-semibold text-white text-sm">Functional Preferences</h4>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Used solely to remember your chosen interface settings, such as 3D canvas animation throttling and custom viewport contrast.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 - Table */}
          <section className="p-6 rounded-2xl bg-[#0d0f15] border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
              <span>03</span>
              <span>•</span>
              <span>Audit Registry</span>
            </div>
            <h2 className="text-xl font-bold text-white">3. Complete Storage Inventory</h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-[#121622] text-emerald-400 uppercase text-[11px] border-b border-white/10">
                  <tr>
                    <th className="p-3">Identifier</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Lifespan</th>
                    <th className="p-3">Operational Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  {COOKIE_TABLE.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02]">
                      <td className="p-3 text-white font-semibold">{row.name}</td>
                      <td className="p-3">{row.type}</td>
                      <td className="p-3 text-zinc-400">{row.duration}</td>
                      <td className="p-3 font-sans text-zinc-300">{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 */}
          <section className="p-6 rounded-2xl bg-[#0d0f15] border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
              <span>04</span>
              <span>•</span>
              <span>User Control</span>
            </div>
            <h2 className="text-xl font-bold text-white">4. Managing Your Cookie Settings</h2>
            <p className="text-zinc-400">
              You maintain total autonomy over local storage. You may clear cookies or configure your browser to reject cookies entirely via your browser security settings (Chrome, Firefox, Safari, Edge). Blocking strictly necessary security tokens may prompt additional challenge verifications when submitting technical contact inquiries.
            </p>
          </section>

          {/* Section 5 */}
          <section className="p-6 rounded-2xl bg-[#0d0f15] border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
              <span>05</span>
              <span>•</span>
              <span>Inquiries</span>
            </div>
            <h2 className="text-xl font-bold text-white">5. Privacy Team Contact</h2>
            <p className="text-zinc-400">
              For inquiries regarding our telemetry minimization protocols, reach our Data Governance Officer at{" "}
              <a href="mailto:privacy@aravanta.tech" className="text-emerald-400 hover:underline">
                privacy@aravanta.tech
              </a>{" "}
              or schedule a conversation via our{" "}
              <Link href="/contact" className="text-emerald-400 hover:underline">
                enterprise inquiry portal
              </Link>.
            </p>
          </section>
        </div>

        {/* Quick Links */}
        <div className="pt-16 mt-12 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-400">
          <Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy →</Link>
          <Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service →</Link>
          <Link href="/security" className="hover:text-emerald-400 transition-colors">Security Whitepaper →</Link>
          <Link href="/sla" className="hover:text-emerald-400 transition-colors">Service Level Agreement →</Link>
          <Link href="/compliance" className="hover:text-emerald-400 transition-colors">Responsible Disclosure →</Link>
        </div>

      </div>
    </div>
  );
}
