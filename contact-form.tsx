"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

declare global {
  interface Window {
    Tally: {
      openPopup: (formId: string, options?: any) => void;
      closePopup: (formId: string) => void;
    }
  }
}

interface ContactFormProps {
  variant?: 'button' | 'cta'
}

export function ContactForm({ variant = 'button' }: ContactFormProps) {
  const handleFormClick = () => {
    // Open the form in a new window/tab
    window.open('https://tally.so/r/m6GKkO', '_blank')
  }

  if (variant === 'cta') {
    return (
      <Button
        size="lg"
        className="bg-[#083744] text-white hover:bg-[#083744]/90"
        onClick={handleFormClick}
      >
        Contact Us
      </Button>
    )
  }

  return (
    <Button
      size="lg"
      className="fixed bottom-4 right-4 z-50 bg-[#083744] text-white hover:bg-[#083744]/90 md:bottom-8 md:right-8"
      onClick={handleFormClick}
    >
      Contact Us
    </Button>
  )
}

