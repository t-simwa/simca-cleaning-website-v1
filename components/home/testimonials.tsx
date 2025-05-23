"use client"

import Image from "next/image"
import { Star, ArrowRight, Sparkles, TrendingUp, CheckCircle2, Home, Building2, Factory, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function Testimonials() {
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState("all")
  const [currentPage, setCurrentPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const categories = [
    { id: "all", label: "All Reviews", icon: <Sparkles className="w-4 h-4" /> },
    { id: "residential", label: "Residential", icon: <Home className="w-4 h-4" /> },
    { id: "commercial", label: "Commercial", icon: <Building2 className="w-4 h-4" /> },
    { id: "industrial", label: "Industrial", icon: <Factory className="w-4 h-4" /> },
  ]

  const testimonials = [
    {
      name: "Jane Mwangi",
      role: "Homeowner, Nairobi",
      image: "/jane-mwangi.jpg?height=200&width=200",
      quote:
        "After struggling with allergies for months, Simca's deep cleaning service eliminated all dust and allergens. Their team's attention to detail in cleaning our air ducts and carpets made a noticeable difference in our family's health.",
      category: "residential",
      highlights: ["Allergen Reduction", "Air Duct Cleaning"],
      location: "Nairobi",
      response: "Thank you for sharing your experience, Jane! We're thrilled to have helped improve your family's health through our specialized cleaning services.",
    },
    {
      name: "David Ochieng",
      role: "Office Manager, Mombasa",
      image: "/david-ochieng.jpg?height=200&width=200",
      quote:
        "When our office needed emergency cleaning after a water damage incident, Simca's team arrived within 30 minutes. Their quick response and professional handling of the situation prevented further damage.",
      category: "commercial",
      highlights: ["Emergency Response", "24/7 Service"],
      location: "Mombasa",
      response: "We appreciate your trust in our emergency services, David! Our rapid response team is always ready to handle such situations.",
    },
    {
      name: "Sarah Njoroge",
      role: "Property Manager, Eldoret",
      image: "/sarah-njoroge.jpg?height=200&width=200",
      quote:
        "Managing 15 properties requires reliable partners, and Simca Cleaning has proven to be just that. Their specialized post-construction cleaning service transformed our newly renovated apartments.",
      category: "industrial",
      highlights: ["Post-Construction", "Eco-Friendly"],
      location: "Eldoret",
      response: "Thank you for your continued trust, Sarah! We're committed to maintaining our high standards across all your properties.",
    },
  ]

  const filteredTestimonials = activeCategory === "all" 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === activeCategory)

  // Calculate total pages based on screen size
  const cardsPerPage = isMobile ? 1 : 3
  const totalPages = Math.ceil(filteredTestimonials.length / cardsPerPage)

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
    return filteredTestimonials.slice(start, start + cardsPerPage)
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-add8e6/10 text-add8e6 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm font-medium mb-4 md:mb-6">
            <Sparkles className="w-4 h-4" />
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight tracking-wide">
            What Our Clients{" "}
            <span className="text-add8e6 relative inline-block">
              Say
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-add8e6/30 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 tracking-wide">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </motion.div>

        {/* Category Tabs with enhanced interaction */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center gap-2 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
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
          {/* Navigation Buttons - Hidden on mobile */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-add8e6/50 hidden md:block"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-300" />
          </button>

          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-add8e6/50 hidden md:block"
            aria-label="Next testimonials"
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
                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8"
              >
                {getCurrentCards().map((testimonial, index) => (
                  <motion.div
                    key={`${currentPage}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1"
                    onMouseEnter={() => setHoveredTestimonial(index)}
                    onMouseLeave={() => setHoveredTestimonial(null)}
                  >
                    <div className="flex flex-col h-full">
                      {/* Quote with enhanced typography */}
                      <div className="mb-6">
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-serif italic leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                      </div>

                      {/* Highlights with limited items */}
                      <div className="flex flex-wrap gap-1.5 md:gap-2 mb-6">
                        {testimonial.highlights.slice(0, 3).map((highlight, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs font-medium bg-add8e6/10 text-add8e6"
                          >
                            <CheckCircle2 className="w-3 h-3" />
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* Author Info with enhanced separation */}
                      <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden ring-2 ring-add8e6/20">
                              <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="text-sm md:text-base font-medium text-gray-800 dark:text-white">{testimonial.name}</h4>
                              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Navigation */}
          <div className="flex flex-col items-center gap-4 mt-8 md:hidden">
            {/* Mobile Pagination Dots */}
            <div className="flex items-center gap-3">
              {Array.from({ length: filteredTestimonials.length }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentPage === index
                      ? 'bg-add8e6 w-6'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-add8e6/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
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
                aria-label="Previous testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </motion.button>
              
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {currentPage + 1} of {filteredTestimonials.length}
              </span>

              <motion.button
                onClick={nextPage}
                className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50 active:scale-95"
                aria-label="Next testimonial"
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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 transform group text-center text-sm sm:text-base"
          >
            View All Testimonials
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
