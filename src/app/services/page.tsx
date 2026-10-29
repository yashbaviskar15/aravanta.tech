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
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { servicesData } from "@/lib/content/servicesData";
import { ServiceInteractiveExplorer } from "@/components/services/ServiceInteractiveExplorer";
import { ScrollableCardStack } from "@/components/ui/scrollable-card-stack";
import { aravantaServiceCards } from "@/lib/content/cardStackData";

export const metadata: Metadata = {
  title: "Services & Technical Capabilities",
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
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-20">
        <div className="max-w-3xl space-y-4">
          <Badge variant="gold" size="sm">
            ENGINEERING & CONSULTING
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Our Core Services
          </h1>
          <p className="text-lg sm:text-xl text-brand-gold font-light">
            Pragmatic architecture, scalable development, and zero-compromise reliability.
          </p>
          <p className="text-base text-brand-gray-300 leading-relaxed pt-2">
            We provide deep technical expertise across seven core practices, helping modern organizations
            simplify IT operations, eliminate technical debt, and build resilient digital foundations.
          </p>
        </div>
      </div>

      {/* Featured Practice Stack - SmoothUI Scrollable Card Stack */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="rounded-2xl bg-gradient-to-b from-[#0e121b] via-[#090b10] to-[#06080e] border border-brand-border p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-1/3 w-[450px] h-[300px] bg-brand-gold/5 blur-[130px] pointer-events-none rounded-full" />
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surfaceElevated border border-brand-border">
              <span className="w-2 h-2 rounded-full bg-[#d4a342] animate-pulse" />
              <span className="text-xs font-mono text-[#d4a342] font-semibold uppercase tracking-wider">
                Core Engineering Disciplines
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Flagship Architecture Practices
            </h2>
            <p className="text-sm text-brand-gray-300">
              Interactive architectural preview of our specialized disciplines delivering multi-cloud resilience, high-concurrency systems, and zero-trust security.
            </p>
          </div>

          <div className="relative z-10 pb-6">
            <ScrollableCardStack
              items={aravantaServiceCards}
              cardHeight={490}
              cardWidth="w-[94vw] max-w-[620px]"
            />
          </div>
        </div>
      </div>

      {/* Interactive Workflow Explorer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <ServiceInteractiveExplorer />
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {serviceKeys.map((key, index) => {
            const service = servicesData[key];
            const Icon = serviceIcons[key] || Cloud;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.slug}
                id={service.slug}
                className="rounded-2xl bg-brand-surface border border-brand-border p-8 md:p-12 hover:border-brand-borderHighlight transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Overview */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-brand-surfaceElevated border border-brand-border flex items-center justify-center text-brand-gold">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-brand-gold font-semibold">
                          {service.eyebrow}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base font-medium text-brand-gold/90">
                      {service.tagline}
                    </p>

                    <p className="text-sm text-brand-gray-300 leading-relaxed">
                      {service.overview}
                    </p>

                    <div className="pt-4 flex items-center gap-4">
                      <Button
                        href={`/services/${service.slug}`}
                        variant="primary"
                        size="sm"
                        className="font-semibold"
                      >
                        <span>View Practice Details</span>
                        <ArrowRight className="w-4 h-4 ml-1.5" />
                      </Button>
                      <Button
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        variant="outline"
                        size="sm"
                      >
                        <span>Discuss Project</span>
                      </Button>
                    </div>
                  </div>

                  {/* Right Capabilities & Outcomes */}
                  <div className="lg:col-span-5 bg-brand-surfaceElevated border border-brand-border/60 rounded-xl p-6 space-y-4">
                    <div className="text-xs font-mono uppercase tracking-wider text-brand-gold font-semibold">
                      Key Outcomes & Focus
                    </div>
                    <ul className="space-y-2.5">
                      {service.businessOutcomes.map((outcome, oIdx) => (
                        <li
                          key={oIdx}
                          className="text-xs text-brand-gray-300 flex items-start gap-2.5 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-3 border-t border-brand-border/40">
                      <div className="text-[11px] font-mono text-brand-gray-400">
                        Primary Capabilities:
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {service.capabilities.map((c, cIdx) => (
                          <span
                            key={cIdx}
                            className="text-[11px] px-2 py-0.5 rounded bg-brand-surface border border-brand-border text-brand-gray-300 font-mono"
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
      <div className="mt-20 pt-16 border-t border-brand-border/60 max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-extrabold text-white">
          Need a Custom Combination of Services?
        </h2>
        <p className="text-sm sm:text-base text-brand-gray-300">
          Many projects span across cloud migration, modern web application development, and DevOps automation. We assemble tailored engineering engagements to meet your exact architecture milestones.
        </p>
        <div className="pt-2">
          <Button href="/contact" variant="primary" size="lg" className="font-semibold">
            <span>Schedule Architecture Consultation</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
