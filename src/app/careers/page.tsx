import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Code2, Terminal, Shield, Zap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Careers & Engineering Culture",
  description:
    "Join the engineering team at ARAVANTA TECH. We solve high-stakes cloud architecture, distributed systems, and digital modernization challenges.",
};

const openRoles = [
  {
    title: "Principal Cloud Solutions Architect",
    practice: "Cloud Solutions & Infrastructure",
    location: "Remote / Hybrid",
    type: "Full-Time",
    description:
      "Lead enterprise cloud transformation initiatives across multi-cloud topologies. Design zero-downtime database replication pipelines and declarative IaC blueprints.",
  },
  {
    title: "Senior Full-Stack Software Engineer",
    practice: "Application Development",
    location: "Remote / Hybrid",
    type: "Full-Time",
    description:
      "Build high-performance web applications and distributed APIs using Next.js, React, TypeScript, Node.js, and PostgreSQL. Champion type-safety and accessible design systems.",
  },
  {
    title: "DevSecOps & Platform Engineer",
    practice: "DevOps & Cybersecurity",
    location: "Remote / Hybrid",
    type: "Full-Time",
    description:
      "Architect CI/CD release pipelines, Kubernetes clusters, GitOps workflows, and automated zero-trust security scanning gates.",
  },
];

export default function CareersPage() {
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
            ENGINEERING CULTURE & OPPORTUNITIES
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Build Systems That <br />
            <span className="gold-gradient-text">Matter.</span>
          </h1>
          <p className="text-xl text-brand-gold font-light">
            Simpler. Safer. Smarter.
          </p>
          <p className="text-base text-brand-gray-300 leading-relaxed pt-2">
            We are a team of senior engineers and architecture specialists who care deeply about craft, type-safety, resilience, and operational honesty. We build production systems without bloated buzzwords.
          </p>
        </div>
      </div>

      {/* Culture & Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl bg-brand-surface border border-brand-border p-6 md:p-8">
            <Zap className="w-8 h-8 text-brand-gold mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Architectural Rigor</h3>
            <p className="text-sm text-brand-gray-300 leading-relaxed">
              We design and model systems thoroughly before writing code. We value well-considered domain boundaries over frantic patching.
            </p>
          </div>

          <div className="rounded-xl bg-brand-surface border border-brand-border p-6 md:p-8">
            <Shield className="w-8 h-8 text-brand-gold mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Zero-Ego Engineering</h3>
            <p className="text-sm text-brand-gray-300 leading-relaxed">
              We work collaboratively with client engineering teams, elevating internal talent and transferring knowledge instead of gatekeeping systems.
            </p>
          </div>

          <div className="rounded-xl bg-brand-surface border border-brand-border p-6 md:p-8">
            <Terminal className="w-8 h-8 text-brand-gold mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Modern Tooling</h3>
            <p className="text-sm text-brand-gray-300 leading-relaxed">
              We leverage strict TypeScript, Infrastructure as Code, container orchestration, and automated CI/CD to eliminate busywork and focus on core engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Current Open Roles
          </h2>
          <p className="text-sm text-brand-gray-400 mt-1">
            We are always interested in speaking with talented senior practitioners.
          </p>
        </div>

        <div className="space-y-4">
          {openRoles.map((role, i) => (
            <div
              key={i}
              className="rounded-xl bg-brand-surface border border-brand-border p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-brand-gold/40 transition-colors"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-white">
                    {role.title}
                  </h3>
                  <Badge variant="gold" size="sm">
                    {role.type}
                  </Badge>
                  <span className="text-xs font-mono text-brand-gray-400">
                    {role.location}
                  </span>
                </div>
                <div className="text-xs font-mono text-brand-gold">
                  {role.practice}
                </div>
                <p className="text-sm text-brand-gray-300 leading-relaxed">
                  {role.description}
                </p>
              </div>

              <div className="shrink-0">
                <Button
                  href={`/contact?interest=Careers%20-${encodeURIComponent(role.title)}`}
                  variant="outline"
                  size="md"
                  className="font-semibold"
                >
                  <span>Apply / Inquire</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
