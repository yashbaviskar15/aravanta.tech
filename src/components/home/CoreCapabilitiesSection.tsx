"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Cloud,
  Code2,
  Cpu,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Server,
  Layers,
  Terminal,
  Activity,
  ArrowUpRight,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

interface Capability {
  id: string;
  number: string;
  title: string;
  categoryBadge: string;
  badgeVariant: "gold" | "emerald" | "cyan" | "lime";
  tagline: string;
  description: string;
  href: string;
  icon: React.ElementType;
  specs: { label: string; value: string }[];
  deliverables: string[];
  systemMetric: { label: string; value: string; delta: string };
  terminalSnippet: string;
}

const capabilities: Capability[] = [
  {
    id: "cloud-infrastructure",
    number: "01",
    title: "Cloud Infrastructure Engineering",
    categoryBadge: "MULTI-CLOUD & FINOPS",
    badgeVariant: "emerald",
    tagline: "Resilient Bare-Metal to Multi-Region Hyperscaler Topology",
    description:
      "We design, provision, and operate enterprise multi-cloud foundations across AWS, GCP, Azure, and bare-metal fleets. Using declarative Infrastructure as Code (Terraform/OpenTofu) and continuous FinOps auditing, we eliminate architectural single points of failure while slashing wasteful compute expenditures.",
    href: "/services/cloud-solutions",
    icon: Cloud,
    specs: [
      { label: "Target Availability", value: "99.999% SLA Uptime" },
      { label: "Disaster Recovery", value: "RTO < 60s / RPO < 5s" },
      { label: "Provisioning", value: "Declarative GitOps IaC" },
      { label: "FinOps Optimization", value: "Average 32% Waste Reduction" },
    ],
    deliverables: [
      "Multi-Region Active/Active Blueprints",
      "Automated State Drift Convergence",
      "Cost Allocation & Real-Time FinOps Tags",
      "Multi-Homed BGP Anycast Routing",
    ],
    systemMetric: { label: "Average Cloud Spend Reduction", value: "32.4%", delta: "+100% Multi-AZ Redundancy" },
    terminalSnippet: `$ aravanta cloud audit --all-regions
[✓] Topology: AWS us-east-1 <-> GCP europe-west3
[✓] Cross-Cloud Latency: 14.2ms | Multi-AZ Failover: READY
[✓] FinOps Waste Detected: 0.00% (All workloads right-sized)`,
  },
  {
    id: "application-software",
    number: "02",
    title: "Application & Software Engineering",
    categoryBadge: "HIGH-CONCURRENCY RUNTIMES",
    badgeVariant: "gold",
    tagline: "Distributed Microservices, TypeScript Systems & High-Throughput APIs",
    description:
      "Modern digital products require rock-solid engineering primitives. We architect high-concurrency Node.js, Next.js App Router, Go, and Python microservices that gracefully handle massive burst spikes without degrading database connections or increasing user-perceived latencies.",
    href: "/services/application-development",
    icon: Code2,
    specs: [
      { label: "Runtime Standard", value: "TypeScript & Go Microservices" },
      { label: "API Protocol", value: "gRPC, GraphQL & OpenAPI 3.1" },
      { label: "Query Optimization", value: "Sub-20ms p99 Query Slices" },
      { label: "Architecture Pattern", value: "Event-Driven CQRS Ledgers" },
    ],
    deliverables: [
      "Enterprise Next.js Full-Stack Frontends",
      "Decoupled Kafka/RabbitMQ Event Buses",
      "ACID-Compliant PostgreSQL Topologies",
      "Automated Integration & Contract Test Suites",
    ],
    systemMetric: { label: "p99 API Response Latency", value: "< 18ms", delta: "12,000 req/sec Concurrency" },
    terminalSnippet: `$ curl -X GET https://api.aravanta.internal/v1/health
HTTP/2 200 OK
content-type: application/json
{ "status": "nominal", "active_goroutines": 4820, "p99_latency_ms": 11.4 }`,
  },
  {
    id: "devops-platform",
    number: "03",
    title: "DevOps & Platform Engineering",
    categoryBadge: "GITOPS & CONTINUOUS DELIVERY",
    badgeVariant: "cyan",
    tagline: "Zero-Downtime Deployment Gates, Kubernetes & Ephemeral Previews",
    description:
      "We replace fragile deployment scripts with fully automated GitOps pipelines and self-healing container orchestrators. By codifying every build gate, automated rollbacks, and ephemeral PR preview environments, we empower your development teams to deploy 20x faster with zero release anxiety.",
    href: "/services/devops-automation",
    icon: Cpu,
    specs: [
      { label: "Deployment Paradigm", value: "GitOps Declarative ArgoCD" },
      { label: "Container Standard", value: "OCI-Compliant Docker/Kubernetes" },
      { label: "Release Velocity", value: "Sub-4 Minute Build to Staging" },
      { label: "Rollback Strategy", value: "Autonomous Canary MTTR < 30s" },
    ],
    deliverables: [
      "Self-Healing Kubernetes Clusters",
      "Automated SBOM Security Scanning in CI",
      "Ephemeral Pull Request Sandboxes",
      "Centralized OpenTelemetry Metrics & Traces",
    ],
    systemMetric: { label: "Deployment Lead Time", value: "4m 12s", delta: "Zero Customer-Facing Downtime" },
    terminalSnippet: `$ git push origin feature/vault-v2
[CI/CD] Pipeline #8942 triggered: BUILD -> SBOM SCAN -> TEST -> CANARY (10%)
[Deploy] Health checks 100% nominal. Canary promoted to 100% in 18s.`,
  },
  {
    id: "cybersecurity-reliability",
    number: "04",
    title: "Cybersecurity & Reliability",
    categoryBadge: "ZERO-TRUST PERIMETER",
    badgeVariant: "lime",
    tagline: "Cryptographic Identity, mTLS Workload Attestation & Compliance",
    description:
      "In modern distributed environments, perimeter firewalls are insufficient. We enforce zero-trust defense-in-depth: every service-to-service communication is mutually authenticated via mTLS, secrets are dynamically rotated in hardware-backed vaults, and continuous vulnerability gates protect your supply chain.",
    href: "/services/cybersecurity",
    icon: ShieldCheck,
    specs: [
      { label: "Attestation Standard", value: "SPIFFE/SPIRE Workload Identity" },
      { label: "Encryption", value: "TLS 1.3 In-Flight / AES-256 At-Rest" },
      { label: "Secrets Lifecycle", value: "Ephemeral Dynamic Token Leasing" },
      { label: "Compliance Posture", value: "SOC 2 Type II, ISO 27001, HIPAA" },
    ],
    deliverables: [
      "Mutual TLS (mTLS) Service Mesh Integration",
      "Automated Dependency & Container CVE Scrubbing",
      "Role-Based Access Control (RBAC) Hardening",
      "Penetration Testing & Architecture Audits",
    ],
    systemMetric: { label: "Vulnerability Remediation MTTR", value: "< 24h", delta: "100% Cryptographic Workload Isolation" },
    terminalSnippet: `$ aravanta security scan --zero-trust-audit
[✓] mTLS 1.3 Enforcement: 100% of internal routes
[✓] Unauthenticated Ingress: 0 routes exposed
[✓] CVE High/Critical: 0 detected | SPIRE Identity: VERIFIED`,
  },
];

export function CoreCapabilitiesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCap = capabilities[activeTab];
  const Icon = activeCap.icon;

  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-[#05070a] border-t border-white/10 relative z-10 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#d4a342]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <ScrollReveal direction="up" delay={0.05} duration={0.65}>
            <div className="inline-flex items-center gap-2 mb-3">
              <Badge variant="gold" size="sm" dot>
                CORE DISCIPLINES
              </Badge>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12} duration={0.7}>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Major Engineering Disciplines.
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} duration={0.7}>
            <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed font-light">
              We specialize in the four foundational pillars required to operate mission-critical digital systems at enterprise scale.
            </p>
          </ScrollReveal>
        </div>

        {/* Interactive Capability Switcher Tabs */}
        <ScrollReveal direction="up" delay={0.15} duration={0.7}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-2xl bg-[#0b0e15] border border-white/10 mb-8 sm:mb-12">
            {capabilities.map((cap, idx) => {
              const TabIcon = cap.icon;
              const isActive = activeTab === idx;

              return (
                <button
                  key={cap.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={cn(
                    "flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl text-left transition-all select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a342]",
                    isActive
                      ? "bg-white/[0.08] border border-white/20 text-white shadow-lg"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.02] border border-transparent"
                  )}
                >
                  <div
                    className={cn(
                      "w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 border transition-colors",
                      isActive
                        ? "bg-[#d4a342]/20 border-[#d4a342]/60 text-[#d4a342]"
                        : "bg-white/[0.02] border-white/10 text-zinc-400"
                    )}
                  >
                    <TabIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-zinc-500 block leading-tight">
                      DISCIPLINE {cap.number}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold truncate block mt-0.5">
                      {cap.title.split(" ")[0]} {cap.title.split(" ")[1]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active Capability Deep-Dive Composition */}
        <div className="rounded-3xl bg-[#0d1017] border border-white/12 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Deep Descriptions & Specs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={activeCap.badgeVariant} size="sm" dot>
                  {activeCap.categoryBadge}
                </Badge>
                <span className="text-xs font-mono text-zinc-500">
                  DISCIPLINE {activeCap.number} OF 04
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {activeCap.title}
                </h3>
                <p className="text-sm sm:text-base font-mono text-[#d4a342] mt-1.5 font-medium">
                  {activeCap.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                {activeCap.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {activeCap.specs.map((spec, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/8 space-y-0.5"
                  >
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                      {spec.label}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-zinc-200 block truncate">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Deliverables Pills */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                  Core Engineering Deliverables:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeCap.deliverables.map((deliv, dIdx) => (
                    <span
                      key={dIdx}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{deliv}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA link to dedicated service practice page */}
              <div className="pt-4 flex items-center gap-4">
                <Link
                  href={activeCap.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#08090d] font-bold text-xs uppercase tracking-wider font-mono hover:bg-zinc-200 transition-colors shadow-md"
                >
                  <span>Explore Practice Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                >
                  <span>Request Engineering Scope</span>
                  <ArrowUpRight className="w-3 h-3 text-[#d4a342]" />
                </Link>
              </div>
            </div>

            {/* Right: Technical Visual & Live CLI Simulator Preview */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Highlight Metric Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#121622] to-[#0a0d14] border border-white/15 space-y-2">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  {activeCap.systemMetric.label}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">
                  {activeCap.systemMetric.value}
                </div>
                <div className="text-xs font-mono text-zinc-500">
                  {activeCap.systemMetric.delta}
                </div>
              </div>

              {/* Simulated Runtime Terminal Block */}
              <div className="rounded-2xl bg-[#08090d] border border-white/12 p-4 font-mono text-xs shadow-xl space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-zinc-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-zinc-400">aravanta-cli // runtime-attestation</span>
                  </div>
                  <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                </div>
                <pre className="text-zinc-300 text-[11px] leading-relaxed overflow-x-auto whitespace-pre-wrap py-1">
                  {activeCap.terminalSnippet}
                </pre>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default CoreCapabilitiesSection;
