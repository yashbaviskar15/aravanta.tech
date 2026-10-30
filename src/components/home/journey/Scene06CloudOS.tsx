"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Layers, Cpu, Shield, Activity, Terminal, RefreshCw, FileCode, CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import DynamicIsland from "@/components/ui/dynamic-island";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface CloudOSLayer {
  id: string;
  name: string;
  badge: string;
  desc: string;
  components: string[];
}

const CLOUDOS_LAYERS: CloudOSLayer[] = [
  {
    id: "orchestration",
    name: "01 // Autonomous State Orchestration",
    badge: "CONCEPT ARCHITECTURE",
    desc: "Declarative state reconciliation continuously compares running multi-cloud clusters against desired GitOps intent.",
    components: ["Drift Detection Engine", "Cross-Cloud State Sync", "Automated Rollback Safeguard"],
  },
  {
    id: "ingress",
    name: "02 // Intelligent Multi-Zone Ingress",
    badge: "NETWORK FABRIC",
    desc: "Software-defined edge routing with automated TLS termination, rate-limiting, and zero-trust proxying across zones.",
    components: ["Anycast Edge Gateways", "Global CDN Routing", "Adaptive DDoS Mitigation"],
  },
  {
    id: "security",
    name: "03 // Cryptographic Security Kernel",
    badge: "ZERO-TRUST IAM",
    desc: "Ephemeral micro-credentials and role-based policies generated on-demand with automated secret rotation.",
    components: ["Short-Lived JWT Tokens", "Hardware-Grade Vault", "Immutable Audit Ledger"],
  },
  {
    id: "finops",
    name: "04 // Autonomous FinOps & Telemetry",
    badge: "COST ATTRIBUTION",
    desc: "Real-time CPU/memory utilization tracking and algorithmic cloud instance rightsizing suggestions.",
    components: ["Granular Cost Attribution", "Underutilized Fleet Pruning", "Predictive Budget Alerts"],
  },
];

const YAML_SPECS = {
  mesh: `# aravanta-mesh.yaml
apiVersion: cloudos.aravanta.com/v1alpha1
kind: MultiZoneIngress
metadata:
  name: core-ingress-gateway
  namespace: production
spec:
  routing:
    strategy: ActiveActive
    zones: ["us-east-1", "eu-west-1", "ap-southeast-1"]
    failoverLatencyThresholdMs: 45
  tls:
    mode: StrictMutualTLS
    minVersion: TLS13
    certIssuer: LetEncrypt-ClusterIssuer`,
  orchestrator: `# aravanta-orchestrator.yaml
apiVersion: cloudos.aravanta.com/v1alpha1
kind: DesiredStateFleet
metadata:
  name: microservice-compute-fleet
spec:
  reconciliation:
    mode: ContinuousConvergence
    driftCheckIntervalSec: 5
    autoHeal: true
  scalingPolicy:
    minReplicas: 6
    maxReplicas: 48
    targetCpuUtilization: 70%`,
  policy: `# aravanta-policy.yaml
apiVersion: cloudos.aravanta.com/v1alpha1
kind: SecurityGuardrail
metadata:
  name: zero-trust-enclave
spec:
  enforcement:
    disallowRootContainers: true
    requireSignedImages: true
    ephemeralTokenTtlSec: 900
  finOpsBudget:
    monthlyCapUsd: 50000
    alertThresholdPercent: 85`,
};

export function Scene06CloudOS() {
  const [activeLayer, setActiveLayer] = useState<string>("orchestration");
  const [viewMode, setViewMode] = useState<"layers" | "yaml">("layers");
  const [activeYamlTab, setActiveYamlTab] = useState<"mesh" | "orchestrator" | "policy">("orchestrator");
  
  // Drift Simulation State
  const [driftState, setDriftState] = useState<"clean" | "detected" | "healing" | "healed">("clean");

  const runDriftSimulation = () => {
    if (driftState === "detected" || driftState === "healing") return;
    setDriftState("detected");
    setTimeout(() => {
      setDriftState("healing");
      setTimeout(() => {
        setDriftState("healed");
      }, 1500);
    }, 1200);
  };

  const selected = CLOUDOS_LAYERS.find((l) => l.id === activeLayer) || CLOUDOS_LAYERS[0];

  return (
    <section
      id="scene-06"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32 z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.05} duration={0.7} distance={20} className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0a0e14]/90 border border-brand-gold/40 backdrop-blur-md shadow-xl">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-spin" />
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-gold font-mono">
              SCENE 06 // PLATFORM INITIATIVE
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Introducing <span className="gold-gradient-text">Aravanta CloudOS.</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-gray-300 leading-relaxed font-normal">
            A cloud-platform initiative focused on simplifying how modern infrastructure, multi-cluster topology, and digital operations are approached.
          </p>

          <div className="inline-block px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-[11px] font-mono text-amber-400">
            PLATFORM PREVIEW • ARCHITECTURAL CONCEPT SPECIFICATION
          </div>
        </ScrollReveal>

        {/* Dynamic Island Live Telemetry Dock */}
        <div className="mb-8 flex flex-col items-center justify-center">
          <DynamicIsland showControls={true} variant="dock" />
        </div>

        {/* Interactive Platform Console */}
        <ScrollReveal direction="up" delay={0.15} duration={0.8} distance={24} className="max-w-5xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#0a0e14]/95 border border-[#222533] backdrop-blur-xl shadow-2xl space-y-6">
          
          {/* Top Bar with Mode Switcher & Drift Simulator Trigger */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brand-border/70">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setViewMode("layers")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors ${
                  viewMode === "layers"
                    ? "bg-brand-gold text-brand-bg shadow-[0_0_12px_rgba(201,162,74,0.3)]"
                    : "bg-[#121622] text-brand-gray-400 hover:text-white"
                }`}
              >
                ARCHITECTURE TIERS
              </button>
              <button
                type="button"
                onClick={() => setViewMode("yaml")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-colors ${
                  viewMode === "yaml"
                    ? "bg-brand-gold text-brand-bg shadow-[0_0_12px_rgba(201,162,74,0.3)]"
                    : "bg-[#121622] text-brand-gray-400 hover:text-white"
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                DECLARATIVE YAML SPEC
              </button>
            </div>

            {/* Drift Simulation Button & Badge */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={runDriftSimulation}
                disabled={driftState === "detected" || driftState === "healing"}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-[#141824] border border-brand-gold/40 text-brand-gold hover:bg-brand-gold/20 transition-all flex items-center gap-1.5"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${driftState === "healing" ? "animate-spin" : ""}`} />
                <span>SIMULATE STATE DRIFT</span>
              </button>

              <div className="text-[11px] font-mono">
                {driftState === "clean" && (
                  <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                    CONVERGED (100%)
                  </span>
                )}
                {driftState === "detected" && (
                  <span className="px-2 py-0.5 rounded bg-amber-950/80 text-amber-400 border border-amber-500/30 flex items-center gap-1 animate-pulse">
                    <AlertTriangle className="w-3 h-3" />
                    DRIFT DETECTED
                  </span>
                )}
                {driftState === "healing" && (
                  <span className="px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 animate-pulse">
                    AUTO-HEALING...
                  </span>
                )}
                {driftState === "healed" && (
                  <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    RECONCILED (0.4s)
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Mode 1: Architecture Layers View */}
          {viewMode === "layers" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left: Layer Selector Buttons */}
              <div className="lg:col-span-5 space-y-2.5">
                {CLOUDOS_LAYERS.map((layer) => {
                  const isCurrent = layer.id === activeLayer;
                  return (
                    <button
                      key={layer.id}
                      onClick={() => setActiveLayer(layer.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                        isCurrent
                          ? "bg-[#141824] border-brand-gold shadow-lg shadow-brand-gold/10 text-white"
                          : "bg-[#0a0e14]/80 border-[#222533] text-brand-gray-400 hover:text-white hover:border-brand-gray-600"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-mono font-semibold text-brand-gold">{layer.name}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-brand-gray-400">
                          {layer.badge}
                        </span>
                      </div>
                      <p className="text-xs text-brand-gray-400 line-clamp-1">{layer.desc}</p>
                    </button>
                  );
                })}
              </div>

              {/* Right: Active Layer Inspector */}
              <div className="lg:col-span-7 flex flex-col justify-between p-6 rounded-xl bg-[#0e121a] border border-brand-border/80">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <h3 className="text-base font-bold text-white">{selected.name}</h3>
                    <span className="text-[11px] font-mono text-brand-gold">{selected.badge}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-gray-300 leading-relaxed font-sans">
                    {selected.desc}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono text-brand-gray-400 uppercase tracking-wider block">
                      ARCHITECTURAL MODULES
                    </span>
                    <div className="space-y-2">
                      {selected.components.map((c, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2.5 p-2 rounded-lg bg-black/30 border border-white/5 text-xs font-mono text-brand-goldLight"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-brand-gray-400 font-mono">
                  <span>TELEMETRY SYNC: 100% HEALTHY</span>
                  <span className="text-emerald-400">STATE ENFORCEMENT: ACTIVE</span>
                </div>
              </div>
            </div>
          )}

          {/* Mode 2: Declarative YAML Spec Inspector */}
          {viewMode === "yaml" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-brand-border/60 pb-2">
                <button
                  type="button"
                  onClick={() => setActiveYamlTab("orchestrator")}
                  className={`px-3 py-1 rounded text-xs font-mono ${
                    activeYamlTab === "orchestrator"
                      ? "bg-brand-gold/20 text-brand-gold border border-brand-gold/40 font-bold"
                      : "text-brand-gray-400 hover:text-white"
                  }`}
                >
                  aravanta-orchestrator.yaml
                </button>
                <button
                  type="button"
                  onClick={() => setActiveYamlTab("mesh")}
                  className={`px-3 py-1 rounded text-xs font-mono ${
                    activeYamlTab === "mesh"
                      ? "bg-brand-gold/20 text-brand-gold border border-brand-gold/40 font-bold"
                      : "text-brand-gray-400 hover:text-white"
                  }`}
                >
                  aravanta-mesh.yaml
                </button>
                <button
                  type="button"
                  onClick={() => setActiveYamlTab("policy")}
                  className={`px-3 py-1 rounded text-xs font-mono ${
                    activeYamlTab === "policy"
                      ? "bg-brand-gold/20 text-brand-gold border border-brand-gold/40 font-bold"
                      : "text-brand-gray-400 hover:text-white"
                  }`}
                >
                  aravanta-policy.yaml
                </button>
              </div>

              <div className="rounded-xl bg-[#06080d] border border-brand-border/80 p-4 font-mono text-xs overflow-x-auto text-brand-gray-300">
                <pre className="text-[12px] leading-relaxed text-brand-goldLight overflow-x-auto">
                  <code>{YAML_SPECS[activeYamlTab]}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Footer Callout */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-brand-border/60">
            <p className="text-xs text-brand-gray-400">
              Interested in shaping the future of autonomous cloud operations? Connect with our systems architecture team.
            </p>
            <Button href="/contact" variant="primary" size="sm" className="whitespace-nowrap">
              <span>Request Architecture Preview Briefing</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
}

export default Scene06CloudOS;
