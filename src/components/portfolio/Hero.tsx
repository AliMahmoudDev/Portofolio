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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex-shrink-0"
          >
            {/* Rotating Glowing Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-md opacity-60"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-80"
            />
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-white/20">
              <Image
                src="/profile.webp"
                alt="Ali Mahmoud - Front-End React Developer"
                fill
                sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Hero Content */}
          <div className="text-center lg:text-left">
            {/* Available for Work Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-green-400 text-sm font-medium">
                Available for Work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Ali Mahmoud
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-8 leading-relaxed"
            >
              A passionate{" "}
              <span className="text-cyan-400 font-semibold">Front-End Developer</span>{" "}
              specializing in{" "}
              <span className="text-purple-400 font-semibold">React.js</span>,{" "}
              <span className="text-pink-400 font-semibold">Next.js</span>, and{" "}
              modern JavaScript. I build high-performance, user-centric web
              applications with clean code and pixel-perfect designs.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              {/* View My Work Button */}
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-300"
              >
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Download CV Button */}
              <motion.a
                href="/Ali_Mahmoud_CV.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/5 hover:border-white/40 transition-all duration-300"
              >
                <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex items-center gap-8 sm:gap-12 mt-12 justify-center lg:justify-start"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-sm text-gray-500 mt-1">Projects Built</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  800+
                </div>
                <div className="text-sm text-gray-500 mt-1">Hours of Coding</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">
                  95%+
                </div>
                <div className="text-sm text-gray-500 mt-1">Lighthouse Score</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500 cursor-pointer hover:text-gray-300 transition-colors"
          onClick={scrollToProjects}
        >
          <span className="text-xs font-medium tracking-wider uppercase">
            Scroll Down
          </span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
