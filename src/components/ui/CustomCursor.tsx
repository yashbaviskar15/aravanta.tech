"use client";

import React, { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on pointer devices that support hover (exclude touchscreens/phones)
    const hasFinePointer = window.matchMedia("(pointer: fine) and (hover: hover)").matches;
    if (!hasFinePointer) return;

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          "a, button, input, textarea, select, [role='button'], .cursor-pointer, .interactive-card"
        );
        setIsHovered(!!interactive);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Smooth animation loop for trailing ring
    const render = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      if (ringRef.current) {
        // Smooth lerp damping for trailing ring (inertial follower)
        ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
        ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isVisible]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        className={`fixed -top-1 -left-1 w-2 h-2 rounded-full transition-transform duration-100 ${
          isHovered
            ? "bg-[#fce8a6] scale-75 opacity-90"
            : "bg-brand-gold shadow-[0_0_8px_#d4a342]"
        }`}
        style={{ willChange: "transform" }}
      />

      {/* Trailing Inertial Fluid Halo Ring */}
      <div
        ref={ringRef}
        className={`fixed -top-4 -left-4 w-8 h-8 rounded-full border transition-all duration-200 ease-out flex items-center justify-center ${
          isClicked
            ? "scale-75 border-brand-gold bg-brand-gold/20"
            : isHovered
            ? "scale-175 border-brand-gold/80 bg-brand-gold/10 shadow-[0_0_20px_rgba(212,163,66,0.35)]"
            : "scale-100 border-brand-gold/30 bg-transparent"
        }`}
        style={{ willChange: "transform" }}
      >
        {isHovered && (
          <div className="w-1 h-1 rounded-full bg-brand-gold animate-ping opacity-60" />
        )}
      </div>
    </div>
  );
}

export default CustomCursor;
