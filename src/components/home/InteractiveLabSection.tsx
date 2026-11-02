"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  Layers,
  Cpu,
  ShieldCheck,
  Sliders,
  DollarSign,
  TrendingDown,
  Terminal,
  Clock,
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

export function InteractiveLabSection() {
  const [activeTool, setActiveTool] = useState<"finops" | "architecture" | "cicd" | "scope">("finops");

  // 1. FinOps Calculator State
  const [monthlySpend, setMonthlySpend] = useState<number>(45000);
  const [workloadCount, setWorkloadCount] = useState<number>(24);
  const [cloudStage, setCloudStage] = useState<"legacy" | "lift-and-shift" | "hybrid">("lift-and-shift");

  const savingsRate = cloudStage === "legacy" ? 0.34 : cloudStage === "lift-and-shift" ? 0.28 : 0.22;
  const annualSavings = Math.round(monthlySpend * 12 * savingsRate);
  const monthlySavings = Math.round(monthlySpend * savingsRate);
  const migrationWeeks = Math.max(4, Math.round(workloadCount * 0.65));

  // 2. CI/CD Simulator State
  const [pipelineState, setPipelineState] = useState<"idle" | "running" | "passed">("passed");
  const [pipelineStage, setPipelineStage] = useState<number>(4);

  const runSimulation = () => {
    setPipelineState("running");
    setPipelineStage(1);
    setTimeout(() => setPipelineStage(2), 600);
    setTimeout(() => setPipelineStage(3), 1200);
    setTimeout(() => {
      setPipelineStage(4);
      setPipelineState("passed");
    }, 1800);
  };

  // 3. Project Scope Estimator State
  const [scopePractice, setScopePractice] = useState("Cloud Solutions");
  const [teamSize, setTeamSize] = useState("10-50 Engineers");
  const [targetTimeline, setTargetTimeline] = useState("3-6 Months");

  return (
    <section id="interactive-lab" className="py-24 sm:py-32 bg-[#05070a] border-t border-white/10 relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4a342]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <ScrollReveal direction="up" delay={0.05} duration={0.65}>
            <div className="inline-flex items-center gap-2 mb-3">
              <Badge variant="gold" size="sm" dot>
                INTERACTIVE ENGINEERING LAB
              </Badge>
              <span className="text-xs font-mono text-zinc-500">
                PROVABLE ESTIMATION &amp; SIMULATION
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12} duration={0.7}>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Explore Our Interactive Tools &amp; Simulators.
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} duration={0.7}>
            <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed font-light">
              Hands-on tools to estimate cloud cost reductions, inspect architectural layers, simulate GitOps pipelines, and scope project timelines.
            </p>
          </ScrollReveal>
        </div>

        {/* Tool Navigation Switcher Tabs */}
        <ScrollReveal direction="up" delay={0.15} duration={0.7}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-2xl bg-[#0b0e15] border border-white/10 mb-8 sm:mb-12">
            <button
              type="button"
              onClick={() => setActiveTool("finops")}
              className={cn(
                "flex items-center gap-2.5 p-3 sm:p-4 rounded-xl text-left transition-all select-none",
                activeTool === "finops"
                  ? "bg-white text-black font-bold shadow-lg"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.03]"
              )}
            >
              <DollarSign className={cn("w-4 h-4 shrink-0", activeTool === "finops" ? "text-black" : "text-emerald-400")} />
              <div>
                <span className="text-[10px] font-mono block opacity-70">TOOL 01</span>
                <span className="text-xs sm:text-sm font-semibold truncate block">FinOps Estimator</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveTool("architecture")}
              className={cn(
                "flex items-center gap-2.5 p-3 sm:p-4 rounded-xl text-left transition-all select-none",
                activeTool === "architecture"
                  ? "bg-white text-black font-bold shadow-lg"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.03]"
              )}
            >
              <Layers className={cn("w-4 h-4 shrink-0", activeTool === "architecture" ? "text-black" : "text-[#d4a342]")} />
              <div>
                <span className="text-[10px] font-mono block opacity-70">TOOL 02</span>
                <span className="text-xs sm:text-sm font-semibold truncate block">Architecture Explorer</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveTool("cicd")}
              className={cn(
                "flex items-center gap-2.5 p-3 sm:p-4 rounded-xl text-left transition-all select-none",
                activeTool === "cicd"
                  ? "bg-white text-black font-bold shadow-lg"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.03]"
              )}
            >
              <Cpu className={cn("w-4 h-4 shrink-0", activeTool === "cicd" ? "text-black" : "text-cyan-400")} />
              <div>
                <span className="text-[10px] font-mono block opacity-70">TOOL 03</span>
                <span className="text-xs sm:text-sm font-semibold truncate block">CI/CD Simulator</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveTool("scope")}
              className={cn(
                "flex items-center gap-2.5 p-3 sm:p-4 rounded-xl text-left transition-all select-none",
                activeTool === "scope"
                  ? "bg-white text-black font-bold shadow-lg"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.03]"
              )}
            >
              <Sliders className={cn("w-4 h-4 shrink-0", activeTool === "scope" ? "text-black" : "text-purple-400")} />
              <div>
                <span className="text-[10px] font-mono block opacity-70">TOOL 04</span>
                <span className="text-xs sm:text-sm font-semibold truncate block">Scope Estimator</span>
              </div>
            </button>
          </div>
        </ScrollReveal>

        {/* Tool Container Card */}
        <div className="rounded-3xl bg-[#0d1017] border border-white/12 p-4 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* TOOL 1: FINOPS ESTIMATOR */}
          {activeTool === "finops" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <Badge variant="emerald" size="sm" dot>FINOPS RECLAMATION CALCULATOR</Badge>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
                    Estimate Annual Cloud Cost Optimization
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-light">
                    Adjust current spend and workload count to calculate reclaimable waste and migration timeline.
                  </p>
                </div>

                {/* Slider 1: Monthly Spend */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-zinc-400 uppercase">Current Monthly Cloud Spend:</span>
                    <span className="text-emerald-400 font-bold text-sm">
                      ${monthlySpend.toLocaleString()} / mo
                    </span>
                  </div>
                  <input
                    type="range"
                    min={5000}
                    max={250000}
                    step={5000}
                    value={monthlySpend}
                    onChange={(e) => setMonthlySpend(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                    <span>$5,000</span>
                    <span>$125,000</span>
                    <span>$250,000+</span>
                  </div>
                </div>

                {/* Slider 2: Workloads */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-zinc-400 uppercase">Production Workload &amp; Service Count:</span>
                    <span className="text-white font-bold text-sm">
                      {workloadCount} Services
                    </span>
                  </div>
                  <input
                    type="range"
                    min={4}
                    max={100}
                    step={2}
                    value={workloadCount}
                    onChange={(e) => setWorkloadCount(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#d4a342]"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                    <span>4 Services</span>
                    <span>50 Services</span>
                    <span>100+ Services</span>
                  </div>
                </div>

                {/* Posture Buttons */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-zinc-400 uppercase block">
                    Current Architecture Posture:
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "legacy", label: "Legacy On-Prem" },
                      { id: "lift-and-shift", label: "Lift-and-Shift" },
                      { id: "hybrid", label: "Hybrid Cloud" },
                    ].map((posture) => (
                      <button
                        key={posture.id}
                        type="button"
                        onClick={() => setCloudStage(posture.id as any)}
                        className={cn(
                          "p-2.5 rounded-xl text-xs font-mono border text-center transition-all",
                          cloudStage === posture.id
                            ? "bg-emerald-500/15 border-emerald-500/50 text-emerald-400 font-bold"
                            : "bg-white/[0.02] border-white/8 text-zinc-400 hover:text-white"
                        )}
                      >
                        {posture.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* FinOps Output Panel */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-4 sm:p-6 rounded-2xl bg-[#121622] border border-white/15 space-y-4 shadow-xl">
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center justify-between">
                    <span>ESTIMATED ANNUAL SAVINGS</span>
                    <span className="text-emerald-400 font-bold">{(savingsRate * 100).toFixed(0)}% REDUCTION</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">
                    ${annualSavings.toLocaleString()}
                    <span className="text-xs font-normal text-zinc-400 block font-sans mt-0.5">
                      reclaimable per year (${monthlySavings.toLocaleString()} / mo)
                    </span>
                  </div>

                  <div className="pt-3 border-t border-white/10 space-y-2 text-xs font-mono text-zinc-300">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Estimated Migration Duration:</span>
                      <span className="text-white font-bold">{migrationWeeks} Weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Contractual SLA Uptime:</span>
                      <span className="text-emerald-400 font-bold">99.999%</span>
                    </div>
                  </div>

                  <Link
                    href={`/contact?interest=FinOps&spend=${monthlySpend}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-[#08090d] font-bold text-xs uppercase tracking-wider font-mono hover:bg-zinc-200 transition-colors shadow-lg"
                  >
                    <span>Request Detailed FinOps Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* TOOL 2: ARCHITECTURE EXPLORER */}
          {activeTool === "architecture" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Badge variant="gold" size="sm" dot>ARCHITECTURE BLUEPRINT EXPLORER</Badge>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
                    Multi-Cloud Infrastructure Stack Explorer
                  </h3>
                </div>
                <Link href="/case-studies" className="text-xs font-mono text-[#d4a342] hover:underline flex items-center gap-1">
                  <span>View full case studies</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    tier: "TIER 01",
                    title: "Edge Ingress & Anycast",
                    desc: "Dual-homed BGP routing with sub-5ms metro transit and DDoS scrubbing.",
                    spec: "4.8ms Route Transit",
                  },
                  {
                    tier: "TIER 02",
                    title: "Kubernetes Compute Core",
                    desc: "Auto-scaling microservices with SPIRE cryptographic workload identities.",
                    spec: "Sub-20ms p99 Latency",
                  },
                  {
                    tier: "TIER 03",
                    title: "Event Ledger & Kafka",
                    desc: "CQRS event queues with asynchronous dual-write reconciliation workers.",
                    spec: "Zero Transaction Loss",
                  },
                  {
                    tier: "TIER 04",
                    title: "Multi-AZ Persistence",
                    desc: "Triple-replicated NVMe storage with automated cross-region snapshot parity.",
                    spec: "RPO < 5s / RTO < 60s",
                  },
                ].map((tier, tIdx) => (
                  <div
                    key={tIdx}
                    className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 hover:border-[#d4a342]/40 transition-all"
                  >
                    <span className="text-[10px] font-mono text-[#d4a342] uppercase font-bold tracking-wider">
                      {tier.tier}
                    </span>
                    <h4 className="text-base font-bold text-white tracking-tight">
                      {tier.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light">
                      {tier.desc}
                    </p>
                    <div className="pt-2 border-t border-white/5 text-[11px] font-mono text-emerald-400 font-semibold">
                      ✓ {tier.spec}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TOOL 3: CI/CD SIMULATOR */}
          {activeTool === "cicd" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <Badge variant="cyan" size="sm" dot>GITOPS CONTINUOUS PIPELINE</Badge>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
                    Zero-Downtime Deployment Gate Simulator
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={runSimulation}
                  disabled={pipelineState === "running"}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:brightness-110 disabled:opacity-50 transition-all self-start sm:self-auto"
                >
                  <RefreshCw className={cn("w-3.5 h-3.5", pipelineState === "running" && "animate-spin")} />
                  <span>{pipelineState === "running" ? "Running Gates..." : "Trigger Deployment Pipeline"}</span>
                </button>
              </div>

              {/* 4 Pipeline Stages */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                {[
                  { stage: 1, name: "Lint & Unit Tests", time: "18s" },
                  { stage: 2, name: "SBOM CVE Scan", time: "24s" },
                  { stage: 3, name: "Canary Deploy (10%)", time: "30s" },
                  { stage: 4, name: "Full Promotion (100%)", time: "12s" },
                ].map((s) => {
                  const isDone = pipelineStage >= s.stage;
                  const isCurrent = pipelineStage === s.stage && pipelineState === "running";

                  return (
                    <div
                      key={s.stage}
                      className={cn(
                        "p-4 rounded-2xl border transition-all space-y-1.5",
                        isDone
                          ? "bg-emerald-500/5 border-emerald-500/30 text-white"
                          : "bg-white/[0.02] border-white/8 text-zinc-500"
                      )}
                    >
                      <div className="flex items-center justify-between font-mono text-xs">
                        <span>STAGE 0{s.stage}</span>
                        {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                      </div>
                      <div className="text-xs sm:text-sm font-bold truncate">{s.name}</div>
                      <div className="text-[10px] font-mono opacity-60">Avg Duration: {s.time}</div>
                    </div>
                  );
                })}
              </div>

              {/* Console Output */}
              <div className="p-4 rounded-2xl bg-[#08090d] border border-white/10 font-mono text-xs text-zinc-300 space-y-1">
                <div className="text-zinc-500 text-[11px] pb-1 border-b border-white/10">
                  aravanta-runner // live-deployment-stream
                </div>
                <div className="text-emerald-400 pt-1">
                  [✓] All 4 Gates Verified. Zero Customer-Facing Latency Degradation.
                </div>
              </div>
            </div>
          )}

          {/* TOOL 4: PROJECT SCOPE ESTIMATOR */}
          {activeTool === "scope" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <Badge variant="gold" size="sm" dot>PROJECT SCOPE &amp; READINESS</Badge>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
                    Scope Your Engineering Engagement
                  </h3>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div className="space-y-1.5">
                    <span className="text-zinc-400 uppercase">Primary Practice Area:</span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {["Cloud Solutions", "DevOps & SRE", "Cybersecurity", "Modernization", "App Engineering"].map((prac) => (
                        <button
                          key={prac}
                          type="button"
                          onClick={() => setScopePractice(prac)}
                          className={cn(
                            "p-2.5 rounded-xl border text-center transition-all",
                            scopePractice === prac
                              ? "bg-[#d4a342]/15 border-[#d4a342]/60 text-[#d4a342] font-bold"
                              : "bg-white/[0.02] border-white/8 text-zinc-400 hover:text-white"
                          )}
                        >
                          {prac}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-zinc-400 uppercase">Engineering Team Scale:</span>
                    <div className="grid grid-cols-3 gap-2">
                      {["1-10 Engineers", "10-50 Engineers", "50+ Engineers"].map((sz) => (
                        <button
                          key={sz}
                          type="button"
                          onClick={() => setTeamSize(sz)}
                          className={cn(
                            "p-2.5 rounded-xl border text-center transition-all",
                            teamSize === sz
                              ? "bg-white text-black font-bold"
                              : "bg-white/[0.02] border-white/8 text-zinc-400 hover:text-white"
                          )}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-[#121622] border border-white/15 space-y-4 text-xs font-mono">
                  <div className="text-zinc-400 uppercase tracking-wider">ESTIMATED ENGAGEMENT PROFILE</div>
                  <div className="text-xl font-bold text-white font-sans">{scopePractice}</div>
                  
                  <div className="space-y-2 pt-2 border-t border-white/10 text-zinc-300">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Initial Discovery:</span>
                      <span className="text-white font-bold">1-2 Weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Target Rollout:</span>
                      <span className="text-[#d4a342] font-bold">4-12 Weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">SLA Availability:</span>
                      <span className="text-emerald-400 font-bold">99.999%</span>
                    </div>
                  </div>

                  <Link
                    href={`/contact?service=${encodeURIComponent(scopePractice)}&team=${encodeURIComponent(teamSize)}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-[#08090d] font-bold text-xs uppercase tracking-wider font-mono hover:bg-zinc-200 transition-colors shadow-lg"
                  >
                    <span>Schedule Architecture Scoping Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default InteractiveLabSection;
