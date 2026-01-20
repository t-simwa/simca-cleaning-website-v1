"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import OpenStreetMap from "@/components/openstreet-map"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { motion } from "framer-motion"
import ContactForm from "@/components/home/contact-form"
import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import React from "react"
// Unique icons from different icon libraries - matching home page style
import { MdLocationOn } from "react-icons/md" // Material Design - Location (for badge and main location)
import { HiPhone } from "react-icons/hi2" // Heroicons v2 - Phone
import { HiClock } from "react-icons/hi2" // Heroicons v2 - Clock

const MotionImage = motion(Image)

// CountUp component for animated numbers with scroll trigger
function CountUp({ end, duration = 1.5, suffix = "", inView = false }: { end: string | number, duration?: number, suffix?: string, inView?: boolean }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return;
    const isPercent = typeof end === 'string' && end.includes('%');
    const isPlus = typeof end === 'string' && end.includes('+');
    const numericEnd = typeof end === 'number' ? end : parseInt(end);
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
  let display: string | number = count;
  if (typeof end === 'string' && end.includes('%')) display = `${count}%`;
  if (typeof end === 'string' && end.includes('+')) display = `${count}+`;
  // Handle non-numeric values like "24/7"
  if (typeof end === 'string' && !end.match(/^\d+/)) return <span>{end}{suffix}</span>;
  return <span>{display}{suffix}</span>;
}

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

// Stats Section Component with scroll-triggered animation
function StatsSectionWithAnimation() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className="grid grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto mb-8 md:mb-12"
    >
      {[
        {
          value: "6+",
          label: "CITIES SERVED",
        },
        {
          value: "200+",
          label: "CORPORATE CLIENTS",
        },
        {
          value: "24/7",
          label: "EMERGENCY RESPONSE",
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

export default function LocationsPage() {
  const locations = [
    {
      id: "nairobi",
      name: "Nairobi",
      address: "Kimathi Street, Central Business District, Nairobi, Kenya",
      phone: "+254 721525901",
      emergencyPhone: "+254 721525901",
      whatsapp: "+254 721525901",
      hours: "Mon-Fri: 8am-5pm, Sat: 9am-1pm",
      emergencyHours: "24/7 Emergency Service Available",
      image: "/locations/nairobi.webp",
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
      phone: "+254 721525901",
      emergencyPhone: "+254 721525901",
      whatsapp: "+254 721525901",
      hours: "Mon-Fri: 8am-5pm, Sat: 9am-1pm",
      emergencyHours: "24/7 Emergency Service Available",
      image: "/locations/mombasa.webp",
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
      phone: "+254 721525901",
      emergencyPhone: "+254 721525901",
      whatsapp: "+254 721525901",
      hours: "Mon-Fri: 8am-5pm, Sat: 9am-1pm",
      emergencyHours: "24/7 Emergency Service Available",
      image: "/locations/kisumu.webp",
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
      phone: "+254 721525901",
      emergencyPhone: "+254 721525901",
      whatsapp: "+254 721525901",
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
      phone: "+254 721525901",
      emergencyPhone: "+254 721525901",
      whatsapp: "+254 721525901",
      hours: "Mon-Fri: 8am-5pm, Sat: 9am-1pm",
      emergencyHours: "24/7 Emergency Service Available",
      image: "/locations/kaimosi.webp",
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
      phone: "+254 721525901",
      emergencyPhone: "+254 721525901",
      whatsapp: "+254 721525901",
      hours: "Mon-Fri: 8am-5pm, Sat: 9am-1pm",
      emergencyHours: "24/7 Emergency Service Available",
      image: "/locations/eldoret.webp",
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
  // Use a hero image relevant to locations (or fallback to about page image)
  const heroImage = {
    src: "/locations/locations-hero.webp", // Now matches the about page hero image
    alt: "Simca Agencies - Service Locations in Kenya",
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
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
                className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-wide"
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
                className="text-sm md:text-base lg:text-base text-gray-200 tracking-wide mb-10 md:mb-12 max-w-2xl mx-auto"
              >
                Wherever you call home or do business, Simca Agencies is right there with you—bringing a caring, local touch to every city we serve. Our teams are part of your community, ready to listen, adapt, and deliver the spotless results you deserve. We believe in building real relationships, so you always know who to trust for a cleaner, healthier space.
              </motion.p>
              {/* Minimalist Stats Section */}
              <StatsSectionWithAnimation />
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
                  className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-6 md:mb-6 leading-tight tracking-wide mt-0 !mt-0"
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
                <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Wherever you call home or do business, Simca Agencies is right there with you—bringing a caring, local touch to every city we serve. Our teams are part of your community, ready to listen, adapt, and deliver the spotless results you deserve. We believe in building real relationships, so you always know who to trust for a cleaner, healthier space.
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
                              <h3 className="font-semibold text-xs md:text-sm text-gray-900 dark:text-white group-hover:text-add8e6 transition-colors leading-tight">
                                {location.name}
                              </h3>
                              <span className="text-[10px] md:text-xs bg-add8e6/10 text-add8e6 px-1.5 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 font-medium">
                                24/7
                              </span>
                            </div>
                            <p className="text-[10px] md:text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
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
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-20">
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2.5 md:p-3 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
                      <h3 className="text-xs md:text-sm font-bold text-gray-800 dark:text-white mb-1.5">Click on any marker to discover our local expertise</h3>
                      <p className="text-[10px] md:text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
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
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-6 md:mb-6 leading-tight tracking-wide mt-0 !mt-0" >
                  Our Service{" "}
                  <span className="text-add8e6 relative">
                    Locations
                    <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full" />
                  </span>
                </h2>
                <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Each of our locations is staffed with local experts who understand the unique cleaning needs of their community.
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
                                <h2 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
                                  {location.name}
                                </h2>
                              </div>
                              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-5 leading-relaxed">
                                {location.description}
                              </p>

                              <div className="space-y-4 md:space-y-5">
                                <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                  <h3 className="text-xs md:text-sm font-semibold text-gray-900 dark:text-white mb-2 md:mb-2.5 flex items-center gap-2">
                                    <span className="w-1 h-1 bg-add8e6 rounded-full"></span>
                                    Contact Information
                                  </h3>
                                  <div className="space-y-2">
                                    <motion.div 
                                      className="group flex items-center text-xs text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-700/30 rounded-lg p-2 backdrop-blur-sm border border-transparent hover:border-add8e6/20 transition-all duration-200"
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
                                      <span className="flex-1">{location.address}</span>
                                    </motion.div>
                                    <motion.div 
                                      className="group flex items-center text-xs text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-700/30 rounded-lg p-2 backdrop-blur-sm border border-transparent hover:border-add8e6/20 transition-all duration-200"
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
                                      <span className="flex-1">{location.phone}</span>
                                    </motion.div>
                                    <motion.div 
                                      className="group flex items-center text-xs text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-700/30 rounded-lg p-2 backdrop-blur-sm border border-transparent hover:border-add8e6/20 transition-all duration-200"
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
                                      <span className="flex-1">{location.hours}</span>
                                    </motion.div>
                                  </div>
                                </motion.div>
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
                            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-20">
                              <motion.div 
                                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2.5 md:p-3 rounded-lg border border-gray-100 dark:border-gray-700"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                              >
                                <div className="flex items-center justify-between gap-2">
                                  <p className="text-[10px] md:text-xs text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                                    {location.valueProposition}
                                  </p>
                                  <span className="text-[10px] md:text-xs text-add8e6 font-medium whitespace-nowrap ml-2">
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

      <ContactForm />
    </div>
  )
}
