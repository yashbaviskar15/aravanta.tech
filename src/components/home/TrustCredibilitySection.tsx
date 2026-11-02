"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  FileCheck,
  Lock,
  Server,
  Activity,
  ArrowRight,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function TrustCredibilitySection() {
  const commitments = [
    {
      title: "Contractual 99.999% SLA",
      icon: FileCheck,
      badge: "VERIFIABLE SLA",
      description:
        "We offer contractual uptime guarantees backed by automated penalty credit schedules and sub-15-minute SRE MTTR response matrices.",
      linkText: "Review SLA Guarantees",
      href: "/sla",
    },
    {
      title: "Zero-Trust Cryptographic Pledge",
      icon: ShieldCheck,
      badge: "SECURITY FIRST",
      description:
        "Every client environment is protected by mutual TLS 1.3 service meshes, ephemeral hardware-backed secrets, and least-privilege RBAC.",
      linkText: "Visit Trust Center",
      href: "/security",
    },
    {
      title: "Verifiable Infrastructure as Code",
      icon: Server,
      badge: "ZERO DRIFT",
      description:
        "No hidden manual tweaks. 100% of provisioned infrastructure is codified into auditable OpenTofu/Terraform repositories with SBOM provenance.",
      linkText: "View Case Studies",
      href: "/case-studies",
    },
    {
      title: "Responsible Disclosure & Compliance",
      icon: Lock,
      badge: "GOVERNANCE",
      description:
        "We maintain active SOC 2 Type II and ISO 27001 architectural hardening alignment with documented vulnerability disclosure safe harbors.",
      linkText: "Read Compliance Policies",
      href: "/compliance",
    },
  ];

  return (
    <section id="trust" className="py-24 sm:py-32 bg-[#06080e] border-t border-white/10 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <ScrollReveal direction="up" delay={0.05} duration={0.65}>
            <div className="inline-flex items-center gap-2 mb-3">
              <Badge variant="emerald" size="sm" dot>
                ENTERPRISE CREDIBILITY
              </Badge>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12} duration={0.7}>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Engineered with Evidence. Backed by Contract.
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} duration={0.7}>
            <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed font-light">
              We replace marketing hyperbole with measurable engineering benchmarks, open documentation, and binding availability SLAs.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((com, idx) => {
            const Icon = com.icon;

            return (
              <ScrollReveal
                key={com.title}
                direction="up"
                delay={0.1 * (idx + 1)}
                duration={0.7}
                distance={20}
              >
                <div className="h-full rounded-3xl bg-[#0b0e15] border border-white/10 p-7 space-y-4 hover:border-white/20 transition-all group flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                      {com.badge}
                    </span>

                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                      {com.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                      {com.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <Link
                      href={com.href}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>{com.linkText}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default TrustCredibilitySection;
