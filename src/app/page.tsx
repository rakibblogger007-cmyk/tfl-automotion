import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoreStack from "@/components/CoreStack";
import PricingGrid from "@/components/PricingGrid";
import ComparisonSection from "@/components/ComparisonSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Entry Gate / Lead Capture Modal */}
      <LeadCaptureModal />

      {/* Persistent Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div id="services">
        <Hero />
      </div>

      {/* 4-Tier All-Inclusive Pricing Grid (placed directly under Hero) */}
      <PricingGrid />

      {/* 7-Pillar Core Service Stack (Universal across all 4 tiers) */}
      <CoreStack />

      {/* Value Comparison: Traditional Agency vs TFL Automotion */}
      <ComparisonSection />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Minimalist Footer */}
      <Footer />

      {/* Direct Floating WhatsApp Quick-Chat */}
      <FloatingWhatsApp />
    </main>
  );
}
