"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does the included Social Media Ad Spend Budget work?",
      answer:
        "Every single tier directly includes a dedicated Ad Spend Budget (e.g. $150/mo in Tier 1, $220/mo in Tier 2, $500/mo in Tier 3). You do not need to pay extra for that ad budget; we deploy and manage it across Meta, TikTok, and Google Ads on your behalf to generate direct conversions.",
    },
    {
      question: "What is the Official WhatsApp Cloud API Marketing & how is it verified?",
      answer:
        "We set up your official Meta-verified WhatsApp Business Cloud API account. This gives your brand high deliverability, automated interactive buttons, verified business credentials, and protection against unauthorized account bans associated with unofficial scraping tools.",
    },
    {
      question: "Which e-commerce platforms and local/global courier services are supported?",
      answer:
        "We integrate seamlessly with Shopify, WooCommerce, custom web stores, and major courier APIs including Steadfast, Pathao, RedX, Paperfly, and standard global parcel webhooks. Parcel status changes trigger real-time WhatsApp updates automatically.",
    },
    {
      question: "Are all 7 Core Automation Stack services really included in Tier 1?",
      answer:
        "Yes! Unlike other agencies that lock critical features behind expensive enterprise packages, our entire 7-pillar engine (Ads Management, WhatsApp Marketing, Automated Order Management, 24/7 Cart Recovery, Chatbot Funnels, Courier Sync, and Call Booking) is included identically across all 4 tiers.",
    },
    {
      question: "What happens if we need higher ad spend or custom webhook integrations?",
      answer:
        "You can easily upgrade tiers as your volume scales or choose Tier 4 (Custom Tier). Tier 4 provides tailored ad budgets, custom broadcast limits, bespoke CRM integrations, and a dedicated 1-on-1 automation engineer.",
    },
    {
      question: "How fast can we launch after subscribing?",
      answer:
        "Once you confirm your plan via WhatsApp, our onboarding team verifies your store access, connects the WhatsApp Cloud API, and initiates your automation funnels within 24 to 48 business hours.",
    },
  ];

  const waAskUrl = getWhatsAppLink(
    "Hello TFL Automotion, I have an additional question before selecting a plan."
  );

  return (
    <section id="faq" className="py-24 relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Questions
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Everything you need to know about our all-inclusive plans and autopilot execution.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl glass-card border border-slate-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-white hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span className="font-bold text-base sm:text-lg leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-cyan-400 border-cyan-500/40" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have More Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-emerald-950/40 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-white mb-1">
              Have a specific business question?
            </h4>
            <p className="text-xs text-slate-400">
              Speak directly with our senior automation team on WhatsApp.
            </p>
          </div>
          <a
            href={waAskUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-md shadow-emerald-500/20 shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
