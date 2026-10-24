import React from "react";
import Link from "next/link";
import { MessageCircle, Mail, Clock, ShieldCheck } from "lucide-react";
import { AGENCY_CONFIG, getWhatsAppLink } from "@/lib/constants";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const directWhatsAppUrl = getWhatsAppLink(
    "Hello TFL Automotion, I am contacting you through the website footer."
  );

  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 text-slate-400 text-sm relative overflow-hidden scroll-mt-20">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="TFL Automotion Logo"
                className="h-14 w-auto object-contain rounded-xl ring-1 ring-cyan-500/20 group-hover:ring-cyan-400/50 transition-all"
              />
              <span className="text-xl font-extrabold tracking-tight text-white">
                TFL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Automotion</span>
              </span>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              The premier all-in-one e-commerce scaling agency. Social media ad spend, official WhatsApp Cloud API, and real-time courier automation included in every tier.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Official WhatsApp Cloud API Automation</span>
            </div>

            <div className="mt-5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                Follow Us
              </div>
              <SocialLinks />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  All-In-One Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-300 transition-colors">
                  All-Inclusive Pricing
                </a>
              </li>
              <li>
                <a href="#core-stack" className="hover:text-cyan-300 transition-colors">
                  7-Pillar Core Stack
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-300 transition-colors">
                  FAQ &amp; Onboarding
                </a>
              </li>
            </ul>
          </div>

          {/* Tiers Breakdown */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              All-Inclusive Plans
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#pricing" className="hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>Tier 1: Starter</span>
                  <span className="text-cyan-400 font-mono text-xs">$300/mo</span>
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>Tier 2: Growth</span>
                  <span className="text-emerald-400 font-mono text-xs">$500/mo</span>
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>Tier 3: Scale</span>
                  <span className="text-cyan-400 font-mono text-xs">$1,000/mo</span>
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>Tier 4: Custom</span>
                  <span className="text-slate-400 text-xs">Tailored</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Agency Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-slate-300 hover:text-emerald-300 transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-semibold text-white">Official Agency WhatsApp</div>
                    <div className="text-slate-400 font-mono">{AGENCY_CONFIG.formattedWhatsApp}</div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-300 font-medium">Operations SLA</div>
                  <div>{AGENCY_CONFIG.operatingHours}</div>
                </div>
              </li>
              <li>
                <a
                  href={`mailto:${AGENCY_CONFIG.email}`}
                  className="flex items-start gap-2.5 text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="text-slate-300 font-medium">Direct Inquiries</div>
                    <div className="break-all">{AGENCY_CONFIG.email}</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 {AGENCY_CONFIG.name}. All rights reserved. Built for high-volume e-commerce stores.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span>WhatsApp Cloud API</span>
            <span>Shopify &amp; WooCommerce Ready</span>
            <span>Real-Time Courier Sync</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
