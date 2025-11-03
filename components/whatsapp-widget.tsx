"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X, Phone, Clock } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show widget after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const toggleWidget = () => {
    setIsOpen(!isOpen)
  }

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/254721525901?text=Hello%20Simca%20Cleaning%20Company,%20I'd%20like%20to%20request%20a%20quote.",
      "_blank",
    )
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+254721525901"
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 md:p-6 mb-4 w-[calc(100vw-2rem)] md:w-80 border border-gray-100 dark:border-gray-700"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="bg-green-500 rounded-full p-2 md:p-2.5">
                  <MessageCircle className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white text-sm md:text-base">Chat with us</h3>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">We typically reply instantly</p>
                </div>
              </div>
              <button
                onClick={toggleWidget}
                className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                aria-label="Close chat"
              >
                <X className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-3 md:space-y-4">
              <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">
                Hello! Need help with cleaning services? We're here to assist you.
              </p>
              
              {/* Business Hours */}
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                <Clock className="h-3 w-3 md:h-4 md:w-4" />
                <span>Mon-Fri: 8am-5pm, Sat: 9am-1pm</span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 md:space-y-3 pt-2">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 md:py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-green-500/20 text-sm md:text-base"
                >
                  <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="font-medium">Start WhatsApp Chat</span>
                </button>
                
                <button
                  onClick={handlePhoneClick}
                  className="w-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 py-2.5 md:py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm md:text-base"
                >
                  <Phone className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="font-medium">Call Us</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleWidget}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className={`bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen ? "rotate-90" : ""
        }`}
        aria-label="WhatsApp Chat"
      >
        {isOpen ? <X className="h-5 w-5 md:h-6 md:w-6" /> : <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />}
      </motion.button>
    </div>
  )
}
