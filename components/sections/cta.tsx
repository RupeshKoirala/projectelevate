import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/contact-form"

export function CTASection() {
  return (
    <section id="get-started" className="bg-[#F5F0EB] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge className="mb-4">Get Started</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-600">
            Get in touch today to discuss your project and discover how our AI-powered solutions can elevate your
            business.
          </p>
        </div>
        <div className="flex justify-center">
          <ContactForm variant="cta" />
        </div>
      </div>
    </section>
  )
}

