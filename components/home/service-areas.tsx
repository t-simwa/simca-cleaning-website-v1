"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, ArrowRight, Star, TrendingUp, Users, Clock, CheckCircle2, Search, Filter, ChevronDown, Phone, Mail } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import OpenStreetMap from "@/components/openstreet-map"

export default function ServiceAreas() {
  const [selectedLocation, setSelectedLocation] = useState("Nairobi")
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])

  const filters = [
    { id: "all", label: "All Areas" },
    { id: "major", label: "Major Cities" },
    { id: "coastal", label: "Coastal" },
    { id: "western", label: "Western" },
    { id: "rift", label: "Rift Valley" },
  ]

  const locations = [
    {
      id: "Nairobi",
      name: "Nairobi",
      image: "/nairobi.jpg",
      description: "Our headquarters and primary service area, covering all major neighborhoods and suburbs.",
      address: "Kimathi Street, CBD, Nairobi",
      phone: "+254 721525901",
      email: "nairobi@simcacleaning.co.ke",
      hours: "Mon-Fri: 8am-5pm, Sat: 9am-1pm",
      areas: ["Westlands", "Kilimani", "Karen", "Lavington", "Runda", "Gigiri"],
    },
    {
      id: "Mombasa",
      name: "Mombasa",
      image: "/mombasa.jpg",
      description: "Serving the coastal region with specialized cleaning services for hotels and resorts.",
      address: "Digo Road, Mombasa",
      phone: "+254 721525901",
      email: "mombasa@simcacleaning.co.ke",
      hours: "Mon-Fri: 8am-5pm, Sat: 9am-1pm",
      areas: ["Nyali", "Bamburi", "Shanzu", "Diani", "Malindi"],
    },
    {
      id: "Kisumu",
      name: "Kisumu",
      image: "/kisumu.jpg",
      description: "Expanding our services to the Lake Region with a focus on commercial properties.",
      address: "Oginga Odinga Street, Kisumu",
      phone: "+254 721525901",
      email: "kisumu@simcacleaning.co.ke",
      hours: "Mon-Fri: 8am-5pm, Sat: 9am-1pm",
      areas: ["Milimani", "Lolwe", "Kibos", "Nyalenda"],
    },
    {
      id: "Nakuru",
      name: "Nakuru",
      image: "/nakuru.webp",
      description: "Providing comprehensive cleaning services in the Rift Valley region.",
      address: "Kenyatta Avenue, Nakuru",
      phone: "+254 721525901",
      email: "nakuru@simcacleaning.co.ke",
      hours: "Mon-Fri: 8am-5pm, Sat: 9am-1pm",
      areas: ["Milimani", "Section 58", "Prestige", "Freehold"],
    },
  ]

  const filteredLocations = locations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         location.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = activeFilter === "all" || location.id === activeFilter
    return matchesSearch && matchesFilter
  })

  // Get only the first 4 locations
  const displayedLocations = filteredLocations.slice(0, 4)

  const selectedLocationData = locations.find(loc => loc.id === selectedLocation)

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

      <div ref={containerRef} className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          style={{ opacity, scale }}
        >
          <motion.div 
            className="inline-block mb-3 sm:mb-4 md:mb-6 mt-0 !mt-0"
            whileTap={{ scale: 0.95 }}
          >
            <span className="bg-gradient-to-r from-add8e6/20 to-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm mt-0 !mt-0 backdrop-blur-sm">
              <MapPin className="w-4 h-4" />
              Nationwide Coverage
            </span>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight tracking-wide mt-0 !mt-0"
            
          >
            Our Service{" "}
            <motion.span 
              className="text-add8e6 relative inline-block tracking-wider"
              style={{
                textShadow: "0 2px 4px rgba(173,216,230,0.3)",
                WebkitTextStroke: "0.5px rgba(173,216,230,0.3)"
              }}
            >
              Areas
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-add8e6/40 to-add8e6/20 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.span>
          </motion.h2>

          <motion.p 
            className="text-base md:text-xl text-gray-600 dark:text-gray-300 tracking-wide mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Providing professional cleaning services across Kenya with local expertise and nationwide standards
          </motion.p>
        </motion.div>

        {/* Location Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {locations.map((location) => (
            <motion.button
              key={location.id}
              onClick={() => setSelectedLocation(location.id)}
              className={`group flex items-center gap-2 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                selectedLocation === location.id
                  ? "bg-gradient-to-r from-add8e6 to-add8e6/90 text-white shadow-lg shadow-add8e6/20"
                  : "bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 backdrop-blur-sm"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin className="w-4 h-4" />
              {location.name}
            </motion.button>
          ))}
        </div>

        {/* Location Details */}
        <AnimatePresence mode="wait">
          {selectedLocationData && (
            <motion.div 
              key={selectedLocationData.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
            >
              {/* Image */}
              <motion.div 
                className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={selectedLocationData.image}
                  alt={`${selectedLocationData.name} cleaning services`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.h3 
                    className="text-2xl md:text-3xl font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {selectedLocationData.name}
                  </motion.h3>
                  <motion.p 
                    className="text-white/90 text-sm md:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {selectedLocationData.description}
                  </motion.p>
                </div>
              </motion.div>

              {/* Details */}
              <motion.div 
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg h-full min-h-[500px] flex flex-col"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4 md:space-y-6 flex-grow">
                  {/* Contact Info */}
                  <div className="space-y-3 md:space-y-4">
                    <motion.div 
                      className="flex items-start gap-3 md:gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="bg-gradient-to-br from-add8e6/20 to-add8e6/10 p-2 md:p-3 rounded-lg">
                        <MapPin className="w-4 h-4 md:w-5 md:h-5 text-add8e6" />
                      </div>
                      <div>
                        <h4 className="text-sm md:text-base font-medium text-gray-800 dark:text-white mb-1">Address</h4>
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                          {selectedLocationData.address}
                        </p>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-start gap-3 md:gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="bg-gradient-to-br from-add8e6/20 to-add8e6/10 p-2 md:p-3 rounded-lg">
                        <Phone className="w-4 h-4 md:w-5 md:h-5 text-add8e6" />
                      </div>
                      <div>
                        <h4 className="text-sm md:text-base font-medium text-gray-800 dark:text-white mb-1">Phone</h4>
                        <a
                          href={`tel:${selectedLocationData.phone}`}
                          className="text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-add8e6 transition-colors"
                        >
                          {selectedLocationData.phone}
                        </a>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-start gap-3 md:gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="bg-gradient-to-br from-add8e6/20 to-add8e6/10 p-2 md:p-3 rounded-lg">
                        <Mail className="w-4 h-4 md:w-5 md:h-5 text-add8e6" />
                      </div>
                      <div>
                        <h4 className="text-sm md:text-base font-medium text-gray-800 dark:text-white mb-1">Email</h4>
                        <a
                          href={`mailto:${selectedLocationData.email}`}
                          className="text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-add8e6 transition-colors"
                        >
                          {selectedLocationData.email}
                        </a>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-start gap-3 md:gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="bg-gradient-to-br from-add8e6/20 to-add8e6/10 p-2 md:p-3 rounded-lg">
                        <Clock className="w-4 h-4 md:w-5 md:h-5 text-add8e6" />
                      </div>
                      <div>
                        <h4 className="text-sm md:text-base font-medium text-gray-800 dark:text-white mb-1">Hours</h4>
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                          {selectedLocationData.hours}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Service Areas */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h4 className="text-sm md:text-base font-medium text-gray-800 dark:text-white mb-3 md:mb-4">
                      Service Areas
                    </h4>
                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                      {selectedLocationData.areas.map((area, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-2 text-sm md:text-base text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-700/30 rounded-lg p-2 backdrop-blur-sm"
                          whileHover={{ 
                            x: 4,
                            scale: 1.02,
                            backgroundColor: 'rgba(173, 216, 230, 0.1)',
                            transition: { duration: 0.2 }
                          }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
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
                          {area}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* CTA Button */}
                <motion.div 
                  className="pt-4 md:pt-6 border-t border-gray-100 dark:border-gray-700 mt-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.div>
                    <Link
                      href={`/contact?location=${selectedLocationData.id.toLowerCase()}`}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-add8e6 to-add8e6/80 text-white px-6 md:px-8 py-2.5 md:py-3 font-medium transition-all duration-300 group text-center text-xs sm:text-sm tracking-wide border-b-2 border-transparent hover:border-white/50"
                    >
                      Get a Quote
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
