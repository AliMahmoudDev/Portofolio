"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink, Github, Lightbulb, AlertTriangle, BookOpen } from "lucide-react";
import type { Project } from "@/data/projectsData";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:max-w-2xl sm:w-[90vw] sm:max-h-[85vh] z-[70] bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[calc(100vh-2rem)] sm:max-h-[85vh]">
              {/* Project Image */}
              <div className="relative h-56 sm:h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-xs font-semibold text-white shadow-lg">
                    Featured Project
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 -mt-8 relative">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenge */}
                {project.challenge && (
                  <div className="mb-4 p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                      <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                        Challenge
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                )}

                {/* Solution */}
                {project.solution && (
                  <div className="mb-4 p-4 rounded-xl bg-green-500/5 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-5 h-5 text-green-400" />
                      <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider">
                        Solution
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}

                {/* Lessons Learned */}
                {project.lessons && (
                  <div className="mb-6 p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-5 h-5 text-purple-400" />
                      <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                        Lessons Learned
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.lessons}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Live
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/5 hover:border-white/40 transition-all"
                  >
                    <Github className="w-5 h-5" />
                    Source Code
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
