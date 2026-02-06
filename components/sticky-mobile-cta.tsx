"use client"

import { Phone, MessageSquare } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function StickyMobileCTA() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)

  // Show sticky bar after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleGetQuoteClick = () => {
    // Check if we're on the home page
    if (window.location.pathname === "/") {
      const contactForm = document.getElementById("home-contact-form")
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else {
      router.push("/contact#contact-form")
    }
  }

  return (
    <>
      {/* Sticky Mobile Footer Bar - Only visible on mobile */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="flex items-stretch">
          {/* Call Button - Left Half */}
          <a
            href="tel:+254721525901"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-white dark:bg-gray-900 text-gray-800 dark:text-white font-semibold text-sm transition-all duration-200 active:bg-gray-100 dark:active:bg-gray-800"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-add8e6/20">
              <Phone className="w-4 h-4 text-add8e6" />
            </div>
            <span>Call Now</span>
          </a>

          {/* Divider */}
          <div className="w-px bg-gray-200 dark:bg-gray-700" />

          {/* Get Quote Button - Right Half */}
          <button
            onClick={handleGetQuoteClick}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-teal-500 text-white font-semibold text-sm transition-all duration-200 active:bg-teal-600"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
              <MessageSquare className="w-4 h-4" />
            </div>
            <span>Get Quote</span>
          </button>
        </div>
      </div>

      {/* Spacer to prevent content from being hidden behind sticky bar on mobile */}
      <div className="md:hidden h-16" />
    </>
  )
}
