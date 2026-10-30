import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Server,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Network,
  Activity,
  HardDrive,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  Terminal,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "IT Infrastructure & SRE Fleet Engineering | ARAVANTA TECH",
  description:
    "Predictable, automated compute fleets, bare-metal hypervisor orchestration, multi-homed BGP networking, and autonomous SRE telemetry from ARAVANTA TECH.",
};

export default function ITInfrastructurePage() {
  const capabilities = [
    {
      title: "Automated Fleet & Hypervisor Management",
      icon: Server,
      description: "Declarative bare-metal provisioning and hypervisor automation (KVM/Proxmox/OpenStack) using immutable OS images and PXE boot controllers.",
      specs: ["Sub-5 Minute Node Provisioning", "Zero-Touch OS Configuration", "Automated Node Evacuation"],
    },
    {
      title: "SRE Telemetry & Autonomous Convergence",
      icon: Activity,
      description: "Kernel-level eBPF instrumentation and OpenTelemetry collectors feeding autonomous convergence daemons that heal failing nodes before SLOs degrade.",
      specs: ["Sub-15 Minute MTTR", "Kernel Crash Proactive Isolation", "Automated Out-of-Band IPMI Reboots"],
    },
    {
      title: "High-Throughput NVMe SAN Fabric",
      icon: HardDrive,
      description: "Low-latency distributed block storage architectures utilizing NVMe over Fabrics (NVMe-oF) and Ceph, delivering millions of IOPS with zero single points of failure.",
      specs: ["Sub-200µs Storage Latency", "Automated Parity Scrubbing", "Triple-Replicated Data Persistence"],
    },
    {
      title: "Multi-Homed BGP Network Engineering",
      icon: Network,
      description: "Redundant upstream transit providers, automated Anycast BGP routing, and private cross-connects designed for ultra-low latency and total route resilience.",
      specs: ["Sub-10ms Regional Transit", "Automated DDoS Scrubbing", "Dual-Homed Spine-Leaf Fabric"],
    },
  ];

  const infrastructureMetrics = [
    {
      label: "Fleet Provisioning Velocity",
      value: "3m 40s",
      detail: "PXE boot to verified production workload",
    },
    {
      label: "Target MTTR",
      value: "< 12m",
      detail: "Autonomous node failover and convergence",
    },
    {
      label: "Network Route Latency",
      value: "4.8ms",
      detail: "Average metro-area Anycast packet transit",
    },
    {
      label: "Hardware SLA",
      value: "99.999%",
      detail: "Contractual availability benchmark",
    },
  ];

  const useCases = [
    {
      category: "High-Frequency Financial Engine",
      challenge: "Unpredictable microburst packet loss causing trade rejection spikes during market opening auctions.",
      solution: "Engineered dual-homed 100GbE spine-leaf fabric with custom Linux kernel network buffer tuning and hardware timestamping.",
      outcome: "Packet drop rate reduced to 0.000%; jitter dropped by 72% across all trade execution pathways.",
    },
    {
      category: "Petabyte Media Ingestion Fleet",
      challenge: "Storage SAN bottleneck preventing real-time 4K ingest from multiple concurrent global video contribution feeds.",
      solution: "Deployed distributed NVMe-oF storage fabric with automated tiering to S3 object vaults.",
      outcome: "Sustained throughput increased by 4.5x with zero frame drops during live global broadcast events.",
    },
    {
      category: "Autonomous Cloud Fleet (2,400+ Nodes)",
      challenge: "High engineering toil and slow MTTR (average 3.2 hours) caused by manual server diagnostic and reboot workflows.",
      solution: "Implemented eBPF kernel health daemons with automated IPMI out-of-band power cycling and node cordoning.",
      outcome: "MTTR plummeted from 3.2 hours to 8.5 minutes; operational toil reduced by 91%.",
    },
  ];

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 text-white min-h-screen bg-[#08090d]">
      {/* Bespoke IT Infrastructure Hero */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28">
        {/* Ambient Radial Glow */}
        <div className="absolute -top-10 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <ScrollReveal direction="up" delay={0.05} duration={0.65} distance={16}>
              <div className="inline-flex items-center gap-2">
                <Badge variant="emerald" size="sm" dot>
                  SRE &amp; BARE-METAL INFRASTRUCTURE
                </Badge>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.12} duration={0.7} distance={20}>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
                Predictable Compute &amp; <br />
                <span className="emerald-gradient-text">Autonomous SRE Fleets.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} duration={0.7} distance={18}>
              <p className="text-xl text-zinc-300 font-light font-mono">
                Hardware-Level Rigor. Sub-Second Telemetry. 99.999% Availability.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.28} duration={0.7} distance={18}>
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal">
                We design, automate, and operate enterprise compute fleets and high-throughput network backbones. By pairing Linux kernel optimizations with automated out-of-band IPMI controllers and eBPF observability, we guarantee unwavering infrastructure stability.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.35} duration={0.7} distance={18}>
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Button href="/contact?service=IT%20Infrastructure" variant="primary" size="md">
                  <span>Scope Infrastructure Review</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button href="/sla" variant="secondary" size="md">
                  <span>View SLA Guarantees</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Interactive Fleet Telemetry Card */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" delay={0.25} duration={0.8} distance={24}>
              <div className="rounded-3xl bg-[#0d0f15] border border-white/10 p-6 sm:p-7 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
                    <Server className="w-4 h-4" />
                    <span>AUTONOMOUS FLEET TELEMETRY DOCK</span>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded">
                    CONVERGENCE: 100%
                  </span>
                </div>

                {/* SRE Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  {infrastructureMetrics.map((met, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition-all space-y-1"
                    >
                      <div className="text-[10px] text-zinc-400 uppercase tracking-wider">{met.label}</div>
                      <div className="text-lg font-bold text-emerald-400">{met.value}</div>
                      <div className="text-[10px] text-zinc-500 line-clamp-1">{met.detail}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>Protocol: eBPF + OpenTelemetry</span>
                  <span className="text-emerald-400">Packet Loss: 0.000%</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 md:py-24 border-t border-white/10 bg-[#06070a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.1} duration={0.7}>
            <div className="max-w-2xl mb-12">
              <Badge variant="emerald" size="sm" dot className="mb-3">
                INFRASTRUCTURE DISCIPLINES
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                SRE-Grade Compute Foundations
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 mt-2">
                Engineered from the physical NIC and hypervisor layer up to the orchestrator.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <ScrollReveal key={idx} direction="up" delay={0.12 * (idx + 1)} duration={0.7} distance={20}>
                  <div
                    className="rounded-2xl bg-[#0d0f15] border border-white/10 p-7 hover:border-emerald-500/30 transition-all space-y-4 h-full"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {cap.description}
                    </p>
                    <div className="pt-2 flex flex-wrap gap-2 border-t border-white/5">
                      {cap.specs.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-[11px] font-mono text-zinc-300"
                        >
                          ✓ {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Production Case Studies */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.1} duration={0.7}>
            <div className="max-w-2xl mb-12">
              <Badge variant="gold" size="sm" dot className="mb-3">
                PRODUCTION IMPACT
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Fleet Engineering Under Load
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 mt-2">
                Real high-throughput infrastructure problems resolved with measurable metrics.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((uc, idx) => (
              <ScrollReveal key={idx} direction="up" delay={0.12 * (idx + 1)} duration={0.7} distance={20}>
                <div
                  className="rounded-2xl bg-[#0d0f15] border border-white/10 p-6 space-y-3.5 flex flex-col justify-between h-full"
                >
                  <div className="space-y-2.5">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                      {uc.category}
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-zinc-300">Infrastructure Bottleneck:</div>
                      <p className="text-xs text-zinc-400 leading-relaxed mt-0.5">{uc.challenge}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-zinc-300">Engineering Solution:</div>
                      <p className="text-xs text-zinc-400 leading-relaxed mt-0.5">{uc.solution}</p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-white/10">
                    <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{uc.outcome}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Practices */}
      <section className="py-12 border-t border-white/10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1} duration={0.6}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Related Practices</span>
              <div className="flex flex-wrap items-center gap-3 mt-1">
                <Link href="/services/cloud-solutions" className="text-sm text-zinc-300 hover:text-white flex items-center gap-1">
                  Cloud Solutions <ArrowRight className="w-3 h-3 text-emerald-400" />
                </Link>
                <span className="text-zinc-600">•</span>
                <Link href="/sla" className="text-sm text-zinc-300 hover:text-white flex items-center gap-1">
                  SLA Guarantees <ArrowRight className="w-3 h-3 text-emerald-400" />
                </Link>
                <span className="text-zinc-600">•</span>
                <Link href="/cloudos" className="text-sm text-zinc-300 hover:text-white flex items-center gap-1">
                  Aravanta CloudOS <ArrowRight className="w-3 h-3 text-emerald-400" />
                </Link>
              </div>
            </div>
            <Button href="/contact?service=IT%20Infrastructure" variant="primary" size="md">
              <span>Schedule Infrastructure Review</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
