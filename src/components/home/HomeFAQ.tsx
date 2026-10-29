import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { generalFaqs } from "@/lib/content/faqData";

export function HomeFAQ() {
  const topFaqs = generalFaqs.slice(0, 5).map((f) => ({
    id: f.id,
    question: f.question,
    answer: f.answer,
  }));

  return (
    <section className="py-20 md:py-28 bg-[#090a0d] border-t border-brand-border/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FREQUENTLY ASKED"
          title="Questions & Answers"
          description="Clear information on our engineering methodologies, capabilities, and partnership model."
          align="center"
        />

        <div className="bg-brand-surface border border-brand-border rounded-xl p-6 md:p-8">
          <Accordion items={topFaqs} defaultOpenId="g1" />
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold hover:text-brand-gold-light transition-colors"
          >
            <span>View All Frequently Asked Questions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
