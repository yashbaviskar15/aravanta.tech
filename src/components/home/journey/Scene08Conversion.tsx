"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Send, CheckCircle2, AlertCircle, HelpCircle, ChevronDown, Sliders, Users, Calendar, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "How does ARAVANTA TECH approach legacy-to-cloud modernization?",
    a: "We avoid high-risk 'big bang' rewrites. Instead, we architect strangler-pattern incremental migrations that gradually decouple domain services, containerize core workloads, and migrate data stores with zero customer downtime.",
  },
  {
    q: "What is the status of Aravanta CloudOS?",
    a: "Aravanta CloudOS is our strategic platform initiative currently in architectural specification and preview. It is focused on declarative state convergence, automated drift reconciliation, and unified multi-cloud telemetry.",
  },
  {
    q: "How do you handle security and compliance requirements?",
    a: "We design with defense-in-depth from day one: zero-trust network policies, least-privilege IAM, short-lived mutual TLS credentials, automated dependency scanning, and immutable audit logging.",
  },
  {
    q: "What is your typical project engagement lifecycle?",
    a: "We operate in disciplined, predictable sprints starting with an architectural discovery audit, followed by phased implementation milestones, automated test gates, and SRE operational handoff.",
  },
];

type ScopeCategory = "cloud" | "apps" | "devops" | "security";

export function Scene08Conversion() {
  // Form State
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "Cloud Solutions",
    projectSummary: "",
    consent: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMsg, setResponseMsg] = useState<{ success: boolean; text: string; refId?: string } | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Estimator State
  const [scopeCat, setScopeCat] = useState<ScopeCategory>("cloud");
  const [scopeScale, setScopeScale] = useState<"starter" | "enterprise">("enterprise");
  const [scopeTimeline, setScopeTimeline] = useState<"accelerated" | "standard">("standard");
  const [appliedNotification, setAppliedNotification] = useState(false);

  // Dynamic scope estimation
  const estimatorMatrix = {
    cloud: {
      serviceName: "Cloud Solutions",
      team: scopeScale === "enterprise" ? "1 Principal Cloud Architect + 2 Cloud Engineers + 1 FinOps Lead" : "1 Lead Cloud Architect + 1 DevOps Engineer",
      sprints: scopeTimeline === "accelerated" ? "4 Sprints (6 Weeks)" : "6 Sprints (12 Weeks)",
      architecture: scopeScale === "enterprise" ? "Multi-Region Active-Active with Zero-Trust IAM & FinOps" : "Resilient Single-Region Multi-AZ with Auto-Scaling",
    },
    apps: {
      serviceName: "Application Development",
      team: scopeScale === "enterprise" ? "1 Principal Architect + 3 Full-Stack Engineers + 1 QA Automation" : "1 Senior Full-Stack Engineer + 1 Frontend Specialist",
      sprints: scopeTimeline === "accelerated" ? "4 Sprints (6 Weeks)" : "6 Sprints (12 Weeks)",
      architecture: scopeScale === "enterprise" ? "Decoupled Next.js / Node.js Microservices with Event Bus" : "Modular Full-Stack Application with Type-Safe APIs",
    },
    devops: {
      serviceName: "DevOps & Automation",
      team: scopeScale === "enterprise" ? "1 Principal SRE + 2 DevOps Automation Engineers" : "1 Senior DevOps / SRE Lead",
      sprints: scopeTimeline === "accelerated" ? "3 Sprints (4 Weeks)" : "5 Sprints (8 Weeks)",
      architecture: scopeScale === "enterprise" ? "Declarative GitOps CI/CD Conduit with Blue/Green Canary" : "Automated Containerized CI/CD with SAST Gates",
    },
    security: {
      serviceName: "Cybersecurity",
      team: scopeScale === "enterprise" ? "1 Principal Security Architect + 1 IAM Specialist + 1 DevSecOps Lead" : "1 Senior Security Architect",
      sprints: scopeTimeline === "accelerated" ? "3 Sprints (4 Weeks)" : "5 Sprints (8 Weeks)",
      architecture: scopeScale === "enterprise" ? "Zero-Trust Perimeter, TLS 1.3 Strict Mesh, KMS Key Rotation" : "Defense-in-Depth IAM Hardening & Container Security Audit",
    },
  };

  const currentEst = estimatorMatrix[scopeCat];

  const handleApplyScope = () => {
    const summaryText = `[SCOPE ESTIMATE]: Category: ${currentEst.serviceName} | Scale: ${
      scopeScale === "enterprise" ? "Enterprise Multi-Region" : "Growth / Standard"
    } | Target Timeline: ${currentEst.sprints} | Architecture Profile: ${currentEst.architecture} | Team Model: ${
      currentEst.team
    }. Please provide an architectural consultation.`;

    setFormState((prev) => ({
      ...prev,
      service: currentEst.serviceName,
      projectSummary: summaryText,
    }));

    setAppliedNotification(true);
    setTimeout(() => setAppliedNotification(false), 3000);

    // Scroll to form smoothly
    const formEl = document.getElementById("inquiry-form-card");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setResponseMsg({ success: true, text: data.message, refId: data.referenceId });
        setFormState({ name: "", email: "", service: "Cloud Solutions", projectSummary: "", consent: true });
      } else {
        setResponseMsg({ success: false, text: data.message || "Submission failed. Please check required fields." });
      }
    } catch (err) {
      setResponseMsg({ success: false, text: "Network error occurred. Please try again shortly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="scene-08"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32 z-10"
    >
      <div className="max-w-7xl mx-auto w-full space-y-20">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.05} duration={0.7} distance={20} className="text-left space-y-4">
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#0a0e14]/90 border border-[#222533] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-brand-gold font-mono">
              SCENE 08 // CONVERSION & ARCHITECTURAL INQUIRIES
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Let&apos;s Build <br />
            <span className="gold-gradient-text">What&apos;s Next.</span>
          </h2>

          <p className="text-base sm:text-xl text-brand-gray-300 leading-relaxed font-normal max-w-3xl">
            Have a technology challenge or a modernization project in mind? Configure your scope profile below or connect directly with our engineering team for an objective architectural assessment.
          </p>
        </ScrollReveal>

        {/* Dual Grid: Project Scope Estimator (Left) + Inquiry Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Project Scope Estimator */}
          <ScrollReveal direction="up" delay={0.1} duration={0.75} distance={20} className="lg:col-span-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0a0e14]/95 border border-[#222533] backdrop-blur-xl shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-brand-border/70">
                <div className="flex items-center gap-2.5">
                  <Sliders className="w-4 h-4 text-brand-gold" />
                  <span className="text-xs font-mono text-white font-bold tracking-wider uppercase">
                    INTERACTIVE SCOPE & SPRINT ESTIMATOR
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
                  ESTIMATOR
                </span>
              </div>

              {/* Scope Category Buttons */}
              <div>
                <label className="block text-xs font-mono text-brand-gray-400 uppercase tracking-wider mb-2">
                  Select Project Focus
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "cloud", label: "Cloud & FinOps" },
                    { id: "apps", label: "Software Eng." },
                    { id: "devops", label: "DevOps & SRE" },
                    { id: "security", label: "Zero-Trust Sec" },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setScopeCat(cat.id as ScopeCategory)}
                      className={`py-2 px-3 rounded-lg text-xs font-mono font-semibold transition-all border text-left flex items-center justify-between ${
                        scopeCat === cat.id
                          ? "bg-brand-gold/15 text-brand-gold border-brand-gold shadow-[0_0_10px_rgba(201,162,74,0.15)]"
                          : "bg-[#121622] text-brand-gray-400 border-transparent hover:border-brand-gray-600 hover:text-white"
                      }`}
                    >
                      <span>{cat.label}</span>
                      {scopeCat === cat.id && <Check className="w-3.5 h-3.5 text-brand-gold" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Workload Scale Selector */}
              <div>
                <label className="block text-xs font-mono text-brand-gray-400 uppercase tracking-wider mb-2">
                  Architecture Scale
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setScopeScale("starter")}
                    className={`py-2 px-3 rounded-lg text-xs font-mono text-center border transition-all ${
                      scopeScale === "starter"
                        ? "bg-brand-gold/20 text-brand-gold border-brand-gold font-bold"
                        : "bg-[#121622] text-brand-gray-400 border-brand-border/60 hover:text-white"
                    }`}
                  >
                    Growth Scale (1–5 Services)
                  </button>
                  <button
                    type="button"
                    onClick={() => setScopeScale("enterprise")}
                    className={`py-2 px-3 rounded-lg text-xs font-mono text-center border transition-all ${
                      scopeScale === "enterprise"
                        ? "bg-brand-gold/20 text-brand-gold border-brand-gold font-bold"
                        : "bg-[#121622] text-brand-gray-400 border-brand-border/60 hover:text-white"
                    }`}
                  >
                    Enterprise Multi-Region
                  </button>
                </div>
              </div>

              {/* Timeline / Cadence Selector */}
              <div>
                <label className="block text-xs font-mono text-brand-gray-400 uppercase tracking-wider mb-2">
                  Delivery Velocity Target
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setScopeTimeline("accelerated")}
                    className={`py-2 px-3 rounded-lg text-xs font-mono text-center border transition-all ${
                      scopeTimeline === "accelerated"
                        ? "bg-brand-gold/20 text-brand-gold border-brand-gold font-bold"
                        : "bg-[#121622] text-brand-gray-400 border-brand-border/60 hover:text-white"
                    }`}
                  >
                    Accelerated Sprint
                  </button>
                  <button
                    type="button"
                    onClick={() => setScopeTimeline("standard")}
                    className={`py-2 px-3 rounded-lg text-xs font-mono text-center border transition-all ${
                      scopeTimeline === "standard"
                        ? "bg-brand-gold/20 text-brand-gold border-brand-gold font-bold"
                        : "bg-[#121622] text-brand-gray-400 border-brand-border/60 hover:text-white"
                    }`}
                  >
                    Standard Phased
                  </button>
                </div>
              </div>

              {/* Calculated Scope Estimation Output */}
              <div className="p-4 rounded-xl bg-[#121622] border border-brand-border/80 space-y-3">
                <div className="text-xs font-mono text-brand-gold font-bold uppercase tracking-wider flex items-center justify-between">
                  <span>PROJECTED ENGAGEMENT BLUEPRINT</span>
                  <span className="text-white">{currentEst.sprints}</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-brand-gray-400 text-[10px] font-mono block uppercase">Architecture Blueprint</span>
                    <span className="text-white font-medium">{currentEst.architecture}</span>
                  </div>

                  <div className="pt-1">
                    <span className="text-brand-gray-400 text-[10px] font-mono block uppercase">Recommended Sprint Crew</span>
                    <span className="text-emerald-400 font-mono text-xs">{currentEst.team}</span>
                  </div>
                </div>
              </div>

              {/* Apply Scope Button */}
              <div>
                <button
                  type="button"
                  onClick={handleApplyScope}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-brand-gold to-brand-goldLight text-brand-bg font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-[0_0_15px_rgba(201,162,74,0.25)] flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Auto-Fill Scope Into Inquiry Form</span>
                </button>
                {appliedNotification && (
                  <div className="text-center text-xs font-mono text-emerald-400 mt-2 animate-fade-in flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Inquiry form updated with scope details!</span>
                  </div>
                )}
              </div>

              <div className="text-[11px] font-mono text-brand-gray-400 text-center">
                Response SLA: Verified technical assessment within 1 business day.
              </div>

            </div>
          </ScrollReveal>

          {/* Right Column: Live Inquiry Terminal */}
          <ScrollReveal direction="left" delay={0.2} duration={0.8} distance={20} className="lg:col-span-6" id="inquiry-form-card">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0a0e14]/95 border border-brand-gold/40 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-3 border-b border-brand-border/60 mb-5">
                <h3 className="text-lg font-bold text-white">Direct Engineering Inquiry</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                  SECURE ENDPOINT
                </span>
              </div>

              {responseMsg && (
                <div
                  className={`p-4 rounded-xl mb-6 flex items-start gap-3 text-xs ${
                    responseMsg.success
                      ? "bg-emerald-950/80 border border-emerald-500/30 text-emerald-300"
                      : "bg-red-950/80 border border-red-500/30 text-red-300"
                  }`}
                >
                  {responseMsg.success ? (
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-400" />
                  ) : (
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-400" />
                  )}
                  <div>
                    <p className="font-semibold">{responseMsg.text}</p>
                    {responseMsg.refId && (
                      <p className="font-mono mt-1 text-[11px] opacity-80">
                        Reference Audit ID: {responseMsg.refId}
                      </p>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-mono uppercase text-brand-gray-300 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Alex Mercer"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#121622] border border-brand-border text-white text-sm focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-brand-gray-300 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#121622] border border-brand-border text-white text-sm focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-brand-gray-300 mb-1.5">
                    Area of Interest *
                  </label>
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#121622] border border-brand-border text-white text-sm focus:outline-none focus:border-brand-gold transition-colors"
                  >
                    <option value="Cloud Solutions">Cloud Solutions & FinOps</option>
                    <option value="Digital Transformation">Digital Transformation & Modernization</option>
                    <option value="Application Development">Application & API Engineering</option>
                    <option value="IT Infrastructure">Compute Fleet Infrastructure</option>
                    <option value="DevOps & Automation">DevOps, CI/CD & GitOps</option>
                    <option value="Cybersecurity">Cybersecurity & Zero-Trust</option>
                    <option value="Aravanta CloudOS">Aravanta CloudOS Architecture</option>
                    <option value="IT Consulting">IT Consulting & Architecture Review</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-brand-gray-300 mb-1.5">
                    Project Overview (min 15 characters) *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.projectSummary}
                    onChange={(e) => setFormState({ ...formState, projectSummary: e.target.value })}
                    placeholder="Briefly describe your systems, timelines, or transformation goals..."
                    className="w-full px-4 py-2.5 rounded-lg bg-[#121622] border border-brand-border text-white text-sm focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  size="lg"
                  className="w-full justify-center font-semibold"
                >
                  {isSubmitting ? (
                    <span>Logging Inquiry...</span>
                  ) : (
                    <>
                      <span>Transmit Project Inquiry</span>
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </ScrollReveal>

        </div>

        {/* Bottom Section: Curated Frequently Asked Questions */}
        <ScrollReveal direction="up" delay={0.15} duration={0.7} distance={20} className="pt-12 border-t border-brand-border/60 max-w-4xl mx-auto text-left">
          <div className="flex items-center gap-2 mb-8">
            <HelpCircle className="w-5 h-5 text-brand-gold" />
            <h3 className="text-2xl font-bold text-white tracking-tight">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-brand-border/80 bg-[#0a0e14]/80 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between text-white hover:text-brand-gold transition-colors"
                  >
                    <span className="text-sm font-semibold pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-brand-gold" : "text-brand-gray-500"
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-brand-gray-300 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

export default Scene08Conversion;
