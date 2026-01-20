"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import { Home, Building2, HardHat, SprayCanIcon as Spray, ShieldCheck, Sofa, CheckCircle2, Sparkles, Users, Phone, Mail, MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import TrustedClients from "@/components/trusted-clients"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { motion, AnimatePresence } from "framer-motion"

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement<{ className?: string }>;
  image: string;
  features: string[];
  benefits: string[];
  process: string[];
  availability: string;
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      id: "residential",
      title: "Residential Cleaning",
      description: "Transform your home into a sanctuary of cleanliness with our award-winning residential cleaning services. Experience our exclusive 5-step cleaning process, trusted by 500+ homeowners with a 98% satisfaction rate.",
      icon: <Home className="h-12 w-12 text-add8e6" />,
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "ISO 9001:2015 certified cleaning protocols",
        "Eco-friendly cleaning products (EPA Safer Choice certified)",
        "Customized cleaning plans with digital scheduling",
        "100% satisfaction guarantee with 24-hour re-cleaning"
      ],
      benefits: [
        "Save 10+ hours weekly on household cleaning",
        "Reduce allergens by up to 90% with HEPA filtration",
        "Extend furniture lifespan with proper maintenance",
        "Enjoy a healthier living environment with eco-friendly products",
        "Peace of mind with bonded and insured cleaning professionals"
      ],
      process: [
        "Initial consultation and home assessment (30 mins)",
        "Customized cleaning plan development with digital checklist",
        "Professional cleaning execution with quality checkpoints",
        "Post-cleaning inspection and client feedback",
        "Regular maintenance schedule with flexible adjustments"
      ],
      availability: "Available 7 days a week, 6 AM - 10 PM"
    },
    {
      id: "commercial",
      title: "Commercial Cleaning",
      description: "Elevate your business environment with our comprehensive commercial cleaning solutions. Our certified team delivers consistent, high-quality cleaning services with minimal disruption to your operations.",
      icon: <Building2 className="h-12 w-12 text-add8e6" />,
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "BOMA-certified cleaning standards",
        "After-hours cleaning with key-holding service",
        "Specialized equipment for large spaces",
        "Digital quality control system"
      ],
      benefits: [
        "Increase employee productivity by 15% with cleaner workspaces",
        "Reduce sick days with thorough sanitization protocols",
        "Enhance client perception with consistently clean facilities",
        "Comply with industry-specific cleaning regulations",
        "Optimize cleaning schedules to minimize business disruption"
      ],
      process: [
        "Comprehensive facility assessment and cleaning audit",
        "Customized cleaning proposal with service frequency options",
        "Dedicated cleaning team assignment and training",
        "Implementation of cleaning protocols with quality checks",
        "Monthly performance review and service adjustments"
      ],
      availability: "Available 24/7 with 2-hour emergency response"
    },
    {
      id: "construction",
      title: "Post-construction Cleaning",
      description: "Specialized cleaning solutions for construction and renovation projects. Our certified team ensures your space is ready for immediate occupancy with our comprehensive post-construction cleaning process.",
      icon: <HardHat className="h-12 w-12 text-add8e6" />,
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "OSHA-compliant safety protocols",
        "Industrial-grade equipment for heavy-duty cleaning",
        "Specialized dust removal systems",
        "Final inspection certification"
      ],
      benefits: [
        "Eliminate 99.9% of construction dust and debris",
        "Reduce project completion time by 20%",
        "Prevent damage to new installations",
        "Ensure compliance with health and safety standards",
        "Ready for immediate occupancy after cleaning"
      ],
      process: [
        "Pre-cleaning site assessment and safety evaluation",
        "Heavy debris removal and rough cleaning",
        "Detailed cleaning of all surfaces and fixtures",
        "Final inspection with air quality testing",
        "Post-cleaning walkthrough and certification"
      ],
      availability: "Available within 24 hours of construction completion"
    },
    {
      id: "carpet",
      title: "Carpet & Upholstery Cleaning",
      description: "Revitalize your carpets and upholstery with our advanced cleaning technology. Our certified technicians use eco-friendly solutions to remove deep-seated dirt, allergens, and stains.",
      icon: <Sofa className="h-12 w-12 text-add8e6" />,
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "Hot water extraction technology",
        "Eco-friendly cleaning solutions (Green Seal certified)",
        "Advanced stain removal techniques",
        "Fabric protection treatment"
      ],
      benefits: [
        "Extend carpet lifespan by up to 5 years",
        "Remove 98% of allergens and dust mites",
        "Eliminate odors with advanced deodorizing",
        "Protect fabrics with long-lasting treatments",
        "Improve indoor air quality significantly"
      ],
      process: [
        "Pre-inspection and fiber identification",
        "Pre-treatment of stains and high-traffic areas",
        "Deep cleaning with hot water extraction",
        "Spot treatment and fabric protection",
        "Post-cleaning inspection and drying verification"
      ],
      availability: "Same-day service available with 4-hour window"
    },
    {
      id: "sanitization",
      title: "Sanitization & Disinfection",
      description: "Professional sanitization services using hospital-grade disinfectants. Our certified team follows CDC and WHO guidelines to ensure maximum protection against pathogens.",
      icon: <Spray className="h-12 w-12 text-add8e6" />,
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "EPA-registered disinfectants",
        "Electrostatic spray technology",
        "UV-C disinfection systems",
        "Certified sanitization protocols"
      ],
      benefits: [
        "Eliminate 99.9% of viruses and bacteria",
        "Reduce cross-contamination risks",
        "Improve indoor air quality",
        "Comply with health regulations",
        "Protect against seasonal illnesses"
      ],
      process: [
        "Risk assessment and high-touch point identification",
        "Application of EPA-registered disinfectants",
        "Electrostatic spraying for complete coverage",
        "UV-C treatment for enhanced disinfection",
        "Post-treatment verification and certification"
      ],
      availability: "24/7 emergency sanitization services"
    },
    {
      id: "specialized",
      title: "Specialized Cleaning",
      description: "Custom cleaning solutions for unique environments. Our specialized team is trained to handle specific industry requirements with precision and attention to detail.",
      icon: <ShieldCheck className="h-12 w-12 text-add8e6" />,
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "Industry-specific certifications",
        "Custom cleaning protocols",
        "Specialized equipment and techniques",
        "Quality assurance system"
      ],
      benefits: [
        "Meet industry-specific compliance requirements",
        "Reduce operational risks",
        "Optimize cleaning efficiency",
        "Maintain specialized equipment",
        "Ensure consistent quality standards"
      ],
      process: [
        "Industry-specific needs assessment",
        "Custom protocol development",
        "Specialized team training",
        "Implementation with quality checks",
        "Regular performance evaluation"
      ],
      availability: "Custom scheduling based on industry requirements"
    },
  ]

  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Calculate total pages based on screen size
  const cardsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(services.length / cardsPerPage);

  // Navigation functions
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Get current cards
  const getCurrentCards = () => {
    const start = currentPage * cardsPerPage;
    return services.slice(start, start + cardsPerPage);
  };

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
                  Our Services
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight">
                Professional{" "}
                <span className="text-add8e6 relative">
                  Cleaning Services
                  <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full" />
                </span>
              </h1>
              <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                Comprehensive cleaning solutions tailored to your needs. From residential to commercial, 
                we deliver exceptional service with attention to detail and commitment to excellence.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-8">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center">
                  <div className="text-2xl md:text-3xl font-bold text-add8e6 mb-1 md:mb-2 flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-add8e6" />
                    <span className="group-hover:scale-110 transition-transform duration-300">6+</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    Service Categories
                  </div>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center">
                  <div className="text-2xl md:text-3xl font-bold text-add8e6 mb-1 md:mb-2 flex items-center justify-center gap-2">
                    <Users className="w-4 h-4 text-add8e6" />
                    <span className="group-hover:scale-110 transition-transform duration-300">200+</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    Happy Clients
                  </div>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center">
                  <div className="text-2xl md:text-3xl font-bold text-add8e6 mb-1 md:mb-2 flex items-center justify-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-add8e6" />
                    <span className="group-hover:scale-110 transition-transform duration-300">98%</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    Satisfaction Rate
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Services Overview */}
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
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium inline-flex items-center gap-2 mb-3 md:mb-4">
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                  What We Offer
                </span>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight">
                  Our Cleaning{" "}
                  <span className="text-add8e6 relative">
                    Solutions
                    <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full" />
                  </span>
                </h2>
                <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Discover our comprehensive range of professional cleaning services, tailored to meet your specific needs
                  and exceed your expectations.
                </p>
              </div>

              <div className="relative max-w-6xl mx-auto">
                {/* Navigation Buttons - Hidden on mobile */}
                <motion.button
                  onClick={prevPage}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-add8e6/50 hidden md:block"
                  aria-label="Previous services"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </motion.button>

                <motion.button
                  onClick={nextPage}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-add8e6/50 hidden md:block"
                  aria-label="Next services"
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
                      {getCurrentCards().map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.id}`}
                          className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-add8e6/50 focus:ring-offset-2 overflow-hidden"
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
                              className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-400 mb-4 md:mb-6"
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.2 }}
                            >
                      {service.description}
                            </motion.p>

                            {/* Features list */}
                            <div className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                              {service.features.slice(0, 4).map((feature, i) => (
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
                                  {service.availability || "Available 7 days a week"}
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
                    {Array.from({ length: services.length }).map((_, index) => (
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
                      className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50"
                      aria-label="Previous service"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    </motion.button>
                    
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {currentPage + 1} of {services.length}
                    </span>

                    <motion.button
                      onClick={nextPage}
                      className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50"
                      aria-label="Next service"
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
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Service Details */}
      {services.map((service, index) => (
        <div 
          key={service.id} 
          id={service.id}
          className="relative py-16 md:py-24 scroll-mt-24"
        >
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
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  <motion.div 
                    className={`order-2 lg:order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div 
                          className="bg-add8e6/10 p-3 rounded-xl"
                          whileHover={{ 
                            scale: 1.1,
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.5 }
                          }}
                        >
                          {service.icon}
                        </motion.div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                          {service.title}
                    </h2>
                      </div>
                      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-8">
                      {service.description}
                    </p>

                      <div className="space-y-6 md:space-y-8">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-add8e6 rounded-full"></span>
                            Key Features
                          </h3>
                          <ul className="space-y-2 md:space-y-3">
                            {service.features.map((feature, i) => (
                              <motion.li 
                                key={i} 
                                className="flex items-center text-sm md:text-base text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-700/30 rounded-lg p-3 backdrop-blur-sm"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                whileHover={{ 
                                  x: 4,
                                  backgroundColor: 'rgba(173, 216, 230, 0.1)',
                                  transition: { duration: 0.2 }
                                }}
                              >
                                <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2 flex-shrink-0" />
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-add8e6 rounded-full"></span>
                            Benefits
                          </h3>
                          <ul className="space-y-2 md:space-y-3">
                            {service.benefits.map((benefit, i) => (
                              <motion.li 
                                key={i} 
                                className="flex items-center text-sm md:text-base text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-700/30 rounded-lg p-3 backdrop-blur-sm"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                whileHover={{ 
                                  x: 4,
                                  backgroundColor: 'rgba(173, 216, 230, 0.1)',
                                  transition: { duration: 0.2 }
                                }}
                              >
                                <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2 flex-shrink-0" />
                                {benefit}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-add8e6 rounded-full"></span>
                            Our Process
                          </h3>
                          <div className="relative">
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-add8e6/20"></div>
                            <ul className="space-y-4">
                              {service.process.map((step, i) => (
                                <motion.li 
                                  key={i} 
                                  className="flex items-start text-sm md:text-base text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-700/30 rounded-lg p-3 backdrop-blur-sm relative"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.3, delay: i * 0.1 }}
                                  whileHover={{ 
                                    x: 4,
                                    backgroundColor: 'rgba(173, 216, 230, 0.1)',
                                    transition: { duration: 0.2 }
                                  }}
                                >
                                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-add8e6/10 flex items-center justify-center">
                                    <span className="text-add8e6 font-semibold">{i + 1}</span>
                                  </div>
                                  <span className="ml-8">{step}</span>
                                </motion.li>
                            ))}
                          </ul>
                        </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className={`relative h-[300px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl group ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                      <Image 
                      src={service.image}
                        alt={service.title} 
                        fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20">
                      <motion.div 
                        className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 md:p-4 rounded-xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <div className="flex items-center justify-between">
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                          Professional {service.title.toLowerCase()} services
                          </p>
                          <span className="text-xs md:text-sm text-add8e6 font-medium">
                            {service.availability}
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
      ))}
      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Trusted Clients Section */}
      <TrustedClients />
    </div>
  )
}
