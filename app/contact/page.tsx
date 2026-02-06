"use client"

import { ArrowRight, Phone as PhoneIcon } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import GoogleMap from "@/components/google-map"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import React from "react"
// Beautiful styled icons from different libraries
import { HiChatBubbleLeftRight } from "react-icons/hi2" // Heroicons v2 - Message
import { FaPhoneAlt } from "react-icons/fa" // Font Awesome - Phone
import { FaEnvelope } from "react-icons/fa" // Font Awesome - Email
import { MdAccessTime } from "react-icons/md" // Material Design - Clock
import { HiShieldCheck } from "react-icons/hi2" // Heroicons v2 - Shield
import { MdLocationOn } from "react-icons/md" // Material Design - Location
import BreadcrumbSchema, { breadcrumbConfigs } from "@/components/schema/breadcrumb-schema"

export default function ContactPage() {
  // Handle scroll to form when navigating with hash
  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash
      if (hash === '#contact-form') {
        // Wait for page to fully render
        setTimeout(() => {
          const formSection = document.getElementById('contact-form-section')
          if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 300)
      }
    }
    
    // Check on mount
    handleScroll()
    
    // Also listen for hash changes
    window.addEventListener('hashchange', handleScroll)
    
    return () => {
      window.removeEventListener('hashchange', handleScroll)
    }
  }, [])

  const locations = [
    {
      name: "Mombasa (Headquarters)",
      address: "New Canon Towers, Moi Avenue, Mombasa | P.O. Box: 93169-80102",
      phone: "041-2316600",
      email: "info@simca-agencies.com",
      hours: "Mon-Fri: 7am-5pm, Sat: 7am-2pm",
    },
    {
      name: "Kisumu",
      address: "Oginga Odinga Street, Kisumu CBD, Kisumu County",
      phone: "+254 721525901",
      email: "info@simca-agencies.com",
      hours: "Mon-Fri: 7am-5pm, Sat: 7am-2pm",
    },
    {
      name: "Lamu",
      address: "Lamu Old Town, Lamu Island, Lamu County",
      phone: "+254 721525901",
      email: "info@simca-agencies.com",
      hours: "Mon-Fri: 7am-5pm, Sat: 7am-2pm",
    },
    {
      name: "Lodwar",
      address: "Lodwar Town, Turkana County",
      phone: "+254 721525901",
      email: "info@simca-agencies.com",
      hours: "Mon-Fri: 7am-5pm, Sat: 7am-2pm",
    },
    {
      name: "Kaimosi",
      address: "Kaimosi Friends University, Kaimosi Town, Vihiga County",
      phone: "+254 721525901",
      email: "info@simca-agencies.com",
      hours: "Mon-Fri: 7am-5pm, Sat: 7am-2pm",
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
      {/* Schema Markup for AI Search Optimization (GEO) */}
      <BreadcrumbSchema items={breadcrumbConfigs.contact} />
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Image */}
        <motion.img
          src="/contact/contact-hero.webp"
          alt="Professional cleaning services in Kenya"
          className="object-cover object-center md:object-left w-full h-full absolute inset-0 z-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 10, ease: "easeOut" }}
          style={{ pointerEvents: 'none' }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55 z-10" />

        <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 relative flex-grow flex flex-col justify-center z-20">
          <div className="flex flex-col items-center">
            {/* Centered Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3,
                  },
                },
              }}
              className="text-center"
            >
              <motion.div
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } } }}
                className="inline-block mb-6 sm:mb-4 md:mb-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2">
                  <HiChatBubbleLeftRight className="w-3.5 h-3.5" />
                  Get in Touch
                </span>
              </motion.div>

              <motion.h1
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } } }}
                className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-wide"
              >
                Contact{" "}
                <span className="text-fff relative inline-block">
                  Us
                  <motion.span
                    className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </span>
              </motion.h1>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } } }}
                className="font-body text-base md:text-lg lg:text-xl text-gray-200 tracking-wide mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                Kenya's trusted cleaning partner since 2005—reach out and let us care for your space.
              </motion.p>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } } }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact-form-section')
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className="font-body inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-6 md:px-8 py-3 md:py-3.5 font-semibold transition-all duration-300 group text-sm md:text-base tracking-wide rounded-lg shadow-lg hover:shadow-xl"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <a
                  href="tel:+254722839248"
                  className="font-body inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-6 md:px-8 py-3 md:py-3.5 font-semibold transition-all duration-300 group text-sm md:text-base tracking-wide rounded-lg shadow-lg hover:shadow-xl"
                >
                  <PhoneIcon className="w-4 h-4 md:w-5 md:h-5" />
                  Call Us Now
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Contact Form and Info */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-12 md:py-16 lg:py-20">
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
              <div className="text-center mb-10 md:mb-12">
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium inline-flex items-center gap-2 shadow-sm mb-6">
                  <HiChatBubbleLeftRight className="w-3.5 h-3.5" />
                  Reach Out
                </span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-heading text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 md:mb-6 leading-tight tracking-wide mt-0 !mt-0"
                >
                  Get in{" "}
                  <span className="text-add8e6 relative inline-block tracking-wider">
                    Touch
                    <motion.span
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </span>
                </motion.h2>
                <p className="font-body text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
                  Reach out and let us know what matters most to you—we're here to help.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {/* Contact Form Section */}
                <div id="contact-form-section" className="bg-white dark:bg-gray-900/50 rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800/50 scroll-mt-24">
                  <div className="mb-4">
                    <h3 className="font-heading text-base md:text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                      <motion.div 
                        className="relative flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md" />
                          <div className="relative p-1.5 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15">
                            <HiChatBubbleLeftRight className="h-3.5 w-3.5 text-add8e6" />
                          </div>
                        </div>
                      </motion.div>
                      Send Us a Message
                    </h3>
                  </div>
                  <ContactForm formId="contact-form" />
                </div>

                {/* Contact Information Section */}
                <div className="bg-white dark:bg-gray-900/50 rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800/50 flex flex-col">
                  <h3 className="font-heading text-base md:text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                    <motion.div 
                      className="relative flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md" />
                        <div className="relative p-1.5 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15">
                          <HiChatBubbleLeftRight className="h-3.5 w-3.5 text-add8e6" />
                        </div>
                      </div>
                    </motion.div>
                    Quick Contact
                  </h3>
                  <div className="space-y-3 flex-grow">
                    <div className="flex items-start group/item">
                      <motion.div 
                        className="relative flex-shrink-0 mt-0.5 mr-3"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover/item:blur-lg transition-all duration-300" />
                          <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover/item:border-add8e6/30 transition-all duration-300">
                            <FaPhoneAlt className="h-3.5 w-3.5 text-add8e6 group-hover/item:scale-110 transition-transform duration-300" />
                          </div>
                        </div>
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Call Us</p>
                        <a href="tel:0412316600" className="text-xs text-gray-800 dark:text-white hover:text-add8e6 transition-colors block leading-relaxed">
                          Landline: 041-2316600
                        </a>
                        <a href="tel:+254721525901" className="text-xs text-gray-800 dark:text-white hover:text-add8e6 transition-colors block leading-relaxed">
                          Mobile: +254 721 525 901
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start group/item">
                      <motion.div 
                        className="relative flex-shrink-0 mt-0.5 mr-3"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover/item:blur-lg transition-all duration-300" />
                          <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover/item:border-add8e6/30 transition-all duration-300">
                            <FaEnvelope className="h-3.5 w-3.5 text-add8e6 group-hover/item:scale-110 transition-transform duration-300" />
                          </div>
                        </div>
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Email Us</p>
                        <a href="mailto:info@simca-agencies.com" className="text-xs text-gray-800 dark:text-white hover:text-add8e6 transition-colors block leading-relaxed mb-1">
                          We reply quickly: info@simca-agencies.com
                        </a>
                        <a href="mailto:simka1974@hotmail.com" className="text-xs text-gray-800 dark:text-white hover:text-add8e6 transition-colors block leading-relaxed">
                          Or reach us at: simka1974@hotmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start group/item">
                      <motion.div 
                        className="relative flex-shrink-0 mt-0.5 mr-3"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover/item:blur-lg transition-all duration-300" />
                          <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover/item:border-add8e6/30 transition-all duration-300">
                            <MdAccessTime className="h-3.5 w-3.5 text-add8e6 group-hover/item:scale-110 transition-transform duration-300" />
                          </div>
                        </div>
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Service Hours</p>
                        <p className="text-xs text-gray-800 dark:text-white leading-relaxed">
                          Mon-Fri: 7am-5pm, Sat: 7am-2pm
                        </p>
                        <p className="text-xs text-add8e6 mt-1 leading-relaxed">
                          We respond promptly to all enquiries.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Additional Info */}
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800/50">
                    <h4 className="font-heading text-sm md:text-base font-semibold text-gray-800 dark:text-white mb-2 flex items-center gap-2">
                      <motion.div 
                        className="relative flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md" />
                          <div className="relative p-1.5 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15">
                            <HiShieldCheck className="h-3.5 w-3.5 text-add8e6" />
                          </div>
                        </div>
                      </motion.div>
                      Our Commitment
                    </h4>
                    <p className="font-body text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Comprehensive insurance, OHS compliance, and trained Kenyan professionals—your facility is in safe hands.
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
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-12 md:py-16 lg:py-20">
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
              <div className="text-center mb-10 md:mb-12">
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium inline-flex items-center gap-2 shadow-sm mb-6">
                  <MdLocationOn className="w-3.5 h-3.5" />
                  Find Us
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 md:mb-6 leading-tight tracking-wide">
                  Our{" "}
                  <span className="text-add8e6 relative inline-block tracking-wider">
                    Locations
                    <motion.span
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </span>
                </h2>
                <p className="font-body text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Wherever you are in Kenya, you're never far from a Simca team that cares.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12">
                {/* Desktop Grid Layout */}
                {!isMobile && (
                  locations.map((location, index) => (
                    <div
                      key={index}
                      className="group bg-white dark:bg-gray-900/50 rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 border border-gray-100 dark:border-gray-800/50 flex flex-col h-full"
                    >
                      <div className="text-center mb-3">
                        <h3 className="font-heading text-sm md:text-base font-semibold text-gray-900 dark:text-white group-hover:text-add8e6 transition-colors duration-200 leading-tight">
                          {location.name}
                        </h3>
                      </div>
                      <div className="space-y-3 flex-grow">
                        <div className="flex items-center group/item">
                          <motion.div 
                            className="relative flex-shrink-0 mr-3"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover/item:blur-lg transition-all duration-300" />
                              <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover/item:border-add8e6/30 transition-all duration-300">
                                <MdLocationOn className="h-3.5 w-3.5 text-add8e6 group-hover/item:scale-110 transition-transform duration-300" />
                              </div>
                            </div>
                          </motion.div>
                          <p className="text-xs text-gray-600 dark:text-gray-400 break-words w-full leading-relaxed">{location.address}</p>
                        </div>
                        <div className="flex items-center group/item">
                          <motion.div 
                            className="relative flex-shrink-0 mr-3"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover/item:blur-lg transition-all duration-300" />
                              <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover/item:border-add8e6/30 transition-all duration-300">
                                <FaPhoneAlt className="h-3.5 w-3.5 text-add8e6 group-hover/item:scale-110 transition-transform duration-300" />
                              </div>
                            </div>
                          </motion.div>
                          <a href={`tel:${location.phone}`} className="text-xs text-gray-600 dark:text-gray-400 hover:text-add8e6 transition-colors break-words w-full leading-relaxed">
                            {location.phone}
                          </a>
                        </div>
                        <div className="flex items-center group/item">
                          <motion.div 
                            className="relative flex-shrink-0 mr-3"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover/item:blur-lg transition-all duration-300" />
                              <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover/item:border-add8e6/30 transition-all duration-300">
                                <FaEnvelope className="h-3.5 w-3.5 text-add8e6 group-hover/item:scale-110 transition-transform duration-300" />
                              </div>
                            </div>
                          </motion.div>
                          <a href={`mailto:${location.email}`} className="text-xs text-gray-600 dark:text-gray-400 hover:text-add8e6 transition-colors break-words w-full leading-relaxed">
                            {location.email}
                          </a>
                        </div>
                        <div className="flex items-center group/item">
                          <motion.div 
                            className="relative flex-shrink-0 mr-3"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover/item:blur-lg transition-all duration-300" />
                              <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover/item:border-add8e6/30 transition-all duration-300">
                                <MdAccessTime className="h-3.5 w-3.5 text-add8e6 group-hover/item:scale-110 transition-transform duration-300" />
                              </div>
                            </div>
                          </motion.div>
                          <p className="text-xs text-gray-600 dark:text-gray-400 break-words w-full leading-relaxed">{location.hours}</p>
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
                    <div className="group bg-white dark:bg-gray-900/50 rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 border border-gray-100 dark:border-gray-800/50 flex flex-col h-full">
                      <div className="text-center mb-3">
                        <h3 className="font-heading text-sm md:text-base font-semibold text-gray-900 dark:text-white group-hover:text-add8e6 transition-colors duration-200 leading-tight">
                          {currentMobileCard.name}
                        </h3>
                      </div>
                      <div className="space-y-3 flex-grow">
                        <div className="flex items-center group/item">
                          <motion.div 
                            className="relative flex-shrink-0 mr-3"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover/item:blur-lg transition-all duration-300" />
                              <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover/item:border-add8e6/30 transition-all duration-300">
                                <MdLocationOn className="h-3.5 w-3.5 text-add8e6 group-hover/item:scale-110 transition-transform duration-300" />
                              </div>
                            </div>
                          </motion.div>
                          <p className="text-xs text-gray-600 dark:text-gray-400 break-words w-full leading-relaxed">{currentMobileCard.address}</p>
                        </div>
                        <div className="flex items-center group/item">
                          <motion.div 
                            className="relative flex-shrink-0 mr-3"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover/item:blur-lg transition-all duration-300" />
                              <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover/item:border-add8e6/30 transition-all duration-300">
                                <FaPhoneAlt className="h-3.5 w-3.5 text-add8e6 group-hover/item:scale-110 transition-transform duration-300" />
                              </div>
                            </div>
                          </motion.div>
                          <a href={`tel:${currentMobileCard.phone}`} className="text-xs text-gray-600 dark:text-gray-400 hover:text-add8e6 transition-colors break-words w-full leading-relaxed">
                            {currentMobileCard.phone}
                          </a>
                        </div>
                        <div className="flex items-center group/item">
                          <motion.div 
                            className="relative flex-shrink-0 mr-3"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover/item:blur-lg transition-all duration-300" />
                              <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover/item:border-add8e6/30 transition-all duration-300">
                                <FaEnvelope className="h-3.5 w-3.5 text-add8e6 group-hover/item:scale-110 transition-transform duration-300" />
                              </div>
                            </div>
                          </motion.div>
                          <a href={`mailto:${currentMobileCard.email}`} className="text-xs text-gray-600 dark:text-gray-400 hover:text-add8e6 transition-colors break-words w-full leading-relaxed">
                            {currentMobileCard.email}
                          </a>
                        </div>
                        <div className="flex items-center group/item">
                          <motion.div 
                            className="relative flex-shrink-0 mr-3"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover/item:blur-lg transition-all duration-300" />
                              <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover/item:border-add8e6/30 transition-all duration-300">
                                <MdAccessTime className="h-3.5 w-3.5 text-add8e6 group-hover/item:scale-110 transition-transform duration-300" />
                              </div>
                            </div>
                          </motion.div>
                          <p className="text-xs text-gray-600 dark:text-gray-400 break-words w-full leading-relaxed">{currentMobileCard.hours}</p>
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

              <div className="bg-white dark:bg-gray-900/50 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-[300px] md:h-[350px] lg:h-[400px] mt-8 md:mt-12 border border-gray-100 dark:border-gray-800/50 relative z-0">
                <GoogleMap height="100%" className="rounded-lg" />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
