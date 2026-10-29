import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, Zap, Lock, Database, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Industry Solutions & Architecture Blueprints",
  description:
    "Tailored cloud, DevOps, and modern application solutions for Financial Services, Enterprise SaaS, Healthcare, and E-Commerce by ARAVANTA TECH.",
};

const solutions = [
  {
    slug: "fintech",
    title: "Financial Services & FinTech",
    tagline: "Resilient, Compliant & Low-Latency Transaction Systems",
    description:
      "Financial platforms require absolute data integrity, fault-tolerant ledger replication, and strict regulatory compliance. We architect zero-trust cloud perimeters, automated PCI-DSS compliance guardrails, and deterministic failover systems.",
    pillars: [
      "Zero-downtime multi-AZ database clustering",
      "End-to-end payload encryption & hardware security module (HSM) secrets",
      "Sub-20ms transactional latency for payment rails",
    ],
    recommendedServices: ["Cloud Solutions", "Cybersecurity", "IT Infrastructure"],
  },
  {
    slug: "enterprise-saas",
    title: "High-Growth Enterprise SaaS",
    tagline: "Scalable Multi-Tenant Platforms with High Release Velocity",
    description:
      "B2B SaaS companies must balance rapid feature delivery with multi-tenant data isolation and operational cost efficiency. We implement modern Next.js frontends, modular microservice backends, and GitOps pipelines that enable multiple daily releases.",
    pillars: [
      "Tenant-isolated schema architecture & noisy-neighbor protection",
      "Automated CI/CD quality gates & blue/green canary deployments",
      "Core Web Vitals optimized web frontends built with TypeScript & React",
    ],
    recommendedServices: ["Application Development", "DevOps & Automation", "Cloud Solutions"],
  },
  {
    slug: "healthcare",
    title: "Healthcare & Life Sciences",
    tagline: "HIPAA-Conscious Cloud Architecture & Private Telemetry",
    description:
      "Healthcare applications require uncompromising data privacy, least-privilege access, and detailed audit trails. We design isolated VPC topologies with ephemeral token authentication and automated audit log immutability.",
    pillars: [
      "Least-privilege role-based access control (RBAC) & short-lived credentials",
      "Continuous compliance drift monitoring & automated alerting",
      "Isolated patient data enclaves with hardware-level encryption at rest",
    ],
    recommendedServices: ["Cybersecurity", "IT Infrastructure", "IT Consulting"],
  },
  {
    slug: "ecommerce",
    title: "Global E-Commerce & Retail",
    tagline: "Peak-Traffic Elasticity with Sub-Second Checkout Speeds",
    description:
      "Flash sales and seasonal traffic surges can overwhelm poorly engineered architectures. We build edge-cached storefronts, event-driven inventory reconciliation queues, and auto-scaling compute fleets designed for extreme load.",
    pillars: [
      "Edge caching and global CDN ingress with sub-50ms TTFB",
      "Event-driven inventory management via distributed message queues",
      "Auto-scaling compute clusters that scale up in seconds, not minutes",
    ],
    recommendedServices: ["Cloud Solutions", "Application Development", "DevOps & Automation"],
  },
];

export default function SolutionsPage() {
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
            INDUSTRY-SPECIFIC ARCHITECTURES
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Tailored Industry <br />
            <span className="gold-gradient-text">Solutions.</span>
          </h1>
          <p className="text-xl text-brand-gold font-light">
            Engineered for your domain&apos;s unique performance and compliance demands.
          </p>
          <p className="text-base text-brand-gray-300 leading-relaxed pt-2">
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
            className="rounded-2xl bg-brand-surface border border-brand-border p-8 md:p-12 hover:border-brand-borderHighlight transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <Badge variant="gold" size="sm">
                  INDUSTRY BLUEPRINT
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  {sol.title}
                </h2>
                <p className="text-sm sm:text-base font-medium text-brand-gold">
                  {sol.tagline}
                </p>
                <p className="text-sm text-brand-gray-300 leading-relaxed">
                  {sol.description}
                </p>

                <div className="pt-4 flex flex-wrap gap-2">
                  <span className="text-xs font-mono text-brand-gray-400 self-center">
                    Associated Practices:
                  </span>
                  {sol.recommendedServices.map((svc, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-brand-surfaceElevated border border-brand-border text-brand-gray-200 text-xs font-mono"
                    >
                      {svc}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-brand-surfaceElevated border border-brand-border/60 rounded-xl p-6 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-gold font-semibold">
                  Architectural Pillars
                </div>
                <ul className="space-y-3">
                  {sol.pillars.map((pillar, pIdx) => (
                    <li
                      key={pIdx}
                      className="text-xs sm:text-sm text-brand-gray-200 flex items-start gap-2.5 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <span>{pillar}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-brand-border/40">
                  <Button
                    href={`/contact?service=${encodeURIComponent(sol.title)}`}
                    variant="primary"
                    size="sm"
                    className="w-full font-semibold"
                  >
                    <span>Discuss {sol.title} Project</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 pt-16 border-t border-brand-border/60 max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-extrabold text-white">
          Operating in a Different Vertical?
        </h2>
        <p className="text-base text-brand-gray-300">
          Our core systems engineering and cloud transformation principles apply across any complex, high-reliability software initiative.
        </p>
        <div className="pt-2">
          <Button href="/contact" variant="primary" size="lg" className="font-semibold">
            <span>Consult With Principal Architects</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
