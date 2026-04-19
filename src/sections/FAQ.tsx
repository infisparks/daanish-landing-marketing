"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "What makes your agency different from other marketing agencies?",
    a: "We do not attend any process that does not perform, we evaluate every step & find urgent deep problems, systemise it, and follow proven tactics to run any campaign & optimise to achieve ROI.",
  },
  {
    q: "What is your minimum client budget requirement?",
    a: "We will help our clients manage any budget needs to get best results, we keep use of funds in such a way, to spend less and achieve more.",
  },
  {
    q: "Do you provide free consultation?",
    a: "Yes, our first 30–45 minute meeting is a free consultation, to know your existing situation so we can give more value & clarity.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "Sometimes yes. We work with brands & companies who think long term, and support us to achieve big results. Our clients are doing 7–8 figures with our help & support. We need to put months of efforts to meet this.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-[#030712] py-24 px-5 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#05102a] to-[#030712] opacity-50" />
      <div className="max-w-3xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300">Questions Answered</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6 drop-shadow-md">
            Frequently Asked <br className="hidden sm:block"/> Questions
          </h2>
          <p className="text-white/60 text-base leading-relaxed font-light">
            Get answers to common questions about our services and approach to performance marketing.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3 mb-10">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className={`w-full flex items-center justify-between gap-4 px-8 py-5 text-left font-bold text-sm transition-all duration-300 rounded-2xl border ${
                  open === i
                    ? "bg-[#1d63ed] border-[#1d63ed] text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                    : "bg-white/5 border-white/5 text-white/80 hover:bg-white/10 hover:border-white/10"
                }`}
              >
                <span>{faq.q}</span>
                <ChevronUp
                  size={18}
                  className={`shrink-0 transition-transform duration-300 ${open === i ? "rotate-0" : "rotate-180"}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="bg-[#1d63ed] px-8 pb-6 pt-1 rounded-b-2xl -mt-4">
                      <div className="border-t border-white/20 pt-5 text-white/90 text-[13px] leading-relaxed font-light font-sans antialiased tracking-wide">
                        {faq.a}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-white/40 text-[13px] mb-12 font-medium tracking-wide uppercase"
        >
          Still have questions? We're here to help. Contact us directly or schedule a free strategy session.
        </motion.p>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="relative px-8 py-6 rounded-2xl border-l-[6px] border-[#1d63ed] bg-white/5 backdrop-blur-sm"
        >
          <p className="text-white/80 text-[15px] leading-relaxed italic mb-3 font-light tracking-wide">
            "Marketing is Not Promoting your Products Direct to your audience, It's a Science to understand their
            pains & share the stories which relates to their subconscious feelings & Presenting offers that influence
            them to buy."
          </p>
          <footer className="text-[#1d63ed] text-xs font-black uppercase tracking-[0.2em]">— Faiz Ansari</footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
