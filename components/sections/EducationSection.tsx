"use client";

import React from "react";

export default function EducationSection() {
  return (
    <section
      id="education"
      aria-label="Education and Academic Background"
      style={{
        padding: "5rem 2.5rem",
        background: "var(--bg)",
        borderTop: "1px solid #e0ddd6",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-display), 'Instrument Serif', Georgia, serif",
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              fontWeight: 400,
              color: "var(--text)",
              lineHeight: 1.15,
            }}
          >
            Education & Focus Areas
          </h2>
        </div>

        {/* Card */}
        <div
          style={{
            background: "var(--surface)",
            border: "1.5px solid #e0ddd6",
            borderRadius: 16,
            padding: "2.5rem",
            boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#7c5cbf", marginBottom: "0.4rem" }}>
              2023 — Present · Hyderabad, India
            </div>
            <h3 style={{ fontSize: "1.45rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.4rem" }}>
              B.Tech in Computer Engineering (AIML)
            </h3>
            <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", marginBottom: "0.8rem" }}>
              Lords Institute of Engineering & Technology
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "#065f46",
                background: "#d1fae5",
                padding: "0.35rem 0.85rem",
                borderRadius: 999,
              }}
            >
              Academic Standing: 7.8 / 10 GPA
            </div>
          </div>

          <div
            style={{
              borderLeft: "1px solid #e5e7eb",
              paddingLeft: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.8rem",
            }}
          >
            <div style={{ fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)" }}>
              Core Technical Interests
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
              AI Agent Systems, Model Context Protocol (MCP), Autonomous Workflow Automation, Developer Tooling, Distributed Backends, and Modern Human-Centered UI Design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

