import React from "react";
import Link from "next/link";
import {
  Cloud,
  Workflow,
  Code2,
  Server,
  Cpu,
  ShieldAlert,
  Compass,
  ArrowRight,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

const coreServices = [
  {
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    icon: Cloud,
    tagline: "Resilient Cloud Architecture & Migration",
    description:
      "Cloud strategy, cost optimization, and multi-zone resilient architectures engineered to maximize elasticity and control.",
    highlights: ["Cloud Migration Planning", "Multi-Cloud Strategy", "FinOps & Right-Sizing"],
  },
  {
    title: "Digital Transformation",
    slug: "digital-transformation",
    icon: Workflow,
    tagline: "Modernizing Legacy Systems & Workflows",
    description:
      "Modernizing brittle systems, eliminating manual spreadsheet bottlenecks, and streamlining operations with event-driven automation.",
    highlights: ["Legacy-System Modernization", "Process Automation", "Digital Product Strategy"],
  },
  {
    title: "Application Development",
    slug: "application-development",
    icon: Code2,
    tagline: "Full-Stack Web & Software Engineering",
    description:
      "Modern frontend engineering, scalable APIs, and robust architectures built with strict type safety, performance, and accessibility.",
    highlights: ["Next.js & React Engineering", "Distributed APIs", "Design Systems"],
  },
  {
    title: "IT Infrastructure",
    slug: "it-infrastructure",
    icon: Server,
    tagline: "Predictable, Observable Environments",
    description:
      "Reliability engineering, automated provisioning, centralized telemetry, and tested disaster recovery pipelines.",
    highlights: ["Infrastructure as Code", "Telemetry & Observability", "Disaster Recovery"],
  },
  {
    title: "DevOps & Automation",
    slug: "devops-automation",
    icon: Cpu,
    tagline: "Zero-Downtime Delivery Pipelines",
    description:
      "Eliminating deployment friction with fast CI/CD pipelines, container orchestration, GitOps, and automated quality gates.",
    highlights: ["CI/CD Pipeline Architecture", "Containerization & K8s", "GitOps Governance"],
  },
  {
    title: "Cybersecurity",
    slug: "cybersecurity",
    icon: ShieldAlert,
    tagline: "Security-Conscious Architecture & IAM",
    description:
      "Embedding zero-trust access boundaries, automated dependency scanning, and proactive threat modeling into development lifecycles.",
    highlights: ["Zero-Trust IAM", "DevSecOps Pipeline Gates", "Threat Modeling"],
  },
  {
    title: "IT Consulting",
    slug: "it-consulting",
    icon: Compass,
    tagline: "Strategic Technology & Architecture Advisory",
    description:
      "Unbiased technical architecture reviews, vendor evaluations, and engineering roadmaps aligning tech investments with business outcomes.",
    highlights: ["Architecture Reviews", "Technology Roadmaps", "Vendor Evaluation"],
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#0b0c10] border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            eyebrow="OUR EXPERTISE"
            title="Core Business Capabilities"
            description="End-to-end technology practices focused on simplifying operations, eliminating architectural risks, and accelerating delivery."
            className="mb-0"
          />
          <Link
            href="/services"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold hover:text-brand-gold-light transition-colors"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.slug}
                className="flex flex-col justify-between group hover:border-brand-gold/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-brand-surfaceElevated border border-brand-border flex items-center justify-center text-brand-gold group-hover:bg-brand-gold/15 group-hover:border-brand-gold/40 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" size="sm">
                      PRACTICE
                    </Badge>
                  </div>

                  <CardTitle className="text-xl group-hover:text-brand-gold transition-colors">
                    {service.title}
                  </CardTitle>
                  <div className="text-xs font-mono text-brand-gold/90 mt-1 mb-3">
                    {service.tagline}
                  </div>
                  <CardDescription>
                    {service.description}
                  </CardDescription>

                  <div className="mt-5 pt-4 border-t border-brand-border/60">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-gray-400 mb-2">
                      Key Deliverables
                    </div>
                    <ul className="space-y-1.5">
                      {service.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-brand-gray-300 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/80" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-xs font-semibold text-white group-hover:text-brand-gold transition-colors gap-1.5"
                  >
                    <span>Read practice details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            );
          })}

          {/* 8th Card: Aravanta CloudOS Platform Spotlight */}
          <Card className="flex flex-col justify-between bg-gradient-to-br from-brand-surfaceElevated to-brand-surface border-brand-gold/30 hover:border-brand-gold/70 group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-lg bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center text-brand-gold">
                  <Cpu className="w-6 h-6" />
                </div>
                <Badge variant="gold" size="sm">
                  PLATFORM INITIATIVE
                </Badge>
              </div>

              <CardTitle className="text-xl text-white group-hover:text-brand-gold transition-colors">
                Aravanta CloudOS
              </CardTitle>
              <div className="text-xs font-mono text-brand-gold mt-1 mb-3">
                Unified Cloud Management Platform
              </div>
              <CardDescription>
                Our proprietary platform initiative engineered to automate cloud governance, enforce zero-trust security guardrails, and provide unified telemetry.
              </CardDescription>

              <div className="mt-5 pt-4 border-t border-brand-border/60">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-gold mb-2">
                  Architecture Status
                </div>
                <p className="text-xs text-brand-gray-300 leading-relaxed">
                  In active architectural development and internal validation. Roadmap briefings available for enterprise partners.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4">
              <Link
                href="/cloudos"
                className="inline-flex items-center text-xs font-semibold text-brand-gold hover:text-brand-gold-light transition-colors gap-1.5"
              >
                <span>Explore Aravanta CloudOS</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
