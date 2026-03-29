"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Calendar } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CTA() {
  return (
    <section
      id="contact"
      className="section-padding"
      aria-label="Contact / Call to action"
    >
      <div className="container-inner">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0f0f23] via-[#0d1128] to-[#050816] border border-white/[0.08]">
            {/* Background glow layers */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#4f8ef7]/8 rounded-full blur-[80px]" />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#a855f7]/8 rounded-full blur-[80px]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4f8ef7]/30 to-transparent" />
            </div>

            <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-16 sm:py-20">
              <div className="max-w-2xl mx-auto text-center">
                {/* Label */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-xs font-semibold uppercase tracking-widest text-[#4f8ef7] mb-5"
                >
                  Let&apos;s build together
                </motion.p>

                {/* Headline */}
                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.08 }}
                  className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-5"
                >
                  Have a project in mind?
                  <br />
                  <span className="gradient-text">Let&apos;s talk.</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.16 }}
                  className="text-slate-400 text-lg leading-relaxed mb-10"
                >
                  I&apos;m selectively available for new projects. If you&apos;re
                  building something ambitious and care about quality, I&apos;d love
                  to hear about it.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.24 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <a
                    href="mailto:hello@example.com"
                    className="group w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#4f8ef7] to-[#06b6d4] text-white font-medium text-sm shadow-lg shadow-[#4f8ef7]/25 hover:shadow-[#4f8ef7]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    Send me an email
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <a
                    href="https://cal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/5 font-medium text-sm transition-all duration-200"
                  >
                    <Calendar className="w-4 h-4" />
                    Book a call
                  </a>
                </motion.div>

                {/* Trust signals */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 text-xs text-slate-600"
                >
                  Usually responds within 24 hours &middot; Based in London, UTC±0 &middot; Remote-first
                </motion.p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
