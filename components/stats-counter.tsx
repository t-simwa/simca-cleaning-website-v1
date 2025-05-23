"use client"

import React from "react"
import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { Users, Home, Building2, Award, TrendingUp, ArrowUpRight, Sparkles, Clock, Leaf, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function StatsCounter() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [currentPage, setCurrentPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const stats = [
    {
      icon: <Award className="h-10 w-10 text-add8e6" />,
      value: 8,
      label: "Years of Local Service",
      suffix: "+",
      trend: "+12%",
      description: "From last year",
      highlight: "Certified Professionals",
    },
    {
      icon: <Users className="h-10 w-10 text-add8e6" />,
      value: 1500,
      label: "Happy Clients",
      suffix: "+",
      trend: "+25%",
      description: "Client growth",
      highlight: "98% Customer Satisfaction",
    },
    {
      icon: <Home className="h-10 w-10 text-add8e6" />,
      value: 12,
      label: "Communities Served",
      suffix: "",
      trend: "+3",
      description: "New locations",
      highlight: "Local Team Members",
    },
    {
      icon: <Building2 className="h-10 w-10 text-add8e6" />,
      value: 100,
      label: "Team Members",
      suffix: "+",
      trend: "+15%",
      description: "Team expansion",
      highlight: "Residential & Commercial",
    },
    {
      icon: <Clock className="h-10 w-10 text-add8e6" />,
      value: 2,
      label: "Average Response Time",
      suffix: " Hours",
      trend: "-30%",
      description: "Faster than last year",
      highlight: "Quick Service",
    },
    {
      icon: <Leaf className="h-10 w-10 text-add8e6" />,
      value: 100,
      label: "Eco-Friendly Products",
      suffix: "%",
      trend: "100%",
      description: "Sustainable cleaning",
      highlight: "Green Certified",
    },
  ]

  // Calculate total pages based on screen size
  const cardsPerPage = isMobile ? 1 : 3
  const totalPages = Math.ceil(stats.length / cardsPerPage)

  // Handle window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Navigation functions
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  // Get current cards
  const getCurrentCards = () => {
    const start = currentPage * cardsPerPage
    return stats.slice(start, start + cardsPerPage)
  }

  return (
    <section className="relative py-16 md:py-24">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-900/20 dark:via-gray-900 dark:to-blue-800/20 animate-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(173,216,230,0.1),transparent_70%)] animate-pulse" />
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-add8e6/10 text-add8e6 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm font-medium mb-4 md:mb-6">
            <Sparkles className="w-4 h-4" />
            Growing Stronger Every Day
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight">
            Our Impact in{" "}
            <span className="text-add8e6 relative">
              Numbers
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-add8e6/20 rounded-full" />
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300">
            Join thousands of satisfied clients who trust Simca Cleaning for their cleaning needs
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons - Hidden on mobile */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-add8e6/50 hidden md:block"
            aria-label="Previous stats"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-300" />
          </button>

          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-add8e6/50 hidden md:block"
            aria-label="Next stats"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: isMobile ? 100 : 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isMobile ? -100 : 0 }}
                transition={{ duration: 0.5 }}
                ref={ref}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
              >
                {getCurrentCards().map((stat, index) => (
                  <StatItem
                    key={`${currentPage}-${index}`}
                    icon={stat.icon}
                    value={stat.value}
                    label={stat.label}
                    suffix={stat.suffix}
                    trend={stat.trend}
                    description={stat.description}
                    highlight={stat.highlight}
                    animate={inView}
                    delay={index * 200}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Navigation */}
          <div className="flex flex-col items-center gap-4 mt-8 md:hidden">
            {/* Mobile Pagination Dots */}
            <div className="flex items-center gap-3">
              {Array.from({ length: stats.length }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentPage === index
                      ? 'bg-add8e6 w-6'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-add8e6/50'
                  }`}
                  aria-label={`Go to stat ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Mobile Navigation Buttons */}
            <div className="flex items-center gap-4">
              <motion.button
                onClick={prevPage}
                className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50 active:scale-95"
                aria-label="Previous stat"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </motion.button>
              
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {currentPage + 1} of {stats.length}
              </span>

              <motion.button
                onClick={nextPage}
                className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50 active:scale-95"
                aria-label="Next stat"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </motion.button>
            </div>
          </div>

          {/* Desktop Navigation Dots */}
          <div className="hidden md:flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  currentPage === index
                    ? 'bg-add8e6 w-4'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-add8e6/50'
                }`}
                aria-label={`Go to page ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface StatItemProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix: string
  trend: string
  description: string
  highlight: string
  animate: boolean
  delay: number
}

function StatItem({ icon, value, label, suffix, trend, description, highlight, animate, delay }: StatItemProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const animationDuration = 2000 // ms

  useEffect(() => {
    if (animate) {
      let startTime: number
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / animationDuration, 1)
        const currentCount = Math.floor(progress * value)

        if (currentCount !== countRef.current) {
          countRef.current = currentCount
          setCount(currentCount)
        }

        if (progress < 1) {
          window.requestAnimationFrame(step)
        } else {
          setCount(value)
        }
      }

      // Add delay before starting animation
      setTimeout(() => {
        window.requestAnimationFrame(step)
      }, delay)
    }
  }, [animate, value, delay])

  return (
    <motion.div 
      className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100/50 dark:border-gray-700/50"
      style={{
        opacity: animate ? 1 : 0,
        transform: animate ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.5s ease-out ${delay}ms`
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-6">
          <motion.div 
            className="p-2 md:p-3 bg-gradient-to-br from-add8e6/20 to-add8e6/10 rounded-lg md:rounded-xl group-hover:scale-110 transition-transform duration-500 border border-add8e6/20"
            whileHover={{ 
              scale: 1.15,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.5 }
            }}
          >
            {React.cloneElement(icon as React.ReactElement<any>, { className: 'h-7 w-7 md:h-8 md:w-8 text-add8e6' })}
          </motion.div>
        </div>
        
        <motion.div 
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 tracking-tight"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="bg-gradient-to-r from-add8e6 to-add8e6/80 bg-clip-text text-transparent filter drop-shadow-[0_0_8px_rgba(173,216,230,0.3)]">
            {animate ? count : 0}
            {suffix}
          </span>
        </motion.div>
        
        <motion.div 
          className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium mb-2 md:mb-3 tracking-wide"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          {label}
        </motion.div>
        <motion.div 
          className="text-sm md:text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-6"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          {description}
        </motion.div>
        
        <div className="mt-auto pt-3 md:pt-4 border-t border-gray-100 dark:border-gray-700">
          <motion.div 
            className="flex items-center gap-2 text-add8e6"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-sm font-medium tracking-wide">{highlight}</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
