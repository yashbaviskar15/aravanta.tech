"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cpu, ArrowRight, CheckCircle2, GitBranch, Terminal, Activity, ShieldCheck, Play, RotateCcw, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface PipelineStep {
  step: string;
  name: string;
  tooling: string;
  duration: string;
  status: "idle" | "running" | "success";
  logs: string[];
}

const INITIAL_STEPS: PipelineStep[] = [
  {
    step: "01",
    name: "Source & SAST Verification",
    tooling: "ESLint • SonarQube • SecretScan",
    duration: "4.2s",
    status: "idle",
    logs: [
      "[00:01] Git revision verified: HEAD commit 89f41b2 (feat: multi-region failover)",
      "[00:02] Running static AST security scanning... 0 vulnerabilities detected.",
      "[00:04] TypeScript strict mode verification passed: 0 type discrepancies.",
    ],
  },
  {
    step: "02",
    name: "Deterministic Container Build",
    tooling: "Docker Buildx • Alpine • Distroless",
    duration: "8.5s",
    status: "idle",
    logs: [
      "[00:05] Multi-stage build initiated using cached layers...",
      "[00:09] Stripping extraneous build-time dependencies...",
      "[00:12] Artifact hashed: sha256:4f8a913bc89... final footprint 42.1MB.",
    ],
  },
  {
    step: "03",
    name: "Automated Distributed Test Mesh",
    tooling: "Jest • Playwright • K6 Load Gate",
    duration: "11.1s",
    status: "idle",
    logs: [
      "[00:13] Running 148 unit test suites in parallel worker threads... 100% pass.",
      "[00:18] E2E checkout & authentication workflow tests passed cleanly.",
      "[00:23] Synthesizing 5,000 virtual user traffic burst... Latency p99 < 85ms.",
    ],
  },
  {
    step: "04",
    name: "Declarative GitOps Canary Rollout",
    tooling: "ArgoCD • Kubernetes • Envoy Mesh",
    duration: "6.8s",
    status: "idle",
    logs: [
      "[00:24] Synchronizing GitOps state with cluster control plane...",
      "[00:27] Shifted 10% traffic to Canary replica set... error rate 0.00%.",
      "[00:30] Full blue/green cutover complete. Zero downtime observed.",
    ],
  },
  {
    step: "05",
    name: "SRE Telemetry & Health Convergence",
    tooling: "Prometheus • Datadog • APM Tracing",
    duration: "3.4s",
    status: "idle",
    logs: [
      "[00:31] Validating continuous golden signals: Latency, Traffic, Errors, Saturation.",
      "[00:33] Health checks: 12/12 pods reporting HTTP 200 ready.",
      "[00:34] DEPLOYMENT STABLE // Pipeline run concluded successfully.",
    ],
  },
];

export function Scene04DevOps() {
  const [steps, setSteps] = useState<PipelineStep[]>(INITIAL_STEPS);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number | null>(null);
  const [selectedInspectStep, setSelectedInspectStep] = useState<number>(0);
  const [activeBranch, setActiveBranch] = useState<"main" | "staging">("main");

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStepIndex(0);
    setSelectedInspectStep(0);

    // Reset all steps to idle
    setSteps(INITIAL_STEPS.map((s) => ({ ...s, status: "idle" })));

    let idx = 0;
    const interval = setInterval(() => {
      setSteps((prev) => {
        const next = [...prev];
        // Mark previous steps as success
        for (let i = 0; i < idx; i++) {
          next[i].status = "success";
        }
        if (idx < next.length) {
          next[idx].status = "running";
        }
        return next;
      });

      setSelectedInspectStep(idx);
      setCurrentStepIndex(idx);
      idx++;

      if (idx > INITIAL_STEPS.length) {
        clearInterval(interval);
        setSteps((prev) => prev.map((s) => ({ ...s, status: "success" })));
        setIsRunning(false);
        setCurrentStepIndex(null);
      }
    }, 1200);
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setCurrentStepIndex(null);
    setSelectedInspectStep(0);
    setSteps(INITIAL_STEPS.map((s) => ({ ...s, status: "idle" })));
  };

  return (
    <section
      id="scene-04"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32 z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header Badge */}
        <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#0a0e14]/90 border border-[#222533] backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
          <span className="text-xs font-semibold tracking-wider uppercase text-brand-gold font-mono">
            SCENE 04 // DEVOPS & AUTOMATION
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Narrative Copy */}
          <ScrollReveal direction="up" delay={0.05} duration={0.7} distance={20} className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              From Code to <br />
              <span className="gold-gradient-text">Reliable Delivery.</span>
            </h2>

            <p className="text-base sm:text-lg text-brand-gray-300 leading-relaxed font-normal">
              High-velocity software engineering requires predictable, repeatable deployment pipelines. We replace manual server configuration with Infrastructure as Code (IaC), GitOps workflows, automated test gates, and container orchestration fleets.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#0d1017]/85 border border-brand-border/70 backdrop-blur-md space-y-2">
                <div className="flex items-center gap-2 text-brand-gold font-semibold text-sm">
                  <GitBranch className="w-4 h-4" />
                  <span>Declarative GitOps</span>
                </div>
                <p className="text-xs text-brand-gray-400 leading-relaxed">
                  Git is the single source of truth. Cluster state continuously converges with your version-controlled repo.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0d1017]/85 border border-brand-border/70 backdrop-blur-md space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Zero-Downtime Rollouts</span>
                </div>
                <p className="text-xs text-brand-gray-400 leading-relaxed">
                  Blue/green and canary traffic transitions ensure end users never experience a service disruption.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0d1017]/60 border border-brand-border/50 text-xs text-brand-gray-400 space-y-2">
              <div className="text-white font-semibold flex items-center gap-2">
                <Activity className="w-4 h-4 text-brand-gold" />
                <span>Our DevOps Reliability Standard</span>
              </div>
              <p>
                Every commit runs automated security scans, tests in isolated staging meshes, and deploys with instantaneous rollback capability if golden signals deviate.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="/services/devops-automation" variant="primary" size="md">
                <span>Explore DevOps Practice</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Link
                href="/services/it-infrastructure"
                className="text-xs font-mono uppercase tracking-wider text-brand-gray-400 hover:text-brand-gold transition-colors inline-flex items-center gap-1.5"
              >
                <span>Compute Infrastructure</span>
                <span>→</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Right Column: Interactive CI/CD Pipeline Simulator */}
          <ScrollReveal direction="left" delay={0.15} duration={0.75} distance={20} className="lg:col-span-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0a0e14]/95 border border-[#222533] backdrop-blur-xl shadow-2xl space-y-6">
              
              {/* Simulator Header */}
              <div className="flex items-center justify-between pb-4 border-b border-brand-border/70">
                <div className="flex items-center gap-2.5">
                  <Terminal className="w-4 h-4 text-brand-gold" />
                  <span className="text-xs font-mono text-white font-bold tracking-wider uppercase">
                    CI/CD CONDUIT SIMULATOR
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={runSimulation}
                    disabled={isRunning}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                      isRunning
                        ? "bg-brand-gold/20 text-brand-gold border border-brand-gold/40 cursor-not-allowed"
                        : "bg-brand-gold text-brand-bg hover:bg-brand-goldLight"
                    }`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    {isRunning ? "DEPLOYING..." : "SIMULATE PIPELINE"}
                  </button>

                  <button
                    type="button"
                    onClick={resetSimulation}
                    title="Reset Simulator"
                    className="p-1.5 rounded-lg bg-[#121622] border border-brand-border text-brand-gray-400 hover:text-white"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Branch Selector Bar */}
              <div className="flex items-center justify-between text-xs font-mono bg-[#121622] p-2.5 rounded-xl border border-brand-border/60">
                <span className="text-brand-gray-400 flex items-center gap-1.5">
                  <GitBranch className="w-3.5 h-3.5 text-brand-gold" />
                  TARGET BRANCH:
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveBranch("main")}
                    className={`px-2 py-0.5 rounded text-[11px] ${
                      activeBranch === "main" ? "bg-brand-gold/20 text-brand-gold font-bold" : "text-brand-gray-400"
                    }`}
                  >
                    main (prod)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveBranch("staging")}
                    className={`px-2 py-0.5 rounded text-[11px] ${
                      activeBranch === "staging" ? "bg-brand-gold/20 text-brand-gold font-bold" : "text-brand-gray-400"
                    }`}
                  >
                    staging (preview)
                  </button>
                </div>
              </div>

              {/* Pipeline Stages Stepper */}
              <div className="space-y-2.5">
                {steps.map((s, idx) => {
                  const isSelected = selectedInspectStep === idx;
                  const isCurRunning = s.status === "running";
                  const isSuccess = s.status === "success";

                  return (
                    <div
                      key={s.step}
                      onClick={() => setSelectedInspectStep(idx)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        isSelected
                          ? "bg-[#141824] border-brand-gold shadow-[0_0_12px_rgba(201,162,74,0.15)]"
                          : "bg-[#0d1017] border-brand-border/60 hover:border-brand-gray-600"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-colors ${
                            isSuccess
                              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                              : isCurRunning
                              ? "bg-brand-gold/20 text-brand-gold border border-brand-gold animate-pulse"
                              : "bg-[#161a26] text-brand-gray-500 border border-brand-border"
                          }`}
                        >
                          {s.step}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white tracking-wide">{s.name}</div>
                          <div className="text-[10px] font-mono text-brand-gray-400">{s.tooling}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 font-mono text-xs">
                        <span className="text-[11px] text-brand-gray-500">{s.duration}</span>
                        {isSuccess ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        ) : isCurRunning ? (
                          <span className="w-3.5 h-3.5 rounded-full border-2 border-brand-gold border-t-transparent animate-spin" />
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-brand-gray-600" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Terminal Log Console */}
              <div className="rounded-xl bg-[#06080d] border border-brand-border/80 p-3.5 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-white/5 text-[10px] text-brand-gray-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    STDOUT // STAGE {steps[selectedInspectStep]?.step}: {steps[selectedInspectStep]?.name}
                  </span>
                  <span className="text-brand-gold">TERMINAL READY</span>
                </div>
                <div className="space-y-1 text-[11px] text-brand-gray-300 min-h-[75px] max-h-[100px] overflow-y-auto">
                  {steps[selectedInspectStep]?.logs.map((log, lIdx) => (
                    <div key={lIdx} className="leading-relaxed">
                      {log.includes("passed") || log.includes("concluded") || log.includes("complete") ? (
                        <span className="text-emerald-400">{log}</span>
                      ) : log.includes("Running") || log.includes("Synchronizing") ? (
                        <span className="text-cyan-300">{log}</span>
                      ) : (
                        <span>{log}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary Bottom Bar */}
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-[11px] font-mono text-brand-gray-400">
                <span>AUTONOMOUS DRIFT DETECTOR: ACTIVE</span>
                <span className="text-emerald-400">P99 LATENCY &lt; 85MS</span>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

export default Scene04DevOps;
