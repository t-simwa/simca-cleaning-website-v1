"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
// Unique icons from different icon libraries - matching home page style
import { FaWhatsapp } from "react-icons/fa" // Font Awesome - WhatsApp
import { MdPhone } from "react-icons/md" // Material Design - Phone
import { HiClock } from "react-icons/hi2" // Heroicons v2 - Clock
import { HiChatBubbleLeftRight } from "react-icons/hi2" // Heroicons v2 - Chat

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
    <div className="fixed bottom-3 right-3 md:bottom-4 md:right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="bg-white dark:bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md p-3 mb-2.5 w-[calc(100vw-1.5rem)] md:w-64 border border-gray-100 dark:border-gray-800/50"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-start gap-2">
                <motion.div 
                  className="relative flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-500/20 rounded-md blur-sm" />
                    <div className="relative p-1.5 bg-gradient-to-br from-green-500/10 to-green-500/5 dark:from-green-500/15 dark:to-green-500/8 rounded-md border border-green-500/20">
                      <HiChatBubbleLeftRight className="h-3 w-3 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                </motion.div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-xs leading-tight mb-0.5">Chat with us</h3>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight">We typically reply instantly</p>
                </div>
              </div>
              <button
                onClick={toggleWidget}
                className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors p-0.5 -mt-0.5 -mr-0.5"
                aria-label="Close chat"
              >
                <X className="h-3 w-3" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-2.5">
              <p className="text-[11px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Hello! Need help with cleaning services? We're here to assist you.
              </p>
              
              {/* Business Hours */}
              <div className="flex items-center gap-1.5 text-[10px] text-gray-500 dark:text-gray-400">
                <HiClock className="h-2.5 w-2.5 flex-shrink-0" />
                <span className="leading-tight">Mon-Fri: 8am-5pm, Sat: 9am-1pm</span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-1.5 pt-1.5 border-t border-gray-100 dark:border-gray-800/50">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2 px-3 rounded-md flex items-center justify-center gap-1.5 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-sm text-xs font-medium"
                >
                  <FaWhatsapp className="h-3 w-3" />
                  <span>Start WhatsApp Chat</span>
                </button>
                
                <button
                  onClick={handlePhoneClick}
                  className="w-full bg-gray-50 hover:bg-gray-100 dark:bg-gray-800/50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 py-2 px-3 rounded-md flex items-center justify-center gap-1.5 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] border border-gray-100 dark:border-gray-800/50 text-xs font-medium"
                >
                  <MdPhone className="h-3 w-3" />
                  <span>Call Us</span>
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
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-2.5 md:p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95 ${
          isOpen ? "rotate-90" : ""
        }`}
        aria-label="WhatsApp Chat"
      >
        <div className="absolute inset-0 bg-green-500/20 rounded-lg blur-sm opacity-0 hover:opacity-100 transition-opacity" />
        <div className="relative">
          {isOpen ? (
            <X className="h-3.5 w-3.5 md:h-4 md:w-4" />
          ) : (
            <FaWhatsapp className="h-3.5 w-3.5 md:h-4 md:w-4" />
          )}
        </div>
      </motion.button>
    </div>
  )
}
