"use client"

import Link from "next/link"
import { Home, Building2, HardHat, SprayCanIcon as Spray, ShieldCheck, Sofa, ArrowRight, CheckCircle2, Star, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import React from "react"

export default function ServicesOverview() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("all")
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

  // Reset current page when changing categories
  useEffect(() => {
    setCurrentPage(0)
  }, [activeTab])

  const services = [
    {
      title: "Residential Cleaning",
      description: "Comprehensive cleaning services tailored to your schedule and preferences",
      icon: <Home className="h-8 w-8 md:h-10 md:w-10 text-add8e6" />,
      link: "/services#residential",
      features: ["Customized cleaning plans", "Flexible scheduling options", "Eco-friendly cleaning products", "Satisfaction guaranteed"],
      category: "residential",
      rating: 4.9,
      reviews: 128,
      availability: "Available 7 days a week"
    },
    {
      title: "Commercial Cleaning",
      description: "Professional cleaning solutions designed to minimize business disruption",
      icon: <Building2 className="h-8 w-8 md:h-10 md:w-10 text-add8e6" />,
      link: "/services#commercial",
      features: ["After-hours cleaning options", "Customized service frequency", "Specialized equipment", "Certified cleaning staff"],
      category: "commercial",
      rating: 4.8,
      reviews: 95,
      availability: "Available 24/7 for emergency services"
    },
    {
      title: "Post-construction Cleaning",
      description: "Expert cleaning after building or renovation projects using specialized equipment",
      icon: <HardHat className="h-8 w-8 md:h-10 md:w-10 text-add8e6" />,
      link: "/services#construction",
      features: ["Construction debris removal", "Fine dust elimination", "Surface protection", "Final inspection guarantee"],
      category: "specialized",
      rating: 4.9,
      reviews: 76,
      availability: "Certified construction cleaning specialists"
    },
    {
      title: "Carpet & Upholstery",
      description: "Advanced cleaning solutions for carpets, rugs, and upholstered furniture",
      icon: <Sofa className="h-8 w-8 md:h-10 md:w-10 text-add8e6" />,
      link: "/services#carpet",
      features: ["Advanced stain removal technology", "Eco-friendly cleaning solutions", "Odor elimination", "Fabric protection treatment"],
      category: "specialized",
      rating: 4.7,
      reviews: 112,
      availability: "Satisfaction guaranteed or we'll reclean"
    },
    {
      title: "Sanitization",
      description: "Hospital-grade sanitization and disinfection services",
      icon: <Spray className="h-8 w-8 md:h-10 md:w-10 text-add8e6" />,
      link: "/services#sanitization",
      features: ["EPA-approved disinfectants", "Certified sanitization protocols", "Air quality improvement", "High-touch point focus"],
      category: "specialized",
      rating: 4.9,
      reviews: 89,
      availability: "Certified sanitization specialists"
    },
    {
      title: "Specialized Cleaning",
      description: "Custom cleaning solutions for specific industry requirements",
      icon: <ShieldCheck className="h-8 w-8 md:h-10 md:w-10 text-add8e6" />,
      link: "/services#specialized",
      features: ["Industry-specific expertise", "Custom cleaning protocols", "Specialized equipment", "Quality assurance checks"],
      category: "specialized",
      rating: 4.8,
      reviews: 64,
      availability: "Tailored to your industry standards"
    },
  ]

  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(service => service.category === activeTab)

  // Calculate total pages based on screen size and filtered services
  const cardsPerPage = isMobile ? 1 : 3
  const totalPages = Math.ceil(filteredServices.length / cardsPerPage)

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
    return filteredServices.slice(start, start + cardsPerPage)
  }

  const categories = [
    { id: "all", label: "All Services", icon: <Sparkles className="w-4 h-4" />, description: "Complete range of professional cleaning solutions" },
    { id: "residential", label: "Residential", icon: <Home className="w-4 h-4" />, description: "Personalized home cleaning solutions" },
    { id: "commercial", label: "Commercial", icon: <Building2 className="w-4 h-4" />, description: "Business-focused cleaning services" },
    { id: "specialized", label: "Premium Services", icon: <ShieldCheck className="w-4 h-4" />, description: "Advanced cleaning for special requirements" },
  ]

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
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 mt-0">
          <motion.div 
            className="inline-block mb-3 sm:mb-4 md:mb-6 mt-0 !mt-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm mt-0 !mt-0">
              <CheckCircle2 className="w-4 h-4" />
              Trusted by 500+ clients since 2015
            </span>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight tracking-wide mt-0 !mt-0"
            
          >
            Professional Cleaning{" "}
            <motion.span 
              className="text-add8e6 relative inline-block tracking-wider"
              style={{
                textShadow: "0 2px 4px rgba(173,216,230,0.3)",
                WebkitTextStroke: "0.5px rgba(173,216,230,0.3)"
              }}
            >
              Services
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
            Experience excellence in cleaning with our award-winning services and industry-leading standards
          </motion.p>
        </div>

        {/* Category Tabs */}
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

        {/* Category Descriptions */}
        <div className="text-center mb-8 md:mb-12">
          <motion.p 
            className="text-sm md:text-base text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {categories.find(c => c.id === activeTab)?.description}
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons - Hidden on mobile */}
          <motion.button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-add8e6/50 hidden md:block"
            aria-label="Previous services"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </motion.button>

          <motion.button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-add8e6/50 hidden md:block"
            aria-label="Next services"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </motion.button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: isMobile ? 100 : 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isMobile ? -100 : 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10"
              >
                {getCurrentCards().map((service, index) => (
                  <Link
                    key={index}
                    href={service.link}
                    className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-add8e6/50 focus:ring-offset-2 overflow-hidden"
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    {/* Glassmorphism effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50 dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50" />
                    
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px]" />
                    </div>

                    <div className="flex flex-col h-full relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <motion.div 
                          className="p-2 md:p-3 bg-add8e6/10 rounded-lg md:rounded-xl group-hover:scale-110 transition-transform duration-500"
                          whileHover={{ 
                            scale: 1.15,
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.5 }
                          }}
                        >
                          {/* Icon size to match new client card mobile */}
                          {React.cloneElement(service.icon, { className: 'h-7 w-7 md:h-8 md:w-8 text-add8e6' })}
                        </motion.div>
                      </div>
                      
                      <motion.h3 
                        className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-add8e6 transition-colors"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {service.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-sm md:text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-6"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {service.description}
                      </motion.p>

                      {/* Features list */}
                      <div className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                        {service.features.map((feature, i) => (
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
                            {feature}
                          </motion.div>
                        ))}
                      </div>

                      {/* Availability */}
                      <motion.div 
                        className="mt-auto pt-3 md:pt-4 border-t border-gray-100 dark:border-gray-700"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex flex-col gap-2">
                          <motion.span 
                            className="text-add8e6 font-medium group-hover:underline flex items-center gap-1 md:gap-2 text-sm md:text-sm"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            Learn more
                            <motion.div
                              whileHover={{ 
                                x: 4,
                                transition: { duration: 0.2 }
                              }}
                            >
                              <ArrowRight className="w-4 h-4 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </motion.div>
                          </motion.span>
                          <motion.span 
                            className="text-sm md:text-sm text-gray-500 dark:text-gray-400"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            {service.availability}
                          </motion.span>
                        </div>
                      </motion.div>
                    </div>
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Navigation */}
          <div className="flex flex-col items-center gap-4 mt-8 md:hidden">
            {/* Mobile Pagination Dots */}
            <div className="flex items-center gap-3">
              {Array.from({ length: filteredServices.length }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentPage === index
                      ? 'bg-add8e6 w-6'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-add8e6/50'
                  }`}
                  aria-label={`Go to service ${index + 1}`}
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
                aria-label="Previous service"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </motion.button>
              
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {currentPage + 1} of {filteredServices.length}
              </span>

              <motion.button
                onClick={nextPage}
                className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50 active:scale-95"
                aria-label="Next service"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </motion.button>
            </div>
          </div>

          {/* Desktop Navigation */}
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

        <div className="text-center mt-12 md:mt-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-add8e6 to-add8e6/80 text-white px-8 py-4 rounded-xl font-medium hover:from-add8e6/90 hover:to-add8e6/70 transition-all duration-300 hover:shadow-lg hover:shadow-add8e6/20 hover:scale-105 transform group text-center text-sm sm:text-base relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View All Services
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Add these animations to your global CSS file
const styles = `
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.8; }
}

@keyframes pulse-delayed {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

@keyframes pulse-delayed-2 {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.5; }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 7s ease-in-out infinite;
}

.animate-pulse {
  animation: pulse 4s ease-in-out infinite;
}

.animate-pulse-delayed {
  animation: pulse-delayed 5s ease-in-out infinite;
}

.animate-pulse-delayed-2 {
  animation: pulse-delayed-2 6s ease-in-out infinite;
}
`
