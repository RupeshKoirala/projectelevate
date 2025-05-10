// Remove the ContactForm import and usage since we're using PopupForm globally now
import { CTASection } from "@/components/sections/cta"
import { CoreValuesSection } from "@/components/sections/core-values"
import { FAQSection } from "@/components/sections/faq"
import { Footer } from "@/components/sections/footer"
import { HeroSection } from "@/components/sections/hero"
import { IntegrationsSection } from "@/components/sections/integrations"
import { PackagesSection } from "@/components/sections/packages"
import { ServicesSection } from "@/components/sections/services"
import { VisionSection } from "@/components/sections/vision"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <IntegrationsSection />
      <ServicesSection />
      <VisionSection />
      <PackagesSection />
      <FAQSection />
      <CoreValuesSection />
      <CTASection />
      <Footer />
    </div>
  )
}

