'use client'

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
// Unique icon from different icon library - matching home page style
import { HiArrowUp } from "react-icons/hi2" // Heroicons v2 - Arrow Up

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-20 md:bottom-24 right-3 md:right-4 z-40"
          aria-label="Scroll to top"
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-add8e6/20 rounded-lg blur-sm" />
            <div className="relative bg-gradient-to-br from-add8e6 to-add8e6/90 hover:from-add8e6/90 hover:to-add8e6 text-white p-2 md:p-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-add8e6/20">
              <HiArrowUp className="h-3 w-3 md:h-3.5 md:w-3.5" />
            </div>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
} 