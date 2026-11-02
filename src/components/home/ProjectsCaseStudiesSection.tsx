"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  ArrowRight,
  CheckCircle2,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface CaseStudy {
  id: string;
  blueprintNumber: string;
  category: string;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  metrics: { label: string; value: string };
  tags: string[];
  href: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "fintech-migration",
    blueprintNumber: "BLUEPRINT 01",
    category: "FINANCIAL SERVICES",
    title: "Zero-Downtime Core Database & Transaction Ledger Migration",
    problem:
      "A high-volume financial transactions ledger was bound to an aging on-premise single-server database suffering 420ms query spikes and risk of catastrophic single-point hardware failure.",
    solution:
      "Engineered an asynchronous blue/green data replication pipeline with dual-write Kafka ingestion and Go reconciliation workers, maintaining transactional parity across Multi-AZ PostgreSQL clusters.",
    outcome:
      "Successfully cut over 100% of live traffic with zero data loss, zero customer downtime, and dropped p99 query latencies from 420ms to 28ms.",
    metrics: { label: "p99 Query Latency", value: "28ms (was 420ms)" },
    tags: ["PostgreSQL Multi-AZ", "Terraform", "Kafka", "Go Workers"],
    href: "/case-studies#fintech-migration",
  },
  {
    id: "monolith-modernization",
    blueprintNumber: "BLUEPRINT 02",
    category: "ENTERPRISE SAAS",
    title: "Strangler-Fig Modernization of a Multi-Tenant SaaS Monolith",
    problem:
      "A 9-year-old monolithic backend had ballooned to 850,000 lines of code, slowing release cycles to bi-weekly schedules and taking an average of 3.2 hours to diagnose and recover from crashes.",
    solution:
      "Implemented the Strangler-Fig design pattern with an automated Envoy API gateway that incrementally carved out authentication, billing, and reporting services into autonomous Kubernetes pods.",
    outcome:
      "Release velocity accelerated by 4.5x, deployment lead time plunged to 4 minutes, and MTTR dropped from 3.2 hours to under 4 minutes.",
    metrics: { label: "Target MTTR", value: "< 4 Minutes" },
    tags: ["Kubernetes", "Envoy Gateway", "TypeScript", "ArgoCD"],
    href: "/case-studies#monolith-modernization",
  },
  {
    id: "ebpf-sre-fleet",
    blueprintNumber: "BLUEPRINT 03",
    category: "AUTONOMOUS CLOUD FLEET",
    title: "eBPF Autonomous SRE Telemetry Across 2,400+ Bare-Metal Nodes",
    problem:
      "Intermittent microburst packet drops and hardware kernel lockups across a 2,400-node compute cluster were causing silent task evictions and high engineering toil.",
    solution:
      "Deployed kernel-level eBPF monitoring daemons paired with automated out-of-band IPMI controllers that cordon and reboot failing nodes before SLOs degrade.",
    outcome:
      "Packet drop rate dropped to 0.000%, toil was reduced by 91%, and autonomous node convergence reached 100% nominal.",
    metrics: { label: "Packet Loss Rate", value: "0.000%" },
    tags: ["eBPF", "OpenTelemetry", "Linux Kernel Tuning", "IPMI"],
    href: "/case-studies#ebpf-sre",
  },
];

export function ProjectsCaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 sm:py-32 bg-[#06080e] border-t border-white/10 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <ScrollReveal direction="up" delay={0.05} duration={0.65}>
              <div className="inline-flex items-center gap-2 mb-3">
                <Badge variant="gold" size="sm" dot>
                  VERIFIED OUTCOMES
                </Badge>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.12} duration={0.7}>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
                Engineering Projects &amp; Architecture Blueprints.
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} duration={0.7}>
              <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed font-light">
                Documented engineering case studies detailing real architecture bottlenecks, our implemented solutions, and measurable production impact.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.25} duration={0.7}>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#d4a342] hover:text-[#f3cc72] transition-colors shrink-0"
            >
              <span>View all architecture blueprints</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Case Studies 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs, idx) => (
            <ScrollReveal
              key={cs.id}
              direction="up"
              delay={0.1 * (idx + 1)}
              duration={0.7}
              distance={20}
            >
              <div className="h-full rounded-3xl bg-[#0b0e15] border border-white/10 p-7 sm:p-8 space-y-5 hover:border-white/20 transition-all group flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-[#d4a342] font-bold uppercase tracking-wider">
                      {cs.blueprintNumber}
                    </span>
                    <span className="text-zinc-500">{cs.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#d4a342] transition-colors leading-snug">
                    {cs.title}
                  </h3>

                  {/* Problem / Solution / Outcome format */}
                  <div className="space-y-3 text-xs leading-relaxed">
                    <div className="p-3 rounded-xl bg-red-500/5 border border-red-500/20 space-y-1">
                      <span className="font-mono font-bold text-red-400 block uppercase text-[10px]">
                        The Bottleneck:
                      </span>
                      <p className="text-zinc-300 font-light">{cs.problem}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-1">
                      <span className="font-mono font-bold text-emerald-400 block uppercase text-[10px]">
                        Engineering Solution:
                      </span>
                      <p className="text-zinc-300 font-light">{cs.solution}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cs.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/8 text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Outcome & CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                  <div>
                    <span className="text-[10px] text-zinc-500 block uppercase">
                      {cs.metrics.label}
                    </span>
                    <span className="text-sm font-bold text-emerald-400">
                      {cs.metrics.value}
                    </span>
                  </div>

                  <Link
                    href={cs.href}
                    className="inline-flex items-center gap-1 text-white hover:text-[#d4a342] transition-colors"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#d4a342] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProjectsCaseStudiesSection;
