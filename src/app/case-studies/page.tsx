import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, Database, Server, Cpu, ArrowLeft, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollableCardStack } from "@/components/ui/scrollable-card-stack";
import { aravantaArchitectureCards } from "@/lib/content/cardStackData";

export const metadata: Metadata = {
  title: "Case Studies & Architecture Dossiers | ARAVANTA TECH",
  description:
    "Real-world architectural transformation blueprints across FinTech, Enterprise SaaS, Healthcare, and Logistics engineered by ARAVANTA TECH.",
};

const caseStudies = [
  {
    id: "fintech-migration",
    category: "FINANCIAL SERVICES",
    badgeVariant: "emerald" as const,
    title: "Zero-Downtime Core Database & Workload Migration",
    clientType: "Mid-Market Payment Gateway & FinTech",
    problem:
      "Legacy on-premises transaction database struggling under spike volume, causing latency spikes and severe risk during schema updates. Big-bang migration was ruled out due to strict transaction continuity requirements.",
    solution:
      "Engineered an asynchronous blue/green data replication pipeline with dual-write synchronization. Built idempotent reconciliation workers to ensure zero transaction loss during the final live DNS cutover.",
    outcomes: [
      "Zero minutes of unplanned production transaction downtime during cutover.",
      "99.999% availability maintained with multi-AZ automatic failover topologies.",
      "Reduced p99 query latency from 420ms to 28ms under peak holiday load.",
    ],
    techStack: ["PostgreSQL Replicas", "AWS RDS Multi-AZ", "Terraform", "Go Workers", "Kafka"],
  },
  {
    id: "saas-modernization",
    category: "ENTERPRISE SAAS",
    badgeVariant: "cyan" as const,
    title: "Strangler-Fig Modernization of a Multi-Tenant Monolith",
    clientType: "Enterprise B2B Workflow Platform",
    problem:
      "A 9-year-old monolithic codebase where deploying a single minor update took 4 hours and frequently broke unrelated customer billing and reporting modules.",
    solution:
      "Implemented the strangler-fig pattern by deploying an API Gateway routing layer. Extracted billing, notification, and telemetry into independent microservices with strict OpenAPI schema validation.",
    outcomes: [
      "Deployment frequency increased from bi-weekly stressful releases to multiple daily releases.",
      "Reduced mean time to recovery (MTTR) from 3 hours to under 4 minutes.",
      "Clear tenant isolation preventing noisy-neighbor performance degradation.",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "Docker", "Kubernetes", "Redis"],
  },
  {
    id: "healthtech-security",
    category: "HEALTHCARE TECH",
    badgeVariant: "lime" as const,
    title: "Zero-Trust Architecture & HIPAA-Compliant Infrastructure",
    clientType: "Clinical Data Analytics Provider",
    problem:
      "Rapidly scaling telehealth platform requiring audit-ready HIPAA compliance, least-privilege IAM controls, and end-to-end data encryption across multiple public cloud accounts.",
    solution:
      "Engineered a zero-trust network perimeter using mutual TLS (mTLS), ephemeral short-lived access credentials, and automated infrastructure policy scanning via Open Policy Agent (OPA).",
    outcomes: [
      "100% elimination of persistent long-lived administrator access keys.",
      "Automated compliance drift alerting catching misconfigured buckets within seconds.",
      "Successful external audit clearance with zero critical non-conformities.",
    ],
    techStack: ["HashiCorp Vault", "OPA", "AWS Transit Gateway", "Terraform", "Datadog"],
  },
  {
    id: "logistics-finops",
    category: "SUPPLY CHAIN & IOT",
    badgeVariant: "gold" as const,
    title: "Event-Driven Telemetry Ingestion & FinOps Optimization",
    clientType: "Global Fleet Logistics Operator",
    problem:
      "Rapidly accumulating $90k/month cloud spend due to unpartitioned timeseries database storage, oversized compute instances, and unmanaged telemetry stream retention.",
    solution:
      "Redesigned the telemetry ingest pipeline using tiered storage, auto-scaling spot worker nodes, and granular FinOps cost-allocation tags to eliminate idle compute overhead.",
    outcomes: [
      "34% reduction in overall monthly infrastructure expenditure ($31,000/month saved).",
      "Sub-second ingest throughput handling over 14,000 events/second.",
      "Predictable unit-cost tracking per active connected fleet vehicle.",
    ],
    techStack: ["Apache Kafka", "ClickHouse", "Terraform", "AWS Graviton", "Prometheus"],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 text-white min-h-screen bg-[#08090d]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-emerald-400" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="max-w-3xl space-y-4">
          <Badge variant="emerald" size="sm" dot>
            PROVEN ARCHITECTURAL EXCELLENCE
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
            Case Studies &amp; <br />
            <span className="emerald-gradient-text">Architecture Blueprints.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-300 font-light font-mono">
            Simpler. Safer. Smarter. in verified production.
          </p>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed pt-1">
            Explore how ARAVANTA TECH solves high-stakes infrastructure, modernization, and cloud engineering challenges. We focus on verifiable technical outcomes rather than superficial claims.
          </p>
        </div>
      </div>

      {/* Interactive Architecture Blueprints Stack */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="rounded-3xl bg-[#0d0f15] border border-white/10 p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3 relative z-10">
            <Badge variant="emerald" size="sm" dot>
              INTERACTIVE ARCHITECTURE STACK
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Flagship Transformation Blueprints
            </h2>
            <p className="text-sm text-zinc-400">
              Scroll with mouse wheel, swipe gestures, or click the navigation indicators to cycle through core engineering systems.
            </p>
          </div>

          <div className="relative z-10 pb-4">
            <ScrollableCardStack
              items={aravantaArchitectureCards}
              cardHeight={410}
              cardWidth="w-[92vw] max-w-[580px]"
            />
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {caseStudies.map((cs) => (
          <div
            key={cs.id}
            id={cs.id}
            className="rounded-3xl bg-[#0d0f15] border border-white/10 p-6 sm:p-8 md:p-10 hover:border-white/20 transition-all duration-300 shadow-xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  {cs.category} • {cs.clientType}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 tracking-tight">
                  {cs.title}
                </h2>
              </div>
              <Badge variant={cs.badgeVariant} size="sm" className="self-start sm:self-auto font-mono">
                VERIFIED OUTCOME
              </Badge>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Problem & Solution */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-2">
                    The Challenge &amp; Technical Risk
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                    {cs.problem}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2">
                    The Architectural Solution
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                    {cs.solution}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Architecture Stack:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cs.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-zinc-300 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Outcomes Box */}
              <div className="lg:col-span-5 bg-white/[0.02] border border-emerald-500/30 rounded-2xl p-6 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  Key Technical Outcomes
                </div>
                <ul className="space-y-3">
                  {cs.outcomes.map((outcome, oIdx) => (
                    <li
                      key={oIdx}
                      className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/10">
                  <Button
                    href={`/contact?service=Case%20Study%20-%20${encodeURIComponent(cs.title)}`}
                    variant="primary"
                    size="sm"
                    className="w-full"
                  >
                    <span>Discuss Similar Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 pt-16 border-t border-white/10 max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Have an Architecture Challenge of Your Own?
        </h2>
        <p className="text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
          Connect directly with our principal architects for a confidential review of your system topology, migration risks, or performance bottlenecks.
        </p>
        <div className="pt-2 flex justify-center">
          <Button href="/contact" variant="primary" size="lg">
            <span>Schedule Architecture Scoping Session</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
