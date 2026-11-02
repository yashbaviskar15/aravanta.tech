"use client";

import React, { useState } from "react";
import {
  Search,
  Compass,
  Hammer,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

interface Stage {
  number: string;
  name: string;
  tagline: string;
  icon: React.ElementType;
  description: string;
  deliverables: string[];
  metrics: string;
}

const stages: Stage[] = [
  {
    number: "01",
    name: "Discover",
    tagline: "Architecture Baseline & Technical Debt Discovery",
    icon: Search,
    description:
      "We begin by auditing existing compute topologies, network packet traces, data schemas, and deployment bottlenecks. We interview engineering leads to establish true operational SLOs and unearth hidden failure dependencies.",
    deliverables: [
      "Architecture Health Scorecard",
      "SLO & Failure Domain Audit",
      "Dependency Graph Mapping",
      "FinOps Cloud Waste Benchmark",
    ],
    metrics: "100% Failure Domain Visibility",
  },
  {
    number: "02",
    name: "Architect",
    tagline: "Formal Topology & Zero-Downtime Blueprinting",
    icon: Compass,
    description:
      "Before writing a single line of production code, we model failure modes, design multi-AZ failovers, and write declarative Infrastructure as Code specifications. We produce formal RFCs and verify non-functional requirements.",
    deliverables: [
      "Production Multi-AZ Architecture RFC",
      "Data Migration Cutover Runbook",
      "Threat Model & IAM Least-Privilege Specs",
      "Network Peering & BGP Routing Plan",
    ],
    metrics: "Zero Unplanned Architectural Regressions",
  },
  {
    number: "03",
    name: "Build",
    tagline: "Declarative Infrastructure & Modular Services",
    icon: Hammer,
    description:
      "We implement declarative Terraform/OpenTofu modules, Dockerized microservices, and automated GitOps release pipelines. Everything is version-controlled, tested in ephemeral staging environments, and fully reproducible.",
    deliverables: [
      "Modular OpenTofu/Terraform Modules",
      "Zero-Downtime CI/CD Build Pipelines",
      "Containerized Runtimes & Kubernetes Manifests",
      "Secret Management & Hardware HSM Integration",
    ],
    metrics: "100% Infrastructure As Code",
  },
  {
    number: "04",
    name: "Validate",
    tagline: "Chaos Engineering, Penetration Tests & Cutover",
    icon: CheckCircle2,
    description:
      "We subject the infrastructure to synthetic network packet drops, simulated datacenter power cutoffs, and load spikes up to 10x peak. We run blue/green dual-writes to guarantee 100% data integrity before DNS cutover.",
    deliverables: [
      "Chaos Mesh Latency & Node Failure Tests",
      "Dual-Write Asynchronous Data Reconciliation",
      "External Penetration Test & CVE Verification",
      "Final Staged Production Cutover",
    ],
    metrics: "99.999% Verified Availability",
  },
  {
    number: "05",
    name: "Improve",
    tagline: "Autonomous Convergence & FinOps Optimization",
    icon: TrendingUp,
    description:
      "Post-launch, our SRE and FinOps observability daemons continuously monitor p99 latencies, anomalous traffic surges, and compute cost attribution. We refine right-sizing policies and eliminate operational toil.",
    deliverables: [
      "Automated State Drift Remediation",
      "Monthly FinOps Optimization Audits",
      "24/7 Priority SLA Response Coverage",
      "Continuous Architecture Iteration Roadmap",
    ],
    metrics: "Sub-15 Minute Continuous MTTR",
  },
];

export function EngineeringMethodologySection() {
  const [activeStage, setActiveStage] = useState(0);
  const current = stages[activeStage];
  const CurrentIcon = current.icon;

  return (
    <section id="methodology" className="py-24 sm:py-32 bg-[#06080e] border-t border-white/10 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <ScrollReveal direction="up" delay={0.05} duration={0.65}>
            <div className="inline-flex items-center gap-2 mb-3">
              <Badge variant="cyan" size="sm" dot>
                5-STAGE METHODOLOGY
              </Badge>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12} duration={0.7}>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Rigorous Engineering Methodology.
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} duration={0.7}>
            <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed font-light">
              From initial technical discovery to continuous production optimization, every phase is engineered with predictable deliverables and measurable verification gates.
            </p>
          </ScrollReveal>
        </div>

        {/* 5-Stage Step Progression Bar */}
        <ScrollReveal direction="up" delay={0.15} duration={0.7}>
          <div className="grid grid-cols-5 gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-2xl bg-[#0b0e15] border border-white/10 mb-8 sm:mb-12 overflow-x-auto">
            {stages.map((stg, idx) => {
              const Icon = stg.icon;
              const isActive = activeStage === idx;

              return (
                <button
                  key={stg.number}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className={cn(
                    "flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl text-center sm:text-left transition-all select-none min-w-[70px]",
                    isActive
                      ? "bg-white text-black font-bold shadow-lg"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.03]"
                  )}
                >
                  <Icon className={cn("w-4 h-4 shrink-0", isActive ? "text-black" : "text-[#d4a342]")} />
                  <div>
                    <span className="text-[10px] font-mono block opacity-70">STAGE {stg.number}</span>
                    <span className="text-xs sm:text-sm font-semibold truncate block">{stg.name}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active Stage Deep-Dive Card */}
        <div className="rounded-3xl bg-[#0d1017] border border-white/12 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 font-mono text-xs text-[#d4a342]">
                <CurrentIcon className="w-4 h-4" />
                <span>STAGE {current.number} OF 05 // {current.name.toUpperCase()} PHASE</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {current.name}: {current.tagline}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                {current.description}
              </p>

              {/* Deliverables List */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                  Mandatory Phase Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {current.deliverables.map((deliv, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-2.5 rounded-xl bg-white/[0.03] border border-white/8 text-xs font-mono text-zinc-300 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Stage Target Metric Showcase */}
            <div className="lg:col-span-5">
              <div className="p-7 rounded-2xl bg-[#11141e] border border-white/12 space-y-4 text-center sm:text-left">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Target Verification Benchmark
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                  {current.metrics}
                </div>
                <div className="text-xs text-zinc-400 leading-relaxed font-light">
                  Every stage must pass automated architecture health gates before proceeding to the next deployment phase.
                </div>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>Sign-off: Lead Architect</span>
                  <span className="text-white">Continuous Gate</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default EngineeringMethodologySection;
