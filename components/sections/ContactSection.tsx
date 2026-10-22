"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("syedibrahimnazeer30@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      style={{
        padding: "6rem 2.5rem",
        background: "var(--surface)",
        borderTop: "1px solid #e0ddd6",
      }}
    >
      <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "var(--font-display), 'Instrument Serif', Georgia, serif",
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
            fontWeight: 400,
            color: "var(--text)",
            lineHeight: 1.15,
            marginBottom: "1.25rem",
          }}
        >
          Let&apos;s build something intelligent together.
        </h2>

        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "1.08rem",
            maxWidth: 580,
            lineHeight: 1.7,
            margin: "0 auto 2.5rem",
          }}
        >
          Whether you are looking to automate intricate business workflows, architect agentic systems with MCP, or build scalable full-stack applications — my inbox is always open.
        </p>

        {/* Contact actions */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "3.5rem",
          }}
        >
          <a
            href="mailto:syedibrahimnazeer30@gmail.com"
            id="contact-email-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.9rem 2rem",
              background: "var(--text)",
              color: "var(--surface)",
              borderRadius: 999,
              fontSize: "0.95rem",
              fontWeight: 500,
              textDecoration: "none",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#7c5cbf";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--text)";
              e.currentTarget.style.transform = "none";
            }}
          >
            ✉️ Email Me Directly
          </a>

          <button
            onClick={copyEmail}
            id="contact-copy-email-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.9rem 1.8rem",
              background: "transparent",
              color: "var(--text)",
              border: "1.5px solid #e0ddd6",
              borderRadius: 999,
              fontSize: "0.95rem",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#7c5cbf";
              e.currentTarget.style.color = "#7c5cbf";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text)";
            }}
          >
            {copied ? "✓ Copied to Clipboard!" : "📋 Copy Email Address"}
          </button>

          <a
            href="/Syed-Ibrahim-Nazeer-Resume.pdf"
            id="contact-resume-download"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.9rem 1.8rem",
              background: "rgba(124,92,191,0.08)",
              color: "#5b21b6",
              border: "1.5px solid rgba(124,92,191,0.2)",
              borderRadius: 999,
              fontSize: "0.95rem",
              fontWeight: 500,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(124,92,191,0.15)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(124,92,191,0.08)";
              e.currentTarget.style.transform = "none";
            }}
          >
            📄 View Full Résumé PDF
          </a>
        </div>

        {/* Contact info grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
            padding: "2rem",
            background: "var(--surface)",
            border: "1px solid #e0ddd6",
            borderRadius: 14,
            textAlign: "left",
          }}
        >
          <div>
            <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#8b949e", marginBottom: "0.3rem" }}>
              Direct Email
            </div>
            <a
              href="mailto:syedibrahimnazeer30@gmail.com"
              style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--text)", textDecoration: "none" }}
            >
              syedibrahimnazeer30@gmail.com
            </a>
          </div>

          <div>
            <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#8b949e", marginBottom: "0.3rem" }}>
              Phone & WhatsApp
            </div>
            <a
              href="tel:+919581717931"
              style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--text)", textDecoration: "none" }}
            >
              +91 9581717931
            </a>
          </div>

          <div>
            <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#8b949e", marginBottom: "0.3rem" }}>
              Location
            </div>
            <span style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--text)" }}>
              Hyderabad, Telangana, India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

