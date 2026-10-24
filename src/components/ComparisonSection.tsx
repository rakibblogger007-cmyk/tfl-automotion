"use client";

import React from "react";
import { XCircle, CheckCircle2, TrendingUp } from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

export default function ComparisonSection() {
  const getStartedUrl = getWhatsAppLink(
    "Hello TFL Automotion, I want to switch from my current agency to your all-inclusive automation model."
  );

  const comparisons = [
    {
      feature: "Monthly Ad Spend Budget",
      traditional: "You pay 100% of the ad bill + agency markup fees",
      tfl: "FULLY INCLUDED directly within your monthly tier price",
    },
    {
      feature: "WhatsApp Cloud API & Marketing",
      traditional: "Requires separate SaaS accounts, setup fees & monthly charges ($150+/mo)",
      tfl: "Official Meta Cloud API & monthly message quota INCLUDED",
    },
    {
      feature: "Order Tracking & Courier Sync",
      traditional: "Manual copy-pasting of tracking numbers or basic plugins",
      tfl: "Instant webhook courier dispatch + live tracking sent via WhatsApp",
    },
    {
      feature: "24/7 Cart Recovery Funnels",
      traditional: "Basic email sequences with 15% open rates",
      tfl: "Autonomous WhatsApp sequences achieving 90%+ open rates",
    },
    {
      feature: "Pricing Transparency",
      traditional: "Hidden surprise retainer increases and billed developer hours",
      tfl: "One predictable, all-inclusive flat subscription",
    },
  ];

  return (
    <section className="py-20 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>ROI Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Why Modern Brands Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              TFL Automotion
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            See the financial and operational advantage of our all-in-one automation stack versus outdated agency models.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="rounded-2xl glass-card border border-slate-800 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-900/90 p-4 sm:p-5 border-b border-slate-800 text-xs font-bold uppercase tracking-wider">
            <div className="md:col-span-4 text-slate-400">Deliverable / Capability</div>
            <div className="md:col-span-4 text-rose-400 hidden md:block">Old Traditional Agency Model</div>
            <div className="md:col-span-4 text-emerald-400 hidden md:block">TFL Automotion All-Inclusive</div>
          </div>

          <div className="divide-y divide-slate-800/80">
            {comparisons.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 gap-3 md:gap-4 items-center hover:bg-slate-900/40 transition-colors"
              >
                <div className="md:col-span-4 font-bold text-white text-sm">
                  {row.feature}
                </div>

                <div className="md:col-span-4 flex items-start gap-2.5 text-xs text-slate-400 bg-rose-950/20 md:bg-transparent p-2.5 md:p-0 rounded-lg">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{row.traditional}</span>
                </div>

                <div className="md:col-span-4 flex items-start gap-2.5 text-xs text-emerald-300 font-medium bg-emerald-950/20 md:bg-transparent p-2.5 md:p-0 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{row.tfl}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <a
            href={getStartedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 border border-cyan-500/40 hover:border-cyan-400 hover:bg-slate-850 shadow-md shadow-cyan-500/20 transition-all"
          >
            <span>Switch Your Store to Autopilot Today</span>
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
