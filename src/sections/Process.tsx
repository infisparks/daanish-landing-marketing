"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Search, Map, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    label: "Deep Discovery",
    icon: Search,
    desc: "We deeply analyze your business, target audience, competitors, and current marketing efforts to identify your biggest growth opportunities.",
    highlights: ["Business model analysis", "Competitor intelligence", "Audience research & segmentation"],
  },
  {
    number: "02",
    label: "Strategic Planning",
    icon: Map,
    desc: "Based on our research, we create a comprehensive growth roadmap with clear milestones, KPIs, and actionable strategies.",
    highlights: ["Custom growth roadmap", "Channel selection & budgeting", "Campaign architecture design"],
  },
  {
    number: "03",
    label: "Implementation",
    icon: Zap,
    desc: "Our team executes the strategy with precision—building funnels, launching campaigns, and setting up automation systems.",
    highlights: ["Campaign launch & management", "Funnel & automation setup", "Content & creative production"],
  },
  {
    number: "04",
    label: "Optimization",
    icon: TrendingUp,
    desc: "We continuously monitor, test, and refine every element of your campaigns to maximize ROI and scale what works.",
    highlights: ["A/B testing & data analysis", "Continuous performance tuning", "Scalable growth strategies"],
  },
];

interface ProcessProps {
  onCtaClick: () => void;
}

export default function Process({ onCtaClick }: ProcessProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="relative bg-[#050e24] py-24 px-5 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[#030712] opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_10%,rgba(37,99,235,0.1),transparent)]" />

      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 mb-3">Our Methodology</p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Your Growth Followed <br className="hidden md:block"/> by a Proven Process
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base leading-relaxed font-light">
            Our systematic process identifies opportunities, creates strategic solutions, and implements systems that generate measurable results.
          </p>
        </motion.div>

        {/* Step tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="flex flex-wrap gap-3 justify-center mb-10"
        >
          {steps.map((step, i) => (
            <button
              key={step.label}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-[13px] font-bold transition-all duration-300 ${
                active === i
                  ? "bg-[#1d63ed] text-white shadow-[0_0_25px_rgba(37,99,235,0.4)] scale-105"
                  : "bg-white/5 border border-white/5 text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              <step.icon size={14} />
              {step.number}. {step.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2.5rem] border border-white/5 bg-[#0a1e5e]/20 backdrop-blur-xl p-10 lg:p-14 mb-14 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
          
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#1d63ed] flex items-center justify-center shadow-[0_0_25px_rgba(37,99,235,0.3)]">
            {(() => {
              const Icon = steps[active].icon;
              return <Icon size={28} className="text-white" />;
            })()}
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 tracking-tight">{steps[active].label}</h3>
          <p className="text-white/60 text-base leading-relaxed max-w-2xl mx-auto mb-8 font-light">{steps[active].desc}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {steps[active].highlights.map((h) => (
              <span
                key={h}
                className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-wide"
              >
                {h}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Footer note + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-white/40 text-[13px] max-w-2xl mx-auto mb-10 font-medium">
            Our systematic approach ensures that every marketing dollar you spend is strategically aligned with
            your business goals and optimized for maximum return on investment.
          </p>
          <button
            onClick={onCtaClick}
            className="group px-10 py-4 rounded-xl bg-[#1d63ed] text-white font-bold text-base shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] active:scale-95 transition-all duration-300"
          >
            <span className="group-hover:scale-105 inline-block transition-transform duration-300">Start Your Growth Journey</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
