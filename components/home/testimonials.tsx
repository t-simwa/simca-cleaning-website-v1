"use client"

import { Star, ExternalLink, MessageSquare } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

  const testimonials = [
    {
      name: "Jane Mwangi",
    initial: "J",
    quote: "Since Simca started cleaning, our home finally feels fresh and breathable. It's not just clean—it's healthier for my family.",
    timeAgo: "2 months ago",
    },
    {
      name: "David Ochieng",
    initial: "D",
    quote: "We had a flood and Simca was here in minutes. They handled everything with calm professionalism. Incredibly reliable.",
    timeAgo: "3 months ago",
    },
    {
      name: "Amina Hussein",
    initial: "A",
    quote: "Their team is meticulous. Our kitchen and dining areas are always spotless. Health inspectors notice the difference!",
    timeAgo: "1 month ago",
    },
    {
      name: "Michael Kimani",
    initial: "M",
    quote: "Our factory floor has never been safer or cleaner. They work around our schedule and understand industrial challenges.",
    timeAgo: "4 months ago",
    },
]

// Google Business details
const googleReviews = {
  rating: 4.9,
  count: 25,
  url: "https://g.page/r/CeKUor0iQ1V2EAE/review",
    }

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-scroll every 6 seconds (slower than stats counter)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="relative py-16 md:py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-900/20 dark:via-gray-900 dark:to-blue-800/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(173,216,230,0.1),transparent_70%)]" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-add8e6/10 text-add8e6 px-4 py-2 rounded-full text-sm font-medium">
              <MessageSquare className="w-4 h-4" />
              Client Reviews
            </span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
            What Our Clients{" "}
            <span className="text-add8e6 relative inline-block">
              Say
              <motion.span 
                className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-1 bg-add8e6/30 rounded-full origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </span>
          </h2>

          {/* Google Reviews Rating */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-4">
            {/* Stars and Rating - stacked on mobile, inline on desktop */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(googleReviews.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="font-body text-lg md:text-base font-semibold text-gray-800 dark:text-white">
              {googleReviews.rating}
            </span>
            {/* Hidden on mobile, visible on desktop */}
            <span className="hidden md:inline font-body text-base text-gray-600 dark:text-gray-400">
              · Based on {googleReviews.count}+ Google Reviews
            </span>
          </div>
        </motion.div>

        {/* Single Testimonial Card with Auto-scroll */}
        <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
              key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900/50 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
          </div>

              {/* Quote */}
              <p className="font-body text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center leading-relaxed mb-8">
                "{currentTestimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex flex-col items-center">
                {/* Initial Avatar */}
                <div className="w-14 h-14 bg-add8e6/20 rounded-full flex items-center justify-center mb-3">
                  <span className="font-heading text-xl font-bold text-add8e6">
                    {currentTestimonial.initial}
              </span>
          </div>

                <p className="font-body text-base font-semibold text-gray-800 dark:text-white">
                  {currentTestimonial.name}
                </p>
                <p className="font-body text-sm text-gray-500 dark:text-gray-400">
                  {currentTestimonial.timeAgo}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-add8e6 w-6'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-add8e6/50'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View Google Reviews CTA */}
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href={googleReviews.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white px-6 py-3 font-semibold transition-all duration-300 text-sm tracking-wide rounded-lg shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            View All Google Reviews
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
