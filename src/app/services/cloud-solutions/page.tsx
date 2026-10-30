import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Cloud,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  TrendingDown,
  Globe2,
  RefreshCw,
  Server,
  Terminal,
  Activity,
  ArrowUpRight,
  Database,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Cloud Solutions & Infrastructure Engineering | ARAVANTA TECH",
  description:
    "Multi-cloud architecture, active-active multi-region resilience, zero-downtime database migration, and FinOps cloud spend governance from ARAVANTA TECH.",
};

export default function CloudSolutionsPage() {
  const capabilities = [
    {
      title: "Multi-Cloud & Hybrid Architecture",
      icon: Globe2,
      description: "Declarative orchestration across AWS, Google Cloud, and Azure using unified Terraform modules, eliminating single-vendor failure points.",
      specs: ["Multi-Region Active-Active", "BGP Anycast Routing", "Zero Provider Lock-In"],
    },
    {
      title: "Zero-Downtime Live Migration",
      icon: RefreshCw,
      description: "Dual-write replication and change data capture (CDC) pipelines enabling transactional workload migrations without a single minute of customer downtime.",
      specs: ["PostgreSQL/MySQL CDC", "Sub-Second Replication Lag", "Instant Rollback Safety"],
    },
    {
      title: "FinOps Cost Governance & Tagging",
      icon: TrendingDown,
      description: "Automated rightsizing, spot/preemptible instance arbiters, and strict cost attribution tags that typically reduce enterprise infrastructure bills by 28%–45%.",
      specs: ["Continuous Waste Detection", "Unit Economics Attribution", "Automated Reserved Instance Arbitrage"],
    },
    {
      title: "Resilient Distributed Storage",
      icon: Database,
      description: "Globally replicated object storage and distributed block volumes with automatic tiering, cryptographic immutability, and 11-nines durability.",
      specs: ["S3-Compatible Protocol", "Hardware KMS Encryption", "Automated Lifecycle Policies"],
    },
  ];

  const useCases = [
    {
      category: "FinTech & Banking",
      challenge: "High-concurrency transactional ledger requiring zero data loss during regional cloud outages.",
      solution: "Engineered multi-region active-active PostgreSQL cluster with distributed consensus and sub-100ms cross-region replication.",
      outcome: "100% uptime during two major cloud availability zone outages with zero data desynchronization.",
    },
    {
      category: "Global Enterprise SaaS",
      challenge: "Runaway egress fees and unoptimized Kubernetes node pools driving monthly cloud costs to unsustainable levels.",
      solution: "Implemented automated Karpenter node consolidation, private WireGuard mesh peering, and spot instance scheduling.",
      outcome: "38% net reduction in annual cloud compute spend while accommodating a 2.4x increase in API throughput.",
    },
    {
      category: "Healthcare Technology",
      challenge: "Complex on-premise monolithic patient records system requiring migration to HIPAA-compliant cloud enclaves.",
      solution: "Executed phased zero-downtime strangler-fig migration with isolated VPC enclaves and automated BAA policy auditing.",
      outcome: "Zero clinical disruption during cutover and full compliance attestation on day one.",
    },
  ];

  const migrationRoadmap = [
    {
      step: "01",
      name: "Topology & Dependency Audit",
      detail: "Deep automated discovery of existing compute resources, network dependencies, latency bottlenecks, and database schema couplings.",
    },
    {
      step: "02",
      name: "Target Architecture Modeling",
      detail: "Drafting mathematically sound multi-region blueprints, Terraform modules, network security perimeters, and FinOps cost models.",
    },
    {
      step: "03",
      name: "Dual-Write Replication Pipeline",
      detail: "Establishing continuous data replication between source and destination environments with automated parity verification checks.",
    },
    {
      step: "04",
      name: "Canary Traffic Routing & Cutover",
      detail: "Gradual weighted DNS cutover using health-checked synthetic traffic, followed by seamless atomic primary transition.",
    },
    {
      step: "05",
      name: "Telemetry Convergence & Optimization",
      detail: "Continuous profiling under live production load, automated rightsizing, and establishing 24/7 SLA monitoring alarms.",
    },
  ];

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 text-white min-h-screen bg-[#08090d]">
      {/* Bespoke Cloud Solutions Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2">
              <Badge variant="emerald" size="sm" dot>
                CLOUD INFRASTRUCTURE &amp; RESILIENCE
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
              Multi-Cloud <br />
              <span className="emerald-gradient-text">Architecture &amp; Migration.</span>
            </h1>

            <p className="text-xl text-zinc-300 font-light font-mono">
              Zero Downtime. Zero Lock-In. Provable Resilience.
            </p>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal">
              We design, build, and operate fault-tolerant multi-cloud environments engineered to withstand full regional provider blackouts. From complex zero-loss database migrations to rigorous FinOps cost engineering, our solutions guarantee deterministic uptime.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Button href="/contact?service=Cloud%20Solutions" variant="primary" size="md">
                <span>Scope Cloud Initiative</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Button href="/case-studies" variant="secondary" size="md">
                <span>View Architecture Dossiers</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>

          {/* Interactive Multi-Region Architecture Blueprint Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#0d0f15] border border-white/10 p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
                  <Activity className="w-4 h-4" />
                  <span>MULTI-REGION ACTIVE-ACTIVE TOPOLOGY</span>
                </div>
                <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded">
                  HEALTH: NOMINAL
                </span>
              </div>

              {/* Visual Architecture Node Flow */}
              <div className="space-y-3 font-mono text-xs">
                {/* Traffic Layer */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-cyan-400" />
                    <span>Global Anycast BGP Edge</span>
                  </div>
                  <span className="text-zinc-500">&lt; 15ms latency</span>
                </div>

                {/* Region Split */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-emerald-400">Region A (AWS us-east)</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <div className="text-[10px] text-zinc-400">Kubernetes Fleet (32 nodes)</div>
                    <div className="text-[10px] text-zinc-400">Aurora Multi-AZ Master</div>
                  </div>

                  <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/30 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-cyan-400">Region B (GCP europe)</span>
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    </div>
                    <div className="text-[10px] text-zinc-400">Kubernetes Fleet (32 nodes)</div>
                    <div className="text-[10px] text-zinc-400">Cloud Spanner Replica</div>
                  </div>
                </div>

                {/* Replication Bus */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between text-zinc-400">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-3.5 h-3.5 text-emerald-400 animate-spin" style={{ animationDuration: "8s" }} />
                    <span className="text-[11px]">Private WireGuard Cross-Cloud Sync</span>
                  </div>
                  <span className="text-emerald-400 text-[10px]">Lag: 42ms (Strict Sync)</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Telemetry: 100% IaC Managed</span>
                <span className="text-emerald-400">SLA: 99.999%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="py-16 md:py-24 border-t border-white/10 bg-[#06070a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="emerald" size="sm" dot className="mb-3">
              PRODUCTION CAPABILITIES
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineered For Extreme Availability
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2">
              Every system is designed with deterministic failure modes and automated convergence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#0d0f15] border border-white/10 p-7 hover:border-emerald-500/30 transition-all space-y-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
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

      {/* Migration Protocol Roadmap */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="gold" size="sm" dot className="mb-3">
              THE MIGRATION PROTOCOL
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              From Discovery To Zero-Downtime Cutover
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2">
              A 5-phase engineering methodology backed by dual-write validation and rollback safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {migrationRoadmap.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#0d0f15] border border-white/10 p-5 space-y-2 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xl font-black font-mono text-emerald-400/80">
                    {item.step}
                  </span>
                  <h3 className="text-sm font-bold text-white mt-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mt-2">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Enterprise Use Cases */}
      <section className="py-16 md:py-24 border-t border-white/10 bg-[#06070a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="cyan" size="sm" dot className="mb-3">
              PROVEN RESULTS
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Verified Production Outcomes
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2">
              Real architectural challenges solved for high-stakes enterprise clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((uc, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#0d0f15] border border-white/10 p-6 space-y-3.5 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                    {uc.category}
                  </span>
                  <div>
                    <div className="text-xs font-semibold text-zinc-300">Challenge:</div>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-0.5">{uc.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-zinc-300">Architecture Solution:</div>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-0.5">{uc.solution}</p>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{uc.outcome}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Practices */}
      <section className="py-12 border-t border-white/10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Related Practices</span>
            <div className="flex flex-wrap items-center gap-3 mt-1">
              <Link href="/services/devops-automation" className="text-sm text-zinc-300 hover:text-white flex items-center gap-1">
                DevOps &amp; GitOps <ArrowRight className="w-3 h-3 text-emerald-400" />
              </Link>
              <span className="text-zinc-600">•</span>
              <Link href="/services/it-infrastructure" className="text-sm text-zinc-300 hover:text-white flex items-center gap-1">
                IT Infrastructure <ArrowRight className="w-3 h-3 text-emerald-400" />
              </Link>
              <span className="text-zinc-600">•</span>
              <Link href="/cloudos" className="text-sm text-zinc-300 hover:text-white flex items-center gap-1">
                Aravanta CloudOS <ArrowRight className="w-3 h-3 text-emerald-400" />
              </Link>
            </div>
          </div>
          <Button href="/contact?service=Cloud%20Solutions" variant="primary" size="md">
            <span>Schedule Scoping Session</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
