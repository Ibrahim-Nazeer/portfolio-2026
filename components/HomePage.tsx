"use client";

import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/hero/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

// Dynamically import the loading overlay (client-only, no SSR needed)
const LoadingOverlay = dynamic(
  () => import("@/components/ui/LoadingOverlay"),
  { ssr: false }
);

const MIN_LOADING_MS = 1200;

export default function HomePage() {
  const [showLoader, setShowLoader] = useState(true);
  const [loaderMounted, setLoaderMounted] = useState(true);

  useEffect(() => {
    // Check prefers-reduced-motion — if set, skip loader immediately
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShowLoader(false);
      setLoaderMounted(false);
      return;
    }

    // Prevent scrolling while loader is active
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      document.body.style.overflow = "";
      setShowLoader(false); // triggers fade-out CSS transition
    }, MIN_LOADING_MS);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  const handleLoaderDone = useCallback(() => {
    setLoaderMounted(false);
  }, []);

  return (
    <>
      {loaderMounted && (
        <LoadingOverlay show={showLoader} onDone={handleLoaderDone} />
      )}
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </>
  );
}
