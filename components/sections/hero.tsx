import { WorkflowCarousel } from "../carousel"

export function HeroSection() {
  return (
    <section className="relative mx-2 bg-[#0A4958] text-white before:absolute before:inset-0 before:bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QUGQT8s3p9N5GvFDSDOnSyyF4CTvsR.png')] before:bg-center before:bg-repeat before:opacity-10 before:content-['']">
      <div className="container mx-auto px-4 py-12 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
              AI-Powered <span className="underline decoration-2 underline-offset-4">Automation</span> &{" "}
              <span className="underline decoration-2 underline-offset-4">Development</span> Solutions
            </h1>
            <p className="text-base text-gray-200 sm:text-lg md:text-xl">
              Transform your business with AI automation and cutting-edge development. We combine automation tools with
              expert development to deliver powerful, scalable solutions.
            </p>
            <p className="text-base text-gray-200 sm:text-lg md:text-xl">
              We also work with small businesses and entrepreneurs to increase their digital footprint and improve their
              efficiency using various digital marketing services.
            </p>
          </div>
          <div className="relative mt-8 lg:mt-0 lg:block">
            <WorkflowCarousel />
          </div>
        </div>
        <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold">100%</div>
            <div className="text-xs sm:text-sm text-gray-200">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold">12+</div>
            <div className="text-xs sm:text-sm text-gray-200">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold">12+</div>
            <div className="text-xs sm:text-sm text-gray-200">Active Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold">5+</div>
            <div className="text-xs sm:text-sm text-gray-200">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}

