"use client"

import Link from "next/link"
import { Home, Building2, HardHat, SprayCanIcon as Spray, ShieldCheck, Sofa, ArrowRight, CheckCircle2, Star, ChevronLeft, ChevronRight, Sparkles, Sun, Car, Bed, Trash2, Container, Droplets, LucideProps } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import React from "react"
import Image from "next/image"

// Update the service type to include image
type Service = {
  title: string
  description: string
  icon: React.ComponentType<LucideProps>
  link: string
  features: string[]
  category: string
  rating: number
  reviews: number
  availability: string
  image: string // Add image path
}

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

  const services: Service[] = [
    {
      title: "Residential Cleaning",
      description: "Enjoy a sparkling home, your way. We tailor every clean to your schedule and preferences, using safe, eco-friendly products. No contracts—just reliable, flexible service and a healthier home for your family.",
      icon: Home,
      link: "/services/residential",
      image: "/images/services/residential-cleaning.jpg",
      features: [
        "We clean your home your way—just tell us your priorities.",
        "Book or cancel anytime, no contracts or hidden fees.",
        "We use safe, eco-friendly products for your family's health.",
        "If you're not satisfied, we'll come back and make it right—guaranteed."
      ],
      category: "residential",
      rating: 4.9,
      reviews: 128,
      availability: "Available 7 days a week"
    },
    {
      title: "Commercial Cleaning",
      description: "Keep your business spotless and productive. We work around your hours to minimize disruption, with trained staff and custom plans for offices, shops, schools, and more. Affordable rates, no long-term contracts, and a cleaner, safer workplace.",
      icon: Building2,
      link: "/services/commercial",
      image: "/images/services/commercial-cleaning.jpg",
      features: [
        "We clean after-hours or weekends to fit your business schedule.",
        "Custom cleaning plans for your unique workspace needs.",
        "Fully insured, vetted staff for your peace of mind.",
        "No long-term contracts—flexible, affordable service."
      ],
      category: "commercial",
      rating: 4.8,
      reviews: 95,
      availability: "Available 24/7 for emergencies"
    },
    {
      title: "Post-construction Cleaning",
      description: "Move in faster with our expert post-construction cleaning. We remove dust, debris, and builder's mess—leaving your new space fresh, safe, and ready to use. Fast, thorough, and satisfaction guaranteed.",
      icon: HardHat,
      link: "/services/post-construction",
      image: "/images/services/post-construction-cleaning.jpg",
      features: [
        "We remove all dust and debris, so you can move in faster.",
        "We protect your new surfaces from scratches and stains.",
        "Every job ends with a final inspection for your peace of mind.",
        "Book cleaning when it suits your project—no rigid schedules."
      ],
      category: "specialized",
      rating: 4.9,
      reviews: 76,
      availability: "Certified construction cleaning specialists"
    },
    {
      title: "Carpet & Upholstery",
      description: "Breathe new life into your carpets and furniture. We use advanced stain removal and gentle, deep-cleaning methods to protect your fabrics and leave everything fresh, clean, and safe for your family or staff.",
      icon: Sofa,
      link: "/services/carpet-upholstery",
      image: "/images/services/carpet-upholstery.jpg",
      features: [
        "We always start with a deep vacuum before stain removal.",
        "Gentle, eco-friendly cleaning for all fabrics and fibers.",
        "Quick drying—your space is ready to use in hours, not days.",
        "If you're not happy, we'll reclean for free—guaranteed."
      ],
      category: "specialized",
      rating: 4.7,
      reviews: 112,
      availability: "Satisfaction guaranteed or we'll reclean"
    },
    {
      title: "Sanitization",
      description: "Protect your space with hospital-grade sanitization. Our certified team uses EPA-approved products and proven protocols to eliminate germs and viruses—ideal for homes, offices, and high-traffic areas.",
      icon: Spray,
      link: "/services/sanitization-disinfection",
      image: "/images/services/sanitization.jpg",
      features: [
        "We use EPA-approved disinfectants for your safety.",
        "Certified protocols to eliminate germs and viruses.",
        "Focus on high-touch points for maximum protection.",
        "Flexible scheduling—book when you need us most."
      ],
      category: "specialized",
      rating: 4.9,
      reviews: 89,
      availability: "Certified sanitization specialists"
    },
    {
      title: "Specialized Cleaning",
      description: "Have unique cleaning needs? We offer custom solutions for every industry—banks, hotels, healthcare, and more. Our experienced team follows strict standards to deliver spotless results, every time.",
      icon: ShieldCheck,
      link: "/services/specialized",
      image: "/images/services/specialized-cleaning.jpg",
      features: [
        "Custom cleaning plans for your industry or facility.",
        "Experienced, vetted staff for sensitive environments.",
        "We use specialized equipment for every job.",
        "Satisfaction guaranteed—if you're not happy, we'll fix it."
      ],
      category: "specialized",
      rating: 4.8,
      reviews: 64,
      availability: "Tailored to your industry standards"
    },
    {
      title: "Window Cleaning",
      description: "Experience crystal-clear views with our expert window cleaning service. We use eco-friendly solutions and specialized tools to remove dirt, grime, and streaks—leaving your windows spotless and your space brighter.",
      icon: Sun,
      link: "/services/window",
      image: "/images/services/window-cleaning.jpg",
      features: [
        "We clean all window types, from skylights to high-rise.",
        "Streak-free results with eco-friendly cleaning solutions.",
        "Regular maintenance plans to keep your windows spotless.",
        "If you see any streaks, we'll reclean—guaranteed."
      ],
      category: "specialized",
      rating: 4.8,
      reviews: 92,
      availability: "Available for homes and businesses"
    },
    {
      title: "Vehicle Interior Cleaning",
      description: "Restore your vehicle's interior to showroom condition. Our detailed cleaning service removes stains, odors, and dirt from all surfaces—leaving your car fresh, clean, and smelling great. Satisfaction guaranteed.",
      icon: Car,
      link: "/services/vehicle-interior",
      image: "/images/services/vehicle-interior-cleaning.jpg",
      features: [
        "Deep cleaning of all interior surfaces and fabrics.",
        "Odor removal and air freshening treatment included.",
        "Stain removal from carpets, seats, and upholstery.",
        "Mobile service—we come to your location."
      ],
      category: "specialized",
      rating: 4.9,
      reviews: 78,
      availability: "Mobile service available"
    },
    {
      title: "Mattress Cleaning",
      description: "Sleep better with our professional mattress cleaning service. We remove dust mites, allergens, and stains using advanced cleaning technology—ensuring a healthier sleep environment for you and your family.",
      icon: Bed,
      link: "/services/mattress",
      image: "/images/services/mattress-cleaning.jpg",
      features: [
        "Deep cleaning removes dust mites and allergens.",
        "Stain removal and sanitization included.",
        "Quick drying process—ready to use same day.",
        "Extends mattress life and improves sleep quality."
      ],
      category: "specialized",
      rating: 4.9,
      reviews: 65,
      availability: "Same-day service available"
    },
    {
      title: "Garbage Collection",
      description: "Keep your space clean with our reliable waste management service. We offer regular collection schedules, proper waste segregation, and environmentally responsible disposal—making waste management hassle-free.",
      icon: Trash2,
      link: "/services/garbage-collection",
      image: "/images/services/garbage-collection.jpg",
      features: [
        "Regular collection schedules to suit your needs.",
        "Proper waste segregation and recycling.",
        "Environmentally responsible disposal methods.",
        "Flexible plans for homes and businesses."
      ],
      category: "commercial",
      rating: 4.7,
      reviews: 88,
      availability: "Daily, weekly, or monthly schedules"
    },
    {
      title: "Sanitary Bins",
      description: "Maintain a clean, hygienic environment with our professional sanitary bin service. We provide, maintain, and regularly service sanitary bins—ensuring compliance with health and safety regulations.",
      icon: Container,
      link: "/services/sanitary-bins",
      image: "/images/services/sanitary-bins.jpg",
      features: [
        "Regular collection and replacement service.",
        "Discrete, hygienic disposal methods.",
        "Compliant with health and safety regulations.",
        "Flexible service schedules to suit your needs."
      ],
      category: "commercial",
      rating: 4.8,
      reviews: 72,
      availability: "Weekly or monthly service"
    },
    {
      title: "Steam Cleaning",
      description: "Deep clean and sanitize with our powerful steam cleaning service. Using high-temperature steam, we effectively remove dirt, bacteria, and allergens—leaving your surfaces fresh, clean, and hygienic.",
      icon: Droplets,
      link: "/services/steam",
      image: "/images/services/steam-cleaning.jpg",
      features: [
        "High-temperature steam kills bacteria and dust mites.",
        "Chemical-free cleaning for sensitive areas.",
        "Effective on carpets, upholstery, and hard surfaces.",
        "Eco-friendly and safe for children and pets."
      ],
      category: "specialized",
      rating: 4.9,
      reviews: 83,
      availability: "Available for all surfaces"
    },
    {
      title: "Sofa Set Cleaning",
      description: "Revitalize your furniture with our professional sofa cleaning service. We use advanced cleaning techniques to remove stains, odors, and dirt—leaving your sofas looking and smelling fresh, like new.",
      icon: Sofa,
      link: "/services/sofa-set",
      image: "/images/services/sofa-set-cleaning.jpg",
      features: [
        "Deep cleaning for all fabric types and materials.",
        "Stain removal and odor elimination.",
        "Quick drying process—ready to use same day.",
        "Extends furniture life and improves appearance."
      ],
      category: "specialized",
      rating: 4.8,
      reviews: 95,
      availability: "Same-day service available"
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
            whileHover={undefined}
            whileTap={undefined}
          >
            <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm mt-0 !mt-0">
              <CheckCircle2 className="w-4 h-4" />
              Our Services
            </span>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight tracking-wide mt-0 !mt-0"
          >
            <span className="block mb-1">Affordable, Professional</span>
            <span className="text-add8e6 relative inline-block block mb-1 ml-2">
              Cleaning Services
              <motion.span
                className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut' }}
                style={{ display: 'block' }}
              />
            </span>
            <span className="inline-block ml-2">for Homes & Businesses</span>
          </motion.h2>

          <motion.p 
            className="text-base md:text-xl text-gray-600 dark:text-gray-300 tracking-wide mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Simca Agencies delivers expert cleaning with a personal touch—customized for your needs, always affordable, and backed by our satisfaction guarantee. Our skilled, friendly team uses the latest equipment to give you a spotless space and total peace of mind.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="relative max-w-full mx-auto px-4 md:px-12">
          {/* Carousel Container */}
          <div className="overflow-visible">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: isMobile ? 100 : 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isMobile ? -100 : 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
              >
                {getCurrentCards().map((service, index) => (
                  <Link
                    key={index}
                    href={service.link}
                    className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-add8e6/50 focus:ring-offset-2"
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    {/* Glassmorphism effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50 dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50 rounded-xl" />
                    
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-5 rounded-xl">
                      <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px]" />
                    </div>

                    <div className="flex flex-col h-full relative z-10">
                      {/* Service Image */}
                      <div className="relative w-full h-80 md:h-96 lg:h-[22rem] mb-10 rounded-lg overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>

                      <div className="flex items-center justify-between mb-6">
                        <motion.div 
                          className="p-2 md:p-3 bg-add8e6/10 rounded-lg md:rounded-xl transition-transform duration-500"
                        >
                          {React.createElement(service.icon, { 
                            className: 'h-7 w-7 md:h-8 md:w-8 text-add8e6'
                          })}
                        </motion.div>
                      </div>
                      
                      <motion.h3 
                        className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-add8e6 transition-colors"
                      >
                        {service.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-sm md:text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-6"
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
                      >
                        <div className="flex flex-col gap-2">
                          <motion.span 
                            className="text-add8e6 font-medium group-hover:underline flex items-center gap-1 md:gap-2 text-sm md:text-sm"
                          >
                            Learn more
                            <motion.div>
                              <ArrowRight className="w-4 h-4 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </motion.div>
                          </motion.span>
                          <motion.span 
                            className="text-sm md:text-sm text-gray-500 dark:text-gray-400"
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
            <div className="hidden">
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
                />
              ))}
            </div>

            {/* Mobile Navigation Buttons */}
            <div className="flex items-center gap-4">
              <motion.button
                onClick={prevPage}
                className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50 active:scale-95"
                aria-label="Previous service"
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
              >
                <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </motion.button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-row items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prevPage}
              className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50 active:scale-95"
              aria-label="Previous services"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </motion.button>
            <div className="flex items-center gap-2">
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
                />
              ))}
            </div>
            <motion.button
              onClick={nextPage}
              className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50 active:scale-95"
              aria-label="Next services"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </motion.button>
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <motion.div
            whileHover={undefined}
            whileTap={undefined}
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
