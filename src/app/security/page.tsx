import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  KeyRound,
  Eye,
  Server,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  Network,
  Activity,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Trust Center & Enterprise Security Architecture | ARAVANTA TECH",
  description:
    "Comprehensive enterprise security architecture, zero-trust cryptographic standards, data protection controls, and regulatory compliance at ARAVANTA TECH.",
};

const SECURITY_PILLARS = [
  {
    title: "1. Zero-Trust Architecture & IAM",
    icon: KeyRound,
    summary:
      "Every access request is fully authenticated, authorized, and cryptographically verified regardless of network perimeter location.",
    points: [
      "Short-lived session tokens (15-minute max TTL) issued via OpenID Connect (OIDC).",
      "Strict Least-Privilege Role-Based Access Control (RBAC) across all infrastructure layers.",
      "Hardware-backed Multi-Factor Authentication (FIDO2 / WebAuthn) required for administrative access.",
      "Systematic automated service account secret rotation with zero hardcoded credentials.",
    ],
  },
  {
    title: "2. Cryptographic Storage & In-Transit Data Protection",
    icon: Lock,
    summary:
      "All persistent client data and network transit payloads are safeguarded with industry-standard cryptographic algorithms.",
    points: [
      "Mandatory TLS 1.3 protocol enforcement for all public ingress endpoints and internal inter-service RPCs.",
      "AES-256-GCM encryption at rest across all database engines, distributed queues, and blob storage volumes.",
      "Customer-Managed Key (CMK) envelope encryption support utilizing FIPS 140-2 Level 3 Hardware Security Modules.",
      "Field-level cryptographic tokenization for sensitive enterprise PII and transactional records.",
    ],
  },
  {
    title: "3. Network Microsegmentation & Perimeter Defense",
    icon: Network,
    summary:
      "Workload environments are isolated within private cloud enclaves with multi-layer traffic inspection.",
    points: [
      "Strictly segregated Virtual Private Clouds (VPCs) with zero public subnet ingress for compute nodes.",
      "Distributed Cloudflare enterprise Web Application Firewall (WAF) for DDoS mitigation and L7 threat blocking.",
      "eBPF-powered real-time kernel observability for anomaly detection and container network telemetry.",
      "Direct VPC peering and private AWS PrivateLink / Azure Private Endpoints for cross-cloud communications.",
    ],
  },
  {
    title: "4. Software Supply Chain & Vulnerability Hygiene",
    icon: Eye,
    summary:
      "Automated continuous scanning gates built into every commit of our GitOps deployment conduits.",
    points: [
      "Automated Software Bill of Materials (SBOM) generation utilizing SPDX and CycloneDX specifications.",
      "Static Application Security Testing (SAST) and secret detection gates running on every Git push.",
      "Deterministic container image compilation based on minimal distroless and Alpine scratch base images.",
      "Automated daily dependency vulnerability monitoring with critical CVE mitigation within 24 hours.",
    ],
  },
  {
    title: "5. High Availability & Incident Disaster Recovery",
    icon: Activity,
    summary:
      "Redundant multi-zone architectures engineered to withstand regional cloud outages with zero data loss.",
    points: [
      "Active-active multi-zone deployments with automated sub-second health-check failover routing.",
      "Recovery Point Objective (RPO) < 60 seconds; Recovery Time Objective (RTO) < 30 minutes for core platforms.",
      "Automated incremental database snapshots with cross-region immutable backup replication.",
      "Regular chaos engineering drills and simulated failover runbooks executed quarterly.",
    ],
  },
  {
    title: "6. Regulatory Alignment & Compliance Governance",
    icon: FileCheck,
    summary:
      "Engineering practices formulated to satisfy the world's most demanding governance frameworks.",
    points: [
      "SOC 2 Type II operational trust services criteria design principles (Security, Availability, Confidentiality).",
      "ISO/IEC 27001 Information Security Management System (ISMS) procedural alignment.",
      "Strict General Data Protection Regulation (GDPR) and CCPA compliance including right-to-erasure workflows.",
      "HIPAA-ready isolated data enclaves for healthcare and life sciences transactional processing.",
    ],
  },
];

export default function SecurityTrustPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 text-white min-h-screen bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
          <Badge variant="emerald" size="sm" dot>
            ENTERPRISE TRUST CENTER &amp; SECURITY WHITEPAPER
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
            Enterprise Security &amp; <br />
            <span className="emerald-gradient-text">Compliance Foundations.</span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal max-w-2xl mx-auto">
            At ARAVANTA TECH, security is not an afterthought or an add-on. We design, engineer, and deploy digital infrastructure with defense-in-depth from day one.
          </p>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-400 mt-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>OPERATIONAL ASSURANCE SPECIFICATION // REVISION 2026.4</span>
          </div>
        </div>

        {/* Security Principles Notice */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#0d0f15] border border-emerald-500/30 shadow-2xl backdrop-blur-xl mb-16 max-w-5xl mx-auto">
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white tracking-tight">Our Security Pledge to Clients</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                We believe in complete code and architectural transparency. We do not make unfalsifiable claims of &quot;unhackable&quot; systems; instead, we implement disciplined, defense-in-depth technical controls, immutable audit logging, continuous automated test gates, and rapid incident response protocols that protect enterprise assets.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Core Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 max-w-6xl mx-auto">
          {SECURITY_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#0d0f15] border border-white/10 hover:border-emerald-500/30 transition-all space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{pillar.title}</h3>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {pillar.summary}
                </p>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance Certification Framework Callout */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0d0f15] border border-white/10 space-y-6 text-left shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                AUDIT &amp; COMPLIANCE VERIFICATION
              </span>
              <h2 className="text-2xl font-bold text-white mt-1 tracking-tight">Need a Security Review or Vendor Assessment?</h2>
            </div>
            <Button href="/contact" variant="primary" size="md">
              <span>Request Trust Package</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed">
            Our architecture leads regularly assist client procurement, CISO, and legal teams with custom security reviews, Data Protection Impact Assessments (DPIA), and mutual Non-Disclosure Agreements (NDA).
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono text-xs">
            <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-center">
              <span className="text-emerald-400 font-bold block">SOC 2 TYPE II</span>
              <span className="text-[10px] text-zinc-400">Aligned Controls</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-center">
              <span className="text-emerald-400 font-bold block">ISO/IEC 27001</span>
              <span className="text-[10px] text-zinc-400">ISMS Standards</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-center">
              <span className="text-emerald-400 font-bold block">GDPR &amp; CCPA</span>
              <span className="text-[10px] text-zinc-400">Privacy by Design</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-center">
              <span className="text-emerald-400 font-bold block">TLS 1.3 / AES-256</span>
              <span className="text-[10px] text-zinc-400">Strict Cryptography</span>
            </div>
          </div>
        </div>

        {/* Quick Links to Legal Documents */}
        <div className="max-w-4xl mx-auto pt-16 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-500">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy →</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service →</Link>
          <Link href="/sla" className="hover:text-white transition-colors">Service Level Agreement (SLA) →</Link>
          <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy →</Link>
          <Link href="/compliance" className="hover:text-white transition-colors">Responsible Disclosure →</Link>
        </div>

      </div>
    </div>
  );
}
