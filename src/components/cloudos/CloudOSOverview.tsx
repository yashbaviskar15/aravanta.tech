"use client";

import React from "react";
import Link from "next/link";
import {
  Cpu,
  Layers,
  ShieldCheck,
  Activity,
  Sliders,
  Terminal,
  ArrowRight,
  Info,
  Calendar,
  Lock,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { cloudosData } from "@/lib/content/cloudosData";
import { CloudOSArchitectureExplorer } from "@/components/3d/CloudOSArchitectureExplorer";
import DynamicIsland from "@/components/ui/dynamic-island";

export function CloudOSOverview() {
  const formattedFaqs = cloudosData.faqs.map((f, i) => ({
    id: `cloudos-faq-${i}`,
    question: f.question,
    answer: f.answer,
  }));

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Hero & Positioning */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2">
            <Badge variant="gold" size="md">
              ARAVANTA CLOUD PLATFORM
            </Badge>
            <span className="text-xs font-mono text-brand-gold uppercase tracking-wider">
              {cloudosData.badge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Aravanta <span className="gold-gradient-text">CloudOS</span>
          </h1>

          <p className="text-xl sm:text-2xl text-brand-gold font-light">
            {cloudosData.tagline}
          </p>

          <p className="text-base sm:text-lg text-brand-gray-300 leading-relaxed pt-2">
            {cloudosData.summary}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Button
              href="/contact?interest=CloudOS"
              variant="primary"
              size="lg"
              className="font-semibold shadow-lg shadow-brand-gold/20"
            >
              <span>Request Technical Briefing</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              href="#roadmap"
              variant="secondary"
              size="lg"
              className="font-medium"
            >
              <span>View Architecture Roadmap</span>
            </Button>
          </div>
        </div>

        {/* Dynamic Island Live Operational Telemetry HUD */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-b from-[#0e1320] via-[#090c14] to-[#07090f] border border-brand-border/80 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-brand-gold uppercase tracking-wider font-semibold">
                Autonomous State Telemetry
              </span>
            </div>
            <h3 className="text-lg font-bold text-white">
              CloudOS Interactive Control Island
            </h3>
            <p className="text-xs text-brand-gray-400 max-w-md">
              Switch between real-time cluster telemetry, multi-AZ workload convergence, compliance audits, and deploy timeouts.
            </p>
          </div>
          <div className="shrink-0">
            <DynamicIsland showControls={true} variant="dock" />
          </div>
        </div>

        {/* Operational Status Box */}
        <div className="mt-6 p-5 rounded-xl bg-brand-surfaceElevated border border-brand-border flex items-start gap-4">
          <Info className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-brand-gray-300 leading-relaxed">
            <strong className="text-white">Platform Development Status:</strong>{" "}
            {cloudosData.statusNote}
          </div>
        </div>
      </div>

      {/* The Problem Space It Solves */}
      <section className="mt-20 pt-16 border-t border-brand-border/60 bg-[#0b0c10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="neutral" size="sm" className="mb-2">
              THE PROBLEM
            </Badge>
            <h2 className="text-3xl font-bold text-white">
              Why We Are Building CloudOS
            </h2>
            <p className="text-sm text-brand-gray-400 mt-2">
              Modern cloud architectures suffer from three systemic operational challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-brand-surface border border-brand-border p-6">
              <div className="text-xs font-mono text-brand-gold uppercase tracking-wider mb-2">
                01. Management Fragmentation
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Tooling & Console Sprawl
              </h3>
              <p className="text-xs text-brand-gray-300 leading-relaxed">
                Teams constantly toggle between dozens of disconnected cloud portals, monitoring dashboards, and secrets managers, introducing latency and configuration drift.
              </p>
            </div>

            <div className="rounded-xl bg-brand-surface border border-brand-border p-6">
              <div className="text-xs font-mono text-brand-gold uppercase tracking-wider mb-2">
                02. Reactive Security Auditing
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Late-Stage Compliance Checks
              </h3>
              <p className="text-xs text-brand-gray-300 leading-relaxed">
                Security and compliance checks typically happen after resources are deployed, creating friction and leaving critical ports or credentials exposed.
              </p>
            </div>

            <div className="rounded-xl bg-brand-surface border border-brand-border p-6">
              <div className="text-xs font-mono text-brand-gold uppercase tracking-wider mb-2">
                03. Opaque Cost Structures
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Unattributed Cloud Spend
              </h3>
              <p className="text-xs text-brand-gray-300 leading-relaxed">
                Engineering teams deploy without real-time insight into unit economics, resulting in multi-thousand-dollar monthly billing surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Architecture Pillars */}
      <section id="architecture" className="mt-20 pt-16 border-t border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="gold" size="sm" className="mb-2">
              ARCHITECTURE PILLARS
            </Badge>
            <h2 className="text-3xl font-bold text-white">
              Target Platform Architecture
            </h2>
            <p className="text-sm text-brand-gray-400 mt-2">
              The four foundational systems governing the Aravanta CloudOS design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cloudosData.corePillars.map((pillar, idx) => (
              <Card key={idx} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="gold" size="sm">
                      {pillar.badge}
                    </Badge>
                    <span className="text-[11px] font-mono text-brand-gray-400 border border-brand-border px-2 py-0.5 rounded">
                      Status: {pillar.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-brand-gray-300 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="pt-4 border-t border-brand-border/60">
                    <div className="text-xs font-mono uppercase tracking-wider text-brand-gold font-semibold mb-2">
                      Architectural Tenets
                    </div>
                    <ul className="space-y-1.5">
                      {pillar.keyAspects.map((aspect, aIdx) => (
                        <li key={aIdx} className="text-xs text-brand-gray-300 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                          <span>{aspect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Interactive 3D Architectural Visualizer */}
          <div className="mt-12">
            <CloudOSArchitectureExplorer />
          </div>
        </div>
      </section>

      {/* Roadmap & Milestones */}
      <section id="roadmap" className="mt-20 pt-16 border-t border-brand-border/60 bg-[#0b0c10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="neutral" size="sm" className="mb-2">
              ROADMAP
            </Badge>
            <h2 className="text-3xl font-bold text-white">
              Platform Engineering Roadmap
            </h2>
            <p className="text-sm text-brand-gray-400 mt-2">
              Phased development schedule designed for architectural rigor, stability, and zero false claims.
            </p>
          </div>

          <div className="space-y-6">
            {cloudosData.roadmapPhases.map((phase, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-brand-surface border border-brand-border p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-white">
                      {phase.phase}
                    </h3>
                    <Badge
                      variant={idx === 0 ? "gold" : "outline"}
                      size="sm"
                    >
                      {phase.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-brand-gray-300">
                    {phase.focus}
                  </p>
                  <ul className="pt-2 space-y-1">
                    {phase.details.map((item, dIdx) => (
                      <li key={dIdx} className="text-xs text-brand-gray-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="shrink-0">
                  {idx === 0 ? (
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-3 py-1.5 rounded-md">
                      ● Active Workstream
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-brand-gray-400 bg-brand-surfaceElevated border border-brand-border px-3 py-1.5 rounded-md">
                      ○ Roadmap Scheduled
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product FAQs */}
      <section className="mt-20 pt-16 border-t border-brand-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-white">
              CloudOS Technical FAQs
            </h2>
            <p className="text-sm text-brand-gray-400 mt-2">
              Common questions from technology leaders exploring the platform initiative.
            </p>
          </div>

          <div className="bg-brand-surface border border-brand-border rounded-xl p-6 md:p-8">
            <Accordion items={formattedFaqs} defaultOpenId="cloudos-faq-0" />
          </div>
        </div>
      </section>

      {/* CTA: Request Information */}
      <section className="mt-20 pt-16 border-t border-brand-border/60 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Interested in CloudOS Architecture Previews?
          </h2>
          <p className="text-base text-brand-gray-300">
            Connect with our engineering leadership to learn more about the platform's control plane specifications and design partner eligibility.
          </p>
          <div className="pt-2">
            <Button
              href="/contact?interest=CloudOS"
              variant="primary"
              size="lg"
              className="font-semibold"
            >
              <span>Request Technical Briefing</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
