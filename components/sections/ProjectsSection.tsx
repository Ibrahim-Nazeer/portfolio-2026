"use client";

import React, { useState } from "react";

const PROJECTS = [
  {
    id: "vis-neuclea",
    title: "vis-Neuclea — Scoped Agent Infrastructure",
    category: "AI Systems & Infrastructure",
    description:
      "An agent infrastructure framework engineered to limit LLM execution to strictly necessary reasoning tasks while delegating high-throughput API and tool execution to a deterministic backend. Achieves significantly lower token consumption and mitigates credential exposure via fine-grained scoped execution.",
    tags: ["Go", "OpenAPI", "MCP", "AI Agents", "REST APIs"],
    icon: "⚡",
    metrics: ["Lower Token Overhead", "Zero Credential Exposure", "Scoped Tool Delegation"],
  },
  {
    id: "appointment-automation",
    title: "Appointment & CRM Voice Automation",
    category: "Workflow Automation & CRM",
    description:
      "An end-to-end AI voice receptionist workflow for automated appointment booking, real-time CRM updates, calendar synchronization, and multi-channel WhatsApp/SMS follow-ups. Built with webhook-based integrations and operational dashboards for lead lifecycle management.",
    tags: ["VAPI", "Make.com", "Zoho CRM", "Google Sheets", "Webhooks", "WhatsApp API"],
    icon: "🎙️",
    metrics: ["24/7 Voice Reception", "Instant CRM Sync", "Automated SMS/WhatsApp"],
  },
  {
    id: "astro-safe",
    title: "Astro Safe — Real-Time AI Safety Detection",
    category: "Machine Learning & Computer Vision",
    award: "Duality AI Track Prize ($100) · HackAura 2025",
    description:
      "A computer-vision system for detecting critical safety equipment in simulated space-station environments. Engineered a YOLOv8-based object detection pipeline and real-time inference tooling with GPU acceleration and an interactive Gradio monitor.",
    tags: ["YOLOv8", "PyTorch", "OpenCV", "Python", "CUDA", "Gradio"],
    icon: "🛰️",
    metrics: ["Real-time Inference", "High-Precision Detection", "HackAura 2025 Winner"],
  },
  {
    id: "sevasaathi",
    title: "SevaSaathi — Scheme Eligibility Assistant",
    category: "Full-Stack & Web Scraping",
    description:
      "An AI-assisted portal designed to match citizens with applicable Indian government welfare schemes using demographic parameters like age, state, gender, and income. Features automated web scraping, data pipelines, and multilingual translation.",
    tags: ["Python", "Flask", "Streamlit", "Selenium", "BeautifulSoup", "Google Translate API"],
    icon: "🏛️",
    metrics: ["Multi-attribute Matching", "Multilingual Support", "Automated Web Scraping"],
  },
];

export default function ProjectsSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      style={{
        padding: "6rem 2.5rem",
        background: "var(--surface)",
        borderTop: "1px solid #e0ddd6",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-display), 'Instrument Serif', Georgia, serif",
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              fontWeight: 400,
              color: "var(--text)",
              lineHeight: 1.15,
              marginBottom: "0.75rem",
            }}
          >
            Featured Projects & Agent Architectures
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1.02rem",
              maxWidth: 620,
              lineHeight: 1.65,
            }}
          >
            Selected systems spanning autonomous agent workflows, voice AI, CRM orchestration, and computer vision.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2rem",
          }}
        >
          {PROJECTS.map((proj, idx) => {
            const isHov = hoveredIdx === idx;
            return (
              <div
                key={proj.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  background: isHov ? "var(--surface)" : "var(--surface)",
                  border: `1.5px solid ${isHov ? "#7c5cbf" : "var(--border)"}`,
                  borderRadius: 16,
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: isHov
                    ? "0 16px 36px rgba(124,92,191,0.12)"
                    : "0 4px 12px rgba(0,0,0,0.02)",
                  transform: isHov ? "translateY(-4px)" : "none",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Top accent bar on hover */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: "#7c5cbf",
                    opacity: isHov ? 1 : 0,
                    transition: "opacity 0.2s",
                  }}
                />

                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >
                    <span style={{ fontSize: "1.75rem" }}>{proj.icon}</span>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "#7c5cbf",
                        background: "rgba(124,92,191,0.08)",
                        padding: "0.25rem 0.65rem",
                        borderRadius: 999,
                      }}
                    >
                      {proj.category}
                    </span>
                  </div>

                  {proj.award && (
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        color: "#b45309",
                        background: "#fef3c7",
                        padding: "0.25rem 0.65rem",
                        borderRadius: 6,
                        marginBottom: "0.75rem",
                        border: "1px solid #fde68a",
                      }}
                    >
                      🏆 {proj.award}
                    </div>
                  )}

                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: "var(--text)",
                      marginBottom: "0.75rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {proj.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.65,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {proj.description}
                  </p>

                  {/* Highlights/Metrics */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {proj.metrics.map((m, mIdx) => (
                      <span
                        key={mIdx}
                        style={{
                          fontSize: "0.74rem",
                          color: "var(--text)",
                          background: "var(--bg)",
                          padding: "0.2rem 0.6rem",
                          borderRadius: 4,
                          fontWeight: 500,
                        }}
                      >
                        ✓ {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                    paddingTop: "1.25rem",
                    borderTop: "1px solid #f3f4f6",
                  }}
                >
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "0.72rem",
                        fontFamily: "'SFMono-Regular', Consolas, monospace",
                        color: "var(--text-muted)",
                        background: "var(--surface)",
                        border: "1px solid #e5e7eb",
                        padding: "0.2rem 0.5rem",
                        borderRadius: 4,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

