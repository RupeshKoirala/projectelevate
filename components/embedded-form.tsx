"use client"

import { useState, useEffect } from "react"
import Script from "next/script"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

declare global {
  interface Window {
    hgInit?: () => void
  }
}

export function EmbeddedForm() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "SHOW_EMBEDDED_FORM") {
        setIsVisible(true)
        setIsSubmitted(false)
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  useEffect(() => {
    if (isVisible) {
      const script = document.createElement("script")
      script.src = "https://link.msgsndr.com/js/form_embed.js"
      script.async = true
      script.onload = () => {
        window.hgInit?.()
      }
      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    }
  }, [isVisible])

  const handleClose = () => {
    setIsVisible(false)
    setIsSubmitted(false)
  }

  if (!isVisible) return null

  return (
    <div className="relative mt-8 bg-white p-4 rounded-lg shadow-lg">
      <Button variant="ghost" size="icon" className="absolute top-2 right-2 z-10" onClick={handleClose}>
        <X className="h-4 w-4" />
      </Button>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/qBY1RTZKhvfCUn6zVftT"
        style={{
          width: "100%",
          height: "840px",
          border: "none",
          borderRadius: "3px",
        }}
        id="inline-qBY1RTZKhvfCUn6zVftT"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="leadCollected"
        data-deactivation-value=""
        data-form-name="Form for Project Elevate Website"
        data-height="840"
        data-layout-iframe-id="inline-qBY1RTZKhvfCUn6zVftT"
        data-form-id="qBY1RTZKhvfCUn6zVftT"
        title="Form for Project Elevate Website"
        onLoad={() => {
          const iframe = document.getElementById("inline-qBY1RTZKhvfCUn6zVftT") as HTMLIFrameElement
          if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage({ type: "INIT_FORM", data: { dataset: {} } }, "*")
          }
        }}
      />
      <Script id="form-embed" strategy="lazyOnload">
        {`
          window.hgInit = window.hgInit || function(){};
          window.hgInit();
        `}
      </Script>
    </div>
  )
}

export function showEmbeddedForm() {
  window.postMessage({ type: "SHOW_EMBEDDED_FORM" }, "*")
}

