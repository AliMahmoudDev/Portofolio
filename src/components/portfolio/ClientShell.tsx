"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import ProjectsSection from "@/components/portfolio/ProjectsSection";

// Lazy load below-fold components — ssr: false requires "use client"
const Experience = dynamic(() => import("@/components/portfolio/Experience"), {
  ssr: false,
  loading: () => <section className="py-20 md:py-32" />,
});
const TechStack = dynamic(() => import("@/components/portfolio/TechStack"), {
  ssr: false,
  loading: () => <section className="py-20 md:py-32" />,
});
const ContactForm = dynamic(() => import("@/components/portfolio/ContactForm"), {
  ssr: false,
  loading: () => <section className="py-20 md:py-32" />,
});
const Footer = dynamic(() => import("@/components/portfolio/Footer"), {
  ssr: false,
  loading: () => <footer className="py-16" />,
});

export default function ClientShell() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Experience Section — Lazy Loaded */}
      <Experience />

      {/* Projects Section — Interactive Client Component */}
      <ProjectsSection />

      {/* Tech Stack Section — Lazy Loaded */}
      <TechStack />

      {/* Contact Form Section — Lazy Loaded */}
      <ContactForm />

      {/* Footer — Lazy Loaded */}
      <Footer />
    </main>
  );
}
