import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  Database,
  Cloud,
  Cpu,
  ShieldCheck,
  Terminal,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { companyData } from "@/lib/content/companyData";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Technology Capabilities & Engineering Stacks | ARAVANTA TECH",
  description:
    "Explore ARAVANTA TECH's production engineering stack across modern frontend, distributed backends, multi-cloud platforms, GitOps automation, and zero-trust security.",
};

const techCategories = [
  {
    title: "Modern Frontend Engineering",
    icon: Code2,
    badge: "CLIENT-SIDE",
    badgeVariant: "emerald" as const,
    description:
      "Engineered for sub-second LCP, strict WCAG accessibility, SEO indexability, and typed component contracts.",
    items: companyData.techStack.frontend,
  },
  {
    title: "Backend & Distributed Systems",
    icon: Database,
    badge: "DATA & COMPUTE",
    badgeVariant: "cyan" as const,
    description:
      "High-throughput transactional ledgers, gRPC/REST services, distributed caching, and ACID persistence.",
    items: companyData.techStack.backend,
  },
  {
    title: "Cloud & Compute Platforms",
    icon: Cloud,
    badge: "MULTI-CLOUD",
    badgeVariant: "lime" as const,
    description:
      "Multi-region VPCs, Kubernetes clusters, hybrid bare-metal nodes, and edge compute workers.",
    items: companyData.techStack.cloud,
  },
  {
    title: "DevOps, CI/CD & Orchestration",
    icon: Cpu,
    badge: "AUTOMATION",
    badgeVariant: "gold" as const,
    description:
      "Zero-drift Infrastructure as Code (Terraform), declarative GitOps (ArgoCD), and automated canary rollouts.",
    items: companyData.techStack.devops,
  },
  {
    title: "Security & Zero-Trust Tooling",
    icon: ShieldCheck,
    badge: "DEFENSE-IN-DEPTH",
    badgeVariant: "neutral" as const,
    description:
      "Continuous runtime vulnerability scanning, mTLS mesh isolation, least-privilege IAM, and encrypted storage.",
    items: companyData.techStack.security,
  },
];

const evaluationPillars = [
  {
    title: "Type Safety & Correctness",
    detail: "Strict static typing (TypeScript, Rust, Go) catches edge cases at compile-time rather than at 2 AM in production.",
  },
  {
    title: "Zero Vendor Lock-In",
    detail: "Every tier runs on open standards (OCI containers, Kubernetes, Terraform) allowing complete workload portability.",
  },
  {
    title: "Telemetry & Observability",
    detail: "Native OpenTelemetry instrumentation on every service enables real-time distributed tracing and instant root-cause analysis.",
  },
  {
    title: "Reproducibility & Drift-Immunity",
    detail: "Every cluster and cloud asset is declaratively expressed in Git. No manual console tweaks, ever.",
  },
];

export default function TechnologyPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 text-white min-h-screen bg-[#08090d]">
      {/* Hero Header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-20">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute -top-10 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4">
          <ScrollReveal direction="up" delay={0.05} duration={0.65} distance={16}>
            <Badge variant="emerald" size="sm" dot>
              TECHNOLOGY ECOSYSTEM &amp; RUNTIMES
            </Badge>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12} duration={0.7} distance={20}>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
              Our Technology <br />
              <span className="emerald-gradient-text">Capability Stack.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} duration={0.7} distance={18}>
            <p className="text-xl sm:text-2xl text-zinc-300 font-light font-mono">
              Modern, typed, and battle-tested engineering primitives.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.28} duration={0.7} distance={18}>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed pt-1">
              We evaluate and select tools based on production resilience, operational maintainability, and business longevity. We intentionally reject fragile experimental stacks in favor of observable, deterministic technologies that scale cleanly without recurring technical debt.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Tech Evaluation Philosophy Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <ScrollReveal direction="up" delay={0.15} duration={0.7} distance={20}>
          <div className="rounded-2xl bg-[#0d0f15] border border-white/10 p-6 sm:p-8 hover:border-emerald-500/30 transition-colors shadow-lg">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 mb-3">
              ARCHITECTURAL CRITERIA FOR TOOLING ADOPTION
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {evaluationPillars.map((item, idx) => (
                <div key={idx} className="space-y-1.5 border-l border-white/10 pl-4">
                  <h3 className="text-sm font-bold text-white font-sans">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Technology Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {techCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <ScrollReveal key={idx} direction="up" delay={0.08 + idx * 0.06} duration={0.65}>
              <div
                className="rounded-2xl bg-[#0d0f15] border border-white/10 p-6 sm:p-8 md:p-10 shadow-lg hover:border-white/20 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {category.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <Badge variant={category.badgeVariant} size="sm" className="self-start md:self-auto">
                    {category.badge}
                  </Badge>
                </div>

                {/* Grid of technologies */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.items.map((tech, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.04] transition-all group"
                    >
                      <div className="text-sm font-bold text-white flex items-center gap-2 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                        <span>{tech.name}</span>
                      </div>
                      <div className="text-xs text-zinc-400 mt-1.5 font-sans leading-relaxed">
                        {tech.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 pt-16 border-t border-white/10 max-w-4xl mx-auto px-4 text-center space-y-6">
        <ScrollReveal direction="up" delay={0.1} duration={0.65}>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Have Specific Technology Constraints?
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto pt-2">
            Our engineering team is fluent across legacy enterprise monoliths and modern cloud-native topologies. We adapt to your organization’s security constraints, existing CI/CD environments, and compliance requirements.
          </p>
          <div className="pt-4 flex justify-center">
            <Button href="/contact" variant="primary" size="md">
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
