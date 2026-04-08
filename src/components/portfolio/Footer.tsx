import { Github, Linkedin, Facebook, Instagram, Heart, ArrowUp } from "lucide-react";
import { socialLinks } from "@/data/projectsData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="relative bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Ali Mahmoud
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Front-End React Developer
            </p>
            <p className="mt-4 text-sm text-gray-500 flex items-center justify-center md:justify-start gap-1">
              © {new Date().getFullYear()} Made with{" "}
              <Heart className="w-4 h-4 text-red-500 inline" /> by Ali Mahmoud
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center justify-center gap-6">
            {[
              { name: "Home", href: "#home" },
              { name: "Experience", href: "#experience" },
              { name: "Projects", href: "#projects" },
              { name: "Contact", href: "#contact-form" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-end gap-3">
            {[
              { icon: Github, href: socialLinks.github, label: "GitHub" },
              { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
              { icon: Facebook, href: socialLinks.facebook, label: "Facebook" },
              { icon: Instagram, href: socialLinks.instagram, label: "Instagram" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            Built with Next.js, React.js, Tailwind CSS & Framer Motion
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs text-gray-500 hover:text-cyan-400 transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
