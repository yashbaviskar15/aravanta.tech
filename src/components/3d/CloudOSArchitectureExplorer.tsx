"use client";

import React, { useState } from "react";
import {
  Layers,
  ShieldCheck,
  Cpu,
  Activity,
  Sliders,
  Terminal,
  CheckCircle2,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface ArchitectureLayer {
  id: number;
  name: string;
  tagline: string;
  stage: "In Architecture" | "In Development" | "Planned Phase";
  color: string;
  description: string;
  protocols: string[];
  specs: { label: string; value: string }[];
}

const LAYERS: ArchitectureLayer[] = [
  {
    id: 1,
    name: "Layer 1: Unified Ingress & Policy Guardrails",
    tagline: "Boundary Defense & Cryptographic Isolation",
    stage: "In Architecture",
    color: "#d4a342",
    description:
      "All inbound requests and CI deployment triggers pass through an automated policy engine that inspects network boundaries, IAM permissions, and payload compliance before reaching infrastructure components.",
    protocols: ["mTLS 1.3", "Zero-Trust SPIFFE/SPIRE", "OPA Policy Engine"],
    specs: [
      { label: "Boundary Type", value: "Strict Zero-Trust Perimeter" },
      { label: "Policy Model", value: "Declarative Pre-Flight Rules" },
      { label: "Status", value: "Active Architectural Milestone" },
    ],
  },
  {
    id: 2,
    name: "Layer 2: CloudOS Declarative Control Plane",
    tagline: "Autonomous State Convergence Engine",
    stage: "In Architecture",
    color: "#f3cc72",
    description:
      "The core coordination engine that reconciles declared infrastructure topology with actual running state. Continuously detects configuration drift, repairs single-node failures, and triggers auto-healing actions.",
    protocols: ["Raft Consensus", "Declarative Spec 1.0", "GitOps Synchronization"],
    specs: [
      { label: "State Model", value: "Idempotent Reversible Blueprints" },
      { label: "Convergence Cycle", value: "Continuous Reconciliation Loop" },
      { label: "Status", value: "Core Prototype Validation" },
    ],
  },
  {
    id: 3,
    name: "Layer 3: Telemetry & FinOps Ingestion Hub",
    tagline: "Distributed Resource Metrics & Cost Attribution",
    stage: "In Development",
    color: "#38bdf8",
    description:
      "Aggregates distributed telemetry across all managed compute instances, storage volumes, and network egress routes, providing real-time resource utilization benchmarks and spend attribution.",
    protocols: ["OpenTelemetry Collector", "Prometheus Core", "FinOps FOCUS Schema"],
    specs: [
      { label: "Ingestion Latency", value: "Sub-Second Event Streaming" },
      { label: "Cost Anomaly Engine", value: "Automated Spend Deviation Alerts" },
      { label: "Status", value: "Telemetry Pipeline Development" },
    ],
  },
  {
    id: 4,
    name: "Layer 4: Multi-Cloud Execution Drivers",
    tagline: "Cloud-Agnostic Infrastructure Adapter",
    stage: "Planned Phase",
    color: "#a1a1aa",
    description:
      "Standardized translation adapters that communicate with public cloud APIs (AWS, GCP, Azure) and private bare-metal environments, normalizing provisioning commands into cloud-neutral primitives.",
    protocols: ["Cloud Provider APIs", "Bare-Metal IPMI", "Container Runtimes"],
    specs: [
      { label: "Target Environments", value: "AWS, GCP, Azure, Bare-Metal" },
      { label: "Driver Architecture", value: "Modular Micro-Plugin System" },
      { label: "Status", value: "Roadmap Scheduled" },
    ],
  },
];

export function CloudOSArchitectureExplorer() {
  const [selectedLayerId, setSelectedLayerId] = useState<number>(2);
  const [isExplodedView, setIsExplodedView] = useState<boolean>(true);

  const activeLayer = LAYERS.find((l) => l.id === selectedLayerId) || LAYERS[1];

  return (
    <div className="rounded-2xl bg-brand-surface border border-brand-border p-6 md:p-8 shadow-2xl gold-border-glow">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-brand-border/60 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="gold" size="sm">
              INTERACTIVE ARCHITECTURE VISUALIZER
            </Badge>
            <span className="text-xs font-mono text-brand-gray-400">
              CONCEPTUAL PREVIEW
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mt-1">
            CloudOS Layered System Architecture
          </h3>
          <p className="text-xs text-brand-gray-400 mt-0.5">
            Select any architecture layer to inspect its control plane responsibilities and target specs.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsExplodedView(!isExplodedView)}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-mono border transition-all flex items-center gap-1.5",
              isExplodedView
                ? "bg-brand-gold/15 border-brand-gold text-brand-gold"
                : "bg-brand-surfaceElevated border-brand-border text-brand-gray-400 hover:text-white"
            )}
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>{isExplodedView ? "Exploded 3D" : "Stacked 3D"}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: 3D Layered Isometric Canvas / Visualizer */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[340px] py-4">
          <div className="w-full max-w-sm space-y-4">
            {LAYERS.map((layer) => {
              const isSelected = layer.id === selectedLayerId;

              return (
                <div
                  key={layer.id}
                  onClick={() => setSelectedLayerId(layer.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedLayerId(layer.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  className={cn(
                    "relative w-full rounded-xl p-4 transition-all duration-300 cursor-pointer border text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold",
                    isSelected
                      ? "bg-brand-surfaceElevated border-brand-gold shadow-lg shadow-brand-gold/10 -translate-x-1"
                      : "bg-brand-dark/80 border-brand-border hover:border-brand-gray-500 hover:bg-brand-surfaceElevated/50",
                    isExplodedView && isSelected && "scale-[1.02]"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: layer.color }}
                      />
                      <span className="text-xs font-mono font-bold text-white">
                        {layer.name}
                      </span>
                    </div>
                    <span
                      className={cn(
                        "text-[10px] font-mono px-2 py-0.5 rounded border",
                        isSelected
                          ? "bg-brand-gold/20 text-brand-gold border-brand-gold/40"
                          : "bg-brand-surface border-brand-border text-brand-gray-400"
                      )}
                    >
                      {layer.stage}
                    </span>
                  </div>

                  <p className="text-[11px] text-brand-gray-400 mt-1.5 font-sans line-clamp-1">
                    {layer.tagline}
                  </p>

                  {/* Active indicator bar */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-gold rounded-l-xl" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-4 text-[10px] font-mono text-brand-gray-500 text-center">
            Click layer or use Tab/Enter to inspect technical specifications
          </div>
        </div>

        {/* Right Column: Active Layer Specification HUD */}
        <div className="lg:col-span-6 rounded-xl bg-brand-dark border border-brand-border p-6 font-mono text-xs space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-brand-border">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-brand-gold" />
              <span className="text-white font-bold">{activeLayer.name}</span>
            </div>
            <Badge variant="gold" size="sm">
              {activeLayer.stage}
            </Badge>
          </div>

          <div>
            <div className="text-[11px] font-mono uppercase text-brand-gold tracking-wider mb-1">
              Architecture Focus
            </div>
            <p className="text-xs text-brand-gray-300 font-sans leading-relaxed">
              {activeLayer.description}
            </p>
          </div>

          <div>
            <div className="text-[11px] font-mono uppercase text-brand-gray-400 tracking-wider mb-2">
              Core Protocols & Standards
            </div>
            <div className="flex flex-wrap gap-2">
              {activeLayer.protocols.map((proto, pIdx) => (
                <span
                  key={pIdx}
                  className="px-2.5 py-1 rounded bg-brand-surface border border-brand-border text-brand-gray-200 text-[11px]"
                >
                  {proto}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-brand-border space-y-2">
            <div className="text-[11px] font-mono uppercase text-brand-gray-400 tracking-wider">
              Technical Metadata
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {activeLayer.specs.map((spec, sIdx) => (
                <div key={sIdx} className="p-2.5 rounded bg-brand-surface/60 border border-brand-border/60">
                  <div className="text-[10px] text-brand-gray-400">{spec.label}</div>
                  <div className="text-xs text-white font-semibold mt-0.5">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
