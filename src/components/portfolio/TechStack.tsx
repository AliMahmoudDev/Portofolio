"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { techStack } from "@/data/projectsData";

interface TechItemProps {
  name: string;
  icon: string;
  index: number;
}

function TechItem({ name, icon, index }: TechItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="group flex flex-col items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 cursor-default"
    >
      <div className="relative w-12 h-12 flex items-center justify-center">
        <Image
          src={icon}
          alt={name}
          width={40}
          height={40}
          className="object-contain group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
          fetchPriority="low"
        />
      </div>
      <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors text-center">
        {name}
      </span>
    </motion.div>
  );
}

interface TechCategoryProps {
  title: string;
  items: { name: string; icon: string }[];
  categoryIndex: number;
}

function TechCategory({ title, items, categoryIndex }: TechCategoryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
    >
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
        {title}
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
        {items.map((item, index) => (
          <TechItem
            key={item.name}
            name={item.name}
            icon={item.icon}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const categories = [
    { title: "Front-End", items: techStack.frontend },
    { title: "Back-End & Database", items: techStack.backend },
    { title: "Tools & Platforms", items: techStack.tools },
  ];

  return (
    <section id="techstack" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            What I Use
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Tech{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build modern, performant web
            applications.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((category, index) => (
            <TechCategory
              key={category.title}
              title={category.title}
              items={category.items}
              categoryIndex={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
