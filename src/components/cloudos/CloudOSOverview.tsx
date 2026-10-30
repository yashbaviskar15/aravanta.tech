"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Cpu,
  Layers,
  ShieldCheck,
  Activity,
  Sliders,
  Terminal,
  ArrowRight,
  Info,
  Calendar,
  Lock,
  Workflow,
  Sparkles,
  Command,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { cloudosData } from "@/lib/content/cloudosData";
import { CloudOSArchitectureExplorer } from "@/components/3d/CloudOSArchitectureExplorer";
import DynamicIsland from "@/components/ui/dynamic-island";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CloudOSOverview() {
  const [activeCliTab, setActiveCliTab] = useState<"verify" | "policy" | "telemetry" | "finops">("verify");
  const [copied, setCopied] = useState(false);

  const cliCommands = {
    verify: {
      cmd: "cloudos cluster verify --cluster prod-mesh-01 --strict-iac",
      output: [
        "[+] Loading declarative topology from git:main@c4b2e8...",
        "[+] Querying AWS us-east-1 and GCP europe-west3 cluster endpoints...",
        "[✓] Active-Active Raft consensus: HEALTHY (3/3 nodes synced)",
        "[✓] WireGuard cross-cloud tunnel latency: 38ms (Jitter: 0.8ms)",
        "[✓] State Drift: 0.00% (All 48 workloads match Git commit)",
        "[SUCCESS] Cluster prod-mesh-01 verified nominal. Zero drift detected.",
      ],
    },
    policy: {
      cmd: "cloudos policy scan --zero-trust --spiffe-attestation",
      output: [
        "[+] Scanning 128 microservice ingress and egress routes...",
        "[✓] mTLS 1.3 Strict Mode: ENFORCED (128/128 services)",
        "[✓] SPIFFE/SPIRE x509 SVID Attestation: VALID (Auto-rotated 4h ago)",
        "[✓] Ingress Ports Exposure: 0 non-standard ports open",
        "[✓] CIS Kubernetes Benchmark v1.8: 100% Passed",
        "[SUCCESS] Zero-Trust perimeter verified. Zero security drift.",
      ],
    },
    telemetry: {
      cmd: "cloudos telemetry convergence --slo-budget 99.999",
      output: [
        "[+] Polling OpenTelemetry & eBPF daemonset telemetry...",
        "[✓] p99 Ingress Latency: 22ms (SLO Threshold: 45ms)",
        "[✓] Packet Loss Rate: 0.0000% across Anycast BGP fabric",
        "[✓] Mean Time To Convergence (MTTC): 8.4 seconds",
        "[✓] Error Budget Remaining: 99.998% for rolling 30-day window",
        "[SUCCESS] Telemetry convergence nominal. Automated healing armed.",
      ],
    },
    finops: {
      cmd: "cloudos finops optimize --target-reduction 30%",
      output: [
        "[+] Analyzing 72-hour resource utilization curves...",
        "[!] Detected 12 underutilized compute nodes in dev-preview cluster",
        "[+] Applying Karpenter bin-packing consolidation...",
        "[✓] Consolidated 12 nodes into 4 high-density Spot instances",
        "[✓] Projected Monthly Savings: $4,850.00 (34.2% reduction)",
        "[SUCCESS] Optimization applied. Zero disruption to running pods.",
      ],
    },
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formattedFaqs = cloudosData.faqs.map((f, i) => ({
    id: `cloudos-faq-${i}`,
    question: f.question,
    answer: f.answer,
  }));

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 text-white min-h-screen bg-[#08090d]">
      {/* Hero & Positioning */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute -top-12 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-5 relative z-10">
          <ScrollReveal direction="up" delay={0.05} duration={0.65} distance={16}>
            <div className="inline-flex items-center gap-2">
              <Badge variant="emerald" size="sm" dot>
                CLOUD PLATFORM INITIATIVE
              </Badge>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                {cloudosData.badge}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12} duration={0.7} distance={20}>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
              Aravanta <span className="emerald-gradient-text">CloudOS.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} duration={0.7} distance={18}>
            <p className="text-xl sm:text-2xl text-zinc-300 font-light font-mono">
              {cloudosData.tagline}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.28} duration={0.7} distance={18}>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal">
              {cloudosData.summary}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.35} duration={0.7} distance={18}>
            <div className="pt-3 flex flex-wrap gap-4">
              <Button
                href="/contact?interest=CloudOS"
                variant="primary"
                size="md"
              >
                <span>Request Technical Briefing</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                href="#roadmap"
                variant="secondary"
                size="md"
              >
                <span>View Architecture Roadmap</span>
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Dynamic Island Live Operational Telemetry HUD */}
        <ScrollReveal direction="up" delay={0.25} duration={0.75} distance={24}>
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#0d0f15] border border-white/10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 hover:border-emerald-500/30 transition-all">
            <div className="space-y-1.5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                  Autonomous State Telemetry
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                CloudOS Interactive Control Island
              </h3>
              <p className="text-xs text-zinc-400 max-w-md leading-relaxed">
                Live simulation of real-time multi-cluster telemetry, zero-trust convergence, and automated node healing daemons.
              </p>
            </div>
            <div className="shrink-0">
              <DynamicIsland showControls={true} variant="dock" />
            </div>
          </div>
        </ScrollReveal>

        {/* Platform Status Notice Banner */}
        <ScrollReveal direction="up" delay={0.3} duration={0.7} distance={20}>
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-[#0a0d14] border border-white/10 flex items-start gap-3.5 shadow-sm">
            <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              <strong className="text-white">Platform Development Status:</strong>{" "}
              {cloudosData.statusNote}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Interactive CloudOS CLI Terminal Emulator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <ScrollReveal direction="up" delay={0.15} duration={0.75} distance={24}>
          <div className="rounded-3xl bg-[#06080e] border border-white/10 overflow-hidden shadow-2xl hover:border-emerald-500/30 transition-all">
            {/* Terminal Window Header */}
            <div className="px-5 py-3.5 bg-[#0a0d15] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs font-mono text-zinc-400 ml-2 font-medium">
                  aravanta-cloudos-cli — v1.4.0-preview
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(cliCommands[activeCliTab].cmd)}
                className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 transition-colors"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? "Copied" : "Copy Command"}</span>
              </button>
            </div>

            {/* Interactive CLI Tabs */}
            <div className="px-5 py-2.5 bg-[#080a10] border-b border-white/5 flex flex-wrap gap-2">
              {(["verify", "policy", "telemetry", "finops"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveCliTab(tab)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                    activeCliTab === tab
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/40 font-bold"
                      : "text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  ${" "}
                  {tab === "verify"
                    ? "cloudos verify"
                    : tab === "policy"
                    ? "cloudos policy"
                    : tab === "telemetry"
                    ? "cloudos telemetry"
                    : "cloudos finops"}
                </button>
              ))}
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-xs sm:text-sm space-y-3 bg-[#05060a] min-h-[220px]">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <span>❯</span>
                <span>{cliCommands[activeCliTab].cmd}</span>
              </div>

              <div className="space-y-1 text-zinc-300 pt-2 font-mono text-xs leading-relaxed">
                {cliCommands[activeCliTab].output.map((line, idx) => (
                  <div
                    key={idx}
                    className={
                      line.startsWith("[✓]")
                        ? "text-emerald-400"
                        : line.startsWith("[!]")
                        ? "text-amber-400"
                        : line.startsWith("[SUCCESS]")
                        ? "text-white font-bold bg-emerald-950/30 p-1.5 rounded border border-emerald-500/20 mt-2"
                        : "text-zinc-400"
                    }
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* The Problem Space It Solves */}
      <section className="py-16 md:py-24 border-t border-white/10 bg-[#06070a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.1} duration={0.65}>
            <div className="max-w-2xl mb-12">
              <Badge variant="gold" size="sm" dot className="mb-3">
                SYSTEMIC CHALLENGES
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Why We Are Building CloudOS
              </h2>
              <p className="text-sm text-zinc-400 mt-2">
                Modern cloud architectures suffer from three recurring operational failure modes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal direction="up" delay={0.1} duration={0.65}>
              <div className="h-full rounded-2xl bg-[#0d0f15] border border-white/10 p-7 space-y-3 hover:border-emerald-500/30 hover:bg-[#12151e] transition-all shadow-lg">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                  01. Management Sprawl
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Portal &amp; Tool Fragmentation
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Teams constantly context-switch across disconnected cloud provider consoles, monitoring dashboards, and secrets managers, introducing human error and configuration drift.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.16} duration={0.65}>
              <div className="h-full rounded-2xl bg-[#0d0f15] border border-white/10 p-7 space-y-3 hover:border-emerald-500/30 hover:bg-[#12151e] transition-all shadow-lg">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                  02. Reactive Security Auditing
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Late-Stage Compliance Checks
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Security and compliance checks typically happen after resources are already deployed, creating operational friction and leaving unencrypted endpoints exposed to exploit scans.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.22} duration={0.65}>
              <div className="h-full rounded-2xl bg-[#0d0f15] border border-white/10 p-7 space-y-3 hover:border-emerald-500/30 hover:bg-[#12151e] transition-all shadow-lg">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                  03. Opaque Cost Structures
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Unattributed Cloud Waste
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Engineering teams deploy workloads without real-time insight into unit economics, resulting in multi-thousand-dollar monthly billing surprises and runaway egress expenses.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Target Architecture Pillars */}
      <section id="architecture" className="py-16 md:py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.1} duration={0.65}>
            <div className="max-w-2xl mb-12">
              <Badge variant="emerald" size="sm" dot className="mb-3">
                CONTROL PLANE PILLARS
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Target Platform Architecture
              </h2>
              <p className="text-sm text-zinc-400 mt-2">
                The four foundational systems governing the Aravanta CloudOS control plane.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cloudosData.corePillars.map((pillar, idx) => (
              <ScrollReveal key={idx} direction="up" delay={0.08 + idx * 0.08} duration={0.65}>
                <div
                  className="h-full rounded-2xl bg-[#0d0f15] border border-white/10 p-7 md:p-8 flex flex-col justify-between hover:border-emerald-500/40 hover:bg-[#12151e] transition-all shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="emerald" size="sm">
                        {pillar.badge}
                      </Badge>
                      <span className="text-[11px] font-mono text-zinc-400 border border-white/10 px-2.5 py-0.5 rounded-md">
                        Status: {pillar.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                      {pillar.description}
                    </p>

                    <div className="pt-4 border-t border-white/10">
                      <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2">
                        Architectural Tenets
                      </div>
                      <ul className="space-y-1.5">
                        {pillar.keyAspects.map((aspect, aIdx) => (
                          <li key={aIdx} className="text-xs text-zinc-300 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span>{aspect}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Interactive 3D Architectural Visualizer */}
          <div className="mt-12">
            <ScrollReveal direction="up" delay={0.15} duration={0.75}>
              <CloudOSArchitectureExplorer />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Roadmap & Milestones */}
      <section id="roadmap" className="py-16 md:py-24 border-t border-white/10 bg-[#06070a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.1} duration={0.65}>
            <div className="max-w-2xl mb-12">
              <Badge variant="lime" size="sm" dot className="mb-3">
                ROADMAP &amp; RELEASES
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Platform Engineering Roadmap
              </h2>
              <p className="text-sm text-zinc-400 mt-2">
                Phased development schedule designed for architectural rigor, stability, and zero false claims.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {cloudosData.roadmapPhases.map((phase, idx) => (
              <ScrollReveal key={idx} direction="up" delay={0.08 + idx * 0.06} duration={0.65}>
                <div
                  className="rounded-2xl bg-[#0d0f15] border border-white/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-emerald-500/30 hover:bg-[#12151e] transition-all shadow-lg"
                >
                  <div className="space-y-2 max-w-xl">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {phase.phase}
                      </h3>
                      <Badge
                        variant={idx === 0 ? "emerald" : "neutral"}
                        size="sm"
                      >
                        {phase.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-zinc-300">
                      {phase.focus}
                    </p>
                    <ul className="pt-2 space-y-1">
                      {phase.details.map((item, dIdx) => (
                        <li key={dIdx} className="text-xs text-zinc-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="shrink-0">
                    {idx === 0 ? (
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/40 px-3.5 py-1.5 rounded-full font-bold">
                        ● Active Engineering Milestone
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-zinc-400 bg-white/[0.03] border border-white/10 px-3.5 py-1.5 rounded-full">
                        ○ Roadmap Scheduled
                      </span>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product FAQs */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.1} duration={0.65}>
            <div className="mb-8 text-center">
              <Badge variant="emerald" size="sm" dot className="mb-2">
                FREQUENTLY ASKED
              </Badge>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                CloudOS Technical FAQs
              </h2>
              <p className="text-sm text-zinc-400 mt-2">
                Common questions from technology leaders exploring the platform initiative.
              </p>
            </div>

            <div className="bg-[#0d0f15] border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl">
              <Accordion items={formattedFaqs} defaultOpenId="cloudos-faq-0" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA: Request Information */}
      <section className="py-16 md:py-20 border-t border-white/10 text-center bg-[#0d0f15]/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <ScrollReveal direction="up" delay={0.1} duration={0.65}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interested in CloudOS Architecture Previews?
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed pt-2">
              Connect with our engineering leadership to review control plane specifications and evaluate design partner eligibility.
            </p>
            <div className="pt-4 flex justify-center">
              <Button
                href="/contact?interest=CloudOS"
                variant="primary"
                size="lg"
              >
                <span>Request Technical Briefing</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
