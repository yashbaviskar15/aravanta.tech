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

export const metadata: Metadata = {
  title: "Responsible Disclosure & Corporate Compliance Policy",
  description:
    "Responsible security vulnerability disclosure guidelines, safe harbor protections, corporate compliance, and ethics standards at ARAVANTA TECH.",
};

export default function CompliancePage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 space-y-4">
          <Badge variant="gold" size="sm">
            GOVERNANCE & ETHICS
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Responsible Disclosure &amp; Compliance
          </h1>
          <p className="text-sm text-brand-gray-400 font-mono">
            Security Vulnerability Policy &amp; Corporate Ethics Standards • Effective October 2026
          </p>
        </div>

        {/* Safe Harbor Banner */}
        <div className="p-6 rounded-2xl bg-[#0a0e14]/90 border border-brand-gold/30 shadow-2xl backdrop-blur-xl mb-12">
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white">Safe Harbor Protection for Security Researchers</h3>
              <p className="text-xs sm:text-sm text-brand-gray-300 leading-relaxed">
                ARAVANTA TECH values the contributions of the global cybersecurity research community. If you conduct vulnerability research in good faith and adhere to the guidelines set out below, we commit not to pursue legal action against you and to work cooperatively to remediate the identified issue.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-brand-gray-300 text-sm leading-relaxed">
          
          {/* Section 1: Vulnerability Reporting Guidelines */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Vulnerability Reporting Guidelines</h2>
            <p>
              To maintain Safe Harbor protection, researchers must comply with the following principles:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                <strong>Prompt Disclosure:</strong> Notify us as soon as possible after discovering a potential security vulnerability.
              </li>
              <li>
                <strong>No Data Access or Exfiltration:</strong> Do not view, download, modify, or destroy client data, personal records, or proprietary source code beyond what is strictly necessary to demonstrate proof-of-concept.
              </li>
              <li>
                <strong>No Denial of Service:</strong> Do not execute Distributed Denial of Service (DDoS), resource exhaustion attacks, or spam automated forms.
              </li>
              <li>
                <strong>Coordinated Disclosure:</strong> Provide us a reasonable window (minimum 60 calendar days) to remediate the vulnerability before publicly disclosing details.
              </li>
            </ul>
          </section>

          {/* Section 2: How to Submit a Report */}
          <section className="p-5 rounded-xl bg-[#0d1017] border border-brand-border/80">
            <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-gold" />
              <span>How to Transmit a Security Report</span>
            </h2>
            <p className="text-xs text-brand-gray-300 leading-relaxed">
              Transmit your vulnerability reports directly to our security engineering team at:
            </p>
            <div className="my-3 p-3 rounded-lg bg-black/60 font-mono text-xs text-brand-gold">
              security@aravantatech.com
            </div>
            <p className="text-xs text-brand-gray-400">
              Please include: description of the finding, reproduction steps with curl/HTTP request traces, potential impact assessment, and your contact info. We acknowledge valid reports within <strong>48 business hours</strong>.
            </p>
          </section>

          {/* Section 3: Anti-Corruption & Ethical Standards */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Anti-Corruption & Corporate Ethics</h2>
            <p>
              ARAVANTA TECH conducts all operations with integrity, zero tolerance for bribery, and adherence to international fair competition practices:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5">
              <li>Strict prohibition of improper payments, kickbacks, or facilitation fees in all jurisdictions.</li>
              <li>Compliance with the United States Foreign Corrupt Practices Act (FCPA) and UK Bribery Act.</li>
              <li>Thorough due diligence performed on all subcontractors, cloud vendors, and technical partners.</li>
              <li>Clear conflict-of-interest disclosure requirements for all principal architects and engineers.</li>
            </ul>
          </section>

          {/* Section 4: Export Control & Sanctions */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Trade Sanctions & Export Compliance</h2>
            <p>
              Our software solutions, architectural consulting, and Aravanta CloudOS platform comply with applicable international trade sanctions and dual-use software export control regulations. We do not provide technology services to individuals or entities on designated restricted parties lists.
            </p>
          </section>

          {/* Section 5: Intellectual Property Integrity */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Intellectual Property & Open Source Governance</h2>
            <p>
              We maintain strict hygiene regarding open-source licensing (MIT, Apache 2.0, BSD). We guarantee that client proprietary software remains strictly isolated from restrictive copyleft regimes (GPL/AGPL) unless explicitly approved in writing by the client.
            </p>
          </section>

        </div>

        {/* Quick Links */}
        <div className="pt-16 border-t border-brand-border/60 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-brand-gray-400">
          <Link href="/security" className="hover:text-brand-gold transition-colors">Security Whitepaper →</Link>
          <Link href="/sla" className="hover:text-brand-gold transition-colors">Service Level Agreement →</Link>
          <Link href="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy →</Link>
          <Link href="/terms" className="hover:text-brand-gold transition-colors">Terms of Service →</Link>
          <Link href="/cookies" className="hover:text-brand-gold transition-colors">Cookie Policy →</Link>
        </div>

      </div>
    </div>
  );
}
