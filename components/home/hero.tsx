"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Clock, Users, Star, Building2 } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  // Stats animation variants with enhanced micro-interactions
  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  // Enhanced stats hover animation
  const statsHoverAnimation = {
    scale: 1.05,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }

  // Remove carousel logic and use only the first image
  const heroImage = {
    src: "/home-hero/cleaner-home.jpg",
    alt: "Professional cleaning services in Kenya"
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-900/20 dark:via-gray-900 dark:to-blue-800/20 animate-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(173,216,230,0.1),transparent_70%)] animate-pulse" />
      </div>
      
      {/* Floating decorative elements - more subtle */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-float-delayed" />
      </div>
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-10 md:py-16 lg:py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-14 md:gap-16 lg:gap-20 items-center">
          {/* Left side - Content with improved mobile spacing */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-block mb-0 sm:mb-4 md:mb-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm">
                <CheckCircle2 className="w-4 h-4" />
                Kenya's Trusted Cleaning Partner
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight tracking-wide"
            >
              Experience a Cleaner, Healthier Space with
              <motion.span 
                className="relative inline-block tracking-wider"
                variants={itemVariants}
              >
                Simca Agencies - Kenya's Trusted
              </motion.span>
              <span className="text-add8e6 relative inline-block">
                Cleaning Experts
                <motion.span
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  style={{ display: 'block' }}
                />
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-base md:text-xl text-gray-600 dark:text-gray-300 tracking-wide mb-4 max-w-sm sm:max-w-lg mx-auto lg:mx-0"
            >
              Enjoy peace of mind with our professional, fully customized cleaning services for homes and businesses across Kenya. No contracts, no hassle—just sparkling results, flexible scheduling, and a 100% satisfaction guarantee. Discover why families and companies trust Simca Agencies for quality, affordability, and care.
            </motion.p>

            {/* Quick stats with enhanced micro-interactions */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-12"
            >
              {[
                { 
                  value: "98%", 
                  label: "Client Satisfaction", 
                  icon: <Star className="w-4 h-4 text-add8e6" />,
                },
                { 
                  value: "50+", 
                  label: "Corporate Offices", 
                  icon: <Building2 className="w-4 h-4 text-add8e6" />,
                },
                { 
                  value: "15+", 
                  label: "Years Experience", 
                  icon: <Clock className="w-4 h-4 text-add8e6" />,
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statsVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-add8e6 mb-1 md:mb-2 flex items-center justify-center gap-2">
                    {stat.icon}
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      <CountUp end={stat.value} duration={1.2} />
                    </span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start mb-6"
            >
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 group text-center text-sm sm:text-base"
              >
                Get Started
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link 
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/80 dark:bg-gray-800/80 text-add8e6 border border-add8e6 px-6 md:px-8 py-3 md:py-4 rounded-xl font-medium hover:bg-add8e6/10 transition-all duration-300 hover:shadow-lg group text-center text-sm sm:text-base backdrop-blur-sm"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Image (static, no carousel, no overlay text) */}
          <motion.div
            className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2 mb-4 sm:mb-0"
          >
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              className="object-cover object-center transition-transform duration-700"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
            />
            {/* Enhanced vignette effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
