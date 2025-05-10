import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { appLogos } from "../app-logos"

export function IntegrationsSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge className="mb-4">Integrations</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            We Work With These Apps and More!
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-600">
            Seamlessly integrate your favorite tools and platforms with our automation solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {appLogos.map((app, index) => (
            <div
              key={index}
              className="flex flex-col items-center group hover:scale-105 transition-transform duration-200"
            >
              <div className="relative w-16 h-16 mb-2">
                <Image src={app.logo || "/placeholder.svg"} alt={`${app.name} logo`} fill className="object-contain" />
              </div>
              <span className="text-sm text-center text-gray-600 group-hover:text-[#0A4958]">{app.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

