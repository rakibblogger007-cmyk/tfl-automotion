"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  MessageSquare,
  Boxes,
  Zap,
  Bot,
  Truck,
  CalendarCheck,
  CheckCircle,
  Sparkles,
  Layers,
  ArrowRight
} from "lucide-react";
import { CORE_SERVICE_STACK, getWhatsAppLink } from "@/lib/constants";

const ICON_MAP = {
  Target,
  MessageSquare,
  Boxes,
  Zap,
  Bot,
  Truck,
  CalendarCheck,
};

export default function CoreStack() {
  const consultUrl = getWhatsAppLink(
    "Hello TFL Automotion, I have a question about how your 7-Pillar Core Automation Stack works for my store."
  );

  return (
    <section id="core-stack" className="py-24 relative bg-slate-950/70 border-t border-slate-900 overflow-hidden">
      {/* Decorative ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Universal Baseline Deliverables</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Our 7-Pillar{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Core Service Stack
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Included <span className="text-cyan-300 font-semibold">identically across ALL 4 tiers</span>. You get our complete engineering power regardless of which plan you choose.
          </p>
        </div>

        {/* 7 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SERVICE_STACK.map((service, index) => {
            const IconComponent = ICON_MAP[service.icon as keyof typeof ICON_MAP] || Target;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative rounded-2xl glass-card p-6 border border-slate-800/80 hover:border-cyan-500/40 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.2)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                    {service.title}
                  </h3>

                  {/* Platform Pills */}
                  <div className="inline-block px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-medium text-emerald-400 mb-3">
                    {service.platforms}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Included Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Included in All Tiers</span>
                  </div>
                  <span className="text-slate-500 group-hover:text-slate-300 transition-colors">100% Autopilot</span>
                </div>
              </motion.div>
            );
          })}

          {/* 8th Card: All-Inclusive Promise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="rounded-2xl bg-gradient-to-br from-cyan-950/60 via-slate-900 to-emerald-950/40 p-6 border border-cyan-500/40 flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>The TFL Guarantee</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                No Gimmicks. No Upcharge Surprises.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Other agencies charge a monthly retainer and ask you to pay extra for chatbots, ad software, and developer hours. With TFL Automotion, you get the entire tech stack and ad budget baked in.
              </p>
            </div>

            <a
              href={consultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-md shadow-cyan-500/20 group"
            >
              <span>Ask Our Automation Architect</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
