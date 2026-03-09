"use client";

import { motion } from "framer-motion";
import { ChevronDown, Download, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Glowing Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 opacity-75 blur-sm"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full bg-gradient-to-l from-pink-500 via-purple-500 to-cyan-400 p-1 opacity-50"
            />
            
            {/* Image Container */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-slate-800/50 bg-gradient-to-br from-slate-800 to-slate-900">
              <Image
                src="/profile.png"
                alt="Profile Photo"
                fill
                sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 320px"
                className="object-cover object-center"
                priority
              />
            </div>
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg shadow-green-500/20"
            >
              <span className="flex items-center gap-2 text-sm font-medium text-white">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Available for Work
              </span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-400">Front-End React.js Developer</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-white">Hi, I&apos;m </span>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Ali Mahmoud
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              A results-driven Front-End Developer specializing in React.js and modern JavaScript. 
              Passionate about building high-performance, user-centric web applications with 95%+ Lighthouse scores.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/25 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm"
              >
                <Download size={18} />
                Download CV
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-8 mt-10 justify-center lg:justify-start"
            >
              {[
                { value: "10+", label: "Projects Built" },
                { value: "800+", label: "Hours of Coding" },
                { value: "95%+", label: "Lighthouse Score" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToProjects}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors cursor-pointer"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
