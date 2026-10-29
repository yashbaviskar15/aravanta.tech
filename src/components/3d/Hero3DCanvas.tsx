"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  Terminal,
  RotateCw,
  Eye,
  Shield,
  Cpu,
  Activity,
  Layers,
  ArrowRight,
  Maximize2,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface ArchitectureNode {
  id: number;
  label: string;
  category: string;
  x: number;
  y: number;
  z: number;
  metric: string;
  status: string;
  description: string;
  color: string;
}

const NODES: ArchitectureNode[] = [
  {
    id: 0,
    label: "Aravanta CloudOS Core",
    category: "ORCHESTRATION ENGINE",
    x: 0,
    y: 0,
    z: 0,
    metric: "DECLARATIVE SPEC 1.0",
    status: "ACTIVE STATE MESH",
    description: "Autonomous state convergence, continuous drift detection, and zero-trust policy enforcement across multi-cloud infrastructure.",
    color: "#d4a342",
  },
  {
    id: 1,
    label: "Edge Ingress & Global CDN",
    category: "NETWORK PERIMETER",
    x: 0,
    y: -95,
    z: 15,
    metric: "<14ms AVG LATENCY",
    status: "ANYCAST ROUTED",
    description: "Global low-latency edge routing with automated TLS termination, rate-limiting, and DDoS shield protection.",
    color: "#f3cc72",
  },
  {
    id: 2,
    label: "Zero-Trust IAM & Secrets Vault",
    category: "IDENTITY & CRYPTOGRAPHY",
    x: -95,
    y: 20,
    z: 60,
    metric: "EPHEMERAL TOKENS",
    status: "LEAST-PRIVILEGE",
    description: "Hardware-grade cryptographic key management, short-lived mutual TLS credentials, and automated IAM policy pruning.",
    color: "#d4a342",
  },
  {
    id: 3,
    label: "Container & Compute Mesh",
    category: "WORKLOAD RUNTIME",
    x: 95,
    y: 20,
    z: 60,
    metric: "MULTI-AZ CLUSTERING",
    status: "AUTOSCALED",
    description: "High-density container orchestration, isolated tenant namespaces, and self-healing microservice execution.",
    color: "#e5e7eb",
  },
  {
    id: 4,
    label: "Telemetry & FinOps Engine",
    category: "OBSERVABILITY & COSTS",
    x: 0,
    y: 90,
    z: -30,
    metric: "REAL-TIME ATTRIBUTION",
    status: "OPTIMIZED SPEND",
    description: "Centralized metric aggregation, automated cost anomaly detection, and systematic cloud resource right-sizing.",
    color: "#38bdf8",
  },
];

const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [1, 2],
  [1, 3],
  [2, 4],
  [3, 4],
];

export function Hero3DCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [activeNode, setActiveNode] = useState<ArchitectureNode>(NODES[0]);
  const [hoveredNodeId, setHoveredNodeId] = useState<number | null>(null);
  const [isRotating, setIsRotating] = useState(true);

  const anglesRef = useRef({ x: 0.2, y: -0.3 });
  const targetAnglesRef = useRef({ x: 0.2, y: -0.3 });
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const projectedNodesRef = useRef<{ id: number; x2d: number; y2d: number; radius: number }[]>([]);
  const packetRef = useRef(0);

  const handleReset = () => {
    targetAnglesRef.current = { x: 0.2, y: -0.3 };
    setActiveNode(NODES[0]);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let prefersReducedMotion = false;
    if (typeof window !== "undefined") {
      prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }

    const handleResize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const onPointerDown = (e: PointerEvent) => {
      isDraggingRef.current = true;
      dragStartRef.current = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      if (isDraggingRef.current) {
        const dx = e.clientX - dragStartRef.current.x;
        const dy = e.clientY - dragStartRef.current.y;
        dragStartRef.current = { x: e.clientX, y: e.clientY };
        targetAnglesRef.current.y += dx * 0.009;
        targetAnglesRef.current.x += dy * 0.009;
      } else {
        let found: number | null = null;
        for (const p of projectedNodesRef.current) {
          const dist = Math.hypot(p.x2d - clientX, p.y2d - clientY);
          if (dist < p.radius + 12) {
            found = p.id;
            break;
          }
        }
        setHoveredNodeId(found);
        canvas.style.cursor = found !== null ? "pointer" : "grab";
      }
    };

    const onPointerUp = () => {
      isDraggingRef.current = false;
    };

    const onClick = () => {
      if (hoveredNodeId !== null) {
        const n = NODES.find((item) => item.id === hoveredNodeId);
        if (n) setActiveNode(n);
      }
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("click", onClick);

    // Render loop
    const render = () => {
      if (document.hidden) {
        animId = requestAnimationFrame(render);
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const centerX = width / 2;
      const centerY = height / 2;
      const focalLength = Math.min(width, height) * 0.95;
      const cameraDist = 380;

      if (!isDraggingRef.current && isRotating && !prefersReducedMotion) {
        targetAnglesRef.current.y += 0.004;
      }

      anglesRef.current.x += (targetAnglesRef.current.x - anglesRef.current.x) * 0.08;
      anglesRef.current.y += (targetAnglesRef.current.y - anglesRef.current.y) * 0.08;

      const cosX = Math.cos(anglesRef.current.x);
      const sinX = Math.sin(anglesRef.current.x);
      const cosY = Math.cos(anglesRef.current.y);
      const sinY = Math.sin(anglesRef.current.y);

      ctx.clearRect(0, 0, width, height);

      // Background volumetric ambient gradient
      const bgGrad = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, Math.min(width, height) * 0.6);
      bgGrad.addColorStop(0, "rgba(212, 163, 66, 0.08)");
      bgGrad.addColorStop(0.6, "rgba(17, 18, 24, 0.04)");
      bgGrad.addColorStop(1, "rgba(9, 10, 13, 0)");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Project nodes to 2D
      const projected = NODES.map((node) => {
        const x1 = node.x * cosY - node.z * sinY;
        const z1 = node.z * cosY + node.x * sinY;
        const y2 = node.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + node.y * sinX;

        const scale = focalLength / (cameraDist + z2);
        const x2d = centerX + x1 * scale;
        const y2d = centerY + y2 * scale;
        const radius = Math.max(6, (node.id === 0 ? 15 : 10) * scale);

        return {
          id: node.id,
          x2d,
          y2d,
          radius,
          z: z2,
          scale,
        };
      });

      projectedNodesRef.current = projected;

      // Draw 3D orbital guide ring around core
      ctx.save();
      ctx.beginPath();
      const ringRadius = 110 * (focalLength / cameraDist);
      ctx.ellipse(centerX, centerY, ringRadius, ringRadius * 0.35, anglesRef.current.y, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(212, 163, 66, 0.15)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.restore();

      // Draw Edges
      EDGES.forEach(([iA, iB]) => {
        const pA = projected[iA];
        const pB = projected[iB];
        if (!pA || !pB) return;

        const isCurrent = iA === activeNode.id || iB === activeNode.id;
        const edgeAlpha = isCurrent ? 0.75 : 0.22;

        ctx.beginPath();
        ctx.moveTo(pA.x2d, pA.y2d);
        ctx.lineTo(pB.x2d, pB.y2d);
        ctx.strokeStyle = isCurrent ? `rgba(212, 163, 66, ${edgeAlpha})` : `rgba(160, 165, 185, ${edgeAlpha})`;
        ctx.lineWidth = isCurrent ? 2 : 1;
        ctx.stroke();

        // Traveling light pulse
        if (isCurrent && !prefersReducedMotion) {
          const t = (packetRef.current + iA * 0.25) % 1;
          const px = pA.x2d + (pB.x2d - pA.x2d) * t;
          const py = pA.y2d + (pB.y2d - pA.y2d) * t;

          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "#d4a342";
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      packetRef.current = (packetRef.current + 0.009) % 1;

      // Draw Nodes sorted by depth
      const sorted = [...projected].sort((a, b) => b.z - a.z);

      sorted.forEach((p) => {
        const node = NODES[p.id];
        const isSelected = p.id === activeNode.id;
        const isHover = p.id === hoveredNodeId;

        // Aura
        if (isSelected || isHover) {
          ctx.beginPath();
          ctx.arc(p.x2d, p.y2d, p.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(212, 163, 66, 0.2)";
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x2d, p.y2d, p.radius * 1.5, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(212, 163, 66, 0.85)";
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Main node body
        ctx.beginPath();
        ctx.arc(p.x2d, p.y2d, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.id === 0 ? "#d4a342" : isSelected ? "#f3cc72" : "#171922";
        ctx.fill();

        ctx.strokeStyle = isSelected || isHover ? "#d4a342" : "#2e3244";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Center jewel
        ctx.beginPath();
        ctx.arc(p.x2d, p.y2d, Math.max(2, p.radius * 0.35), 0, Math.PI * 2);
        ctx.fillStyle = isSelected || isHover || p.id === 0 ? "#ffffff" : "#a1a1aa";
        ctx.fill();

        // Node label pill
        const labelText = node.label.split(" ")[0];
        ctx.font = `600 ${Math.max(10, Math.min(12, 11 * p.scale))}px monospace`;
        ctx.fillStyle = isSelected ? "#f3cc72" : isHover ? "#ffffff" : "rgba(200, 205, 220, 0.8)";
        ctx.fillText(labelText, p.x2d + p.radius + 6, p.y2d + 4);
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("click", onClick);
    };
  }, [activeNode.id, hoveredNodeId, isRotating]);

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-2xl bg-brand-surface border border-brand-border shadow-2xl overflow-hidden select-none"
    >
      {/* Console Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-brand-surfaceElevated border-b border-brand-border">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-semibold text-white tracking-wider">
            ARAVANTA TOPOLOGY 3D
          </span>
          <span className="text-[10px] font-mono text-brand-gold bg-brand-gold/15 px-2 py-0.5 rounded border border-brand-gold/30 hidden sm:inline">
            LIVE MESH
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsRotating(!isRotating)}
            className={cn(
              "px-2.5 py-1 rounded text-[11px] font-mono border transition-colors flex items-center gap-1",
              isRotating
                ? "bg-brand-surface border-brand-border text-brand-gray-300 hover:text-white"
                : "bg-brand-gold/20 border-brand-gold text-brand-gold"
            )}
            title="Toggle Auto Orbit"
          >
            <Activity className="w-3 h-3" />
            <span>{isRotating ? "Orbiting" : "Paused"}</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="p-1 rounded text-brand-gray-400 hover:text-brand-gold transition-colors"
            title="Reset Orientation"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Dedicated 3D Viewport — Completely separated from telemetry text */}
      <div className="relative w-full h-[260px] sm:h-[290px] bg-gradient-to-b from-[#090a0d] to-[#111218]">
        <canvas ref={canvasRef} className="w-full h-full block" />

        <div className="absolute bottom-2 left-3 pointer-events-none text-[10px] font-mono text-brand-gray-400 bg-brand-dark/80 px-2 py-0.5 rounded border border-brand-border/60">
          <span>Drag to orbit • Click node to inspect</span>
        </div>
      </div>

      {/* Telemetry Console (Below 3D Canvas, zero overlap) */}
      <div className="p-4 sm:p-5 bg-brand-surfaceElevated border-t border-brand-border space-y-3">
        {/* Node Quick Selector Pills */}
        <div className="flex flex-wrap gap-1.5 pb-1">
          {NODES.map((n) => (
            <button
              key={n.id}
              type="button"
              onClick={() => setActiveNode(n)}
              className={cn(
                "px-2.5 py-1 rounded-md text-[11px] font-mono transition-all",
                activeNode.id === n.id
                  ? "bg-brand-gold text-brand-dark font-bold shadow-md shadow-brand-gold/15"
                  : "bg-brand-dark border border-brand-border text-brand-gray-300 hover:text-white hover:border-brand-gray-400"
              )}
            >
              {n.label.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Selected Node Details Card */}
        <div className="p-3.5 rounded-xl bg-brand-dark border border-brand-border/80 space-y-1.5 font-mono">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-brand-border/60 pb-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              <span className="text-xs font-bold text-white uppercase">
                {activeNode.label}
              </span>
            </div>
            <span className="text-[10px] text-emerald-400">
              {activeNode.status} • {activeNode.metric}
            </span>
          </div>
          <p className="text-xs text-brand-gray-300 font-sans leading-relaxed pt-1">
            {activeNode.description}
          </p>
        </div>
      </div>
    </div>
  );
}
