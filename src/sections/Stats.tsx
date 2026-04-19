"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "98%", label: "Client Retention Rate" },
  { value: "4.2x", label: "Average ROI Increase" },
  { value: "45%+", label: "Conversion Rate Boost" },
  { value: "12+", label: "Industries Served" },
];

const pills = ["1M+ Ad Spend", "20k+ Leads Generated", "10+ SMEs & 5+ Brands"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const } }),
};

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stats" className="relative pb-24 px-5 lg:px-8 -mt-10 z-20">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Dotted Border Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2rem] border-[1.5px] border-dashed border-white/40 p-1 backdrop-blur-sm"
        >
          {/* Inner Content Container */}
          <div className="rounded-[1.8rem] bg-[#021342]/40 backdrop-blur-md px-6 py-12 lg:px-16 lg:py-16">
            
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-center text-3xl lg:text-4xl font-bold text-white mb-14 drop-shadow-md tracking-tight"
            >
              Why Clients Choose Us
            </motion.h2>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-y-12 gap-x-8 mb-14">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={i + 1}
                  className="text-center flex flex-col items-center group cursor-default"
                >
                  <div className="text-4xl lg:text-5xl font-black text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                    {s.value}
                  </div>
                  <div className="text-sm text-white/80 font-medium tracking-wide">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pills Box */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={5}
              className="flex justify-center mb-10"
            >
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 px-6 py-3.5 rounded-xl border border-[#0d6db6] bg-[#0a428c]/40 shadow-inner w-full max-w-4xl">
                {pills.map((p, index) => (
                  <span
                    key={p}
                    className="text-white text-[13px] lg:text-sm font-semibold tracking-wide whitespace-nowrap"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Divider Line */}
            <div className="w-full h-px bg-white/20 mb-8 max-w-4xl mx-auto" />

            {/* Quote */}
            <motion.blockquote
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={6}
              className="text-center text-white/90 text-[13px] lg:text-[15px] italic font-light max-w-3xl mx-auto tracking-wide leading-relaxed"
            >
              "Their strategic approach to our funnel increased our qualified leads by 67% within just 60 days."
            </motion.blockquote>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
