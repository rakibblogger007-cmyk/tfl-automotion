"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle2, Activity } from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

export default function Hero() {
  const directWhatsAppUrl = getWhatsAppLink(
    "Hello TFL Automotion, I would like to learn more about your all-in-one e-commerce automation services."
  );

  return (
    <section className="relative pt-28 pb-10 md:pt-36 md:pb-14 overflow-hidden bg-tech-grid bg-radial-gradient">
      {/* Background ambient lighting orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-emerald-500/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-6 shadow-[0_0_20px_-5px_rgba(6,182,212,0.4)] backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>All-Inclusive Automation: Zero Hidden Agency Fees</span>
          </motion.div>

          {/* Exact Headline Requirement */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6"
          >
            Scale Your E-Commerce Revenue on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              Full Autopilot
            </span>
          </motion.h1>

          {/* Exact Subtitle Requirement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-9"
          >
            All-in-one automation agency: Included Ad Spend, Official WhatsApp Marketing, Auto Order Tracking &amp; Full Funnels.
          </motion.p>

          {/* Primary CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-300 group cursor-pointer"
            >
              <span>View All-Inclusive Plans</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>

            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-white bg-slate-900/90 border border-emerald-500/40 hover:border-emerald-400 hover:bg-slate-850 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/30 transition-all duration-300 group cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </motion.div>

          {/* Trust Guarantees */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400 mb-10"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Dedicated Ad Budget Included</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Meta Verified Cloud API</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Courier Sync in Seconds</span>
            </div>
          </motion.div>
        </div>

        {/* Live System Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="max-w-5xl mx-auto rounded-2xl glass-card p-6 sm:p-8 border border-cyan-500/20 shadow-2xl relative"
        >
          {/* Card Top Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-800/80 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                  Autopilot Engine Status
                </span>
                <span className="text-sm font-bold text-white flex items-center gap-2">
                  Live Unified Pipeline • Meta, TikTok &amp; WhatsApp Cloud
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>Real-Time ROAS Optimization: Active</span>
            </div>
          </div>

          {/* Interactive Pipeline Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all">
              <div className="text-[11px] font-bold uppercase text-cyan-400 tracking-wider mb-1">Step 01</div>
              <h4 className="font-bold text-white text-sm mb-1">Targeted Multi-Ads</h4>
              <p className="text-xs text-slate-400">
                Meta, TikTok &amp; Google ad spend fully managed with algorithmic bid scaling.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all">
              <div className="text-[11px] font-bold uppercase text-emerald-400 tracking-wider mb-1">Step 02</div>
              <h4 className="font-bold text-white text-sm mb-1">WhatsApp Cloud API</h4>
              <p className="text-xs text-slate-400">
                Instant interactive message delivery with 98% open rates and verified sender badge.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all">
              <div className="text-[11px] font-bold uppercase text-cyan-400 tracking-wider mb-1">Step 03</div>
              <h4 className="font-bold text-white text-sm mb-1">Order Automation</h4>
              <p className="text-xs text-slate-400">
                Zero-delay checkout routing, automated verification, and 24/7 cart recovery.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all">
              <div className="text-[11px] font-bold uppercase text-emerald-400 tracking-wider mb-1">Step 04</div>
              <h4 className="font-bold text-white text-sm mb-1">Live Courier Sync</h4>
              <p className="text-xs text-slate-400">
                Instant tracking number generation and automated parcel updates to customer.
              </p>
            </div>
          </div>

          {/* Stat Counters Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
                $2.4M+
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">
                Ad Spend Managed
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-400">
                99.4%
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">
                Order Sync Accuracy
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                24/7
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">
                Autopilot Cart Recovery
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                100%
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">
                Included Ad Spend
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
