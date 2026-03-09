"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { techStack } from "@/data/projectsData";

interface TechItemProps {
  name: string;
  icon: string;
  index: number;
  categoryIndex: number;
}

function TechItem({ name, icon, index, categoryIndex }: TechItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.4, 
        delay: categoryIndex * 0.1 + index * 0.05 
      }}
      whileHover={{ 
        y: -12, 
        scale: 1.15,
        transition: { duration: 0.2 }
      }}
      className="group relative flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-pointer backdrop-blur-sm"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />
      
      {/* Icon Container */}
      <div className="relative w-12 h-12 md:w-14 md:h-14 mb-3 flex items-center justify-center">
        <Image
          src={icon}
          alt={name}
          width={40}
          height={40}
          unoptimized
          className="object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      {/* Name */}
      <span className="relative text-xs md:text-sm font-medium text-gray-400 group-hover:text-white transition-colors text-center">
        {name}
      </span>
      
      {/* Premium Tooltip */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          whileHover={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 shadow-lg shadow-purple-500/30"
        >
          {name}
          {/* Tooltip Arrow */}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-purple-600 to-pink-600 rotate-45 -z-10" />
        </motion.div>
      </AnimatePresence>
      
      {/* Hover Ring Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-purple-500/30 transition-colors duration-300"
      />
    </motion.div>
  );
}

interface TechCategoryProps {
  title: string;
  items: Array<{ name: string; icon: string }>;
  categoryIndex: number;
  gradient: string;
}

function TechCategory({ title, items, categoryIndex, gradient }: TechCategoryProps) {
  if (!items || items.length === 0) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
      className="relative"
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${gradient}`} />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
      </div>

      {/* Tech Items Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
        {items.map((item, index) => (
          <TechItem
            key={item.name}
            name={item.name}
            icon={item.icon}
            index={index}
            categoryIndex={categoryIndex}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const categories = [
    {
      title: "Frontend",
      items: techStack.frontend || [],
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      title: "Backend & APIs",
      items: techStack.backend || [],
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "Tools & Platforms",
      items: techStack.tools || [],
      gradient: "from-orange-400 to-red-500",
    },
  ];

  return (
    <section id="techstack" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
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
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 mb-4 text-sm font-medium text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full"
          >
            My Arsenal
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Tech{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="space-y-12">
          {categories.map((category, index) => (
            <TechCategory
              key={category.title}
              title={category.title}
              items={category.items}
              categoryIndex={index}
              gradient={category.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
