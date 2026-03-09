"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { socialLinks } from "@/data/projectsData";

// ============================================
// EMAILJS CONFIGURATION
// ============================================
// Follow these steps to set up EmailJS:
//
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add your email service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}} - Sender's name
//    - {{from_email}} - Sender's email
//    - {{message}} - The message content
// 4. Replace the values below with your actual IDs:
const EMAILJS_CONFIG = {
  serviceId: "YOUR_SERVICE_ID",      // e.g., "service_abc123"
  templateId: "YOUR_TEMPLATE_ID",    // e.g., "template_xyz789"
  publicKey: "YOUR_PUBLIC_KEY",      // e.g., "user_123abc"
};
// ============================================

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Dynamic import of EmailJS to avoid SSR issues
      const emailjs = await import("@emailjs/browser");
      
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: socialLinks.email,
        },
        EMAILJS_CONFIG.publicKey
      );

      if (result.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email me directly.");
      // Reset error after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  const inputClasses = `
    w-full px-4 py-3 
    bg-white/5 border border-white/10 rounded-xl
    text-white placeholder-gray-500
    focus:outline-none focus:border-purple-500/50 focus:bg-white/10
    transition-all duration-300
    backdrop-blur-sm
  `;

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
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
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear from you. Fill out the form below and I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative p-8 md:p-10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 backdrop-blur-sm"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-50" />

          <form onSubmit={handleSubmit} className="relative space-y-6">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <User size={16} className="text-purple-400" />
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className={inputClasses}
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <Mail size={16} className="text-cyan-400" />
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className={inputClasses}
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <MessageSquare size={16} className="text-pink-400" />
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className={`${inputClasses} resize-none`}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: status === "loading" ? 1 : 1.02, y: -2 }}
              whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
              className={`
                w-full flex items-center justify-center gap-2 
                px-8 py-4 rounded-xl font-semibold text-white
                transition-all duration-300
                ${status === "loading" 
                  ? "bg-gray-600 cursor-not-allowed" 
                  : "bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30"
                }
              `}
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </motion.button>

            {/* Status Messages */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400"
                >
                  <CheckCircle size={18} />
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400"
                >
                  <AlertCircle size={18} />
                  {errorMessage || "Something went wrong. Please try again."}
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          {/* Direct Email Link */}
          <div className="relative mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-gray-400 text-sm mb-2">Or email me directly:</p>
            <a
              href={`mailto:${socialLinks.email}`}
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
            >
              {socialLinks.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
