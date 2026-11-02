"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import {
  Activity,
  RotateCw,
  Globe2,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface CloudNode {
  id: number;
  label: string;
  provider: "cloudos" | "aws" | "gcp" | "azure" | "baremetal" | "security";
  category: string;
  x: number;
  y: number;
  z: number;
  metric: string;
  latency: string;
  status: string;
  description: string;
  color: string;
  borderColor: string;
  glowColor: string;
}

const CLOUD_NODES: CloudNode[] = [
  {
    id: 0,
    label: "Aravanta CloudOS Core",
    provider: "cloudos",
    category: "AUTONOMOUS CONTROL PLANE",
    x: 0,
    y: 0,
    z: 0,
    metric: "0.00% State Drift",
    latency: "0.4ms",
    status: "Raft Quorum Synced",
    description: "Central declarative control plane continuously converging multi-cloud infrastructure to desired GitOps states.",
    color: "#d4a342",
    borderColor: "#f3cc72",
    glowColor: "rgba(212, 163, 66, 0.4)",
  },
  {
    id: 1,
    label: "AWS us-east-1 Cluster",
    provider: "aws",
    category: "PRIMARY COMPUTE MESH",
    x: 0,
    y: -95,
    z: 25,
    metric: "32 Pods Nominal",
    latency: "12ms",
    status: "Multi-AZ Active",
    description: "High-density Kubernetes worker node pool with automated horizontal scaling and multi-AZ Aurora clustering.",
    color: "#f59e0b",
    borderColor: "#fbbf24",
    glowColor: "rgba(245, 158, 11, 0.35)",
  },
  {
    id: 2,
    label: "GCP europe-west3 Fleet",
    provider: "gcp",
    category: "TRANSACTIONAL REPLICA",
    x: 95,
    y: 25,
    z: 55,
    metric: "100% CDC Synced",
    latency: "18ms",
    status: "Dual-Write Replica",
    description: "Distributed PostgreSQL read replicas with continuous Change Data Capture and sub-second replication lag.",
    color: "#38bdf8",
    borderColor: "#7dd3fc",
    glowColor: "rgba(56, 189, 248, 0.35)",
  },
  {
    id: 3,
    label: "Azure central-us DR",
    provider: "azure",
    category: "DISASTER RECOVERY ENCLAVE",
    x: 75,
    y: 85,
    z: -35,
    metric: "RTO < 60s / RPO < 5s",
    latency: "24ms",
    status: "Hot Standby Ready",
    description: "Automated multi-region failover enclave ensuring business continuity under catastrophic cloud provider blackouts.",
    color: "#60a5fa",
    borderColor: "#93c5fd",
    glowColor: "rgba(96, 165, 250, 0.35)",
  },
  {
    id: 4,
    label: "Hybrid Bare-Metal Node",
    provider: "baremetal",
    category: "HIGH-THROUGHPUT RUNTIME",
    x: -85,
    y: 80,
    z: -30,
    metric: "100Gbps Wire-Speed",
    latency: "2.1ms",
    status: "Equinix Edge Mesh",
    description: "Low-latency private compute servers running specialized GPU workloads and dedicated encryption key stores.",
    color: "#10b981",
    borderColor: "#34d399",
    glowColor: "rgba(16, 185, 129, 0.35)",
  },
  {
    id: 5,
    label: "Zero-Trust SPIRE Perimeter",
    provider: "security",
    category: "CRYPTOGRAPHIC VAULT",
    x: -95,
    y: -25,
    z: 50,
    metric: "TLS 1.3 Strict mTLS",
    latency: "0.8ms",
    status: "Hardware KMS Sealed",
    description: "Mutual TLS cryptographic mesh with ephemeral short-lived access certificates rotated automatically every 4 hours.",
    color: "#c084fc",
    borderColor: "#d8b4fe",
    glowColor: "rgba(192, 132, 252, 0.35)",
  },
];

// Bidirectional network topology links
const EDGES: [number, number][] = [
  [0, 1], // Core <-> AWS
  [0, 2], // Core <-> GCP
  [0, 3], // Core <-> Azure
  [0, 4], // Core <-> Bare-Metal
  [0, 5], // Core <-> Zero-Trust
  [1, 2], // AWS <-> GCP sync
  [2, 3], // GCP <-> Azure backup
  [4, 5], // Bare-Metal <-> Zero-Trust
  [1, 5], // AWS <-> Zero-Trust
];

export function HeroInteractiveCloudMesh() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [activeNode, setActiveNode] = useState<CloudNode>(CLOUD_NODES[0]);
  const [hoveredNodeId, setHoveredNodeId] = useState<number | null>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const anglesRef = useRef({ x: 0.18, y: -0.35 });
  const targetAnglesRef = useRef({ x: 0.18, y: -0.35 });
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const projectedNodesRef = useRef<{ id: number; x2d: number; y2d: number; radius: number }[]>([]);
  const packetPhaseRef = useRef(0);

  const handleReset = useCallback(() => {
    targetAnglesRef.current = { x: 0.18, y: -0.35 };
    setActiveNode(CLOUD_NODES[0]);
    setActiveFilter("all");
  }, []);

  const selectNodeByProvider = (providerKey: string) => {
    setActiveFilter(providerKey);
    if (providerKey === "all") {
      setActiveNode(CLOUD_NODES[0]);
      targetAnglesRef.current = { x: 0.18, y: -0.35 };
      return;
    }
    const matched = CLOUD_NODES.find((n) => n.provider === providerKey);
    if (matched) {
      setActiveNode(matched);
      // Orbit towards that node's orientation
      targetAnglesRef.current = {
        x: -matched.y * 0.003,
        y: Math.atan2(matched.x, matched.z + 10),
      };
    }
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
      canvas.width = Math.max(1, rect.width * dpr);
      canvas.height = Math.max(1, rect.height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
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
        targetAnglesRef.current.y += dx * 0.008;
        targetAnglesRef.current.x += dy * 0.008;
      } else {
        let found: number | null = null;
        for (const p of projectedNodesRef.current) {
          const dist = Math.hypot(p.x2d - clientX, p.y2d - clientY);
          if (dist < p.radius + 14) {
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
        const n = CLOUD_NODES.find((item) => item.id === hoveredNodeId);
        if (n) {
          setActiveNode(n);
          setActiveFilter(n.provider);
        }
      }
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("click", onClick);

    // Animation Loop
    const render = () => {
      if (document.hidden) {
        animId = requestAnimationFrame(render);
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      if (width <= 0 || height <= 0) {
        animId = requestAnimationFrame(render);
        return;
      }

      const centerX = width / 2;
      const centerY = height / 2;
      const focalLength = Math.min(width, height) * 0.95;
      const cameraDist = 360;

      // Smooth auto-orbit rotation
      if (!isDraggingRef.current && isRotating && !prefersReducedMotion) {
        targetAnglesRef.current.y += 0.0035;
      }

      // Exponential damping interpolation
      anglesRef.current.x += (targetAnglesRef.current.x - anglesRef.current.x) * 0.08;
      anglesRef.current.y += (targetAnglesRef.current.y - anglesRef.current.y) * 0.08;

      const cosX = Math.cos(anglesRef.current.x);
      const sinX = Math.sin(anglesRef.current.x);
      const cosY = Math.cos(anglesRef.current.y);
      const sinY = Math.sin(anglesRef.current.y);

      ctx.clearRect(0, 0, width, height);

      // Deep atmospheric space gradient
      const bgGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        15,
        centerX,
        centerY,
        Math.min(width, height) * 0.65
      );
      bgGrad.addColorStop(0, "rgba(212, 163, 66, 0.09)");
      bgGrad.addColorStop(0.4, "rgba(16, 185, 129, 0.04)");
      bgGrad.addColorStop(0.8, "rgba(8, 9, 13, 0.6)");
      bgGrad.addColorStop(1, "rgba(8, 9, 13, 0.95)");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Project 3D nodes to 2D screen coordinates
      const projected = CLOUD_NODES.map((node) => {
        const x1 = node.x * cosY - node.z * sinY;
        const z1 = node.z * cosY + node.x * sinY;
        const y2 = node.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + node.y * sinX;

        const scale = focalLength / (cameraDist + z2);
        const x2d = centerX + x1 * scale;
        const y2d = centerY + y2 * scale;
        const baseRadius = node.id === 0 ? 16 : 10;
        const radius = Math.max(7, baseRadius * scale);

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

      // 3D Orbital Coordinate Rings
      ctx.save();
      const ringRadius = 120 * (focalLength / cameraDist);

      // Ring 1: Primary Equatorial Ring
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, ringRadius, ringRadius * 0.32, anglesRef.current.y, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(212, 163, 66, 0.22)";
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 6]);
      ctx.stroke();

      // Ring 2: Outer Polar Drift Ring
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, ringRadius * 1.35, ringRadius * 0.45, -anglesRef.current.y * 0.6, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(56, 189, 248, 0.12)";
      ctx.lineWidth = 0.8;
      ctx.setLineDash([2, 8]);
      ctx.stroke();
      ctx.restore();

      // Draw Edges & Real-Time Data Packet Streams
      EDGES.forEach(([iA, iB]) => {
        const pA = projected[iA];
        const pB = projected[iB];
        if (!pA || !pB) return;

        const isHighlighted =
          iA === activeNode.id ||
          iB === activeNode.id ||
          iA === hoveredNodeId ||
          iB === hoveredNodeId;

        ctx.beginPath();
        ctx.moveTo(pA.x2d, pA.y2d);
        ctx.lineTo(pB.x2d, pB.y2d);

        if (isHighlighted) {
          ctx.strokeStyle = "rgba(212, 163, 66, 0.85)";
          ctx.lineWidth = 2.2;
        } else {
          ctx.strokeStyle = "rgba(148, 163, 184, 0.18)";
          ctx.lineWidth = 1;
        }
        ctx.stroke();

        // Animated Data Packets Flowing between Nodes
        if (!prefersReducedMotion) {
          // Packet 1: Normal speed
          const t1 = (packetPhaseRef.current + iA * 0.19) % 1;
          const px1 = pA.x2d + (pB.x2d - pA.x2d) * t1;
          const py1 = pA.y2d + (pB.y2d - pA.y2d) * t1;

          ctx.beginPath();
          ctx.arc(px1, py1, isHighlighted ? 3 : 2, 0, Math.PI * 2);
          ctx.fillStyle = isHighlighted ? "#ffffff" : "#f3cc72";
          ctx.shadowColor = isHighlighted ? "#d4a342" : "#38bdf8";
          ctx.shadowBlur = isHighlighted ? 12 : 5;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Packet 2: Return traffic on highlighted edges
          if (isHighlighted) {
            const t2 = (1 - (packetPhaseRef.current + iB * 0.23) % 1);
            const px2 = pA.x2d + (pB.x2d - pA.x2d) * t2;
            const py2 = pA.y2d + (pB.y2d - pA.y2d) * t2;

            ctx.beginPath();
            ctx.arc(px2, py2, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = "#38bdf8";
            ctx.shadowColor = "#38bdf8";
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      });

      packetPhaseRef.current = (packetPhaseRef.current + 0.0075) % 1;

      // Draw Nodes (Sorted by 3D depth to ensure accurate overlapping)
      const sorted = [...projected].sort((a, b) => b.z - a.z);

      sorted.forEach((p) => {
        const node = CLOUD_NODES[p.id];
        const isSelected = p.id === activeNode.id;
        const isHovered = p.id === hoveredNodeId;

        // Outer Glow Aura for Active/Hovered Nodes
        if (isSelected || isHovered) {
          ctx.beginPath();
          ctx.arc(p.x2d, p.y2d, p.radius * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = node.glowColor;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x2d, p.y2d, p.radius * 1.6, 0, Math.PI * 2);
          ctx.strokeStyle = node.borderColor;
          ctx.lineWidth = 1.6;
          ctx.stroke();
        }

        // Node Body
        ctx.beginPath();
        ctx.arc(p.x2d, p.y2d, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? node.color : "#12141c";
        ctx.fill();

        ctx.strokeStyle = isSelected || isHovered ? node.borderColor : "#33384a";
        ctx.lineWidth = isSelected ? 2.5 : 1.8;
        ctx.stroke();

        // Core Jewel Light
        ctx.beginPath();
        ctx.arc(p.x2d, p.y2d, Math.max(2.5, p.radius * 0.38), 0, Math.PI * 2);
        ctx.fillStyle = isSelected || isHovered ? "#ffffff" : node.color;
        ctx.fill();

        // Node Label Pill
        const labelText = node.label.replace(" Cluster", "").replace(" Fleet", "").replace(" Perimeter", "");
        ctx.font = `600 ${Math.max(10, Math.min(12, 11 * p.scale))}px monospace`;
        ctx.fillStyle = isSelected
          ? "#ffffff"
          : isHovered
          ? "#f3cc72"
          : "rgba(226, 232, 240, 0.75)";
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
      className="relative w-full rounded-3xl bg-gradient-to-b from-[#131622] via-[#0d1017] to-[#07090f] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden select-none transition-all group"
    >
      {/* Top Interactive HUD Bar */}
      <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 sm:py-3 bg-[#0a0d15]/90 border-b border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </div>
          <span className="text-[11px] sm:text-xs font-mono font-bold text-white tracking-wider">
            ARAVANTA TOPOLOGY
          </span>
          <span className="text-[10px] font-mono text-[#d4a342] bg-[#d4a342]/10 border border-[#d4a342]/30 px-2 py-0.5 rounded-full hidden sm:inline">
            3D MESH LIVE
          </span>
        </div>

        {/* Orbit Control & Reset Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => setIsRotating(!isRotating)}
            className={cn(
              "px-2 sm:px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-mono border transition-all flex items-center gap-1",
              isRotating
                ? "bg-white/[0.04] border-white/10 text-zinc-300 hover:text-white"
                : "bg-[#d4a342]/20 border-[#d4a342] text-[#d4a342] font-semibold"
            )}
            title="Toggle Continuous Orbit"
          >
            <Activity className="w-3 h-3 text-[#d4a342]" />
            <span>{isRotating ? "Orbiting" : "Paused"}</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="p-1 sm:p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            title="Reset 3D Camera"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Cloud Filter Pills Toolbar */}
      <div className="px-3.5 sm:px-4 py-2 bg-[#080a11]/80 border-b border-white/5 flex items-center gap-1 sm:gap-1.5 overflow-x-auto scrollbar-none">
        {[
          { key: "all", label: "All Clouds" },
          { key: "cloudos", label: "CloudOS" },
          { key: "aws", label: "AWS Mesh" },
          { key: "gcp", label: "Google Cloud" },
          { key: "azure", label: "Azure DR" },
          { key: "baremetal", label: "Bare-Metal" },
          { key: "security", label: "Zero-Trust" },
        ].map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => selectNodeByProvider(f.key)}
            className={cn(
              "px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] font-mono tracking-wider uppercase transition-all whitespace-nowrap shrink-0",
              activeFilter === f.key
                ? "bg-[#d4a342] text-black font-bold shadow-sm"
                : "bg-white/[0.04] border border-white/8 text-zinc-400 hover:text-white"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Dedicated Interactive 3D Canvas Viewport */}
      <div className="relative w-full h-[270px] sm:h-[310px] bg-gradient-to-b from-[#090b12] to-[#0d1017]">
        <canvas
          ref={canvasRef}
          className="w-full h-full block touch-none cursor-grab active:cursor-grabbing"
          style={{ touchAction: "none" }}
        />

        {/* Ambient Grid Lines Texture */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Helper Badge: Drag to Orbit */}
        <div className="absolute bottom-2.5 left-3 pointer-events-none text-[10px] font-mono text-zinc-400 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1.5">
          <Globe2 className="w-3 h-3 text-[#d4a342]" />
          <span>Drag 3D to rotate • Tap node to inspect</span>
        </div>

        {/* Real-Time Live SLA HUD Badge */}
        <div className="absolute top-2.5 right-3 pointer-events-none text-[10px] font-mono bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>p99 Latency: 12ms</span>
        </div>
      </div>

      {/* Active Node Telemetry Dossier Panel */}
      <div className="p-3.5 sm:p-5 bg-[#0a0d15] border-t border-white/10 space-y-3 font-mono">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: activeNode.color }}
            />
            <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
              {activeNode.label}
            </span>
            <span className="text-[10px] text-zinc-400 border border-white/10 px-2 py-0.5 rounded-md hidden xs:inline">
              {activeNode.category}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10px] sm:text-[11px]">
            <span className="text-emerald-400 font-semibold">{activeNode.status}</span>
            <span className="text-zinc-600">•</span>
            <span className="text-[#d4a342]">{activeNode.metric}</span>
          </div>
        </div>

        <p className="text-xs text-zinc-300 font-sans leading-relaxed font-normal">
          {activeNode.description}
        </p>

        {/* Quick Action Navigation Strip */}
        <div className="pt-1 flex items-center justify-between text-[11px] font-mono">
          <span className="text-zinc-500">
            Node Latency: <strong className="text-white">{activeNode.latency}</strong>
          </span>

          <Link
            href="/services/cloud-solutions"
            className="text-[#d4a342] hover:underline flex items-center gap-1 font-semibold group"
          >
            <span>Explore Practice Specs</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroInteractiveCloudMesh;
