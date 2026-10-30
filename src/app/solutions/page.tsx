import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, Zap, Lock, Database, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Industry Solutions & Architecture Blueprints | ARAVANTA TECH",
  description:
    "Tailored cloud, DevOps, and modern application solutions for Financial Services, Enterprise SaaS, Healthcare, and E-Commerce by ARAVANTA TECH.",
};

const solutions = [
  {
    slug: "fintech",
    category: "FINANCIAL SERVICES",
    badgeVariant: "emerald" as const,
    title: "Financial Services & FinTech",
    tagline: "Resilient, Compliant & Low-Latency Transaction Systems",
    description:
      "Financial platforms require absolute data integrity, fault-tolerant ledger replication, and strict regulatory compliance. We architect zero-trust cloud perimeters, automated PCI-DSS compliance guardrails, and deterministic failover systems.",
    pillars: [
      "Zero-downtime multi-AZ database clustering with sub-second replication",
      "End-to-end payload encryption & hardware security module (HSM) secrets",
      "Sub-20ms transactional latency for payment rails and settlement workflows",
    ],
    recommendedServices: [
      { name: "Cloud Solutions", href: "/services/cloud-solutions" },
      { name: "Cybersecurity", href: "/services/cybersecurity" },
      { name: "IT Infrastructure", href: "/services/it-infrastructure" },
    ],
  },
  {
    slug: "enterprise-saas",
    category: "ENTERPRISE SAAS",
    badgeVariant: "cyan" as const,
    title: "High-Growth Enterprise SaaS",
    tagline: "Scalable Multi-Tenant Platforms with High Release Velocity",
    description:
      "B2B SaaS companies must balance rapid feature delivery with multi-tenant data isolation and operational cost efficiency. We implement modern Next.js frontends, modular microservice backends, and GitOps pipelines that enable multiple daily releases.",
    pillars: [
      "Tenant-isolated schema architecture & noisy-neighbor protection",
      "Automated CI/CD quality gates & blue/green canary deployments",
      "Core Web Vitals optimized web frontends built with TypeScript & React",
    ],
    recommendedServices: [
      { name: "Application Development", href: "/services/application-development" },
      { name: "DevOps & Automation", href: "/services/devops-automation" },
      { name: "Cloud Solutions", href: "/services/cloud-solutions" },
    ],
  },
  {
    slug: "healthcare",
    category: "HEALTHCARE TECH",
    badgeVariant: "lime" as const,
    title: "Healthcare & Life Sciences",
    tagline: "HIPAA-Conscious Cloud Architecture & Private Telemetry",
    description:
      "Healthcare applications require uncompromising data privacy, least-privilege access, and detailed audit trails. We design isolated VPC topologies with ephemeral token authentication and automated audit log immutability.",
    pillars: [
      "Least-privilege role-based access control (RBAC) & short-lived credentials",
      "Continuous compliance drift monitoring & automated alerting",
      "Isolated patient data enclaves with hardware-level encryption at rest",
    ],
    recommendedServices: [
      { name: "Cybersecurity", href: "/services/cybersecurity" },
      { name: "IT Infrastructure", href: "/services/it-infrastructure" },
      { name: "IT Consulting", href: "/services/it-consulting" },
    ],
  },
  {
    slug: "ecommerce",
    category: "RETAIL & E-COMMERCE",
    badgeVariant: "gold" as const,
    title: "Global E-Commerce & Retail",
    tagline: "Peak-Traffic Elasticity with Sub-Second Checkout Speeds",
    description:
      "Flash sales and seasonal traffic surges can overwhelm poorly engineered architectures. We build edge-cached storefronts, event-driven inventory reconciliation queues, and auto-scaling compute fleets designed for extreme load.",
    pillars: [
      "Edge caching and global CDN ingress with sub-50ms TTFB",
      "Event-driven inventory management via distributed message queues",
      "Auto-scaling compute clusters that scale up in seconds, not minutes",
    ],
    recommendedServices: [
      { name: "Cloud Solutions", href: "/services/cloud-solutions" },
      { name: "Application Development", href: "/services/application-development" },
      { name: "DevOps & Automation", href: "/services/devops-automation" },
    ],
  },
];

export default function SolutionsPage() {
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
            INDUSTRY-SPECIFIC ARCHITECTURES
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
            Tailored Industry <br />
            <span className="emerald-gradient-text">Solutions.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-300 font-light font-mono">
            Engineered for your domain&apos;s unique performance and compliance demands.
          </p>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed pt-1">
            Every industry operates under distinct regulatory constraints, scaling patterns, and operational risks. We design specialized architecture frameworks that directly solve your domain-specific bottlenecks.
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {solutions.map((sol) => (
          <div
            key={sol.slug}
            id={sol.slug}
            className="rounded-3xl bg-[#0d0f15] border border-white/10 p-6 sm:p-8 md:p-10 hover:border-white/20 transition-all duration-300 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <Badge variant={sol.badgeVariant} size="sm">
                  {sol.category}
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {sol.title}
                </h2>
                <p className="text-sm sm:text-base font-medium text-zinc-300 font-mono">
                  {sol.tagline}
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                  {sol.description}
                </p>

                <div className="pt-3">
                  <div className="text-xs font-mono text-zinc-400 mb-2">
                    Associated Practices:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {sol.recommendedServices.map((svc, i) => (
                      <Link
                        key={i}
                        href={svc.href}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-zinc-300 hover:text-white hover:border-emerald-500/40 text-xs font-mono transition-colors"
                      >
                        {svc.name} →
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/[0.02] border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  Architectural Pillars
                </div>
                <ul className="space-y-3">
                  {sol.pillars.map((pillar, pIdx) => (
                    <li
                      key={pIdx}
                      className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pillar}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/10">
                  <Button
                    href={`/contact?service=Solution%20-%20${encodeURIComponent(sol.title)}`}
                    variant="primary"
                    size="sm"
                    className="w-full"
                  >
                    <span>Request Domain Blueprint</span>
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
          Operating in Another Regulated Domain?
        </h2>
        <p className="text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
          We frequently partner with organizations in aerospace, energy, and defense technology to solve extreme resilience and compliance challenges.
        </p>
        <div className="pt-2 flex justify-center">
          <Button href="/contact" variant="primary" size="lg">
            <span>Consult Solutions Architects</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
