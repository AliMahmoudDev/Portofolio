"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Code2, Briefcase } from "lucide-react";

interface ExperienceItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  technologies?: string[];
  index: number;
}

function ExperienceItem({
  icon,
  title,
  subtitle,
  description,
  date,
  technologies,
  index,
}: ExperienceItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-8 pb-12 last:pb-0 border-l-2 border-white/10 last:border-transparent"
    >
      {/* Timeline Dot */}
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 border-2 border-slate-950" />

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 group">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-colors">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                {title}
              </h3>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 whitespace-nowrap">
                {date}
              </span>
            </div>
            <p className="text-cyan-400/80 text-sm font-medium mb-3">{subtitle}</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
            {technologies && technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const experienceData = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Front-End (React) Diploma",
    subtitle: "Instant Software Solutions",
    description:
      "Enrolled in a comprehensive front-end development diploma covering the full web development stack from fundamentals to advanced concepts. The program spans HTML5, CSS3, JavaScript ES6+, Bootstrap 5, Sass, and Tailwind CSS, with deep dives into React.js including JSX, components, hooks, state management, routing, and Redux Toolkit. Also covers UI/UX design with Adobe XD, system analysis with ERD and UML diagrams, and professional skills including CV writing, freelancing, and job interview preparation.",
    date: "Dec 2025 – Present",
    technologies: ["React.js", "Redux Toolkit", "JavaScript", "Tailwind CSS", "Sass", "HTML5", "CSS3"],
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Front-End Development Intern",
    subtitle: "Instant Software Solutions",
    description:
      "Upcoming one-month intensive internship as part of the diploma program at Instant Software Solutions. Will work on real-world projects using collaborative platforms like GitHub, Slack, and Trello, applying modern development practices including design patterns, algorithms, and data structures to build production-ready web applications.",
    date: "Upcoming",
    technologies: ["React.js", "JavaScript", "Git", "Agile", "REST APIs"],
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "CS50x: Introduction to Computer Science",
    subtitle: "Harvard University via edX",
    description:
      "Completed Harvard's CS50x course, gaining a solid foundation in computer science fundamentals including algorithms, data structures, memory management, and computational thinking. Applied concepts through hands-on projects in C, Python, and SQL.",
    date: "2024",
    technologies: ["C", "Python", "SQL", "Algorithms", "Data Structures"],
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Personal Projects & Open Source",
    subtitle: "Self-Directed Development",
    description:
      "Built multiple front-end projects from scratch to apply and expand the skills learned throughout the diploma and self-study. Projects include an AI-powered medical diagnosis platform (Shifa), a full-featured React e-commerce application, a TMDB movies discovery app, and a Python-based Quran Reels Generator. Each project focuses on clean code, responsive design, and modern best practices.",
    date: "2024 – Present",
    technologies: ["React.js", "Next.js", "TypeScript", "Python", "REST APIs"],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            My Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Experience &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A timeline of my learning journey and professional development in
            front-end web development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {experienceData.map((item, index) => (
            <ExperienceItem
              key={index}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              date={item.date}
              technologies={item.technologies}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
