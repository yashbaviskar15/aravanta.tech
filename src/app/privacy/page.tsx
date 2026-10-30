import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, FileText, CheckCircle2, ArrowRight, Mail } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Privacy Policy & Enterprise Data Governance | ARAVANTA TECH",
  description:
    "Privacy policy and data governance practices for ARAVANTA TECH enterprise website visitors and clients. Zero tracking, TLS 1.3 encryption, and GDPR-aligned controls.",
};

const DATA_CATEGORIES = [
  {
    category: "Inquiry Data",
    items: "Name, enterprise email, company name, project brief, timeline expectations",
    purpose: "Commercial scoping, mutual NDA drafting, engagement proposals",
    retention: "Retained for the duration of the engagement or purged upon request (30 days)",
  },
  {
    category: "Telemetry & Logs",
    items: "Pseudonymized IP address, user-agent, request timestamp, security event telemetry",
    purpose: "Perimeter threat mitigation, DDoS prevention, anti-abuse monitoring",
    retention: "7-day rolling rotation in encrypted audit logs",
  },
  {
    category: "Client Engagement Telemetry",
    items: "Architecture diagnostics, infrastructure telemetry (under active SOW)",
    purpose: "Execution of agreed engineering deliverables and performance benchmarks",
    retention: "Defined strictly within individual Master Services Agreements (MSAs)",
  },
];

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 text-white min-h-screen bg-[#08090d]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <Badge variant="emerald" size="sm" dot>
            LEGAL &amp; DATA GOVERNANCE
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
            Enterprise <br />
            <span className="emerald-gradient-text">Privacy Policy.</span>
          </h1>
          <p className="text-sm font-mono text-zinc-400">
            Last Updated: October 2026 • Policy Version 2.4 • Effective Immediately
          </p>
        </div>

        {/* Commitment Highlight */}
        <div className="p-6 rounded-2xl bg-[#0d0f15] border border-emerald-500/20 shadow-2xl backdrop-blur-xl mb-12">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white font-sans">Zero Third-Party Commercial Monetization</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                ARAVANTA TECH does not sell, rent, broker, or monetize client or visitor data. We operate as an engineering and architecture advisory firm; your technical inquiries and architectures remain strictly confidential under mutual NDA guidelines.
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
              <span>Scope &amp; Controller</span>
            </div>
            <h2 className="text-xl font-bold text-white">1. Overview &amp; Scope</h2>
            <p className="text-zinc-400">
              This Privacy Policy governs the processing of personal data collected through <strong className="text-white">aravanta.tech</strong> and associated enterprise inquiry channels operated by ARAVANTA TECH (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). It details our technical safeguards, operational retention limits, and your statutory rights under global data protection frameworks (including GDPR, CCPA/CPRA, and India DPDP).
            </p>
          </section>

          {/* Section 2 */}
          <section className="p-6 rounded-2xl bg-[#0d0f15] border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
              <span>02</span>
              <span>•</span>
              <span>Data Categories</span>
            </div>
            <h2 className="text-xl font-bold text-white">2. Information We Collect &amp; Process</h2>
            <p className="text-zinc-400">
              We adhere strictly to the principle of data minimization. We only collect information necessary to evaluate enterprise engineering inquiries and safeguard platform operations:
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/10 mt-3">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-[#121622] text-emerald-400 uppercase text-[11px] border-b border-white/10">
                  <tr>
                    <th className="p-3">Category</th>
                    <th className="p-3">Data Points</th>
                    <th className="p-3">Purpose</th>
                    <th className="p-3">Retention</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  {DATA_CATEGORIES.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02]">
                      <td className="p-3 text-white font-semibold">{row.category}</td>
                      <td className="p-3 font-sans text-zinc-400">{row.items}</td>
                      <td className="p-3 font-sans text-zinc-300">{row.purpose}</td>
                      <td className="p-3 text-emerald-400/90">{row.retention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 */}
          <section className="p-6 rounded-2xl bg-[#0d0f15] border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
              <span>03</span>
              <span>•</span>
              <span>Engineering Safeguards</span>
            </div>
            <h2 className="text-xl font-bold text-white">3. Cryptographic &amp; Security Controls</h2>
            <p className="text-zinc-400">
              Consistent with our zero-trust engineering standards, all communications across our digital perimeter adhere to military-grade standards:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 pt-2">
              <li className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-zinc-300">TLS 1.3 cryptographic transport enforcement with strict HSTS preload.</span>
              </li>
              <li className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-zinc-300">AES-256 envelope encryption for all archived correspondence and proposal archives.</span>
              </li>
              <li className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-zinc-300">Hardware-backed FIDO2 MFA for internal developer and engineering portal access.</span>
              </li>
              <li className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-zinc-300">Zero third-party trackers, zero advertising pixel injectors, and no behavioral profiling.</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="p-6 rounded-2xl bg-[#0d0f15] border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
              <span>04</span>
              <span>•</span>
              <span>Data Rights</span>
            </div>
            <h2 className="text-xl font-bold text-white">4. Your Statutory Privacy Rights</h2>
            <p className="text-zinc-400">
              Regardless of your physical jurisdiction, ARAVANTA TECH grants all enterprise partners and visitors uniform rights regarding their data:
            </p>
            <div className="grid sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="font-mono text-xs text-emerald-400 uppercase">Right to Access</span>
                <p className="text-xs text-zinc-400">Request a full machine-readable export of all data associated with your inquiries.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="font-mono text-xs text-emerald-400 uppercase">Right to Erasure</span>
                <p className="text-xs text-zinc-400">Immediate, cryptographic purging of inquiry records upon written verification.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="font-mono text-xs text-emerald-400 uppercase">Right to Restrict</span>
                <p className="text-xs text-zinc-400">Limit processing to mutual NDA execution without secondary outreach.</p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="p-6 rounded-2xl bg-[#0d0f15] border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
              <span>05</span>
              <span>•</span>
              <span>Governance &amp; Contact</span>
            </div>
            <h2 className="text-xl font-bold text-white">5. Data Protection Officer (DPO) Contact</h2>
            <p className="text-zinc-400">
              To exercise your privacy rights, submit a data subject access request (DSAR), or inquire about enterprise data processing addenda (DPA), please reach our Data Governance &amp; Security team:
            </p>
            <div className="p-4 rounded-xl bg-[#08090d] border border-white/10 font-mono text-xs text-zinc-300 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <Mail className="w-4 h-4" />
                <span>privacy@aravanta.tech</span>
              </div>
              <div className="text-zinc-400">Response SLA: Verified requests are addressed within 48 business hours.</div>
              <div className="text-zinc-500 text-[11px]">Direct escalations: security@aravanta.tech</div>
            </div>
          </section>
        </div>

        {/* Navigation Footnotes */}
        <div className="pt-16 mt-12 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service →</Link>
            <Link href="/cookies" className="hover:text-emerald-400 transition-colors">Cookie Policy →</Link>
            <Link href="/security" className="hover:text-emerald-400 transition-colors">Security Architecture →</Link>
          </div>
          <Link href="/contact" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            Initiate Secure Inquiry →
          </Link>
        </div>
      </div>
    </div>
  );
}
