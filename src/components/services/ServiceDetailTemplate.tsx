import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { ServiceDetail } from "@/lib/content/servicesData";

interface ServiceDetailTemplateProps {
  service: ServiceDetail;
}

export function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  const formattedFaqs = service.faqs.map((f, i) => ({
    id: `svc-faq-${i}`,
    question: f.question,
    answer: f.answer,
  }));

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Top Breadcrumb & Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-gold hover:text-brand-gold-light transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Services</span>
          </Link>
        </div>

        <div className="max-w-4xl space-y-4">
          <Badge variant="gold" size="sm">
            {service.eyebrow}
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {service.title}
          </h1>
          <p className="text-xl sm:text-2xl text-brand-gold font-light">
            {service.tagline}
          </p>
          <p className="text-base sm:text-lg text-brand-gray-300 leading-relaxed pt-2">
            {service.overview}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Button
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              variant="primary"
              size="md"
              className="font-semibold"
            >
              <span>Discuss {service.title}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              href="#capabilities"
              variant="secondary"
              size="md"
              className="font-medium"
            >
              <span>View Capabilities</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Challenges Addressed */}
      <section className="mt-20 pt-16 border-t border-brand-border/60 bg-[#0b0c10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="neutral" size="sm" className="mb-2">
              CHALLENGES
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Operational Challenges We Solve
            </h2>
            <p className="text-sm text-brand-gray-400 mt-2">
              Common bottlenecks that drain engineering velocity and inflate operational costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.challenges.map((c, i) => (
              <div
                key={i}
                className="rounded-xl bg-brand-surface border border-brand-border p-6 hover:border-red-500/30 transition-colors"
              >
                <div className="flex items-center gap-2 text-red-400 text-sm font-semibold mb-3">
                  <AlertCircle className="w-4 h-4" />
                  <span>Risk Point {i + 1}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {c.title}
                </h3>
                <p className="text-xs text-brand-gray-300 leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concrete Capabilities & Deliverables */}
      <section id="capabilities" className="mt-20 pt-16 border-t border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="gold" size="sm" className="mb-2">
              DELIVERABLES
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Core Technical Capabilities
            </h2>
            <p className="text-sm text-brand-gray-400 mt-2">
              Specific architecture artifacts, code blueprints, and managed workflows we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.capabilities.map((cap, i) => (
              <Card key={i} className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-brand-gray-300 leading-relaxed mb-6">
                    {cap.description}
                  </p>

                  <div className="pt-4 border-t border-brand-border/60">
                    <div className="text-xs font-mono uppercase tracking-wider text-brand-gold font-semibold mb-3">
                      Artifacts & Deliverables
                    </div>
                    <ul className="space-y-2">
                      {cap.deliverables.map((del, dIdx) => (
                        <li
                          key={dIdx}
                          className="text-xs text-brand-gray-300 flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Approach */}
      <section className="mt-20 pt-16 border-t border-brand-border/60 bg-[#0b0c10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="neutral" size="sm" className="mb-2">
              METHODOLOGY
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Engagement Lifecycle
            </h2>
            <p className="text-sm text-brand-gray-400 mt-2">
              How we take your project from discovery through architecture to production handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.approach.map((app, i) => (
              <div
                key={i}
                className="rounded-xl bg-brand-surface border border-brand-border p-6"
              >
                <div className="text-2xl font-mono font-bold text-brand-gold/40 mb-3">
                  {app.step}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {app.title}
                </h3>
                <p className="text-xs text-brand-gray-300 leading-relaxed">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Outcomes */}
      <section className="mt-20 pt-16 border-t border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-brand-surfaceElevated to-brand-surface border border-brand-border p-8 md:p-12">
            <div className="max-w-3xl">
              <Badge variant="gold" size="sm" className="mb-3">
                BUSINESS VALUE
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Measurable Business Outcomes
              </h2>
              <div className="space-y-4">
                {service.businessOutcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-brand-gray-200 leading-relaxed">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice FAQs */}
      <section className="mt-20 pt-16 border-t border-brand-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {service.title} FAQs
            </h2>
            <p className="text-sm text-brand-gray-400 mt-2">
              Common questions about scope, implementation, and collaboration.
            </p>
          </div>

          <div className="bg-brand-surface border border-brand-border rounded-xl p-6 md:p-8">
            <Accordion items={formattedFaqs} defaultOpenId="svc-faq-0" />
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <section className="mt-20 pt-16 border-t border-brand-border/60 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Advance Your {service.title}?
          </h2>
          <p className="text-base text-brand-gray-300">
            Schedule a technical scoping session with our senior engineers to review your architecture and discuss practical next steps.
          </p>
          <div className="pt-2">
            <Button
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              variant="primary"
              size="lg"
              className="font-semibold"
            >
              <span>Schedule Scoping Session</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
