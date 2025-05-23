"use client"

import Image from "next/image"
import { Briefcase, Users, Award, MapPin, Sparkles, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function AboutPage() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

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
    setCurrentPage((prev) => (prev + 1) % 3) // 3 cards total
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + 3) % 3) // 3 cards total
  }

  // Get current card for mobile
  const getCurrentCard = () => {
    const cards = [
      {
        icon: <Briefcase className="h-6 w-6 md:h-8 md:w-8 text-add8e6" />,
        title: "Professionalism",
        description: "We approach every job with the highest level of professionalism and attention to detail, ensuring consistent quality across all our services.",
        items: [
          "Trained and certified staff",
          "Quality assurance protocols",
          "Professional equipment"
        ]
      },
      {
        icon: <Users className="h-6 w-6 md:h-8 md:w-8 text-add8e6" />,
        title: "Customer-Centric",
        description: "We prioritize our clients' needs and satisfaction in everything we do, building lasting relationships through exceptional service.",
        items: [
          "24/7 customer support",
          "Customized solutions",
          "Regular feedback system"
        ]
      },
      {
        icon: <Award className="h-6 w-6 md:h-8 md:w-8 text-add8e6" />,
        title: "Excellence",
        description: "We strive for excellence in every cleaning task, no matter how small, setting new standards in the industry.",
        items: [
          "Quality control measures",
          "Continuous improvement",
          "Industry best practices"
        ]
      }
    ]
    return cards[currentPage]
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-16 md:py-24">
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
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-4 md:mb-6">
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-2">
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                  Our Story
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight">
                About{" "}
                <span className="text-add8e6 relative">
                  Simca Cleaning
                  <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full" />
                </span>
              </h1>
              <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                Kenya's trusted cleaning partner, delivering exceptional service since 2015. We're committed to excellence, 
                innovation, and customer satisfaction in every cleaning task we undertake.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-8">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center">
                  <div className="text-2xl md:text-3xl font-bold text-add8e6 mb-1 md:mb-2 flex items-center justify-center gap-2">
                    <Award className="w-4 h-4 text-add8e6" />
                    <span className="group-hover:scale-110 transition-transform duration-300">12+</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    Years of Excellence
                  </div>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center">
                  <div className="text-2xl md:text-3xl font-bold text-add8e6 mb-1 md:mb-2 flex items-center justify-center gap-2">
                    <Users className="w-4 h-4 text-add8e6" />
                    <span className="group-hover:scale-110 transition-transform duration-300">100+</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    Trained Professionals
                  </div>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center">
                  <div className="text-2xl md:text-3xl font-bold text-add8e6 mb-1 md:mb-2 flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 text-add8e6" />
                    <span className="group-hover:scale-110 transition-transform duration-300">6+</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    Cities Served
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="bg-add8e6 hover:bg-add8e6/90 text-white px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                Experience the Difference
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Mission & Values */}
      <div className="relative py-16 md:py-24">
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
          <ScrollAnimation>
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-8 md:mb-16">
                <motion.div 
                  className="inline-block mb-3 sm:mb-4 md:mb-6 mt-0 !mt-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm mt-0 !mt-0">
                    <Sparkles className="w-4 h-4" />
                  Our Core Values
                </span>
                </motion.div>
                <motion.h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight tracking-wide mt-0 !mt-0"
                >
                  Our Mission &{" "}
                  <motion.span 
                    className="text-add8e6 relative inline-block tracking-wider"
                    style={{
                      textShadow: "0 2px 4px rgba(173,216,230,0.3)",
                      WebkitTextStroke: "0.5px rgba(173,216,230,0.3)"
                    }}
                  >
                    Values
                    <motion.span 
                      className="absolute -bottom-2 left-0 w-full h-1 bg-add8e6/20 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                  </motion.span>
                </motion.h2>
                <motion.p 
                  className="text-base md:text-xl text-gray-600 dark:text-gray-300 tracking-wide mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  To transform spaces and enhance lives through exceptional cleaning services that set new standards in hygiene, 
                  sustainability, and customer satisfaction. We're committed to delivering innovative solutions that make a 
                  meaningful difference in our clients' environments.
                </motion.p>
              </div>

              {/* Values Grid */}
              <div className="relative">
                {/* Mobile Carousel / Desktop Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                  {/* Mobile View - Single Card */}
                  {isMobile ? (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-add8e6/50 focus:ring-offset-2 overflow-hidden"
                      >
                        {/* Glassmorphism effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50 dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50" />
                        
                        {/* Subtle pattern overlay */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px]" />
                        </div>

                        <div className="flex flex-col h-full relative z-10">
                          <motion.div 
                            className="p-2 md:p-3 bg-add8e6/10 rounded-lg md:rounded-xl group-hover:scale-110 transition-transform duration-500 mb-6"
                            whileHover={{ 
                              scale: 1.15,
                              rotate: [0, -5, 5, 0],
                              transition: { duration: 0.5 }
                            }}
                          >
                            {getCurrentCard().icon}
                          </motion.div>
                          
                          <motion.h3 
                            className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-add8e6 transition-colors"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            {getCurrentCard().title}
                          </motion.h3>
                          
                          <motion.p 
                            className="text-sm md:text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-6"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            {getCurrentCard().description}
                          </motion.p>

                          <div className="space-y-2 md:space-y-3">
                            {getCurrentCard().items.map((item, i) => (
                              <motion.div 
                                key={i} 
                                className="flex items-center gap-2 text-sm md:text-sm text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-700/30 rounded-lg p-2 backdrop-blur-sm"
                                whileHover={{ 
                                  x: 4,
                                  scale: 1.02,
                                  backgroundColor: 'rgba(173, 216, 230, 0.1)',
                                  transition: { duration: 0.2 }
                                }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <motion.div
                                  whileHover={{ 
                                    scale: 1.2,
                                    rotate: 360,
                                    transition: { duration: 0.5 }
                                  }}
                                >
                                  <CheckCircle2 className="w-4 h-4 md:w-4 md:h-4 text-add8e6 flex-shrink-0" />
                                </motion.div>
                                {item}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  ) : (
                    // Desktop View - All Cards
                    <>
                {/* Professionalism */}
                      <motion.div 
                        className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-add8e6/50 focus:ring-offset-2 overflow-hidden"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Glassmorphism effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50 dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50" />
                        
                        {/* Subtle pattern overlay */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px]" />
                </div>

                        <div className="flex flex-col h-full relative z-10">
                          <motion.div 
                            className="p-2 md:p-3 bg-add8e6/10 rounded-lg md:rounded-xl group-hover:scale-110 transition-transform duration-500 mb-6"
                            whileHover={{ 
                              scale: 1.15,
                              rotate: [0, -5, 5, 0],
                              transition: { duration: 0.5 }
                            }}
                          >
                            <Briefcase className="h-7 w-7 md:h-8 md:w-8 text-add8e6" />
                          </motion.div>
                          
                          <motion.h3 
                            className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-add8e6 transition-colors"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            Professionalism
                          </motion.h3>
                          
                          <motion.p 
                            className="text-sm md:text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-6"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                    We approach every job with the highest level of professionalism and attention to detail, ensuring consistent quality across all our services.
                          </motion.p>

                          <div className="space-y-2 md:space-y-3">
                            {[
                              "Trained and certified staff",
                              "Quality assurance protocols",
                              "Professional equipment"
                            ].map((item, i) => (
                              <motion.div 
                                key={i} 
                                className="flex items-center gap-2 text-sm md:text-sm text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-700/30 rounded-lg p-2 backdrop-blur-sm"
                                whileHover={{ 
                                  x: 4,
                                  scale: 1.02,
                                  backgroundColor: 'rgba(173, 216, 230, 0.1)',
                                  transition: { duration: 0.2 }
                                }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <motion.div
                                  whileHover={{ 
                                    scale: 1.2,
                                    rotate: 360,
                                    transition: { duration: 0.5 }
                                  }}
                                >
                                  <CheckCircle2 className="w-4 h-4 md:w-4 md:h-4 text-add8e6 flex-shrink-0" />
                                </motion.div>
                                {item}
                              </motion.div>
                            ))}
                </div>
                        </div>
                      </motion.div>

                {/* Customer-Centric */}
                      <motion.div 
                        className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-add8e6/50 focus:ring-offset-2 overflow-hidden"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Glassmorphism effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50 dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50" />
                        
                        {/* Subtle pattern overlay */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>

                        <div className="flex flex-col h-full relative z-10">
                          <motion.div 
                            className="p-2 md:p-3 bg-add8e6/10 rounded-lg md:rounded-xl group-hover:scale-110 transition-transform duration-500 mb-6"
                            whileHover={{ 
                              scale: 1.15,
                              rotate: [0, -5, 5, 0],
                              transition: { duration: 0.5 }
                            }}
                          >
                            <Users className="h-7 w-7 md:h-8 md:w-8 text-add8e6" />
                          </motion.div>
                          
                          <motion.h3 
                            className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-add8e6 transition-colors"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            Customer-Centric
                          </motion.h3>
                          
                          <motion.p 
                            className="text-sm md:text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-6"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                    We prioritize our clients' needs and satisfaction in everything we do, building lasting relationships through exceptional service.
                          </motion.p>

                          <div className="space-y-2 md:space-y-3">
                            {[
                              "24/7 customer support",
                              "Customized solutions",
                              "Regular feedback system"
                            ].map((item, i) => (
                              <motion.div 
                                key={i} 
                                className="flex items-center gap-2 text-sm md:text-sm text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-700/30 rounded-lg p-2 backdrop-blur-sm"
                                whileHover={{ 
                                  x: 4,
                                  scale: 1.02,
                                  backgroundColor: 'rgba(173, 216, 230, 0.1)',
                                  transition: { duration: 0.2 }
                                }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <motion.div
                                  whileHover={{ 
                                    scale: 1.2,
                                    rotate: 360,
                                    transition: { duration: 0.5 }
                                  }}
                                >
                                  <CheckCircle2 className="w-4 h-4 md:w-4 md:h-4 text-add8e6 flex-shrink-0" />
                                </motion.div>
                                {item}
                              </motion.div>
                            ))}
                </div>
                        </div>
                      </motion.div>

                {/* Excellence */}
                      <motion.div 
                        className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-add8e6/50 focus:ring-offset-2 overflow-hidden"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Glassmorphism effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50 dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50" />
                        
                        {/* Subtle pattern overlay */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px]" />
                  </div>

                        <div className="flex flex-col h-full relative z-10">
                          <motion.div 
                            className="p-2 md:p-3 bg-add8e6/10 rounded-lg md:rounded-xl group-hover:scale-110 transition-transform duration-500 mb-6"
                            whileHover={{ 
                              scale: 1.15,
                              rotate: [0, -5, 5, 0],
                              transition: { duration: 0.5 }
                            }}
                          >
                            <Award className="h-7 w-7 md:h-8 md:w-8 text-add8e6" />
                          </motion.div>
                          
                          <motion.h3 
                            className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-add8e6 transition-colors"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            Excellence
                          </motion.h3>
                          
                          <motion.p 
                            className="text-sm md:text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-6"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                    We strive for excellence in every cleaning task, no matter how small, setting new standards in the industry.
                          </motion.p>

                          <div className="space-y-2 md:space-y-3">
                            {[
                              "Quality control measures",
                              "Continuous improvement",
                              "Industry best practices"
                            ].map((item, i) => (
                              <motion.div 
                                key={i} 
                                className="flex items-center gap-2 text-sm md:text-sm text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-700/30 rounded-lg p-2 backdrop-blur-sm"
                                whileHover={{ 
                                  x: 4,
                                  scale: 1.02,
                                  backgroundColor: 'rgba(173, 216, 230, 0.1)',
                                  transition: { duration: 0.2 }
                                }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <motion.div
                                  whileHover={{ 
                                    scale: 1.2,
                                    rotate: 360,
                                    transition: { duration: 0.5 }
                                  }}
                                >
                                  <CheckCircle2 className="w-4 h-4 md:w-4 md:h-4 text-add8e6 flex-shrink-0" />
                                </motion.div>
                                {item}
                              </motion.div>
                            ))}
                </div>
                        </div>
                      </motion.div>
                    </>
                  )}
              </div>

                {/* Mobile Navigation */}
                <div className="flex flex-col items-center gap-4 mt-8 md:hidden">
                  {/* Mobile Pagination Dots */}
                  <div className="flex items-center gap-3">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentPage(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          currentPage === index
                            ? 'bg-add8e6 w-6'
                            : 'bg-gray-300 dark:bg-gray-600 hover:bg-add8e6/50'
                        }`}
                        aria-label={`Go to value ${index + 1}`}
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
                      aria-label="Previous value"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    </motion.button>
                    
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {currentPage + 1} of 3
                    </span>

                    <motion.button
                      onClick={nextPage}
                      className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50 active:scale-95"
                      aria-label="Next value"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Company History */}
      <div className="relative py-16 md:py-24">
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
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-16">
                <motion.div 
                  className="inline-block mb-3 sm:mb-4 md:mb-6 mt-0 !mt-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm mt-0 !mt-0">
                    <Sparkles className="w-4 h-4" />
                  Our Journey
                </span>
                </motion.div>
                <motion.h2 
                  className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Our Growth{" "}
                  <motion.span 
                    className="text-add8e6 relative inline-block"
                    style={{
                      textShadow: "0 2px 4px rgba(173,216,230,0.3)",
                      WebkitTextStroke: "0.5px rgba(173,216,230,0.3)"
                    }}
                  >
                    Story
                    <motion.span 
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                  </motion.span>
                </motion.h2>
                <motion.p 
                  className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  From our founding to becoming a leading cleaning service provider, each milestone represents our commitment to excellence and innovation in the industry.
                </motion.p>
              </div>

              {/* Timeline Container */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-add8e6/20 dark:bg-add8e6/30 hidden md:block" />

              <div className="space-y-6 md:space-y-8">
                  {/* 2015 */}
                  <motion.div 
                    className="relative pl-6 md:pl-8 pb-6 md:pb-8 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                  <div className="absolute left-0 top-0 w-0.5 h-full bg-add8e6/20 group-hover:bg-add8e6 transition-colors duration-300" />
                    <motion.div 
                      className="absolute w-4 h-4 md:w-6 md:h-6 bg-add8e6 rounded-full -left-[7px] md:-left-[11px] top-0 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <motion.span 
                          className="text-add8e6 font-bold text-base md:text-lg"
                          whileHover={{ scale: 1.1 }}
                        >
                          2015
                        </motion.span>
                        <motion.h3 
                          className="text-lg md:text-xl font-bold text-gray-800 dark:text-white"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          The Beginning
                        </motion.h3>
                    </div>
                      <motion.p 
                        className="text-sm md:text-base text-gray-600 dark:text-gray-300"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        Established in Nairobi with a team of 15 professionals, we secured our first major contract with 20 residential clients and 5 commercial properties. Our initial service portfolio included residential cleaning, office maintenance, and specialized cleaning solutions.
                      </motion.p>
                      <motion.div 
                        className="mt-3 md:mt-4 flex items-center gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-400"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                      <span className="w-1.5 h-1.5 bg-add8e6 rounded-full"></span>
                        <span>25+ initial clients</span>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* 2017 */}
                  <motion.div 
                    className="relative pl-6 md:pl-8 pb-6 md:pb-8 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                  <div className="absolute left-0 top-0 w-0.5 h-full bg-add8e6/20 group-hover:bg-add8e6 transition-colors duration-300" />
                    <motion.div 
                      className="absolute w-4 h-4 md:w-6 md:h-6 bg-add8e6 rounded-full -left-[7px] md:-left-[11px] top-0 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <motion.span 
                          className="text-add8e6 font-bold text-base md:text-lg"
                          whileHover={{ scale: 1.1 }}
                        >
                          2017
                        </motion.span>
                        <motion.h3 
                          className="text-lg md:text-xl font-bold text-gray-800 dark:text-white"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          Strategic Expansion
                        </motion.h3>
            </div>
                      <motion.p 
                        className="text-sm md:text-base text-gray-600 dark:text-gray-300"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        Expanded operations to Mombasa and Eldoret, serving 50+ commercial clients across healthcare, hospitality, and corporate sectors. Achieved ISO 9001:2015 certification and implemented advanced cleaning protocols.
                      </motion.p>
                      <motion.div 
                        className="mt-3 md:mt-4 flex items-center gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-400"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                      <span className="w-1.5 h-1.5 bg-add8e6 rounded-full"></span>
                        <span>ISO 9001:2015 Certified</span>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* 2020 */}
                  <motion.div 
                    className="relative pl-6 md:pl-8 pb-6 md:pb-8 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                  <div className="absolute left-0 top-0 w-0.5 h-full bg-add8e6/20 group-hover:bg-add8e6 transition-colors duration-300" />
                    <motion.div 
                      className="absolute w-4 h-4 md:w-6 md:h-6 bg-add8e6 rounded-full -left-[7px] md:-left-[11px] top-0 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <motion.span 
                          className="text-add8e6 font-bold text-base md:text-lg"
                          whileHover={{ scale: 1.1 }}
                        >
                          2020
                        </motion.span>
                        <motion.h3 
                          className="text-lg md:text-xl font-bold text-gray-800 dark:text-white"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          Innovation & Sustainability
                        </motion.h3>
            </div>
                      <motion.p 
                        className="text-sm md:text-base text-gray-600 dark:text-gray-300"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        Launched eco-friendly cleaning solutions with Green Seal certification. Introduced IoT-enabled cleaning equipment and digital quality monitoring systems, achieving 98% client satisfaction rate.
                      </motion.p>
                      <motion.div 
                        className="mt-3 md:mt-4 flex items-center gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-400"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                      <span className="w-1.5 h-1.5 bg-add8e6 rounded-full"></span>
                        <span>Green Seal Certified</span>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* 2023 */}
                  <motion.div 
                    className="relative pl-6 md:pl-8 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                  <div className="absolute left-0 top-0 w-0.5 h-full bg-add8e6/20 group-hover:bg-add8e6 transition-colors duration-300" />
                    <motion.div 
                      className="absolute w-4 h-4 md:w-6 md:h-6 bg-add8e6 rounded-full -left-[7px] md:-left-[11px] top-0 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <motion.span 
                          className="text-add8e6 font-bold text-base md:text-lg"
                          whileHover={{ scale: 1.1 }}
                        >
                          2023
                        </motion.span>
                        <motion.h3 
                          className="text-lg md:text-xl font-bold text-gray-800 dark:text-white"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          Industry Leadership
                        </motion.h3>
            </div>
                      <motion.p 
                        className="text-sm md:text-base text-gray-600 dark:text-gray-300"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        Leading cleaning service provider in Kenya with 100+ trained professionals, serving 200+ clients across 6 major cities. Recognized as the "Best Cleaning Service Provider 2023" by the Kenya Business Awards.
                      </motion.p>
                      <motion.div 
                        className="mt-3 md:mt-4 flex items-center gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-400"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                      <span className="w-1.5 h-1.5 bg-add8e6 rounded-full"></span>
                        <span>Best Cleaning Service Provider 2023</span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* National Footprint */}
      <div className="relative py-16 md:py-24">
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
          <ScrollAnimation>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 md:mb-16">
                <motion.div 
                  className="inline-block mb-3 sm:mb-4 md:mb-6 mt-0 !mt-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm mt-0 !mt-0">
                    <MapPin className="w-4 h-4" />
                  Our Coverage
                </span>
                </motion.div>
                <motion.h2 
                  className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Our National{" "}
                  <motion.span 
                    className="text-add8e6 relative inline-block"
                    style={{
                      textShadow: "0 2px 4px rgba(173,216,230,0.3)",
                      WebkitTextStroke: "0.5px rgba(173,216,230,0.3)"
                    }}
                  >
                    Footprint
                    <motion.span 
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                  </motion.span>
                </motion.h2>
                <motion.p 
                  className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Delivering consistent, high-quality cleaning services across Kenya's major cities, ensuring the same level of excellence and attention to detail regardless of location.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <motion.div 
                  className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl group"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            <Image
              src="/service-location.png?height=800&width=600"
              alt="Map of Kenya showing Simca Cleaning locations"
              fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
            />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20">
                    <motion.div 
                      className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 md:p-4 rounded-xl"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        Same high standards, local expertise, nationwide coverage
                      </p>
                    </motion.div>
                    </div>
                </motion.div>

                <div className="space-y-6 md:space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <motion.div 
                      className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-add8e6/5 via-transparent to-add8e6/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                          <motion.div 
                            className="bg-add8e6/10 p-1.5 md:p-2 rounded-lg group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                          <MapPin className="h-4 w-4 md:h-5 md:w-5 text-add8e6" />
                          </motion.div>
                          <h3 className="font-semibold text-sm md:text-base text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">Nairobi</h3>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Serving 100+ corporate clients with specialized cleaning solutions and 24/7 support</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-add8e6/5 via-transparent to-add8e6/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                          <motion.div 
                            className="bg-add8e6/10 p-1.5 md:p-2 rounded-lg group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                          <MapPin className="h-4 w-4 md:h-5 md:w-5 text-add8e6" />
                          </motion.div>
                          <h3 className="font-semibold text-sm md:text-base text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">Mombasa</h3>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Specialized hospitality and marine facility cleaning services</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-add8e6/5 via-transparent to-add8e6/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                          <motion.div 
                            className="bg-add8e6/10 p-1.5 md:p-2 rounded-lg group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                          <MapPin className="h-4 w-4 md:h-5 md:w-5 text-add8e6" />
                          </motion.div>
                          <h3 className="font-semibold text-sm md:text-base text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">Kaimosi</h3>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Leading provider of educational and healthcare facility cleaning</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-add8e6/5 via-transparent to-add8e6/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                          <motion.div 
                            className="bg-add8e6/10 p-1.5 md:p-2 rounded-lg group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                          <MapPin className="h-4 w-4 md:h-5 md:w-5 text-add8e6" />
                          </motion.div>
                          <h3 className="font-semibold text-sm md:text-base text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">Eldoret</h3>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Specialized sports and industrial facility cleaning expertise</p>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div 
                    className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-add8e6/5 via-transparent to-add8e6/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                    <div className="flex items-center gap-4">
                        <motion.div 
                          className="bg-add8e6/10 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                        <MapPin className="h-6 w-6 text-add8e6" />
                        </motion.div>
          <div>
                          <h3 className="font-semibold text-gray-800 dark:text-white mb-1 group-hover:text-add8e6 transition-colors">Expanding Nationwide</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Committed to expanding our reach to 10 major cities by 2025, bringing our proven cleaning excellence to more communities across Kenya.
                        </p>
              </div>
              </div>
              </div>
                  </motion.div>
              </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* CEO Message */}
      <div className="relative py-16 md:py-24">
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
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-16">
                <motion.div 
                  className="inline-block mb-3 sm:mb-4 md:mb-6 mt-0 !mt-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm mt-0 !mt-0">
                    <Sparkles className="w-4 h-4" />
                  Leadership
                </span>
                </motion.div>
                <motion.h2 
                  className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  A Message from Our{" "}
                  <motion.span 
                    className="text-add8e6 relative inline-block"
                    style={{
                      textShadow: "0 2px 4px rgba(173,216,230,0.3)",
                      WebkitTextStroke: "0.5px rgba(173,216,230,0.3)"
                    }}
                  >
                    CEO
                    <motion.span 
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                  </motion.span>
                </motion.h2>
              </div>

              <motion.div 
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-12">
                  {/* CEO Image */}
                  <motion.div 
                    className="relative h-full min-h-[300px] md:min-h-[500px] rounded-xl overflow-hidden group"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(173,216,230,0.1),transparent_70%)] animate-pulse" />
              <Image
                      src="/ceo.jpg?height=800&width=600"
                      alt="David Simwa - Founder & CEO of Simca Cleaning"
                fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
              />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20">
                      <motion.div 
                        className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 md:p-4 rounded-xl shadow-lg"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="font-semibold text-sm md:text-base text-gray-800 dark:text-white">David Simwa</p>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Founder & CEO</p>
                      </motion.div>
                      </div>
                  </motion.div>

                  {/* Message Content */}
                  <div className="flex flex-col justify-center h-full">
                    <motion.blockquote 
                      className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-add8e6/20 rounded-full" />
                      <div className="pl-4">
                        With over a decade of experience in the cleaning industry, I've witnessed firsthand how exceptional cleaning services can transform spaces and enhance lives. At Simca Cleaning, we've built our reputation on three core principles: innovation in cleaning solutions, unwavering commitment to quality, and personalized service excellence. Our ISO 9001:2015 certification and 98% client satisfaction rate reflect our dedication to setting new standards in the industry. As we expand across Kenya, we remain committed to delivering the same level of excellence that has earned us the "Best Cleaning Service Provider 2023" award.
                      </div>
                    </motion.blockquote>

                    <div className="space-y-4 md:space-y-6">
                      <motion.div 
                        className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-add8e6/5 via-transparent to-add8e6/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative z-10 flex items-start gap-4">
                          <motion.div 
                            className="bg-add8e6/10 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                          <Award className="h-5 w-5 text-add8e6" />
                          </motion.div>
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-white mb-1 group-hover:text-add8e6 transition-colors">Industry Leadership</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">ISO 9001:2015 certified with 98% client satisfaction rate</p>
                        </div>
                      </div>
                      </motion.div>

                      <motion.div 
                        className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-add8e6/5 via-transparent to-add8e6/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative z-10 flex items-start gap-4">
                          <motion.div 
                            className="bg-add8e6/10 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                          <Sparkles className="h-5 w-5 text-add8e6" />
                          </motion.div>
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-white mb-1 group-hover:text-add8e6 transition-colors">Innovation Focus</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Pioneering eco-friendly solutions with Green Seal certification</p>
                        </div>
                      </div>
                      </motion.div>

                      <motion.div 
                        className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-add8e6/5 via-transparent to-add8e6/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative z-10 flex items-start gap-4">
                          <motion.div 
                            className="bg-add8e6/10 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                          <Users className="h-5 w-5 text-add8e6" />
                          </motion.div>
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-white mb-1 group-hover:text-add8e6 transition-colors">Customer-Centric Approach</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Serving 200+ clients with 24/7 support and customized solutions</p>
                        </div>
                      </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
          </div>
          </ScrollAnimation>
        </div>
      </div>
      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />
    </div>
  )
}
