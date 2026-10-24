# TFL Automotion - High-Converting E-Commerce Agency Website

A modern, high-tech, mobile-responsive single-page agency website for **TFL Automotion** built with **Next.js (App Router)**, **Tailwind CSS**, **Lucide React**, and **Framer Motion**. Optimized for zero-error production deployment on **Vercel**.

---

## ⚡ Key Highlights & Core Features

### 1. Entry Gate / Lead Capture Modal
- **Smart Visitor Trigger**: Shows an interactive glassmorphism modal on first visit.
- **Fields Captured**: Full Name and WhatsApp Number with Country Code.
- **Google Sheets Webhook**: Dispatches lead data via `fetch(..., { mode: 'no-cors' })` to your Google Apps Script webhook.
- **Persistent State**: Stores submission in `localStorage` (`tfl_lead_captured`) to prevent re-prompting on refresh.
- **Configurable Webhook**: Set `googleSheetWebhookUrl` inside `src/lib/constants.ts`.

### 2. Header & Hero Section
- **Brand Identity**: High-tech cyber glow emblem with "TFL Automotion" branding.
- **Headline**: *"Scale Your E-Commerce Revenue on Full Autopilot"*
- **Subtitle**: *"All-in-one automation agency: Included Ad Spend, Official WhatsApp Marketing, Auto Order Tracking & Full Funnels."*
- **Action Buttons**: Smooth scroll to `#pricing` and instant direct WhatsApp chat link.
- **Live Autopilot Status Showcase**: Real-time pipeline monitor with metric counters ($2.4M+ Ad Spend, 99.4% Order Sync, 24/7 Autopilot, 100% Included Ad Spend).

### 3. 7-Pillar Core Service Stack (Universal Baseline)
Identically included across **ALL 4 tiers**:
1. **All Social Media Ads Management** (Meta, TikTok, Google)
2. **Official WhatsApp Cloud API Marketing**
3. **Automated Order Management System**
4. **24/7 Automated Customer Follow-up & Cart Recovery**
5. **Complete WhatsApp Automation & Chatbot Funnels**
6. **Auto Order Tracking & Real-time Courier Sync**
7. **Automated Call Booking & Calendar Integration**

### 4. 4-Tier All-Inclusive Pricing Grid
*Ad spend budget and WhatsApp message quotas are FULLY INCLUDED in every tier price (No hidden retainer fees).*

- **Tier 1: Starter** ($300 / mo)
  - $150 Included Social Media Ad Spend Budget
  - Up to 1,500 Official WhatsApp Marketing Messages Included
  - Complete Core Automation Stack
  - Direct WhatsApp link pre-filled for Tier 1
- **Tier 2: Growth** ($500 / mo) — **Most Popular**
  - Highlighted glowing cyan border & "Most Popular" flame badge
  - $220 Included Social Media Ad Spend Budget
  - Up to 3,000 Official WhatsApp Marketing Messages Included
  - Complete Core Automation Stack
  - Direct WhatsApp link pre-filled for Tier 2
- **Tier 3: Scale** ($1,000 / mo)
  - $500 Included Social Media Ad Spend Budget
  - Up to 5,000 Official WhatsApp Marketing Messages Included
  - Complete Core Automation Stack
  - Direct WhatsApp link pre-filled for Tier 3
- **Tier 4: Custom Tier** (Custom Pricing / Tailored Budget)
  - Custom Ad Spend Budget (Tailored to your scale)
  - Custom WhatsApp Broadcast Limits
  - Custom Courier/CRM Webhook Integrations
  - Dedicated 1-on-1 Automation Engineer
  - Direct WhatsApp link pre-filled for Custom Plan

### 5. Official WhatsApp Integration
- Target Number: `+8801339704076` (link format `8801339704076`)
- Every CTA directs to `https://wa.me/8801339704076?text=...` with precise encoded text.
- Floating quick-chat WhatsApp bubble with pulsating online status dot.

---

## 🛠️ Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css         # Dark luxury theme, glowing grids, and glassmorphism
│   │   ├── layout.tsx          # Root layout with SEO metadata & viewport settings
│   │   └── page.tsx            # Full single-page assembly
│   ├── components/
│   │   ├── LeadCaptureModal.tsx  # First-visit entry gate with Google Sheets POST
│   │   ├── Navbar.tsx            # Sticky glassmorphic navbar with mobile drawer
│   │   ├── Hero.tsx              # High-converting hero with live pipeline preview
│   │   ├── CoreStack.tsx         # 7-pillar baseline services included in all plans
│   │   ├── SocialLinks.tsx       # Facebook / YouTube / Telegram icons (header + footer)
│   │   ├── PricingGrid.tsx       # 4-tier all-inclusive pricing with WhatsApp links
│   │   ├── ComparisonSection.tsx # Traditional agency vs TFL Automotion comparison
│   │   ├── FAQSection.tsx        # Interactive accordion for buyer reassurance
│   │   ├── FloatingWhatsApp.tsx  # Persistent quick-chat trigger with status indicator
│   │   └── Footer.tsx            # Minimalist footer with contact details & SLA
│   └── lib/
│       └── constants.ts          # Central agency config, tiers, and WhatsApp utilities
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Google Sheets Webhook
Open [constants.ts](file:///c:/Users/007/Desktop/TFL%20Automotion%20Agency/src/lib/constants.ts) and update:
```typescript
export const AGENCY_CONFIG = {
  ...
  googleSheetWebhookUrl: "YOUR_GOOGLE_APPS_SCRIPT_WEBHOOK_URL_HERE",
};
```

### 3. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Build for Production (Zero-Error Vercel Deploy)
```bash
npm run build
```
Tested with Next.js Turbopack and TypeScript — compiles with **0 warnings and 0 errors**.
