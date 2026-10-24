export const AGENCY_CONFIG = {
  name: "TFL Automotion",
  whatsappNumber: "8801339704076",
  formattedWhatsApp: "+880 1339 704076",
  email: "terrafusionlabsofc@gmail.com",
  operatingHours: "24/7 Automated Support & Operations",
  googleSheetWebhookUrl: "https://script.google.com/macros/s/AKfycbwp6_1vPsLUa73KJcO16b1nWM0vt_4UV9n3u0w_ciri6zYVagOq8TyRK10teNyKhb8sHg/exec",
};

export const SOCIAL_LINKS = [
  {
    id: "facebook",
    label: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61576117335438",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@tfl_YT-e5z",
  },
  {
    id: "telegram",
    label: "Telegram",
    href: "https://t.me/terrafusionlabs",
  },
] as const;

export const CORE_SERVICE_STACK = [
  {
    id: "ads-management",
    title: "All Social Media Ads Management",
    platforms: "Meta (Facebook/Instagram), TikTok & Google Ads",
    description:
      "Full-funnel campaign creation, audience testing, creative iteration, and algorithmic ROAS scaling.",
    icon: "Target",
  },
  {
    id: "whatsapp-marketing",
    title: "Official WhatsApp Cloud API Marketing",
    platforms: "Meta Verified Cloud API & Green Badge Setup",
    description:
      "Broadcast campaigns, personalized discount triggers, high-open rate notifications, and compliant verified sender messaging.",
    icon: "MessageSquare",
  },
  {
    id: "order-management",
    title: "Automated Order Management System",
    platforms: "Shopify, WooCommerce & Custom Storefronts",
    description:
      "Instant order ingestion, fraud screening, automated confirmation prompts, and frictionless inventory routing.",
    icon: "Boxes",
  },
  {
    id: "customer-recovery",
    title: "24/7 Automated Customer Follow-up & Cart Recovery",
    platforms: "WhatsApp + Multi-Channel Re-engagement",
    description:
      "Dynamic abandoned checkout sequences that recover up to 28%+ lost revenue within minutes on WhatsApp.",
    icon: "Zap",
  },
  {
    id: "chatbot-funnels",
    title: "Complete WhatsApp Automation & Chatbot Funnels",
    platforms: "Intelligent Conversational AI Flow",
    description:
      "Automated FAQ resolution, product recommendation bots, VIP upsells, and seamless human agent handoffs.",
    icon: "Bot",
  },
  {
    id: "order-tracking",
    title: "Auto Order Tracking & Real-time Courier Sync",
    platforms: "Steadfast, Pathao, RedX, Paperfly & Global APIs",
    description:
      "Instant tracking number generation, automated dispatch alerts, and live parcel delivery status sent directly via WhatsApp.",
    icon: "Truck",
  },
  {
    id: "call-booking",
    title: "Automated Call Booking & Calendar Integration",
    platforms: "Calendly, Google Calendar & CRM Webhooks",
    description:
      "Self-scheduling sales calls, automatic SMS/WhatsApp reminders, and no-show reduction sequences for high-ticket orders.",
    icon: "CalendarCheck",
  },
];

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  popular?: boolean;
  tagline: string;
  adSpendIncluded: string;
  whatsappQuota: string;
  additionalDeliverables?: string[];
  ctaText: string;
  whatsappMessage: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "tier-1",
    name: "Tier 1: Starter",
    price: "$300",
    period: "/ month",
    popular: false,
    tagline: "Ideal for emerging brands launching automated scaling",
    adSpendIncluded: "$150 Included Social Media Ad Spend Budget",
    whatsappQuota: "Up to 1,500 Official WhatsApp Marketing Messages Included",
    ctaText: "Get Started with Tier 1",
    whatsappMessage:
      "Hello TFL Automotion, I want to subscribe to Tier 1 ($300/mo All-Inclusive Plan).",
  },
  {
    id: "tier-2",
    name: "Tier 2: Growth",
    price: "$500",
    period: "/ month",
    popular: true,
    tagline: "Our high-velocity scaling engine for scaling stores",
    adSpendIncluded: "$220 Included Social Media Ad Spend Budget",
    whatsappQuota: "Up to 3,000 Official WhatsApp Marketing Messages Included",
    ctaText: "Get Started with Tier 2",
    whatsappMessage:
      "Hello TFL Automotion, I want to subscribe to Tier 2 ($500/mo All-Inclusive Plan).",
  },
  {
    id: "tier-3",
    name: "Tier 3: Scale",
    price: "$1,000",
    period: "/ month",
    popular: false,
    tagline: "For aggressive e-commerce brands dominating their category",
    adSpendIncluded: "$500 Included Social Media Ad Spend Budget",
    whatsappQuota: "Up to 5,000 Official WhatsApp Marketing Messages Included",
    ctaText: "Get Started with Tier 3",
    whatsappMessage:
      "Hello TFL Automotion, I want to subscribe to Tier 3 ($1,000/mo All-Inclusive Plan).",
  },
  {
    id: "tier-4",
    name: "Tier 4: Custom Tier",
    price: "Custom Pricing",
    period: "Tailored Budget",
    popular: false,
    tagline: "Enterprise-grade automation with dedicated engineering",
    adSpendIncluded: "Custom Ad Spend Budget (Tailored to your scale)",
    whatsappQuota: "Custom WhatsApp Broadcast Limits",
    additionalDeliverables: [
      "Custom Courier/CRM Webhook Integrations",
      "Dedicated 1-on-1 Automation Engineer",
    ],
    ctaText: "Talk for Custom Plan",
    whatsappMessage:
      "Hello TFL Automotion, I need a Custom All-Inclusive Plan for my business.",
  },
];

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
};
