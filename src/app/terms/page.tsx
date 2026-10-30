import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Scale, FileCheck, AlertCircle, ArrowRight, ShieldCheck, Mail } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Terms of Service & Commercial Framework | ARAVANTA TECH",
  description:
    "Terms of service governing the use of the ARAVANTA TECH enterprise website, technical consultations, and preliminary architecture assessments.",
};

const TERMS_SECTIONS = [
  {
    num: "01",
    title: "1. Acceptance & Scope of Terms",
    content:
      "By accessing, browsing, or utilizing the ARAVANTA TECH web portal (aravanta.tech), associated documentation, or technical calculators, you agree to comply with and be bound by these Terms of Service. If you are acting on behalf of an enterprise or entity, you represent and warrant that you possess the requisite authority to bind that entity.",
  },
  {
    num: "02",
    title: "2. Informational Purpose & Advisory Nature",
    content:
      "The information, architectural blueprints, cost estimates, and technical benchmarks published on this website are provided for strategic informational, exploratory, and scoping purposes. Preliminary estimates generated via the Cloud Cost Calculator or FinOps Simulators do not constitute a binding commercial quote until validated through a formal Statement of Work (SOW).",
  },
  {
    num: "03",
    title: "3. Proprietary Rights & Intellectual Property",
    content:
      "All intellectual property, proprietary software architectures, trademarks, visual design systems, documentation, source code samples, and platform designs (including the ARAVANTA TECH brand mark and Aravanta CloudOS design system) are the exclusive property of ARAVANTA TECH. No right, title, or interest is transferred without explicit written agreement.",
  },
  {
    num: "04",
    title: "4. Master Services Agreements (MSAs) Precedence",
    content:
      "Submission of a project inquiry or consultation request does not establish a formal client-vendor relationship. All production software engineering, cloud migration, infrastructure operations, and cybersecurity engagements require a mutually executed Master Services Agreement (MSA), Non-Disclosure Agreement (NDA), and specific Statements of Work defining liability limits, SLAs, and deliverables.",
  },
  {
    num: "05",
    title: "5. Aravanta CloudOS Platform Initiative",
    content:
      "References to Aravanta CloudOS, its upcoming microVM orchestrator, unified control plane, and associated CLI tools represent ongoing research, engineering preview, and prototype development. Deployment capabilities and roadmap milestones are subject to iterative evolution and are delivered under designated developer preview licenses.",
  },
  {
    num: "06",
    title: "6. Limitation of Liability & Disclaimers",
    content:
      "To the maximum extent permitted by applicable law, ARAVANTA TECH and its officers, directors, employees, and agents disclaim all warranties, express or implied, regarding website uptime, calculator accuracy, or suitability for a specific commercial purpose. In no event shall ARAVANTA TECH be liable for indirect, consequential, or punitive damages arising from site access.",
  },
];

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 text-white min-h-screen bg-[#08090d]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <Badge variant="emerald" size="sm" dot>
            LEGAL &amp; COMMERCIAL FRAMEWORK
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
            Terms of <br />
            <span className="emerald-gradient-text">Service.</span>
          </h1>
          <p className="text-sm font-mono text-zinc-400">
            Last Updated: October 2026 • Commercial Release 2.4 • Effective Immediately
          </p>
        </div>

        {/* Advisory Card */}
        <div className="p-6 rounded-2xl bg-[#0d0f15] border border-white/10 shadow-2xl backdrop-blur-xl mb-12">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-emerald-400 flex-shrink-0">
              <Scale className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white font-sans">Enterprise Engagement Protocol</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                These website terms govern public portal usage. Formal enterprise engineering, architecture migrations, and cybersecurity retainers are governed exclusively by executed Master Services Agreements (MSAs) with tailored SLAs, warranties, and enterprise liability caps.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8 text-zinc-300 text-sm leading-relaxed">
          {TERMS_SECTIONS.map((section) => (
            <section
              key={section.num}
              className="p-6 rounded-2xl bg-[#0d0f15] border border-white/10 space-y-3 transition-colors hover:border-emerald-500/20"
            >
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
                <span>{section.num}</span>
                <span>•</span>
                <span>Commercial Standard</span>
              </div>
              <h2 className="text-xl font-bold text-white">{section.title}</h2>
              <p className="text-zinc-400 leading-relaxed">{section.content}</p>
            </section>
          ))}

          {/* Legal Contacts Section */}
          <section className="p-6 rounded-2xl bg-[#0d0f15] border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
              <span>07</span>
              <span>•</span>
              <span>Legal Counsel &amp; Jurisdiction</span>
            </div>
            <h2 className="text-xl font-bold text-white">7. Governing Law &amp; Inquiries</h2>
            <p className="text-zinc-400">
              These terms shall be governed by and construed in accordance with applicable corporate enterprise laws, without regard to conflict of law principles. For corporate legal correspondence, copyright notices, or MSA contract inquiries:
            </p>
            <div className="p-4 rounded-xl bg-[#08090d] border border-white/10 font-mono text-xs text-zinc-300 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <Mail className="w-4 h-4" />
                <span>legal@aravanta.tech</span>
              </div>
              <div className="text-zinc-400">Legal Department: ARAVANTA TECH Corporate Counsel</div>
              <div className="text-zinc-500 text-[11px]">Notice Window: 30 calendar days for formal written notices</div>
            </div>
          </section>
        </div>

        {/* Quick Links */}
        <div className="pt-16 mt-12 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy →</Link>
            <Link href="/cookies" className="hover:text-emerald-400 transition-colors">Cookie Policy →</Link>
            <Link href="/sla" className="hover:text-emerald-400 transition-colors">Service Level Agreement →</Link>
          </div>
          <Link href="/contact" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            Request Enterprise MSA →
          </Link>
        </div>
      </div>
    </div>
  );
}
