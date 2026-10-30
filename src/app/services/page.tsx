import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Cloud,
  Workflow,
  Code2,
  Server,
  Cpu,
  ShieldAlert,
  Compass,
  ArrowRight,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { servicesData } from "@/lib/content/servicesData";
import { ServiceInteractiveExplorer } from "@/components/services/ServiceInteractiveExplorer";
import { ScrollableCardStack } from "@/components/ui/scrollable-card-stack";
import { aravantaServiceCards } from "@/lib/content/cardStackData";

export const metadata: Metadata = {
  title: "Engineering Services & Core Disciplines | ARAVANTA TECH",
  description:
    "Explore ARAVANTA TECH services: Cloud Solutions, Digital Transformation, Application Development, IT Infrastructure, DevOps & Automation, Cybersecurity, and IT Consulting.",
};

const serviceIcons: Record<string, any> = {
  "cloud-solutions": Cloud,
  "digital-transformation": Workflow,
  "application-development": Code2,
  "it-infrastructure": Server,
  "devops-automation": Cpu,
  "cybersecurity": ShieldAlert,
  "it-consulting": Compass,
};

export default function ServicesPage() {
  const serviceKeys = Object.keys(servicesData);

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 text-white min-h-screen bg-[#08090d]">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-20">
        <div className="max-w-3xl space-y-4">
          <Badge variant="emerald" size="sm" dot>
            SYSTEMS ENGINEERING &amp; ADVISORY
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
            Our Core <br />
            <span className="emerald-gradient-text">Engineering Practices.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-300 font-light font-mono">
            Pragmatic architecture, scalable development, and zero-compromise reliability.
          </p>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed pt-1">
            We provide deep technical expertise across seven core practices, helping modern organizations eliminate technical debt, automate complex deployments, and build resilient digital foundations.
          </p>
        </div>
      </div>

      {/* Featured Practice Stack - SmoothUI Scrollable Card Stack */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="rounded-3xl bg-[#0d0f15] border border-white/10 p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3 relative z-10">
            <Badge variant="emerald" size="sm" dot>
              CORE DISCIPLINES
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Flagship Architecture Practices
            </h2>
            <p className="text-sm text-zinc-400">
              Interactive architectural preview of our specialized disciplines delivering multi-cloud resilience, high-concurrency systems, and zero-trust security.
            </p>
          </div>

          <div className="relative z-10 pb-4">
            <ScrollableCardStack
              items={aravantaServiceCards}
              cardHeight={490}
              cardWidth="w-[94vw] max-w-[620px]"
            />
          </div>
        </div>
      </div>

      {/* Interactive Workflow Explorer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <ServiceInteractiveExplorer />
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {serviceKeys.map((key) => {
            const service = servicesData[key];
            const Icon = serviceIcons[key] || Cloud;

            return (
              <div
                key={service.slug}
                id={service.slug}
                className="rounded-2xl bg-[#0d0f15] border border-white/10 p-6 sm:p-8 md:p-10 hover:border-white/20 transition-all duration-300 shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Overview */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                          {service.eyebrow}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base font-medium text-zinc-300 font-mono">
                      {service.tagline}
                    </p>

                    <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                      {service.overview}
                    </p>

                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <Button
                        href={`/services/${service.slug}`}
                        variant="primary"
                        size="sm"
                      >
                        <span>View Practice Dossier</span>
                        <ArrowRight className="w-4 h-4 ml-1.5" />
                      </Button>
                      <Button
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        variant="secondary"
                        size="sm"
                      >
                        <span>Scope Initiative</span>
                      </Button>
                    </div>
                  </div>

                  {/* Right Capabilities & Outcomes */}
                  <div className="lg:col-span-5 bg-white/[0.02] border border-white/10 rounded-2xl p-6 space-y-4">
                    <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                      Key Outcomes &amp; Deliverables
                    </div>
                    <ul className="space-y-2.5">
                      {service.businessOutcomes.map((outcome, oIdx) => (
                        <li
                          key={oIdx}
                          className="text-xs text-zinc-300 flex items-start gap-2.5 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-3 border-t border-white/10">
                      <div className="text-[11px] font-mono text-zinc-400 mb-2">
                        Primary Capabilities:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.capabilities.map((c, cIdx) => (
                          <span
                            key={cIdx}
                            className="text-[11px] px-2.5 py-1 rounded-md bg-[#08090d] border border-white/10 text-zinc-300 font-mono"
                          >
                            {c.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 pt-16 border-t border-white/10 max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Need a Custom Combination of Services?
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
          Many enterprise initiatives span across cloud migration, modern web application development, and DevOps automation. We assemble tailored engineering engagements to meet your exact architecture milestones.
        </p>
        <div className="pt-2 flex justify-center">
          <Button href="/contact" variant="primary" size="lg">
            <span>Schedule Architecture Consultation</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
