"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    color: "#10b981",
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
    color: "#38bdf8",
    description:
      "Declarative YAML specifications define desired infrastructure topologies. The control plane continuously observes actual runtime state across multi-cloud environments and executes idempotent convergence loops.",
    protocols: ["Raft Consensus", "gRPC Inter-service", "Event-Driven Reconciliation"],
    specs: [
      { label: "State Model", value: "Declarative GitOps CRDs" },
      { label: "Consensus", value: "Quorum-backed State Store" },
      { label: "Convergence SLA", value: "< 500ms Drift Detection" },
    ],
  },
  {
    id: 3,
    name: "Layer 3: Multi-Cloud Execution Substrate",
    tagline: "Infrastructure Abstraction & Resource Providers",
    stage: "In Development",
    color: "#d4a342",
    description:
      "Pluggable resource adapters translate desired workloads into cloud-native constructs across AWS, Azure, GCP, and bare-metal environments, isolating teams from underlying provider idiosyncrasies.",
    protocols: ["Kubernetes Operator SDK", "Cloud Native Buildpacks", "Terraform Provider Protocol"],
    specs: [
      { label: "Provider Coverage", value: "AWS, Azure, GCP, Equinix Metal" },
      { label: "Abstraction Level", value: "Unified Compute, Storage & Network" },
      { label: "Portability", value: "Zero Vendor Lock-in" },
    ],
  },
  {
    id: 4,
    name: "Layer 4: Real-Time Telemetry & FinOps Kernel",
    tagline: "Continuous Observability & Resource Accounting",
    stage: "Planned Phase",
    color: "#a855f7",
    description:
      "High-cardinality time-series metrics track resource allocation, workload latency, and dollar attribution down to individual container pods, providing actionable optimization signals.",
    protocols: ["OpenTelemetry Standard", "eBPF Kernel Probes", "Cost Attribution Engine"],
    specs: [
      { label: "Telemetry Standard", value: "Vendor-Neutral OTel" },
      { label: "Sampling Rate", value: "100% Kernel-Level Visibility" },
      { label: "FinOps Model", value: "Algorithmic Underutilization Pruning" },
    ],
  },
];

export function CloudOSArchitectureExplorer() {
  const [selectedLayerId, setSelectedLayerId] = useState<number>(1);
  const [isExplodedView, setIsExplodedView] = useState<boolean>(true);

  const activeLayer = LAYERS.find((l) => l.id === selectedLayerId) || LAYERS[0];

  return (
    <div className="rounded-3xl bg-[#0d0f15] border border-white/10 p-6 md:p-8 shadow-2xl backdrop-blur-xl space-y-6">
      {/* Visualizer Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="emerald" size="sm" dot>
              CONCEPT BLUEPRINT
            </Badge>
            <span className="text-xs font-mono text-zinc-500">
              LAYERED ISOMETRIC SCHEMATIC
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white font-sans">
            Aravanta CloudOS Architectural Layers
          </h3>
          <p className="text-xs text-zinc-400 mt-1 font-sans">
            Explore how the autonomous control plane separates ingress validation, state reconciliation, and multi-cloud execution.
          </p>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsExplodedView(!isExplodedView)}
            className={cn(
              "px-3.5 py-2 rounded-xl text-xs font-mono border transition-all flex items-center gap-2",
              isExplodedView
                ? "bg-white text-[#08090d] border-white font-bold shadow-md"
                : "bg-white/[0.03] border-white/10 text-zinc-400 hover:text-white hover:bg-white/5"
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
          <div className="w-full max-w-sm space-y-3">
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
                    "relative w-full rounded-2xl p-4 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer border text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
                    isSelected
                      ? "bg-white/[0.06] border-emerald-500/40 shadow-lg shadow-emerald-500/10 -translate-x-1"
                      : "bg-[#08090d] border-white/10 hover:border-white/20 hover:bg-white/[0.02]",
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
                        "text-[10px] font-mono px-2 py-0.5 rounded-md border",
                        isSelected
                          ? "bg-emerald-950/60 text-emerald-300 border-emerald-500/30"
                          : "bg-white/[0.02] border-white/10 text-zinc-400"
                      )}
                    >
                      {layer.stage}
                    </span>
                  </div>

                  <p className="text-[11px] text-zinc-400 mt-1.5 font-sans line-clamp-1">
                    {layer.tagline}
                  </p>

                  {/* Active indicator bar */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 rounded-l-2xl" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-4 text-[10px] font-mono text-zinc-500 text-center">
            Click layer or use Tab/Enter to inspect technical specifications
          </div>
        </div>

        {/* Right Column: Active Layer Specification HUD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLayer.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 rounded-2xl bg-[#08090d] border border-white/10 p-6 font-mono text-xs space-y-5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="text-white font-bold">{activeLayer.name}</span>
              </div>
              <Badge variant="emerald" size="sm">
                {activeLayer.stage}
              </Badge>
            </div>

            <div>
              <div className="text-[11px] font-mono uppercase text-emerald-400 tracking-wider mb-1">
                Architecture Focus
              </div>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                {activeLayer.description}
              </p>
            </div>

            <div>
              <div className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider mb-2">
                Core Protocols &amp; Standards
              </div>
              <div className="flex flex-wrap gap-2">
                {activeLayer.protocols.map((proto, pIdx) => (
                  <span
                    key={pIdx}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-zinc-200 text-[11px]"
                  >
                    {proto}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2">
              <div className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider">
                Technical Metadata
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {activeLayer.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/10">
                    <div className="text-[10px] text-zinc-400">{spec.label}</div>
                    <div className="text-xs text-white font-semibold mt-0.5">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default CloudOSArchitectureExplorer;
