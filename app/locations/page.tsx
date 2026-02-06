"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import OpenStreetMap from "@/components/openstreet-map"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { motion } from "framer-motion"
import ContactForm from "@/components/home/contact-form"
import React from "react"
// Unique icons from different icon libraries - matching home page style
import { MdLocationOn } from "react-icons/md" // Material Design - Location (for badge and main location)
import { HiPhone } from "react-icons/hi2" // Heroicons v2 - Phone
import { HiClock } from "react-icons/hi2" // Heroicons v2 - Clock
import BreadcrumbSchema, { breadcrumbConfigs } from "@/components/schema/breadcrumb-schema"

const MotionImage = motion(Image)

// Animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

export default function LocationsPage() {
  const locations = [
    {
      id: "mombasa",
      name: "Mombasa (Headquarters)",
      address: "New Canon Towers, Moi Avenue, Mombasa | P.O. Box: 93169-80102",
      phone: "+254 721525901",
      emergencyPhone: "041-2316600",
      whatsapp: "+254 721525901",
      hours: "Mon-Fri: 7am-5pm, Sat: 7am-2pm",
      image: "/locations/mombasa.webp",
      description:
        "Our headquarters and the heart of Simca Agencies since 2005. From here, we serve Kenya's leading institutions including Kenya Ports Authority, Kenya Maritime Authority, and Mombasa Polytechnic University. Our trained teams deliver world-class cleaning standards with modern equipment, eco-friendly products, and comprehensive insurance coverage.",
      valueProposition: "Headquarters serving Kenya's leading coastal institutions",
      specialServices: [
        "Contract cleaning for hospitals, hotels, and government offices",
        "Specialized cleaning including carpet, window, and post-construction",
        "Hygiene supplies and sanitary solutions",
        "Labour outsourcing with trained, disciplined staff",
      ],
      certifications: ["OHS Compliant", "Fully Insured", "Trained Kenyan Staff"],
      localExpertise: "Serving hospitals, hotels, government, schools, and industrial facilities",
      serviceAreas: "Mombasa CBD, Nyali, Bamburi, Shanzu, and surrounding areas",
      responseTime: "Fast response to client needs",
    },
    {
      id: "kisumu",
      name: "Kisumu",
      address: "Kisumu CBD, Kisumu County, Kenya",
      phone: "+254 721525901",
      emergencyPhone: "041-2316600",
      whatsapp: "+254 721525901",
      hours: "Mon-Fri: 7am-5pm, Sat: 7am-2pm",
      image: "/locations/kisumu.webp",
      description:
        "Bringing world-class cleaning standards to the vibrant lakeside city. Our trained teams serve hospitals, hotels, schools, and commercial facilities with the same dedication and professionalism that has made Simca Agencies a trusted name since 2005. We care for your space with eco-friendly products and modern equipment.",
      valueProposition: "Professional cleaning services for the Lake Region",
      specialServices: [
        "Contract cleaning for hospitals, hotels, and institutions",
        "Specialized deep cleaning and floor maintenance",
        "Hygiene supplies and sanitary solutions",
        "Trained staff placement and labour outsourcing",
      ],
      certifications: ["OHS Compliant", "Fully Insured", "Trained Kenyan Staff"],
      localExpertise: "Serving hospitals, hotels, schools, and commercial facilities",
      serviceAreas: "Kisumu CBD, Milimani, Nyalenda, and surrounding areas",
      responseTime: "Fast response to client needs",
    },
    {
      id: "lamu",
      name: "Lamu",
      address: "Lamu Island, Lamu County, Kenya",
      phone: "+254 721525901",
      emergencyPhone: "041-2316600",
      whatsapp: "+254 721525901",
      hours: "Mon-Fri: 7am-5pm, Sat: 7am-2pm",
      image: "/locations/lamu.webp",
      description:
        "Preserving heritage while maintaining modern cleanliness standards in this UNESCO World Heritage site. Our trained teams understand the unique requirements of coastal properties and heritage buildings, delivering professional cleaning with cultural sensitivity and genuine care for your space.",
      valueProposition: "Professional cleaning for heritage and coastal properties",
      specialServices: [
        "Contract cleaning for hotels and hospitality venues",
        "Heritage building maintenance with care",
        "Coastal property cleaning and upkeep",
        "Hygiene supplies and sanitary solutions",
      ],
      certifications: ["OHS Compliant", "Fully Insured", "Trained Kenyan Staff"],
      localExpertise: "Serving hotels, heritage properties, and coastal facilities",
      serviceAreas: "Lamu Old Town, Shela, Manda Island, and surrounding areas",
      responseTime: "Fast response to client needs",
    },
    {
      id: "lodwar",
      name: "Lodwar",
      address: "Lodwar Town, Turkana County, Kenya",
      phone: "+254 721525901",
      emergencyPhone: "041-2316600",
      whatsapp: "+254 721525901",
      hours: "Mon-Fri: 7am-5pm, Sat: 7am-2pm",
      image: "/locations/lodwar.webp",
      description:
        "Serving Northern Kenya with the same professional standards and genuine care that defines Simca Agencies. Our trained teams understand the unique challenges of the arid climate, delivering reliable cleaning services for government offices, healthcare facilities, and commercial buildings with modern equipment and eco-friendly products.",
      valueProposition: "Professional cleaning services for Northern Kenya",
      specialServices: [
        "Contract cleaning for government and institutional facilities",
        "Healthcare facility cleaning and sanitization",
        "Commercial building maintenance",
        "Hygiene supplies and sanitary solutions",
      ],
      certifications: ["OHS Compliant", "Fully Insured", "Trained Kenyan Staff"],
      localExpertise: "Serving government offices, healthcare facilities, and commercial buildings",
      serviceAreas: "Lodwar Town, Turkana County, and surrounding areas",
      responseTime: "Fast response to client needs",
    },
    {
      id: "kaimosi",
      name: "Kaimosi",
      address: "Kaimosi Town, Vihiga County, Western Kenya",
      phone: "+254 721525901",
      emergencyPhone: "041-2316600",
      whatsapp: "+254 721525901",
      hours: "Mon-Fri: 7am-5pm, Sat: 7am-2pm",
      image: "/locations/kaimosi.webp",
      description:
        "We are honored to support the places that matter most in Western Kenya. Our trained teams provide professional cleaning services for schools, universities, healthcare facilities, and community institutions with the same dedication, eco-friendly products, and modern equipment that has made Simca Agencies a trusted name since 2005.",
      valueProposition: "Professional cleaning for educational and healthcare facilities",
      specialServices: [
        "Contract cleaning for schools and universities",
        "Healthcare facility cleaning and sanitization",
        "Institutional building maintenance",
        "Hygiene supplies and sanitary solutions",
      ],
      certifications: ["OHS Compliant", "Fully Insured", "Trained Kenyan Staff"],
      localExpertise: "Serving schools, universities, and healthcare facilities",
      serviceAreas: "Kaimosi Town, Vihiga County, and surrounding areas",
      responseTime: "Fast response to client needs",
    },
  ]

  // Animation variants for the hero section (copied from about page)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }
  // Use a hero image relevant to locations (or fallback to about page image)
  const heroImage = {
    src: "/locations/locations-hero.webp", // Now matches the about page hero image
    alt: "Simca Agencies - Service Locations in Kenya",
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      {/* Schema Markup for AI Search Optimization (GEO) */}
      <BreadcrumbSchema items={breadcrumbConfigs.locations} />
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Image */}
        <MotionImage
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 relative flex-grow flex flex-col justify-center">
          <div className="flex flex-col items-center">
            {/* Centered Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <motion.div
                variants={itemVariants}
                className="inline-block mb-6 sm:mb-4 md:mb-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2">
                  <MdLocationOn className="w-3.5 h-3.5" />
                  National Coverage
                </span>
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-wide"
              >
                Our Service{" "}
                <span className="text-fff relative inline-block">
                  Locations
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
                variants={itemVariants}
                className="font-body text-base md:text-lg lg:text-xl text-gray-200 tracking-wide mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                Professional cleaning excellence from Mombasa to communities across Kenya—trained teams ready to serve you.
              </motion.p>
              
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact-form')
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
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  Call Us Now
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Kenya Map Overview */}
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
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 md:mb-12">
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 rounded-full text-xs font-medium inline-flex items-center gap-2 mb-6 md:mb-6 shadow-sm">
                  <MdLocationOn className="w-3.5 h-3.5" />
                  Our Presence
                </span>
                <motion.h2 
                  className="font-heading text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 md:mb-6 leading-tight tracking-wide mt-0 !mt-0"
                >
                  <span className="block md:inline md:mb-0 mb-1">Nationwide</span>
                  <span className="text-add8e6 relative inline-block md:inline md:ml-2 block mb-1 md:mb-0">
                    Cleaning Excellence
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
                <p className="font-body text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  From Mombasa to communities across Kenya, our trained teams deliver professional cleaning to hospitals, hotels, schools, and institutions.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                <div className="order-2 lg:order-1">
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800/50">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-5 md:mb-6">
                      {locations.map((location) => (
                        <Link
                          key={location.id}
                          href={`#${location.id}`}
                          className="group flex items-start gap-2.5 p-3 md:p-3.5 rounded-lg hover:bg-add8e6/5 dark:hover:bg-add8e6/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-add8e6/50 border border-transparent hover:border-add8e6/20"
                        >
                          <motion.div 
                            className="relative flex-shrink-0 mt-0.5"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                              <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover:border-add8e6/30 transition-all duration-300">
                                {React.createElement(MdLocationOn, { 
                                  className: 'h-3.5 w-3.5 text-add8e6 group-hover:scale-110 transition-transform duration-300'
                                })}
                              </div>
                            </div>
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                                              <h3 className="font-heading font-semibold text-sm md:text-base text-gray-900 dark:text-white group-hover:text-add8e6 transition-colors leading-tight">
                                {location.name}
                              </h3>
                            </div>
                                            <p className="font-body text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                              {(() => {
                                switch (location.name) {
                                  case "Mombasa":
                                    return "On the coast, we keep homes and businesses fresh and welcoming, no matter the season.";
                                  case "Kisumu":
                                    return "Bringing a fresh sparkle to the vibrant lakeside city, we serve homes and businesses with care and dedication.";
                                  case "Lamu":
                                    return "Preserving heritage while maintaining modern cleanliness standards in this UNESCO World Heritage site.";
                                  case "Lodwar":
                                    return "Serving Northern Kenya with specialized cleaning solutions for arid region facilities.";
                                  case "Kaimosi":
                                    return "We're honored to support the places that matter most, providing top-tier cleaning for schools and healthcare facilities.";
                                  default:
                                    return location.specialServices[0];
                                }
                              })()}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 group text-center text-xs sm:text-sm w-full focus:outline-none focus:ring-2 focus:ring-add8e6/50"
                    >
                      Get Local Cleaning Support
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
                <div className="order-1 lg:order-2 relative h-[300px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg group z-0 border border-gray-100 dark:border-gray-800/50">
                  <div className="absolute inset-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm flex items-center justify-center z-10 transition-opacity duration-300 map-loading">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-add8e6"></div>
                  </div>
                  <OpenStreetMap 
                    address="Kenya"
                    height="600px"
                    zoom={6}
                    markers={[
                      {
                        position: "Mombasa, Kenya",
                        popup: "Mombasa"
                      },
                      {
                        position: "Kisumu, Kenya",
                        popup: "Kisumu"
                      },
                      {
                        position: "Lamu, Kenya",
                        popup: "Lamu"
                      },
                      {
                        position: "Lodwar, Kenya",
                        popup: "Lodwar"
                      },
                      {
                        position: "Kaimosi, Kenya",
                        popup: "Kaimosi"
                      }
                    ]}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-20">
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2.5 md:p-3 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
                                      <h3 className="font-heading text-sm md:text-base font-bold text-gray-800 dark:text-white mb-1.5">Click on any marker to discover our local expertise</h3>
                                      <p className="font-body text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Each marker represents a trained team ready to serve you. Click a city to meet your local Simca experts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Individual Location Sections */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-12 md:py-16 lg:py-20 ">
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
              <div className="text-center mb-10 md:mb-12">
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 rounded-full text-xs font-medium inline-flex items-center gap-2 mb-6 md:mb-6 shadow-sm">
                  <MdLocationOn className="w-3.5 h-3.5" />
                  Local Expertise
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 md:mb-6 leading-tight tracking-wide mt-0 !mt-0" >
                  Our Service{" "}
                  <span className="text-add8e6 relative">
                    Locations
                    <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full" />
                  </span>
                </h2>
                <p className="font-body text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Local experts who understand the unique cleaning needs of each community.
                </p>
              </div>

              {locations.map((location, index) => (
                <div
                  key={location.id}
                  id={location.id}
                  className="relative py-8 md:py-12 lg:py-16 scroll-mt-24"
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
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                          <motion.div 
                            className={`order-2 lg:order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800/50">
                              <div className="flex items-center gap-3 mb-4">
                                <motion.div 
                                  className="relative flex-shrink-0"
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                                    <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover:border-add8e6/30 transition-all duration-300">
                                      {React.createElement(MdLocationOn, { 
                                        className: 'h-3.5 w-3.5 text-add8e6 group-hover:scale-110 transition-transform duration-300'
                                      })}
                                    </div>
                                  </div>
                                </motion.div>
                                <h2 className="font-heading text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                                  {location.name}
                                </h2>
                              </div>
                              <p className="font-body text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 md:mb-5 leading-relaxed">
                                {location.description}
                              </p>

                              <div className="space-y-4 md:space-y-5">
                                <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                  <h3 className="font-heading text-sm md:text-base font-semibold text-gray-900 dark:text-white mb-2 md:mb-2.5 flex items-center gap-2">
                                    <span className="w-1 h-1 bg-add8e6 rounded-full"></span>
                                    Contact Information
                                  </h3>
                                  <div className="space-y-2">
                                    <motion.div 
                                      className="group flex items-center text-sm text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-700/30 rounded-lg p-2 backdrop-blur-sm border border-transparent hover:border-add8e6/20 transition-all duration-200"
                                      whileHover={{ 
                                        x: 3,
                                        backgroundColor: 'rgba(173, 216, 230, 0.1)',
                                        transition: { duration: 0.2 }
                                      }}
                                    >
                                      <motion.div 
                                        className="relative flex-shrink-0 mr-2"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        <div className="relative">
                                          <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                                          <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover:border-add8e6/30 transition-all duration-300">
                                            {React.createElement(MdLocationOn, { 
                                              className: 'h-3.5 w-3.5 text-add8e6 group-hover:scale-110 transition-transform duration-300'
                                            })}
                                          </div>
                                        </div>
                                      </motion.div>
                                      <span className="font-body flex-1">{location.address}</span>
                                    </motion.div>
                                    <motion.div 
                                      className="group flex items-center text-sm text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-700/30 rounded-lg p-2 backdrop-blur-sm border border-transparent hover:border-add8e6/20 transition-all duration-200"
                                      whileHover={{ 
                                        x: 3,
                                        backgroundColor: 'rgba(173, 216, 230, 0.1)',
                                        transition: { duration: 0.2 }
                                      }}
                                    >
                                      <motion.div 
                                        className="relative flex-shrink-0 mr-2"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        <div className="relative">
                                          <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                                          <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover:border-add8e6/30 transition-all duration-300">
                                            {React.createElement(HiPhone, { 
                                              className: 'h-3.5 w-3.5 text-add8e6 group-hover:scale-110 transition-transform duration-300'
                                            })}
                                          </div>
                                        </div>
                                      </motion.div>
                                      <div className="font-body flex-1">
                                        <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="hover:text-add8e6 transition-colors">{location.phone}</a>
                                        <span className="mx-1.5 text-gray-400">/</span>
                                        <a href={`tel:${location.emergencyPhone.replace(/\s/g, '')}`} className="hover:text-add8e6 transition-colors">{location.emergencyPhone}</a>
                                      </div>
                                    </motion.div>
                                    <motion.div 
                                      className="group flex items-center text-sm text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-700/30 rounded-lg p-2 backdrop-blur-sm border border-transparent hover:border-add8e6/20 transition-all duration-200"
                                      whileHover={{ 
                                        x: 3,
                                        backgroundColor: 'rgba(173, 216, 230, 0.1)',
                                        transition: { duration: 0.2 }
                                      }}
                                    >
                                      <motion.div 
                                        className="relative flex-shrink-0 mr-2"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        <div className="relative">
                                          <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                                          <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover:border-add8e6/30 transition-all duration-300">
                                            {React.createElement(HiClock, { 
                                              className: 'h-3.5 w-3.5 text-add8e6 group-hover:scale-110 transition-transform duration-300'
                                            })}
                                          </div>
                                        </div>
                                      </motion.div>
                                      <span className="font-body flex-1">{location.hours}</span>
                                    </motion.div>
                                  </div>
                                </motion.div>

                                {/* Get a Quote Button */}
                                <button
                                  onClick={() => {
                                    const contactSection = document.getElementById('contact-form')
                                    if (contactSection) {
                                      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                    }
                                  }}
                                  className="font-body w-full inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 font-semibold transition-all duration-300 group text-sm tracking-wide rounded-lg shadow-lg hover:shadow-xl mt-4"
                                >
                                  Get a Free Quote
                                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                              </div>
                            </div>
                          </motion.div>

                          <motion.div 
                            className={`relative h-[250px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg group border border-gray-100 dark:border-gray-800/50 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                            <Image 
                              src={location.image}
                              alt={location.name} 
                              fill 
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </motion.div>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      <ContactForm />
    </div>
  )
}
