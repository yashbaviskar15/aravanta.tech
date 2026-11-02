"use client";

import React, { useState } from "react";
import {
  Cloud,
  Server,
  Boxes,
  Cpu,
  Activity,
  ShieldCheck,
  Code2,
  Terminal,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

interface TechCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  technologies: { name: string; role: string; type: string }[];
}

const techCategories: TechCategory[] = [
  {
    id: "cloud",
    name: "Cloud Platforms",
    icon: Cloud,
    technologies: [
      { name: "Amazon Web Services", role: "Multi-Region VPCs & Managed EKS", type: "Hyperscaler" },
      { name: "Google Cloud Platform", role: "BigQuery Analytics & GKE Clusters", type: "Hyperscaler" },
      { name: "Microsoft Azure", role: "Hybrid Enterprise Identity & AKS", type: "Hyperscaler" },
      { name: "Equinix Metal", role: "Bare-Metal Low-Latency Compute Fleets", type: "Bare-Metal" },
    ],
  },
  {
    id: "infrastructure",
    name: "Infrastructure & Fleet",
    icon: Server,
    technologies: [
      { name: "Linux / KVM", role: "Kernel-Level Virtualization & cgroups v2", type: "Hypervisor" },
      { name: "Ceph Storage", role: "Distributed Block & Object NVMe Storage", type: "Storage" },
      { name: "Anycast BGP", role: "Multi-Homed Dynamic Transit Routing", type: "Networking" },
      { name: "Proxmox VE", role: "Clustered Hypervisor Management", type: "Fleet" },
    ],
  },
  {
    id: "containers",
    name: "Containers & Mesh",
    icon: Boxes,
    technologies: [
      { name: "Kubernetes", role: "Declarative Workload Orchestration", type: "Runtime" },
      { name: "Docker / containerd", role: "OCI-Compliant Image Virtualization", type: "Container" },
      { name: "Istio Service Mesh", role: "Mutual TLS & Traffic Shaping", type: "Mesh" },
      { name: "Cilium eBPF", role: "Kernel-Level Network Policy Enforcement", type: "eBPF" },
    ],
  },
  {
    id: "automation",
    name: "Automation & GitOps",
    icon: Cpu,
    technologies: [
      { name: "Terraform / OpenTofu", role: "Declarative Infrastructure as Code", type: "IaC" },
      { name: "ArgoCD", role: "Declarative GitOps Continuous Delivery", type: "GitOps" },
      { name: "GitHub Actions", role: "Automated Build, Test & SBOM Scanning", type: "CI/CD" },
      { name: "Ansible", role: "Idempotent Host & OS Hardening", type: "Config" },
    ],
  },
  {
    id: "monitoring",
    name: "Monitoring & Observability",
    icon: Activity,
    technologies: [
      { name: "Prometheus", role: "High-Resolution Time-Series Metrics", type: "Metrics" },
      { name: "Grafana", role: "Enterprise Telemetry Dashboards", type: "Visualization" },
      { name: "OpenTelemetry", role: "Vendor-Neutral Distributed Tracing", type: "Tracing" },
      { name: "eBPF Observability", role: "Kernel Packet & System Call Capture", type: "Kernel" },
    ],
  },
  {
    id: "security",
    name: "Security & Zero-Trust",
    icon: ShieldCheck,
    technologies: [
      { name: "SPIFFE / SPIRE", role: "Cryptographic Workload Identity", type: "Attestation" },
      { name: "HashiCorp Vault", role: "Ephemeral Secret Leasing & PKI", type: "Vault" },
      { name: "Open Policy Agent (OPA)", role: "Declarative Policy Enforcement", type: "Policy" },
      { name: "Cosign / Sigstore", role: "Cryptographic Container Image Signing", type: "Supply Chain" },
    ],
  },
  {
    id: "software",
    name: "Software Engineering",
    icon: Code2,
    technologies: [
      { name: "TypeScript", role: "Type-Safe High-Concurrency Logic", type: "Language" },
      { name: "Next.js App Router", role: "Enterprise Hybrid SSR/SSG Web", type: "Framework" },
      { name: "Go (Golang)", role: "High-Throughput Concurrent Daemons", type: "Language" },
      { name: "PostgreSQL", role: "ACID-Compliant Relational Persistence", type: "Database" },
    ],
  },
];

export function TechEcosystemSection() {
  const [activeCategory, setActiveCategory] = useState("cloud");
  const selected = techCategories.find((c) => c.id === activeCategory) || techCategories[0];

  return (
    <section id="technology" className="py-24 sm:py-32 bg-[#05070a] border-t border-white/10 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <ScrollReveal direction="up" delay={0.05} duration={0.65}>
            <div className="inline-flex items-center gap-2 mb-3">
              <Badge variant="emerald" size="sm" dot>
                TECHNOLOGY ECOSYSTEM
              </Badge>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12} duration={0.7}>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Battle-Tested Technology Standards.
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} duration={0.7}>
            <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed font-light">
              We select enterprise primitives based on long-term reliability, zero vendor lock-in, and provable telemetry benchmarks.
            </p>
          </ScrollReveal>
        </div>

        {/* Category Pills Switcher */}
        <ScrollReveal direction="up" delay={0.15} duration={0.7}>
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#0b0e15] border border-white/10 mb-8 sm:mb-10">
            {techCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all select-none",
                    isActive
                      ? "bg-white text-black font-bold shadow-md"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                  )}
                >
                  <Icon className={cn("w-3.5 h-3.5", isActive ? "text-black" : "text-[#d4a342]")} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Grid of Technologies for Selected Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {selected.technologies.map((tech, idx) => (
            <div
              key={tech.name}
              className="p-6 rounded-2xl bg-[#0b0e15] border border-white/10 hover:border-white/20 transition-all space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#d4a342] uppercase tracking-wider px-2 py-0.5 rounded bg-[#d4a342]/10 border border-[#d4a342]/20">
                  {tech.type}
                </span>
                <span className="text-[11px] font-mono text-zinc-600">0{idx + 1}</span>
              </div>

              <h4 className="text-base font-bold text-white group-hover:text-[#d4a342] transition-colors">
                {tech.name}
              </h4>

              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                {tech.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TechEcosystemSection;
