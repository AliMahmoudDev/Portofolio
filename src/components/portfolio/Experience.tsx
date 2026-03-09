"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  status: "current" | "completed" | "ongoing";
  highlights: string[];
  index: number;
}

function ExperienceItem({ title, subtitle, description, icon, status, highlights, index }: ExperienceItemProps) {
  const statusConfig = {
    current: {
      badge: "Current",
      badgeClass: "bg-gradient-to-r from-green-500 to-emerald-500",
      dotClass: "bg-green-500 animate-pulse",
    },
    completed: {
      badge: "Completed",
      badgeClass: "bg-gradient-to-r from-cyan-500 to-blue-500",
      dotClass: "bg-cyan-500",
    },
    ongoing: {
      badge: "Ongoing",
      badgeClass: "bg-gradient-to-r from-purple-500 to-pink-500",
      dotClass: "bg-purple-500 animate-pulse",
    },
  };

  const config = statusConfig[status];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative group"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-cyan-500/30 to-transparent md:hidden" />
      
      {/* Card Container */}
      <div className="relative ml-6 md:ml-0 p-6 md:p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5">
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:to-cyan-500/5 transition-all duration-500" />

        <div className="relative flex flex-col md:flex-row md:items-start gap-6">
          {/* Icon */}
          <div className="hidden md:flex flex-shrink-0 w-16 h-16 items-center justify-center bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-xl border border-white/10">
            <div className="text-purple-400">
              {icon}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
              <div className="flex items-center gap-3">
                {/* Mobile Icon */}
                <div className="md:hidden flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-lg border border-white/10">
                  <div className="text-purple-400 scale-75">
                    {icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {subtitle}
                  </p>
                </div>
              </div>
              {/* Status Badge */}
              <span className={`self-start sm:ml-auto px-3 py-1 text-xs font-semibold text-white rounded-full ${config.badgeClass} shadow-lg`}>
                <span className="flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${config.dotClass}`} />
                  {config.badge}
                </span>
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
              {description}
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2">
              {highlights.map((highlight, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300"
                >
                  <CheckCircle2 size={12} className="text-green-400" />
                  {highlight}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Connector Arrow (for desktop) */}
      {index < 2 && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="hidden md:flex absolute left-1/2 -translate-x-1/2 -bottom-4 z-10"
        >
          <div className="p-1 bg-slate-900 border border-white/10 rounded-full">
            <ArrowRight size={16} className="text-purple-400 rotate-90" />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Development Training",
      subtitle: "Instant Software Solutions",
      description: "Currently undergoing intensive training in modern web development, focusing on React.js, clean code architecture, and state management (Redux). Gaining hands-on experience by translating complex UI/UX designs into responsive, high-performance web interfaces.",
      icon: <Briefcase size={28} />,
      status: "current" as const,
      highlights: ["React.js", "Redux", "Clean Code", "UI/UX Implementation", "Agile"],
    },
    {
      title: "CS50x: Introduction to Computer Science",
      subtitle: "Harvard University (edX)",
      description: "Completed a rigorous foundational program covering core computer science principles, including algorithmic thinking, data structures, and memory management. Developed problem-solving skills by building diverse web applications using Python, JavaScript, and C.",
      icon: <GraduationCap size={28} />,
      status: "completed" as const,
      highlights: ["Algorithms", "Data Structures", "Python", "JavaScript", "C"],
    },
    {
      title: "Self-Directed Frontend Projects",
      subtitle: "Portfolio-Based Learning",
      description: "Independently designed and deployed 4+ full-scale projects, leveraging React.js, Tailwind CSS, and Framer Motion. Focused on API integration, performance optimization (95%+ Lighthouse scores), and modular component design to deliver seamless user experiences.",
      icon: <Rocket size={28} />,
      status: "ongoing" as const,
      highlights: ["React.js", "Tailwind CSS", "API Integration", "Performance Optimization", "Component Design"],
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 mb-4 text-sm font-medium text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full"
          >
            Career Growth
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Professional Journey{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              & Learning Path
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A timeline of my growth, learning experiences, and professional milestones in software development
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              subtitle={exp.subtitle}
              description={exp.description}
              icon={exp.icon}
              status={exp.status}
              highlights={exp.highlights}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
