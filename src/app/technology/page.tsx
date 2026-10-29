import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  Database,
  Cloud,
  Cpu,
  ShieldCheck,
  Terminal,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { companyData } from "@/lib/content/companyData";

export const metadata: Metadata = {
  title: "Technology Capabilities & Engineering Stacks",
  description:
    "Explore ARAVANTA TECH's technology stack across frontend, backend, cloud infrastructure, DevOps pipelines, and security tooling.",
};

const techCategories = [
  {
    title: "Modern Frontend Engineering",
    icon: Code2,
    badge: "CLIENT-SIDE",
    description:
      "Engineered for high performance, accessibility, SEO discoverability, and rapid developer iteration.",
    items: companyData.techStack.frontend,
  },
  {
    title: "Backend & Distributed Systems",
    icon: Database,
    badge: "DATA & SERVERS",
    description:
      "Reliable REST and GraphQL APIs, normalized databases, caching layers, and high-throughput background processing.",
    items: companyData.techStack.backend,
  },
  {
    title: "Cloud & Compute Platforms",
    icon: Cloud,
    badge: "INFRASTRUCTURE",
    description:
      "Multi-cloud architectures, resilient virtual private clouds, bare-metal setups, and managed services.",
    items: companyData.techStack.cloud,
  },
  {
    title: "DevOps, CI/CD & Orchestration",
    icon: Cpu,
    badge: "AUTOMATION",
    description:
      "Declarative Infrastructure as Code, containerization, GitOps pipelines, and zero-downtime deployment gates.",
    items: companyData.techStack.devops,
  },
  {
    title: "Security & Zero-Trust Tooling",
    icon: ShieldCheck,
    badge: "DEFENSE-IN-DEPTH",
    description:
      "Proactive vulnerability scanning, secret isolation, least-privilege IAM policies, and encrypted transports.",
    items: companyData.techStack.security,
  },
];

export default function TechnologyPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-20">
        <div className="max-w-3xl space-y-4">
          <Badge variant="gold" size="sm">
            TECHNOLOGY ECOSYSTEM
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Our Technology <br />
            <span className="gold-gradient-text">Capability Stack.</span>
          </h1>
          <p className="text-xl text-brand-gold font-light">
            Modern, typed, and battle-tested engineering primitives.
          </p>
          <p className="text-base text-brand-gray-300 leading-relaxed pt-2">
            We select tools based on production resilience, operational maintainability, and business longevity.
            We avoid fragile experimental stacks in favor of robust, observable technologies that scale cleanly.
          </p>
        </div>
      </div>

      {/* Technology Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {techCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-brand-surface border border-brand-border p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-brand-border/60 gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-lg bg-brand-surfaceElevated border border-brand-border flex items-center justify-center text-brand-gold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {category.title}
                    </h2>
                    <p className="text-xs text-brand-gray-400 mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>
                <Badge variant="gold" size="sm" className="self-start md:self-auto">
                  {category.badge}
                </Badge>
              </div>

              {/* Grid of technologies */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.items.map((tech, tIdx) => (
                  <div
                    key={tIdx}
                    className="p-4 rounded-xl bg-brand-surfaceElevated border border-brand-border hover:border-brand-gold/40 transition-colors"
                  >
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      <span>{tech.name}</span>
                    </div>
                    <div className="text-xs text-brand-gray-400 mt-1.5 font-sans leading-relaxed">
                      {tech.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 pt-16 border-t border-brand-border/60 max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-extrabold text-white">
          Have Specific Technology Constraints?
        </h2>
        <p className="text-sm sm:text-base text-brand-gray-300">
          Our engineering team is fluent across legacy architectures and modern cloud-native systems.
          We adapt to your team’s tooling and existing CI/CD environments.
        </p>
        <div className="pt-2">
          <Button href="/contact" variant="primary" size="lg" className="font-semibold">
            <span>Discuss Technical Requirements</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
