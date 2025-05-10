"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

export function FloatingButton() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const getStartedSection = document.getElementById("get-started")
      if (getStartedSection) {
        const rect = getStartedSection.getBoundingClientRect()
        setIsVisible(rect.top > window.innerHeight)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = () => {
    const getStartedSection = document.getElementById("get-started")
    if (getStartedSection) {
      getStartedSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isVisible) return null

  return (
    <button
      onClick={handleClick}
      className="fixed right-6 bottom-6 z-50 flex items-center justify-center px-6 py-3 bg-[#0e687e] text-white text-lg font-semibold rounded-full shadow-lg hover:bg-[#0d5c70] transition-all duration-300 ease-in-out"
    >
      Get Started
      <ArrowRight className="ml-2 h-5 w-5" />
    </button>
  )
}

