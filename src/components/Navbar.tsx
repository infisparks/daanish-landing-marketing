"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Clients", href: "#stats" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Expertise", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  onCtaClick: () => void;
}

export default function Navbar({ onCtaClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#05091a]/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#home")}
          className="group transition-transform duration-300 hover:scale-[1.02]"
        >
          <Logo size="md" />
        </button>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-[13px] text-white/50 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300 font-medium tracking-wide"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={onCtaClick}
          className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#1d63ed] text-white text-[13px] font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_35px_rgba(37,99,235,0.5)] active:scale-95 transition-all duration-300"
        >
          Book a Call
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden bg-[#030918]/95 backdrop-blur-2xl border-b border-white/5 px-6 pb-8 pt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="w-full text-left px-4 py-3 text-sm text-white/60 hover:text-white rounded-xl hover:bg-white/5 transition-all"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-4">
                <button
                  onClick={() => { setMenuOpen(false); onCtaClick(); }}
                  className="w-full py-4 rounded-xl bg-[#1d63ed] text-white font-bold text-sm shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                >
                  Book a Call
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
