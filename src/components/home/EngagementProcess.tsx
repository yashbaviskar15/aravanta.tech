import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Discovery & Topology Audit",
    summary:
      "We inspect current systems, interview key stakeholders, analyze codebases, and map out dependencies to quantify technical risk.",
    outputs: ["Technical readiness audit", "Identified risk & friction map", "Commercial & architecture goals"],
  },
  {
    number: "02",
    title: "Reference Architecture Design",
    summary:
      "We design target architectures with declarative infrastructure blueprints, zero-trust network boundaries, and clear milestone schedules.",
    outputs: ["Infrastructure blueprints", "Contract & data schema specs", "Phased implementation plan"],
  },
  {
    number: "03",
    title: "Incremental Engineering",
    summary:
      "We build and deploy in tight iterations, proving architecture through automated testing, staging sandboxes, and safe pilot cutovers.",
    outputs: ["Continuous delivery pipeline", "Automated test coverage", "Operational runbooks"],
  },
  {
    number: "04",
    title: "Handover & Knowledge Enablement",
    summary:
      "We empower your internal team through comprehensive documentation, observability setups, and hands-on operational training.",
    outputs: ["Complete documentation", "Telemetry & SLO alerts", "Engineering handover session"],
  },
];

export function EngagementProcess() {
  return (
    <section className="py-20 md:py-28 bg-[#090a0d] border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="HOW WE WORK"
          title="Pragmatic, Predictable Engagement"
          description="A structured engineering lifecycle designed to de-risk delivery, eliminate guesswork, and ensure sustained internal capability."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-brand-surface border border-brand-border p-6 flex flex-col justify-between hover:border-brand-gold/40 transition-colors"
            >
              <div>
                <div className="text-3xl font-extrabold text-brand-gold/40 font-mono mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-brand-gray-300 leading-relaxed mb-6">
                  {step.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border/60">
                <div className="text-[10px] uppercase tracking-wider text-brand-gold font-semibold mb-2">
                  Key Deliverables
                </div>
                <ul className="space-y-1">
                  {step.outputs.map((out, oIdx) => (
                    <li key={oIdx} className="text-[11px] text-brand-gray-400 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-brand-gold" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
