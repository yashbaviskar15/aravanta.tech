import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  Terminal,
  Shield,
  Zap,
  Briefcase,
  Laptop,
  HeartHandshake,
  Compass,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Careers & Engineering Culture | ARAVANTA TECH",
  description:
    "Join the engineering team at ARAVANTA TECH. We solve high-stakes cloud architecture, distributed systems, and digital modernization challenges with zero ego.",
};

const openRoles = [
  {
    title: "Principal Cloud Solutions Architect",
    practice: "Cloud Solutions & Infrastructure",
    location: "Remote / Hybrid (Global)",
    type: "Full-Time",
    badgeVariant: "emerald" as const,
    description:
      "Lead enterprise cloud transformation initiatives across multi-cloud topologies. Design zero-downtime database replication pipelines and declarative IaC blueprints.",
  },
  {
    title: "Senior Full-Stack Software Engineer",
    practice: "Application Development",
    location: "Remote / Hybrid (Global)",
    type: "Full-Time",
    badgeVariant: "cyan" as const,
    description:
      "Build high-performance web applications and distributed APIs using Next.js, React, TypeScript, Node.js, and PostgreSQL. Champion type-safety and accessible design systems.",
  },
  {
    title: "DevSecOps & Platform Engineer",
    practice: "DevOps & Cybersecurity",
    location: "Remote / Hybrid (Global)",
    type: "Full-Time",
    badgeVariant: "lime" as const,
    description:
      "Architect CI/CD release pipelines, Kubernetes clusters, GitOps workflows, and automated zero-trust security scanning gates.",
  },
  {
    title: "Site Reliability Engineer (SRE)",
    practice: "IT Infrastructure & CloudOS",
    location: "Remote / Hybrid (Global)",
    type: "Full-Time",
    badgeVariant: "gold" as const,
    description:
      "Build autonomous cluster convergence daemons, OpenTelemetry distributed tracing pipelines, and high-availability multi-region failover protocols.",
  },
];

const hiringValues = [
  {
    icon: Terminal,
    title: "Practical Code, Not LeetCode",
    description: "We don't ask inverted binary tree puzzles. Our interview evaluates real architecture design, system trade-offs, and practical PR reviews.",
  },
  {
    icon: Laptop,
    title: "Remote-First Autonomy",
    description: "Async-first communication with flexible hours. Work with top-tier hardware, dedicated workspace stipend, and focus on deep flow state.",
  },
  {
    icon: Shield,
    title: "Zero-Blame Post-Mortems",
    description: "Failures are system flaws, not personal defects. We conduct thorough, transparent blameless post-mortems to continuously improve resiliency.",
  },
  {
    icon: Compass,
    title: "Continuous Craftsmanship",
    description: "Paid access to conferences, books, certifications, and dedicated engineering time to contribute to open-source systems.",
  },
];

export default function CareersPage() {
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
            ENGINEERING CULTURE &amp; OPPORTUNITIES
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
            Build Systems That <br />
            <span className="emerald-gradient-text">Matter.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-300 font-light font-mono">
            Simpler. Safer. Smarter.
          </p>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed pt-1">
            We are a team of senior engineers and architecture specialists who care deeply about craft, type-safety, resilience, and operational honesty. We build production systems without bloated buzzwords.
          </p>
        </div>
      </div>

      {/* Hiring Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hiringValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0d0f15] border border-white/10 p-6 sm:p-7 hover:border-emerald-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-emerald-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-2xl mb-8">
          <Badge variant="gold" size="sm" dot className="mb-2">
            JOIN THE TEAM
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Current Open Roles
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            We are always interested in speaking with talented senior practitioners across cloud and systems engineering.
          </p>
        </div>

        <div className="space-y-4">
          {openRoles.map((role, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#0d0f15] border border-white/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-white/25 transition-all"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {role.title}
                  </h3>
                  <Badge variant={role.badgeVariant} size="sm">
                    {role.type}
                  </Badge>
                  <span className="text-xs font-mono text-zinc-400">
                    {role.location}
                  </span>
                </div>
                <div className="text-xs font-mono text-emerald-400 font-semibold">
                  {role.practice}
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pt-1">
                  {role.description}
                </p>
              </div>

              <div className="shrink-0">
                <Button
                  href={`/contact?interest=Careers%20-%20${encodeURIComponent(role.title)}`}
                  variant="outline"
                  size="md"
                >
                  <span>Apply / Inquire</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing General Inquiry */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#0d0f15] border border-white/10 p-8 md:p-12 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-white">
            Don't see your specific specialization?
          </h3>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            If you are an exceptional engineer with a passion for distributed systems, high concurrency, or cloud security, we’d love to connect.
          </p>
          <div className="pt-2 flex justify-center">
            <Button
              href="/contact?interest=General%20Careers%20Inquiry"
              variant="primary"
              size="md"
            >
              <span>Send General Inquiry</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
