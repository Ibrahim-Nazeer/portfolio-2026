"use client";

import React, { useEffect, useRef, useState } from "react";
import CursorGrid from "@/components/ui/CursorGrid";
import { KnotAnimation } from "@/components/ui/knot-animation";
import { motion } from "framer-motion";

// ─── Design tokens ────────────────────────────────────────────────────────────
const T = {
  bg: "var(--bg)",
  surface: "var(--surface)",
  text: "var(--text)",
  muted: "var(--text-muted)",
  accent: "#7c5cbf",
  accentLight: "#b39ddb",
  border: "var(--border)",
  grid: "var(--grid-color)",
  dark: "#0c0c0c",
  fontSans: "var(--font-sans), 'Inter', system-ui, sans-serif",
  fontDisplay: "var(--font-display), 'Instrument Serif', Georgia, serif",
};

// ─── Content (centralized, easy to update) ───────────────────────────────────
const CONTENT = {
  name: "Syed Ibrahim Nazeer",
  initials: "SIN",
  role: "Automation Engineer & Full-Stack Developer",
  subrole: "AI Systems & Workflow Automation",
  location: "Hyderabad, India",
  yearsExp: "Student & Engineer",
  status: "Open to Work",
  eyebrow: "Portfolio · Automation & Full-Stack",
  headline: ["I engineer intelligent", "agent workflows", "and Digital Products."],
  headlineAccentIdx: 1,
  bio: "Automation-focused technology professional and student with hands-on experience in workflow automation, CRM operations, full-stack development, AI applications, and hackathon operations. Builds practical automation and AI solutions using APIs, web applications, databases, and agent-oriented tooling.",
  skills: ["AI Agents & MCP", "Zoho CRM", "Make.com & n8n", "Next.js & React", "Python & FastAPI", "YOLOv8 & PyTorch"],
  cta1: { label: "Explore Projects", href: "#projects" },
  cta2: { label: "  Resume  ", href: "https://drive.google.com/file/d/1U6BbRjXFHXPvOsdjqtsHCC_3XOVUxd8S/view?usp=drive_linkSyed-Ibrahim-Nazeer-Resume.pdf" },
  social: {
    github: "https://github.com/Ibrahim-Nazeer",
    linkedin: "https://linkedin.com/in/syed-ibrahim-nazeer",
    email: "mailto:syedibrahimnazeer30@gmail.com",
  },
  terminal: {
    title: "ibrahim — zsh",
    lines: [
      {
        cmd: "who_am_i",
        val: "Automation Engineer & Full-Stack Developer\n· Based in Hyderabad, India",
      },
      {
        cmd: "focus",
        val: "AI Agents (MCP), Workflow Automation & Web Apps",
      },
      {
        cmd: "currently",
        val: "Exploring AI-led product workflows",
      },
      {
        cmd: "open_to",
        val: "Complex problems with unclear briefs",
      },
    ],
  },
};

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.736-8.849L1.255 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const DribbbleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308a10.22 10.22 0 0 0 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.017-8.048 6.404A10.14 10.14 0 0 0 12 22.088c1.52 0 2.959-.333 4.247-.93l-.242-.09zm-9.88-2.876c.25-.47 3.025-5.395 8.338-7.079.138-.045.28-.087.42-.127-.27-.606-.556-1.21-.85-1.8-5.141 1.538-10.118 1.476-10.56 1.462-.003.098-.003.198-.003.3 0 2.88 1.093 5.502 2.865 7.465zm1.32-9.63c.45.01 4.79.052 9.61-1.256C15.753 6.04 14.015 4.437 12 4.437c-1.693 0-3.244.634-4.424 1.676zm.31-.59A10.043 10.043 0 0 1 12 2.09c2.295 0 4.382.818 6.01 2.167-4.636 1.282-9.016 1.22-9.456 1.208l-.004-.014zm12.25 3.51c-.1-.037-2.884-1.108-6.15-.543 1.47 4.025 2.07 7.298 2.186 8.018a10.14 10.14 0 0 0 3.964-7.475z" />
  </svg>
);
const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);
const PinIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

// ─── Small reusable styled pieces ─────────────────────────────────────────────
function SocialBtn({ href, label, id, children }: { href: string; label: string; id: string; children: React.ReactNode }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      id={id}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: 36, height: 36,
        borderRadius: 8,
        border: `1.5px solid ${hov ? T.accent : T.border}`,
        color: hov ? T.accent : T.muted,
        textDecoration: "none",
        background: hov ? "rgba(124,92,191,0.06)" : T.surface,
        transform: hov ? "translateY(-2px)" : "none",
        transition: "all 0.18s",
      }}
    >
      {children}
    </a>
  );
}

function SideNavLink({ href, icon, label, active }: { href: string; icon: React.ReactNode; label: string; active?: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", alignItems: "center", gap: "0.6rem",
        fontSize: "0.82rem", fontWeight: active ? 600 : 500,
        color: hov || active ? T.text : T.muted,
        textDecoration: "none",
        padding: "0.45rem 0.6rem",
        borderRadius: 6,
        background: hov || active ? T.bg : "transparent",
        transition: "all 0.15s",
        fontFamily: T.fontSans,
      }}
    >
      {icon} {label}
    </a>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [btn1Hov, setBtn1Hov] = useState(false);
  const [btn2Hov, setBtn2Hov] = useState(false);
  const [compactLayout, setCompactLayout] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1024px)");
    const update = () => setCompactLayout(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <section
      id="home"
      className="hero-section"
      aria-label="Hero section"
      style={{
        minHeight: "100dvh",
        background: T.bg,
        display: "flex",
        alignItems: "stretch",
        position: "relative",
        overflow: "hidden",
        fontFamily: T.fontSans,
      }}
    >
      <CursorGrid
        cellSize={60}
        lineWidth={1}
        gridColor="var(--grid-color)"
        color="var(--accent-light)"
        gridOpacity={0.24}
        maxOpacity={0.8}
        fillOpacity={0.06}
        radius={140}
        spotlight={0.6}
        clickPulse
        intro={false}
        style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
      />

      <div
        className="hero-inner"
        ref={containerRef}
        style={{
          flex: 1,
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          padding: "7rem 4rem 4rem",
          overflow: "hidden",
        }}
      >
        {/* Simple Knot animation */}
        <div
          aria-hidden="true"
          className="hero-knot hidden md:flex"
          style={{
            position: "absolute",
            top: "50%",
            right: "2.5rem",
            transform: "translateY(-50%)",
            width: "min(750px, 55vw)",
            height: "min(800px, 65vh)",
            zIndex: 1,
            pointerEvents: "none",
            userSelect: "none",
            alignItems: "center",
            justifyContent: "center",
            color: T.accent,
            opacity: 0.90,
            maskImage: "radial-gradient(circle at center, black 60%, transparent 95%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 60%, transparent 95%)",
          }}
        >
          <div style={{ transform: "scale(0.88)", transformOrigin: "center" }}>
            <KnotAnimation color={false} speedA={0.03} speedB={0.015} />
          </div>
        </div>

        {/* ── Hero copy ─────────────────────────────── */}
        <div className="hero-copy" style={{ maxWidth: 660, position: "relative", zIndex: 2 }}>
          {/* Headline */}
          <h1
            className="anim-fade-up delay-2"
            style={{
              fontFamily: T.fontDisplay,
              fontSize: "clamp(2.8rem, 5.5vw, 4.4rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: T.text,
              marginBottom: "1.5rem",
            }}
          >
            {CONTENT.headline.map((line, i) =>
              i === CONTENT.headlineAccentIdx ? (
                <em key={i} style={{ color: T.accent, display: "block" }}>{line}</em>
              ) : (
                <span key={i} style={{ display: "block" }}>{line}</span>
              )
            )}
          </h1>

          {/* Bio */}
          <p
            className="anim-fade-up delay-3"
            style={{
              fontSize: "1rem", lineHeight: 1.75, color: T.muted,
              maxWidth: 510, marginBottom: "2.5rem",
            }}
          >
            {CONTENT.bio}
          </p>

          {/* CTAs */}
          <div className="anim-fade-up delay-4" style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
            <a
              href={CONTENT.cta1.href}
              id="hero-cta-primary"
              onMouseEnter={() => setBtn1Hov(true)}
              onMouseLeave={() => setBtn1Hov(false)}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.8rem 1.8rem",
                background: btn1Hov ? T.accent : "var(--primary)",
                color: btn1Hov ? "#fff" : "var(--primary-foreground)", borderRadius: 999,
                fontSize: "0.88rem", fontWeight: 500, textDecoration: "none",
                boxShadow: btn1Hov ? "0 8px 24px rgba(124,92,191,0.3)" : "none",
                transform: btn1Hov ? "translateY(-2px)" : "none",
                transition: "all 0.18s",
              }}
            >
              {CONTENT.cta1.label} <ArrowIcon />
            </a>
            <a
              href={CONTENT.cta2.href}
              id="hero-cta-resume"
              onMouseEnter={() => setBtn2Hov(true)}
              onMouseLeave={() => setBtn2Hov(false)}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.8rem 1.8rem",
                background: "transparent",
                color: btn2Hov ? T.accent : T.text,
                borderRadius: 999, fontSize: "0.88rem", fontWeight: 500,
                textDecoration: "none",
                border: `1.5px solid ${btn2Hov ? T.accent : T.border}`,
                transform: btn2Hov ? "translateY(-2px)" : "none",
                transition: "all 0.18s",
              }}
            >
              {CONTENT.cta2.label}
            </a>
          </div>

          {/* Social links */}
          <div className="anim-fade-up delay-5" style={{ display: "flex", gap: "0.75rem", marginTop: "2rem", alignItems: "center" }}>
            <SocialBtn href={CONTENT.social.github} label="GitHub" id="social-github"><GithubIcon /></SocialBtn>
            <SocialBtn href={CONTENT.social.linkedin} label="LinkedIn" id="social-linkedin"><LinkedInIcon /></SocialBtn>
            <SocialBtn href={CONTENT.social.email} label="Email Me" id="social-email"><MailIcon /></SocialBtn>
          </div>
        </div>

        {/* ── Terminal widget (draggable) ─────────────────────────────── */}
        <motion.div
          className="hero-terminal"
          drag={!compactLayout}
          dragConstraints={containerRef}
          dragElastic={0.12}
          dragMomentum={true}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20, power: 0.15 }}
          whileDrag={{
            scale: 1.03,
            boxShadow: "0 28px 70px rgba(0,0,0,0.45)",
            cursor: "grabbing",
          }}
          whileHover={{ scale: 1.01 }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          role="complementary"
          aria-label="Quick info terminal"
          style={{
            position: "absolute",
            bottom: "3rem",
            right: "3rem",
            width: 320,
            background: "#181825",
            borderRadius: 14,
            overflow: "hidden",
            boxShadow: "0 24px 60px rgba(0,0,0,0.32)",
            border: "1px solid rgba(255,255,255,0.08)",
            zIndex: 10,
            fontFamily: "'SFMono-Regular', Consolas, Menlo, Monaco, monospace",
            fontSize: "0.74rem",
            lineHeight: 1.55,
            cursor: "grab",
            touchAction: "none",
            userSelect: "none",
          }}
        >
          {/* Terminal title bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.65rem 0.95rem",
              background: "#1e1e2e",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f56", display: "inline-block" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e", display: "inline-block" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f", display: "inline-block" }} />
            </div>
            <span style={{ fontSize: "0.67rem", color: "#82879f", letterSpacing: "0.04em" }}>
              {CONTENT.terminal.title}
            </span>
            <div style={{ width: 34 }} />
          </div>

          {/* Terminal body */}
          <div style={{ padding: "1rem 1.15rem", color: "#cdd6f4" }}>
            {CONTENT.terminal.lines.map((line) => (
              <div key={line.cmd} style={{ marginBottom: "0.85rem" }}>
                <p style={{ display: "flex", alignItems: "center", gap: "0.45rem", marginBottom: "0.22rem" }}>
                  <span style={{ color: "#f472b6", fontWeight: 600 }}>~ $</span>
                  <span style={{ color: "#a6adc8" }}>{line.cmd}</span>
                </p>
                <div style={{ color: "#f1f5f9", fontWeight: 500, paddingLeft: "0.15rem" }}>
                  {line.val.split("\n").map((v, i) => (
                    <span key={i} style={{ display: "block" }}>{v}</span>
                  ))}
                </div>
              </div>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", marginTop: "0.25rem" }}>
              <span style={{ color: "#f472b6", fontWeight: 600 }}>~ $</span>
              <span
                aria-hidden
                style={{
                  display: "inline-block",
                  width: 9,
                  height: 14,
                  background: "#f1f5f9",
                  verticalAlign: "middle",
                  animation: "blink-cursor 1s step-end infinite",
                }}
              />
            </div>
          </div>
        </motion.div>
        {/* Scroll hint */}
        <div
          aria-hidden
          style={{
            position: "absolute", bottom: "2rem", left: "50%",
            transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center",
            gap: "0.4rem", color: T.muted,
            fontSize: "0.65rem", letterSpacing: "0.1em",
            textTransform: "uppercase", zIndex: 5,
            animation: "float-hint 3s ease-in-out infinite",
          }}
        >
          <span style={{
            width: 18, height: 18,
            borderRight: "1.5px solid currentColor", borderBottom: "1.5px solid currentColor",
            transform: "rotate(45deg)", display: "inline-block",
          }} />
          <span style={{ fontFamily: T.fontSans }}>Scroll</span>
        </div>
      </div>
    </section >
  );
}

// ─── Inline icon components (so no extra import needed) ──────────────────────
function HomeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
function BriefcaseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
