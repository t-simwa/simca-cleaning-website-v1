"use client"

import { MapPin, Phone, Mail, Clock, MessageCircle, Sparkles, ShieldCheck } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import OpenStreetMap from "@/components/openstreet-map"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight } from "lucide-react"
import React from "react"
// Beautiful styled icons from different libraries
import { HiChatBubbleLeftRight } from "react-icons/hi2" // Heroicons v2 - Message
import { MdFavorite } from "react-icons/md" // Material Design - Favorite/Choice badge
import { FaPhoneAlt } from "react-icons/fa" // Font Awesome - Phone
import { FaEnvelope } from "react-icons/fa" // Font Awesome - Email
import { MdAccessTime } from "react-icons/md" // Material Design - Clock
import { HiShieldCheck } from "react-icons/hi2" // Heroicons v2 - Shield
import { MdLocationOn } from "react-icons/md" // Material Design - Location

// CountUp component for animated numbers with scroll trigger
function CountUp({ end, duration = 1.5, suffix = "", inView = false }: { end: string | number, duration?: number, suffix?: string, inView?: boolean }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return;
    // Handle non-numeric values (like "24/7", "1hr")
    if (typeof end === 'string' && !end.match(/^\d+/)) {
      return;
    }
    const isPercent = typeof end === 'string' && end.includes('%');
    const isPlus = typeof end === 'string' && end.includes('+');
    // Extract numeric value and any text suffix
    let numericEnd: number;
    let textSuffix = '';
    if (typeof end === 'number') {
      numericEnd = end;
    } else {
      const match = end.match(/^(\d+)(.*)$/);
      if (match) {
        numericEnd = parseInt(match[1]);
        textSuffix = match[2]; // Preserve text after number (e.g., "hr" from "1hr")
      } else {
        numericEnd = parseInt(end);
      }
    }
    const startTime = performance.now();
    function animate(now: number) {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * numericEnd);
      setCount(value);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(numericEnd);
      }
    }
    requestAnimationFrame(animate);
    return () => {};
  }, [end, duration, inView]);
  
  // Handle non-numeric values (like "24/7", "1hr")
  if (typeof end === 'string' && !end.match(/^\d+/)) {
    return <span>{end}{suffix}</span>;
  }
  
  // Extract numeric value and any text suffix
  let display: string | number = count;
  let textSuffix = '';
  if (typeof end === 'string') {
    const match = end.match(/^(\d+)(.*)$/);
    if (match) {
      textSuffix = match[2]; // Preserve text after number (e.g., "hr" from "1hr")
    }
    if (end.includes('%')) display = `${count}%`;
    else if (end.includes('+')) display = `${count}+`;
    else if (textSuffix) display = `${count}${textSuffix}`;
  }
  return <span>{display}{suffix}</span>;
}

// Stats Section Component with scroll-triggered animation
function StatsSectionWithAnimation() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } } }}
      className="grid grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto mb-8 md:mb-12"
    >
      {[
        {
          value: "19+",
          label: "YEARS IN SERVICE",
        },
        {
          value: "5",
          label: "SERVICE LOCATIONS",
        },
        {
          value: "100%",
          label: "KENYAN OWNED",
        }
      ].map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          className="text-center"
        >
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 tracking-tight">
            <CountUp end={stat.value} duration={1.5} inView={inView} />
          </div>
          <div className="text-[10px] md:text-xs text-gray-300 uppercase tracking-wider font-medium pb-1.5 border-b border-gray-400/40 inline-block">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

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
      email: "info@simcaagencies.com",
      hours: "Mon-Fri: 7am-5pm, Sat: 7am-2pm",
    },
    {
      name: "Kisumu",
      address: "Oginga Odinga Street, Kisumu CBD, Kisumu County",
      phone: "+254 721525901",
      email: "info@simcaagencies.com",
      hours: "Mon-Fri: 7am-5pm, Sat: 7am-2pm",
    },
    {
      name: "Lamu",
      address: "Lamu Old Town, Lamu Island, Lamu County",
      phone: "+254 721525901",
      email: "info@simcaagencies.com",
      hours: "Mon-Fri: 7am-5pm, Sat: 7am-2pm",
    },
    {
      name: "Lodwar",
      address: "Lodwar Town, Turkana County",
      phone: "+254 721525901",
      email: "info@simcaagencies.com",
      hours: "Mon-Fri: 7am-5pm, Sat: 7am-2pm",
    },
    {
      name: "Kaimosi",
      address: "Kaimosi Friends University, Kaimosi Town, Vihiga County",
      phone: "+254 721525901",
      email: "info@simcaagencies.com",
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
                className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-wide"
              >
                Contact{' '}
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
                className="text-sm md:text-base lg:text-base text-gray-200 tracking-wide mb-10 md:mb-12 max-w-2xl mx-auto"
              >
                We are here to make connecting with us easy and welcoming. Whether you need ongoing contract cleaning, specialized services, or hygiene solutions for your facility, our friendly team is always ready to listen, offer honest advice, and create a solution that fits your unique space. Reach out today and experience the personal care, attention, and reliability that have made Simca Agencies Kenya's trusted cleaning partner since 2005.
              </motion.p>

              {/* Minimalist Stats Section */}
              <StatsSectionWithAnimation />
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
                  className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-6 md:mb-6 leading-tight tracking-wide mt-0 !mt-0"
                >
                  Get in{' '}
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
                <p className="text-sm md:text-base lg:text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                  We are here to make your experience easy and personal. Whether you have a quick question or need a custom cleaning plan for your facility, reach out and let us know what matters most to you. We will listen, guide you honestly, and make sure you always feel valued and cared for.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {/* Contact Form Section */}
                <div id="contact-form-section" className="bg-white dark:bg-gray-900/50 rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800/50 scroll-mt-24">
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
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
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
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
                        <a href="mailto:info@simcaagencies.com" className="text-xs text-gray-800 dark:text-white hover:text-add8e6 transition-colors block leading-relaxed mb-1">
                          We reply quickly: info@simcaagencies.com
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
                    <h4 className="text-xs font-semibold text-gray-800 dark:text-white mb-2 flex items-center gap-2">
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
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      We treat every client like family and every space like our own. With comprehensive insurance coverage, OHS compliance, and a team of trained Kenyan professionals, your facility is in safe hands. Your satisfaction and peace of mind are our promise, every single time.
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
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-6 md:mb-6 leading-tight tracking-wide">
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
                <p className="text-sm md:text-base lg:text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Wherever you are in Kenya, you are never far from a Simca team that cares. Drop by any of our branches or reach out. Our friendly experts are always ready to listen, answer your questions, and help you find the perfect cleaning solution for your facility.
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
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-add8e6 transition-colors duration-200 leading-tight">
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
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-add8e6 transition-colors duration-200 leading-tight">
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

              <div className="bg-white dark:bg-gray-900/50 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-[400px] md:h-[500px] lg:h-[600px] mt-8 md:mt-12 border border-gray-100 dark:border-gray-800/50">
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
