"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Layers,
  Workflow,
  Sparkles,
  Cloud,
  Building2,
  Send,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Code2,
  Server,
  Cpu,
  ShieldCheck,
  Compass,
  FileText,
  Users,
  HelpCircle,
  FileCheck,
  Boxes,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Dropdown data definitions
const servicesList = [
  {
    title: "Cloud Solutions",
    href: "/services/cloud-solutions",
    description: "Multi-cloud architecture, zero-downtime migration & FinOps.",
    icon: Cloud,
  },
  {
    title: "Digital Transformation",
    href: "/services/digital-transformation",
    description: "Legacy-system modernization and event-driven automation.",
    icon: Workflow,
  },
  {
    title: "Application Development",
    href: "/services/application-development",
    description: "Full-stack web, Next.js, TypeScript & high-concurrency APIs.",
    icon: Code2,
  },
  {
    title: "IT Infrastructure",
    href: "/services/it-infrastructure",
    description: "Predictable, automated compute fleets & SRE telemetry.",
    icon: Server,
  },
  {
    title: "DevOps & Automation",
    href: "/services/devops-automation",
    description: "Zero-downtime CI/CD pipelines, Docker & GitOps.",
    icon: Cpu,
  },
  {
    title: "Cybersecurity",
    href: "/services/cybersecurity",
    description: "Zero-trust IAM, dependency scanning & SOC 2 compliance.",
    icon: ShieldCheck,
  },
  {
    title: "IT Consulting",
    href: "/services/it-consulting",
    description: "Unbiased technical architecture reviews & roadmaps.",
    icon: Compass,
  },
];

const solutionsList = [
  {
    title: "Financial Services & FinTech",
    href: "/solutions#fintech",
    description: "Resilient transactional ledgers and PCI-DSS compliance.",
    icon: Layers,
  },
  {
    title: "Enterprise SaaS Scale",
    href: "/solutions#enterprise-saas",
    description: "Multi-tenant tenant isolation and rapid release velocity.",
    icon: Boxes,
  },
  {
    title: "Healthcare & Life Sciences",
    href: "/solutions#healthcare",
    description: "HIPAA-compliant data enclaves and zero-trust telemetry.",
    icon: ShieldCheck,
  },
  {
    title: "Architecture Blueprints",
    href: "/case-studies",
    description: "Documented real-world enterprise engineering outcomes.",
    icon: FileText,
  },
];

const companyList = [
  {
    title: "About ARAVANTA TECH",
    href: "/about",
    description: "Our mission, engineering values & digital philosophy.",
    icon: Building2,
  },
  {
    title: "Technology Capabilities",
    href: "/technology",
    description: "Battle-tested engineering primitives from code to cloud.",
    icon: Layers,
  },
  {
    title: "Culture & Careers",
    href: "/careers",
    description: "How we solve high-stakes challenges and open roles.",
    icon: Users,
  },
  {
    title: "Trust Center & Security",
    href: "/security",
    description: "Enterprise zero-trust architecture & security whitepapers.",
    icon: ShieldCheck,
  },
  {
    title: "SLA Guarantees",
    href: "/sla",
    description: "Contractual 99.999% availability benchmarks and MTTR.",
    icon: FileCheck,
  },
  {
    title: "FAQs",
    href: "/faq",
    description: "Direct answers regarding our services and CloudOS platform.",
    icon: HelpCircle,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | "solutions" | "company" | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMouseEnter = (menu: "services" | "solutions" | "company") => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  // Nav item list matching the user's capsule screenshot
  const navItems = [
    {
      id: "home",
      label: "Home",
      href: "/",
      icon: Home,
      isActive: pathname === "/",
    },
    {
      id: "services",
      label: "Services",
      href: "/services",
      icon: Layers,
      isActive: pathname.startsWith("/services"),
      hasDropdown: "services" as const,
    },
    {
      id: "solutions",
      label: "Solutions",
      href: "/solutions",
      icon: Workflow,
      isActive: pathname.startsWith("/solutions"),
      hasDropdown: "solutions" as const,
    },
    {
      id: "case-studies",
      label: "Case Studies",
      href: "/case-studies",
      icon: Sparkles,
      isActive: pathname.startsWith("/case-studies"),
    },
    {
      id: "cloudos",
      label: "CloudOS",
      href: "/cloudos",
      icon: Cloud,
      isActive: pathname.startsWith("/cloudos"),
    },
    {
      id: "company",
      label: "Company",
      href: "/about",
      icon: Building2,
      isActive:
        pathname.startsWith("/about") ||
        pathname.startsWith("/technology") ||
        pathname.startsWith("/careers") ||
        pathname.startsWith("/security") ||
        pathname.startsWith("/sla") ||
        pathname.startsWith("/faq"),
      hasDropdown: "company" as const,
    },
  ];

  return (
    <header className="fixed top-4 sm:top-5 left-0 right-0 z-[100] px-3 sm:px-6 pointer-events-none flex justify-center">
      {/* Floating Pill Capsule Bar */}
      <div className="pointer-events-auto relative inline-flex items-center gap-1 sm:gap-1.5 p-1.5 sm:p-2 rounded-full bg-[#12141a]/95 backdrop-blur-2xl border border-white/12 shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_20px_rgba(212,163,66,0.08)] max-w-full">
        
        {/* Brand Emblem on Left */}
        <Link
          href="/"
          className="flex items-center gap-2 pl-2 sm:pl-3 pr-2 py-1 rounded-full hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
          aria-label="ARAVANTA TECH - Home"
        >
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-b from-[#ffffff] via-[#f4f4f6] to-[#d8dade] p-1 border border-brand-gold/60 shadow-sm flex items-center justify-center shrink-0">
            <Image
              src="/brand/icon.png"
              alt="Aravanta Tech"
              width={26}
              height={26}
              priority
              className="object-contain w-full h-full"
            />
          </div>
          <span className="font-extrabold text-xs sm:text-sm tracking-tight text-white hidden md:inline font-mono">
            ARAVANTA<span className="text-brand-gold ml-0.5">TECH</span>
          </span>
        </Link>

        {/* Divider */}
        <div className="hidden lg:block h-5 w-[1px] bg-white/12 mx-1" />

        {/* Desktop Navigation Links (Pill Stack) */}
        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isCurrent = item.isActive;
            const isMenuOpen = activeDropdown === item.hasDropdown;

            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.hasDropdown)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold",
                    isCurrent || isMenuOpen
                      ? "text-white font-semibold"
                      : "text-zinc-400 hover:text-white"
                  )}
                >
                  {/* Sliding Pill Active Background via layoutId */}
                  {isCurrent && (
                    <motion.div
                      layoutId="active-pill-bg"
                      className="absolute inset-0 rounded-full bg-[#272a33] border border-white/15 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Icon */}
                  <span className="relative z-10">
                    <Icon
                      className={cn(
                        "w-4 h-4 transition-colors",
                        isCurrent || isMenuOpen
                          ? "text-white"
                          : "text-zinc-400 group-hover:text-white"
                      )}
                    />
                  </span>

                  {/* Label */}
                  <span className="relative z-10 leading-none">{item.label}</span>

                  {/* Subtle chevron for items with dropdowns */}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={cn(
                        "relative z-10 w-3 h-3 text-zinc-400 transition-transform duration-200",
                        isMenuOpen && "rotate-180 text-white"
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown Flyout Card */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {isMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 pointer-events-auto gpu-accelerated"
                      >
                        <div
                          className="bg-[#0e1017]/95 border border-white/12 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(212,163,66,0.1)] backdrop-blur-2xl"
                          style={{
                            width:
                              item.hasDropdown === "services"
                                ? "440px"
                                : item.hasDropdown === "company"
                                ? "420px"
                                : "380px",
                          }}
                        >
                          {/* Dropdown Header */}
                          <div className="px-2 pb-2 mb-2 border-b border-white/10 flex items-center justify-between">
                            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-gold">
                              {item.hasDropdown === "services"
                                ? "Core Engineering Practices"
                                : item.hasDropdown === "solutions"
                                ? "Enterprise Solutions"
                                : "Aravanta Tech Resources"}
                            </span>
                            <Link
                              href={item.href}
                              className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 font-mono transition-colors"
                            >
                              Explore all <ArrowRight className="w-3 h-3 text-brand-gold" />
                            </Link>
                          </div>

                          {/* Dropdown Items List */}
                          <div className="space-y-1">
                            {(item.hasDropdown === "services"
                              ? servicesList
                              : item.hasDropdown === "solutions"
                              ? solutionsList
                              : companyList
                            ).map((subItem) => {
                              const SubIcon =
                                "icon" in subItem ? subItem.icon : Workflow;
                              const isSubActive = pathname === subItem.href;

                              return (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className={cn(
                                    "flex items-start gap-3 p-2 rounded-xl transition-all group",
                                    isSubActive
                                      ? "bg-white/10 text-brand-gold"
                                      : "hover:bg-white/5 text-zinc-300"
                                  )}
                                >
                                  <div className="w-7 h-7 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center text-brand-gold group-hover:border-brand-gold/40 group-hover:scale-105 transition-transform shrink-0 mt-0.5">
                                    <SubIcon className="w-3.5 h-3.5" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-xs font-semibold text-white group-hover:text-brand-gold transition-colors truncate">
                                      {subItem.title}
                                    </div>
                                    <div className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5 font-normal">
                                      {subItem.description}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>

        {/* Divider */}
        <div className="hidden lg:block h-5 w-[1px] bg-white/12 mx-1" />

        {/* CTA "Let's Talk" Button */}
        <Link
          href="/contact"
          className="relative inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold text-[#090a0d] bg-gradient-to-r from-[#d4a342] via-[#e5b85a] to-[#f3cc72] hover:brightness-110 shadow-[0_0_15px_rgba(212,163,66,0.35)] transition-all duration-200 select-none group shrink-0"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#090a0d] group-hover:rotate-12 transition-transform" />
          <span className="font-mono uppercase tracking-wider">Let's Talk</span>
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          className="lg:hidden p-1.5 sm:p-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-colors ml-1 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto fixed inset-x-3 top-20 z-50 rounded-3xl bg-[#0d0f15]/95 border border-white/15 p-5 shadow-2xl backdrop-blur-2xl max-h-[85vh] overflow-y-auto"
          >
            {/* Header info */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
              <span className="text-xs font-mono text-brand-gold uppercase tracking-wider font-semibold">
                ARAVANTA TECH NAVIGATION
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-full text-zinc-400 hover:text-white"
                aria-label="Close Navigation"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Pill items grid on mobile */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isCurrent = item.isActive;

                return (
                  <Link
                    key={`mobile-${item.id}`}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-2.5 px-3 py-2.5 rounded-2xl text-xs font-medium border transition-colors",
                      isCurrent
                        ? "bg-[#272a33] text-white border-white/20 font-semibold shadow-sm"
                        : "bg-white/5 text-zinc-300 border-white/5 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <Icon className={cn("w-4 h-4", isCurrent ? "text-white" : "text-brand-gold")} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Sub-sections quick links */}
            <div className="space-y-4 pt-2">
              <div>
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Key Practices
                </div>
                <div className="grid grid-cols-1 gap-1">
                  {servicesList.slice(0, 4).map((s) => (
                    <Link
                      key={`mob-serv-${s.href}`}
                      href={s.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-2 rounded-xl text-xs text-zinc-300 hover:bg-white/5 hover:text-white"
                    >
                      <span>{s.title}</span>
                      <ArrowRight className="w-3 h-3 text-brand-gold" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold text-[#090a0d] bg-gradient-to-r from-[#d4a342] to-[#f3cc72] shadow-lg shadow-brand-gold/20"
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="font-mono uppercase tracking-wider">Start a Project / Let's Talk</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
