"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, ArrowRight, MapPin } from "lucide-react";

interface ContactProps {
  onCtaClick: () => void;
}

export default function Contact({ onCtaClick }: ContactProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="contact"
      className="relative bg-[#030918] py-24 px-5 lg:px-8 overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(37,99,235,0.08),transparent)]" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-6">Get In Touch</p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6 drop-shadow-md">
            Ready to Scale Your Business?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base leading-relaxed font-light">
            Let's talk about your business goals and how we can help you achieve them. Book a free 30-minute strategy call today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Contact info card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-xl p-8 lg:p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-white font-bold text-xl mb-8">Contact Information</h3>

              <div className="space-y-6">
                <a
                  href="mailto:hello@firstoptionagency.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/30 transition-all duration-300">
                    <Mail size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest mb-0.5">Email</p>
                    <p className="text-white font-bold text-[13px] lg:text-sm group-hover:text-blue-300 transition-colors">
                      hello@firstoptionagency.com
                    </p>
                  </div>
                </a>

                <a href="tel:+911234567890" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-400/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/25 transition-colors">
                    <Phone size={20} className="text-blue-300" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors">
                      +91 12345 67890
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-400/20 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-blue-300" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">Location</p>
                    <p className="text-white font-medium text-sm">India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-white/40 text-xs">Response time: within 24 hours</p>
            </div>
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1d63ed] via-[#2563eb] to-[#1e40af]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_20%,rgba(255,255,255,0.1),transparent)]" />

            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/20">
                  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                    <path d="M12 2L3 7l9 5 9-5-9-5z" fill="white" />
                    <path d="M3 12l9 5 9-5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M3 17l9 5 9-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />
                  </svg>
                </div>

                <h3 className="text-white font-bold text-3xl mb-4 leading-tight tracking-tight">
                  Book Your Free <br/> Strategy Call
                </h3>
                <p className="text-blue-100/90 text-[15px] leading-relaxed mb-10 font-light">
                  Get a personalized 30-minute session where we analyze your business, identify growth opportunities, and provide a clear roadmap — absolutely free.
                </p>

                <ul className="space-y-2.5 mb-8">
                  {["No pressure. No sales tactics.", "100% Free — No credit card", "Actionable insights guaranteed"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-blue-100/70 text-sm">
                      <svg className="w-4 h-4 text-cyan-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onCtaClick}
                className="group flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-white text-[#1d63ed] font-bold text-sm shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:bg-white hover:scale-[1.03] active:scale-95 transition-all duration-300"
              >
                Book Strategy Call
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
