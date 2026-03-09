"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Instagram, Mail, Heart, ArrowUp, ExternalLink } from "lucide-react";
import { socialLinks } from "@/data/projectsData";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#techstack" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="relative bg-slate-950 border-t border-white/10 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 md:py-20"
        >
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 mb-4 text-sm font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full"
            >
              Get in Touch
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Let&apos;s Work{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Have a project in mind? I&apos;d love to hear from you. Let&apos;s create something amazing together.
            </p>

            {/* Email Button */}
            <motion.a
              href={`mailto:${socialLinks.email}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
            >
              <Mail size={20} />
              Send me an Email
              <ExternalLink size={16} />
            </motion.a>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Logo & Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                className="inline-block text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2"
              >
                Ali Mahmoud
              </a>
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap justify-center gap-6"
            >
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center md:justify-end gap-4"
            >
              {[
                { icon: Github, href: socialLinks.github, label: "GitHub" },
                { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
                { icon: Facebook, href: socialLinks.facebook, label: "Facebook" },
                { icon: Instagram, href: socialLinks.instagram, label: "Instagram" },
                { icon: Mail, href: `mailto:${socialLinks.email}`, label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Made with <Heart size={14} className="text-pink-500 fill-pink-500 animate-pulse" /> using Next.js & Tailwind CSS
            </p>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-200"
            >
              <ArrowUp size={16} />
              Back to Top
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
