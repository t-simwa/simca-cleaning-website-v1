"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
// Unique icons from different icon libraries
import { HiShieldCheck } from "react-icons/hi2" // Heroicons v2 - Trust/Check

const MotionImage = motion(Image)

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])
  return isMobile
}

// CountUp component for animated numbers
function CountUp({ end, duration = 1.5, suffix = "" }: { end: string | number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const isPercent = typeof end === 'string' && end.includes('%');
    const isPlus = typeof end === 'string' && end.includes('+');
    const numericEnd = typeof end === 'number' ? end : parseInt(end);
    const startTime = performance.now();
    function animate(now: number) {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * numericEnd);
      setCount(value);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(numericEnd);
      }
    }
    requestAnimationFrame(animate);
    return () => {};
  }, [end, duration]);
  let display: string | number = count;
  if (typeof end === 'string' && end.includes('%')) display = `${count}%`;
  if (typeof end === 'string' && end.includes('+')) display = `${count}+`;
  return <span>{display}{suffix}</span>;
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    { 
      src: "/home-hero/cleaner-home.jpg", 
      alt: "Professional cleaning services in Kenya",
      caption: "Residential Cleaning",
      description: "Transform your home with our thorough, eco-friendly cleaning solutions. Perfect for busy families and professionals.",
      category: "residential"
    },
    { 
      src: "/home-hero/office-cleaning.jpg", 
      alt: "Office cleaning services",
      caption: "Commercial Cleaning",
      description: "Maintain a pristine workspace with our flexible scheduling and specialized corporate cleaning protocols.",
      category: "commercial"
    },
    { 
      src: "/home-hero/industrial-cleaning.jpg", 
      alt: "Industrial cleaning services",
      caption: "Industrial Cleaning",
      description: "Expert industrial cleaning with advanced equipment and safety-certified professionals for your facility.",
      category: "industrial"
    },
    { 
      src: "/home-hero/specialized-cleaning.jpg", 
      alt: "Specialized cleaning services",
      caption: "Specialized Services",
      description: "Custom cleaning solutions for post-construction, deep cleaning, and special events with attention to detail.",
      category: "specialized"
    }
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  // Check if user prefers reduced motion
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



  // Remove carousel logic and use only the first image
  const heroImage = {
    src: "/home-hero/cleaner-home.webp",
    alt: "Professional cleaning services in Kenya"
  }

  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <MotionImage
        src={heroImage.src}
        alt={heroImage.alt}
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
            <motion.div 
              variants={itemVariants}
              className="inline-block mb-6 sm:mb-4 md:mb-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2">
                <HiShieldCheck className="w-3.5 h-3.5" />
                Kenya's Trusted Cleaning Partner
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-wide"
            >
              Experience a Cleaner, Healthier Space with{" "}
              <span className="text-fff relative inline-block">
                Simca Agencies
                <motion.span
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </span>{" "}
              - Kenya's Trusted Cleaning Experts
            </motion.h1>

            {/* LCP Optimized Paragraph - Renders immediately */}
            <p 
              className="text-sm md:text-base lg:text-base text-gray-200 tracking-wide mb-10 md:mb-12 max-w-2xl mx-auto opacity-100"
              style={{ 
                willChange: 'auto',
              }}
            >
              Enjoy peace of mind with our professional, fully customized cleaning services for homes and businesses across Kenya. No contracts, no hassle—just sparkling results, flexible scheduling, and a 100% satisfaction guarantee. Discover why families and companies trust Simca Agencies for quality, affordability, and care.
            </p>

            {/* Minimalist Stats Section */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto mb-8 md:mb-12"
            >
              {[
                { 
                  value: "98%", 
                  label: "CLIENT SATISFACTION", 
                },
                { 
                  value: "50+", 
                  label: "CORPORATE OFFICES", 
                },
                { 
                  value: "15+", 
                  label: "YEARS EXPERIENCE", 
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 tracking-tight">
                    <CountUp end={stat.value} duration={1.5} />
                  </div>
                  <div className="text-[10px] md:text-xs text-gray-300 uppercase tracking-wider font-medium pb-1.5 border-b border-gray-400/40 inline-block">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center mb-6"
            >
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-6 md:px-8 py-2.5 md:py-3 font-medium transition-all duration-300 group text-center text-xs sm:text-sm tracking-wide border-b-2 border-transparent hover:border-white/50"
              >
                Get Your Free Quote
                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
