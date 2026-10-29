import React from "react";
import { Shield, Users, Compass, Code, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

const reasons = [
  {
    icon: Users,
    title: "Senior Engineering Practitioners",
    description:
      "You collaborate directly with experienced systems architects and principal engineers who write code and design systems every day, not junior account handlers.",
  },
  {
    icon: Compass,
    title: "Unbiased Vendor Neutrality",
    description:
      "We do not accept resale commissions or platform quotas. Our recommendations are strictly aligned with your technical requirements, team skills, and budget.",
  },
  {
    icon: Code,
    title: "Complete Code & Asset Ownership",
    description:
      "All architecture blueprints, Infrastructure as Code scripts, and application repositories belong 100% to your organization from day one.",
  },
  {
    icon: Shield,
    title: "Security & Zero-Trust Foundations",
    description:
      "Every architecture and deployment pipeline is built with intrinsic defense-in-depth, encrypted credentials, and automated vulnerability scanning.",
  },
];

export function WhyAravanta() {
  return (
    <section className="py-20 md:py-28 bg-[#0b0c10] border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="WHY CHOOSE US"
          title="Engineering Rigor, Enterprise Integrity"
          description="We prioritize technical excellence, pragmatic outcomes, and transparent communication over superficial industry buzzwords."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <Card
                key={idx}
                className="flex flex-col justify-between hover:border-brand-gold/40 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-brand-surfaceElevated border border-brand-border flex items-center justify-center text-brand-gold mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {r.title}
                  </h3>
                  <p className="text-xs text-brand-gray-300 leading-relaxed">
                    {r.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
