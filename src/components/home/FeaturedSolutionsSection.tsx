"use client";

import React from "react";
import Link from "next/link";
import {
  Boxes,
  Layers,
  ShieldCheck,
  TrendingDown,
  RefreshCw,
  Cpu,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface SolutionItem {
  id: string;
  category: string;
  badgeVariant: "gold" | "emerald" | "cyan" | "lime";
  title: string;
  description: string;
  architectureHighlights: string[];
  metrics: string;
  href: string;
  icon: React.ElementType;
}

const solutions: SolutionItem[] = [
  {
    id: "cloud-modernization",
    category: "CLOUD RE-PLATFORMING",
    badgeVariant: "emerald",
    title: "Enterprise Cloud Modernization",
    description:
      "Transitioning rigid on-premise hypervisors and legacy VMware clusters into multi-cloud, containerized environments with zero business disruption.",
    architectureHighlights: [
      "Zero-Downtime Data Migration",
      "Multi-AZ High Availability",
      "Terraform IaC Topologies",
    ],
    metrics: "99.999% Migration Uptime",
    href: "/solutions#fintech",
    icon: Layers,
  },
  {
    id: "infrastructure-automation",
    category: "SRE & BARE-METAL",
    badgeVariant: "gold",
    title: "Infrastructure Automation & SRE",
    description:
      "Declarative bare-metal fleet management, automated IPMI controllers, and eBPF telemetry that resolves node degradation before SLOs suffer.",
    architectureHighlights: [
      "Sub-5min Node Provisioning",
      "eBPF Autonomous Remediation",
      "Multi-Homed BGP Anycast",
    ],
    metrics: "Sub-15 Minute MTTR",
    href: "/services/it-infrastructure",
    icon: Cpu,
  },
  {
    id: "application-modernization",
    category: "STRANGLER-FIG ARCHITECTURE",
    badgeVariant: "cyan",
    title: "Application Modernization",
    description:
      "Decoupling fragile multi-decade monolithic backends into independent microservices using strict OpenAPI gateways and asynchronous event queues.",
    architectureHighlights: [
      "Strangler-Fig Decoupling",
      "Event-Driven CQRS Ledgers",
      "Automated Contract Testing",
    ],
    metrics: "70% Faster Release Cycles",
    href: "/solutions#modernization",
    icon: RefreshCw,
  },
  {
    id: "cloud-cost-optimization",
    category: "FINOPS GOVERNANCE",
    badgeVariant: "emerald",
    title: "Cloud Cost & FinOps Optimization",
    description:
      "Continuous algorithmic analysis of compute clusters, idle storage volumes, and network egress routing to reclaim over-provisioned cloud capital.",
    architectureHighlights: [
      "Real-Time FinOps Attribution",
      "Automated Right-Sizing Policies",
      "Spot/Preemptible Workload Fleet",
    ],
    metrics: "Average 32% Waste Cut",
    href: "/services/cloud-solutions",
    icon: TrendingDown,
  },
  {
    id: "scalable-platform-architecture",
    category: "MULTI-TENANT SAAS",
    badgeVariant: "gold",
    title: "Scalable Platform Architecture",
    description:
      "Engineered multi-tenant isolation, dynamic tenant resource pooling, and auto-scaling compute pools designed for rapid enterprise SaaS growth.",
    architectureHighlights: [
      "Cryptographic Tenant Isolation",
      "Autonomous Pod Horizontal Scaling",
      "Sub-20ms Read/Write p99 Latency",
    ],
    metrics: "10,000+ Concurrent Tenants",
    href: "/solutions#enterprise-saas",
    icon: Boxes,
  },
  {
    id: "security-engineering",
    category: "ZERO-TRUST DEFENSE",
    badgeVariant: "lime",
    title: "Zero-Trust Security Engineering",
    description:
      "Mutual TLS service meshes, hardware-backed secret vaults, continuous SBOM generation, and automated compliance auditing for defense-in-depth.",
    architectureHighlights: [
      "mTLS 1.3 Workload Attestation",
      "Continuous CVE Vulnerability Gates",
      "SOC 2 / ISO 27001 Hardening",
    ],
    metrics: "Zero Unauthenticated Ingress",
    href: "/services/cybersecurity",
    icon: ShieldCheck,
  },
];

export function FeaturedSolutionsSection() {
  return (
    <section id="solutions" className="py-24 sm:py-32 bg-[#06080e] border-t border-white/10 relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <ScrollReveal direction="up" delay={0.05} duration={0.65}>
              <div className="inline-flex items-center gap-2 mb-3">
                <Badge variant="emerald" size="sm" dot>
                  FEATURED SOLUTIONS
                </Badge>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.12} duration={0.7}>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
                Architectural Solutions for Complex Environments.
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} duration={0.7}>
              <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed font-light">
                Tailored engineering architectures designed to solve the most demanding scalability, cost, and reliability bottlenecks.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.25} duration={0.7}>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#d4a342] hover:text-[#f3cc72] transition-colors shrink-0"
            >
              <span>Explore all industry blueprints</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>

        {/* 6-Grid Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, idx) => {
            const Icon = sol.icon;

            return (
              <ScrollReveal
                key={sol.id}
                direction="up"
                delay={0.08 * (idx + 1)}
                duration={0.7}
                distance={20}
              >
                <div className="rounded-3xl bg-[#0b0e15] border border-white/10 p-7 sm:p-8 space-y-5 hover:border-white/20 transition-all group flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#d4a342] group-hover:border-[#d4a342]/40 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <Badge variant={sol.badgeVariant} size="xs" dot>
                        {sol.category}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#d4a342] transition-colors">
                      {sol.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                      {sol.description}
                    </p>

                    {/* Architecture Highlights */}
                    <div className="pt-2 space-y-1.5 border-t border-white/5">
                      {sol.architectureHighlights.map((hl, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-center gap-2 text-xs font-mono text-zinc-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Metrics & Link */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-emerald-400 font-semibold">{sol.metrics}</span>
                    <Link
                      href={sol.href}
                      className="text-zinc-400 group-hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#d4a342] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FeaturedSolutionsSection;
