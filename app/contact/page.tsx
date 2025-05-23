"use client"

import { MapPin, Phone, Mail, Clock, MessageCircle, Sparkles, ShieldCheck } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import OpenStreetMap from "@/components/openstreet-map"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ContactPage() {
  const locations = [
    {
      name: "Nairobi (Headquarters)",
      address: "Kimathi Street, Central Business District, Nairobi",
      phone: "+254 700 123 456",
      email: "nairobi@simcacleaning.co.ke",
      hours: "Mon-Fri: 8am-5pm, Sat: 9am-1pm",
    },
    {
      name: "Mombasa",
      address: "Moi Avenue, Mombasa CBD",
      phone: "+254 700 789 012",
      email: "mombasa@simcacleaning.co.ke",
      hours: "Mon-Fri: 8am-5pm, Sat: 9am-1pm",
    },
    {
      name: "Kaimosi",
      address: "Main Street, Kaimosi Town",
      phone: "+254 700 345 678",
      email: "kaimosi@simcacleaning.co.ke",
      hours: "Mon-Fri: 8am-5pm, Sat: 9am-1pm",
    },
    {
      name: "Eldoret",
      address: "Uganda Road, Eldoret Town",
      phone: "+254 700 901 234",
      email: "eldoret@simcacleaning.co.ke",
      hours: "Mon-Fri: 8am-5pm, Sat: 9am-1pm",
    },
    {
      name: "Kisumu",
      address: "Oginga Odinga Street, Kisumu",
      phone: "+254 700 234 567",
      email: "kisumu@simcacleaning.co.ke",
      hours: "Mon-Fri: 8am-5pm, Sat: 9am-1pm",
    },
    {
      name: "Nakuru",
      address: "Kenyatta Avenue, Nakuru",
      phone: "+254 700 345 678",
      email: "nakuru@simcacleaning.co.ke",
      hours: "Mon-Fri: 8am-5pm, Sat: 9am-1pm",
    },
  ]

  const [currentPage, setCurrentPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Handle window resize to determine mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Calculate total pages for the carousel (always 1 card per page on mobile)
  const totalPages = locations.length

  // Navigation functions
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  // Get the current card to display on mobile
  const currentMobileCard = isMobile ? locations[currentPage] : null

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
                  <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
                  Get in Touch
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight">
                Contact{" "}
                <span className="text-add8e6 relative">
                  Us
                  <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full" />
                </span>
              </h1>
              <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                Get in touch with our team for professional cleaning services across Kenya. We're here to help you maintain a clean and healthy environment.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-8">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center">
                  <div className="text-2xl md:text-3xl font-bold text-add8e6 mb-1 md:mb-2 flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 text-add8e6" />
                    <span className="group-hover:scale-110 transition-transform duration-300">4</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    Locations
                  </div>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center">
                  <div className="text-2xl md:text-3xl font-bold text-add8e6 mb-1 md:mb-2 flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4 text-add8e6" />
                    <span className="group-hover:scale-110 transition-transform duration-300">24/7</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    Support
                  </div>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center">
                  <div className="text-2xl md:text-3xl font-bold text-add8e6 mb-1 md:mb-2 flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 text-add8e6" />
                    <span className="group-hover:scale-110 transition-transform duration-300">1hr</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    Response Time
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Contact Form and Info */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-16">
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
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 md:mb-16">
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium inline-flex items-center gap-2 mb-3 md:mb-4 shadow-sm">
                  <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
                  Reach Out
                </span>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight tracking-wide"
                  style={{
                    textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    WebkitTextStroke: "0.5px rgba(0,0,0,0.1)"
                  }}
                >
                  Get in{" "}
                  <span className="text-add8e6 relative inline-block tracking-wider"
                    style={{
                      textShadow: "0 2px 4px rgba(173,216,230,0.3)",
                      WebkitTextStroke: "0.5px rgba(173,216,230,0.3)"
                    }}
                  >
                    Touch
                    <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full" />
                  </span>
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Experience our premium cleaning services. Get a free quote and schedule your service today.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                {/* Contact Form Section */}
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 md:p-8">
                  <div className="mb-6 md:mb-8">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-add8e6" />
                      Send Us a Message
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                      Get a free quote within 1 hour. Your data is secure and will never be shared.
                    </p>
                  </div>
                  <ContactForm />
                </div>

                {/* Contact Information Section */}
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 md:p-8 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 flex items-center gap-2">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-add8e6" />
                    Quick Contact
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6 md:mb-8">
                    Available 24/7 for emergency cleaning services. Serving all major cities in Kenya.
                  </p>
                  <div className="space-y-4 flex-grow">
                    <div className="flex items-start group/item p-3 -m-3 rounded-md hover:bg-add8e6/10 transition-colors duration-200">
                      <div className="bg-add8e6/10 p-1.5 md:p-2 rounded-lg mr-3 group-hover/item:scale-110 transition-transform duration-300">
                        <Phone className="h-4 w-4 md:h-5 md:w-5 text-add8e6" />
                      </div>
                      <div>
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">Emergency Line</p>
                        <a href="tel:+254700123456" className="text-sm md:text-base text-gray-800 dark:text-white hover:text-add8e6 transition-colors">
                          +254 700 123 456
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start group/item p-3 -m-3 rounded-md hover:bg-add8e6/10 transition-colors duration-200">
                      <div className="bg-add8e6/10 p-1.5 md:p-2 rounded-lg mr-3 group-hover/item:scale-110 transition-transform duration-300">
                        <Mail className="h-4 w-4 md:h-5 md:w-5 text-add8e6" />
                      </div>
                      <div>
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">Email Us</p>
                        <a href="mailto:info@simcacleaning.co.ke" className="text-sm md:text-base text-gray-800 dark:text-white hover:text-add8e6 transition-colors">
                          info@simcacleaning.co.ke
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start group/item p-3 -m-3 rounded-md hover:bg-add8e6/10 transition-colors duration-200">
                      <div className="bg-add8e6/10 p-1.5 md:p-2 rounded-lg mr-3 group-hover/item:scale-110 transition-transform duration-300">
                        <Clock className="h-4 w-4 md:h-5 md:w-5 text-add8e6" />
                      </div>
                      <div>
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">Service Hours</p>
                        <p className="text-sm md:text-base text-gray-800 dark:text-white">
                          Mon-Fri: 8am-5pm, Sat: 9am-1pm
                        </p>
                        <p className="text-xs md:text-sm text-add8e6 mt-1">
                          After-hours support available
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Additional Info to fill space */}
                  <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-sm md:text-base font-medium text-gray-800 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-add8e6" />
                      Our Commitment
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      We are committed to providing exceptional cleaning services with a focus on quality, reliability, and customer satisfaction. Get in touch today for a sparkling clean space.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Map Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-16 md:py-24">
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
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 md:mb-16">
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium inline-flex items-center gap-2 mb-3 md:mb-4 shadow-sm">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                  Find Us
                </span>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight tracking-wide"
                  style={{
                    textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    WebkitTextStroke: "0.5px rgba(0,0,0,0.1)"
                  }}
                >
                  Our{" "}
                  <span className="text-add8e6 relative inline-block tracking-wider"
                    style={{
                      textShadow: "0 2px 4px rgba(173,216,230,0.3)",
                      WebkitTextStroke: "0.5px rgba(173,216,230,0.3)"
                    }}
                  >
                    Locations
                    <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full" />
                  </span>
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Visit any of our branches across Kenya. Our friendly team is ready to assist you with your cleaning needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
                {/* Desktop Grid Layout */}
                {!isMobile && (
                  locations.map((location, index) => (
                    <div
                      key={index}
                      className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-4 md:p-6 flex flex-col h-full"
                    >
                      <div className="flex items-center gap-3 mb-3 md:mb-4">
                        <div className="bg-add8e6/10 p-1.5 md:p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <MapPin className="h-4 w-4 md:h-5 md:w-5 text-add8e6" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors flex-grow">
                          {location.name}
                        </h3>
                      </div>
                      <div className="space-y-3 md:space-y-4 flex-grow mb-4">
                        <div className="flex items-start group/item p-1 -m-1 rounded-md hover:bg-add8e6/10 transition-colors duration-200">
                          <MapPin className="h-4 w-4 text-add8e6 mt-1 mr-2 flex-shrink-0" />
                          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 break-words w-full">{location.address}</p>
                        </div>
                        <div className="flex items-start group/item p-1 -m-1 rounded-md hover:bg-add8e6/10 transition-colors duration-200">
                          <Phone className="h-4 w-4 text-add8e6 mt-1 mr-2 flex-shrink-0" />
                          <a href={`tel:${location.phone}`} className="text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-add8e6 transition-colors break-words w-full">
                            {location.phone}
                          </a>
                        </div>
                        <div className="flex items-start group/item p-1 -m-1 rounded-md hover:bg-add8e6/10 transition-colors duration-200">
                          <Mail className="h-4 w-4 text-add8e6 mt-1 mr-2 flex-shrink-0" />
                          <a href={`mailto:${location.email}`} className="text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-add8e6 transition-colors break-words w-full">
                            {location.email}
                          </a>
                        </div>
                        <div className="flex items-start group/item p-1 -m-1 rounded-md hover:bg-add8e6/10 transition-colors duration-200">
                          <Clock className="h-4 w-4 text-add8e6 mt-1 mr-2 flex-shrink-0" />
                          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 break-words w-full">{location.hours}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
                
                {/* Mobile Carousel Layout */}
                {isMobile && currentMobileCard && (
                  <motion.div
                    key={currentPage} // Use currentPage as key for re-mounting and animation
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                  >
                    <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-4 md:p-6 flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-3 md:mb-4">
                        <div className="bg-add8e6/10 p-1.5 md:p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <MapPin className="h-4 w-4 md:h-5 md:w-5 text-add8e6" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors flex-grow">
                          {currentMobileCard.name}
                        </h3>
                      </div>
                      <div className="space-y-3 md:space-y-4 flex-grow mb-4">
                        <div className="flex items-start group/item p-1 -m-1 rounded-md hover:bg-add8e6/10 transition-colors duration-200">
                          <MapPin className="h-4 w-4 text-add8e6 mt-1 mr-2 flex-shrink-0" />
                          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 break-words w-full">{currentMobileCard.address}</p>
                        </div>
                        <div className="flex items-start group/item p-1 -m-1 rounded-md hover:bg-add8e6/10 transition-colors duration-200">
                          <Phone className="h-4 w-4 text-add8e6 mt-1 mr-2 flex-shrink-0" />
                          <a href={`tel:${currentMobileCard.phone}`} className="text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-add8e6 transition-colors break-words w-full">
                            {currentMobileCard.phone}
                          </a>
                        </div>
                        <div className="flex items-start group/item p-1 -m-1 rounded-md hover:bg-add8e6/10 transition-colors duration-200">
                          <Mail className="h-4 w-4 text-add8e6 mt-1 mr-2 flex-shrink-0" />
                          <a href={`mailto:${currentMobileCard.email}`} className="text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-add8e6 transition-colors break-words w-full">
                            {currentMobileCard.email}
                          </a>
                        </div>
                        <div className="flex items-start group/item p-1 -m-1 rounded-md hover:bg-add8e6/10 transition-colors duration-200">
                          <Clock className="h-4 w-4 text-add8e6 mt-1 mr-2 flex-shrink-0" />
                          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 break-words w-full">{currentMobileCard.hours}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Mobile Navigation Controls */}
              {isMobile && totalPages > 1 && (
                <div className="flex flex-col items-center gap-4 mt-8">
                  {/* Mobile Navigation Buttons */}
                  <div className="flex items-center gap-4">
                    {/* Previous Button */}
                    <motion.button
                      onClick={prevPage}
                      className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50 active:scale-95"
                      aria-label="Previous location"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    </motion.button>

                    {/* Page Counter */}
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {currentPage + 1} of {totalPages}
                    </span>

                    {/* Next Button */}
                    <motion.button
                      onClick={nextPage}
                      className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50 active:scale-95"
                      aria-label="Next location"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    </motion.button>
                  </div>

                  {/* Mobile Pagination Dots */}
                  <div className="flex items-center gap-3">
                    {locations.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentPage(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${currentPage === index ? 'bg-add8e6 w-6' : 'bg-gray-300 dark:bg-gray-600 hover:bg-add8e6/50'}`}
                        aria-label={`Go to location ${index + 1}`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-[400px] md:h-[500px] lg:h-[600px] mt-8 md:mt-12">
                <OpenStreetMap
                  address="Kenya"
                  height="100%"
                  zoom={6}
                  markers={locations.map(location => ({
                    position: location.address + ', Kenya',
                    popup: location.name
                  }))}
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
