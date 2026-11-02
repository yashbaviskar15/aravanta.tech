"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, ArrowRight, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { generalFaqs } from "@/lib/content/faqData";
import { cn } from "@/lib/utils";

export function HomeFAQSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>("g1");

  const categories = ["All", "General", "Services", "Security", "CloudOS"];

  const filteredFaqs = generalFaqs.filter((f) => {
    const matchesCategory = selectedCategory === "All" || f.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#05070a] border-t border-white/10 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <ScrollReveal direction="up" delay={0.05} duration={0.65}>
            <div className="inline-flex items-center gap-2 mb-3">
              <Badge variant="gold" size="sm" dot>
                FREQUENTLY ASKED QUESTIONS
              </Badge>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12} duration={0.7}>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Clear Technical Answers.
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} duration={0.7}>
            <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed font-light">
              Transparent answers regarding our engineering practices, contractual SLAs, security posture, and the Aravanta CloudOS platform.
            </p>
          </ScrollReveal>
        </div>

        {/* Filter Controls: Search & Category Pills */}
        <ScrollReveal direction="up" delay={0.15} duration={0.7}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#0b0e15] border border-white/10 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all",
                    selectedCategory === cat
                      ? "bg-white text-black font-bold shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0b0e15] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4a342] transition-colors"
              />
            </div>

          </div>
        </ScrollReveal>

        {/* FAQ Accordions List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center rounded-2xl bg-[#0b0e15] border border-white/10 text-zinc-500 font-mono text-xs">
              No matching questions found for "{searchQuery}".
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-[#0b0e15] border border-white/10 overflow-hidden transition-all hover:border-white/20"
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {faq.question}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#d4a342] shrink-0">
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          isOpen && "rotate-180 text-white"
                        )}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-zinc-300 leading-relaxed font-light border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Link to Full FAQ Archive */}
        <div className="mt-10 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#d4a342] hover:text-[#f3cc72] transition-colors"
          >
            <span>View complete documentation and FAQ archive</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default HomeFAQSection;
