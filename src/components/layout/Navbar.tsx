"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Layers,
  Workflow,
  Sparkles,
  Cloud,
  Building2,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Code2,
  Server,
  Cpu,
  ShieldCheck,
  FileText,
  Users,
  HelpCircle,
  FileCheck,
  Boxes,
  Activity,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// NAVIGATION CATEGORIES DATA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

type DropdownId = "explore" | "services" | "solutions" | "platform" | "resources" | "about";

interface DropdownItem {
  title: string;
  href: string;
  description: string;
  icon: React.ElementType;
  badge?: string;
}

const exploreList: DropdownItem[] = [
  {
    title: "About ARAVANTA TECH",
    href: "/about",
    description: "Enterprise cloud engineering, digital philosophy & 3 core pillars.",
    icon: Building2,
  },
  {
    title: "Technology Capabilities",
    href: "/technology",
    description: "Battle-tested primitives from high-speed runtime code to cloud.",
    icon: Layers,
  },
  {
    title: "Case Studies & Blueprints",
    href: "/case-studies",
    description: "Documented real-world enterprise engineering outcomes & architectures.",
    icon: FileText,
  },
  {
    title: "Industry Solutions",
    href: "/solutions",
    description: "Engineered solutions for FinTech, SaaS, Healthcare & Enterprise.",
    icon: Boxes,
  },
  {
    title: "Culture & Careers",
    href: "/careers",
    description: "How we solve high-stakes challenges and current open engineering roles.",
    icon: Users,
  },
  {
    title: "Frequently Asked Questions",
    href: "/faq",
    description: "Direct answers regarding our services, SLA benchmarks & CloudOS.",
    icon: HelpCircle,
  },
];

const servicesList: DropdownItem[] = [
  {
    title: "Cloud Solutions",
    href: "/services/cloud-solutions",
    description: "Multi-cloud architecture, zero-downtime migration & FinOps.",
    icon: Cloud,
  },
  {
    title: "Application Development",
    href: "/services/application-development",
    description: "Full-stack web, Next.js, TypeScript & high-concurrency APIs.",
    icon: Code2,
  },
  {
    title: "IT Infrastructure & SRE",
    href: "/services/it-infrastructure",
    description: "Predictable, automated compute fleets & bare-metal hypervisors.",
    icon: Server,
  },
  {
    title: "DevOps & Automation",
    href: "/services/devops-automation",
    description: "Zero-downtime CI/CD pipelines, Docker, Kubernetes & GitOps.",
    icon: Cpu,
  },
  {
    title: "Cybersecurity & Zero-Trust",
    href: "/services/cybersecurity",
    description: "Zero-trust IAM, dependency scanning & continuous compliance.",
    icon: ShieldCheck,
  },
  {
    title: "Digital Transformation",
    href: "/services/digital-transformation",
    description: "Legacy-system modernization and event-driven automation.",
    icon: Workflow,
  },
  {
    title: "IT Consulting & Architecture",
    href: "/services/it-consulting",
    description: "Unbiased technical architecture reviews & roadmaps.",
    icon: Compass,
  },
];

const solutionsList: DropdownItem[] = [
  {
    title: "Financial Services & FinTech",
    href: "/solutions#fintech",
    description: "Resilient transactional ledgers, microburst tuning & PCI-DSS compliance.",
    icon: Layers,
  },
  {
    title: "Enterprise SaaS Scale",
    href: "/solutions#enterprise-saas",
    description: "Multi-tenant tenant isolation, rapid release velocity & auto-scaling.",
    icon: Boxes,
  },
  {
    title: "Healthcare & Life Sciences",
    href: "/solutions#healthcare",
    description: "HIPAA-compliant data enclaves, cryptographic isolation & telemetry.",
    icon: ShieldCheck,
  },
  {
    title: "Enterprise Modernization",
    href: "/solutions#modernization",
    description: "Strangler-fig migration for monolithic architectures with zero downtime.",
    icon: Workflow,
  },
];

const platformList: DropdownItem[] = [
  {
    title: "Aravanta CloudOS Overview",
    href: "/cloudos",
    description: "The Unified Operating Environment for Intelligent Cloud Transformation.",
    icon: Cloud,
    badge: "Platform",
  },
  {
    title: "Architecture Explorer",
    href: "/cloudos#architecture",
    description: "Interactive 4-layer inspection from ingress policy to FinOps kernel.",
    icon: Layers,
  },
  {
    title: "Platform Roadmap",
    href: "/cloudos#roadmap",
    description: "Milestones from declarative CLI convergence to autonomous self-healing.",
    icon: Activity,
  },
  {
    title: "Request Briefing",
    href: "/contact?interest=CloudOS",
    description: "Schedule a dedicated technical briefing with our platform architects.",
    icon: Sparkles,
  },
];

const resourcesList: DropdownItem[] = [
  {
    title: "Architecture Blueprints",
    href: "/case-studies",
    description: "Documented real-world enterprise engineering outcomes & specs.",
    icon: FileText,
  },
  {
    title: "Technology Capabilities",
    href: "/technology",
    description: "Technical evaluation criteria and architectural primitives.",
    icon: Layers,
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
    description: "Contractual 99.999% availability benchmarks and MTTR matrices.",
    icon: FileCheck,
  },
  {
    title: "Compliance & Disclosure",
    href: "/compliance",
    description: "Safe harbor disclosures, audit attestations & corporate ethics.",
    icon: BookOpen,
  },
  {
    title: "Frequently Asked Questions",
    href: "/faq",
    description: "Direct answers regarding our services, SLA benchmarks & CloudOS.",
    icon: HelpCircle,
  },
];

const aboutList: DropdownItem[] = [
  {
    title: "About ARAVANTA TECH",
    href: "/about",
    description: "Our mission, engineering values & digital transformation philosophy.",
    icon: Building2,
  },
  {
    title: "Culture & Careers",
    href: "/careers",
    description: "How we solve high-stakes challenges and open roles.",
    icon: Users,
  },
  {
    title: "Trust & Security",
    href: "/security",
    description: "Zero-trust verification and cryptographic security.",
    icon: ShieldCheck,
  },
  {
    title: "Contact & Inquiries",
    href: "/contact",
    description: "Direct engineering contact for proposals and architecture audits.",
    icon: Sparkles,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownId | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownId | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll Progress Tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(1, Math.max(0, window.scrollY / totalScroll)));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Route change: close all menus
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Escape key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
    return () => {
      document.body.style.overflowY = "";
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (menu: DropdownId) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 220);
  };

  const handleTriggerClick = (e: React.MouseEvent, menu: DropdownId) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const handleTriggerKeyDown = (e: React.KeyboardEvent, menu: DropdownId) => {
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
      e.preventDefault();
      setActiveDropdown((prev) => (prev === menu ? null : menu));
    }
  };

  const navCategories: {
    id: DropdownId;
    label: string;
    href: string;
    items: DropdownItem[];
    headerTitle: string;
    exploreAllHref: string;
    widthClass: string;
    colsClass: string;
    isActive: boolean;
  }[] = [
    {
      id: "explore",
      label: "Explore",
      href: "/about",
      items: exploreList,
      headerTitle: "Explore Aravanta Tech",
      exploreAllHref: "/about",
      widthClass: "w-[420px]",
      colsClass: "grid-cols-1",
      isActive: pathname === "/" || pathname === "/about" || pathname === "/technology",
    },
    {
      id: "services",
      label: "Services",
      href: "/services",
      items: servicesList,
      headerTitle: "Core Engineering Practices",
      exploreAllHref: "/services",
      widthClass: "w-[560px]",
      colsClass: "grid-cols-2",
      isActive: pathname.startsWith("/services"),
    },
    {
      id: "solutions",
      label: "Solutions",
      href: "/solutions",
      items: solutionsList,
      headerTitle: "Engineered Solutions",
      exploreAllHref: "/solutions",
      widthClass: "w-[440px]",
      colsClass: "grid-cols-1",
      isActive: pathname.startsWith("/solutions"),
    },
    {
      id: "platform",
      label: "Platform",
      href: "/cloudos",
      items: platformList,
      headerTitle: "Aravanta CloudOS",
      exploreAllHref: "/cloudos",
      widthClass: "w-[440px]",
      colsClass: "grid-cols-1",
      isActive: pathname.startsWith("/cloudos"),
    },
    {
      id: "resources",
      label: "Resources",
      href: "/case-studies",
      items: resourcesList,
      headerTitle: "Architecture & Evidence",
      exploreAllHref: "/case-studies",
      widthClass: "w-[440px]",
      colsClass: "grid-cols-1",
      isActive:
        pathname.startsWith("/case-studies") ||
        pathname.startsWith("/security") ||
        pathname.startsWith("/sla") ||
        pathname.startsWith("/compliance") ||
        pathname.startsWith("/faq"),
    },
    {
      id: "about",
      label: "About",
      href: "/about",
      items: aboutList,
      headerTitle: "Company & Organization",
      exploreAllHref: "/about",
      widthClass: "w-[400px]",
      colsClass: "grid-cols-1",
      isActive: pathname.startsWith("/about") || pathname.startsWith("/careers"),
    },
  ];

  return (
    <header
      ref={navRef}
      className="fixed top-2.5 sm:top-5 left-0 right-0 z-[100] px-2 sm:px-6 pointer-events-none flex justify-center max-w-full"
    >
      {/* 
        Responsive Capsule Bar:
        - Mobile: Fits within 100% of viewport without overflowing, balanced spacing
        - Desktop: Centers as unified luxury capsule
      */}
      <div className="pointer-events-auto relative flex items-center justify-between lg:justify-center gap-1 sm:gap-1.5 p-1 sm:p-2 rounded-full bg-[#12141a]/95 backdrop-blur-2xl border border-white/12 shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_20px_rgba(212,163,66,0.08)] w-full sm:w-auto max-w-7xl">
        
        {/* Subtle Bottom Scroll Progress Line */}
        <div className="absolute inset-x-3 bottom-0 h-[2px] overflow-hidden rounded-full pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 via-[#d4a342] to-cyan-400 opacity-90 transition-all duration-100 ease-out"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Brand Emblem on Left */}
        <Link
          href="/"
          className="flex items-center gap-1.5 sm:gap-2 pl-1.5 sm:pl-3 pr-1 sm:pr-2 py-0.5 sm:py-1 rounded-full hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a342] shrink-0"
          aria-label="ARAVANTA TECH - Home"
        >
          <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-b from-[#ffffff] via-[#f4f4f6] to-[#d8dade] p-0.5 sm:p-1 border border-[#d4a342]/60 shadow-sm flex items-center justify-center shrink-0">
            <Image
              src="/brand/icon.png"
              alt="Aravanta Tech"
              width={24}
              height={24}
              priority
              className="object-contain w-full h-full"
            />
          </div>
          <span className="font-extrabold text-[11px] sm:text-sm tracking-tight text-white font-mono flex items-center">
            ARAVANTA<span className="text-[#d4a342] ml-0.5">TECH</span>
          </span>
        </Link>

        {/* Live Systems Nominal Micro-Badge (Desktop only) */}
        <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/8 text-[10px] font-mono text-zinc-300 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>99.999% SLA</span>
        </div>

        {/* Divider (Desktop only) */}
        <div className="hidden lg:block h-5 w-[1px] bg-white/12 mx-1 shrink-0" />

        {/* Desktop Navigation Categories */}
        <nav
          className="hidden lg:flex items-center gap-0.5"
          aria-label="Main Navigation"
        >
          {navCategories.map((cat) => {
            const isMenuOpen = activeDropdown === cat.id;
            const isCurrent = cat.isActive;

            return (
              <div
                key={cat.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(cat.id)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Trigger Button with full Click + Hover + Keyboard accessibility */}
                <button
                  type="button"
                  onClick={(e) => handleTriggerClick(e, cat.id)}
                  onKeyDown={(e) => handleTriggerKeyDown(e, cat.id)}
                  aria-haspopup="true"
                  aria-expanded={isMenuOpen}
                  aria-controls={`dropdown-${cat.id}`}
                  className={cn(
                    "relative flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a342]",
                    isCurrent || isMenuOpen
                      ? "text-white font-semibold"
                      : "text-zinc-400 hover:text-white"
                  )}
                >
                  {/* Sliding Pill Active Background */}
                  {isCurrent && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 rounded-full bg-[#242833] border border-white/15 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <span className="relative z-10 leading-none">{cat.label}</span>

                  <ChevronDown
                    className={cn(
                      "relative z-10 w-3 h-3 text-zinc-400 transition-transform duration-200",
                      isMenuOpen && "rotate-180 text-white"
                    )}
                  />
                </button>

                {/* Dropdown Flyout Card with Hover Bridge Buffer */}
                <AnimatePresence>
                  {isMenuOpen && (
                    <div
                      id={`dropdown-${cat.id}`}
                      role="menu"
                      aria-label={`${cat.label} Menu`}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-[110] pointer-events-auto"
                      onMouseEnter={() => handleMouseEnter(cat.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* Invisible Hover Bridge Buffer */}
                      <div className="absolute -top-3 inset-x-0 h-3" />

                      <motion.div
                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        className={cn(
                          "bg-[#0e1017]/95 border border-white/12 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.92),0_0_30px_rgba(212,163,66,0.12)] backdrop-blur-2xl max-h-[80vh] overflow-y-auto",
                          cat.widthClass
                        )}
                      >
                        {/* Dropdown Header */}
                        <div className="px-2 pb-2.5 mb-2.5 border-b border-white/10 flex items-center justify-between">
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#d4a342]">
                            {cat.headerTitle}
                          </span>
                          <Link
                            href={cat.exploreAllHref}
                            onClick={() => setActiveDropdown(null)}
                            className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 font-mono transition-colors"
                          >
                            Explore all <ArrowRight className="w-3 h-3 text-[#d4a342]" />
                          </Link>
                        </div>

                        {/* Dropdown Items Grid */}
                        <div className={cn("grid gap-1.5", cat.colsClass)}>
                          {cat.items.map((subItem) => {
                            const SubIcon = subItem.icon;
                            const isSubActive = pathname === subItem.href;

                            return (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                onClick={() => setActiveDropdown(null)}
                                role="menuitem"
                                className={cn(
                                  "flex items-start gap-3 p-2.5 rounded-xl transition-all group select-none",
                                  isSubActive
                                    ? "bg-white/10 text-[#d4a342]"
                                    : "hover:bg-white/5 text-zinc-300"
                                )}
                              >
                                <div className="w-7 h-7 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center text-[#d4a342] group-hover:border-[#d4a342]/40 group-hover:scale-105 transition-transform shrink-0 mt-0.5">
                                  <SubIcon className="w-3.5 h-3.5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-xs font-semibold text-white group-hover:text-[#d4a342] transition-colors truncate">
                                      {subItem.title}
                                    </span>
                                    {subItem.badge && (
                                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#d4a342]/15 text-[#d4a342] border border-[#d4a342]/30">
                                        {subItem.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5 font-normal">
                                    {subItem.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Divider (Desktop only) */}
        <div className="hidden lg:block h-5 w-[1px] bg-white/12 mx-1 shrink-0" />

        {/* Right Actions Cluster on Mobile & Desktop */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* CTA "Let's Talk" Button */}
          <Link
            href="/contact"
            className="relative inline-flex items-center gap-1 px-2.5 py-1 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold text-[#090a0d] bg-gradient-to-r from-[#d4a342] via-[#e5b85a] to-[#f3cc72] hover:brightness-110 shadow-[0_0_12px_rgba(212,163,66,0.3)] transition-all duration-200 select-none group shrink-0 active:scale-[0.98]"
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#090a0d] group-hover:rotate-12 transition-transform shrink-0" />
            <span className="font-mono uppercase tracking-wider whitespace-nowrap">Let's Talk</span>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            className="lg:hidden p-1 sm:p-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none shrink-0"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-[#d4a342]" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MOBILE DRAWER OVERLAY & BACKDROP
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 pointer-events-auto"
            />

            {/* Mobile Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-3 top-16 sm:top-20 max-w-lg mx-auto bg-[#0a0d14]/98 border border-white/15 rounded-3xl p-4 sm:p-5 shadow-[0_25px_60px_rgba(0,0,0,0.95)] backdrop-blur-3xl z-50 pointer-events-auto max-h-[82vh] overflow-y-auto"
            >
              {/* Header info */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                    ARAVANTA TECH NAVIGATION
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
                  SLA: 99.999%
                </span>
              </div>

              {/* Accordion Categories on Mobile */}
              <div className="space-y-2">
                {navCategories.map((cat) => {
                  const isExpanded = mobileExpanded === cat.id;

                  return (
                    <div
                      key={`mob-${cat.id}`}
                      className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setMobileExpanded((prev) => (prev === cat.id ? null : cat.id))
                        }
                        className="w-full flex items-center justify-between p-3.5 text-xs font-mono font-bold uppercase tracking-wider text-white text-left focus:outline-none"
                      >
                        <div className="flex items-center gap-2">
                          <span>{cat.label}</span>
                          <span className="text-[10px] text-zinc-500 font-normal">
                            ({cat.items.length})
                          </span>
                        </div>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 text-zinc-400 transition-transform duration-200",
                            isExpanded && "rotate-180 text-[#d4a342]"
                          )}
                        />
                      </button>

                      {isExpanded && (
                        <div className="px-3 pb-3 pt-1 space-y-1 border-t border-white/5">
                          <Link
                            href={cat.exploreAllHref}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-between p-2 rounded-xl text-xs font-mono text-[#d4a342] bg-[#d4a342]/10 mb-2"
                          >
                            <span>Explore All {cat.label}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          {cat.items.map((sub) => {
                            const SubIcon = sub.icon;
                            const isSubActive = pathname === sub.href;

                            return (
                              <Link
                                key={`mob-sub-${sub.href}`}
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={cn(
                                  "flex items-start gap-2.5 p-2 rounded-xl text-xs transition-colors",
                                  isSubActive
                                    ? "bg-white/10 text-[#d4a342] font-semibold"
                                    : "text-zinc-300 hover:text-white hover:bg-white/5"
                                )}
                              >
                                <SubIcon className="w-4 h-4 text-[#d4a342] shrink-0 mt-0.5" />
                                <div className="flex-1 min-w-0">
                                  <div className="text-xs font-medium text-white truncate">
                                    {sub.title}
                                  </div>
                                  <div className="text-[10px] text-zinc-400 line-clamp-1">
                                    {sub.description}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Mobile Footer CTA */}
              <div className="pt-4 mt-3 border-t border-white/10 space-y-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#d4a342] via-[#e5b85a] to-[#f3cc72] text-[#090a0d] font-bold text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-lg"
                >
                  <Sparkles className="w-4 h-4 text-[#090a0d]" />
                  <span>Let's Talk — Start a Project</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
