"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Check, Loader2, BookOpen, ArrowRight } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const [focusedField, setFocusedField] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setEmail("")

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <ScrollAnimation>
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-12 md:py-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 animate-gradient">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(173,216,230,0.1),transparent_70%)] animate-pulse" />
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 md:mb-6">
              <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs font-medium flex items-center gap-2 shadow-sm">
                <BookOpen className="w-3 h-3 md:w-4 md:h-4" />
                Stay Updated
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight tracking-wide"
              style={{
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                WebkitTextStroke: "0.5px rgba(0,0,0,0.1)"
              }}
            >
              Subscribe to Our{" "}
              <span className="text-add8e6 relative inline-block tracking-wider"
                style={{
                  textShadow: "0 2px 4px rgba(173,216,230,0.3)",
                  WebkitTextStroke: "0.5px rgba(173,216,230,0.3)"
                }}
              >
                Newsletter
                <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full" />
              </span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
              Get the latest cleaning tips, industry news, and exclusive offers delivered straight to your inbox.
            </p>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-sm max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 md:py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-add8e6/50 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-xs md:text-sm"
                    required
                  />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-2.5 md:py-3 rounded-lg font-medium text-white transition-all duration-300 text-xs sm:text-sm ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-add8e6 hover:bg-add8e6/90 hover:shadow-lg hover:scale-105 transform"
                }`}
                >
                  {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                    <span className="text-xs sm:text-sm">Subscribing...</span>
                  </div>
                  ) : (
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs sm:text-sm">Subscribe</span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  )}
                </button>
              </form>

            {isSuccess ? (
              <div className="mt-4 md:mt-6 p-3 md:p-4 rounded-lg md:rounded-xl text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20">
                <h3 className="font-semibold text-green-800 dark:text-green-300 text-sm md:text-base">Thank you for subscribing!</h3>
                <p className="text-xs md:text-sm">You'll receive our updates soon.</p>
              </div>
            ) : error && (
              <div className="mt-4 md:mt-6 p-3 md:p-4 rounded-lg md:rounded-xl text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20">
                <p className="font-medium text-xs md:text-sm">{error}</p>
              </div>
            )}

            <p className="mt-4 md:mt-6 text-xs text-gray-500 dark:text-gray-400">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}
