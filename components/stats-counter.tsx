"use client"

import React from "react"
import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
// Unique icon for header
import { MdBarChart } from "react-icons/md" // Material Design - Bar Chart

// Hook to detect mobile devices
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768) // md breakpoint
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])
  return isMobile
}

export default function StatsCounter() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useIsMobile()
  const prevIsMobileRef = useRef(isMobile)

  // Reset index when switching between mobile and desktop
  useEffect(() => {
    if (prevIsMobileRef.current !== isMobile) {
      setCurrentIndex(0)
      prevIsMobileRef.current = isMobile
    }
  }, [isMobile])

  const stats = [
    {
      value: 15,
      label: "Years Serving Our Community",
      suffix: "",
    },
    {
      value: 250,
      label: "Happy Clients & Counting",
      suffix: "+",
    },
    {
      value: 12,
      label: "Communities Cared For",
      suffix: "",
    },
    {
      value: 188,
      label: "Dedicated Team Members",
      suffix: "",
    },
    {
      value: 2,
      label: "Average Response Time",
      suffix: " Hours",
    },
    {
      value: 100,
      label: "Eco-Friendly Cleaning",
      suffix: "%",
    },
  ]

  // Auto-scroll functionality - show 3 stats at a time on desktop, 1 on mobile
  useEffect(() => {
    if (!inView || !scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const cardsPerView = isMobile ? 1 : 3
    const scrollInterval = setInterval(() => {
      setCurrentIndex((prev) => {
        // Move by cardsPerView (3 on desktop, 1 on mobile)
        // When we reach or exceed the last stat, loop back to start
        if (prev + cardsPerView >= stats.length) {
          return 0
        }
        return prev + cardsPerView
      })
    }, 3000) // Change every 3 seconds

    return () => clearInterval(scrollInterval)
  }, [inView, stats.length, isMobile])

  // Scroll to current index
  useEffect(() => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const flexContainer = container.querySelector('.flex') as HTMLElement
    if (!flexContainer || flexContainer.children.length === 0) return

    // Get the card element at currentIndex to use its offsetLeft (accounts for gaps automatically)
    const targetCard = flexContainer.children[currentIndex] as HTMLElement
    if (!targetCard) return

    // Use offsetLeft which already accounts for gaps in flexbox layout
    const scrollPosition = targetCard.offsetLeft

    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    })
  }, [currentIndex, isMobile])

  return (
    <section className="relative py-12 md:py-16 lg:py-20">
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
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-add8e6/10 text-add8e6 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs font-medium mb-6 md:mb-6">
            <MdBarChart className="w-3.5 h-3.5" />
            By the Numbers
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-6 md:mb-6 leading-tight">
            Our Story in{' '}
            <span className="text-add8e6 relative inline-block">
              Numbers
              <motion.span
                className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut' }}
                style={{ display: 'block' }}
              />
            </span>
          </h2>
          <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300">
            Every number tells a story of trust, care, and sparkling spaces. Discover how we make a difference for families and businesses across our community—one clean at a time.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Auto-scrolling horizontal container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-hidden scroll-smooth snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div 
              ref={ref}
              className="flex gap-8 md:gap-12"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 snap-center"
                  style={{
                    minWidth: isMobile ? '100%' : 'calc((100% - 96px) / 3)', // Full width on mobile, 1/3 minus gaps on desktop (gap-12 = 48px * 2 gaps)
                  }}
                >
                  <StatItem
                    value={stat.value}
                    label={stat.label}
                    suffix={stat.suffix}
                    animate={inView}
                    delay={index * 100}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Hide scrollbar */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}

interface StatItemProps {
  value: number
  label: string
  suffix: string
  animate: boolean
  delay: number
}

function StatItem({ value, label, suffix, animate, delay }: StatItemProps) {
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
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: delay / 1000, duration: 0.6 }}
    >
      {/* Number - Matching hero style */}
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4 tracking-tight">
        {animate ? count : 0}
        {suffix}
      </div>

      {/* Label - Matching hero style */}
      <div className="text-[10px] md:text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider font-medium pb-1.5 border-b border-gray-400/40 dark:border-gray-500/40 inline-block">
        {label}
      </div>
    </motion.div>
  )
}
