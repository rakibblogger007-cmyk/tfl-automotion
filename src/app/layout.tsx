import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "TFL Automotion | Scale Your E-Commerce Revenue on Full Autopilot",
  description:
    "All-in-one e-commerce automation agency with included ad spend, official WhatsApp Cloud API marketing, automated order management, and real-time courier sync.",
  keywords: [
    "e-commerce automation",
    "WhatsApp Cloud API marketing",
    "Meta ads management",
    "automated order management",
    "courier tracking sync",
    "TFL Automotion",
    "TikTok ads",
    "cart recovery",
  ],
  authors: [{ name: "TFL Automotion" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "TFL Automotion | Scale Your E-Commerce Revenue on Full Autopilot",
    description:
      "All-in-one automation agency with included ad spend, WhatsApp marketing, auto order tracking & full funnels.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
