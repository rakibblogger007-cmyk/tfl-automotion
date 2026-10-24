"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const directWhatsAppUrl = getWhatsAppLink(
    "Hello TFL Automotion, I am on your website and would like to ask a quick question."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Interactive Tooltip bubble */}
      {showTooltip && (
        <div className="mb-3 max-w-xs rounded-2xl bg-slate-900 border border-emerald-500/40 p-3 shadow-2xl shadow-emerald-500/20 text-xs text-white relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss tooltip"
            className="absolute top-2 right-2 text-slate-400 hover:text-white p-0.5 rounded-full hover:bg-slate-800 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-bold text-emerald-400">Online Now</span>
          </div>
          <p className="text-slate-300 pr-4 text-[11px] leading-relaxed">
            Need advice on scaling your store? Message our team directly on WhatsApp!
          </p>
        </div>
      )}

      {/* WhatsApp Floating Action Button */}
      <a
        href={directWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_40px_rgba(16,185,129,0.8)] hover:scale-105 transition-all duration-300"
      >
        {/* Pulsating Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-pulse pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-slate-950 group-hover:rotate-12 transition-transform duration-300" />

        {/* Status Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-950" />
      </a>
    </div>
  );
}
