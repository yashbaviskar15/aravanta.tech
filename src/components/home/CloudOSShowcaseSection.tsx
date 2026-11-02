"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Cloud,
  Layers,
  Terminal,
  Activity,
  ShieldCheck,
  Cpu,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

export function CloudOSShowcaseSection() {
  const [activeTab, setActiveTab] = useState<"cli" | "architecture" | "roadmap">("cli");

  const pillars = [
    {
      title: "Declarative Control Plane",
      status: "In Architecture",
      statusVariant: "emerald" as const,
      description: "Continuous state reconciliation loops that automatically detect and heal multi-cloud drift.",
    },
    {
      title: "Zero-Trust Guardrails",
      status: "In Architecture",
      statusVariant: "emerald" as const,
      description: "Automated cryptographic workload attestation and pre-flight policy evaluation via OPA.",
    },
    {
      title: "FinOps Telemetry Kernel",
      status: "In Development",
      statusVariant: "gold" as const,
      description: "Real-time cost attribution, idle compute reclamation, and automated right-sizing telemetry.",
    },
    {
      title: "Developer Staging Sandboxes",
      status: "Planned Phase",
      statusVariant: "cyan" as const,
      description: "Self-service ephemeral preview environments provisioned in sub-60 seconds on every pull request.",
    },
  ];

  return (
    <section id="cloudos" className="py-24 sm:py-32 bg-[#05070a] border-t border-white/10 relative z-10 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-[#d4a342]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Eyebrow & Title */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <ScrollReveal direction="up" delay={0.05} duration={0.65}>
            <div className="inline-flex items-center gap-2 mb-3">
              <Badge variant="gold" size="sm" dot>
                PROPRIETARY PLATFORM INITIATIVE
              </Badge>
              <span className="text-xs font-mono text-zinc-500">
                ACTIVE ENGINEERING MILESTONE
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12} duration={0.7}>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Aravanta CloudOS: The Operating System for Intelligent Cloud.
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} duration={0.7}>
            <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed font-light">
              Our flagship platform initiative designed to unify multi-cloud orchestration, zero-trust cryptographic guardrails, and real-time FinOps governance into a single declarative control plane.
            </p>
          </ScrollReveal>
        </div>

        {/* Tab Switcher: CLI vs Architecture vs Roadmap */}
        <ScrollReveal direction="up" delay={0.15} duration={0.7}>
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#0b0e15] border border-white/10 w-fit mb-8">
            <button
              type="button"
              onClick={() => setActiveTab("cli")}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2",
                activeTab === "cli"
                  ? "bg-white text-black font-bold shadow-md"
                  : "text-zinc-400 hover:text-white"
              )}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>CLI Simulator</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("architecture")}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2",
                activeTab === "architecture"
                  ? "bg-white text-black font-bold shadow-md"
                  : "text-zinc-400 hover:text-white"
              )}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Layer Architecture</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("roadmap")}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2",
                activeTab === "roadmap"
                  ? "bg-white text-black font-bold shadow-md"
                  : "text-zinc-400 hover:text-white"
              )}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Platform Roadmap</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Tab Content Panes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Main Visual Display */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl bg-[#0d1017] border border-white/12 p-6 sm:p-8 shadow-2xl relative overflow-hidden min-h-[440px]">
              
              {activeTab === "cli" && (
                <div className="space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-zinc-400">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      <span className="ml-2 text-zinc-300">aravanta cloudos // live terminal</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
                      DRIFT: 0.00%
                    </span>
                  </div>

                  <div className="space-y-3 text-zinc-300 text-[11px] sm:text-xs leading-relaxed">
                    <div className="text-zinc-500"># 1. Initialize declarative topology specification</div>
                    <div className="text-[#d4a342]">$ aravanta stack init --env production --regions us-east-1,eu-central-1</div>
                    <div className="text-zinc-400 pl-3">
                      [✓] Topology initialized: Multi-Region Active/Active<br />
                      [✓] Ingress: Dual-Homed BGP Anycast (Route Latency: 4.8ms)<br />
                      [✓] Zero-Trust SPIRE Agent: Bound to AWS KMS Hardware HSM
                    </div>

                    <div className="text-zinc-500 pt-2"># 2. Continuous convergence audit</div>
                    <div className="text-[#d4a342]">$ aravanta converge status</div>
                    <div className="text-emerald-400 pl-3">
                      [State] 28/28 Microservices in Desired State.<br />
                      [FinOps] 0 Unallocated EBS Volumes. Right-sizing factor: 100%.<br />
                      [SLA] Current Fleet Availability: 99.999%
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "architecture" && (
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
                    <span className="text-[#d4a342] uppercase font-bold">4-LAYER ARCHITECTURAL SUBSTRATE</span>
                    <span className="text-zinc-400 text-[11px]">Strict Separation of Concerns</span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-emerald-500/30 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-mono font-bold text-emerald-400">Layer 1: Unified Ingress &amp; Policy Guardrails</div>
                        <div className="text-xs text-zinc-400 mt-0.5">mTLS 1.3 Boundary Defense, OPA Policy Checks &amp; SPIFFE/SPIRE</div>
                      </div>
                      <Badge variant="emerald" size="xs">Active</Badge>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-sky-500/30 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-mono font-bold text-sky-400">Layer 2: CloudOS Declarative Control Plane</div>
                        <div className="text-xs text-zinc-400 mt-0.5">Autonomous State Reconciliation Loops, Raft Consensus Store</div>
                      </div>
                      <Badge variant="cyan" size="xs">Active</Badge>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-amber-500/30 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-mono font-bold text-amber-400">Layer 3: Multi-Cloud Execution Substrate</div>
                        <div className="text-xs text-zinc-400 mt-0.5">Unified Abstraction for AWS, Azure, GCP &amp; Bare-Metal Nodes</div>
                      </div>
                      <Badge variant="gold" size="xs">In Dev</Badge>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-purple-500/30 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-mono font-bold text-purple-400">Layer 4: Real-Time Telemetry &amp; FinOps Kernel</div>
                        <div className="text-xs text-zinc-400 mt-0.5">Granular Cost Attribution &amp; Autonomous Workload Right-Sizing</div>
                      </div>
                      <Badge variant="neutral" size="xs">Planned</Badge>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "roadmap" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
                    <span className="text-[#d4a342] uppercase font-bold">ENGINEERING ROADMAP &amp; MILESTONES</span>
                    <span className="text-zinc-400 text-[11px]">Transparency First</span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/30 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-emerald-400">Milestone 1: Declarative CLI &amp; IaC Synthesis</div>
                        <div className="text-zinc-400 text-[11px] mt-0.5 font-sans">
                          Completed architectural validation of multi-cloud topology generator.
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/30 flex items-start gap-3">
                      <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-amber-400">Milestone 2: Autonomous Drift Convergence Daemon</div>
                        <div className="text-zinc-400 text-[11px] mt-0.5 font-sans">
                          Currently in internal dogfooding with synthetic AWS and bare-metal clusters.
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-purple-500/5 border border-purple-500/30 flex items-start gap-3">
                      <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-purple-400">Milestone 3: FinOps Kernel &amp; Enterprise Staging Hub</div>
                        <div className="text-zinc-400 text-[11px] mt-0.5 font-sans">
                          Targeted for upcoming technical release bulletin.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Status Transparency Note */}
              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-zinc-500 flex items-center justify-between">
                <span>Note: Features reflect current architectural specs and verified internal builds.</span>
                <Link href="/cloudos" className="text-[#d4a342] hover:underline flex items-center gap-1">
                  Full Dossier <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Key Architectural Pillars */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
              PLATFORM CAPABILITIES
            </span>

            {pillars.map((pil, pIdx) => (
              <div
                key={pIdx}
                className="p-4 rounded-2xl bg-[#0b0e15] border border-white/10 space-y-2 hover:border-white/20 transition-all"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    {pil.title}
                  </h4>
                  <Badge variant={pil.statusVariant} size="xs">
                    {pil.status}
                  </Badge>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {pil.description}
                </p>
              </div>
            ))}

            <div className="pt-2">
              <Link
                href="/cloudos"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-[#08090d] font-bold text-xs uppercase tracking-wider font-mono hover:bg-zinc-200 transition-colors shadow-lg"
              >
                <span>Discover Aravanta CloudOS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CloudOSShowcaseSection;
