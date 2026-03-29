"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Zap,
  Shield,
  Palette,
  LineChart,
  Puzzle,
} from "lucide-react";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { GradientText } from "@/components/ui/GradientText";

const features = [
  {
    icon: Layers,
    title: "Full-Stack Architecture",
    description:
      "End-to-end systems design — from database schema to API design to polished UI. Scalable, maintainable, and production-ready.",
    color: "from-[#4f8ef7] to-[#06b6d4]",
    glow: "rgba(79,142,247,0.15)",
  },
  {
    icon: Zap,
    title: "Performance Obsessed",
    description:
      "Every millisecond matters. Lighthouse 100s, optimized bundles, edge deployment, and lazy loading as standard practice.",
    color: "from-[#f59e0b] to-[#f97316]",
    glow: "rgba(245,158,11,0.12)",
  },
  {
    icon: Palette,
    title: "UI/UX Craftsmanship",
    description:
      "Pixel-perfect interfaces with micro-interactions, accessibility baked in, and a design system that scales across teams.",
    color: "from-[#a855f7] to-[#ec4899]",
    glow: "rgba(168,85,247,0.12)",
  },
  {
    icon: Shield,
    title: "Security-First",
    description:
      "Auth flows, data validation, OWASP best practices, and dependency auditing — security is never an afterthought.",
    color: "from-[#10b981] to-[#06b6d4]",
    glow: "rgba(16,185,129,0.12)",
  },
  {
    icon: LineChart,
    title: "Data & Analytics",
    description:
      "Meaningful metrics, real-time dashboards, and data pipelines that turn raw numbers into actionable business insight.",
    color: "from-[#4f8ef7] to-[#a855f7]",
    glow: "rgba(79,142,247,0.12)",
  },
  {
    icon: Puzzle,
    title: "API & Integrations",
    description:
      "REST, GraphQL, WebSockets, third-party SDKs — seamless integration with any service your product needs to grow.",
    color: "from-[#ec4899] to-[#f97316]",
    glow: "rgba(236,72,153,0.12)",
  },
];

export function Features() {
  return (
    <section id="features" className="section-padding" aria-label="Features">
      <div className="container-inner">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#4f8ef7] mb-4">
            What I do
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Every layer of the stack,{" "}
            <GradientText>covered.</GradientText>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-lg leading-relaxed">
            From architecture decisions to deployment — I bring a holistic
            perspective that makes products better end-to-end.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, description, color, glow }) => (
            <AnimatedItem key={title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group relative p-6 rounded-2xl bg-[#0f0f23] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 h-full cursor-default"
                style={{
                  boxShadow: "0 0 0 0 transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${glow}, 0 0 0 1px rgba(255,255,255,0.06)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <h3 className="font-semibold text-white mb-2 text-[15px]">
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {description}
                </p>

                {/* Subtle corner gradient */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
