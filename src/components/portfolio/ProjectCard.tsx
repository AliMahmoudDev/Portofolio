"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Eye } from "lucide-react";
import type { Project } from "@/data/projectsData";

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: (project: Project) => void;
}

export default function ProjectCard({
  project,
  index,
  onViewDetails,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-xs font-semibold text-white shadow-lg">
          Featured
        </div>
      )}

      {/* Project Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Overlay Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            aria-label="View Live"
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            aria-label="View Source"
          >
            <Github className="w-5 h-5" />
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/10">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* View Details Button */}
        <motion.button
          onClick={() => onViewDetails(project)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <Eye className="w-4 h-4" />
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
}
