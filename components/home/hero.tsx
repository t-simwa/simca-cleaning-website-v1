"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Clock, Users, Star, Building2 } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

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

      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 py-12 sm:py-16 md:py-24 lg:py-32 relative flex-grow flex flex-col justify-center">
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
              className="inline-block mb-6 sm:mb-4 md:mb-12"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Kenya's Trusted Cleaning Partner
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6 md:mb-10 leading-tight tracking-wide"
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

            <motion.p 
              variants={itemVariants}
              className="text-sm md:text-lg text-gray-200 tracking-wide mb-12 max-w-2xl mx-auto"
            >
              Enjoy peace of mind with our professional, fully customized cleaning services for homes and businesses across Kenya. No contracts, no hassle—just sparkling results, flexible scheduling, and a 100% satisfaction guarantee. Discover why families and companies trust Simca Agencies for quality, affordability, and care.
            </motion.p>

            {/* Quick stats with enhanced micro-interactions */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-16"
            >
              {[
                { 
                  value: "98%", 
                  label: "Client Satisfaction", 
                  icon: <Star className="w-4 h-4 text-white" />,
                },
                { 
                  value: "50+", 
                  label: "Corporate Offices", 
                  icon: <Building2 className="w-4 h-4 text-white" />,
                },
                { 
                  value: "15+", 
                  label: "Years Experience", 
                  icon: <Clock className="w-4 h-4 text-white" />,
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statsVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-gradient-to-r from-add8e6 to-add8e6/90 p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center"
                >
                  <div className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2 flex items-center justify-center gap-2">
                    {stat.icon}
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      <CountUp end={stat.value} duration={1.2} />
                    </span>
                  </div>
                  <div className="text-xs md:text-sm text-white">
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
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 group text-center text-xs sm:text-sm"
              >
                Get Your Free Quote
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
