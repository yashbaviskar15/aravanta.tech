import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { generalFaqs } from "@/lib/content/faqData";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Comprehensive answers to common questions about ARAVANTA TECH services, engineering methodology, security, and Aravanta CloudOS.",
};

export default function FAQPage() {
  const categories: ("General" | "Services" | "Security" | "CloudOS" | "Engagement")[] = [
    "General",
    "Services",
    "Security",
    "CloudOS",
    "Engagement",
  ];

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <Badge variant="gold" size="sm">
            KNOWLEDGE BASE
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Frequently Asked <br />
            <span className="gold-gradient-text">Questions.</span>
          </h1>
          <p className="text-xl text-brand-gold font-light">
            Clear, candid answers regarding our approach, services, and platform initiative.
          </p>
        </div>
      </div>

      {/* Categorized FAQs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {categories.map((category) => {
          const categoryItems = generalFaqs
            .filter((f) => f.category === category)
            .map((f) => ({
              id: f.id,
              question: f.question,
              answer: f.answer,
            }));

          if (categoryItems.length === 0) return null;

          return (
            <div
              key={category}
              className="rounded-2xl bg-brand-surface border border-brand-border p-6 md:p-8"
            >
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-brand-border/60">
                <Badge variant="gold" size="sm">
                  {category}
                </Badge>
                <h2 className="text-xl font-bold text-white">
                  {category} Inquiries
                </h2>
              </div>
              <Accordion items={categoryItems} defaultOpenId={categoryItems[0]?.id} />
            </div>
          );
        })}
      </div>

      {/* Still have questions CTA */}
      <div className="mt-20 pt-16 border-t border-brand-border/60 max-w-3xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">
          Have a Question Not Answered Here?
        </h2>
        <p className="text-sm sm:text-base text-brand-gray-300">
          Our engineering team is always open to discussing specific architecture requirements or scoping questions.
        </p>
        <div className="pt-2">
          <Button href="/contact" variant="primary" size="lg" className="font-semibold">
            <span>Contact Engineering Leads</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
