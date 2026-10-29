import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  LifeBuoy,
  Activity,
  FileCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Service Level Agreement (SLA) & Operational Commitments",
  description:
    "Official Service Level Agreement (SLA) for ARAVANTA TECH enterprise services, uptime targets, incident severity matrix, and support response commitments.",
};

const SEVERITY_LEVELS = [
  {
    level: "Severity 1 (Critical Incident)",
    badge: "CRITICAL",
    badgeColor: "bg-red-950/80 text-red-400 border-red-500/40",
    responseSla: "< 15 Minutes",
    resolutionTarget: "< 4 Hours Continuous Effort",
    coverage: "24x7x365 Active On-Call SRE",
    description:
      "A complete outage of the production environment affecting all users, critical data corruption, or active security perimeter breach requiring immediate containment.",
  },
  {
    level: "Severity 2 (Major Degradation)",
    badge: "MAJOR",
    badgeColor: "bg-amber-950/80 text-amber-400 border-amber-500/40",
    responseSla: "< 1 Hour",
    resolutionTarget: "< 8 Hours",
    coverage: "24x7x365",
    description:
      "Substantial performance degradation, failure of high-volume asynchronous message queues, or partial redundancy failure while core service remains accessible.",
  },
  {
    level: "Severity 3 (Moderate Technical Issue)",
    badge: "MODERATE",
    badgeColor: "bg-blue-950/80 text-blue-400 border-blue-500/40",
    responseSla: "< 4 Hours",
    resolutionTarget: "Next Sprint Release / 48 Hours",
    coverage: "Standard Business Hours",
    description:
      "Non-critical system defect with an existing operational workaround, non-blocking telemetry delay, or development environment instability.",
  },
  {
    level: "Severity 4 (General Inquiry & Advisory)",
    badge: "INFORMATIONAL",
    badgeColor: "bg-[#151924] text-brand-gray-300 border-brand-border",
    responseSla: "< 1 Business Day",
    resolutionTarget: "Mutually Agreed Scope",
    coverage: "Standard Business Hours",
    description:
      "General architectural inquiries, optimization advisory, documentation updates, or planned enhancement scoping.",
  },
];

export default function SlaPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
          <Badge variant="gold" size="sm">
            ENTERPRISE OPERATIONAL SLA
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Service Level Agreement <br />
            <span className="gold-gradient-text">&amp; Uptime Commitments.</span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-gray-300 leading-relaxed font-normal">
            We provide enterprise clients with contractual uptime benchmarks, disciplined incident escalation tiers, and transparent service level standards.
          </p>

          <p className="text-xs font-mono text-brand-gray-400">
            Effective Date: October 2026 • Applies to Active Enterprise Engineering &amp; SRE Engagements
          </p>
        </div>

        {/* 99.99% Availability Commitment Card */}
        <div className="max-w-5xl mx-auto p-8 rounded-2xl bg-[#0a0e14]/95 border border-brand-gold/40 shadow-2xl backdrop-blur-xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-3">
              <span className="text-xs font-mono text-brand-gold uppercase tracking-wider font-bold">
                SYSTEM AVAILABILITY BENCHMARK
              </span>
              <h2 className="text-3xl font-extrabold text-white">99.99% Production Uptime</h2>
              <p className="text-xs sm:text-sm text-brand-gray-300 leading-relaxed">
                For enterprise multi-zone active-active architectures and managed cloud clusters, ARAVANTA TECH commits to achieving 99.99% monthly availability (excluding scheduled maintenance). Unscheduled downtime is backed by our formal service credit program.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#121622] border border-brand-border/70 text-center font-mono space-y-2">
              <div className="text-3xl font-bold text-emerald-400">&lt; 4.38 min</div>
              <div className="text-xs text-brand-gray-400">Maximum Allowed Monthly Outage at 99.99% SLA</div>
              <div className="text-[11px] text-brand-gold pt-2 border-t border-brand-border/50">
                MULTI-ZONE RECOVERY RTO &lt; 30 SEC
              </div>
            </div>
          </div>
        </div>

        {/* Incident Severity Matrix */}
        <div className="max-w-5xl mx-auto space-y-8 mb-20">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
              Incident Severity Classification &amp; Response Times
            </h2>
            <p className="text-sm text-brand-gray-300">
              When an operational disruption occurs, incidents are categorized and dispatched immediately according to severity:
            </p>
          </div>

          <div className="space-y-4">
            {SEVERITY_LEVELS.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0a0e14]/85 border border-[#222533] backdrop-blur-xl space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="text-base font-bold text-white">{s.level}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${s.badgeColor}`}>
                      {s.badge}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs text-brand-gold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Response SLA: {s.responseSla}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-brand-gray-300 leading-relaxed">
                  {s.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-[#121622] border border-brand-border/60">
                    <span className="text-brand-gray-400 block text-[10px] uppercase">Resolution Target:</span>
                    <span className="text-white font-medium">{s.resolutionTarget}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#121622] border border-brand-border/60">
                    <span className="text-brand-gray-400 block text-[10px] uppercase">Coverage Window:</span>
                    <span className="text-emerald-400 font-medium">{s.coverage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance & Service Credits */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 rounded-2xl bg-[#0a0e14]/90 border border-brand-border/80 space-y-3">
            <h3 className="text-lg font-bold text-white">Scheduled Maintenance Windows</h3>
            <p className="text-xs sm:text-sm text-brand-gray-300 leading-relaxed">
              Planned infrastructure upgrades, database migrations, or kernel updates are scheduled during predefined off-peak hours (typically 01:00–04:00 UTC). Clients receive a minimum of <strong>5 business days advance notice</strong> for any maintenance requiring potential traffic rerouting.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0a0e14]/90 border border-brand-border/80 space-y-3">
            <h3 className="text-lg font-bold text-white">Service Credit Schedule</h3>
            <p className="text-xs sm:text-sm text-brand-gray-300 leading-relaxed">
              If monthly availability falls below the 99.99% benchmark due to an ARAVANTA TECH managed system failure, clients are entitled to service credits ranging from <strong>10% to 50%</strong> of the monthly engagement retainer upon verification.
            </p>
          </div>
        </div>

        {/* CTA & Links */}
        <div className="max-w-4xl mx-auto pt-10 text-center space-y-6">
          <p className="text-sm text-brand-gray-300">
            Have questions about custom enterprise SLAs, dedicated SRE coverage, or disaster recovery drills?
          </p>
          <Button href="/contact" variant="primary" size="md">
            <span>Inquire About Enterprise Support Options</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-brand-gray-400 border-t border-brand-border/60">
            <Link href="/security" className="hover:text-brand-gold transition-colors">Security Whitepaper →</Link>
            <Link href="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy →</Link>
            <Link href="/terms" className="hover:text-brand-gold transition-colors">Terms of Service →</Link>
            <Link href="/compliance" className="hover:text-brand-gold transition-colors">Responsible Disclosure →</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
