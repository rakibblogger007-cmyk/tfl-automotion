"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  Zap,
  ArrowRight,
  Shield,
  MessageCircle,
  Flame,
} from "lucide-react";
import { PRICING_TIERS, getWhatsAppLink } from "@/lib/constants";

export default function PricingGrid() {
  const coreChecklistItems = [
    "All Social Media Ads Management (Meta, TikTok, Google)",
    "Official WhatsApp Cloud API Marketing",
    "Automated Order Management System",
    "24/7 Customer Follow-up & Cart Recovery",
    "WhatsApp Chatbot Automation Funnels",
    "Auto Courier & Order Tracking Integration",
    "Automated Call Booking Setup",
  ];

  return (
    <section id="pricing" className="pt-10 pb-20 md:pt-14 relative bg-slate-950 overflow-hidden scroll-mt-16">
      {/* Glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>All-Inclusive Pricing Model</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Transparent Plans.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              Included Ad Spend.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            Unlike traditional agencies that charge high retainers on top of your ad costs, our plans <span className="text-emerald-400 font-semibold">include your social media ad spend and WhatsApp API message quotas</span> directly in every tier.
          </p>

          {/* Banner Notice */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 p-3.5 px-5 rounded-2xl bg-gradient-to-r from-cyan-950/70 via-slate-900 to-emerald-950/70 border border-cyan-500/30 text-xs sm:text-sm text-cyan-200">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">Ad Spend Budget &amp; WhatsApp Cloud API are FULLY INCLUDED</span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span className="text-slate-300">No hidden software fees or separate tool subscriptions</span>
          </div>
        </div>

        {/* 4-Tier Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_TIERS.map((tier, index) => {
            const isPopular = tier.popular;
            const waUrl = getWhatsAppLink(tier.whatsappMessage);

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-cyan-400 shadow-[0_0_40px_-5px_rgba(6,182,212,0.4)] lg:-translate-y-3 p-6 sm:p-7"
                    : "glass-card border border-slate-800 hover:border-slate-700 hover:shadow-xl p-6 sm:p-7"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-cyan-500/30">
                    <Flame className="w-3.5 h-3.5 fill-slate-950" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Tier Title & Tagline */}
                  <div className="mb-4">
                    <h3 className="text-xl font-black text-white mb-1">{tier.name}</h3>
                    <p className="text-xs text-slate-400 min-h-[32px]">{tier.tagline}</p>
                  </div>

                  {/* Pricing Display */}
                  <div className="mb-6 pb-6 border-b border-slate-800">
                    {tier.price === "Custom Pricing" ? (
                      <div className="flex flex-col">
                        <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                          Custom
                        </span>
                        <span className="text-xs text-cyan-400 font-semibold tracking-wider uppercase mt-1">
                          Tailored Budget
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                          {tier.price}
                        </span>
                        <span className="text-xs sm:text-sm text-slate-400 font-medium">
                          {tier.period}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Included Deliverables Highlight Box */}
                  <div className="mb-6 p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 space-y-2.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                      Tier Deliverables:
                    </div>

                    <div className="flex items-start gap-2 text-xs font-semibold text-emerald-300">
                      <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{tier.adSpendIncluded}</span>
                    </div>

                    <div className="flex items-start gap-2 text-xs font-semibold text-cyan-300">
                      <MessageCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{tier.whatsappQuota}</span>
                    </div>

                    {tier.additionalDeliverables && (
                      <>
                        {tier.additionalDeliverables.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-xs font-medium text-slate-200"
                          >
                            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>

                  {/* Core Checklist (Identical Across All Tiers) */}
                  <div className="space-y-2.5 mb-8">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Core Automation Stack (Included):
                    </div>
                    {coreChecklistItems.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Direct CTA Button */}
                <div>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 group cursor-pointer ${
                      isPopular
                        ? "bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 text-slate-950 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-500/30"
                        : "bg-slate-900 hover:bg-slate-850 text-white border border-slate-700 hover:border-cyan-400/50"
                    }`}
                  >
                    <MessageCircle className={`w-4 h-4 ${isPopular ? "text-slate-950" : "text-emerald-400"}`} />
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <p className="text-[10px] text-center text-slate-500 mt-2">
                    Instant WhatsApp Activation • Target: +8801339704076
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footnote Assurance */}
        <div className="mt-14 max-w-3xl mx-auto rounded-2xl bg-slate-900/60 border border-slate-800 p-5 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-cyan-300 font-semibold">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>Strict Zero-Hidden-Cost Guarantee</span>
          </div>
          <span className="hidden sm:inline text-slate-600">|</span>
          <p>
            No separate charge for Meta/TikTok campaign setup, WhatsApp Cloud API setup, or webhook integrations. Everything is completely turnkey.
          </p>
        </div>
      </div>
    </section>
  );
}
