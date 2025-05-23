"use client"

import { Shield, Clock, Award, Users, CheckCircle2, ArrowRight, Sparkles, TrendingUp, Star, ChevronLeft, ChevronRight, Droplet, Settings, Leaf, Brush } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

export default function WhyChooseUs() {
  const [hoveredReason, setHoveredReason] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("all")
  const [currentPage, setCurrentPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])

  // Handle window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Reset current page when changing categories
  useEffect(() => {
    setCurrentPage(0)
  }, [activeTab])

  const categories = [
    { id: "all", label: "All Benefits", icon: <Sparkles className="w-4 h-4" /> },
    { id: "quality", label: "Quality", icon: <Award className="w-4 h-4" /> },
    { id: "service", label: "Service", icon: <Clock className="w-4 h-4" /> },
    { id: "safety", label: "Safety & Sustainability", icon: <Leaf className="w-4 h-4" /> },
    { id: "customization", label: "Customization", icon: <Settings className="w-4 h-4" /> },
    { id: "technology", label: "Technology", icon: <TrendingUp className="w-4 h-4" /> },
  ]

  const reasons = [
    {
      title: "Experienced Professionals",
      description: "Our team of certified cleaning specialists brings years of industry expertise and continuous training to deliver exceptional results.",
      icon: <Users className="h-10 w-10 text-add8e6" />,
      features: ["10+ Years Experience", "5000+ Properties Cleaned", "Industry Certifications", "Continuous Training"],
      highlight: "Expert Team",
      link: "/about#team",
      category: "quality"
    },
    {
      title: "Reliable Service",
      description: "Count on our 24/7 emergency cleaning services with flexible scheduling and real-time tracking for complete peace of mind.",
      icon: <Clock className="h-10 w-10 text-add8e6" />,
      features: ["24/7 Emergency Service", "Flexible Scheduling", "Real-time Tracking", "Dedicated Managers"],
      highlight: "Always Available",
      link: "/contact",
      category: "service"
    },
    {
      title: "Quality Guaranteed",
      description: "Experience our 100% satisfaction guarantee with free re-cleaning and comprehensive quality inspection protocols.",
      icon: <Award className="h-10 w-10 text-add8e6" />,
      features: ["100% Satisfaction", "Free Re-cleaning", "Quality Inspection", "Regular Audits"],
      highlight: "Quality Assured",
      link: "/services#quality",
      category: "quality"
    },
    {
      title: "Safe & Eco-Friendly",
      description: "Trust our EPA-certified cleaning products and sustainable practices for a healthier, greener environment.",
      icon: <Shield className="h-10 w-10 text-add8e6" />,
      features: ["EPA-Certified Products", "Green Cleaning", "Allergen-Free", "Sustainable Practices"],
      highlight: "Environment First",
      link: "/about#sustainability",
      category: "safety"
    },
    {
      title: "Customized Solutions",
      description: "Enjoy personalized cleaning plans tailored to your specific needs and preferences for optimal results.",
      icon: <Sparkles className="h-10 w-10 text-add8e6" />,
      features: ["Personalized Plans", "Specialized Cleaning", "Custom Scheduling", "Tailored Products"],
      highlight: "Made for You",
      link: "/services#custom",
      category: "customization"
    },
    {
      title: "Advanced Technology",
      description: "Benefit from state-of-the-art cleaning equipment and digital solutions for superior results.",
      icon: <TrendingUp className="h-10 w-10 text-add8e6" />,
      features: ["Modern Equipment", "Digital Tracking", "Smart Scheduling", "Advanced Techniques"],
      highlight: "Tech-Driven",
      link: "/services#technology",
      category: "technology"
    },
  ]

  const filteredReasons = activeTab === "all" 
    ? reasons 
    : reasons.filter(reason => reason.category === activeTab)

  // Calculate total pages based on screen size
  const cardsPerPage = isMobile ? 1 : 2
  const totalPages = Math.ceil(filteredReasons.length / cardsPerPage)

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
    return filteredReasons.slice(start, start + cardsPerPage)
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
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          style={{ opacity, scale }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-add8e6/20 to-add8e6/10 text-add8e6 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm font-medium mb-4 md:mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Why Choose Simca Cleaning
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight tracking-wide">
            Transform Your Space with{" "}
            <span className="text-add8e6 relative inline-block">
              Premium Cleaning
              <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full" />
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 tracking-wide">
            Experience the Gold Standard in Professional Cleaning Services
          </p>
        </motion.div>

        {/* Enhanced Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`group flex items-center gap-2 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? "bg-gradient-to-r from-add8e6 to-add8e6/90 text-white shadow-lg shadow-add8e6/20"
                  : "bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 backdrop-blur-sm"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              {category.label}
            </motion.button>
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Enhanced Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
            <div className="relative -translate-x-16 pointer-events-auto">
              <motion.button
                onClick={prevPage}
                className="bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-add8e6/50 backdrop-blur-sm hidden md:block"
                aria-label="Previous benefits"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </motion.button>
            </div>
            <div className="relative translate-x-16 pointer-events-auto">
              <motion.button
                onClick={nextPage}
                className="bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-add8e6/50 backdrop-blur-sm hidden md:block"
                aria-label="Next benefits"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </motion.button>
            </div>
          </div>

          {/* Enhanced Carousel Container */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: isMobile ? 100 : 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isMobile ? -100 : 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
              >
                {getCurrentCards().map((reason, index) => (
                  <Link
                    key={index}
                    href={reason.link}
                    className="group bg-gradient-to-br from-white to-add8e6/5 dark:from-gray-800 dark:to-add8e6/10 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-sm"
                    onMouseEnter={() => setHoveredReason(index)}
                    onMouseLeave={() => setHoveredReason(null)}
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4 md:mb-6">
                        <div className="p-2 md:p-3 bg-gradient-to-br from-add8e6/20 to-add8e6/10 rounded-lg md:rounded-xl group-hover:scale-110 transition-transform duration-500">
                          {reason.icon}
                        </div>
                        <span className="text-xs md:text-sm font-medium text-add8e6 bg-add8e6/10 px-2 md:px-3 py-0.5 md:py-1 rounded-full">
                          {reason.highlight}
                        </span>
                      </div>
                      
                      <h3 className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-add8e6 transition-colors">
                        {reason.title}
                      </h3>
                      
                      <p className="text-sm md:text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-6">
                        {reason.description}
                      </p>

                      {/* Features list */}
                      <div className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                        {reason.features.map((feature, i) => (
                          <motion.div 
                            key={i} 
                            className="flex items-center gap-1.5 md:gap-2 text-sm md:text-sm text-gray-600 dark:text-gray-400"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-add8e6" />
                            {feature}
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-auto pt-3 md:pt-4 border-t border-gray-100 dark:border-gray-700">
                        <span className="text-xs md:text-sm text-add8e6 font-medium group-hover:underline flex items-center gap-1.5 md:gap-2">
                          Learn more
                          <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Mobile Navigation */}
          <div className="flex flex-col items-center gap-4 mt-8 md:hidden">
            {/* Enhanced Mobile Pagination Dots */}
            <div className="flex items-center gap-3">
              {Array.from({ length: filteredReasons.length }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentPage === index
                      ? 'bg-gradient-to-r from-add8e6 to-add8e6/80 w-6'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-add8e6/50'
                  }`}
                  aria-label={`Go to benefit ${index + 1}`}
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
                aria-label="Previous benefit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </motion.button>
              
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {currentPage + 1} of {filteredReasons.length}
              </span>

              <motion.button
                onClick={nextPage}
                className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50 active:scale-95"
                aria-label="Next benefit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </motion.button>
            </div>
          </div>

          {/* Enhanced Desktop Navigation Dots */}
          <div className="hidden md:flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  currentPage === index
                    ? 'bg-gradient-to-r from-add8e6 to-add8e6/80 w-4'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-add8e6/50'
                }`}
                aria-label={`Go to page ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Call-to-Action Section */}
        <div className="text-center mt-12 md:mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 group text-center text-sm sm:text-base"
              >
                Get Your Free Cleaning Assessment
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 text-add8e6 border border-add8e6 px-6 md:px-8 py-3 md:py-4 rounded-xl font-medium hover:bg-add8e6/10 transition-all duration-300 hover:shadow-lg group text-center text-sm sm:text-base backdrop-blur-sm"
              >
                Schedule Your First Clean
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
