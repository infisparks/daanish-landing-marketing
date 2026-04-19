"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Building2, Factory, ShoppingCart, Laptop, Home, Clock, Shield } from "lucide-react";

const industries = [
  { icon: Globe, label: "Hospitality" },
  { icon: Building2, label: "Healthcare" },
  { icon: Factory, label: "Manufacturing" },
  { icon: ShoppingCart, label: "E-Commerce" },
  { icon: Laptop, label: "SaaS" },
  { icon: Home, label: "Real Estate" },
];

const callPerks = [
  {
    icon: Clock,
    title: "30-Minute Session",
    desc: "Focused strategy call to analyze your business and identify opportunities for growth.",
  },
  {
    icon: Building2,
    title: "Industry Experience",
    desc: "We specialize in SaaS, E-Commerce, Real Estate, Healthcare, Manufacturing, and Hospitality.",
  },
  {
    icon: Shield,
    title: "No Obligation",
    desc: "Get valuable insights whether you decide to work with us or not. No pressure, no sales tactics.",
  },
];

interface IndustriesProps {
  onCtaClick: () => void;
}

export default function Industries({ onCtaClick }: IndustriesProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="industries" className="relative bg-[#030712] py-24 px-5 lg:px-8 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050e24] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(37,99,235,0.08),transparent)]" />

      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6 drop-shadow-md">
            Industries We Specialize In
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base leading-relaxed font-light">
            We have deep expertise in these specific industries, understanding their unique challenges and opportunities.
          </p>
        </motion.div>

        {/* Industry icons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, boxShadow: "0 8px 30px rgba(37,99,235,0.2)" }}
              className="group flex flex-col items-center gap-3 px-8 py-6 rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-md shadow-sm cursor-default transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.06] min-w-[130px]"
            >
              <ind.icon size={32} className="text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold text-white/80 group-hover:text-white transition-colors">
                {ind.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex justify-center mb-14"
        >
          <button
            onClick={onCtaClick}
            className="group px-10 py-4 rounded-xl bg-[#1d63ed] text-white font-bold text-base shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] active:scale-95 transition-all duration-300"
          >
            <span className="group-hover:scale-105 inline-block transition-transform duration-300">Schedule Your Strategy Call</span>
          </button>
        </motion.div>

        {/* Perks */}
        <div className="grid sm:grid-cols-3 gap-5">
          {callPerks.map((perk, i) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 text-center shadow-sm hover:bg-white/[0.04] hover:border-blue-500/20 transition-all duration-500 group"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <perk.icon size={26} className="text-blue-400" />
              </div>
              <h4 className="font-bold text-white mb-3 text-lg">{perk.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed font-light">{perk.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
