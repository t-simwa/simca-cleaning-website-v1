"use client"

import Image from "next/image"
import { ArrowRight, Phone } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const MotionImage = motion(Image)

export default function Hero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
  }, [])

  // Animation variants - optimized for LCP
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: prefersReducedMotion ? "tween" : "spring",
        stiffness: prefersReducedMotion ? 0 : 100,
        damping: prefersReducedMotion ? 0 : 15,
        duration: prefersReducedMotion ? 0.2 : undefined
      }
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <MotionImage
        src="/home-hero/hero-main.jpg"
        alt="Simca Agencies team - Professional cleaning services in Kenya"
        fill
        className="object-cover object-center"
        priority
        fetchPriority="high"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, (max-width: 1920px) 100vw, 1920px"
        quality={70}
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 10, ease: "easeOut" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 relative flex-grow flex flex-col justify-center">
        <div className="flex flex-col items-center">
          {/* Centered Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1 
              variants={itemVariants}
              className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white mb-6 md:mb-8 leading-loose"
            >
              Professional Cleaning{" "}
              <span className="text-white relative inline-block">
                You Can Trust
                <motion.span
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/30 rounded-full origin-left block"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </span>
            </motion.h1>

            {/* Short tagline */}
            <p 
              className="font-body text-base md:text-lg lg:text-xl text-gray-200 tracking-wide mb-8 md:mb-10 max-w-2xl mx-auto"
            >
              Kenya's trusted professional cleaners for hospitals, hotels, offices, and industrial facilities.
            </p>

            {/* Dual CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            >
              {/* Primary CTA - Get Quote */}
              <button 
                onClick={() => {
                  const contactForm = document.getElementById('home-contact-form')
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-6 md:px-8 py-3 md:py-3.5 font-semibold transition-all duration-300 group text-center text-sm tracking-wide rounded-lg shadow-lg hover:shadow-xl hover:scale-105 min-w-[200px]"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              
              {/* Secondary CTA - Call Now */}
              <a 
                href="tel:+254721525901"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 px-6 md:px-8 py-3 md:py-3.5 font-semibold transition-all duration-300 group text-center text-sm tracking-wide rounded-lg shadow-lg hover:shadow-xl min-w-[200px]"
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
