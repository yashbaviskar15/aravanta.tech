import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Terminal,
  Zap,
  Sparkles,
  Server,
  Workflow,
  ArrowUpRight,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BrandPrimaryAsset } from "@/components/ui/BrandLogo";
import { companyData } from "@/lib/content/companyData";

export const metadata: Metadata = {
  title: "About Us | Brand Vision & Systems Engineering Mindset",
  description:
    "Learn about ARAVANTA TECH, our engineering philosophy of Simpler. Safer. Smarter., and our mission in empowering enterprise cloud transformation.",
};

export default function AboutPage() {
  const lifecycleSteps = [
    {
      step: "01",
      name: "Assess & Decouple",
      description: "Thorough telemetry analysis of legacy debt, coupling bottlenecks, and single points of failure.",
      badge: "Discovery",
    },
    {
      step: "02",
      name: "Architect & Model",
      description: "Mathematically sound distributed system blueprints using zero-trust boundaries and multi-region resilience.",
      badge: "Design",
    },
    {
      step: "03",
      name: "Automate & Deploy",
      description: "Declarative GitOps and zero-drift Terraform pipelines with automated canary validations and rollback gates.",
      badge: "Execution",
    },
    {
      step: "04",
      name: "Observe & Converge",
      description: "Continuous eBPF telemetry, autonomous self-healing CloudOS daemon clusters, and sub-second MTTR.",
      badge: "Operations",
    },
  ];

  const enterpriseCommitments = [
    {
      metric: "100%",
      label: "Declarative Code",
      detail: "Zero manual console clicks. Every environment is completely reproducible via audited GitOps repositories.",
    },
    {
      metric: "0%",
      label: "Proprietary Lock-in",
      detail: "Built upon open standards (Kubernetes, Terraform, OpenTelemetry, Envoy, WireGuard) ensuring total enterprise freedom.",
    },
    {
      metric: "<15m",
      label: "Target MTTR",
      detail: "Autonomous node convergence and deterministic rollback scripts reduce mean-time-to-recovery to minutes.",
    },
    {
      metric: "99.999%",
      label: "Architecture Target",
      detail: "Engineered for financial and mission-critical grade availability across multi-AZ and hybrid infrastructure.",
    },
  ];

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 text-white min-h-screen bg-[#08090d]">
      {/* Hero Header — Editorial Swiss Split Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2">
              <Badge variant="emerald" size="sm" dot>
                SYSTEMS ARCHITECTURE &amp; CLOUD TRANSFORMATION
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
              Empowering Cloud <br />
              <span className="emerald-gradient-text">Transformation.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-zinc-300 font-light font-mono">
              Build Smarter. Grow Faster.
            </p>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal">
              {companyData.positioning}
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary" size="md">
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Button href="/technology" variant="secondary" size="md">
                <span>View Tech Stack</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>

          {/* Official Brand Identity Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-2 rounded-3xl bg-[#0d0f15] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <BrandPrimaryAsset
                size="md"
                caption="ARAVANTA TECH — Official Brand Identity & Mark"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Row — Swiss Editorial Grid */}
      <section className="border-y border-white/10 bg-[#0d0f15]/60 backdrop-blur-md py-12 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {enterpriseCommitments.map((item, idx) => (
              <div key={idx} className="space-y-1.5 border-l-2 border-emerald-500/40 pl-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                  {item.metric}
                </div>
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
                  {item.label}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy: Simpler. Safer. Smarter. */}
      <section className="py-16 md:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="gold" size="sm" dot className="mb-3">
              OUR GUIDING ARCHITECTURE PRINCIPLES
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Simpler. Safer. Smarter.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
              Three uncompromising pillars governing every architectural decision, infrastructure rollout, and code review across our consulting engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyData.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#0d0f15] border border-white/10 p-7 md:p-8 hover:border-emerald-500/40 hover:bg-[#12151e] transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
                    PILLAR 0{idx + 1}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    {idx === 0 ? <Zap className="w-4 h-4" /> : idx === 1 ? <ShieldCheck className="w-4 h-4" /> : <Cpu className="w-4 h-4" />}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Delivery Lifecycle */}
      <section className="py-16 md:py-24 border-b border-white/10 bg-[#06070a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="lime" size="sm" dot className="mb-3">
              METHODOLOGY
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              The Systems Engineering Lifecycle
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2">
              From day zero scoping to post-launch telemetry convergence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifecycleSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl bg-[#0d0f15] border border-white/10 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-zinc-600">
                      {step.step}
                    </span>
                    <Badge variant="neutral" size="sm">
                      {step.badge}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="gold" size="sm" dot className="mb-3">
              CULTURE &amp; DISCIPLINE
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              How We Solve Technology Problems
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2">
              Pragmatic systems engineering standards applied across every project milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyData.engineeringPrinciples.map((ep, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#0d0f15] border border-white/10 p-6 sm:p-7 hover:border-white/20 transition-colors"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1.5">
                      {ep.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {ep.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-white/10 bg-[#0d0f15]/80 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Partner With Aravanta Tech
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Let us help you design, modernize, and scale your technology systems with verifiable engineering certainty.
          </p>
          <div className="pt-2 flex justify-center">
            <Button href="/contact" variant="primary" size="lg">
              <span>Discuss Your Initiative</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
