"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Clock, Users, CheckCircle2, ArrowRight } from "lucide-react"
import OpenStreetMap from "@/components/openstreet-map"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { motion } from "framer-motion"

export default function LocationsPage() {
  const locations = [
    {
      id: "nairobi",
      name: "Nairobi",
      address: "Kimathi Street, Central Business District, Nairobi, Kenya",
      phone: "+254 700 123 456",
      emergencyPhone: "+254 733 123 456",
      whatsapp: "+254 700 123 456",
      hours: "Mon-Fri: 8am-5pm, Sat: 9am-1pm",
      emergencyHours: "24/7 Emergency Service Available",
      image: "/locations/nairobi.jpg",
      description:
        "As Kenya's leading cleaning service provider in the capital, we deliver premium cleaning solutions tailored to Nairobi's dynamic business environment. Our team of certified professionals specializes in high-rise maintenance, corporate facilities, and luxury residential properties, ensuring the highest standards of cleanliness and hygiene.",
      valueProposition: "Trusted by 200+ corporate clients in Nairobi's CBD",
      specialServices: [
        "High-rise window cleaning with certified safety protocols",
        "Corporate office maintenance with green cleaning certification",
        "Luxury apartment complex services with 24/7 availability",
        "Event venue cleaning with rapid response teams",
      ],
      certifications: ["ISO 9001", "Green Cleaning Certified", "Safety First Certified"],
      localExpertise: "Specialized in high-rise buildings and corporate facilities",
      serviceAreas: "CBD, Westlands, Kilimani, Lavington, Karen, and surrounding areas",
      responseTime: "30 minutes for emergency services",
    },
    {
      id: "mombasa",
      name: "Mombasa",
      address: "Moi Avenue, Mombasa CBD, Mombasa County, Kenya",
      phone: "+254 700 789 012",
      emergencyPhone: "+254 733 789 012",
      whatsapp: "+254 700 789 012",
      hours: "Mon-Fri: 8am-5pm, Sat: 9am-1pm",
      emergencyHours: "24/7 Emergency Service Available",
      image: "/locations/mombasa.jpg",
      description:
        "Mombasa's premier cleaning service provider, specializing in coastal property maintenance. Our expert team understands the unique challenges of the coastal environment, offering specialized solutions for salt damage prevention, humidity control, and tropical climate maintenance.",
      valueProposition: "Leading provider of coastal property maintenance in Mombasa",
      specialServices: [
        "Salt residue removal with specialized equipment",
        "Luxury hotel and resort cleaning with international standards",
        "Beach property maintenance with anti-corrosion treatment",
        "Humidity damage prevention with advanced dehumidification",
      ],
      certifications: ["Coastal Property Specialist", "Hotel Cleaning Certified", "Environmental Safety Certified"],
      localExpertise: "Experts in coastal property maintenance and hospitality cleaning",
      serviceAreas: "CBD, Nyali, Bamburi, Shanzu, and surrounding areas",
      responseTime: "45 minutes for emergency services",
    },
    {
      id: "kisumu",
      name: "Kisumu",
      address: "Oginga Odinga Street, Kisumu CBD, Kisumu County, Kenya",
      phone: "+254 700 234 567",
      emergencyPhone: "+254 733 234 567",
      whatsapp: "+254 700 234 567",
      hours: "Mon-Fri: 8am-5pm, Sat: 9am-1pm",
      emergencyHours: "24/7 Emergency Service Available",
      image: "/locations/kisumu.jpg",
      description:
        "Kisumu's trusted cleaning partner, delivering specialized services for lakeside properties and industrial facilities. Our team combines local expertise with advanced cleaning technologies to maintain the highest standards in the Lake Region's unique environment.",
      valueProposition: "Preferred cleaning partner for lakeside properties in Kisumu",
      specialServices: [
        "Lakeside property maintenance with specialized equipment",
        "Industrial facility cleaning with safety certification",
        "Hospitality sector services with international standards",
        "Marina and dock cleaning with environmental compliance",
      ],
      certifications: ["Industrial Cleaning Certified", "Environmental Compliance", "Safety First Certified"],
      localExpertise: "Specialists in lakeside property maintenance and industrial cleaning",
      serviceAreas: "CBD, Milimani, Nyalenda, and surrounding areas",
      responseTime: "40 minutes for emergency services",
    },
    {
      id: "nakuru",
      name: "Nakuru",
      address: "Kenyatta Avenue, Nakuru CBD, Nakuru County, Kenya",
      phone: "+254 700 345 678",
      emergencyPhone: "+254 733 345 678",
      whatsapp: "+254 700 345 678",
      hours: "Mon-Fri: 8am-5pm, Sat: 9am-1pm",
      emergencyHours: "24/7 Emergency Service Available",
      image: "/locations/nakuru.webp",
      description:
        "Nakuru's leading cleaning service provider, specializing in agricultural and industrial facility maintenance. Our expert team understands the unique requirements of the Rift Valley's agricultural sector, providing specialized cleaning solutions for processing plants and warehouses.",
      valueProposition: "Trusted cleaning partner for agricultural facilities in Nakuru",
      specialServices: [
        "Agricultural facility cleaning with food safety certification",
        "Processing plant maintenance with industry standards",
        "Warehouse cleaning with specialized equipment",
        "Industrial equipment cleaning with safety protocols",
      ],
      certifications: ["Food Safety Certified", "Industrial Cleaning Certified", "Safety First Certified"],
      localExpertise: "Experts in agricultural and industrial facility cleaning",
      serviceAreas: "CBD, Industrial Area, Lanet, and surrounding areas",
      responseTime: "35 minutes for emergency services",
    },
    {
      id: "kaimosi",
      name: "Kaimosi",
      address: "Kaimosi Friends University, Kaimosi Town, Vihiga County, Western Kenya",
      phone: "+254 700 345 678",
      emergencyPhone: "+254 733 345 678",
      whatsapp: "+254 700 345 678",
      hours: "Mon-Fri: 8am-5pm, Sat: 9am-1pm",
      emergencyHours: "24/7 Emergency Service Available",
      image: "/locations/kaimosi.jpg",
      description:
        "Western Kenya's trusted cleaning partner, specializing in educational and healthcare facility maintenance. Our team combines local expertise with specialized training to maintain the highest standards of cleanliness in sensitive environments.",
      valueProposition: "Leading provider of institutional cleaning in Western Kenya",
      specialServices: [
        "School and university cleaning with educational standards",
        "Healthcare facility sanitization with medical certification",
        "Residential deep cleaning with eco-friendly products",
        "Church and community center maintenance with cultural sensitivity",
      ],
      certifications: ["Healthcare Cleaning Certified", "Educational Facility Specialist", "Eco-Friendly Certified"],
      localExpertise: "Specialists in educational and healthcare facility cleaning",
      serviceAreas: "Kaimosi Town, Vihiga County, and surrounding areas",
      responseTime: "50 minutes for emergency services",
    },
    {
      id: "eldoret",
      name: "Eldoret",
      address: "Uganda Road, Eldoret Town, Uasin Gishu County, Rift Valley, Kenya",
      phone: "+254 700 901 234",
      emergencyPhone: "+254 733 901 234",
      whatsapp: "+254 700 901 234",
      hours: "Mon-Fri: 8am-5pm, Sat: 9am-1pm",
      emergencyHours: "24/7 Emergency Service Available",
      image: "/locations/eldoret.jpg",
      description:
        "Eldoret's premier cleaning service provider, specializing in athletic facility maintenance. Our expert team understands the unique requirements of sports facilities, providing specialized cleaning solutions for training centers and competition venues.",
      valueProposition: "Trusted cleaning partner for athletic facilities in Eldoret",
      specialServices: [
        "Athletic facility maintenance with sports certification",
        "Training center cleaning with specialized equipment",
        "Post-event cleanup with rapid response teams",
        "Commercial property services with industry standards",
      ],
      certifications: ["Sports Facility Specialist", "Commercial Cleaning Certified", "Safety First Certified"],
      localExpertise: "Experts in athletic and sports facility cleaning",
      serviceAreas: "CBD, Industrial Area, Kapseret, and surrounding areas",
      responseTime: "30 minutes for emergency services",
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
  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }
  // Use a hero image relevant to locations (or fallback to about page image)
  const heroImage = {
    src: "/home-hero/cleaner-home.jpg", // Now matches the about page hero image
    alt: "Simca Agencies - Service Locations in Kenya",
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Image */}
        <motion.img
          src={heroImage.src}
          alt={heroImage.alt}
          className="object-cover object-center w-full h-full absolute inset-0 z-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 10, ease: "easeOut" }}
          style={{ pointerEvents: 'none' }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-32 relative flex-grow flex flex-col justify-center z-20">
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
                className="inline-block mb-6 sm:mb-4 md:mb-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  National Coverage
                </span>
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6 md:mb-10 leading-tight tracking-wide"
              >
                Our Service {" "}
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
                className="text-sm md:text-lg text-gray-200 tracking-wide mb-12 max-w-2xl mx-auto"
              >
                Wherever you call home or do business, Simca Agencies is right there with you—bringing a caring, local touch to every city we serve. Our teams are part of your community, ready to listen, adapt, and deliver the spotless results you deserve. We believe in building real relationships, so you always know who to trust for a cleaner, healthier space.
              </motion.p>
              {/* Quick stats with enhanced micro-interactions */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-16"
              >
                {[
                  {
                    value: "6+",
                    label: "Cities Served",
                    icon: <MapPin className="w-4 h-4 text-white" />,
                  },
                  {
                    value: "200+",
                    label: "Corporate Clients",
                    icon: <Users className="w-4 h-4 text-white" />,
                  },
                  {
                    value: "24/7",
                    label: "Emergency Response",
                    icon: <Clock className="w-4 h-4 text-white" />,
                  }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={statsVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-gradient-to-r from-add8e6 to-add8e6/90 p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center"
                  >
                    <div className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2 flex items-center justify-center gap-2">
                      {stat.icon}
                      <span className="group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </span>
                    </div>
                    <div className="text-xs md:text-sm text-white">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Kenya Map Overview */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-24">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 animate-gradient">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(173,216,230,0.1),transparent_70%)] animate-pulse" />
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/pattern.png')] bg-repeat" />
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 rounded-full text-xs font-medium inline-flex items-center gap-2 mb-4 md:mb-6 shadow-sm">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                  Our Presence
                </span>
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight tracking-wide"
                  style={{
                    textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    WebkitTextStroke: "0.5px rgba(0,0,0,0.1)"
                  }}
                >
                  Nationwide{" "}
                  <span className="text-add8e6 relative inline-block tracking-wider"
                    style={{
                      textShadow: "0 2px 4px rgba(173,216,230,0.3)",
                      WebkitTextStroke: "0.5px rgba(173,216,230,0.3)"
                    }}
                  >
                    Cleaning Excellence
                    <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full" />
                  </span>
                </h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Wherever you call home or do business, Simca Agencies is right there with you—bringing a caring, local touch to every city we serve. Our teams are part of your community, ready to listen, adapt, and deliver the spotless results you deserve. We believe in building real relationships, so you always know who to trust for a cleaner, healthier space.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                <div className="order-2 lg:order-1">
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                      {locations.map((location) => (
                        <Link
                          key={location.id}
                          href={`#${location.id}`}
                          className="group flex items-center gap-3 p-3 md:p-4 rounded-xl hover:bg-add8e6/5 dark:hover:bg-add8e6/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-add8e6/50"
                        >
                          <div className="bg-add8e6/10 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                            <MapPin className="h-4 w-4 md:h-5 md:w-5 text-add8e6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <h3 className="font-semibold text-xs md:text-base text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">
                                {location.name}
                              </h3>
                              <span className="text-xs bg-add8e6/10 text-add8e6 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
                                24/7
                              </span>
                            </div>
                            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 line-clamp-2 md:line-clamp-none">
                              {(() => {
                                switch (location.name) {
                                  case "Nairobi":
                                    return "In the heart of the capital, we help businesses shine and homes feel like a sanctuary. We're here for you 24/7.";
                                  case "Kaimosi":
                                    return "We're honored to support the places that matter most, providing top-tier cleaning for schools and healthcare facilities.";
                                  case "Eldoret":
                                    return "In the City of Champions, we deliver championship-level cleaning for everything from sports complexes to industrial sites.";
                                  case "Kisumu":
                                    return "Bringing a fresh sparkle to the vibrant lakeside city, we serve homes and businesses with care and dedication.";
                                  case "Nakuru":
                                    return "In the heart of the Rift Valley, we're proud to offer our reliable cleaning services to this bustling, growing city.";
                                  case "Mombasa":
                                    return "On the coast, we keep homes and businesses fresh and welcoming, no matter the season.";
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
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 group text-center text-xs sm:text-sm w-full focus:outline-none focus:ring-2 focus:ring-add8e6/50"
                    >
                      Get Local Cleaning Support
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
                <div className="order-1 lg:order-2 relative h-[400px] md:h-[750px] rounded-2xl overflow-hidden shadow-xl group z-0">
                  <div className="absolute inset-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm flex items-center justify-center z-10 transition-opacity duration-300 map-loading">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-add8e6"></div>
                  </div>
                  <OpenStreetMap 
                    address="Kenya"
                    height="750px"
                    zoom={6}
                    markers={[
                      {
                        position: "Nairobi, Kenya",
                        popup: "Nairobi"
                      },
                      {
                        position: "Mombasa, Kenya",
                        popup: "Mombasa"
                      },
                      {
                        position: "Kisumu, Kenya",
                        popup: "Kisumu"
                      },
                      {
                        position: "Nakuru, Kenya",
                        popup: "Nakuru"
                      },
                      {
                        position: "Kaimosi, Kenya",
                        popup: "Kaimosi"
                      },
                      {
                        position: "Eldoret, Kenya",
                        popup: "Eldoret"
                      }
                    ]}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20">
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 md:p-4 rounded-xl shadow-lg">
                      <h3 className="text-xs md:text-base font-bold text-gray-800 dark:text-white mb-2">Click on any marker to discover our local expertise</h3>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        Our map shows just how close help is—each marker is a team that cares about your space as much as you do. Click a city to meet your local Simca experts and discover how we make cleaning personal, reliable, and worry-free.
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
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-24">
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
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs font-medium inline-flex items-center gap-2 mb-3 md:mb-4">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                  Local Expertise
                </span>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight">
                  Our Service{" "}
                  <span className="text-add8e6 relative">
                    Locations
                    <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full" />
                  </span>
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Each of our locations is staffed with local experts who understand the unique cleaning needs of their community.
                </p>
              </div>

              {locations.map((location, index) => (
                <div
                  key={location.id}
                  id={location.id}
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
                                  <MapPin className="h-12 w-12 text-add8e6" />
                                </motion.div>
                                <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                                  {location.name}
                                </h2>
                              </div>
                              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6 md:mb-8">
                                {location.description}
                              </p>

                              <div className="space-y-6 md:space-y-8">
                                <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                  <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-add8e6 rounded-full"></span>
                                    Contact Information
                                  </h3>
                                  <div className="space-y-3">
                                    <motion.div 
                                      className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-700/30 rounded-lg p-3 backdrop-blur-sm"
                                      whileHover={{ 
                                        x: 4,
                                        backgroundColor: 'rgba(173, 216, 230, 0.1)',
                                        transition: { duration: 0.2 }
                                      }}
                                    >
                                      <MapPin className="w-4 h-4 text-add8e6 mr-2 flex-shrink-0" />
                                      {location.address}
                                    </motion.div>
                                    <motion.div 
                                      className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-700/30 rounded-lg p-3 backdrop-blur-sm"
                                      whileHover={{ 
                                        x: 4,
                                        backgroundColor: 'rgba(173, 216, 230, 0.1)',
                                        transition: { duration: 0.2 }
                                      }}
                                    >
                                      <Phone className="w-4 h-4 text-add8e6 mr-2 flex-shrink-0" />
                                      {location.phone}
                                    </motion.div>
                                    <motion.div 
                                      className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-700/30 rounded-lg p-3 backdrop-blur-sm"
                                      whileHover={{ 
                                        x: 4,
                                        backgroundColor: 'rgba(173, 216, 230, 0.1)',
                                        transition: { duration: 0.2 }
                                      }}
                                    >
                                      <Clock className="w-4 h-4 text-add8e6 mr-2 flex-shrink-0" />
                                      {location.hours}
                                    </motion.div>
                                  </div>
                                </motion.div>

                                <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                  <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-add8e6 rounded-full"></span>
                                    Special Services
                                  </h3>
                                  <ul className="space-y-1 md:space-y-2">
                                    {location.specialServices.map((service, i) => (
                                      <motion.li 
                                        key={i} 
                                        className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-700/30 rounded-lg p-3 backdrop-blur-sm"
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
                                        {service}
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
                                  <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-add8e6 rounded-full"></span>
                                    Certifications & Expertise
                                  </h3>
                                  <div className="flex flex-wrap gap-2 mb-4">
                                    {location.certifications.map((cert, i) => (
                                      <motion.span
                                        key={i}
                                        className="text-xs bg-add8e6/10 text-add8e6 px-2 py-1 rounded-full hover:bg-add8e6/20 transition-all duration-300"
                                        whileHover={{ scale: 1.05 }}
                                      >
                                        {cert}
                                      </motion.span>
                                    ))}
                                  </div>
                                  <motion.p 
                                    className="text-xs md:text-sm text-gray-600 dark:text-gray-300 p-2 rounded-lg bg-white/50 dark:bg-gray-700/30 backdrop-blur-sm"
                                    whileHover={{ 
                                      x: 4,
                                      backgroundColor: 'rgba(173, 216, 230, 0.1)',
                                      transition: { duration: 0.2 }
                                    }}
                                  >
                                    {location.localExpertise}
                                  </motion.p>
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
                              src={location.image}
                              alt={location.name} 
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
                                    {location.valueProposition}
                                  </p>
                                  <span className="text-xs md:text-sm text-add8e6 font-medium">
                                    {location.responseTime}
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
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* CTA Section */}
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
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-4 md:mb-6">
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-2 shadow-sm">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                  Service Coverage
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight tracking-wide"
                style={{
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  WebkitTextStroke: "0.5px rgba(0,0,0,0.1)"
                }}
              >
                Not in Our{" "}
                <span className="text-add8e6 relative inline-block tracking-wider"
                  style={{
                    textShadow: "0 2px 4px rgba(173,216,230,0.3)",
                    WebkitTextStroke: "0.5px rgba(173,216,230,0.3)"
                  }}
                >
                  Listed Areas?
                  <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full" />
                </span>
              </h2>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed">
                We serve many other areas across Kenya. Contact us to inquire about service availability in your location.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 group text-center text-xs sm:text-sm"
              >
                Check Service Availability
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
