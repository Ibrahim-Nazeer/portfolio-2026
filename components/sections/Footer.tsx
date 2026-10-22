"use client";

import React from "react";

export default function Footer() {
  return (
    <footer
      className="content-footer"
      style={{
        padding: "3rem 2.5rem",
        background: "#0c0c0c",
        color: "#8b949e",
        borderTop: "1px solid #222222",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        <div>
          <span
            style={{
              fontFamily: "var(--font-display), 'Instrument Serif', Georgia, serif",
              fontSize: "1.3rem",
              color: "var(--surface)",
              fontStyle: "italic",
            }}
          >
            Syed Ibrahim Nazeer.
          </span>
          <p style={{ fontSize: "0.82rem", color: "#666", marginTop: "0.25rem" }}>
            Automation Engineer · AI & Full-Stack Systems · Hyderabad, India
          </p>
        </div>

        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <a
            href="https://github.com/Ibrahim-Nazeer"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "0.82rem", color: "#8b949e", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--surface)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8b949e")}
          >
            GitHub
          </a>
          <a
            href="mailto:syedibrahimnazeer30@gmail.com"
            style={{ fontSize: "0.82rem", color: "#8b949e", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--surface)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8b949e")}
          >
            Email
          </a>
          <a
            href="/Syed-Ibrahim-Nazeer-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "0.82rem", color: "#8b949e", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--surface)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8b949e")}
          >
            Résumé PDF
          </a>
        </div>
      </div>
    </footer>
  );
}

