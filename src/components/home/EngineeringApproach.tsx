import React from "react";
import { Check, Shield, Zap, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

const pillars = [
  {
    title: "Simpler",
    tagline: "Architecture Over Bloat",
    icon: Zap,
    description:
      "We strip away accidental complexity. We believe resilient systems are built with clear domain models, minimal dependencies, and understandable interfaces that your team can run with confidence.",
    tenets: [
      "Pragmatic technology choices without chasing unnecessary trends",
      "Explicit contracts and declarative infrastructure configurations",
      "Comprehensive runbooks and friction-free developer onboarding",
    ],
  },
  {
    title: "Safer",
    tagline: "Intrinsic Zero-Trust Security",
    icon: Shield,
    description:
      "Security is an intrinsic architectural pillar, not an afterthought. We isolate workloads, enforce least-privilege credentials, and embed automated compliance scans into every deployment.",
    tenets: [
      "Least-privilege IAM and ephemeral secrets management",
      "Automated vulnerability and CVE pipeline scanning",
      "Tested disaster recovery with deterministic backup restoration",
    ],
  },
  {
    title: "Smarter",
    tagline: "Business-Aligned Velocity",
    icon: Sparkles,
    description:
      "Every architecture decision must serve a real business outcome. We align infrastructure spend, application latency, and team workflows with measurable growth and commercial sustainability.",
    tenets: [
      "Continuous FinOps discipline to eliminate cloud waste",
      "Automated testing and CI/CD for rapid, low-risk releases",
      "Observable telemetry providing actionable system insights",
    ],
  },
];

export function EngineeringApproach() {
  return (
    <section className="py-20 md:py-28 bg-[#090a0d] border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="OUR PHILOSOPHY"
          title="Simpler. Safer. Smarter."
          description="How our core engineering mindset guides every architecture, deployment, and digital modernization engagement."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={idx}
                className="flex flex-col justify-between hover:border-brand-gold/50 transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-brand-surfaceElevated border border-brand-border flex items-center justify-center text-brand-gold mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-mono text-brand-gold mt-1 mb-4">
                    {pillar.tagline}
                  </div>

                  <p className="text-sm text-brand-gray-300 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-brand-border/60">
                    {pillar.tenets.map((tenet, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-2.5 text-xs text-brand-gray-400">
                        <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                        <span>{tenet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
