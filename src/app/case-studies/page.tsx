import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, Database, Server, Cpu, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollableCardStack } from "@/components/ui/scrollable-card-stack";
import { aravantaArchitectureCards } from "@/lib/content/cardStackData";

export const metadata: Metadata = {
  title: "Case Studies & Architecture Blueprints",
  description:
    "Real-world architectural transformation blueprints across FinTech, Enterprise SaaS, Healthcare, and Logistics engineered by ARAVANTA TECH.",
};

const caseStudies = [
  {
    id: "fintech-migration",
    category: "FINANCIAL SERVICES",
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
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-gold hover:text-brand-gold-light transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="max-w-3xl space-y-4">
          <Badge variant="gold" size="sm">
            PROVEN ARCHITECTURAL EXCELLENCE
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Case Studies & <br />
            <span className="gold-gradient-text">Architecture Blueprints.</span>
          </h1>
          <p className="text-xl text-brand-gold font-light">
            Simpler. Safer. Smarter. in production action.
          </p>
          <p className="text-base text-brand-gray-300 leading-relaxed pt-2">
            Explore how ARAVANTA TECH solves high-stakes infrastructure, modernization, and cloud engineering challenges. We focus on verifiable technical outcomes rather than superficial claims.
          </p>
        </div>
      </div>

      {/* Interactive Architecture Blueprints Stack */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="rounded-2xl bg-gradient-to-b from-[#0b0e16] to-[#06080e] border border-brand-border p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-brand-gold/5 blur-[120px] pointer-events-none rounded-full" />
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surfaceElevated border border-brand-border">
              <span className="w-2 h-2 rounded-full bg-[#d4a342] animate-pulse" />
              <span className="text-xs font-mono text-[#d4a342] font-semibold uppercase tracking-wider">
                Interactive Architecture Stack
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Flagship Transformation Blueprints
            </h2>
            <p className="text-sm text-brand-gray-300">
              Scroll with mouse wheel, swipe gestures, or click the navigation indicators to cycle through core engineering systems.
            </p>
          </div>

          <div className="relative z-10">
            <ScrollableCardStack
              items={aravantaArchitectureCards}
              cardHeight={410}
              cardWidth="w-[92vw] max-w-[580px]"
            />
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {caseStudies.map((cs) => (
          <div
            key={cs.id}
            id={cs.id}
            className="rounded-2xl bg-brand-surface border border-brand-border p-8 md:p-12 hover:border-brand-borderHighlight transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-brand-border/60 gap-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-gold font-semibold">
                  {cs.category} • {cs.clientType}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {cs.title}
                </h2>
              </div>
              <Badge variant="outline" size="sm" className="self-start sm:self-auto font-mono">
                VERIFIED OUTCOME
              </Badge>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Problem & Solution */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-red-400 font-semibold mb-2">
                    The Challenge & Technical Risk
                  </h3>
                  <p className="text-sm text-brand-gray-300 leading-relaxed">
                    {cs.problem}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-brand-gold font-semibold mb-2">
                    The Architectural Solution
                  </h3>
                  <p className="text-sm text-brand-gray-300 leading-relaxed">
                    {cs.solution}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-brand-gray-400 mb-2">
                    Architecture Stack:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cs.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-brand-surfaceElevated border border-brand-border text-brand-gray-200 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Outcomes Box */}
              <div className="lg:col-span-5 bg-brand-surfaceElevated border border-brand-gold/30 rounded-xl p-6 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-gold font-semibold">
                  Key Technical Outcomes
                </div>
                <ul className="space-y-3">
                  {cs.outcomes.map((outcome, oIdx) => (
                    <li
                      key={oIdx}
                      className="text-xs sm:text-sm text-brand-gray-200 flex items-start gap-2.5 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-brand-border/40">
                  <Button
                    href={`/contact?service=Case%20Study%20-${encodeURIComponent(cs.title)}`}
                    variant="primary"
                    size="sm"
                    className="w-full font-semibold"
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
      <div className="mt-20 pt-16 border-t border-brand-border/60 max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-extrabold text-white">
          Have an Architecture Challenge of Your Own?
        </h2>
        <p className="text-base text-brand-gray-300">
          Connect directly with our principal architects for a confidential review of your system topology, migration risks, or performance bottlenecks.
        </p>
        <div className="pt-2">
          <Button href="/contact" variant="primary" size="lg" className="font-semibold">
            <span>Schedule Architecture Scoping Session</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
