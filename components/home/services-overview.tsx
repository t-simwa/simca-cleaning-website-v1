"use client"

import Link from "next/link"
import { ArrowRight, LucideProps } from "lucide-react"
import React from "react"
// Unique icons from different icon libraries
import { FaBuilding } from "react-icons/fa" // Font Awesome - Building
import { MdCleaningServices } from "react-icons/md" // Material Design - Cleaning
import { FaPumpSoap } from "react-icons/fa" // Font Awesome - Hygiene
import { FaLeaf } from "react-icons/fa" // Font Awesome - Leaf
import { FaUsers } from "react-icons/fa" // Font Awesome - Staff/Labour
import { MdStars } from "react-icons/md" // Material Design - Specialized
import { HiShieldCheck } from "react-icons/hi2" // Heroicons v2 - Shield
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
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
  const [activeTab, setActiveTab] = useState("all")

  const services: Service[] = [
    {
      title: "Contract Cleaning",
      description: "Daily maintenance cleaning for hospitals, hotels, government offices, schools, industrial premises, and commercial buildings. Our trained staff deliver consistent, quality results you can count on.",
      icon: FaBuilding,
      link: "/services/contract-cleaning",
      image: "/services/commercial-service.png",
      features: [
        "Hospitals and healthcare facilities",
        "Hotels and hospitality venues",
        "Government and institutional offices",
        "Schools, colleges, and industrial premises"
      ],
      category: "commercial",
      rating: 4.9,
      reviews: 128,
      availability: "Flexible scheduling around your operations"
    },
    {
      title: "Specialized Cleaning",
      description: "Expert deep cleaning services using modern equipment. From carpet care to post-construction cleanup, our skilled team handles every detail with professionalism and care.",
      icon: MdCleaningServices,
      link: "/services/specialized",
      image: "/services/carpet-cleaning.jpeg",
      features: [
        "Carpet and upholstery deep cleaning",
        "Strip and seal of floors, buffing, and polishing",
        "High-pressure and window cleaning",
        "Post-construction and flood/fire restoration"
      ],
      category: "specialized",
      rating: 4.8,
      reviews: 112,
      availability: "One-time or scheduled deep cleans"
    },
    {
      title: "Hygiene Supplies",
      description: "Complete hygiene solutions for your facility. We supply and service quality dispensers, sanitary products, and consumables to keep your spaces fresh, clean, and welcoming.",
      icon: FaPumpSoap,
      link: "/services/hygiene-supplies",
      image: "/services/residential-cleaning.webp",
      features: [
        "Towel dispensers and hand dryers",
        "Soap dispensers and sanitary bins",
        "Air fresheners and sanitizers",
        "Toilet rolls, paper towels, and liquid soap"
      ],
      category: "supplies",
      rating: 4.8,
      reviews: 95,
      availability: "Regular supply and restocking services"
    },
    {
      title: "Landscaping & Gardening",
      description: "Beautiful, well-maintained outdoor spaces that reflect the care you put into your facility. From grounds maintenance to office plant care, we help your environment thrive.",
      icon: FaLeaf,
      link: "/services/landscaping-services",
      image: "/services/landscaping.webp",
      features: [
        "Grounds maintenance and lawn care",
        "Office plant supply and care",
        "Garden design and upkeep",
        "Seasonal planting and maintenance"
      ],
      category: "specialized",
      rating: 4.7,
      reviews: 76,
      availability: "Flexible scheduling, including weekends"
    },
    {
      title: "Labour Outsourcing",
      description: "Access trained, reliable cleaning staff and machine operators when you need them. Whether permanent or temporary, we provide skilled personnel who meet our high standards.",
      icon: FaUsers,
      link: "/services/labour-outsourcing",
      image: "/commercial/commercial-01.webp",
      features: [
        "Trained cleaning staff placement",
        "Skilled machine operators",
        "Permanent and temporary recruitment",
        "Supervised and quality-assured teams"
      ],
      category: "staffing",
      rating: 4.9,
      reviews: 89,
      availability: "Flexible staffing solutions"
    },
  ]

  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(service => service.category === activeTab)

  const categories = [
    { id: "all", label: "All Services", icon: MdStars, description: "Complete range of professional cleaning solutions" },
    { id: "commercial", label: "Contract Cleaning", icon: FaBuilding, description: "Daily maintenance for institutions" },
    { id: "specialized", label: "Specialized", icon: MdCleaningServices, description: "Deep cleaning and restoration" },
    { id: "supplies", label: "Hygiene Supplies", icon: FaPumpSoap, description: "Dispensers and consumables" },
    { id: "staffing", label: "Labour Outsourcing", icon: FaUsers, description: "Trained staff placement" },
  ]

  return (
    <section className="relative py-12 md:py-16 lg:py-20">
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
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 mt-0">
          <motion.div 
            className="inline-block mb-6 sm:mb-4 md:mb-6 mt-0 !mt-0"
            whileHover={undefined}
            whileTap={undefined}
          >
            <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2 shadow-sm mt-0 !mt-0">
              <HiShieldCheck className="w-3.5 h-3.5" />
              Our Services
            </span>
          </motion.div>

          <motion.h2 
            className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-6 md:mb-6 leading-tight tracking-wide mt-0 !mt-0"
          >
            <span className="block mb-1">Complete Cleaning &</span>
            <span className="text-add8e6 relative inline-block block mb-1 ml-2">
              Facility Solutions
              <motion.span
                className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut' }}
                style={{ display: 'block' }}
              />
            </span>
            <span className="inline-block ml-2">You Can Rely On</span>
          </motion.h2>

          <motion.p 
            className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            From daily maintenance to specialized deep cleaning, hygiene supplies to trained staff placement. We provide everything your facility needs to stay clean, safe, and welcoming.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="relative max-w-6xl mx-auto">
          {/* Show all cards in grid - single column on mobile, multi-column on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {filteredServices.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group relative bg-white dark:bg-gray-900/50 rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-add8e6/30 focus:ring-offset-1 w-full overflow-hidden border border-gray-100 dark:border-gray-800/50"
              >
                <div className="flex flex-col h-full relative z-10">
                  {/* Service Image - Compact and elegant */}
                  <div className="relative w-full h-32 mb-3 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800/50">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={85}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                    {/* Icon overlay - positioned top right */}
                    <div className="absolute top-2 right-2">
                      <motion.div 
                        className="relative"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="relative">
                          <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90 rounded-md blur-sm" />
                          <div className="relative p-1.5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-md border border-add8e6/20">
                            {React.createElement(service.icon, { 
                              className: 'h-3 w-3 text-add8e6'
                            })}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-sm font-semibold text-gray-900 dark:text-white mb-1.5 group-hover:text-add8e6 transition-colors duration-200 leading-tight"
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-xs text-gray-600 dark:text-gray-400 mb-3 leading-relaxed"
                  >
                    {service.description}
                  </p>

                  {/* CTA Link */}
                  <div className="mt-auto pt-2 border-t border-gray-100 dark:border-gray-800/50">
                    <span 
                      className="text-xs text-add8e6 font-medium group-hover:gap-1.5 flex items-center gap-1 transition-all duration-200"
                    >
                      Learn more
                      <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
