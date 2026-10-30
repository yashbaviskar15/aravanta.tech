import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Lock,
  KeyRound,
  ShieldCheck,
  FileCheck,
  Eye,
  Activity,
  Terminal,
  ArrowUpRight,
  Cpu,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Enterprise Cybersecurity & Zero-Trust Architecture | ARAVANTA TECH",
  description:
    "Zero-trust network perimeters, mTLS workload attestation, continuous CVE vulnerability scanning, and SOC 2 / ISO 27001 compliance hardening from ARAVANTA TECH.",
};

export default function CybersecurityPage() {
  const capabilities = [
    {
      title: "Zero-Trust Network Architecture (ZTNA)",
      icon: Lock,
      description: "Eliminating implicit network trust. Every request, whether crossing VPC boundaries or originating internally, is authenticated, authorized, and mutually encrypted.",
      specs: ["Mutual TLS (mTLS) Mesh", "SPIFFE/SPIRE Workload Identity", "Zero Lateral Movement Surface"],
    },
    {
      title: "Automated Supply Chain & CVE Scanning",
      icon: ShieldCheck,
      description: "Continuous vulnerability scanning across container base images, npm/PyPI dependencies, and infrastructure code before promotion to staging or production.",
      specs: ["Static Application Security Testing (SAST)", "Automated SBOM Generation", "Critical CVE Admission Gates"],
    },
    {
      title: "Cloud Security Posture Management (CSPM)",
      icon: Eye,
      description: "Continuous auditing of cloud IAM policies, public bucket exposures, security group drift, and unencrypted volumes across AWS, Azure, and Google Cloud.",
      specs: ["Real-Time Policy Drift Alerts", "CIS Benchmark Enforcement", "Automated Remediation Webhooks"],
    },
    {
      title: "Regulatory Compliance Hardening",
      icon: FileCheck,
      description: "Translating complex regulatory frameworks (SOC 2 Type II, ISO 27001, HIPAA, PCI-DSS) into automated, auditable infrastructure-as-code controls.",
      specs: ["Hardware-Backed KMS Encryption", "Immutable Audit Logging", "Automated Evidence Collection"],
    },
  ];

  const securityLayers = [
    {
      layer: "Edge Ingress Perimeter",
      control: "Identity-Aware Proxy + DDoS Shield",
      metric: "0 Open Ingress Ports",
    },
    {
      layer: "Workload Attestation",
      control: "SPIFFE Cryptographic Workload IDs",
      metric: "mTLS 1.3 Strict Mesh",
    },
    {
      layer: "Runtime Kernel Guard",
      control: "eBPF Behavioral Anomaly Detection",
      metric: "Sub-Millisecond Threat Isolation",
    },
    {
      layer: "Data & Secret Enclaves",
      control: "Hardware Security Module (HSM) KMS",
      metric: "AES-256 Envelope Encryption",
    },
  ];

  const useCases = [
    {
      category: "Fintech & Payment Gateway",
      challenge: "Achieving PCI-DSS Level 1 compliance while maintaining sub-50ms tokenization API response times across distributed cloud regions.",
      solution: "Engineered isolated tokenization enclave with HSM envelope encryption and zero-knowledge database storage.",
      outcome: "Passed PCI-DSS Level 1 audit on first submission with zero non-conformities; tokenization latency reduced to 16ms.",
    },
    {
      category: "Global HealthTech SaaS",
      challenge: "Vulnerability to lateral movement attacks via legacy SSH bastion hosts used by 120+ remote engineers.",
      solution: "Decommissioned all bastion hosts in favor of short-lived, identity-attested WireGuard sessions with continuous MFA verification.",
      outcome: "Completely eliminated public-facing attack surface while cutting developer access friction to zero.",
    },
    {
      category: "Enterprise Supply Chain Engine",
      challenge: "Risk of dependency poisoning attacks across a monorepo containing 400+ internal and external open-source libraries.",
      solution: "Integrated continuous SBOM generation and signed provenance checks into the GitOps pipeline with zero-tolerance CVE gates.",
      outcome: "Successfully caught and neutralized two malicious third-party npm package updates before they entered staging.",
    },
  ];

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 text-white min-h-screen bg-[#08090d]">
      {/* Bespoke Cybersecurity Hero */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute -top-10 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="up" delay={0.05} duration={0.65} distance={16}>
              <div className="inline-flex items-center gap-2">
                <Badge variant="emerald" size="sm" dot>
                  ZERO-TRUST &amp; CLOUD SECURITY
                </Badge>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.12} duration={0.7} distance={20}>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
                Zero-Trust Architecture &amp; <br />
                <span className="emerald-gradient-text">Continuous Compliance.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} duration={0.7} distance={18}>
              <p className="text-xl text-zinc-300 font-light font-mono">
                Never Trust. Always Verify. Provable Isolation.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.28} duration={0.7} distance={18}>
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal">
                We design defense-in-depth security architectures for mission-critical systems. By enforcing cryptographic workload attestation, ephemeral zero-trust network perimeters, and automated vulnerability scanning gates, we neutralize threats before they can move laterally.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.35} duration={0.7} distance={18}>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button href="/contact?service=Cybersecurity" variant="primary" size="md">
                  <span>Request Security Audit</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button href="/security" variant="secondary" size="md">
                  <span>Visit Trust Center</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Interactive Zero-Trust Perimeter Blueprint Card */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" delay={0.2} duration={0.8} distance={26}>
              <div className="rounded-3xl bg-[#0d0f15] border border-white/10 p-6 sm:p-7 shadow-2xl relative overflow-hidden hover:border-emerald-500/40 transition-all">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>ZERO-TRUST SECURITY PERIMETER</span>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded">
                    DEFENSE POSTURE: MAXIMUM
                  </span>
                </div>

                {/* Security Layers Flow */}
                <div className="space-y-2.5 font-mono text-xs">
                  {securityLayers.map((layer, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition-all space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-white font-sans">{layer.layer}</span>
                        <span className="text-[10px] text-emerald-400 font-mono">✓ {layer.metric}</span>
                      </div>
                      <div className="text-[10px] text-zinc-400">{layer.control}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>Encryption: AES-256-GCM / TLS 1.3</span>
                  <span className="text-emerald-400">SOC 2 / ISO 27001 Ready</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 md:py-24 border-t border-white/10 bg-[#06070a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.1} duration={0.65}>
            <div className="max-w-2xl mb-12">
              <Badge variant="emerald" size="sm" dot className="mb-3">
                SECURITY DISCIPLINES
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Cryptographic Systems Hardening
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 mt-2">
                Proactive engineering controls that replace reactive perimeter security appliances.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <ScrollReveal key={idx} direction="up" delay={0.08 + idx * 0.08} duration={0.65}>
                  <div
                    className="h-full rounded-2xl bg-[#0d0f15] border border-white/10 p-7 hover:border-emerald-500/30 hover:bg-[#12151e] transition-all space-y-4 shadow-lg"
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

      {/* Real Enterprise Case Studies */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.1} duration={0.65}>
            <div className="max-w-2xl mb-12">
              <Badge variant="gold" size="sm" dot className="mb-3">
                AUDITED OUTCOMES
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Proven Defense Under Audit &amp; Attack
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 mt-2">
                Real cybersecurity challenges solved for fintech, healthtech, and enterprise software.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((uc, idx) => (
              <ScrollReveal key={idx} direction="up" delay={0.08 + idx * 0.08} duration={0.65}>
                <div
                  className="h-full rounded-2xl bg-[#0d0f15] border border-white/10 p-6 space-y-3.5 flex flex-col justify-between hover:border-emerald-500/30 transition-all shadow-lg"
                >
                  <div className="space-y-2.5">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                      {uc.category}
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-zinc-300">Threat / Challenge:</div>
                      <p className="text-xs text-zinc-400 leading-relaxed mt-0.5">{uc.challenge}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-zinc-300">Security Architecture:</div>
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
        <ScrollReveal direction="up" delay={0.1} duration={0.65}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Related Practices</span>
              <div className="flex flex-wrap items-center gap-3 mt-1">
                <Link href="/services/devops-automation" className="text-sm text-zinc-300 hover:text-white flex items-center gap-1">
                  DevOps &amp; GitOps <ArrowRight className="w-3 h-3 text-emerald-400" />
                </Link>
                <span className="text-zinc-600">•</span>
                <Link href="/services/cloud-solutions" className="text-sm text-zinc-300 hover:text-white flex items-center gap-1">
                  Cloud Solutions <ArrowRight className="w-3 h-3 text-emerald-400" />
                </Link>
                <span className="text-zinc-600">•</span>
                <Link href="/security" className="text-sm text-zinc-300 hover:text-white flex items-center gap-1">
                  Trust Center <ArrowRight className="w-3 h-3 text-emerald-400" />
                </Link>
              </div>
            </div>
            <Button href="/contact?service=Cybersecurity" variant="primary" size="md">
              <span>Schedule Security Review</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
