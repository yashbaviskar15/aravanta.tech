"use client";

import React, { type ReactNode, useMemo, useState } from "react";
import {
  Bell,
  CloudLightning,
  Music2,
  Pause,
  Phone,
  Play,
  SkipBack,
  SkipForward,
  Thermometer,
  Timer as TimerIcon,
  Server,
  Activity,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const BOUNCE_VARIANTS = {
  idle: 0.5,
  "idle-ring": 0.5,
  "idle-timer": 0.3,
  "idle-telemetry": 0.35,
  "ring-idle": 0.5,
  "ring-timer": 0.35,
  "timer-idle": 0.3,
  "timer-ring": 0.35,
} as const;

const DEFAULT_BOUNCE = 0.5;
const TIMER_INTERVAL_MS = 1000;

// Default Idle Component
export const DefaultIdle = () => {
  const [showMetrics, setShowMetrics] = useState(false);

  return (
    <motion.div
      className="flex items-center gap-2.5 px-3.5 py-2 cursor-pointer select-none"
      layout
      onHoverEnd={() => setShowMetrics(false)}
      onHoverStart={() => setShowMetrics(true)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="text-brand-gold flex items-center justify-center"
          exit={{ opacity: 0, scale: 0.8 }}
          initial={{ opacity: 0, scale: 0.8 }}
          key="cloud"
        >
          <CloudLightning className="h-4 w-4 text-brand-gold" />
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center gap-1.5 font-mono text-xs">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-medium text-white/90">Aravanta CloudOS</span>
      </div>

      <AnimatePresence>
        {showMetrics ? (
          <motion.div
            animate={{ opacity: 1, width: "auto" }}
            className="flex items-center gap-1.5 overflow-hidden text-brand-gold/90 font-mono text-[11px]"
            exit={{ opacity: 0, width: 0 }}
            initial={{ opacity: 0, width: 0 }}
          >
            <span className="text-white/40">|</span>
            <Activity className="h-3 w-3 text-cyan-400" />
            <span className="pointer-events-none whitespace-nowrap text-cyan-300">
              99.999% SLA
            </span>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
};

// Enterprise Telemetry Component
export const EnterpriseTelemetryView = () => (
  <div className="flex w-72 items-center gap-3 overflow-hidden px-4 py-2.5 text-white">
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/30">
      <Activity className="h-4 w-4 text-cyan-400" />
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between">
        <p className="pointer-events-none font-medium text-xs text-white truncate">
          Active Multi-AZ Cluster
        </p>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
          HEALTHY
        </span>
      </div>
      <p className="pointer-events-none text-white/60 text-[11px] font-mono">
        p99: 18ms • Zero-Drift IaC
      </p>
    </div>
  </div>
);

// Cluster Status View
export const ClusterStatusView = () => (
  <div className="flex w-72 items-center gap-3 overflow-hidden px-4 py-2.5 text-white">
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-gold/10 border border-brand-gold/30">
      <Server className="h-4 w-4 text-brand-gold" />
    </div>
    <div className="flex-1 min-w-0">
      <p className="pointer-events-none font-medium text-xs text-white truncate">
        Core Workloads Synced
      </p>
      <div className="flex items-center gap-2 mt-0.5">
        <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-brand-gold to-emerald-400 w-full" />
        </div>
        <span className="text-[10px] font-mono text-white/70">24/24</span>
      </div>
    </div>
    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
  </div>
);

// Ring / Call Component
export const DefaultRing = () => (
  <div className="flex w-64 items-center gap-3 overflow-hidden px-4 py-2.5 text-white">
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/40">
      <Phone className="h-3.5 w-3.5 text-emerald-400" />
    </div>
    <div className="flex-1">
      <p className="pointer-events-none font-medium text-xs text-white">
        Solutions Architect Live
      </p>
      <p className="pointer-events-none text-white/60 text-[11px]">
        Enterprise Consultation
      </p>
    </div>
    <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
  </div>
);

// Timer Component
export const DefaultTimer = () => {
  const [time, setTime] = useState(60);

  useMemo(() => {
    const timer = setInterval(() => {
      setTime((t) => (t > 0 ? t - 1 : 0));
    }, TIMER_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex w-64 items-center gap-3 overflow-hidden px-4 py-2.5 text-white">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/30">
        <TimerIcon className="h-3.5 w-3.5 text-amber-400" />
      </div>
      <div className="flex-1">
        <p className="pointer-events-none font-medium text-xs text-white font-mono">
          {time}s deploy timeout
        </p>
      </div>
      <div className="h-1.5 w-20 overflow-hidden rounded-full bg-white/20">
        <motion.div
          animate={{ width: "0%" }}
          className="h-full bg-amber-400"
          initial={{ width: "100%" }}
          transition={{ duration: time, ease: "linear" }}
        />
      </div>
    </div>
  );
};

// Notification Component
export const NotificationView = () => (
  <div className="flex w-68 items-center gap-3 overflow-hidden px-4 py-2.5 text-white">
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-gold/10 border border-brand-gold/30">
      <Bell className="h-3.5 w-3.5 text-brand-gold" />
    </div>
    <div className="flex-1 min-w-0">
      <p className="pointer-events-none font-medium text-xs text-white truncate">
        Automated Security Scan
      </p>
      <p className="pointer-events-none text-white/60 text-[11px] truncate">
        0 vulnerabilities detected
      </p>
    </div>
    <span className="rounded-full bg-emerald-400/20 border border-emerald-400/40 px-2 py-0.5 text-[10px] text-emerald-300 font-mono">
      PASSED
    </span>
  </div>
);

// Music / Audio Component
export const MusicPlayerView = () => {
  const [playing, setPlaying] = useState(true);
  return (
    <div className="flex w-72 items-center gap-2.5 overflow-hidden px-4 py-2 text-white">
      <Music2 className="h-4 w-4 text-brand-gold" />
      <div className="min-w-0 flex-1">
        <p className="pointer-events-none truncate font-medium text-xs text-white">
          Aravanta Spatial Audio
        </p>
        <p className="pointer-events-none truncate text-white/60 text-[10px]">
          Ambient Frequency 432Hz
        </p>
      </div>
      <button
        className="rounded-full p-1 hover:bg-white/10 text-white/80 hover:text-white transition-colors"
        onClick={() => setPlaying(false)}
        type="button"
        aria-label="Previous track"
      >
        <SkipBack className="h-3.5 w-3.5" />
      </button>
      <button
        className="rounded-full p-1 hover:bg-white/10 text-white/80 hover:text-white transition-colors"
        onClick={() => setPlaying((p) => !p)}
        type="button"
        aria-label={playing ? "Pause" : "Play"}
      >
        {playing ? (
          <Pause className="h-3.5 w-3.5" />
        ) : (
          <Play className="h-3.5 w-3.5" />
        )}
      </button>
      <button
        className="rounded-full p-1 hover:bg-white/10 text-white/80 hover:text-white transition-colors"
        onClick={() => setPlaying(true)}
        type="button"
        aria-label="Next track"
      >
        <SkipForward className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export type DynamicIslandView =
  | "idle"
  | "ring"
  | "timer"
  | "notification"
  | "music"
  | "telemetry"
  | "cluster";

export interface DynamicIslandProps {
  className?: string;
  idleContent?: ReactNode;
  ringContent?: ReactNode;
  timerContent?: ReactNode;
  notificationContent?: ReactNode;
  musicContent?: ReactNode;
  telemetryContent?: ReactNode;
  clusterContent?: ReactNode;
  view?: DynamicIslandView;
  onViewChange?: (view: DynamicIslandView) => void;
  showControls?: boolean;
  variant?: "floating" | "inline" | "dock";
}

export default function DynamicIsland({
  view: controlledView,
  onViewChange,
  idleContent,
  ringContent,
  timerContent,
  notificationContent,
  musicContent,
  telemetryContent,
  clusterContent,
  className = "",
  showControls = true,
  variant = "floating",
}: DynamicIslandProps) {
  const [internalView, setInternalView] = useState<DynamicIslandView>("idle");
  const [variantKey, setVariantKey] = useState<string>("idle");
  const shouldReduceMotion = useReducedMotion();

  const view = controlledView ?? internalView;

  const content = useMemo(() => {
    switch (view) {
      case "ring":
        return ringContent ?? <DefaultRing />;
      case "timer":
        return timerContent ?? <DefaultTimer />;
      case "notification":
        return notificationContent ?? <NotificationView />;
      case "music":
        return musicContent ?? <MusicPlayerView />;
      case "telemetry":
        return telemetryContent ?? <EnterpriseTelemetryView />;
      case "cluster":
        return clusterContent ?? <ClusterStatusView />;
      default:
        return idleContent ?? <DefaultIdle />;
    }
  }, [
    view,
    idleContent,
    ringContent,
    timerContent,
    notificationContent,
    musicContent,
    telemetryContent,
    clusterContent,
  ]);

  const handleViewChange = (newView: DynamicIslandView) => {
    if (view === newView) {
      return;
    }
    setVariantKey(`${view}-${newView}`);
    if (onViewChange) {
      onViewChange(newView);
    } else {
      setInternalView(newView);
    }
  };

  const containerClasses =
    variant === "floating"
      ? "relative flex flex-col items-center justify-center pointer-events-auto"
      : variant === "dock"
      ? "relative flex flex-col items-center justify-center pointer-events-auto"
      : "relative flex flex-col items-center justify-center";

  return (
    <div className={cn(containerClasses, className)}>
      <motion.div
        className={cn(
          "w-fit min-w-[120px] overflow-hidden rounded-full border border-brand-gold/30 bg-[#080b12]/95 backdrop-blur-xl shadow-2xl shadow-black/80 ring-1 ring-white/10",
          "transition-colors duration-300"
        )}
        layout
        style={{ borderRadius: 9999 }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                bounce:
                  BOUNCE_VARIANTS[
                    variantKey as keyof typeof BOUNCE_VARIANTS
                  ] ?? DEFAULT_BOUNCE,
                duration: 0.28,
                type: "spring" as const,
              }
        }
      >
        <motion.div
          animate={
            shouldReduceMotion
              ? { opacity: 1, scale: 1 }
              : {
                  filter: "blur(0px)",
                  opacity: 1,
                  originX: 0.5,
                  originY: 0.5,
                  scale: 1,
                  transition: { delay: 0.04 },
                }
          }
          initial={{
            filter: "blur(4px)",
            opacity: 0,
            originX: 0.5,
            originY: 0.5,
            scale: 0.94,
          }}
          key={view}
          transition={{
            bounce:
              BOUNCE_VARIANTS[variantKey as keyof typeof BOUNCE_VARIANTS] ??
              DEFAULT_BOUNCE,
            type: "spring" as const,
          }}
        >
          {content}
        </motion.div>
      </motion.div>

      {showControls && (
        <div className="mt-3 flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-[#0c101a]/90 backdrop-blur-md p-1 shadow-lg">
          {[
            {
              icon: <CloudLightning className="h-3 w-3" />,
              key: "idle",
              label: "Idle State",
            },
            {
              icon: <Activity className="h-3 w-3" />,
              key: "telemetry",
              label: "Cluster Telemetry",
            },
            {
              icon: <Server className="h-3 w-3" />,
              key: "cluster",
              label: "Multi-AZ Sync",
            },
            {
              icon: <Bell className="h-3 w-3" />,
              key: "notification",
              label: "Security Audit",
            },
            {
              icon: <TimerIcon className="h-3 w-3" />,
              key: "timer",
              label: "Deploy Timer",
            },
          ].map(({ key, icon, label }) => {
            const isActive = view === key;
            return (
              <button
                aria-label={label}
                title={label}
                className={cn(
                  "flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border transition-all text-xs",
                  isActive
                    ? "border-brand-gold bg-brand-gold text-brand-dark shadow-sm shadow-brand-gold/30 font-bold"
                    : "border-transparent bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
                )}
                key={key}
                onClick={() => {
                  if (view !== key) {
                    setVariantKey(`${view}-${key}`);
                    handleViewChange(key as DynamicIslandView);
                  }
                }}
                type="button"
              >
                {icon}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
