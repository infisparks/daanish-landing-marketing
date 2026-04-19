"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  onCtaClick: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const } }),
};

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Image 1 matching Background */}
      <div className="absolute inset-0 bg-[#030712]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#060b27] via-[#0a1e5e] to-[#0878b8] opacity-90" />
      
      {/* Light glow overlay to make it "less dark and less light" - perfectly balanced */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.2),transparent_70%)]" />
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#030918]/80 to-transparent" />

      {/* Floating Orbs for advanced UI */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[100px]"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-[25rem] h-[25rem] bg-cyan-400/10 rounded-full blur-[100px]"
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 lg:px-8 text-center pt-32 pb-16">
        
        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 drop-shadow-xl"
        >
          We Build Systems That <br className="hidden md:block" />
          Turn Enquiries Into <br className="hidden md:block" />
          Paying Clients
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-light"
        >
          We help businesses get more leads, follow up automatically, and convert those leads into real customers using ads, landing pages, and smart automation.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex flex-col items-center justify-center gap-4 mb-20"
        >
          <button
            onClick={onCtaClick}
            className="group flex flex-col items-center justify-center min-w-[240px] px-8 py-3.5 rounded-xl bg-[#1d63ed] hover:bg-[#2563eb] border border-blue-400/20 text-white shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] active:scale-95 transition-all duration-300"
          >
            <span className="font-bold text-lg tracking-wide group-hover:scale-105 transition-transform">Book Strategy Call</span>
            <span className="text-xs font-normal text-white/70 mt-0.5">Let's talk , Work together</span>
          </button>
          
          <div className="text-white/60 text-sm font-medium mt-2">
            Trusted by industry leaders
          </div>
        </motion.div>
      </div>
    </section>
  );
}
