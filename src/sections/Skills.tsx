"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Grid, Bell, Monitor, Megaphone, Gift } from "lucide-react";

const skills = [
  {
    icon: Lightbulb,
    title: "Business Problem Analysis",
    desc: "We dive deep to identify core business challenges and opportunities that others miss. Our analysis uncovers the real issues holding your growth back.",
    features: ["Revenue bottleneck identification", "Market opportunity mapping", "Conversion leak detection"],
  },
  {
    icon: Grid,
    title: "Customer Psychology",
    desc: "We understand what drives customer decisions in your industry. Our deep psychological insights help craft messaging that resonates and converts.",
    features: ["Behavioral trigger identification", "Buyer persona development", "Emotional response mapping"],
  },
  {
    icon: Bell,
    title: "Sales Copywriting",
    desc: "Our persuasive copywriting turns prospects into customers. We craft compelling messages that address pain points and present irresistible solutions.",
    features: ["High-converting landing pages", "Persuasive email sequences", "Compelling ad copy"],
  },
  {
    icon: Monitor,
    title: "Sales Funnel Design & Dev",
    desc: "We create conversion-focused landing pages that guide visitors to take action. Our designs combine aesthetics with proven conversion principles.",
    features: ["Conversion-optimized layouts", "Persuasive visual hierarchies", "Trust-building elements"],
  },
  {
    icon: Megaphone,
    title: "Paid Advertising",
    desc: "Our targeted ad campaigns generate quality leads while maximizing your budget. We focus on platforms that deliver the best ROI for your specific business.",
    features: ["Facebook & Instagram Ads", "Google & YouTube Ads", "Advanced targeting & retargeting"],
  },
  {
    icon: Gift,
    title: "Irresistible Offers",
    desc: "We craft no-brainer offers that your ideal customers can't refuse. Our offer strategies maximize value while driving immediate action.",
    features: ["Value proposition development", "Risk-reversal strategies", "Urgency & scarcity implementation"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="skills"
      className="relative bg-[#050f2a] py-24 px-5 lg:px-8"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(37,99,235,0.05),transparent)]" />
      <div className="absolute inset-0 bg-[#030712] opacity-60" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300">Specialized Skills</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6 drop-shadow-md">
            Skills That Drive Growth
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base leading-relaxed font-light">
            Our specialized skill set is designed to help businesses like yours achieve measurable growth through strategic marketing and optimization.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl p-8 transition-all duration-500 hover:border-white/10 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-400/5 border border-blue-400/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/30 transition-all duration-300 shadow-inner">
                <skill.icon size={22} className="text-blue-300" />
              </div>

              <h3 className="text-white font-bold text-xl mb-3 tracking-tight">{skill.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">{skill.desc}</p>

              <ul className="space-y-3 relative z-10 w-full mb-2">
                {skill.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[13px] text-white/70">
                    <svg className="w-4 h-4 text-blue-400 shrink-0 mt-0.5 group-hover:text-cyan-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
