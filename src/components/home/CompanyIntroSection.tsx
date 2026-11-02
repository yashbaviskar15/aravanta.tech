"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Terminal, Cpu, Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ScrollStagger } from "@/components/ui/ScrollStagger";

export function CompanyIntroSection() {
  const pillars = [
    {
      title: "Simpler",
      badge: "Clarity over Chaos",
      color: "border-amber-500/30 text-amber-400 bg-amber-500/5",
      description:
        "We reject unnecessary technical complexity. We replace brittle architectures and convoluted workflows with clean, maintainable systems that empower your engineers rather than overwhelm them.",
      metric: "91% Reduction in Operational Toil",
    },
    {
      title: "Safer",
      badge: "Cryptographic Rigor",
      color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5",
      description:
        "Security is an intrinsic architectural foundation, not an afterthought. We implement zero-trust perimeters, defensive code practices, ephemeral tokens, and strict credential isolation at every layer.",
      metric: "Zero-Trust SPIFFE/SPIRE Attestation",
    },
    {
      title: "Smarter",
      badge: "Sustainable Velocity",
      color: "border-cyan-500/30 text-cyan-400 bg-cyan-500/5",
      description:
        "We engineer for sustainable velocity and commercial impact. Every architectural decision is grounded in real business requirements, predictable scalability, and disciplined cloud resource governance.",
      metric: "32% FinOps Cloud Spend Reduction",
    },
  ];

  return (
    <section id="company-intro" className="relative py-24 sm:py-32 bg-[#06080e] border-t border-white/10 z-10 overflow-hidden">
      {/* Subtle Background Radial Gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#d4a342]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Top Headline Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 sm:mb-20">
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal direction="up" delay={0.05} duration={0.65}>
              <div className="inline-flex items-center gap-2">
                <Badge variant="gold" size="sm" dot>
                  COMPANY INTRODUCTION
                </Badge>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.12} duration={0.7}>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
                Architects of <br />
                <span className="text-zinc-400">Mission-Critical</span> <br />
                <span className="gold-gradient-text">Cloud Systems.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} duration={0.7}>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#d4a342] hover:text-[#f3cc72] transition-colors group"
                >
                  <span>Read our full digital philosophy</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
            <ScrollReveal direction="up" delay={0.15} duration={0.7}>
              <p className="text-white text-xl sm:text-2xl font-normal leading-snug">
                ARAVANTA TECH is an elite systems engineering and cloud transformation company. We bridge the critical gap between high-level architectural strategy and hands-on, battle-hardened implementation.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.25} duration={0.7}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-3 text-sm text-zinc-400">
                <div className="space-y-2 p-5 rounded-2xl bg-white/[0.02] border border-white/8">
                  <div className="text-xs font-mono uppercase font-bold text-white tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>What We Engineer</span>
                  </div>
                  <p className="leading-relaxed">
                    Automated multi-cloud compute backbones, high-concurrency microservices, resilient GitOps pipelines, and zero-trust cryptographic security perimeters.
                  </p>
                </div>

                <div className="space-y-2 p-5 rounded-2xl bg-white/[0.02] border border-white/8">
                  <div className="text-xs font-mono uppercase font-bold text-white tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4a342]" />
                    <span>What Makes Us Distinct</span>
                  </div>
                  <p className="leading-relaxed">
                    Zero static broken mockups. We operate with strict contractual 99.999% SLA benchmarks, verifiable infrastructure-as-code, and provable telemetry.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* 3 Core Pillars: Simpler, Safer, Smarter */}
        <ScrollReveal direction="up" delay={0.1} duration={0.75}>
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              OUR ENGINEERING PHILOSOPHY // 3 FOUNDATIONAL PILLARS
            </span>
            <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">
              METHODOLOGY-DRIVEN EXECUTION
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <ScrollReveal key={pillar.title} direction="up" delay={0.12 * (idx + 1)} duration={0.7} distance={20}>
              <div className="h-full rounded-3xl bg-[#0b0e16] border border-white/10 p-7 sm:p-8 space-y-5 hover:border-white/20 transition-all group flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${pillar.color}`}>
                      {pillar.badge}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">0{idx + 1}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#d4a342] transition-colors">
                    {pillar.title}.
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{pillar.metric}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CompanyIntroSection;
