"use client";

import React, { useState } from "react";
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
  CheckCircle2,
  Layers,
  Terminal,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface PracticeVisual {
  slug: string;
  name: string;
  icon: any;
  inputState: { title: string; subtitle: string };
  processState: { title: string; subtitle: string };
  outputState: { title: string; subtitle: string };
  deliverables: string[];
  metricHeadline: string;
}

const PRACTICES: PracticeVisual[] = [
  {
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    icon: Cloud,
    inputState: {
      title: "Fragmented On-Prem / VPC",
      subtitle: "Unoptimized spend, single failure zones",
    },
    processState: {
      title: "Aravanta Cloud Architecture",
      subtitle: "Multi-AZ IaC blueprints & FinOps",
    },
    outputState: {
      title: "Resilient Cloud Ecosystem",
      subtitle: "Zero-downtime failover & fiscal control",
    },
    deliverables: ["Terraform Blueprints", "FinOps Tagging Policy", "Disaster Recovery RTO < 1m"],
    metricHeadline: "Continuous multi-zone elasticity & automated right-sizing",
  },
  {
    slug: "digital-transformation",
    name: "Digital Transformation",
    icon: Workflow,
    inputState: {
      title: "Legacy Monolithic Silos",
      subtitle: "Spreadsheet bottlenecks & manual inputs",
    },
    processState: {
      title: "Strangler-Fig Modernization",
      subtitle: "API abstraction & event-driven queues",
    },
    outputState: {
      title: "Automated Digital Operations",
      subtitle: "Unified data flow & zero double-entry",
    },
    deliverables: ["API Adapter Layer", "Event-Driven Webhooks", "Automated Audit Trails"],
    metricHeadline: "Elimination of brittle manual dependencies",
  },
  {
    slug: "application-development",
    name: "Application Development",
    icon: Code2,
    inputState: {
      title: "Sluggish Web Interfaces",
      subtitle: "Unmaintainable spaghetti codebases",
    },
    processState: {
      title: "Modern React & App Router",
      subtitle: "Strict TypeScript & typed REST/GraphQL",
    },
    outputState: {
      title: "Scalable Full-Stack Apps",
      subtitle: "Sub-second TTFB & accessible WCAG AA",
    },
    deliverables: ["Design System UI Primitives", "OpenAPI Schemas", "Automated Test Suites"],
    metricHeadline: "High-performance, accessible enterprise web software",
  },
  {
    slug: "it-infrastructure",
    name: "IT Infrastructure",
    icon: Server,
    inputState: {
      title: "Manual Server Configurations",
      subtitle: "Snowflake hosts & silent failure risk",
    },
    processState: {
      title: "Infrastructure as Code & SRE",
      subtitle: "Declarative provisioning & centralized telemetry",
    },
    outputState: {
      title: "Self-Healing Infrastructure",
      subtitle: "Continuous monitoring & tested restore",
    },
    deliverables: ["Ansible/Terraform Playbooks", "Prometheus & Grafana SLOs", "Automated Backup Drills"],
    metricHeadline: "Predictable, auditable environments with zero drift",
  },
  {
    slug: "devops-automation",
    name: "DevOps & Automation",
    icon: Cpu,
    inputState: {
      title: "High-Stress Manual Cutover",
      subtitle: "Monthly deployments & midnight hotfixes",
    },
    processState: {
      title: "GitOps Continuous Delivery",
      subtitle: "Canary rollouts & automated quality gates",
    },
    outputState: {
      title: "Zero-Downtime Delivery",
      subtitle: "Multiple confident releases per day",
    },
    deliverables: ["GitHub Actions / GitLab CI", "Hardened Dockerfiles", "Automated Rollback Triggers"],
    metricHeadline: "Rapid developer iteration with zero production disruption",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    icon: ShieldAlert,
    inputState: {
      title: "Broad Admin Privileges",
      subtitle: "Hardcoded credentials & CVE vulnerabilities",
    },
    processState: {
      title: "Zero-Trust Architecture",
      subtitle: "Least-privilege IAM & automated SAST/SCA",
    },
    outputState: {
      title: "Hardened Security Posture",
      subtitle: "Encrypted data in transit & at rest",
    },
    deliverables: ["Short-Lived Token IAM", "Pre-Commit Secret Scanning", "Incident Response Playbooks"],
    metricHeadline: "Intrinsic defense-in-depth from code to cloud perimeter",
  },
  {
    slug: "it-consulting",
    name: "IT Consulting",
    icon: Compass,
    inputState: {
      title: "Technology Decision Gridlock",
      subtitle: "Vendor lock-in & unquantified tech debt",
    },
    processState: {
      title: "Unbiased Architecture Review",
      subtitle: "Objective evaluation scorecards & TCO models",
    },
    outputState: {
      title: "Actionable Strategic Roadmap",
      subtitle: "Clear business ROI & engineering clarity",
    },
    deliverables: ["Architecture Audit Reports", "Vendor Evaluation Matrix", "Engineering Standards Guide"],
    metricHeadline: "Pragmatic technical guidance aligning tech with commercial goals",
  },
];

export function ServiceInteractiveExplorer() {
  const [selectedSlug, setSelectedSlug] = useState<string>("cloud-solutions");

  const current = PRACTICES.find((p) => p.slug === selectedSlug) || PRACTICES[0];
  const Icon = current.icon;

  return (
    <div className="rounded-2xl bg-brand-surface border border-brand-border p-6 md:p-8 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-brand-border/60 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="gold" size="sm">
              INTERACTIVE ARCHITECTURE WORKFLOW
            </Badge>
            <span className="text-xs font-mono text-brand-gray-400">
              PRACTICE DRILL-DOWN
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mt-1">
            How We Transform Your Infrastructure
          </h3>
          <p className="text-xs text-brand-gray-400 mt-0.5">
            Select a practice to inspect the end-to-end transformation flow from initial state to production outcome.
          </p>
        </div>
      </div>

      {/* Practice Selector Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {PRACTICES.map((p) => {
          const PIcon = p.icon;
          const isSelected = p.slug === selectedSlug;
          return (
            <button
              key={p.slug}
              type="button"
              onClick={() => setSelectedSlug(p.slug)}
              className={cn(
                "inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold",
                isSelected
                  ? "bg-brand-gold text-brand-dark shadow-md"
                  : "bg-brand-surfaceElevated border border-brand-border text-brand-gray-300 hover:text-white hover:border-brand-gray-500"
              )}
            >
              <PIcon className="w-3.5 h-3.5" />
              <span>{p.name}</span>
            </button>
          );
        })}
      </div>

      {/* Transformation Pipeline Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 relative">
        {/* Step 1: Input State */}
        <div className="rounded-xl bg-brand-dark border border-brand-border p-5 relative">
          <div className="text-[10px] font-mono uppercase tracking-wider text-red-400 mb-2 flex items-center justify-between">
            <span>01. Legacy / Pain Point</span>
            <span className="w-2 h-2 rounded-full bg-red-500" />
          </div>
          <h4 className="text-sm font-bold text-white">
            {current.inputState.title}
          </h4>
          <p className="text-xs text-brand-gray-400 mt-1">
            {current.inputState.subtitle}
          </p>
        </div>

        {/* Step 2: Aravanta Engine */}
        <div className="rounded-xl bg-brand-surfaceElevated border border-brand-gold/40 p-5 relative shadow-md shadow-brand-gold/5">
          <div className="text-[10px] font-mono uppercase tracking-wider text-brand-gold mb-2 flex items-center justify-between">
            <span>02. Aravanta Tech Engineering</span>
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
          </div>
          <h4 className="text-sm font-bold text-white">
            {current.processState.title}
          </h4>
          <p className="text-xs text-brand-gray-300 mt-1">
            {current.processState.subtitle}
          </p>
        </div>

        {/* Step 3: Production Outcome */}
        <div className="rounded-xl bg-brand-dark border border-brand-border p-5 relative">
          <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 mb-2 flex items-center justify-between">
            <span>03. Target Production State</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>
          <h4 className="text-sm font-bold text-white">
            {current.outputState.title}
          </h4>
          <p className="text-xs text-brand-gray-400 mt-1">
            {current.outputState.subtitle}
          </p>
        </div>
      </div>

      {/* Deliverables & CTA */}
      <div className="p-4 rounded-xl bg-brand-surfaceElevated border border-brand-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono text-brand-gold font-semibold uppercase mb-1">
            Delivered Technical Artifacts:
          </div>
          <div className="flex flex-wrap gap-2">
            {current.deliverables.map((del, dIdx) => (
              <span
                key={dIdx}
                className="text-xs text-brand-gray-300 font-mono bg-brand-surface border border-brand-border px-2 py-0.5 rounded"
              >
                ✓ {del}
              </span>
            ))}
          </div>
        </div>

        <Button
          href={`/services/${current.slug}`}
          variant="primary"
          size="sm"
          className="shrink-0 font-semibold"
        >
          <span>Explore {current.name}</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
        </Button>
      </div>
    </div>
  );
}
