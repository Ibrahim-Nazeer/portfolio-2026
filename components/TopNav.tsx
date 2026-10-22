"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });

    // Initialize theme: keep light mode default unless explicitly set to dark
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
    window.dispatchEvent(new Event("themechange"));

    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    window.dispatchEvent(new Event("themechange"));
  };

  const isDark = theme === "dark";

  return (
    <header
      role="banner"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.25rem 2.5rem",
        background: isDark ? "rgba(18, 18, 26, 0.88)" : "rgba(245,244,240,0.88)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid #e0ddd6",
        boxShadow: scrolled
          ? isDark
            ? "0 4px 20px rgba(0,0,0,0.45)"
            : "0 2px 18px rgba(0,0,0,0.06)"
          : "none",
        transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
      }}
    >
      <a
        href="/"
        aria-label="Home"
        style={{
          fontFamily: "var(--font-display), 'Instrument Serif', Georgia, serif",
          fontSize: "1.25rem",
          color: isDark ? "#ffffff" : "#111",
          textDecoration: "none",
          fontStyle: "italic",
          letterSpacing: "-0.01em",
          transition: "color 0.2s",
        }}
      >
        Syed Ibrahim.
      </a>

      <nav aria-label="Main navigation">
        <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onMouseEnter={() => setHovered(link.href)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color:
                    hovered === link.href
                      ? isDark
                        ? "#ffffff"
                        : "#111"
                      : isDark
                      ? "#9ca3af"
                      : "#6b7280",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                  transition: "color 0.2s",
                  fontFamily: "'Inter', system-ui, sans-serif",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Light / Dark Mode Toggle Switch */}
      <button
        type="button"
        id="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: 58,
          height: 30,
          borderRadius: 999,
          padding: "3px",
          border: isDark ? "1px solid rgba(255,255,255,0.18)" : "1px solid #d4d0c8",
          background: isDark ? "#252538" : "#eae7df",
          cursor: "pointer",
          transition: "background 0.25s, border-color 0.25s",
          outline: "none",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 22,
            height: 22,
            opacity: isDark ? 0.35 : 0,
            transition: "opacity 0.2s",
          }}
        >
          <Sun size={13} color="#f59e0b" />
        </span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 22,
            height: 22,
            opacity: isDark ? 0 : 0.35,
            transition: "opacity 0.2s",
          }}
        >
          <Moon size={13} color="#6b7280" />
        </span>
        {/* Sliding thumb */}
        <div
          style={{
            position: "absolute",
            top: 3,
            left: isDark ? 31 : 3,
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: isDark ? "#7c5cbf" : "#ffffff",
            boxShadow: isDark
              ? "0 2px 6px rgba(124,92,191,0.5)"
              : "0 2px 6px rgba(0,0,0,0.15)",
            transition: "left 0.25s cubic-bezier(0.4, 0, 0.2, 1), background 0.25s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isDark ? (
            <Moon size={12} color="#ffffff" strokeWidth={2.5} />
          ) : (
            <Sun size={12} color="#d97706" strokeWidth={2.5} />
          )}
        </div>
      </button>
    </header>
  );
}
