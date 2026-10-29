"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, DollarSign, TrendingDown, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CloudCostCalculator() {
  const [monthlySpend, setMonthlySpend] = useState<number>(35000);
  const [workloadCount, setWorkloadCount] = useState<number>(18);
  const [cloudStage, setCloudStage] = useState<"lift-and-shift" | "hybrid" | "legacy">("lift-and-shift");

  // Estimation multipliers based on FinOps industry benchmarks
  const savingsRate = cloudStage === "legacy" ? 0.34 : cloudStage === "lift-and-shift" ? 0.28 : 0.22;
  const annualSavings = Math.round(monthlySpend * 12 * savingsRate);
  const monthlySavings = Math.round(monthlySpend * savingsRate);
  const migrationWeeks = Math.max(4, Math.round(workloadCount * 0.65));

  return (
    <section className="py-20 md:py-28 bg-[#090a0d] border-t border-brand-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="FINOPS & VALUE ESTIMATOR"
          title="Calculate Your Cloud Optimization Potential"
          description="Estimate potential annual cloud waste reduction, latency improvements, and migration timelines based on your current workload scale."
          align="center"
        />

        <div className="max-w-4xl mx-auto rounded-2xl bg-brand-surface border border-brand-border p-6 sm:p-8 md:p-10 shadow-2xl gold-border-glow">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Inputs */}
            <div className="md:col-span-6 space-y-6">
              {/* Slider 1: Monthly Spend */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-brand-gray-300 uppercase">Estimated Monthly Cloud Spend</span>
                  <span className="text-brand-gold font-bold text-sm">
                    ${monthlySpend.toLocaleString()} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min={5000}
                  max={200000}
                  step={5000}
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full h-2 bg-brand-surfaceElevated rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
                <div className="flex justify-between text-[10px] text-brand-gray-500 font-mono">
                  <span>$5,000</span>
                  <span>$100,000</span>
                  <span>$200,000+</span>
                </div>
              </div>

              {/* Slider 2: Number of Workloads */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-brand-gray-300 uppercase">Production Workloads & Services</span>
                  <span className="text-white font-bold text-sm">
                    {workloadCount} Services
                  </span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={80}
                  step={1}
                  value={workloadCount}
                  onChange={(e) => setWorkloadCount(Number(e.target.value))}
                  className="w-full h-2 bg-brand-surfaceElevated rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
                <div className="flex justify-between text-[10px] text-brand-gray-500 font-mono">
                  <span>3 Services</span>
                  <span>40 Services</span>
                  <span>80+ Services</span>
                </div>
              </div>

              {/* Stage Selector */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-brand-gray-300 uppercase">
                  Current Infrastructure Posture
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setCloudStage("legacy")}
                    className={`p-2.5 rounded-lg text-xs font-mono border text-center transition-all ${
                      cloudStage === "legacy"
                        ? "bg-brand-gold/15 border-brand-gold text-brand-gold font-bold"
                        : "bg-brand-surfaceElevated border-brand-border text-brand-gray-400 hover:text-white"
                    }`}
                  >
                    On-Prem / Legacy
                  </button>
                  <button
                    type="button"
                    onClick={() => setCloudStage("lift-and-shift")}
                    className={`p-2.5 rounded-lg text-xs font-mono border text-center transition-all ${
                      cloudStage === "lift-and-shift"
                        ? "bg-brand-gold/15 border-brand-gold text-brand-gold font-bold"
                        : "bg-brand-surfaceElevated border-brand-border text-brand-gray-400 hover:text-white"
                    }`}
                  >
                    Unoptimized Cloud
                  </button>
                  <button
                    type="button"
                    onClick={() => setCloudStage("hybrid")}
                    className={`p-2.5 rounded-lg text-xs font-mono border text-center transition-all ${
                      cloudStage === "hybrid"
                        ? "bg-brand-gold/15 border-brand-gold text-brand-gold font-bold"
                        : "bg-brand-surfaceElevated border-brand-border text-brand-gray-400 hover:text-white"
                    }`}
                  >
                    Hybrid Mesh
                  </button>
                </div>
              </div>
            </div>

            {/* Right Projection Card */}
            <div className="md:col-span-6 rounded-xl bg-brand-surfaceElevated border border-brand-border p-6 sm:p-7 space-y-5">
              <div className="border-b border-brand-border/60 pb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-brand-gold font-semibold">
                  Projected Annual Cloud Waste Reduction
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mt-1">
                  ${annualSavings.toLocaleString()} <span className="text-xs text-brand-gray-400 font-normal">/ year</span>
                </div>
                <div className="text-xs text-emerald-400 font-mono mt-0.5">
                  Approx. ${monthlySavings.toLocaleString()} saved every month
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-lg bg-brand-dark border border-brand-border">
                  <div className="text-brand-gray-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Est. Migration</span>
                  </div>
                  <div className="text-white font-bold text-sm mt-1">
                    ~{migrationWeeks} Weeks
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-brand-dark border border-brand-border">
                  <div className="text-brand-gray-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Target Recovery</span>
                  </div>
                  <div className="text-white font-bold text-sm mt-1">
                    Zero-Downtime
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  href={`/contact?service=Cloud%20Solutions&summary=${encodeURIComponent(
                    `We spend approx $${monthlySpend}/mo across ${workloadCount} services and want to explore cloud optimization and FinOps.`
                  )}`}
                  variant="primary"
                  size="md"
                  className="w-full font-bold shadow-md shadow-brand-gold/20"
                >
                  <span>Request Full Architecture Audit</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>

              <p className="text-[10px] text-brand-gray-500 font-mono text-center">
                Calculations based on standard instance right-sizing and multi-zone architectural patterns.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
