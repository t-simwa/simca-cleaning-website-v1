"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { Building2, Award, Star, ArrowUpRight, CheckCircle2, Loader2, Trophy, Medal, Shield, Clock, TrendingUp, DollarSign, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function TrustedClients() {
  const [hoveredClient, setHoveredClient] = useState<number | null>(null)
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: string]: boolean }>({})
  const [currentPage, setCurrentPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const clients = [
    {
      name: "Kenya Revenue Authority",
      logo: "/trusted-clients/kra-logo.png",
      link: "https://www.kra.go.ke/",
      description: "Official tax collection agency of Kenya",
      years: "5+",
      rating: 4.9,
      services: {
        primary: ["Office Cleaning", "Sanitization", "Waste Management"],
        testimonials: [
          "Reduced cleaning-related incidents by 95% through strict security protocols",
          "Achieved 99.8% compliance with government facility standards",
          "Saved 30% on cleaning costs while improving service quality"
        ]
      },
      impact: "Reduced cleaning-related incidents by 95%",
      testimonial: "Simca's implementation of our security protocols while maintaining immaculate standards has been exceptional."
    },
    {
      name: "Nairobi Hospital",
      logo: "/trusted-clients/nairobi-hospital.png",
      link: "https://www.nairobihospital.org/",
      description: "Leading private healthcare facility",
      years: "4+",
      rating: 4.8,
      services: {
        primary: ["Healthcare Cleaning", "Biohazard Management", "Sterilization Support"],
        testimonials: [
          "Improved hospital cleanliness ratings by 40% in first 6 months",
          "Reduced infection rates by 25% through enhanced cleaning protocols",
          "Achieved 100% compliance with WHO healthcare standards"
        ]
      },
      impact: "Improved hospital cleanliness ratings by 40%",
      testimonial: "Their understanding of healthcare cleaning protocols and ability to maintain sterile environments has been crucial to our patient safety standards."
    },
    {
      name: "Safaricom",
      logo: "/trusted-clients/safaricom-logo.png",
      link: "https://www.safaricom.co.ke/",
      description: "Leading telecommunications company",
      years: "6+",
      rating: 4.9,
      services: {
        primary: ["Corporate Cleaning", "Data Center Maintenance", "Specialized Equipment Cleaning"],
        testimonials: [
          "Zero cleaning-related service disruptions in 6 years",
          "Reduced equipment maintenance costs by 35%",
          "Achieved 99.9% uptime in data center cleanliness"
        ]
      },
      impact: "Zero cleaning-related service disruptions",
      testimonial: "Their ability to clean our data centers without disrupting operations has been remarkable."
    },
    {
      name: "Kempinski Hotel",
      logo: "/trusted-clients/kempinski-logo.png",
      link: "https://www.kempinski.com/",
      description: "Luxury 5-star hotel",
      years: "3+",
      rating: 4.9,
      services: {
        primary: ["Hotel Cleaning", "Luxury Suite Maintenance", "Public Area Management"],
        testimonials: [
          "Maintained 5-star cleanliness ratings for 36 consecutive months",
          "Improved guest satisfaction scores by 45%",
          "Reduced cleaning-related complaints by 90%"
        ]
      },
      impact: "Consistent 5-star cleanliness ratings",
      testimonial: "Their attention to detail and understanding of luxury standards has elevated our guest experience."
    },
    {
      name: "Standard Chartered Bank",
      logo: "/trusted-clients/standard-logo.png",
      link: "https://www.sc.com/ke/",
      description: "International banking institution",
      years: "4+",
      rating: 4.8,
      services: {
        primary: ["Bank Cleaning", "Secure Area Maintenance", "Cash Handling Area Cleaning"],
        testimonials: [
          "Zero security breaches related to cleaning operations",
          "Achieved 100% compliance with banking security standards",
          "Reduced cleaning costs by 25% while improving service quality"
        ]
      },
      impact: "Zero security breaches related to cleaning",
      testimonial: "Their understanding of banking security protocols while maintaining impeccable standards has been crucial to our operations."
    },
    {
      name: "Kenya Ports Authority",
      logo: "/trusted-clients/kpa-logo.png",
      link: "https://www.kpa.co.ke/",
      description: "National port authority",
      years: "3+",
      rating: 4.8,
      services: {
        primary: ["Port Facility Cleaning", "Industrial Area Maintenance", "Waste Management"],
        testimonials: [
          "Improved port cleanliness ratings by 35%",
          "Reduced environmental incidents by 40%",
          "Achieved 100% compliance with maritime standards"
        ]
      },
      impact: "Improved port cleanliness ratings by 35%",
      testimonial: "Their industrial cleaning expertise has significantly improved our port facilities' standards."
    },
    // {
    //   name: "Kenya Power",
    //   logo: "/trusted-clients/kplc-logo.jpg",
    //   link: "https://www.kplc.co.ke/",
    //   description: "National electricity provider",
    //   years: "4+",
    //   rating: 4.7,
    //   services: {
    //     primary: ["Power Station Cleaning", "Office Maintenance", "Specialized Equipment Cleaning"],
    //     testimonials: [
    //       "Zero cleaning-related power disruptions",
    //       "Reduced maintenance costs by 30%",
    //       "Improved facility safety ratings by 45%"
    //     ]
    //   },
    //   impact: "Zero cleaning-related power disruptions",
    //   testimonial: "Their understanding of power facility requirements has been crucial to our operations."
    // },
    {
      name: "NHIF",
      logo: "/trusted-clients/nhif-logo.png",
      link: "https://www.nhif.or.ke/",
      description: "National health insurance fund",
      years: "3+",
      rating: 4.8,
      services: {
        primary: ["Healthcare Facility Cleaning", "Office Maintenance", "Public Area Management"],
        testimonials: [
          "Improved facility hygiene ratings by 40%",
          "Reduced cleaning-related complaints by 85%",
          "Achieved 100% compliance with healthcare standards"
        ]
      },
      impact: "Improved facility hygiene ratings by 40%",
      testimonial: "Their healthcare cleaning expertise has significantly improved our facility standards."
    }
  ]

  // Calculate total pages based on screen size
  const cardsPerPage = isMobile ? 1 : 3
  const totalPages = Math.ceil(clients.length / cardsPerPage)

  // Handle image loading
  const handleImageLoad = (src: string) => {
    setImagesLoaded(prev => ({ ...prev, [src]: true }))
  }

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
    return clients.slice(start, start + cardsPerPage)
  }

  return (
    <ScrollAnimation>
      <section className="relative py-12 md:py-20">
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
          <div className="text-center max-w-3xl mx-auto mb-4 md:mb-16">
            <motion.div 
              className="inline-block mb-6 sm:mb-4 md:mb-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2 shadow-sm">
                <Award className="w-4 h-4" />
                Our Trusted Partners
              </span>
            </motion.div>

            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-6 md:mb-5 leading-tight tracking-wide"
            >
              Proud to Care for Kenya's Leading <span className="text-add8e6 relative inline-block">Organizations
                <motion.span
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  style={{ display: 'block' }}
                />
              </span>
            </motion.h2>

            <motion.p 
              className="text-sm md:text-lg text-gray-600 dark:text-gray-300 tracking-wide mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              We're honored to be the cleaning partner of choice for organizations that value care, trust, and a spotless result—every time. Our clients aren't just names on a list; they're part of the Simca family, and we treat their spaces as if they were our own.
            </motion.p>

            <motion.p 
              className="text-xs md:text-sm text-add8e6 dark:text-add8e6/90 font-medium tracking-wide mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Discover how we build lasting relationships—one clean, cared-for space at a time.
            </motion.p>
          </div>

          <div className="relative max-w-7xl mx-auto">
            {/* Navigation Buttons - Hidden on mobile */}
            <button
              onClick={prevPage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-add8e6/50 hidden md:block"
              aria-label="Previous client"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={nextPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-add8e6/50 hidden md:block"
              aria-label="Next client"
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
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                >
                  {getCurrentCards().map((client, index) => (
                    <motion.a
                      key={`${currentPage}-${index}`}
                      href={client.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-add8e6/50 focus:ring-offset-2 w-full overflow-hidden border border-gray-200 dark:border-gray-700"
                      aria-label={`Visit ${client.name} website`}
                      onMouseEnter={() => setHoveredClient(index)}
                      onMouseLeave={() => setHoveredClient(null)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Glassmorphism effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50 dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50 rounded-xl" />
                      
                      <div className="flex flex-col h-full relative z-10">
                        {/* Client Logo Section */}
                        <div className="relative h-32 md:h-36 w-full max-w-[240px] mx-auto mb-8">
                          <div className="absolute inset-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-sm" />
                          <div className="absolute inset-0 flex items-center justify-center p-4">
                            {!imagesLoaded[client.logo] && (
                              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
                                <Loader2 className="w-8 h-8 text-add8e6 animate-spin" />
                              </div>
                            )}
                            <Image
                              src={client.logo || "/placeholder.svg?height=80&width=160"}
                              alt={`${client.name} logo`}
                              fill
                              sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 240px"
                              className={`object-contain filter dark:brightness-90 transition-opacity duration-200 ${
                                !imagesLoaded[client.logo] ? 'opacity-0' : 'opacity-100'
                              }`}
                              onLoad={() => handleImageLoad(client.logo)}
                              style={{
                                objectPosition: 'center',
                                objectFit: 'contain',
                                padding: '0.5rem'
                              }}
                            />
                          </div>
                        </div>

                        {/* Client Info */}
                        <div className="mb-6">
                          <h3 className="text-sm md:text-lg font-bold text-gray-800 dark:text-white mb-2 md:mb-3 group-hover:text-add8e6 transition-colors">
                            {client.name}
                          </h3>
                          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-3 md:mb-5">
                            {/* Rewrite description for warmth and partnership */}
                            {(() => {
                              switch (client.name) {
                                case "Kenya Revenue Authority":
                                  return "A valued partner who trusts us to keep their offices spotless, secure, and welcoming for every visitor and staff member.";
                                case "Nairobi Hospital":
                                  return "We're proud to help create a safe, healing environment for patients and staff, supporting their mission of care with every clean.";
                                case "Safaricom":
                                  return "A forward-thinking team that relies on us to keep their spaces and sensitive equipment clean, so they can focus on connecting Kenya.";
                                case "Kempinski Hotel":
                                  return "A luxury destination where we help ensure every guest feels special, with sparkling suites and flawless public spaces.";
                                case "Standard Chartered Bank":
                                  return "A trusted financial institution that counts on us for secure, reliable cleaning—so their team and clients always feel at ease.";
                                case "Kenya Ports Authority":
                                  return "A vital hub for trade, where we help maintain high standards of cleanliness and safety for all who pass through.";
                                case "NHIF":
                                  return "A national leader in health, where we support a clean, healthy workplace for staff and visitors alike.";
                                default:
                                  return client.description;
                              }
                            })()}
                          </p>
                        </div>

                        {/* Services */}
                        <div className="mb-4 md:mb-6">
                          <h4 className="text-xs md:text-sm font-semibold text-gray-800 dark:text-white mb-2 md:mb-3 uppercase tracking-wide">
                            How We Help
                          </h4>
                          <div className="space-y-1.5 md:space-y-2">
                            {client.services.primary.map((service, i) => (
                              <motion.div 
                                key={i} 
                                className="flex items-center gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-700/30 rounded-lg p-2 backdrop-blur-sm"
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
                                {/* Rewrite service for warmth and clarity */}
                                {(() => {
                                  switch (service) {
                                    case "Office Cleaning":
                                      return "Caring for every corner of your workspace";
                                    case "Sanitization":
                                      return "Creating a healthy, safe environment";
                                    case "Waste Management":
                                      return "Keeping spaces tidy and stress-free";
                                    case "Healthcare Cleaning":
                                      return "Supporting patient safety with every clean";
                                    case "Biohazard Management":
                                      return "Handling sensitive areas with care and expertise";
                                    case "Sterilization Support":
                                      return "Ensuring the highest standards of hygiene";
                                    case "Corporate Cleaning":
                                      return "Helping your team shine in a spotless office";
                                    case "Data Center Maintenance":
                                      return "Protecting your technology with gentle, expert care";
                                    case "Specialized Equipment Cleaning":
                                      return "Safeguarding your valuable assets";
                                    case "Hotel Cleaning":
                                      return "Making every guest feel at home";
                                    case "Luxury Suite Maintenance":
                                      return "Delivering a touch of luxury, every day";
                                    case "Public Area Management":
                                      return "Welcoming everyone with clean, inviting spaces";
                                    case "Bank Cleaning":
                                      return "Building trust with a spotless environment";
                                    case "Secure Area Maintenance":
                                      return "Respecting your security while we clean";
                                    case "Cash Handling Area Cleaning":
                                      return "Keeping sensitive spaces safe and clean";
                                    case "Port Facility Cleaning":
                                      return "Supporting smooth operations with reliable cleaning";
                                    case "Industrial Area Maintenance":
                                      return "Caring for complex, high-traffic areas";
                                    case "Healthcare Facility Cleaning":
                                      return "Promoting health and comfort for all";
                                    case "Office Maintenance":
                                      return "Ensuring a welcoming, productive workplace";
                                    default:
                                      return service;
                                  }
                                })()}
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Testimonial */}
                        <div className="mb-4 md:mb-6 bg-white/50 dark:bg-gray-700/30 rounded-lg p-4 backdrop-blur-sm">
                          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 italic">
                            {/* Rewrite testimonial for warmth and partnership */}
                            {(() => {
                              switch (client.name) {
                                case "Kenya Revenue Authority":
                                  return "Simca's team always goes the extra mile to keep our offices secure and sparkling. We feel truly cared for.";
                                case "Nairobi Hospital":
                                  return "Simca's attention to detail and commitment to our patients' safety gives us peace of mind every day.";
                                case "Safaricom":
                                  return "We trust Simca to keep our spaces and equipment spotless, so we can focus on what matters most—our customers.";
                                case "Kempinski Hotel":
                                  return "Every guest experience is elevated by Simca's care and dedication. They're part of our hospitality family.";
                                case "Standard Chartered Bank":
                                  return "Simca's respect for our security and their friendly, reliable service make them a true partner.";
                                case "Kenya Ports Authority":
                                  return "Our port runs smoother and feels safer thanks to Simca's hardworking, attentive team.";
                                case "NHIF":
                                  return "Simca's cleaning team helps us create a healthy, welcoming space for everyone who walks through our doors.";
                                default:
                                  return client.testimonial;
                              }
                            })()}
                          </p>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-100 dark:border-gray-700">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 md:w-4 md:h-4 text-add8e6" />
                            <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                              {client.years} Years
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Navigation */}
            <div className="flex flex-col items-center gap-4 mt-8 md:hidden">
              <div className="flex items-center gap-4">
                <motion.button
                  onClick={prevPage}
                  className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50 active:scale-95"
                  aria-label="Previous client"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </motion.button>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {currentPage + 1} of {clients.length}
                </span>
                <motion.button
                  onClick={nextPage}
                  className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50 active:scale-95"
                  aria-label="Next client"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </motion.button>
              </div>
            </div>

            {/* Desktop Navigation - Match services-overview */}
            <div className="hidden md:flex flex-row items-center justify-center gap-4 mt-8">
              {/* <motion.button
                onClick={prevPage}
                className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50 active:scale-95"
                aria-label="Previous clients"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </motion.button> */}
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
              {/* <motion.button
                onClick={nextPage}
                className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50 active:scale-95"
                aria-label="Next clients"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </motion.button> */}
            </div>
          </div>

          {/* Join Section with Hero-style Elements */}
          <div className="mt-12 md:mt-16 text-center relative">
            <div className="relative">
              <motion.div 
                className="inline-flex flex-col items-center gap-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 md:px-8 py-8 md:py-10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-add8e6/50 focus:ring-offset-2 max-w-2xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Client Logos */}
                <div className="flex -space-x-3 md:-space-x-4">
                  {[
                    { src: "/trusted-clients/kpa-logo.png", alt: "KPA Logo" },
                    { src: "/trusted-clients/nairobi-hospital.png", alt: "KPLC Logo" },
                    { src: "/trusted-clients/nhif-logo.png", alt: "NHIF Logo" }
                  ].map((logo, i) => (
                    <motion.div 
                      key={i} 
                      className="relative w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-800 shadow-sm transform transition-all duration-200 hover:scale-110 hover:z-10"
                      style={{ 
                        transform: `rotate(${i * 5}deg)`,
                        transitionDelay: `${i * 100}ms`
                      }}
                      whileHover={{ scale: 1.1, rotate: 0 }}
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain p-2 filter dark:brightness-90"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Main Content */}
                <div className="space-y-6">
                  <div>
                    <motion.h3 
                      className="text-sm md:text-lg font-bold text-gray-800 dark:text-white mb-2 md:mb-3"
                    >
                      Ready to Experience the Simca Difference?
                    </motion.h3>
                    <motion.p 
                      className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-3 md:mb-5"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Join a community of organizations who trust us to care for their spaces with heart, skill, and a personal touch.
                    </motion.p>
                  </div>
                  {/* CTA Button */}
                  <Link href="/contact" passHref legacyBehavior>
                    <motion.a
                      className="inline-flex items-center gap-2 bg-add8e6 text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-add8e6/90 transition-colors duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-add8e6/50 focus:ring-offset-2 mb-16"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Let's Get Started
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.a>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  )
}

// Add these animations to your global CSS file
const styles = `
@keyframes float-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes float-slow-delayed {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-25px); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.8; }
}

@keyframes pulse-slow-delayed {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 7s ease-in-out infinite;
}

.animate-float-slow-delayed {
  animation: float-slow-delayed 8s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-pulse-slow-delayed {
  animation: pulse-slow-delayed 5s ease-in-out infinite;
}

@keyframes slide-in {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

@keyframes slide-out {
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
}

.animate-slide-in {
  animation: slide-in 0.5s ease-out forwards;
}

.animate-slide-out {
  animation: slide-out 0.5s ease-out forwards;
}
`
