import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldAlert,
  ShieldCheck,
  FileCheck,
  Mail,
  Lock,
  ArrowRight,
  CheckCircle2,
  FileText,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Responsible Disclosure & Corporate Compliance Policy | ARAVANTA TECH",
  description:
    "Responsible security vulnerability disclosure guidelines, safe harbor protections, corporate compliance, and ethics standards at ARAVANTA TECH.",
};

export default function CompliancePage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 text-white min-h-screen bg-[#08090d]">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[500px] h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="mb-12 space-y-4 relative z-10">
          <ScrollReveal direction="up" delay={0.05} duration={0.65} distance={16}>
            <Badge variant="emerald" size="sm" dot>
              GOVERNANCE &amp; ETHICS
            </Badge>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12} duration={0.7} distance={20}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
              Responsible Disclosure &amp; Compliance
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} duration={0.7} distance={18}>
            <p className="text-sm text-zinc-500 font-mono">
              Security Vulnerability Policy &amp; Corporate Ethics Standards • Effective October 2026
            </p>
          </ScrollReveal>
        </div>

        {/* Safe Harbor Banner */}
        <ScrollReveal direction="up" delay={0.15} duration={0.7} distance={20}>
          <div className="p-6 rounded-2xl bg-[#0d0f15] border border-emerald-500/30 shadow-2xl backdrop-blur-xl mb-12">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white tracking-tight">Safe Harbor Protection for Security Researchers</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  ARAVANTA TECH values the contributions of the global cybersecurity research community. If you conduct vulnerability research in good faith and adhere to the guidelines set out below, we commit not to pursue legal action against you and to work cooperatively to remediate the identified issue.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-8 text-zinc-300 text-sm leading-relaxed">
          
          {/* Section 1: Vulnerability Reporting Guidelines */}
          <ScrollReveal direction="up" delay={0.1} duration={0.65}>
            <section className="rounded-2xl bg-[#0d0f15] border border-white/10 p-6 sm:p-7 space-y-3 hover:border-white/20 transition-colors shadow-lg">
              <h2 className="text-lg font-bold text-white tracking-tight">1. Vulnerability Reporting Guidelines</h2>
              <p className="text-zinc-400">
                To maintain Safe Harbor protection, researchers must comply with the following principles:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-zinc-400 text-xs sm:text-sm">
                <li>
                  <strong className="text-white">Prompt Disclosure:</strong> Notify us as soon as possible after discovering a potential security vulnerability.
                </li>
                <li>
                  <strong className="text-white">No Data Access or Exfiltration:</strong> Do not view, download, modify, or destroy client data, personal records, or proprietary source code beyond what is strictly necessary to demonstrate proof-of-concept.
                </li>
                <li>
                  <strong className="text-white">No Denial of Service:</strong> Do not execute Distributed Denial of Service (DDoS), resource exhaustion attacks, or spam automated forms.
                </li>
                <li>
                  <strong className="text-white">Coordinated Disclosure:</strong> Provide us a reasonable window (minimum 60 calendar days) to remediate the vulnerability before publicly disclosing details.
                </li>
              </ul>
            </section>
          </ScrollReveal>

          {/* Section 2: How to Submit a Report */}
          <ScrollReveal direction="up" delay={0.12} duration={0.65}>
            <section className="p-6 rounded-2xl bg-[#0d0f15] border border-emerald-500/30 space-y-3 shadow-lg">
              <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>How to Transmit a Security Report</span>
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Transmit your vulnerability reports directly to our security engineering team at:
              </p>
              <div className="my-2 p-3 rounded-xl bg-black/60 font-mono text-xs text-emerald-400 border border-white/10">
                security@aravantatech.com
              </div>
              <p className="text-xs text-zinc-500">
                Please include: description of the finding, reproduction steps with curl/HTTP request traces, potential impact assessment, and your contact info. We acknowledge valid reports within <strong>48 business hours</strong>.
              </p>
            </section>
          </ScrollReveal>

          {/* Section 3: Anti-Corruption & Ethical Standards */}
          <ScrollReveal direction="up" delay={0.14} duration={0.65}>
            <section className="rounded-2xl bg-[#0d0f15] border border-white/10 p-6 sm:p-7 space-y-3 hover:border-white/20 transition-colors shadow-lg">
              <h2 className="text-lg font-bold text-white tracking-tight">2. Anti-Corruption &amp; Corporate Ethics</h2>
              <p className="text-zinc-400">
                ARAVANTA TECH conducts all operations with integrity, zero tolerance for bribery, and adherence to international fair competition practices:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-zinc-400 text-xs sm:text-sm">
                <li>Strict prohibition of improper payments, kickbacks, or facilitation fees in all jurisdictions.</li>
                <li>Compliance with the United States Foreign Corrupt Practices Act (FCPA) and UK Bribery Act.</li>
                <li>Thorough due diligence performed on all subcontractors, cloud vendors, and technical partners.</li>
                <li>Clear conflict-of-interest disclosure requirements for all principal architects and engineers.</li>
              </ul>
            </section>
          </ScrollReveal>

          {/* Section 4: Export Control & Sanctions */}
          <ScrollReveal direction="up" delay={0.16} duration={0.65}>
            <section className="rounded-2xl bg-[#0d0f15] border border-white/10 p-6 sm:p-7 space-y-3 hover:border-white/20 transition-colors shadow-lg">
              <h2 className="text-lg font-bold text-white tracking-tight">3. Trade Sanctions &amp; Export Compliance</h2>
              <p className="text-zinc-400 text-xs sm:text-sm">
                Our software solutions, architectural consulting, and Aravanta CloudOS platform comply with applicable international trade sanctions and dual-use software export control regulations. We do not provide technology services to individuals or entities on designated restricted parties lists.
              </p>
            </section>
          </ScrollReveal>

          {/* Section 5: Intellectual Property Integrity */}
          <ScrollReveal direction="up" delay={0.18} duration={0.65}>
            <section className="rounded-2xl bg-[#0d0f15] border border-white/10 p-6 sm:p-7 space-y-3 hover:border-white/20 transition-colors shadow-lg">
              <h2 className="text-lg font-bold text-white tracking-tight">4. Intellectual Property &amp; Open Source Governance</h2>
              <p className="text-zinc-400 text-xs sm:text-sm">
                We maintain strict hygiene regarding open-source licensing (MIT, Apache 2.0, BSD). We guarantee that client proprietary software remains strictly isolated from restrictive copyleft regimes (GPL/AGPL) unless explicitly approved in writing by the client.
              </p>
            </section>
          </ScrollReveal>

        </div>

        {/* Quick Links */}
        <div className="pt-16 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-500">
          <Link href="/security" className="hover:text-white transition-colors">Security Whitepaper →</Link>
          <Link href="/sla" className="hover:text-white transition-colors">Service Level Agreement →</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy →</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service →</Link>
          <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy →</Link>
        </div>

      </div>
    </div>
  );
}
