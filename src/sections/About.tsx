"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const founders = [
  {
    tag: "Meet the Founder",
    name: "Faiz Ansari",
    role: "Founder & CEO of firstoptionagency",
    bio: "Our 5 years of experience made us experts in the niche and we got the opportunity to work with 20+ SMEs & brands. I helped 10+ Brands, Saas & Startups to generate 20+ lakh in Revenue in one Month using my Customer understanding method.",
    image: "/images/founder.jpg",
    placeholder: "FA",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    tag: "Meet the Co-Founder",
    name: "Abdullahgraphy",
    role: "Co-Founder & COO of firstoptionagency",
    bio: "I'm Abdullhgraphy, a content creator with 12.5K+ organic followers built through consistent and valuable content. I understand how social media works, what kind of videos perform, and how to turn ideas into content that actually connects with people. From visuals to storytelling, I focus on creating content that feels real and delivers results.",
    image: "/images/cofounder.jpg",
    placeholder: "AG",
    gradient: "from-cyan-600 to-blue-500",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" className="relative bg-[#030712] py-24 px-5 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-t from-[#050e24] to-[#030712] opacity-50" />
      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 mb-3">Our Team</p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">The Minds Behind the Agency</h2>
          <p className="text-white/60 max-w-xl mx-auto text-base leading-relaxed font-light">
            Driven by results, guided by data, and passionate about your growth.
          </p>
        </motion.div>

        <div className="space-y-16">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10`}
            >
              {/* Image */}
              <div className="shrink-0 relative group">
                <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-56 h-64 lg:w-64 lg:h-80 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/5">
                  {/* Placeholder avatar — swap src to real image path */}
                  <div className={`w-full h-full bg-gradient-to-br ${f.gradient} flex items-center justify-center`}>
                    <span className="text-white text-6xl font-black opacity-30">{f.placeholder}</span>
                  </div>
                  {/* Swap this Image tag when real photos are available */}
                  {/* <Image src={f.image} alt={f.name} fill className="object-cover" /> */}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-2">{f.tag}</p>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight">{f.name}</h3>
                <p className="text-blue-400 font-semibold text-sm mb-6 tracking-wide">{f.role}</p>
                <p className="text-white/70 text-base leading-relaxed max-w-xl font-light">{f.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
