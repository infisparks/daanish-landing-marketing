"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart2, PieChart, Briefcase, Send, Monitor, Database } from "lucide-react";

const services = [
  {
    icon: BarChart2,
    title: "Deep Business Audit",
    desc: "We analyze your current business position, identify opportunities, and uncover bottlenecks that limit your growth potential.",
    features: ["Competitive landscape analysis", "Conversion rate assessment", "Customer journey mapping"],
  },
  {
    icon: PieChart,
    title: "Strategic Marketing Operations",
    desc: "We execute data-driven campaigns that focus on key performance indicators and strategic business objectives.",
    features: ["KPI-focused campaign management", "Performance tracking & reporting", "Target audience segmentation"],
  },
  {
    icon: Briefcase,
    title: "Sales Funnel Optimization",
    desc: "We design and optimize high-converting sales funnels that turn prospects into customers and maximize your ROI.",
    features: ["Conversion-focused landing pages", "Email automation sequences", "A/B testing & optimization"],
  },
  {
    icon: Send,
    title: "Persuasive Content Creation",
    desc: "We develop compelling content that connects with your audience's psychology and drives action. Set the tone and brand identity.",
    features: ["Sales copywriting", "Social media content planning", "Irresistible offer creation"],
  },
  {
    icon: Monitor,
    title: "Paid Media Management",
    desc: "We create and manage targeted advertising campaigns that deliver measurable results across multiple platforms.",
    features: ["Facebook & Instagram Ads", "Google Ads & Display", "Retargeting campaigns"],
  },
  {
    icon: Database,
    title: "CRM & Growth Operations",
    desc: "We implement and optimize CRM systems that nurture leads through the entire customer journey.",
    features: ["CRM implementation & setup", "Lead nurturing automation", "Sales process optimization"],
  },
];

interface ServicesProps {
  onCtaClick: () => void;
}

export default function Services({ onCtaClick }: ServicesProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-[#050e24] via-[#030d2e] to-[#051545] py-24 px-5 lg:px-8"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(37,99,235,0.08),transparent)]" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300">Our Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6 drop-shadow-md">
            Strategic Performance <br className="hidden sm:block"/> Marketing Solutions
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base leading-relaxed font-light">
            We don't just drive traffic—we build complete acquisition systems that convert visitors into customers
            and maximize your ROI.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl p-8 transition-all duration-500 hover:border-white/10 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-400/5 border border-blue-400/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/30 transition-all duration-300 shadow-inner">
                <svc.icon size={22} className="text-blue-300" />
              </div>

              <h3 className="text-white font-bold text-xl mb-3">{svc.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">{svc.desc}</p>

              <ul className="space-y-3 relative z-10 w-full mb-2">
                {svc.features.map((f) => (
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

        {/* Bottom text + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <button
            onClick={onCtaClick}
            className="group px-8 py-4 rounded-xl bg-[#1d63ed] text-white font-bold text-sm shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] active:scale-95 transition-all duration-300"
          >
            <span className="group-hover:scale-105 inline-block transition-transform duration-300">Schedule Your Strategy Call</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
