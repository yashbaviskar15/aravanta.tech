"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Cloud, ArrowRight, Server, Shield, Layers, RefreshCw, DollarSign, Zap, TrendingDown, CheckCircle2, Sliders } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type CloudProvider = "aws" | "azure" | "gcp" | "hybrid";

export function Scene02Cloud() {
  const [provider, setProvider] = useState<CloudProvider>("aws");
  const [monthlySpend, setMonthlySpend] = useState<number>(45000);
  const [nodeCount, setNodeCount] = useState<number>(120);
  const [multiZone, setMultiZone] = useState<boolean>(true);

  // FinOps calculation estimates based on industry benchmarks (24% - 34% typical optimization)
  const savingsRate = provider === "hybrid" ? 0.32 : provider === "aws" ? 0.28 : provider === "azure" ? 0.26 : 0.25;
  const estimatedMonthlySavings = Math.round(monthlySpend * savingsRate);
  const estimatedAnnualSavings = estimatedMonthlySavings * 12;
  const latencyReduction = multiZone ? 44 : 28;
  const recoveryRTO = multiZone ? "< 30 sec" : "< 15 min";

  const providerNames: Record<CloudProvider, string> = {
    aws: "Amazon Web Services",
    azure: "Microsoft Azure",
    gcp: "Google Cloud Platform",
    hybrid: "Hybrid / Multi-Cloud",
  };

  return (
    <section
      id="scene-02"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32 z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header Badge */}
        <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#0a0e14]/90 border border-[#222533] backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
          <span className="text-xs font-semibold tracking-wider uppercase text-brand-gold font-mono">
            SCENE 02 // CLOUD TRANSFORMATION & FINOPS
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Narrative Copy & Practice Highlights */}
          <ScrollReveal direction="up" delay={0.05} duration={0.7} distance={20} className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Make Your Infrastructure <br />
              <span className="gold-gradient-text">Work Smarter.</span>
            </h2>

            <p className="text-base sm:text-lg text-brand-gray-300 leading-relaxed font-normal">
              We help enterprises navigate the transition from legacy, fragmented systems to resilient, self-healing cloud architectures. Our cloud engineering covers strategic infrastructure planning, workload modernization, multi-zone fault tolerance, and disciplined FinOps cost control.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#0d1017]/85 border border-brand-border/70 backdrop-blur-md hover:border-brand-gold/40 transition-colors">
                <div className="flex items-center gap-2 mb-2 text-brand-gold">
                  <Cloud className="w-4 h-4" />
                  <h4 className="text-sm font-semibold text-white">Multi-Cloud Resilience</h4>
                </div>
                <p className="text-xs text-brand-gray-400 leading-relaxed">
                  Active-active topologies across AWS, Azure, and GCP designed for zero single points of failure.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0d1017]/85 border border-brand-border/70 backdrop-blur-md hover:border-brand-gold/40 transition-colors">
                <div className="flex items-center gap-2 mb-2 text-brand-gold">
                  <RefreshCw className="w-4 h-4" />
                  <h4 className="text-sm font-semibold text-white">Modernization Without Chaos</h4>
                </div>
                <p className="text-xs text-brand-gray-400 leading-relaxed">
                  Phased strangler migrations and containerization that eliminate customer-facing downtime.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0d1017]/85 border border-brand-border/70 backdrop-blur-md hover:border-brand-gold/40 transition-colors">
                <div className="flex items-center gap-2 mb-2 text-emerald-400">
                  <DollarSign className="w-4 h-4" />
                  <h4 className="text-sm font-semibold text-white">Continuous FinOps</h4>
                </div>
                <p className="text-xs text-brand-gray-400 leading-relaxed">
                  Algorithmic instance rightsizing, automated unallocated storage reclamation, and budget governance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0d1017]/85 border border-brand-border/70 backdrop-blur-md hover:border-brand-gold/40 transition-colors">
                <div className="flex items-center gap-2 mb-2 text-cyan-400">
                  <Zap className="w-4 h-4" />
                  <h4 className="text-sm font-semibold text-white">Elastic Scalability</h4>
                </div>
                <p className="text-xs text-brand-gray-400 leading-relaxed">
                  Autonomous horizontal pod autoscaling that expands dynamically with peak load demands.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="/services/cloud-solutions" variant="primary" size="md">
                <span>Explore Cloud Solutions</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Link
                href="/services/it-consulting"
                className="text-xs font-mono uppercase tracking-wider text-brand-gray-400 hover:text-brand-gold transition-colors inline-flex items-center gap-1.5"
              >
                <span>Strategic Cloud Advisory</span>
                <span>→</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Right Column: Interactive FinOps & Cloud ROI Calculator */}
          <ScrollReveal direction="left" delay={0.15} duration={0.75} distance={20} className="lg:col-span-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0a0e14]/95 border border-[#222533] backdrop-blur-xl shadow-2xl space-y-6">
              
              {/* Tool Header */}
              <div className="flex items-center justify-between pb-4 border-b border-brand-border/70">
                <div className="flex items-center gap-2.5">
                  <Sliders className="w-4 h-4 text-brand-gold" />
                  <span className="text-xs font-mono text-white font-bold tracking-wider uppercase">
                    INTERACTIVE FINOPS & ROI ESTIMATOR
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                  REAL-TIME MODEL
                </span>
              </div>

              {/* Provider Selection Tabs */}
              <div>
                <label className="block text-xs font-mono text-brand-gray-400 uppercase tracking-wider mb-2">
                  Target Cloud Environment
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {(["aws", "azure", "gcp", "hybrid"] as CloudProvider[]).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setProvider(p)}
                      className={`py-2 px-2 text-center rounded-lg text-xs font-mono font-semibold transition-all border ${
                        provider === p
                          ? "bg-brand-gold/15 text-brand-gold border-brand-gold shadow-[0_0_12px_rgba(201,162,74,0.2)]"
                          : "bg-[#121622] text-brand-gray-400 border-transparent hover:border-brand-gray-600 hover:text-white"
                      }`}
                    >
                      {p.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 1: Monthly Spend */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-brand-gray-400">CURRENT MONTHLY CLOUD SPEND</span>
                  <span className="text-white font-bold text-sm bg-black/50 px-2.5 py-1 rounded border border-brand-border/60">
                    ${monthlySpend.toLocaleString()} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="250000"
                  step="5000"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full h-2 bg-[#1b2030] rounded-lg appearance-none cursor-pointer accent-[#d4a342]"
                  aria-label="Current Monthly Cloud Spend"
                />
                <div className="flex justify-between text-[10px] font-mono text-brand-gray-500">
                  <span>$5,000</span>
                  <span>$125,000</span>
                  <span>$250,000+</span>
                </div>
              </div>

              {/* Slider 2: Node / Workload Count */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-brand-gray-400">ACTIVE WORKLOAD NODES / INSTANCES</span>
                  <span className="text-white font-bold text-sm bg-black/50 px-2.5 py-1 rounded border border-brand-border/60">
                    {nodeCount} Nodes
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={nodeCount}
                  onChange={(e) => setNodeCount(Number(e.target.value))}
                  className="w-full h-2 bg-[#1b2030] rounded-lg appearance-none cursor-pointer accent-[#d4a342]"
                  aria-label="Active Workload Nodes"
                />
                <div className="flex justify-between text-[10px] font-mono text-brand-gray-500">
                  <span>10 Nodes</span>
                  <span>500 Nodes</span>
                  <span>1,000 Nodes</span>
                </div>
              </div>

              {/* Toggle: Multi-Zone Resilience */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#121622] border border-brand-border/60">
                <div>
                  <div className="text-xs font-semibold text-white">Multi-Zone Fault Tolerance</div>
                  <div className="text-[11px] text-brand-gray-400">Active-active multi-region failover configuration</div>
                </div>
                <button
                  type="button"
                  onClick={() => setMultiZone(!multiZone)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-1 focus:ring-brand-gold ${
                    multiZone ? "bg-brand-gold" : "bg-gray-700"
                  }`}
                  aria-label="Toggle Multi-Zone Fault Tolerance"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      multiZone ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Dynamic Calculated Impact Cards */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-950/40 to-[#0e171b] border border-emerald-500/30">
                  <div className="text-[11px] font-mono text-emerald-400 font-semibold mb-1 flex items-center gap-1.5">
                    <TrendingDown className="w-3.5 h-3.5" />
                    EST. ANNUAL SAVINGS
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                    ${estimatedAnnualSavings.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-brand-gray-400 mt-1">
                    ~${estimatedMonthlySavings.toLocaleString()}/mo rightsizing gain
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-950/40 to-[#0a1520] border border-cyan-500/30">
                  <div className="text-[11px] font-mono text-cyan-400 font-semibold mb-1 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    LATENCY & FAILOVER
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                    -{latencyReduction}%
                  </div>
                  <div className="text-[10px] text-brand-gray-400 mt-1">
                    Recovery RTO: {recoveryRTO}
                  </div>
                </div>
              </div>

              {/* Automated Recommendations Checklist */}
              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-mono text-brand-gold uppercase tracking-wider">
                  PROJECTED ARCHITECTURAL BLUEPRINT // {providerNames[provider]}
                </div>
                <div className="space-y-1.5 text-xs text-brand-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Eliminate ~{Math.round(nodeCount * 0.22)} over-provisioned idle instances</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Automate Spot & Savings Plans coverage up to 65% of baseline</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Deploy distributed ingress with sub-second health-check failover</span>
                  </div>
                </div>
              </div>

              {/* Direct Link to Schedule Assessment */}
              <div className="pt-2">
                <Button href="/contact" variant="primary" size="sm" className="w-full justify-center">
                  <span>Schedule Architectural FinOps Review</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

export default Scene02Cloud;
