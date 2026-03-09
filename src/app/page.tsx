"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Experience from "@/components/portfolio/Experience";
import ProjectCard from "@/components/portfolio/ProjectCard";
import ProjectModal from "@/components/portfolio/ProjectModal";
import TechStack from "@/components/portfolio/TechStack";
import ContactForm from "@/components/portfolio/ContactForm";
import Footer from "@/components/portfolio/Footer";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import { projectsData, Project } from "@/data/projectsData";
import { Sparkles } from "lucide-react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <section id="projects" className="relative py-20 md:py-32">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full"
            >
              <Sparkles size={16} />
              Featured Work
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">My </span>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for building exceptional digital experiences
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/AliMahmoudDev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              View All Projects
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
