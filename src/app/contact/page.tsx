import React, { Suspense } from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Badge } from "@/components/ui/Badge";
import { Loader2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries | ARAVANTA TECH",
  description:
    "Schedule a technical scoping session, request an architecture review, or inquire about Aravanta CloudOS with senior engineering leads at ARAVANTA TECH.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 text-white min-h-screen bg-[#08090d]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute -top-10 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4 relative z-10">
          <ScrollReveal direction="up" delay={0.05} duration={0.65} distance={16}>
            <Badge variant="emerald" size="sm" dot>
              DIRECT ENGINEERING CONSULTATION &amp; SCOPING
            </Badge>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12} duration={0.7} distance={20}>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
              Discuss Your <br />
              <span className="emerald-gradient-text">Architecture Initiative.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} duration={0.7} distance={18}>
            <p className="text-xl sm:text-2xl text-zinc-300 font-light font-mono">
              Build Smarter. Grow Faster.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.28} duration={0.7} distance={18}>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed pt-1">
              Speak directly with our principal architects and engineering leads. Whether planning a complex cloud migration, designing a high-concurrency web application, or automating GitOps pipelines, we are here to provide clear, actionable guidance with zero sales fluff.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" delay={0.15} duration={0.7} distance={22}>
              <Suspense
                fallback={
                  <div className="rounded-2xl bg-[#0d0f15] border border-white/10 p-12 text-center text-zinc-400 flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin text-emerald-400" />
                    <span>Loading inquiry form...</span>
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </ScrollReveal>
          </div>

          {/* Contact Information & Notice Column */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" delay={0.2} duration={0.75} distance={24}>
              <ContactInfo />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
