"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useEffect } from "react"
import { HiCheckCircle } from "react-icons/hi2"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  name: string
  service: string
}

export default function SuccessModal({ isOpen, onClose, name, service }: SuccessModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-sm max-w-sm w-full pointer-events-auto border border-gray-100 dark:border-gray-800/50 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 p-1 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              {/* Content */}
              <div className="p-4 pt-8">
                {/* Icon with gradient glow - matching home page style */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.05, type: "spring", stiffness: 200, damping: 15 }}
                  className="relative flex-shrink-0 mx-auto mb-3 w-fit"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md" />
                    <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15">
                      <HiCheckCircle className="h-4 w-4 text-add8e6" />
                    </div>
                  </div>
                </motion.div>

                {/* Message - compact and natural */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-center"
                >
                  <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Got it, {name.split(' ')[0]}!
                  </h2>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                    We received your request for <span className="font-medium text-gray-900 dark:text-white">{service}</span>.
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    We'll be in touch within 2 hours to confirm everything.
                  </p>
                </motion.div>

                {/* Email note - subtle */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800/50"
                >
                  <p className="text-[10px] text-gray-500 dark:text-gray-500 text-center">
                    Check your email for confirmation details.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
