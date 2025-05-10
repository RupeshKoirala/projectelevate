import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero"
import { IntegrationsSection } from "@/components/sections/integrations"
import { ServicesSection } from "@/components/sections/services"
import { VisionSection } from "@/components/sections/vision"
import { PackagesSection } from "@/components/sections/packages"
import { FAQSection } from "@/components/sections/faq"
import { CoreValuesSection } from "@/components/sections/core-values"
import { CTASection } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <main>
      <Header />
      <HeroSection />
      <IntegrationsSection />
      <ServicesSection />
      <VisionSection />
      <PackagesSection />
      <FAQSection />
      <CoreValuesSection />
      <CTASection />
      <Footer />
    </main>
  )
}

