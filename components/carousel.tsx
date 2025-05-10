"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vNkHm8MgXNvsUM4MLxppVJR22ksfIr.png",
    description: "For different odd and even numbers, the emails are sent separately",
    alt: "Make.com workflow showing odd/even email routing",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HfFu8J3AEBPcjzRKnmPI8mSmZ2bDsi.png",
    description: "When form is submitted, it is added to sheets and first email is sent and next sent to teams",
    alt: "Make.com workflow showing Google Forms integration",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-spPimq492U5yXNhU2cTN0MjBBE4qio.png",
    description: "When a new Instagram post appears, this automation downloads it and uploads it to a Slack channel",
    alt: "Make.com workflow showing Instagram to Slack automation",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dsWo5ALR7ZikYEJiJiy2X5AgugjrDI.png",
    description: "Email is automatically sent to leads from facebook",
    alt: "Make.com workflow showing Facebook Leads to Email automation",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ldvZFJCODn0fsjuJo2r9Kvt8HHFATm.png",
    description: "Complex workflow; if you can tell us, we can build it!",
    alt: "Make.com workflow showing complex multi-service integration",
  },
]

export function WorkflowCarousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(true)
  const timerRef = React.useRef<NodeJS.Timeout>()

  const goToNext = React.useCallback(() => {
    setCurrentSlide((current) => (current + 1) % slides.length)
  }, [])

  const goToPrevious = () => {
    setCurrentSlide((current) => (current - 1 + slides.length) % slides.length)
  }

  React.useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(goToNext, 5000)
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isPlaying, goToNext])

  return (
    <div className="relative w-full space-y-4">
      <div className="flex justify-between items-center mb-4">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          <span className="sr-only">{isPlaying ? "Pause" : "Play"} slideshow</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
          onClick={goToNext}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
        <div className="relative h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute h-full w-full transform transition-all duration-500 ease-in-out ${
                index === currentSlide ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2">
        {slides.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className={`h-2 w-2 rounded-full p-0 ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </Button>
        ))}
      </div>

      <div className="text-center text-sm text-white/90">{slides[currentSlide].description}</div>
    </div>
  )
}

