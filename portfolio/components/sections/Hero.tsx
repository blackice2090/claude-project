"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Star } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { Badge } from "@/components/ui/Badge";

const floatingItems = [
  { icon: Code2, label: "TypeScript", x: "-12%", y: "28%", delay: 0 },
  { icon: Star, label: "5.0 Rating", x: "88%", y: "20%", delay: 0.3 },
  { icon: Sparkles, label: "AI-Ready", x: "80%", y: "70%", delay: 0.6 },
];

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg grid-bg"
      aria-label="Hero section"
    >
      {/* Radial glow backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#4f8ef7]/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#a855f7]/4 rounded-full blur-[120px]" />
      </div>

      {/* Floating UI chips */}
      {floatingItems.map(({ icon: Icon, label, x, y, delay }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 1, duration: 0.5, ease: "easeOut" }}
          style={{ left: x, top: y }}
          className="absolute hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0f0f23]/80 border border-white/8 backdrop-blur-sm text-xs text-slate-300 shadow-xl animate-float"
        >
          <Icon className="w-3.5 h-3.5 text-[#4f8ef7]" />
          {label}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <Badge variant="status" dot>
            Available for new projects
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          Crafting digital{" "}
          <br className="hidden sm:block" />
          <GradientText>experiences</GradientText>
          <br className="hidden sm:block" />
          that&nbsp;matter.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-xl mx-auto text-lg text-slate-400 leading-relaxed mb-10"
        >
          Full-stack developer & UI architect — building fast, accessible, and
          beautiful products that users love.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScroll("#projects")}
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#4f8ef7] to-[#06b6d4] text-white font-medium text-sm shadow-lg shadow-[#4f8ef7]/25 hover:shadow-[#4f8ef7]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            View my work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={() => handleScroll("#contact")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/5 font-medium text-sm transition-all duration-200"
          >
            Get in touch
          </button>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-slate-600"
        >
          {[
            { value: "50+", label: "Projects shipped" },
            { value: "8+", label: "Years experience" },
            { value: "30+", label: "Happy clients" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-0.5">
              <span className="text-2xl font-bold text-slate-200">{value}</span>
              <span className="text-slate-500 text-xs">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[#4f8ef7]/50 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
