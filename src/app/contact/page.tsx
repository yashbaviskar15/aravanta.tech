import React, { Suspense } from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Badge } from "@/components/ui/Badge";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries | ARAVANTA TECH",
  description:
    "Schedule a technical scoping session, request an architecture review, or inquire about Aravanta CloudOS with senior engineering leads at ARAVANTA TECH.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 text-white min-h-screen bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl space-y-4">
          <Badge variant="emerald" size="sm" dot>
            DIRECT ENGINEERING CONSULTATION &amp; SCOPING
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
            Discuss Your <br />
            <span className="emerald-gradient-text">Architecture Initiative.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-300 font-light font-mono">
            Build Smarter. Grow Faster.
          </p>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed pt-1">
            Speak directly with our principal architects and engineering leads. Whether planning a complex cloud migration, designing a high-concurrency web application, or automating GitOps pipelines, we are here to provide clear, actionable guidance with zero sales fluff.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Form Column */}
          <div className="lg:col-span-7">
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
          </div>

          {/* Contact Information & Notice Column */}
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
