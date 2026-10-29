import React, { Suspense } from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Badge } from "@/components/ui/Badge";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries",
  description:
    "Schedule a technical scoping session, request an architecture review, or inquire about Aravanta CloudOS with ARAVANTA TECH.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl space-y-4">
          <Badge variant="gold" size="sm">
            DIRECT ENGINEERING CONSULTATION
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Discuss Your <span className="gold-gradient-text">Project.</span>
          </h1>
          <p className="text-xl text-brand-gold font-light">
            Build Smarter. Grow Faster.
          </p>
          <p className="text-base text-brand-gray-300 leading-relaxed pt-2">
            Speak directly with our principal architects and engineering leads. Whether planning a complex cloud migration, designing a greenfield web application, or automating CI/CD pipelines, we are here to provide clear, actionable guidance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="rounded-2xl bg-brand-surface border border-brand-border p-12 text-center text-brand-gray-400 flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin text-brand-gold" />
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
