"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-[#F5F0EB] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden space-x-4 md:flex">
            <Button variant="ghost" onClick={() => scrollTo("services")}>
              Services
            </Button>
            <Button variant="ghost" onClick={() => scrollTo("packages")}>
              Packages
            </Button>
            <Button variant="ghost" onClick={() => scrollTo("faq")}>
              FAQ
            </Button>
            <Button variant="ghost" onClick={() => scrollTo("get-started")}>
              Get Started
            </Button>
          </nav>
          <Button className="md:hidden" variant="outline" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
}

