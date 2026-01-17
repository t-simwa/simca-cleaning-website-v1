"use client"

import { MapPin, Phone, Mail, Clock, MessageCircle, Sparkles, ShieldCheck } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import OpenStreetMap from "@/components/openstreet-map"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
      className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto mb-8 md:mb-16"
    >
      {[
        {
          value: "4",
          label: "LOCATIONS",
        },
        {
          value: "24/7",
          label: "SUPPORT",
        },
        {
          value: "1hr",
          label: "RESPONSE TIME",
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
                className="inline-block mb-6 sm:mb-4 md:mb-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Get in Touch
                </span>
              </motion.div>

              <motion.h1
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } } }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-10 leading-tight tracking-wide"
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
                className="text-sm md:text-base lg:text-base text-gray-200 tracking-wide mb-12 max-w-2xl mx-auto"
              >
                We're here to make connecting with us easy and welcoming—no matter your cleaning needs or questions. Whether you're looking for a one-time service or ongoing support, our friendly team is always ready to listen, offer honest advice, and create a solution that fits your unique space. Reach out today and experience the personal care, attention, and reliability that set Simca Agencies apart.
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
                  <MessageCircle className="w-4 h-4" />
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
                <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                  We're here to make your experience easy and personal—whether you have a quick question or need a custom cleaning plan. Reach out and let us know what matters most to you. We'll listen, guide you honestly, and make sure you always feel valued and cared for.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                {/* Contact Form Section */}
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 md:p-6">
                  <div className="mb-6 md:mb-8">
                    <h3 className="text-sm md:text-lg font-semibold text-gray-800 dark:text-white mb-6 md:mb-10 flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-add8e6" />
                      Send Us a Message
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                      Tell us what you need—no request is too big or too small. We'll listen, offer honest advice, and respond quickly with a quote that fits your needs. Your privacy and trust are always respected.
                    </p>
                  </div>
                  <ContactForm />
                </div>

                {/* Contact Information Section */}
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 md:p-6 flex flex-col">
                  <h3 className="text-sm md:text-lg font-semibold text-gray-800 dark:text-white mb-6 md:mb-10 flex items-center gap-2">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-add8e6" />
                    Quick Contact
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-6 md:mb-10">
                    Need help fast, or just want to talk to a real person? Our friendly team is here for you 24/7—whether it's an urgent cleaning or a simple question. We serve all major cities in Kenya and always put your needs first.
                  </p>
                  <div className="space-y-4 flex-grow">
                    <div className="flex items-start group/item p-3 -m-3 rounded-md hover:bg-add8e6/10 transition-colors duration-200">
                      <div className="bg-add8e6/10 p-1.5 md:p-2 rounded-lg mr-3 group-hover/item:scale-110 transition-transform duration-300">
                        <Phone className="h-4 w-4 md:h-5 md:w-5 text-add8e6" />
                      </div>
                      <div className="md:mb-4">
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Emergency Line</p>
                        <a href="tel:+25472356800" className="text-xs md:text-sm text-gray-800 dark:text-white hover:text-add8e6 transition-colors block">
                          Call us anytime—day or night: +254 72356800
                        </a>
                        <a href="tel:+254712345678" className="text-xs md:text-sm text-gray-800 dark:text-white hover:text-add8e6 transition-colors block">
                          Or reach us on: +254 712345678
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start group/item p-3 -m-3 rounded-md hover:bg-add8e6/10 transition-colors duration-200">
                      <div className="bg-add8e6/10 p-1.5 md:p-2 rounded-lg mr-3 group-hover/item:scale-110 transition-transform duration-300">
                        <Mail className="h-4 w-4 md:h-5 md:w-5 text-add8e6" />
                      </div>
                      <div className="md:mb-4">
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Email Us</p>
                        <a href="mailto:info@simcacleaning.co.ke" className="text-xs md:text-sm text-gray-800 dark:text-white hover:text-add8e6 transition-colors">
                          We reply quickly: info@simcacleaning.co.ke
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start group/item p-3 -m-3 rounded-md hover:bg-add8e6/10 transition-colors duration-200">
                      <div className="bg-add8e6/10 p-1.5 md:p-2 rounded-lg mr-3 group-hover/item:scale-110 transition-transform duration-300">
                        <Clock className="h-4 w-4 md:h-5 md:w-5 text-add8e6" />
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Service Hours</p>
                        <p className="text-xs md:text-sm text-gray-800 dark:text-white">
                          Mon-Fri: 8am-5pm, Sat: 9am-1pm
                        </p>
                        <p className="text-xs md:text-sm text-add8e6 mt-1">
                          After-hours? We're still here for you.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Additional Info to fill space */}
                  <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-xs md:text-sm font-semibold text-gray-800 dark:text-white mb-2 md:mb-3 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-add8e6" />
                      Our Commitment
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      We treat every client like family and every space like our own. If you're ever less than thrilled with our service, just let us know—we'll make it right, no questions asked. Your happiness and peace of mind are our promise, every single time.
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
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs font-medium inline-flex items-center gap-2 mb-3 md:mb-4 shadow-sm">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                  Find Us
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight tracking-wide">
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
                <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Wherever you are in Kenya, you're never far from a Simca team that cares. Drop by any of our branches or reach out—our friendly experts are always ready to listen, answer your questions, and help you find the perfect cleaning solution for your space.
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
                        <h3 className="text-sm md:text-lg font-semibold text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors flex-grow">
                          {location.name}
                        </h3>
                      </div>
                      <div className="space-y-3 md:space-y-4 flex-grow mb-4">
                        <div className="flex items-start group/item p-1 -m-1 rounded-md hover:bg-add8e6/10 transition-colors duration-200">
                          <MapPin className="h-4 w-4 text-add8e6 mt-1 mr-2 flex-shrink-0" />
                          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 break-words w-full">{location.address}</p>
                        </div>
                        <div className="flex items-start group/item p-1 -m-1 rounded-md hover:bg-add8e6/10 transition-colors duration-200">
                          <Phone className="h-4 w-4 text-add8e6 mt-1 mr-2 flex-shrink-0" />
                          <a href={`tel:${location.phone}`} className="text-xs md:text-sm text-gray-600 dark:text-gray-300 hover:text-add8e6 transition-colors break-words w-full">
                            {location.phone}
                          </a>
                        </div>
                        <div className="flex items-start group/item p-1 -m-1 rounded-md hover:bg-add8e6/10 transition-colors duration-200">
                          <Mail className="h-4 w-4 text-add8e6 mt-1 mr-2 flex-shrink-0" />
                          <a href={`mailto:${location.email}`} className="text-xs md:text-sm text-gray-600 dark:text-gray-300 hover:text-add8e6 transition-colors break-words w-full">
                            {location.email}
                          </a>
                        </div>
                        <div className="flex items-start group/item p-1 -m-1 rounded-md hover:bg-add8e6/10 transition-colors duration-200">
                          <Clock className="h-4 w-4 text-add8e6 mt-1 mr-2 flex-shrink-0" />
                          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 break-words w-full">{location.hours}</p>
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
                        <h3 className="text-sm md:text-lg font-semibold text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors flex-grow">
                          {currentMobileCard.name}
                        </h3>
                      </div>
                      <div className="space-y-3 md:space-y-4 flex-grow mb-4">
                        <div className="flex items-start group/item p-1 -m-1 rounded-md hover:bg-add8e6/10 transition-colors duration-200">
                          <MapPin className="h-4 w-4 text-add8e6 mt-1 mr-2 flex-shrink-0" />
                          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 break-words w-full">{currentMobileCard.address}</p>
                        </div>
                        <div className="flex items-start group/item p-1 -m-1 rounded-md hover:bg-add8e6/10 transition-colors duration-200">
                          <Phone className="h-4 w-4 text-add8e6 mt-1 mr-2 flex-shrink-0" />
                          <a href={`tel:${currentMobileCard.phone}`} className="text-xs md:text-sm text-gray-600 dark:text-gray-300 hover:text-add8e6 transition-colors break-words w-full">
                            {currentMobileCard.phone}
                          </a>
                        </div>
                        <div className="flex items-start group/item p-1 -m-1 rounded-md hover:bg-add8e6/10 transition-colors duration-200">
                          <Mail className="h-4 w-4 text-add8e6 mt-1 mr-2 flex-shrink-0" />
                          <a href={`mailto:${currentMobileCard.email}`} className="text-xs md:text-sm text-gray-600 dark:text-gray-300 hover:text-add8e6 transition-colors break-words w-full">
                            {currentMobileCard.email}
                          </a>
                        </div>
                        <div className="flex items-start group/item p-1 -m-1 rounded-md hover:bg-add8e6/10 transition-colors duration-200">
                          <Clock className="h-4 w-4 text-add8e6 mt-1 mr-2 flex-shrink-0" />
                          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 break-words w-full">{currentMobileCard.hours}</p>
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
