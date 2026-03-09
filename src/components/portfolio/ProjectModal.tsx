"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Code2, Lightbulb, Target, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Project } from "@/data/projectsData";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl border border-white/10 shadow-2xl shadow-purple-500/10"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-gray-400 hover:text-white transition-colors backdrop-blur-sm"
              >
                <X size={20} />
              </motion.button>

              {/* Project Image */}
              <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  unoptimized
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-semibold text-white shadow-lg">
                    Featured Project
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-6">
                {/* Title */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Code2 size={18} className="text-cyan-400" />
                    <h3 className="text-lg font-semibold text-white">Technologies Used</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-full text-gray-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Challenge */}
                {project.challenge && (
                  <div className="p-4 bg-red-500/5 border border-red-500/10 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Target size={18} className="text-red-400" />
                      <h3 className="text-lg font-semibold text-white">The Challenge</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                )}

                {/* Solution */}
                {project.solution && (
                  <div className="p-4 bg-green-500/5 border border-green-500/10 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 size={18} className="text-green-400" />
                      <h3 className="text-lg font-semibold text-white">The Solution</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}

                {/* Lessons Learned */}
                {project.lessons && (
                  <div className="p-4 bg-purple-500/5 border border-purple-500/10 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb size={18} className="text-yellow-400" />
                      <h3 className="text-lg font-semibold text-white">Key Lessons Learned</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.lessons}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 transition-all backdrop-blur-sm"
                  >
                    <Github size={18} />
                    View Source
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
