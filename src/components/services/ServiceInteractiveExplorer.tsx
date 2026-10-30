"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
    metricHeadline: "Measurable cloud infrastructure resilience and cost transparency",
  },
  {
    slug: "digital-transformation",
    name: "Digital Transformation",
    icon: Workflow,
    inputState: {
      title: "Monolithic Data Silos",
      subtitle: "Slow releases & manual operational workflows",
    },
    processState: {
      title: "Event-Driven Modernization",
      subtitle: "Strangler migrations & asynchronous pipelines",
    },
    outputState: {
      title: "Autonomous Digital Core",
      subtitle: "Real-time data synchronization & decoupled velocity",
    },
    deliverables: ["Legacy Decommissioning Plan", "Event Stream Architecture", "Automated Ops Handbooks"],
    metricHeadline: "Transformative digital workflow without breaking core business continuity",
  },
  {
    slug: "application-development",
    name: "Application Development",
    icon: Code2,
    inputState: {
      title: "Technical Debt & Bugs",
      subtitle: "Untyped spaghetti code & high churn",
    },
    processState: {
      title: "Type-Safe Full-Stack Design",
      subtitle: "Next.js App Router, TypeScript & GraphQL",
    },
    outputState: {
      title: "High-Performance Workloads",
      subtitle: "Sub-second p99 latency & automated test mesh",
    },
    deliverables: ["Modular Component Systems", "Strict TypeScript Schemas", "E2E Playwright Suites"],
    metricHeadline: "Scalable software systems built for enterprise maintainability",
  },
  {
    slug: "it-infrastructure",
    name: "IT Infrastructure",
    icon: Server,
    inputState: {
      title: "Manual Server Drift",
      subtitle: "Inconsistent configurations & blind spots",
    },
    processState: {
      title: "Autonomous Fleet Orchestration",
      subtitle: "Zero-drift IaC & continuous telemetry monitoring",
    },
    outputState: {
      title: "Self-Healing Infrastructure",
      subtitle: "Autonomous scaling & 99.999% SLA benchmark",
    },
    deliverables: ["Ansible & Packer Blueprints", "Prometheus/Grafana Dashboards", "Disaster Recovery Runbooks"],
    metricHeadline: "High-availability compute fleets operating with mathematical predictability",
  },
  {
    slug: "devops-automation",
    name: "DevOps & Automation",
    icon: Cpu,
    inputState: {
      title: "Manual Friday Night Deploys",
      subtitle: "Rollback panic & inconsistent environments",
    },
    processState: {
      title: "Declarative GitOps Engine",
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
    <div className="rounded-3xl bg-[#0d0f15] border border-white/10 p-6 md:p-8 shadow-2xl backdrop-blur-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="emerald" size="sm" dot>
              INTERACTIVE ARCHITECTURE WORKFLOW
            </Badge>
            <span className="text-xs font-mono text-zinc-500">
              PRACTICE DRILL-DOWN
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white font-sans">
            How We Transform Your Infrastructure
          </h3>
          <p className="text-xs text-zinc-400 mt-1 font-sans">
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
                "inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 font-mono",
                isSelected
                  ? "bg-white text-[#08090d] shadow-lg shadow-white/10 font-bold"
                  : "bg-white/[0.03] border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 hover:border-white/20"
              )}
            >
              <PIcon className="w-3.5 h-3.5" />
              <span>{p.name}</span>
            </button>
          );
        })}
      </div>

      {/* Animated Transformation Pipeline Diagram */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.slug}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Step 1: Input State */}
            <div className="rounded-2xl bg-[#08090d] border border-white/10 p-5 relative">
              <div className="text-[10px] font-mono uppercase tracking-wider text-rose-400 mb-2.5 flex items-center justify-between">
                <span>01. Legacy Friction</span>
                <span className="w-2 h-2 rounded-full bg-rose-500" />
              </div>
              <h4 className="text-sm font-bold text-white font-sans">
                {current.inputState.title}
              </h4>
              <p className="text-xs text-zinc-400 mt-1 font-sans leading-relaxed">
                {current.inputState.subtitle}
              </p>
            </div>

            {/* Step 2: Aravanta Engine */}
            <div className="rounded-2xl bg-white/[0.03] border border-emerald-500/30 p-5 relative shadow-lg shadow-emerald-500/5">
              <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 mb-2.5 flex items-center justify-between">
                <span>02. Aravanta Engineering</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <h4 className="text-sm font-bold text-white font-sans">
                {current.processState.title}
              </h4>
              <p className="text-xs text-zinc-300 mt-1 font-sans leading-relaxed">
                {current.processState.subtitle}
              </p>
            </div>

            {/* Step 3: Production Outcome */}
            <div className="rounded-2xl bg-[#08090d] border border-white/10 p-5 relative">
              <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 mb-2.5 flex items-center justify-between">
                <span>03. Target State</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>
              <h4 className="text-sm font-bold text-white font-sans">
                {current.outputState.title}
              </h4>
              <p className="text-xs text-zinc-400 mt-1 font-sans leading-relaxed">
                {current.outputState.subtitle}
              </p>
            </div>
          </div>

          {/* Deliverables & CTA */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-emerald-400 font-semibold uppercase mb-2">
                Delivered Architecture Artifacts:
              </div>
              <div className="flex flex-wrap gap-2">
                {current.deliverables.map((del, dIdx) => (
                  <span
                    key={dIdx}
                    className="text-xs text-zinc-300 font-mono bg-[#08090d] border border-white/10 px-2.5 py-1 rounded-lg"
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default ServiceInteractiveExplorer;
