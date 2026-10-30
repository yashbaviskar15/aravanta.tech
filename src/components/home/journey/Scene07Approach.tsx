"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Compass, Hammer, CheckCircle2, TrendingUp, ArrowRight, FileCheck, Clock, Users, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface StageInfo {
  step: string;
  title: string;
  tagline: string;
  timeline: string;
  desc: string;
  deliverables: string[];
  governanceGate: string;
  icon: React.ComponentType<{ className?: string }>;
}

const APPROACH_STAGES: StageInfo[] = [
  {
    step: "01",
    title: "Discover",
    tagline: "Uncover Truths & Constraints",
    timeline: "Weeks 1 – 2",
    desc: "We analyze legacy dependencies, performance bottlenecks, cost drivers, and organizational security requirements to establish an objective baseline.",
    deliverables: [
      "Technical Debt & Workload Audit Report",
      "End-to-End System Dependency Map",
      "FinOps Baseline & Cost Drivers Profile",
      "Security Risk & Threat Surface Evaluation",
    ],
    governanceGate: "Discovery Review & Scope Alignment Sign-off",
    icon: Search,
  },
  {
    step: "02",
    title: "Architect",
    tagline: "Blueprint With Intent",
    timeline: "Weeks 3 – 4",
    desc: "We formulate clean, decoupled system designs with clear separation of concerns, multi-zone failovers, and IaC blueprints tailored precisely to your workload.",
    deliverables: [
      "Target Architecture Specification & RFC",
      "Multi-Zone Network Topology & Data Model",
      "Declarative Infrastructure as Code (IaC) Blueprints",
      "Security Perimeter & Zero-Trust IAM Policy Matrix",
    ],
    governanceGate: "Architectural Sign-off & Security Peer Review",
    icon: Compass,
  },
  {
    step: "03",
    title: "Build",
    tagline: "Disciplined Engineering",
    timeline: "Weeks 5 – 10",
    desc: "We implement type-safe code, automated test suites, and reproducible CI/CD pipelines with zero shortcuts, adhering to clean architecture patterns.",
    deliverables: [
      "Modular, Production-Ready Application Codebases",
      "Automated Test Suites (Unit, Integration, E2E)",
      "Declarative GitOps CI/CD Deployment Conduits",
      "Reproducible Container Images & Distroless Builds",
    ],
    governanceGate: "Continuous Integration Gates (100% Test & SAST Pass)",
    icon: Hammer,
  },
  {
    step: "04",
    title: "Validate",
    tagline: "Rigorous Production Verification",
    timeline: "Weeks 11 – 12",
    desc: "Chaos testing, automated failover simulations, load benchmarking, and penetration audits ensure production resilience before public launch.",
    deliverables: [
      "Load Benchmarking & Saturation Stress Reports",
      "Simulated Multi-Zone Disaster Recovery Runbook",
      "Automated Penetration & Vulnerability Audit Log",
      "Production Cutover & Rollback Contingency Plan",
    ],
    governanceGate: "Production Readiness & Stakeholder Go/No-Go Gate",
    icon: CheckCircle2,
  },
  {
    step: "05",
    title: "Improve",
    tagline: "Sustained Operational Clarity",
    timeline: "Ongoing Cadence",
    desc: "Continuous APM telemetry, FinOps right-sizing audits, and gradual architectural optimizations as your business expands.",
    deliverables: [
      "Live APM Golden Signals & Real-Time Alerts",
      "Monthly FinOps Resource Rightsizing Reports",
      "Quarterly Architecture Evolution Reviews",
      "Continuous Dependency Patching & SBOM Updates",
    ],
    governanceGate: "Quarterly SRE & Architectural Review Cadence",
    icon: TrendingUp,
  },
];

export function Scene07Approach() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const current = APPROACH_STAGES[activeStep];
  const Icon = current.icon;

  return (
    <section
      id="scene-07"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32 z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.05} duration={0.7} distance={20} className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#0a0e14]/90 border border-[#222533] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-brand-gold font-mono">
              SCENE 07 // ENGINEERING METHODOLOGY
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            How We Engineer <br />
            <span className="gold-gradient-text">Clarity from Complexity.</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-gray-300 leading-relaxed font-normal">
            Great engineering is deliberate, transparent, and iterative. We guide every project through five distinct stages designed to eliminate technical surprises.
          </p>
        </ScrollReveal>

        {/* 5-Stage Stepper Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {APPROACH_STAGES.map((s, idx) => {
            const isCurrent = idx === activeStep;
            const StepIcon = s.icon;
            return (
              <button
                key={s.step}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isCurrent
                    ? "bg-[#141824] border-brand-gold shadow-[0_0_15px_rgba(201,162,74,0.2)] text-white"
                    : "bg-[#0a0e14]/80 border-[#222533] text-brand-gray-400 hover:text-white hover:border-brand-gray-600"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-brand-gold">STAGE {s.step}</span>
                  <StepIcon className={`w-4 h-4 ${isCurrent ? "text-brand-gold" : "text-brand-gray-500"}`} />
                </div>
                <div className="text-sm font-bold text-white tracking-wide">{s.title}</div>
                <div className="text-[11px] font-mono text-brand-gray-400 mt-0.5">{s.timeline}</div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep Dive Detail Card */}
        <ScrollReveal direction="up" delay={0.15} duration={0.75} distance={20} className="p-6 sm:p-8 rounded-2xl bg-[#0a0e14]/95 border border-[#222533] backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brand-border/70">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-brand-gold font-bold">
                  STAGE {current.step} OF 05 // DEEP DIVE
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{current.title}: {current.tagline}</h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#141824] text-brand-goldLight border border-brand-border flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-brand-gold" />
                TIMELINE: {current.timeline}
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-brand-gray-300 leading-relaxed font-sans">
            {current.desc}
          </p>

          {/* Deliverables Checklist Grid */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-brand-gray-400 uppercase tracking-wider flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-brand-gold" />
              <span>CORE ARCHITECTURAL DELIVERABLES</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {current.deliverables.map((del, dIdx) => (
                <div
                  key={dIdx}
                  className="p-3.5 rounded-xl bg-[#121622] border border-brand-border/70 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-xs font-medium text-white leading-relaxed">{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Governance Verification Gate */}
          <div className="p-4 rounded-xl bg-[#121622]/80 border border-brand-gold/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-[11px] font-mono text-brand-gold uppercase tracking-wider">
                FORMAL GOVERNANCE GATE
              </div>
              <div className="text-xs font-semibold text-white mt-0.5">
                {current.governanceGate}
              </div>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-black/60 text-emerald-400 border border-emerald-500/30 whitespace-nowrap">
              MANDATORY PASS CRITERIA
            </span>
          </div>

          {/* Action Bar */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-brand-border/60">
            <p className="text-xs text-brand-gray-400">
              Ready to begin your architectural discovery sprint? Let&apos;s evaluate your current systems.
            </p>
            <Button href="/contact" variant="primary" size="sm">
              <span>Initiate Discovery Phase</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

export default Scene07Approach;
