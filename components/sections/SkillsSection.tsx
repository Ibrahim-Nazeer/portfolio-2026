"use client";

import React from "react";

const SKILL_GROUPS = [
  {
    category: "Automation & CRM Orchestration",
    icon: "⚙️",
    skills: ["Zoho CRM", "Make.com", "n8n", "Workflow Automation", "Webhooks", "REST APIs", "Google Sheets"],
  },
  {
    category: "AI & Agent Systems",
    icon: "🤖",
    skills: ["AI Agents", "Model Context Protocol (MCP)", "Google Gemini", "LLM APIs", "Prompt Engineering", "Chatbot Workflows"],
  },
  {
    category: "Full-Stack Development",
    icon: "💻",
    skills: ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "JavaScript", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    category: "Backend & Data",
    icon: "🗄️",
    skills: ["Python", "FastAPI", "Flask", "MongoDB", "Supabase", "Prisma", "JSON APIs", "Database Design"],
  },
  {
    category: "ML & Computer Vision",
    icon: "👁️",
    skills: ["YOLOv8", "PyTorch", "OpenCV", "NumPy", "CUDA", "Streamlit", "Gradio"],
  },
  {
    category: "Tools & Deployment",
    icon: "🚀",
    skills: ["Git", "GitHub", "Vercel", "Docker", "Render", "Railway", "Grafana", "Linux"],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-label="Core Skills"
      style={{
        padding: "6rem 2.5rem",
        background: "var(--surface)",
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
            Core Skills & Technical Architecture
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1.02rem",
              maxWidth: 620,
              lineHeight: 1.65,
            }}
          >
            From AI agent protocols and workflow integrations to resilient full-stack systems and computer vision.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {SKILL_GROUPS.map((grp) => (
            <div
              key={grp.category}
              style={{
                background: "var(--surface)",
                border: "1px solid #e0ddd6",
                borderRadius: 14,
                padding: "1.8rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span style={{ fontSize: "1.4rem" }}>{grp.icon}</span>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "var(--text)",
                  }}
                >
                  {grp.category}
                </h3>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                {grp.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      color: "var(--text)",
                      background: "var(--surface)",
                      border: "1px solid #e5e7eb",
                      borderRadius: 6,
                      padding: "0.3rem 0.65rem",
                    }}
                  >
                    {skill}
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

