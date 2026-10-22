"use client";

import { useEffect, useRef } from "react";
import { KnotAnimation } from "@/components/ui/knot-animation";

const S = {
  overlay: (show: boolean): React.CSSProperties => ({
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#0c0c0c",
    transition: "opacity 0.7s cubic-bezier(0.4,0,0.2,1), visibility 0.7s cubic-bezier(0.4,0,0.2,1)",
    opacity: show ? 1 : 0,
    visibility: show ? "visible" : "hidden",
    pointerEvents: show ? "auto" : "none",
  }),
  label: {
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.65rem",
    letterSpacing: "0.25em",
    textTransform: "uppercase" as const,
    color: "#555",
    marginTop: "1rem",
    animation: "loader-pulse 2s ease-in-out infinite",
  },
};

export default function LoadingOverlay({
  show,
  onDone,
}: {
  show: boolean;
  onDone: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || show) return;
    const handler = () => onDone();
    el.addEventListener("transitionend", handler, { once: true });
    return () => el.removeEventListener("transitionend", handler);
  }, [show, onDone]);

  return (
    <div ref={ref} style={S.overlay(show)} aria-hidden={!show} role="status" aria-label="Loading">
      <KnotAnimation color={true} />
      <p style={S.label}>Loading</p>
    </div>
  );
}
