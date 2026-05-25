import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TrustStrip } from "@/components/trust-strip"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ScreenshotsSection } from "@/components/screenshots-section"
import { DiscoverSection } from "@/components/discover-section"
import { MiniGamesSection } from "@/components/mini-games-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function BoreNoMoreLanding() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustStrip />
      <FeaturesSection />
      <HowItWorksSection />
      <ScreenshotsSection />
      <DiscoverSection />
      <MiniGamesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
