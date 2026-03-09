"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Eye } from "lucide-react";
import Image from "next/image";
import { Project } from "@/data/projectsData";

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: (project: Project) => void;
}

export default function ProjectCard({ project, index, onViewDetails }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full"
    >
      {/* Card Container */}
      <div className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10">
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-cyan-500/5 transition-all duration-500" />

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-semibold text-white shadow-lg">
            Featured
          </div>
        )}

        {/* Image Container */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-all duration-500" />

          {/* Quick Action Buttons - Visible on Hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <ExternalLink size={20} />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <Github size={20} />
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative p-6">
          {/* Title with Arrow */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
              {project.title}
            </h3>
            <motion.div
              initial={{ x: 0, opacity: 0.5 }}
              className="text-gray-500 group-hover:text-purple-400 transition-colors"
            >
              <ArrowUpRight size={20} />
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.slice(0, 4).map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * techIndex }}
                className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-200"
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 text-xs font-medium text-gray-500">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          {/* View Details Button */}
          <motion.button
            onClick={() => onViewDetails(project)}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/10 rounded-xl font-medium text-white hover:border-purple-500/30 hover:bg-purple-500/20 transition-all duration-300"
          >
            <Eye size={16} />
            View Details
          </motion.button>

          {/* Bottom Links */}
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/10">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github size={14} />
              Source Code
            </a>
          </div>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}
