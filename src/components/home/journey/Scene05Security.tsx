"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Lock, KeyRound, Eye, ShieldAlert, CheckCircle2, Shield, RefreshCw, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type SecurityPillar = "iam" | "crypto" | "network" | "hygiene";

interface PillarInfo {
  id: SecurityPillar;
  title: string;
  badge: string;
  controls: string[];
  protocol: string;
  defenseMechanism: string;
}

const PILLARS: Record<SecurityPillar, PillarInfo> = {
  iam: {
    id: "iam",
    title: "Zero-Trust Identity & IAM",
    badge: "EPHEMERAL CREDENTIALS",
    protocol: "OIDC / WebAuthn / Role-Based Access",
    defenseMechanism: "Short-lived tokens and cryptographic session identity prevent credential reuse and privilege escalation.",
    controls: [
      "Short-lived (15 min) JWT & OIDC tokens",
      "Hardware-backed MFA (FIDO2 / WebAuthn)",
      "Strict Least-Privilege role boundaries",
      "Automated service account key rotation",
    ],
  },
  crypto: {
    id: "crypto",
    title: "Cryptographic Data Protection",
    badge: "AES-256 & TLS 1.3",
    protocol: "FIPS 140-2 Level 3 KMS Integration",
    defenseMechanism: "End-to-end data encryption across all storage tiers and transit layers, with customer-managed keys.",
    controls: [
      "Mandatory TLS 1.3 for all ingress & inter-service RPC",
      "AES-256-GCM encryption at rest for databases and blobs",
      "Envelope encryption with automated key rotation",
      "Field-level redaction for sensitive enterprise PII",
    ],
  },
  network: {
    id: "network",
    title: "Network Shields & Microsegmentation",
    badge: "ISOLATED ENCLAVES",
    protocol: "eBPF / Private VPC / Cloudflare WAF",
    defenseMechanism: "Granular ingress filtering and isolated VPC subnets isolate workloads and stop lateral threat traversal.",
    controls: [
      "Strict private subnets with NAT/VPC endpoints",
      "Layer 7 Web Application Firewall (WAF) filtering",
      "Automated adaptive rate-limiting & DDoS throttling",
      "eBPF-driven container network security monitoring",
    ],
  },
  hygiene: {
    id: "hygiene",
    title: "Vulnerability & Supply Chain Hygiene",
    badge: "CONTINUOUS COMPLIANCE",
    protocol: "SBOM / Trivy / Immutable Audit Logs",
    defenseMechanism: "Automated vulnerability scanning at every commit, cryptographically signed container manifests, and tamper-proof logs.",
    controls: [
      "Automated SBOM (Software Bill of Materials) generation",
      "Container image signing and vulnerability gates",
      "WORM (Write Once Read Many) immutable audit trails",
      "Automated patch alerts and dependency auditing",
    ],
  },
};

export function Scene05Security() {
  const [activePillar, setActivePillar] = useState<SecurityPillar>("iam");
  const [controlsEnabled, setControlsEnabled] = useState({
    iam: true,
    crypto: true,
    network: true,
    hygiene: true,
  });

  const toggleControl = (key: keyof typeof controlsEnabled) => {
    setControlsEnabled((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const enabledCount = Object.values(controlsEnabled).filter(Boolean).length;
  const defenseScore = enabledCount * 25;

  const current = PILLARS[activePillar];

  return (
    <section
      id="scene-05"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32 z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header Badge */}
        <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#0a0e14]/90 border border-[#222533] backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
          <span className="text-xs font-semibold tracking-wider uppercase text-brand-gold font-mono">
            SCENE 05 // SECURITY & RELIABILITY
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Zero-Trust Security Matrix */}
          <ScrollReveal direction="right" delay={0.15} duration={0.75} distance={20} className="lg:col-span-6 order-2 lg:order-1">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0a0e14]/95 border border-[#222533] backdrop-blur-xl shadow-2xl space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-brand-border/70">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-brand-gold" />
                  <span className="text-xs font-mono text-white font-bold tracking-wider uppercase">
                    ZERO-TRUST PERIMETER MATRIX
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-brand-gray-400">DEFENSE POSTURE:</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${
                      defenseScore === 100
                        ? "bg-emerald-950/80 text-emerald-400 border-emerald-500/40"
                        : "bg-amber-950/80 text-amber-400 border-amber-500/40"
                    }`}
                  >
                    {defenseScore}% HARDENED
                  </span>
                </div>
              </div>

              {/* Pillar Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  type="button"
                  onClick={() => setActivePillar("iam")}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    activePillar === "iam"
                      ? "bg-brand-gold/15 border-brand-gold text-brand-gold font-bold shadow-[0_0_10px_rgba(201,162,74,0.15)]"
                      : "bg-[#121622] border-brand-border/60 text-brand-gray-400 hover:text-white"
                  }`}
                >
                  <KeyRound className="w-4 h-4 mx-auto mb-1" />
                  <span className="text-[11px] font-mono block">IAM & Auth</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActivePillar("crypto")}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    activePillar === "crypto"
                      ? "bg-brand-gold/15 border-brand-gold text-brand-gold font-bold shadow-[0_0_10px_rgba(201,162,74,0.15)]"
                      : "bg-[#121622] border-brand-border/60 text-brand-gray-400 hover:text-white"
                  }`}
                >
                  <Lock className="w-4 h-4 mx-auto mb-1" />
                  <span className="text-[11px] font-mono block">Crypto Store</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActivePillar("network")}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    activePillar === "network"
                      ? "bg-brand-gold/15 border-brand-gold text-brand-gold font-bold shadow-[0_0_10px_rgba(201,162,74,0.15)]"
                      : "bg-[#121622] border-brand-border/60 text-brand-gray-400 hover:text-white"
                  }`}
                >
                  <Shield className="w-4 h-4 mx-auto mb-1" />
                  <span className="text-[11px] font-mono block">Network WAF</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActivePillar("hygiene")}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    activePillar === "hygiene"
                      ? "bg-brand-gold/15 border-brand-gold text-brand-gold font-bold shadow-[0_0_10px_rgba(201,162,74,0.15)]"
                      : "bg-[#121622] border-brand-border/60 text-brand-gray-400 hover:text-white"
                  }`}
                >
                  <Eye className="w-4 h-4 mx-auto mb-1" />
                  <span className="text-[11px] font-mono block">Hygiene Audit</span>
                </button>
              </div>

              {/* Active Pillar Details Card */}
              <div className="p-4 rounded-xl bg-[#121622] border border-brand-border/60 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white">{current.title}</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 text-brand-gold border border-brand-gold/30">
                    {current.badge}
                  </span>
                </div>
                <p className="text-xs text-brand-gray-300 leading-relaxed">
                  {current.defenseMechanism}
                </p>
                <div className="text-[11px] font-mono text-cyan-400 pt-1">
                  SECURITY PROTOCOL: {current.protocol}
                </div>
              </div>

              {/* Interactive Defense Controls Checkers */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-brand-gray-400 uppercase tracking-wider">
                  ACTIVE PERIMETER DEFENSE CONTROLS
                </div>
                <div className="space-y-2">
                  {current.controls.map((ctrl, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-[#0d1017] border border-brand-border/60 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span className="text-xs text-white">{ctrl}</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded">
                        ENFORCED
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Defense Posture Interactive Toggle Matrix */}
              <div className="p-3.5 rounded-xl bg-[#090c12] border border-brand-border/80 space-y-2.5">
                <div className="text-[11px] font-mono text-brand-gold uppercase tracking-wider flex items-center justify-between">
                  <span>POSTURE HEALTH EVALUATOR</span>
                  <span>{enabledCount}/4 PILLARS ACTIVE</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => toggleControl("iam")}
                    className={`p-2 rounded-lg border text-left flex items-center justify-between ${
                      controlsEnabled.iam
                        ? "bg-emerald-950/30 border-emerald-500/40 text-emerald-300"
                        : "bg-red-950/20 border-red-500/30 text-red-300"
                    }`}
                  >
                    <span>Least-Privilege IAM</span>
                    <span>{controlsEnabled.iam ? "ON" : "OFF"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleControl("crypto")}
                    className={`p-2 rounded-lg border text-left flex items-center justify-between ${
                      controlsEnabled.crypto
                        ? "bg-emerald-950/30 border-emerald-500/40 text-emerald-300"
                        : "bg-red-950/20 border-red-500/30 text-red-300"
                    }`}
                  >
                    <span>TLS 1.3 & AES-256</span>
                    <span>{controlsEnabled.crypto ? "ON" : "OFF"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleControl("network")}
                    className={`p-2 rounded-lg border text-left flex items-center justify-between ${
                      controlsEnabled.network
                        ? "bg-emerald-950/30 border-emerald-500/40 text-emerald-300"
                        : "bg-red-950/20 border-red-500/30 text-red-300"
                    }`}
                  >
                    <span>Network WAF Shield</span>
                    <span>{controlsEnabled.network ? "ON" : "OFF"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleControl("hygiene")}
                    className={`p-2 rounded-lg border text-left flex items-center justify-between ${
                      controlsEnabled.hygiene
                        ? "bg-emerald-950/30 border-emerald-500/40 text-emerald-300"
                        : "bg-red-950/20 border-red-500/30 text-red-300"
                    }`}
                  >
                    <span>CI/CD SBOM Gates</span>
                    <span>{controlsEnabled.hygiene ? "ON" : "OFF"}</span>
                  </button>
                </div>
              </div>

              {/* Strict Notice */}
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-[11px] text-brand-gray-400 font-mono">
                NOTICE: We implement defensive, industry-standard engineering practices. Security is a continuous process of verification and vigilance, not an absolute guarantee.
              </div>

            </div>
          </ScrollReveal>

          {/* Right Column: Narrative Copy */}
          <ScrollReveal direction="up" delay={0.05} duration={0.7} distance={20} className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Build With Security <br />
              <span className="gold-gradient-text">In Mind.</span>
            </h2>

            <p className="text-base sm:text-lg text-brand-gray-300 leading-relaxed font-normal">
              Security cannot be bolted on at the conclusion of a project. We incorporate security-conscious thinking directly into the software design and infrastructure provisioning phases. From network segmentation and identity management to secure code reviews and disaster recovery drills, we engineer systems that stand up to production demands.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#0d1017]/85 border border-brand-border/70 backdrop-blur-md hover:border-brand-gold/40 transition-colors">
                <div className="flex items-center gap-2 mb-2 text-brand-gold">
                  <ShieldCheck className="w-4 h-4" />
                  <h4 className="text-sm font-semibold text-white">Secure by Design</h4>
                </div>
                <p className="text-xs text-brand-gray-400 leading-relaxed">
                  Threat modeling and security boundary definition before writing the first line of code.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0d1017]/85 border border-brand-border/70 backdrop-blur-md hover:border-brand-gold/40 transition-colors">
                <div className="flex items-center gap-2 mb-2 text-brand-gold">
                  <RefreshCw className="w-4 h-4" />
                  <h4 className="text-sm font-semibold text-white">Continuous Posture Verification</h4>
                </div>
                <p className="text-xs text-brand-gray-400 leading-relaxed">
                  Automated SAST/DAST pipelines and secret rotation keeping production perimeters pristine.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="/services/cybersecurity" variant="primary" size="md">
                <span>Explore Cybersecurity Services</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Link
                href="/services/cloud-solutions"
                className="text-xs font-mono uppercase tracking-wider text-brand-gray-400 hover:text-brand-gold transition-colors inline-flex items-center gap-1.5"
              >
                <span>Resilient Cloud Architecture</span>
                <span>→</span>
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

export default Scene05Security;
