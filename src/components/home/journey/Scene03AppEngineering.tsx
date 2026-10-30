"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Code2, ArrowRight, Layers, Cpu, Database, Network, Activity, Terminal, CheckCircle2, ChevronRight, FileCode } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type ArchTier = "ingress" | "services" | "data";

interface TierDetail {
  id: ArchTier;
  title: string;
  badge: string;
  latency: string;
  throughput: string;
  availability: string;
  nodes: string;
  tech: string[];
  summary: string;
  sampleCode: string;
}

const TIERS: Record<ArchTier, TierDetail> = {
  ingress: {
    id: "ingress",
    title: "Edge Presentation & Ingress",
    badge: "GLOBAL DISTRIBUTION",
    latency: "14ms - 22ms",
    throughput: "45,000 req/sec",
    availability: "99.999%",
    nodes: "32 Global PoPs",
    tech: ["Next.js App Router", "Edge Middleware", "Anycast DNS", "HTTP/3 & TLS 1.3"],
    summary: "Sub-second global content rendering via streaming server-side rendering, geo-routed CDN nodes, and edge security headers.",
    sampleCode: `// edge-ingress.config.ts
export const edgeRouting = {
  regions: ["iad1", "fra1", "sin1", "hnd1"],
  cacheControl: "public, max-age=3600, stale-while-revalidate=86400",
  compression: ["br", "gzip"],
  zeroTrustHeaders: {
    "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
    "X-Content-Type-Options": "nosniff",
  }
};`,
  },
  services: {
    id: "services",
    title: "Service Orchestration & Microservices",
    badge: "DECOUPLED LOGIC",
    latency: "32ms - 48ms",
    throughput: "28,400 req/sec",
    availability: "99.99%",
    nodes: "24 Container Pods",
    tech: ["TypeScript / Node.js", "GraphQL & REST", "RabbitMQ / Kafka", "gRPC Inter-service"],
    summary: "Stateless microservices orchestrated with asynchronous event queues, circuit-breaker fault isolation, and typed RPC boundaries.",
    sampleCode: `// service-orchestrator.ts
export async function dispatchWorkload(payload: WorkloadEvent) {
  const channel = await eventBus.connect();
  const circuitBreaker = new ResilienceCircuit({ timeoutMs: 300, maxRetries: 3 });
  
  return circuitBreaker.execute(async () => {
    return channel.publish("domain.events", payload.topic, payload);
  });
}`,
  },
  data: {
    id: "data",
    title: "Distributed Resilient Data Fabric",
    badge: "PERSISTENCE & CACHE",
    latency: "2ms - 6ms",
    throughput: "62,000 qps",
    availability: "99.995%",
    nodes: "Multi-AZ Primary + 3 Read Replicas",
    tech: ["PostgreSQL Multi-AZ", "Redis Cluster", "S3-Compatible Object Store", "Vector DB"],
    summary: "High-concurrency ACID transactions, sub-millisecond in-memory caching tiers, and cross-region automated backup replication.",
    sampleCode: `// database-topology.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_PRIMARY_URL")
  directUrl= env("DATABASE_DIRECT_URL")
}

// Read-replica routing configured via connection pooler
// Read latency: 2.4ms | Write latency: 5.1ms | Multi-AZ sync: ON`,
  },
};

export function Scene03AppEngineering() {
  const [activeTier, setActiveTier] = useState<ArchTier>("ingress");
  const [viewMode, setViewMode] = useState<"specs" | "code">("specs");

  const current = TIERS[activeTier];

  return (
    <section
      id="scene-03"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32 z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header Badge */}
        <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#0a0e14]/90 border border-[#222533] backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
          <span className="text-xs font-semibold tracking-wider uppercase text-brand-gold font-mono">
            SCENE 03 // APPLICATION ENGINEERING
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Multi-Tier Blueprint Explorer */}
          <ScrollReveal direction="right" delay={0.15} duration={0.75} distance={20} className="lg:col-span-6 order-2 lg:order-1">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0a0e14]/95 border border-[#222533] backdrop-blur-xl shadow-2xl space-y-6">
              
              {/* Header with Mode Switcher */}
              <div className="flex items-center justify-between pb-4 border-b border-brand-border/70">
                <div className="flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-brand-gold" />
                  <span className="text-xs font-mono text-white font-bold tracking-wider uppercase">
                    ARCHITECTURE BLUEPRINT EXPLORER
                  </span>
                </div>
                
                <div className="flex items-center gap-1 bg-[#121622] p-1 rounded-lg border border-brand-border/60">
                  <button
                    type="button"
                    onClick={() => setViewMode("specs")}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                      viewMode === "specs"
                        ? "bg-brand-gold text-brand-bg font-bold"
                        : "text-brand-gray-400 hover:text-white"
                    }`}
                  >
                    SPECS
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("code")}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors flex items-center gap-1 ${
                      viewMode === "code"
                        ? "bg-brand-gold text-brand-bg font-bold"
                        : "text-brand-gray-400 hover:text-white"
                    }`}
                  >
                    <FileCode className="w-3 h-3" />
                    CONFIG
                  </button>
                </div>
              </div>

              {/* Tier Selection Buttons */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTier("ingress")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    activeTier === "ingress"
                      ? "bg-[#141a29] border-blue-400/80 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                      : "bg-[#0d1017] border-brand-border/70 text-brand-gray-400 hover:text-white hover:border-brand-gray-600"
                  }`}
                >
                  <div className="flex items-center gap-2 text-blue-400 mb-1">
                    <Network className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-mono font-bold">TIER 01</span>
                  </div>
                  <div className="text-xs font-semibold text-white">Ingress & Edge</div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTier("services")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    activeTier === "services"
                      ? "bg-[#1f1a14] border-brand-gold shadow-[0_0_15px_rgba(201,162,74,0.2)]"
                      : "bg-[#0d1017] border-brand-border/70 text-brand-gray-400 hover:text-white hover:border-brand-gray-600"
                  }`}
                >
                  <div className="flex items-center gap-2 text-brand-gold mb-1">
                    <Cpu className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-mono font-bold">TIER 02</span>
                  </div>
                  <div className="text-xs font-semibold text-white">Service Mesh</div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTier("data")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    activeTier === "data"
                      ? "bg-[#121f17] border-emerald-400/80 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                      : "bg-[#0d1017] border-brand-border/70 text-brand-gray-400 hover:text-white hover:border-brand-gray-600"
                  }`}
                >
                  <div className="flex items-center gap-2 text-emerald-400 mb-1">
                    <Database className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-mono font-bold">TIER 03</span>
                  </div>
                  <div className="text-xs font-semibold text-white">Data Fabric</div>
                </button>
              </div>

              {/* Active Tier Body */}
              {viewMode === "specs" ? (
                <div className="space-y-4">
                  {/* Summary Callout */}
                  <div className="p-4 rounded-xl bg-[#121622] border border-brand-border/60">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-white">{current.title}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/60 text-brand-gold border border-brand-gold/30">
                        {current.badge}
                      </span>
                    </div>
                    <p className="text-xs text-brand-gray-300 leading-relaxed">
                      {current.summary}
                    </p>
                  </div>

                  {/* Telemetry Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-[#0d1017] border border-brand-border/60">
                      <div className="text-[10px] font-mono text-brand-gray-400 uppercase">Avg Response Latency</div>
                      <div className="text-base font-bold text-white font-mono mt-0.5">{current.latency}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#0d1017] border border-brand-border/60">
                      <div className="text-[10px] font-mono text-brand-gray-400 uppercase">Throughput Capacity</div>
                      <div className="text-base font-bold text-white font-mono mt-0.5">{current.throughput}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#0d1017] border border-brand-border/60">
                      <div className="text-[10px] font-mono text-brand-gray-400 uppercase">High Availability</div>
                      <div className="text-base font-bold text-emerald-400 font-mono mt-0.5">{current.availability}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#0d1017] border border-brand-border/60">
                      <div className="text-[10px] font-mono text-brand-gray-400 uppercase">Cluster Fleet Scale</div>
                      <div className="text-base font-bold text-cyan-400 font-mono mt-0.5">{current.nodes}</div>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div>
                    <div className="text-[10px] font-mono text-brand-gray-400 uppercase tracking-wider mb-2">
                      CORE TECHNOLOGY STACK
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {current.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-[#121622] border border-brand-border/80 text-[11px] font-mono text-brand-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Code View */
                <div className="rounded-xl bg-[#06080d] border border-brand-border/80 p-4 font-mono text-xs overflow-x-auto text-brand-gray-300 space-y-2">
                  <div className="flex items-center justify-between text-[10px] text-brand-gray-500 pb-2 border-b border-white/5">
                    <span>MANIFEST CONFIGURATION PREVIEW</span>
                    <span className="text-brand-gold">LIVE CODE</span>
                  </div>
                  <pre className="text-[11px] leading-relaxed text-brand-goldLight overflow-x-auto">
                    <code>{current.sampleCode}</code>
                  </pre>
                </div>
              )}

              {/* Status footer */}
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-[11px] font-mono text-brand-gray-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  ZERO TECHNICAL DEBT ARCHITECTURE
                </span>
                <span className="text-brand-gold">SOC 2 / ISO 27001 COMPLIANT</span>
              </div>

            </div>
          </ScrollReveal>

          {/* Right Column: Narrative Copy */}
          <ScrollReveal direction="up" delay={0.05} duration={0.7} distance={20} className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Build Digital Experiences <br />
              <span className="gold-gradient-text">That Scale.</span>
            </h2>

            <p className="text-base sm:text-lg text-brand-gray-300 leading-relaxed font-normal">
              Software should be built for longevity, clarity, and maintainability. We engineer custom enterprise applications using modern full-stack web technologies, distributed microservices, and robust APIs. Whether modernizing a legacy core or engineering a new digital platform, our codebases prioritize clean separation of concerns.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#0d1017]/85 border border-brand-border/70 backdrop-blur-md hover:border-brand-gold/40 transition-colors">
                <div className="flex items-center gap-2 mb-2 text-brand-gold">
                  <Code2 className="w-4 h-4" />
                  <h4 className="text-sm font-semibold text-white">Full-Stack Precision</h4>
                </div>
                <p className="text-xs text-brand-gray-400 leading-relaxed">
                  TypeScript, React, Next.js, and Node.js engineered with strict type safety and modular components.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0d1017]/85 border border-brand-border/70 backdrop-blur-md hover:border-brand-gold/40 transition-colors">
                <div className="flex items-center gap-2 mb-2 text-brand-gold">
                  <Layers className="w-4 h-4" />
                  <h4 className="text-sm font-semibold text-white">Event-Driven Architecture</h4>
                </div>
                <p className="text-xs text-brand-gray-400 leading-relaxed">
                  Decoupled asynchronous message brokers ensuring system resilience under surging traffic.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0d1017]/60 border border-brand-border/50 text-xs text-brand-gray-400 space-y-1.5">
              <div className="text-white font-semibold">Our Engineering Tenet:</div>
              <p>
                Every service exposes clean contracts, includes end-to-end integration tests, and is packaged into deterministic container images ready for enterprise scale.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="/services/application-development" variant="primary" size="md">
                <span>Explore Software Engineering</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Link
                href="/services"
                className="text-xs font-mono uppercase tracking-wider text-brand-gray-400 hover:text-brand-gold transition-colors inline-flex items-center gap-1.5"
              >
                <span>Full Technology Stack</span>
                <span>→</span>
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

export default Scene03AppEngineering;
