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
        "Coming home used to mean sneezing fits, but since Simca started cleaning, it finally feels fresh and breathable. They listened to our concerns about allergies and now, our home is our sanctuary again. It's not just clean, it's a healthier, happier space for my family.",
      category: "residential",
      highlights: ["Healthier Home", "Allergy Relief"],
      location: "Nairobi",
      response: "Jane, stories like yours are why we do what we do! We're so happy your family is breathing easier and feeling healthier at home. Thank you for trusting us.",
    },
    {
      name: "David Ochieng",
      role: "Office Manager, Mombasa",
      image: "/david-ochieng.jpg?height=200&width=200",
      quote:
        "We had a minor flood and panic set in. I called Simca, and they were here in what felt like minutes. They handled everything with such calm and professionalism, turning a potential disaster into a minor hiccup. Their team is reliable, fast, and incredibly reassuring.",
      category: "commercial",
      highlights: ["Emergency Response", "Peace of Mind"],
      location: "Mombasa",
      response: "David, thank you for calling us. We're built for moments like these—it's our privilege to provide that peace of mind when you need it most.",
    },
    {
      name: "Amina Hussein",
      role: "Restaurant Owner, Nairobi",
      image: "/amina-hussein.jpg?height=200&width=200",
      quote:
        "In the restaurant business, clean isn't just about appearances—it's about health and safety. Simca gets that. Their team is meticulous, and I can always count on them to leave our kitchen and dining areas spotless. Our customers notice, and so do the health inspectors!",
      category: "commercial",
      highlights: ["Restaurant Cleaning", "Health & Safety"],
      location: "Nairobi",
      response: "Amina, we love being part of your success story! A clean restaurant is a safe restaurant, and we're proud to help you uphold that standard for your customers.",
    },
    {
      name: "Sarah Njoroge",
      role: "Property Manager, Eldoret",
      image: "/sarah-njoroge.jpg?height=200&width=200",
      quote:
        "Juggling multiple properties is tough, but Simca makes my job easier. Their post-construction cleaning is flawless, and they handle move-in/move-out cleans without a fuss. They're more than a vendor; they're a partner I can rely on. They just get it done right, every time.",
      category: "industrial",
      highlights: ["Reliable Partner", "Post-Construction"],
      location: "Eldoret",
      response: "Sarah, we truly value our partnership. Knowing you can count on us is the highest compliment. We look forward to many more projects together!",
    },
    {
      name: "Michael Kimani",
      role: "Factory Supervisor, Thika",
      image: "/michael-kimani.jpg?height=200&width=200",
      quote:
        "Our factory floor has never been safer or cleaner. Simca's industrial cleaning team understands the unique challenges we face, from machine grease to dust control. They work around our schedule and have made a huge difference in our workplace environment.",
      category: "industrial",
      highlights: ["Industrial Safety", "Flexible Scheduling"],
      location: "Thika",
      response: "Michael, creating a safe and clean environment for your team is crucial, and we're honored to be your chosen partner for it. Thank you for the trust you place in us.",
    },
    {
      name: "The Patel Family",
      role: "Kisumu",
      image: "/patel-family.jpg?height=200&width=200",
      quote:
        "We needed our carpets and upholstery deep-cleaned before a family celebration, and Simca did a phenomenal job. Stains we thought were permanent are gone! They were so careful with our furniture and the results were just stunning. Our home felt brand new.",
      category: "residential",
      highlights: ["Upholstery Care", "Stain Removal"],
      location: "Kisumu",
      response: "We're so glad we could help you get ready for your celebration! It's a joy to bring new life to treasured furniture and make your home feel special.",
    }
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
    <section className="relative py-12 md:py-20">
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
          <div className="inline-flex items-center gap-2 bg-add8e6/10 text-add8e6 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs font-medium mb-6 md:mb-6">
            <Sparkles className="w-4 h-4" />
            Client Testimonials
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-6 md:mb-6 leading-tight tracking-wide">
            You're in Good{" "}
            <span className="text-add8e6 relative inline-block">
              Company
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-add8e6/30 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </span>
          </h2>
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 tracking-wide">
            Our clients trust us to care for their spaces. Here's what they have to say about the Simca difference.
          </p>
        </motion.div>

        {/* Category Tabs with enhanced interaction */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center gap-2 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs font-medium transition-all duration-300 ${
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

        <div className="relative max-w-7xl mx-auto">
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
                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
              >
                {getCurrentCards().map((testimonial, index) => (
                  <motion.div
                    key={`${currentPage}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ring-1 ring-inset ring-gray-900/10"
                    onMouseEnter={() => setHoveredTestimonial(index)}
                    onMouseLeave={() => setHoveredTestimonial(null)}
                  >
                    <div className="flex flex-col h-full flex-grow">
                      {/* Quote with enhanced typography */}
                      <div className="mb-6">
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-serif italic leading-relaxed">
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
                              <h4 className="text-xs md:text-sm font-medium text-gray-800 dark:text-white">{testimonial.name}</h4>
                              <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
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
              
              <span className="text-xs text-gray-600 dark:text-gray-400">
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
      </div>
    </section>
  )
}
