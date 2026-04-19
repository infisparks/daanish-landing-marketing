"use client";

import { motion } from "framer-motion";
import Logo from "@/components/Logo";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#020617] border-t border-white/5 py-16 px-5 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo size="md" />
          </motion.div>

          {/* Social / Info */}
          <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
            <ul className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/40 hover:text-white text-[13px] font-medium transition-all duration-300 hover:tracking-widest"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2">
              <p className="text-white/30 text-xs tracking-wide">
                &copy; 2026 First Option Agency. All Rights Reserved.
              </p>
              <p className="text-white/20 text-[10px] uppercase tracking-[0.3em]">
                Excellence in Performance Marketing
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
