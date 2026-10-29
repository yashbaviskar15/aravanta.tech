"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const SCROLL_TIMEOUT_OFFSET = 100;
const MIN_SCROLL_INTERVAL = 300;
const SCROLL_THRESHOLD = 20;
const TOUCH_SCROLL_THRESHOLD = 60;
const SCALE_FACTOR = 0.07;
const MIN_SCALE = 0.2;
const MAX_SCALE = 2;
const HOVER_SCALE_MULTIPLIER = 1.02;
const CARD_PADDING = 110;

export interface CardItem {
  id: string;
  name: string;
  handle?: string;
  href?: string;
  image: string;
  imageAlt?: string;
  avatar?: string;
  category?: string;
  tagline?: string;
  description?: string;
  badge?: string;
  metrics?: { label: string; value: string };
  tags?: string[];
  ctaText?: string;
}

export interface ScrollableCardStackProps {
  items: CardItem[];
  cardHeight?: number;
  cardWidth?: string;
  perspective?: number;
  transitionDuration?: number;
  className?: string;
  showControls?: boolean;
}

export const ScrollableCardStack: React.FC<ScrollableCardStackProps> = ({
  items,
  cardHeight = 420,
  cardWidth = "w-[92vw] max-w-[620px]",
  perspective = 1100,
  transitionDuration = 220,
  className,
  showControls = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollY = useMotionValue(0);
  const lastScrollTime = useRef(0);
  const shouldReduceMotion = useReducedMotion();

  const totalItems = items.length;
  const maxIndex = Math.max(0, totalItems - 1);

  // Constants for visual depth stacking
  const FRAME_OFFSET = -28;
  const FRAMES_VISIBLE_LENGTH = 3;
  const SNAP_DISTANCE = 50;

  const clamp = useCallback(
    (val: number, [min, max]: [number, number]): number =>
      Math.min(Math.max(val, min), max),
    []
  );

  const scrollToCard = useCallback(
    (direction: 1 | -1) => {
      if (isScrolling) return;

      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTime.current;

      if (timeSinceLastScroll < MIN_SCROLL_INTERVAL) return;

      const newIndex = clamp(currentIndex + direction, [0, maxIndex]);

      if (newIndex !== currentIndex) {
        lastScrollTime.current = now;
        setIsScrolling(true);
        setCurrentIndex(newIndex);
        scrollY.set(newIndex * SNAP_DISTANCE);

        setTimeout(() => {
          setIsScrolling(false);
        }, transitionDuration + SCROLL_TIMEOUT_OFFSET);
      }
    },
    [currentIndex, maxIndex, scrollY, isScrolling, transitionDuration, clamp]
  );

  const handleScroll = useCallback(
    (deltaY: number) => {
      if (isDragging || isScrolling) return;
      if (Math.abs(deltaY) < SCROLL_THRESHOLD) return;

      const scrollDirection = deltaY > 0 ? 1 : -1;
      scrollToCard(scrollDirection);
    },
    [isDragging, isScrolling, scrollToCard]
  );

  // Wheel events - allow natural page scroll when at boundaries
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      const isAtBottom = currentIndex === maxIndex && e.deltaY > 0;
      const isAtTop = currentIndex === 0 && e.deltaY < 0;

      if (!isAtBottom && !isAtTop) {
        e.preventDefault();
        handleScroll(e.deltaY);
      }
    },
    [currentIndex, maxIndex, handleScroll]
  );

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (isScrolling) return;

      switch (e.key) {
        case "ArrowUp":
        case "ArrowLeft": {
          e.preventDefault();
          scrollToCard(-1);
          break;
        }
        case "ArrowDown":
        case "ArrowRight": {
          e.preventDefault();
          scrollToCard(1);
          break;
        }
        case "Home": {
          e.preventDefault();
          if (currentIndex !== 0) {
            setIsScrolling(true);
            setCurrentIndex(0);
            scrollY.set(0);
            setTimeout(() => {
              setIsScrolling(false);
            }, transitionDuration + SCROLL_TIMEOUT_OFFSET);
          }
          break;
        }
        case "End": {
          e.preventDefault();
          if (currentIndex !== maxIndex) {
            setIsScrolling(true);
            setCurrentIndex(maxIndex);
            scrollY.set(maxIndex * SNAP_DISTANCE);
            setTimeout(() => {
              setIsScrolling(false);
            }, transitionDuration + SCROLL_TIMEOUT_OFFSET);
          }
          break;
        }
      }
    },
    [currentIndex, maxIndex, scrollY, isScrolling, scrollToCard, transitionDuration]
  );

  // Touch handling
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);
  const touchMoved = useRef(false);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;
      touchMoved.current = false;
      setIsDragging(true);
    },
    []
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging || isScrolling) return;

      const currentY = e.touches[0].clientY;
      const currentX = e.touches[0].clientX;
      const deltaY = touchStartY.current - currentY;
      const deltaX = touchStartX.current - currentX;

      const dominantDelta = Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;

      if (Math.abs(dominantDelta) > TOUCH_SCROLL_THRESHOLD && !touchMoved.current) {
        const scrollDirection = dominantDelta > 0 ? 1 : -1;
        scrollToCard(scrollDirection);
        touchMoved.current = true;
      }
    },
    [isDragging, isScrolling, scrollToCard]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    touchMoved.current = false;
  }, []);

  // Set up event listeners
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  useEffect(() => {
    if (!isDragging) {
      scrollY.set(currentIndex * SNAP_DISTANCE);
    }
  }, [currentIndex, isDragging, scrollY]);

  // Card transform calculations
  const getCardTransform = useCallback(
    (index: number) => {
      const offsetIndex = index - currentIndex;
      const isBehindCurrent = currentIndex > index;
      const blur = !shouldReduceMotion && isBehindCurrent ? 3 : 0;
      const opacity = currentIndex > index ? 0 : 1;
      const scale = shouldReduceMotion
        ? 1
        : clamp(1 - offsetIndex * SCALE_FACTOR, [MIN_SCALE, MAX_SCALE]);

      const y = shouldReduceMotion
        ? 0
        : clamp(offsetIndex * FRAME_OFFSET, [
            FRAME_OFFSET * FRAMES_VISIBLE_LENGTH,
            Number.POSITIVE_INFINITY,
          ]);

      const zIndex = items.length - index;

      return {
        blur,
        opacity,
        scale,
        y,
        zIndex,
      };
    },
    [currentIndex, items.length, clamp, shouldReduceMotion]
  );

  return (
    <section
      aria-atomic="true"
      aria-label="Scrollable card stack"
      aria-live="polite"
      className={cn("relative mx-auto h-fit w-full max-w-4xl select-none", className)}
    >
      <div
        aria-label="Scrollable card container"
        className="relative h-full w-full outline-none"
        onKeyDown={handleKeyDown}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
        ref={containerRef}
        role="region"
        style={{
          minHeight: `${cardHeight + CARD_PADDING}px`,
          perspective: `${perspective}px`,
          perspectiveOrigin: "center 55%",
          touchAction: "pan-y",
        }}
        tabIndex={0}
      >
        {items.map((item, i) => {
          const transform = getCardTransform(i);
          const isActive = i === currentIndex;
          const isHovered = hoveredIndex === i;

          return (
            <motion.div
              key={`scrollable-card-${item.id}`}
              animate={
                shouldReduceMotion
                  ? { x: "-50%", y: "-50%" }
                  : {
                      scale: transform.scale,
                      x: "-50%",
                      y: `calc(-50% + ${transform.y}px)`,
                    }
              }
              aria-hidden={!isActive}
              className={cn(
                "absolute top-1/2 left-1/2 overflow-hidden rounded-2xl border transition-colors",
                cardWidth,
                isActive
                  ? "border-[#d4a342]/50 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(212,163,66,0.15)] ring-1 ring-[#d4a342]/20"
                  : "border-white/10 shadow-lg"
              )}
              data-active={isActive}
              initial={false}
              onBlur={() => setHoveredIndex(null)}
              onFocus={() => isActive && setHoveredIndex(i)}
              onMouseEnter={() => isActive && setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                borderWidth: "1px",
                filter: `blur(${transform.blur}px)`,
                height: `${cardHeight}px`,
                opacity: transform.opacity,
                pointerEvents: isActive ? "auto" : "none",
                transformOrigin: "center center",
                transitionDuration: shouldReduceMotion ? "0ms" : "220ms",
                transitionProperty: shouldReduceMotion
                  ? "none"
                  : "opacity, filter, border-color",
                transitionTimingFunction: "cubic-bezier(0.645, 0.045, 0.355, 1)",
                willChange: shouldReduceMotion
                  ? undefined
                  : "opacity, filter, transform",
                zIndex: transform.zIndex,
              }}
              tabIndex={isActive ? 0 : -1}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      damping: 22,
                      duration: 0.28,
                      mass: 0.6,
                      stiffness: 260,
                      type: "spring" as const,
                    }
              }
              whileHover={
                shouldReduceMotion || !isActive
                  ? {}
                  : {
                      scale: transform.scale * HOVER_SCALE_MULTIPLIER,
                      transition: {
                        damping: 22,
                        duration: 0.25,
                        mass: 0.5,
                        stiffness: 260,
                        type: "spring" as const,
                      },
                    }
              }
            >
              {/* Card Container */}
              <div
                className={cn(
                  "flex h-full w-full flex-col justify-between rounded-2xl bg-gradient-to-b from-[#10141f] via-[#0b0e16] to-[#07090e] p-6 sm:p-7 relative overflow-hidden transition-all duration-200",
                  isHovered && "brightness-105"
                )}
              >
                {/* Visual Top Bar / Image Area */}
                <div className="relative w-full h-[180px] sm:h-[210px] rounded-xl overflow-hidden border border-white/10 bg-black/40 mb-4 group/image">
                  {/* Subtle Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e16] via-transparent to-transparent z-10" />

                  {/* Image */}
                  <img
                    alt={item.imageAlt ?? `${item.name} visual preview`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-105"
                    decoding="async"
                    draggable={false}
                    src={item.image}
                  />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
                    {item.category && (
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold tracking-wider uppercase bg-[#05070a]/90 text-[#d4a342] border border-[#d4a342]/40 backdrop-blur-md">
                        {item.category}
                      </span>
                    )}
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono text-cyan-300 bg-cyan-950/80 border border-cyan-500/30 backdrop-blur-md">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Metric Pill if present */}
                  {item.metrics && (
                    <div className="absolute bottom-3 right-3 z-20 px-3 py-1 rounded-lg bg-[#05070a]/90 border border-white/15 backdrop-blur-md text-right">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                        {item.metrics.label}
                      </div>
                      <div className="text-sm font-bold font-mono text-white">
                        {item.metrics.value}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Main Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                        {item.name}
                      </h3>
                      {item.handle && (
                        <span className="text-xs font-mono text-zinc-400 shrink-0 mt-0.5">
                          {item.handle}
                        </span>
                      )}
                    </div>

                    {item.tagline && (
                      <p className="text-xs sm:text-sm font-medium text-[#d4a342]">
                        {item.tagline}
                      </p>
                    )}

                    {item.description && (
                      <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Tags & Action Link Footer */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2 mt-auto">
                    {/* Tags */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {item.tags?.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={`tag-${item.id}-${tIdx}`}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-300 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA / Profile Link */}
                    {item.href ? (
                      <a
                        aria-label={`Explore ${item.name}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold font-mono text-[#d4a342] bg-[#d4a342]/10 hover:bg-[#d4a342]/20 border border-[#d4a342]/30 transition-colors"
                        href={item.href}
                      >
                        {item.avatar && (
                          <img
                            alt={`${item.name} avatar`}
                            className="h-4 w-4 rounded-full"
                            src={item.avatar}
                          />
                        )}
                        <span>{item.ctaText ?? "Inspect Architecture"}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Navigation Dots and Controls */}
        <div
          aria-label="Card stack navigation"
          className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-3"
          style={{ zIndex: items.length + 2 }}
          role="tablist"
        >
          {showControls && (
            <button
              aria-label="Previous card"
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-zinc-300 hover:text-white transition-colors disabled:opacity-30 disabled:pointer-events-none"
              disabled={currentIndex === 0 || isScrolling}
              onClick={() => scrollToCard(-1)}
              type="button"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}

          {/* Dots */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
            {Array.from({ length: totalItems }, (_, i) => (
              <motion.button
                key={`scrollable-indicator-${items[i]?.id || i}`}
                aria-label={`Go to card ${i + 1} of ${totalItems}`}
                aria-selected={i === currentIndex}
                className={cn(
                  "h-2 rounded-full transition-all duration-200 focus:outline-none",
                  i === currentIndex
                    ? "w-6 bg-[#d4a342] shadow-[0_0_10px_rgba(212,163,66,0.6)]"
                    : "w-2 bg-zinc-600 hover:bg-zinc-400"
                )}
                onClick={() => {
                  if (i !== currentIndex && !isScrolling) {
                    setIsScrolling(true);
                    setCurrentIndex(i);
                    scrollY.set(i * SNAP_DISTANCE);
                    setTimeout(() => {
                      setIsScrolling(false);
                    }, transitionDuration + SCROLL_TIMEOUT_OFFSET);
                  }
                }}
                role="tab"
                type="button"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {showControls && (
            <button
              aria-label="Next card"
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-zinc-300 hover:text-white transition-colors disabled:opacity-30 disabled:pointer-events-none"
              disabled={currentIndex === maxIndex || isScrolling}
              onClick={() => scrollToCard(1)}
              type="button"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Screen Reader instructions */}
        <div aria-live="polite" className="sr-only">
          {`Card ${currentIndex + 1} of ${totalItems} selected. Use arrow keys, mouse wheel, or click the navigation dots.`}
        </div>
      </div>
    </section>
  );
};

export default ScrollableCardStack;
