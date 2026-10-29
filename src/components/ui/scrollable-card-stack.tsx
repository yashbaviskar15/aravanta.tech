"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const SCROLL_TIMEOUT_OFFSET = 80;
const MIN_SCROLL_INTERVAL = 250;
const TOUCH_SCROLL_THRESHOLD = 40;
const SCALE_FACTOR = 0.06;
const MIN_SCALE = 0.2;
const MAX_SCALE = 2;
const HOVER_SCALE_MULTIPLIER = 1.02;
const CARD_PADDING = 90;

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

/**
 * Robust Visual Renderer for Card Stack Media
 * Handles raw SVGs, data URIs, and standard image files with fallback
 */
function CardVisualMedia({ item }: { item: CardItem }) {
  const [imgError, setImgError] = useState(false);
  const rawImage = item.image || "";

  // Check if image contains inline SVG or is an SVG data URI
  const isSvg =
    rawImage.includes("<svg") ||
    rawImage.startsWith("data:image/svg+xml");

  if (isSvg) {
    let svgMarkup = rawImage;
    if (svgMarkup.startsWith("data:image/svg+xml;utf8,")) {
      svgMarkup = svgMarkup.replace("data:image/svg+xml;utf8,", "");
    } else if (svgMarkup.startsWith("data:image/svg+xml;charset=utf-8,")) {
      try {
        svgMarkup = decodeURIComponent(
          svgMarkup.replace("data:image/svg+xml;charset=utf-8,", "")
        );
      } catch {
        // use markup as-is
      }
    }

    if (svgMarkup.includes("<svg")) {
      return (
        <div
          className="absolute inset-0 h-full w-full flex items-center justify-center overflow-hidden [&>svg]:w-full [&>svg]:h-full [&>svg]:object-cover pointer-events-none select-none"
          dangerouslySetInnerHTML={{ __html: svgMarkup }}
        />
      );
    }
  }

  // Fallback for standard images
  if (imgError || !rawImage) {
    return (
      <div className="absolute inset-0 h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0c101a] via-[#121828] to-[#07090f] p-6 text-center select-none">
        <div className="w-10 h-10 rounded-xl bg-[#d4a342]/10 border border-[#d4a342]/30 flex items-center justify-center mb-2">
          <span className="text-[#d4a342] font-mono font-bold text-sm">
            {item.category?.slice(0, 3) || "SYS"}
          </span>
        </div>
        <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
          {item.name}
        </span>
      </div>
    );
  }

  return (
    <img
      alt={item.imageAlt ?? `${item.name} visual preview`}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-105"
      decoding="async"
      draggable={false}
      onError={() => setImgError(true)}
      src={rawImage}
    />
  );
}

export const ScrollableCardStack: React.FC<ScrollableCardStackProps> = ({
  items,
  cardHeight = 490,
  cardWidth = "w-[94vw] max-w-[620px]",
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

  // Visual depth stacking constants
  const FRAME_OFFSET = -30;
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

  const goToCard = useCallback(
    (index: number) => {
      if (index === currentIndex || isScrolling) return;
      const target = clamp(index, [0, maxIndex]);
      setIsScrolling(true);
      setCurrentIndex(target);
      scrollY.set(target * SNAP_DISTANCE);
      setTimeout(() => {
        setIsScrolling(false);
      }, transitionDuration + SCROLL_TIMEOUT_OFFSET);
    },
    [currentIndex, maxIndex, isScrolling, scrollY, transitionDuration, clamp]
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
          goToCard(0);
          break;
        }
        case "End": {
          e.preventDefault();
          goToCard(maxIndex);
          break;
        }
      }
    },
    [isScrolling, scrollToCard, goToCard, maxIndex]
  );

  // Touch & Swipe handling
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);
  const touchMoved = useRef(false);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartX.current = e.touches[0].clientX;
    touchMoved.current = false;
    setIsDragging(true);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging || isScrolling) return;

      const currentY = e.touches[0].clientY;
      const currentX = e.touches[0].clientX;
      const deltaY = touchStartY.current - currentY;
      const deltaX = touchStartX.current - currentX;

      // Prefer horizontal or vertical swipe depending on user movement
      const dominantDelta = Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : deltaY;

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
      aria-label="Interactive architecture cards"
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
        }}
        tabIndex={0}
      >
        {items.map((item, i) => {
          const transform = getCardTransform(i);
          const isActive = i === currentIndex;
          const isNext = i === currentIndex + 1;
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
                "absolute top-1/2 left-1/2 overflow-hidden rounded-2xl border transition-all",
                cardWidth,
                isActive
                  ? "border-[#d4a342]/60 shadow-[0_24px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(212,163,66,0.18)] ring-1 ring-[#d4a342]/30"
                  : "border-white/10 shadow-lg cursor-pointer hover:border-white/25"
              )}
              data-active={isActive}
              initial={false}
              onClick={(e) => {
                // Clicking a background card brings it forward
                if (!isActive) {
                  e.stopPropagation();
                  goToCard(i);
                }
              }}
              onBlur={() => setHoveredIndex(null)}
              onFocus={() => isActive && setHoveredIndex(i)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                borderWidth: "1px",
                filter: `blur(${transform.blur}px)`,
                height: `${cardHeight}px`,
                opacity: transform.opacity,
                pointerEvents: i < currentIndex ? "none" : "auto",
                transformOrigin: "center center",
                transitionDuration: shouldReduceMotion ? "0ms" : "240ms",
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
                      damping: 24,
                      duration: 0.3,
                      mass: 0.6,
                      stiffness: 260,
                      type: "spring" as const,
                    }
              }
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: transform.scale * (isActive ? HOVER_SCALE_MULTIPLIER : 1.01),
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
                  "flex h-full w-full flex-col justify-between rounded-2xl bg-gradient-to-b from-[#10141f] via-[#0b0e16] to-[#07090e] p-5 sm:p-6 relative overflow-hidden transition-all duration-200",
                  isHovered && "brightness-105"
                )}
              >
                {/* Visual Top Bar / Image Area */}
                <div className="relative w-full h-[160px] sm:h-[185px] rounded-xl overflow-hidden border border-white/10 bg-black/50 mb-3 group/image shrink-0">
                  {/* Subtle Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e16] via-transparent to-transparent z-10 pointer-events-none" />

                  {/* Render Image or SVG Blueprint */}
                  <CardVisualMedia item={item} />

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

                  {/* Metric Pill */}
                  {item.metrics && (
                    <div className="absolute bottom-3 right-3 z-20 px-3 py-1 rounded-lg bg-[#05070a]/90 border border-white/15 backdrop-blur-md text-right">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                        {item.metrics.label}
                      </div>
                      <div className="text-xs sm:text-sm font-bold font-mono text-white">
                        {item.metrics.value}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Main Info */}
                <div className="flex-1 flex flex-col justify-between min-h-0">
                  <div className="space-y-1.5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug line-clamp-1">
                        {item.name}
                      </h3>
                      {item.handle && (
                        <span className="text-xs font-mono text-zinc-400 shrink-0 mt-0.5">
                          {item.handle}
                        </span>
                      )}
                    </div>

                    {item.tagline && (
                      <p className="text-xs sm:text-sm font-medium text-[#d4a342] line-clamp-1">
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
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2 mt-2 shrink-0">
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

                    {/* CTA / Practice Link */}
                    {item.href ? (
                      <a
                        aria-label={`Explore ${item.name}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold font-mono text-[#d4a342] bg-[#d4a342]/10 hover:bg-[#d4a342]/20 border border-[#d4a342]/40 transition-colors shrink-0"
                        href={item.href}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {item.avatar && (
                          <img
                            alt=""
                            className="h-3.5 w-3.5 rounded-full"
                            src={item.avatar}
                          />
                        )}
                        <span>{item.ctaText ?? "Explore Practice"}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Navigation Dots, Buttons and Chapter Cue */}
        <div
          aria-label="Card stack navigation"
          className="absolute -bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-3 sm:gap-4 z-30"
          role="tablist"
        >
          {showControls && (
            <button
              aria-label="Previous card"
              className="p-2 rounded-full bg-black/70 hover:bg-[#d4a342]/20 border border-white/20 hover:border-[#d4a342]/60 text-zinc-300 hover:text-[#d4a342] transition-all disabled:opacity-30 disabled:pointer-events-none shadow-lg backdrop-blur-md"
              disabled={currentIndex === 0 || isScrolling}
              onClick={(e) => {
                e.stopPropagation();
                scrollToCard(-1);
              }}
              type="button"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}

          {/* Numbered Dots / Pills */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 border border-white/15 backdrop-blur-md shadow-xl">
            {Array.from({ length: totalItems }, (_, i) => (
              <motion.button
                key={`scrollable-indicator-${items[i]?.id || i}`}
                aria-label={`Go to card ${i + 1} of ${totalItems}`}
                aria-selected={i === currentIndex}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300 focus:outline-none flex items-center justify-center font-mono text-[9px] font-bold",
                  i === currentIndex
                    ? "w-8 bg-[#d4a342] text-black shadow-[0_0_12px_rgba(212,163,66,0.8)]"
                    : "w-2.5 bg-zinc-600 hover:bg-zinc-400"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  goToCard(i);
                }}
                role="tab"
                type="button"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                {i === currentIndex ? `0${i + 1}` : ""}
              </motion.button>
            ))}
          </div>

          {showControls && (
            <button
              aria-label="Next card"
              className="p-2 rounded-full bg-black/70 hover:bg-[#d4a342]/20 border border-white/20 hover:border-[#d4a342]/60 text-zinc-300 hover:text-[#d4a342] transition-all disabled:opacity-30 disabled:pointer-events-none shadow-lg backdrop-blur-md"
              disabled={currentIndex === maxIndex || isScrolling}
              onClick={(e) => {
                e.stopPropagation();
                scrollToCard(1);
              }}
              type="button"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Screen Reader instructions */}
        <div aria-live="polite" className="sr-only">
          {`Card ${currentIndex + 1} of ${totalItems} selected. Click navigation buttons or dots to change cards.`}
        </div>
      </div>
    </section>
  );
};

export default ScrollableCardStack;
