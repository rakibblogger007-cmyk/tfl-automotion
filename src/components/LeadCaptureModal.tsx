"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ShieldCheck, ArrowRight, X, Phone, User, CheckCircle2 } from "lucide-react";
import { AGENCY_CONFIG } from "@/lib/constants";

export default function LeadCaptureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    // Check if the user has already submitted or dismissed the modal
    const hasCaptured = localStorage.getItem("tfl_lead_captured");
    if (!hasCaptured) {
      // Delay slightly for smooth entrance after page loads
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!whatsappNumber.trim() || whatsappNumber.trim().length < 8) {
      setError("Please enter a valid WhatsApp number with country code (e.g. +1234567890 or +8801...)");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name: fullName.trim(),
        phone: whatsappNumber.trim(),
        whatsappNumber: whatsappNumber.trim(),
        timestamp: new Date().toISOString(),
      };

      const GOOGLE_SHEET_WEBHOOK_URL =
        AGENCY_CONFIG.googleSheetWebhookUrl ||
        "https://script.google.com/macros/s/AKfycbwp6_1vPsLUa73KJcO16b1nWM0vt_4UV9n3u0w_ciri6zYVagOq8TyRK10teNyKhb8sHg/exec";

      await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Store in localStorage so it does not reappear on refresh
      localStorage.setItem("tfl_lead_captured", "true");
      setIsSuccess(true);

      setTimeout(() => {
        setIsOpen(false);
      }, 1000);
    } catch (err) {
      console.error("Lead submission error:", err);
      // Still persist locally so visitor isn't stuck on error
      localStorage.setItem("tfl_lead_captured", "true");
      setIsSuccess(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 1000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDismiss = () => {
    // Allow visitor to explore without locking them out
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleDismiss}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-8 border border-cyan-500/30 shadow-[0_0_50px_-12px_rgba(6,182,212,0.35)] z-10"
          >
            {/* Ambient decorative glow */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close button */}
            <button
              onClick={handleDismiss}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Welcome to TFL Automotion</h3>
                <p className="text-slate-300 text-sm max-w-xs">
                  Your VIP access is confirmed. Entering our all-in-one automation portal...
                </p>
              </motion.div>
            ) : (
              <>
                {/* Brand Logo */}
                {!logoError && (
                  <div className="flex justify-center mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/logo.png"
                      alt="TFL Automotion Logo"
                      className="h-20 sm:h-24 w-auto object-contain rounded-2xl ring-1 ring-cyan-500/30 shadow-[0_0_30px_-8px_rgba(6,182,212,0.5)]"
                      onError={() => setLogoError(true)}
                    />
                  </div>
                )}

                {/* Header Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Exclusive E-Commerce Scaling Access</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                  Unlock Full Autopilot Growth
                </h2>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Join leading direct-to-consumer brands scaling with our included ad spend, official WhatsApp Cloud API, and real-time courier automation.
                </p>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 mb-4 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs"
                  >
                    {error}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        className="w-full pl-10 pr-4 py-3 bg-slate-950/80 border border-slate-700/80 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 rounded-xl text-white placeholder-slate-500 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                      WhatsApp Number with Country Code <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        value={whatsappNumber}
                        onChange={(e) => setWhatsappNumber(e.target.value)}
                        placeholder="+880 1339 704076 or +1 (555) 000-0000"
                        className="w-full pl-10 pr-4 py-3 bg-slate-950/80 border border-slate-700/80 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 rounded-xl text-white placeholder-slate-500 text-sm outline-none transition-all"
                      />
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Include country code (e.g. +1, +44, +880, +971) for instant VIP priority.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3.5 px-6 rounded-xl font-bold text-slate-950 text-sm bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all duration-200 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Get Instant VIP Access</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>100% Confidential • Zero Spam Guaranteed</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleDismiss}
                    className="hover:text-slate-200 underline underline-offset-2 transition-colors cursor-pointer"
                  >
                    Browse site first
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
