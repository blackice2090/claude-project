"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { GradientText } from "@/components/ui/GradientText";
import { Badge } from "@/components/ui/Badge";

const projects = [
  {
    title: "Velocity",
    subtitle: "SaaS Analytics Platform",
    description:
      "Real-time business intelligence dashboard with custom chart library, multi-tenant architecture, and sub-100ms query performance across billions of rows.",
    tags: ["Next.js", "TypeScript", "ClickHouse", "Tailwind"],
    gradient: "from-[#4f8ef7] via-[#06b6d4] to-[#a855f7]",
    accent: "#4f8ef7",
    featured: true,
    metrics: ["10M+ events/day", "< 100ms p99", "99.99% uptime"],
  },
  {
    title: "Forge",
    subtitle: "Design System & Component Library",
    description:
      "Accessible, themeable React component library with 60+ primitives, Storybook documentation, automated visual regression testing and zero-runtime CSS.",
    tags: ["React", "Radix UI", "CSS-in-JS", "Storybook"],
    gradient: "from-[#a855f7] to-[#ec4899]",
    accent: "#a855f7",
    featured: false,
    metrics: ["60+ components", "WCAG 2.1 AA", "14kB gzipped"],
  },
  {
    title: "Beacon",
    subtitle: "Developer Monitoring Tool",
    description:
      "Lightweight error tracking and performance monitoring SDK with a clean web UI, alert routing, and integrations with Slack, PagerDuty, and Linear.",
    tags: ["Go", "PostgreSQL", "React", "WebSockets"],
    gradient: "from-[#10b981] to-[#06b6d4]",
    accent: "#10b981",
    featured: false,
    metrics: ["< 1kB SDK", "Realtime alerts", "10+ integrations"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-padding" aria-label="Projects">
      <div className="container-inner">
        {/* Header */}
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4f8ef7] mb-4">
              Selected work
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Projects I&apos;m{" "}
              <GradientText>proud of.</GradientText>
            </h2>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group shrink-0"
          >
            View all on GitHub
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </AnimatedSection>

        {/* Projects grid */}
        <AnimatedSection stagger className="space-y-5">
          {projects.map((project) => (
            <AnimatedItem key={project.title}>
              <motion.article
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={`group relative rounded-2xl bg-[#0f0f23] border border-white/[0.06] hover:border-white/[0.12] overflow-hidden transition-all duration-300 ${
                  project.featured ? "lg:grid lg:grid-cols-5" : ""
                }`}
                style={{}}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Gradient bar */}
                <div
                  className={`h-px bg-gradient-to-r ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity lg:hidden`}
                />

                {/* Featured left panel (desktop only) */}
                {project.featured && (
                  <div
                    className={`hidden lg:flex col-span-2 items-center justify-center bg-gradient-to-br ${project.gradient} opacity-[0.08] group-hover:opacity-[0.14] transition-opacity min-h-[220px]`}
                  >
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-80 shadow-2xl`}
                    />
                  </div>
                )}

                {/* Content */}
                <div
                  className={`p-7 ${project.featured ? "lg:col-span-3" : ""}`}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="flex items-center gap-2.5 mb-1">
                        <h3 className="font-bold text-white text-lg">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <Badge variant="default" className="text-[10px]">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-slate-500">{project.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub`}
                        className="p-2 rounded-lg border border-white/8 text-slate-500 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href="#"
                        aria-label={`${project.title} live demo`}
                        className="p-2 rounded-lg border border-white/8 text-slate-500 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.metrics.map((m) => (
                      <span
                        key={m}
                        className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-400"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-lg font-mono text-slate-600"
                        style={{ color: project.accent, opacity: 0.8 }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
