"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GradientText } from "@/components/ui/GradientText";
import { Badge } from "@/components/ui/Badge";

const stats = [
  { value: 50, suffix: "+", label: "Projects shipped" },
  { value: 8, suffix: "+", label: "Years experience" },
  { value: 30, suffix: "+", label: "Happy clients" },
  { value: 100, suffix: "k+", label: "Lines written" },
];

const values = [
  "Clean, maintainable code as a non-negotiable",
  "Performance and accessibility built in from day one",
  "Collaborative process with transparent communication",
  "Pragmatic solutions over over-engineered abstractions",
];

function AnimatedCounter({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1400;
    const step = (timestamp: number, startTime: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) {
        requestAnimationFrame((t) => step(t, startTime));
      } else {
        setCount(value);
      }
    };
    requestAnimationFrame((t) => step(t, t));
  }, [active, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" aria-label="About">
      <div className="container-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text content */}
          <AnimatedSection>
            <Badge className="mb-6">About me</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6">
              Building with{" "}
              <GradientText>purpose</GradientText>
              {" "}and precision.
            </h2>
            <p className="text-slate-400 leading-relaxed mb-5 text-[15px]">
              I&apos;m a full-stack developer who cares deeply about the craft —
              not just shipping features, but shipping them right. I&apos;ve worked
              across early-stage startups and scale-ups, bringing technical rigour
              and product thinking to every engagement.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8 text-[15px]">
              My sweet spot is the intersection of strong engineering and great
              design — building systems that are a pleasure to use and maintain.
            </p>

            <ul className="space-y-3 mb-10">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3 text-sm text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-[#4f8ef7] mt-0.5 shrink-0" />
                  {v}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#4f8ef7] hover:text-[#06b6d4] transition-colors group"
            >
              Let&apos;s work together
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </AnimatedSection>

          {/* Right — stats grid */}
          <div ref={statsRef}>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map(({ value, suffix, label }, i) => (
                <div
                  key={label}
                  className="group p-6 rounded-2xl bg-[#0f0f23] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300 card-glow"
                >
                  <div className="text-4xl font-bold gradient-text-blue mb-1">
                    <AnimatedCounter
                      value={value}
                      suffix={suffix}
                      active={isInView}
                    />
                  </div>
                  <div className="text-slate-500 text-sm">{label}</div>
                </div>
              ))}
            </motion.div>

            {/* Experience timeline snippet */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-4 p-5 rounded-2xl bg-[#0f0f23] border border-white/[0.06]"
            >
              <p className="text-xs uppercase tracking-widest text-slate-600 mb-4">
                Currently working on
              </p>
              <div className="space-y-3">
                {[
                  { role: "Senior Frontend Engineer", company: "Scale-up · Remote", current: true },
                  { role: "Lead Developer", company: "Agency · Freelance", current: false },
                ].map(({ role, company, current }) => (
                  <div key={role} className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-medium text-slate-200">{role}</div>
                      <div className="text-xs text-slate-600">{company}</div>
                    </div>
                    {current && (
                      <Badge variant="status" dot className="shrink-0 text-xs">
                        Now
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
