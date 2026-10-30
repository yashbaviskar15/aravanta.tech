import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Cpu,
  ArrowRight,
  CheckCircle2,
  Terminal,
  GitBranch,
  Boxes,
  RefreshCw,
  ShieldCheck,
  Server,
  Activity,
  ArrowUpRight,
  GitMerge,
  Play,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "DevOps & GitOps Automation Engineering | ARAVANTA TECH",
  description:
    "Zero-downtime CI/CD release pipelines, declarative ArgoCD GitOps, Kubernetes cluster orchestration, and automated canary rollback gates from ARAVANTA TECH.",
};

export default function DevOpsAutomationPage() {
  const capabilities = [
    {
      title: "Declarative GitOps & Cluster Sync",
      icon: GitBranch,
      description: "Treating Git repositories as the absolute single source of truth for all Kubernetes workloads, cluster manifests, and ingress policies via ArgoCD and Flux.",
      specs: ["Zero Configuration Drift", "Automated Cluster Self-Healing", "1-Click Cluster Reconstruction"],
    },
    {
      title: "Zero-Downtime Canary Rollouts",
      icon: RefreshCw,
      description: "Progressive traffic shifting using Istio and Flagger. Real-time metric evaluation automatically aborts and rolls back unhealthy canaries within 15 seconds.",
      specs: ["Weighted Traffic Splitting", "Prometheus Error Budget Gates", "Automated Sub-15s Rollback"],
    },
    {
      title: "Ephemeral On-Demand PR Environments",
      icon: Boxes,
      description: "Automatic instantiation of isolated, lightweight preview environments for every pull request, allowing QA and stakeholders to test features before merging.",
      specs: ["Sub-2 Minute Spin-Up Time", "Automated TTL Decommissioning", "Zero Waste Idle Teardown"],
    },
    {
      title: "Automated DevSecOps & SBOM Attestation",
      icon: ShieldCheck,
      description: "Cryptographic container image signing (Cosign), continuous CVE vulnerability scanning (Trivy), and Kyverno policy enforcement at admission controller level.",
      specs: ["SLSA Level 3 Attestation", "Zero Vulnerability Gate Enforcement", "Cryptographic Provenance Verification"],
    },
  ];

  const pipelineStages = [
    {
      stage: "01. Git Commit & Sign",
      status: "Verified",
      detail: "Commit signed with developer GPG key, triggering automated GitHub Actions runner.",
    },
    {
      stage: "02. Fast Test & Build",
      status: "Passed",
      detail: "Parallel unit tests, static code analysis, and deterministic OCI container build.",
    },
    {
      stage: "03. Security & CVE Gate",
      status: "Passed",
      detail: "Trivy scan for OS & dependency CVEs + Cosign image signing for provenance.",
    },
    {
      stage: "04. ArgoCD Reconciliation",
      status: "Synced",
      detail: "Declarative cluster controller pulls signed manifest and begins progressive rollout.",
    },
    {
      stage: "05. Canary Traffic Split",
      status: "Active (95/5)",
      detail: "Istio routes 5% live traffic to canary; Prometheus confirms p99 < 30ms before 100% shift.",
    },
  ];

  const useCases = [
    {
      category: "Enterprise Fintech Engine",
      challenge: "High-stress monthly release windows caused 4-hour scheduled maintenance outages and frequent rollback panic.",
      solution: "Implemented declarative GitOps with automated canary analysis and automated database migration locks.",
      outcome: "Shifted from monthly maintenance windows to 18 daily zero-downtime releases with 100% rollback safety.",
    },
    {
      category: "Multi-Region Media Platform",
      challenge: "Configuration drift across 8 Kubernetes clusters caused mysterious failures that only appeared in European regions.",
      solution: "Centralized all cluster state in an audited GitOps repository with automated drift reconciliation daemons.",
      outcome: "Eliminated 100% of environment drift bugs and reduced time to spin up new regions from 2 weeks to 25 minutes.",
    },
    {
      category: "Regulated HealthTech Fleet",
      challenge: "Manual compliance reviews for every production release bottlenecked developer velocity and delayed critical security patches.",
      solution: "Engineered automated DevSecOps pipelines with cryptographic SBOM generation and signed audit artifacts.",
      outcome: "Achieved continuous SOC 2 audit readiness while cutting average PR review-to-production time by 76%.",
    },
  ];

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 text-white min-h-screen bg-[#08090d]">
      {/* Bespoke DevOps Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2">
              <Badge variant="lime" size="sm" dot>
                GITOPS &amp; CLUSTER ORCHESTRATION
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
              Declarative GitOps &amp; <br />
              <span className="lime-gradient-text">Zero-Downtime Delivery.</span>
            </h1>

            <p className="text-xl text-zinc-300 font-light font-mono">
              Git as Truth. Automated Canaries. Zero Outages.
            </p>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal">
              We eliminate deployment fear. By architecting declarative GitOps delivery pipelines, ephemeral testing environments, and automated canary rollback controllers, we turn deployments into predictable, non-event operations executed dozens of times per day.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Button href="/contact?service=DevOps%20and%20Automation" variant="primary" size="md">
                <span>Modernize Your CI/CD</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Button href="/technology" variant="secondary" size="md">
                <span>View DevOps Stack</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>

          {/* Interactive GitOps Pipeline Visualizer */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#0d0f15] border border-white/10 p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2 font-mono text-xs text-lime-400">
                  <GitBranch className="w-4 h-4" />
                  <span>ARGOCD RECONCILIATION LOOP</span>
                </div>
                <span className="text-[10px] font-mono bg-lime-500/10 text-lime-400 border border-lime-500/30 px-2 py-0.5 rounded">
                  SYNCED: REVISION a8f3c2
                </span>
              </div>

              {/* Pipeline Flow Stages */}
              <div className="space-y-2.5 font-mono text-xs">
                {pipelineStages.map((stg, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/10 hover:border-lime-500/30 transition-all space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-white font-sans">{stg.stage}</span>
                      <span className="text-[10px] text-lime-400 font-mono">✓ {stg.status}</span>
                    </div>
                    <div className="text-[10px] text-zinc-400">{stg.detail}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Target Cluster: 16 Regions</span>
                <span className="text-lime-400">Drift: 0.00%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 md:py-24 border-t border-white/10 bg-[#06070a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="lime" size="sm" dot className="mb-3">
              AUTOMATION DISCIPLINES
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Production GitOps Architecture
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2">
              Transforming manual server logins into mathematically verified declarative pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#0d0f15] border border-white/10 p-7 hover:border-lime-500/30 transition-all space-y-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-lime-400">
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

      {/* Production Case Studies */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="gold" size="sm" dot className="mb-3">
              PROVEN RESULTS
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Velocity Without Instability
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2">
              How high-performing teams eliminated deployment bottlenecks and eradicated drift.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((uc, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#0d0f15] border border-white/10 p-6 space-y-3.5 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-lime-400">
                    {uc.category}
                  </span>
                  <div>
                    <div className="text-xs font-semibold text-zinc-300">Challenge:</div>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-0.5">{uc.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-zinc-300">Automation Solution:</div>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-0.5">{uc.solution}</p>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <div className="text-xs font-mono text-lime-400 font-bold flex items-center gap-1.5">
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
              <Link href="/services/cloud-solutions" className="text-sm text-zinc-300 hover:text-white flex items-center gap-1">
                Cloud Solutions <ArrowRight className="w-3 h-3 text-lime-400" />
              </Link>
              <span className="text-zinc-600">•</span>
              <Link href="/services/cybersecurity" className="text-sm text-zinc-300 hover:text-white flex items-center gap-1">
                Cybersecurity <ArrowRight className="w-3 h-3 text-lime-400" />
              </Link>
              <span className="text-zinc-600">•</span>
              <Link href="/cloudos" className="text-sm text-zinc-300 hover:text-white flex items-center gap-1">
                Aravanta CloudOS <ArrowRight className="w-3 h-3 text-lime-400" />
              </Link>
            </div>
          </div>
          <Button href="/contact?service=DevOps%20and%20Automation" variant="primary" size="md">
            <span>Schedule DevOps Review</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
