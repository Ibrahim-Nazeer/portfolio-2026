"use client";

import React from "react";

const EXPERIENCES = [
  {
    role: "Community & Operations / Automation",
    organization: "HackPrix Community",
    period: "Season 3 · Recent",
    location: "Hyderabad, India",
    type: "Leadership & Workflow Operations",
    points: [
      "Orchestrated judge, mentor, and sponsor record architectures and communication workflows for HackPrix using Zoho CRM.",
      "Designed, tested, and maintained automated CRM workflows, connecting Zoho CRM processes with Make.com to drive seamless data synchronization and operational efficiency.",
      "Played a core role in the execution and delivery of HackPrix Season 3, a 36-hour flagship in-person hackathon hosted at Lords Institute of Engineering & Technology with 700+ hackers, sponsors, and prominent industry mentors.",
    ],
    skills: ["Zoho CRM", "Make.com", "Workflow Automation", "Event Operations", "Stakeholder Management"],
  },
  {
    role: "Duality AI Track Prize Winner ($100)",
    organization: "HackAura 2025",
    period: "2025",
    location: "Hackathon Competitor",
    type: "Award & Technical Recognition",
    points: [
      "Awarded the prestigious Duality AI Track Prize ($100) for building Astro Safe — an automated real-time computer-vision safety detection system.",
      "Demonstrated high-accuracy object detection and deployment tooling under intense hackathon deadlines.",
    ],
    skills: ["YOLOv8", "Computer Vision", "PyTorch", "Gradio", "AI Systems"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="content-section"
      aria-label="Experience and Leadership"
      style={{
        padding: "6rem 2.5rem",
        background: "var(--bg)",
        borderTop: "1px solid #e0ddd6",
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
            Experience & Hackathon Operations
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1.02rem",
              maxWidth: 620,
              lineHeight: 1.65,
            }}
          >
            Delivering high-stakes operational workflows, community platforms, and award-winning solutions.
          </p>
        </div>

        {/* Timeline / List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              style={{
                background: "var(--surface)",
                border: "1.5px solid #e0ddd6",
                borderRadius: 16,
                padding: "2.2rem",
                boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 600,
                      color: "var(--text)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {exp.role}
                  </h3>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      color: "#7c5cbf",
                    }}
                  >
                    {exp.organization} · <span style={{ color: "var(--text-muted)" }}>{exp.location}</span>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--text)",
                      background: "var(--bg)",
                      padding: "0.3rem 0.75rem",
                      borderRadius: 999,
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Bullet points */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {exp.points.map((pt, pIdx) => (
                  <li
                    key={pIdx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.65rem",
                      fontSize: "0.92rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.65,
                    }}
                  >
                    <span style={{ color: "#7c5cbf", fontWeight: 700, marginTop: "0.15rem" }}>✦</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Skills badges */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  paddingTop: "0.5rem",
                }}
              >
                {exp.skills.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: "0.72rem",
                      fontFamily: "'SFMono-Regular', Consolas, monospace",
                      color: "#5b21b6",
                      background: "rgba(124,92,191,0.08)",
                      border: "1px solid rgba(124,92,191,0.18)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: 999,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

