import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Globe,
  Terminal,
  Activity,
  ArrowUpRight,
  Database,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Application Development & Systems Engineering | ARAVANTA TECH",
  description:
    "Full-stack Next.js, React, TypeScript, high-concurrency Node.js APIs, and distributed event-driven systems engineered for sub-second p99 latency.",
};

export default function ApplicationDevelopmentPage() {
  const capabilities = [
    {
      title: "Next.js & React Server Architecture",
      icon: Zap,
      description: "Modern App Router implementations featuring zero-bundle-leak React Server Components, streaming SSR, and edge middleware routing for instant initial page render.",
      specs: ["Sub-500ms Largest Contentful Paint", "100% Core Web Vitals Pass", "Edge Edge-Compute Caching"],
    },
    {
      title: "End-to-End Type Safety & API Design",
      icon: Code2,
      description: "Typed schemas shared between client and server via TypeScript, tRPC, and OpenAPI/GraphQL, eliminating runtime serialization bugs before code reaches staging.",
      specs: ["Compile-Time Contract Validation", "Zod Schema Ingestion", "Automated Client SDK Generation"],
    },
    {
      title: "High-Concurrency Backend Pipelines",
      icon: Database,
      description: "Distributed backends utilizing connection pooling, optimistic concurrency control, and transactional outbox patterns capable of processing 100k+ req/sec.",
      specs: ["p99 Latency < 35ms", "ACID Compliance Guarantees", "Redis Cluster Cache Layer"],
    },
    {
      title: "Real-Time Telemetry & Event Streaming",
      icon: Activity,
      description: "Bi-directional WebSocket feeds, distributed pub/sub buses, and Kafka event streaming powering reactive enterprise dashboards and collaboration tooling.",
      specs: ["Sub-50ms Event Propagation", "Automatic Reconnection Buffers", "Distributed Tracing via OpenTelemetry"],
    },
  ];

  const appArchitectureLayers = [
    {
      layer: "Edge & CDN Gateway",
      tech: "Anycast Edge Workers + WAF",
      metric: "< 12ms Edge Response",
      status: "Active",
    },
    {
      layer: "Rendering & App Runtime",
      tech: "Next.js App Router / React Server Components",
      metric: "Zero-JS Server Boundary",
      status: "Active",
    },
    {
      layer: "API Gateway & Auth",
      tech: "Strict TypeScript + JWT/mTLS Service Mesh",
      metric: "Compile-Time Verified",
      status: "Active",
    },
    {
      layer: "State & Persistence",
      tech: "PostgreSQL Pool + Redis Cluster In-Memory Cache",
      metric: "p99 18ms Read / 32ms Write",
      status: "Active",
    },
  ];

  const useCases = [
    {
      category: "B2B SaaS Workspace",
      challenge: "Enterprise multi-tenant application suffering from slow initial load times (3.8s) and frequent state desynchronization across collaborating users.",
      solution: "Refactored UI to Next.js Server Components with optimistic client-side mutation queues and WebSocket state synchronization.",
      outcome: "Initial page load dropped from 3.8s to 420ms; customer churn decreased by 31% over two quarters.",
    },
    {
      category: "High-Volume FinTech Platform",
      challenge: "Order processing pipeline failing under sudden market spikes, leading to 504 gateway timeouts and double-execution errors.",
      solution: "Engineered idempotent API gateway with distributed Redis locks, optimistic concurrency, and dead-letter queue buffering.",
      outcome: "Zero duplicate executions over 45M+ processed orders with a stable p99 latency of 24ms.",
    },
    {
      category: "Telehealth Collaboration Engine",
      challenge: "Regulatory requirement to deliver sub-100ms real-time vitals monitoring while ensuring strict end-to-end HIPAA encryption.",
      solution: "Built WebRTC data enclaves with hardware-accelerated payload encryption and automated audit log immutability.",
      outcome: "Certified HIPAA attestation and seamless sub-60ms global sensor data transmission.",
    },
  ];

  const engineeringProcess = [
    {
      step: "01",
      title: "API Contract & Schema Modeling",
      description: "Defining domain entities, validation schemas, and database entity relationships before writing presentation code.",
    },
    {
      step: "02",
      title: "Component Architecture & Prototyping",
      description: "Building isolated, accessible UI primitives using strict TypeScript and testing interactive states in isolation.",
    },
    {
      step: "03",
      title: "Load & Stress Testing",
      description: "Simulating 10x anticipated peak concurrency using k6 distributed runners to expose memory leaks and database lock contention.",
    },
    {
      step: "04",
      title: "Automated Blue/Green Delivery",
      description: "Zero-downtime canary deployments with automatic telemetry rollback if error budgets dip below 99.99%.",
    },
  ];

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 text-white min-h-screen bg-[#08090d]">
      {/* Bespoke App Engineering Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2">
              <Badge variant="cyan" size="sm" dot>
                FULL-STACK &amp; DISTRIBUTED SYSTEMS
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
              High-Concurrency <br />
              <span className="cyan-gradient-text">Application Engineering.</span>
            </h1>

            <p className="text-xl text-zinc-300 font-light font-mono">
              Typed. Observable. Sub-Second Performance.
            </p>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal">
              We engineer mission-critical web applications, typed APIs, and distributed event systems. By combining Next.js Server Components, rigorous TypeScript contracts, and resilient database connection topologies, we deliver software that never buckles under traffic spikes.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Button href="/contact?service=Application%20Development" variant="primary" size="md">
                <span>Start Software Scoping</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Button href="/technology" variant="secondary" size="md">
                <span>Explore Full-Stack Stack</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>

          {/* Interactive Full-Stack Runtime Pipeline Visual */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#0d0f15] border border-white/10 p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                  <Code2 className="w-4 h-4" />
                  <span>APP RUNTIME ARCHITECTURE</span>
                </div>
                <span className="text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded">
                  LATENCY: OPTIMAL
                </span>
              </div>

              {/* Stack Layers Flow */}
              <div className="space-y-2.5 font-mono text-xs">
                {appArchitectureLayers.map((layer, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-white font-sans">{layer.layer}</span>
                      <span className="text-[10px] text-cyan-400 font-mono">{layer.metric}</span>
                    </div>
                    <div className="text-[10px] text-zinc-400">{layer.tech}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Contract: Strict TypeScript</span>
                <span className="text-cyan-400">p99 Target: &lt; 35ms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 md:py-24 border-t border-white/10 bg-[#06070a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="cyan" size="sm" dot className="mb-3">
              ENGINEERING DISCIPLINES
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Software Crafted For Scale
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2">
              Zero tolerance for untyped contracts, unhandled exceptions, and unprofiled database queries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#0d0f15] border border-white/10 p-7 hover:border-cyan-500/30 transition-all space-y-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {cap.description}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2 border-t border-white/5">
                    {cap.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-[11px] font-mono text-zinc-300"
                      >
                        ✓ {spec}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Process */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="gold" size="sm" dot className="mb-3">
              METHODOLOGY
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Spec-Driven Development Cadence
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2">
              How we guarantee reliability before software is promoted to production.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineeringProcess.map((proc, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#0d0f15] border border-white/10 p-6 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xl font-black font-mono text-cyan-400">
                    {proc.step}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">
                    {proc.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mt-2">
                    {proc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Case Studies */}
      <section className="py-16 md:py-24 border-t border-white/10 bg-[#06070a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="emerald" size="sm" dot className="mb-3">
              PRODUCTION IMPACT
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Verified Production Deployments
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2">
              Real application engineering challenges solved for enterprise software products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((uc, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#0d0f15] border border-white/10 p-6 space-y-3.5 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                    {uc.category}
                  </span>
                  <div>
                    <div className="text-xs font-semibold text-zinc-300">Challenge:</div>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-0.5">{uc.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-zinc-300">Engineering Solution:</div>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-0.5">{uc.solution}</p>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <div className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{uc.outcome}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Practices & CTA */}
      <section className="py-12 border-t border-white/10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Related Practices</span>
            <div className="flex flex-wrap items-center gap-3 mt-1">
              <Link href="/services/cloud-solutions" className="text-sm text-zinc-300 hover:text-white flex items-center gap-1">
                Cloud Solutions <ArrowRight className="w-3 h-3 text-cyan-400" />
              </Link>
              <span className="text-zinc-600">•</span>
              <Link href="/services/devops-automation" className="text-sm text-zinc-300 hover:text-white flex items-center gap-1">
                DevOps &amp; GitOps <ArrowRight className="w-3 h-3 text-cyan-400" />
              </Link>
              <span className="text-zinc-600">•</span>
              <Link href="/services/digital-transformation" className="text-sm text-zinc-300 hover:text-white flex items-center gap-1">
                Digital Transformation <ArrowRight className="w-3 h-3 text-cyan-400" />
              </Link>
            </div>
          </div>
          <Button href="/contact?service=Application%20Development" variant="primary" size="md">
            <span>Scope Application Build</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
