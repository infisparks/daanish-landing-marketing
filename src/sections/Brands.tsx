"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const brands = [
  { name: "Dr. Sajid Firdousi", sub: "Herbal & Hikmat Expertise" },
  { name: "Skill Hub Production", sub: "Organic Marketing" },
  { name: "Al-khidmat", sub: "Skin Clinic Centre" },
  { name: "Al-barkat", sub: "Clothing" },
  { name: "Prince Ceramic", sub: "Tiles Manufacturing" },
  { name: "Noori Academy", sub: "Education" },
  { name: "Shafique Macka", sub: "Tours and Travel" },
  { name: "Kashmiri Vintage", sub: "Clothing Brand" },
  { name: "Model Town", sub: "Clothing Brand" },
  { name: "Aachari", sub: "Men's Fashion" },
  { name: "Zeeshan Masala", sub: "Spices" },
  { name: "Al-Hafiz Dresses", sub: "Fashion & Clothing" },
  { name: "Naseem", sub: "Beauty & Cosmetics" },
  { name: "Neelambar", sub: "Herbal Oil" },
  { name: "Strong Builder", sub: "Real Estate" },
];

export default function Brands() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="brands" className="relative bg-[#030712] py-24 px-5 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#05102a] to-[#030712] opacity-50" />
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 mb-3">Our Trusted Partners</p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Brands That Trust Our Expertise
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base leading-relaxed font-light">
            We've helped businesses across various industries scale their digital presence and achieve
            remarkable ROI through strategic marketing approaches.
          </p>
        </motion.div>

        {/* Brand grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(37,99,235,0.2)" }}
              className="group rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm p-5 text-center cursor-default transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.06]"
            >
              <div className="font-bold text-white/90 text-[13px] lg:text-sm leading-tight group-hover:text-blue-400 transition-colors">
                {brand.name}
              </div>
              <div className="text-[10px] text-white/40 mt-1 uppercase tracking-wider">{brand.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center text-white/30 text-xs mt-12 font-medium tracking-wide uppercase"
        >
          We've helped these brands achieve remarkable results through strategic performance marketing.
        </motion.p>
      </div>
    </section>
  );
}
