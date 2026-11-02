"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Terminal,
  Send,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

export function ConversionContactSection() {
  const [selectedCategory, setSelectedCategory] = useState("Cloud Solutions");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectSummary: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const categories = [
    "Cloud Solutions",
    "Application Engineering",
    "DevOps & Automation",
    "Cybersecurity",
    "Aravanta CloudOS",
    "Architecture Review",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus("error");
      setErrorMsg("Please provide your name and work email address.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: selectedCategory,
          consent: true,
        }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMsg(data.error || "Submission failed. Please try again or email contact@aravanta.tech directly.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please try again or reach out directly to contact@aravanta.tech.");
    }
  };

  return (
    <section id="contact-cta" className="py-24 sm:py-32 bg-[#06080e] border-t border-white/10 relative z-10 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#d4a342]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="up" delay={0.05} duration={0.65}>
              <div className="inline-flex items-center gap-2">
                <Badge variant="gold" size="sm" dot>
                  START A CONVERSATION
                </Badge>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.12} duration={0.7}>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
                Let's Engineer <br />
                <span className="gold-gradient-text">Something Exceptional.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} duration={0.7}>
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
                Whether you need a full cloud re-platforming, bare-metal fleet automation, high-concurrency microservices, or an architecture audit, our principal engineers are ready to scope your engagement.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.28} duration={0.7}>
              <div className="space-y-3 pt-2 text-xs font-mono text-zinc-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct technical review by Principal Engineers</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#d4a342] shrink-0" />
                  <span>Guaranteed response within 1 business day</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Strict mutual NDA &amp; confidential scoping</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.35} duration={0.7}>
              <div className="pt-4 border-t border-white/10 flex items-center gap-4 text-xs font-mono text-zinc-500">
                <span>Direct Inquiries:</span>
                <a href="mailto:contact@aravanta.tech" className="text-[#d4a342] hover:underline">
                  contact@aravanta.tech
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={0.2} duration={0.8}>
              <div className="rounded-3xl bg-[#0d1017] border border-white/12 p-7 sm:p-10 shadow-2xl relative overflow-hidden">
                
                {status === "success" ? (
                  <div className="p-8 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Inquiry Received
                    </h3>
                    <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting ARAVANTA TECH. A Principal Engineer will review your technical specifications and respond within one business day.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2.5 rounded-xl bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Project Category Pills */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                        Select Project Discipline:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => setSelectedCategory(cat)}
                            className={cn(
                              "px-3 py-1.5 rounded-xl text-xs font-mono transition-all",
                              selectedCategory === cat
                                ? "bg-[#d4a342] text-black font-bold shadow-sm"
                                : "bg-white/[0.04] text-zinc-400 hover:text-white border border-white/8"
                            )}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Inputs Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Elena Rostova"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#08090d] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#d4a342] transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. elena@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#08090d] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#d4a342] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Acme FinTech Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[#08090d] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#d4a342] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                        Brief Technical Scope / Project Objectives
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Describe your current infrastructure architecture, target timelines, or specific bottlenecks..."
                        value={formData.projectSummary}
                        onChange={(e) => setFormData({ ...formData, projectSummary: e.target.value })}
                        className="w-full bg-[#08090d] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#d4a342] transition-colors resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#d4a342] via-[#e5b85a] to-[#f3cc72] text-[#090a0d] font-bold text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 hover:brightness-110 disabled:opacity-50 transition-all shadow-lg active:scale-[0.98]"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#090a0d]" />
                          <span>Submitting Scope...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#090a0d]" />
                          <span>Submit Architecture Inquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ConversionContactSection;
