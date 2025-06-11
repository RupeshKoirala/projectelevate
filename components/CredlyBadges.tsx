"use client"
// components/CredlyBadges.tsx
// This component displays 4 Credly badges in a responsive grid (2x2 on mobile/tablet, 4 in a row on desktop).
// It uses shadcn/ui Card for consistent styling. Place this file in /components. Import and use it between HeroSection and IntegrationsSection in app/page.tsx.

const BADGES = [
  {
    img: "/certifications/make-foundation.png",
    url: "https://www.credly.com/badges/bc708823-ac6a-4397-a262-303e17480664/public_url",
    alt: "Make Foundation Certification",
  },
  {
    img: "/certifications/make-basics.png",
    url: "https://www.credly.com/badges/05cea627-e8dd-43bf-9b59-ab33f74af616/public_url",
    alt: "Make Basic Certification",
  },
  {
    img: "/certifications/make-intermediate.png",
    url: "https://www.credly.com/badges/c2c8d5d5-1e7a-499b-b333-8478976e03ed/public_url",
    alt: "Make Intermediate Certification",
  },
  {
    img: "/certifications/make-advanced.png",
    url: "https://www.credly.com/badges/2c81895f-c96a-47b2-bf53-9087edf0f950/public_url",
    alt: "Make Advanced Certification",
  },
]

export default function CredlyBadges() {
  return (
    <section className="bg-[#f5f0eb] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-4">Certifications</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Certifications</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-600">Officially certified to deliver the expert level automations to your business.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {BADGES.map((badge, idx) => (
            <a
              key={idx}
              href={badge.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={badge.img}
                alt={badge.alt}
                width={150}
                height={150}
                className="rounded shadow hover:scale-105 transition-transform duration-200"
                style={{ objectFit: "contain" }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
} 