"use client"

import Image from "next/image"
import { Users, Award, MapPin, Sparkles, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight, Handshake, Wallet } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import WhoWeAre from "@/components/home/who-we-are"

const MotionImage = motion(Image)

// CountUp component for animated numbers
function CountUp({ end, duration = 1.5, suffix = "" }: { end: string | number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
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
  }, [end, duration]);
  let display: string | number = count;
  if (typeof end === 'string' && end.includes('%')) display = `${count}%`;
  if (typeof end === 'string' && end.includes('+')) display = `${count}+`;
  return <span>{display}{suffix}</span>;
}

export default function AboutPage() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

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
    setCurrentPage((prev) => (prev + 1) % 3) // 3 cards total
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + 3) % 3) // 3 cards total
  }

  // Cards data for the "Our Mission & Values" section
  const cards = [
    {
      icon: <Users className="h-7 w-7 md:h-8 md:w-8 text-add8e6" />,
      title: "A Personal Touch",
      description: "We treat your space with the same care we'd give our own. Our friendly, reliable team gets to know you and your needs, so we can deliver a clean that's just right for you.",
      items: [
        "Friendly and familiar faces",
        "Custom plans for your needs",
        "We listen to your feedback"
      ]
    },
    {
      icon: <Wallet className="h-7 w-7 md:h-8 md:w-8 text-add8e6" />,
      title: "Honest & Fair",
      description: "We believe in clear, upfront pricing with no surprises. You get top-quality service at a fair price, so you can enjoy a clean home or office without any stress.",
      items: [
        "Transparent, upfront pricing",
        "No hidden fees, ever",
        "Flexible options for any budget"
      ]
    },
    {
      icon: <Handshake className="h-7 w-7 md:h-8 md:w-8 text-add8e6" />,
      title: "Reliable & Trustworthy",
      description: "Your peace of mind is our priority. Our team is carefully vetted, trained, and dedicated to delivering spotless results you can count on, every single time.",
      items: [
        "Vetted and trained professionals",
        "Satisfaction guarantee",
        "Consistent, high-quality results"
      ]
    }
  ]

  // Animation variants for the new hero section
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

  // Stats animation variants with enhanced micro-interactions
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

  const heroImage = {
    src: "/about/about-hero.jpg",
    alt: "Professional cleaning services in Kenya",
  }

  // Get current card for mobile
  const getCurrentCard = () => {
    return cards[currentPage]
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
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

        <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-32 relative flex-grow flex flex-col justify-center">
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
                  <CheckCircle2 className="w-4 h-4" />
                  Our Story
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6 md:mb-10 leading-tight tracking-wide"
              >
                About{" "}
                <span className="text-fff relative inline-block">
                  Simca Agencies
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
                We started Simca in 2015 with a simple goal: to offer a cleaning service you can truly count on. We're not just about cleaning; we're about creating a healthier, more comfortable space for you and your family. We're your local team, dedicated to providing a personal touch and a spotless result, every single time.
              </motion.p>

              {/* Quick stats with enhanced micro-interactions */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-16"
              >
                {[
                  { 
                    value: "12+", 
                    label: "Years of Excellence", 
                    icon: <Award className="w-4 h-4 text-white" />,
                  },
                  { 
                    value: "100+", 
                    label: "Trained Professionals", 
                    icon: <Users className="w-4 h-4 text-white" />,
                  },
                  { 
                    value: "6+", 
                    label: "Cities Served", 
                    icon: <MapPin className="w-4 h-4 text-white" />,
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
                        <CountUp end={stat.value} duration={1.2} />
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
      
      <WhoWeAre />

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Mission & Values */}
      <div className="relative py-12 md:py-20">
        {/* Background matching home page pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#add8e6_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
        </div>

        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-8 md:mb-16">
                <motion.div 
                  className="inline-block mb-6 sm:mb-4 md:mb-6 mt-0 !mt-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2 shadow-sm mt-0 !mt-0">
                    <Sparkles className="w-4 h-4" />
                  Our Core Values
                </span>
                </motion.div>
                <motion.h2 
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-6 md:mb-6 leading-tight tracking-wide mt-0 !mt-0"
                >
                  Our Mission &{" "}
                  <motion.span 
                    className="text-add8e6 relative inline-block tracking-wider [text-shadow:0_2px_4px_rgba(173,216,230,0.3)] [-webkit-text-stroke:0.5px_rgba(173,216,230,0.3)] dark:[text-shadow:none] dark:[-webkit-text-stroke:none]"
                  >
                    Values
                    <motion.span 
                      className="absolute -bottom-2 left-0 w-full h-1 bg-add8e6/20 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                  </motion.span>
                </motion.h2>
                <motion.p 
                  className="text-sm md:text-lg text-gray-600 dark:text-gray-300 tracking-wide mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Our mission is simple: to make your space feel like new again. We believe a clean environment isn't just about looking good—it's about creating a place where you can relax, be productive, and feel your best. We're dedicated to delivering a spotless, healthy, and happy space for you, every time.
                </motion.p>
              </div>

              {/* Values Grid */}
              <div className="relative">
                {/* Mobile Carousel / Desktop Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                  {/* Mobile View - Single Card */}
                  {isMobile ? (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-add8e6/50 focus:ring-offset-2 overflow-hidden"
                      >
                        {/* Glassmorphism effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50 dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50" />
                        
                        {/* Subtle pattern overlay */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px]" />
                        </div>

                        <div className="flex flex-col h-full relative z-10">
                          <motion.div 
                            className="p-2 md:p-3 bg-add8e6/10 rounded-lg md:rounded-xl group-hover:scale-110 transition-transform duration-500 mb-6"
                            whileHover={{ 
                              scale: 1.15,
                              rotate: [0, -5, 5, 0],
                              transition: { duration: 0.5 }
                            }}
                          >
                            {getCurrentCard().icon}
                          </motion.div>
                          
                          <motion.h3 
                            className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-add8e6 transition-colors"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            {getCurrentCard().title}
                          </motion.h3>
                          
                          <motion.p 
                            className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-6"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            {getCurrentCard().description}
                          </motion.p>

                          <div className="space-y-2 md:space-y-3">
                            {getCurrentCard().items.map((item, i) => (
                              <motion.div 
                                key={i} 
                                className="flex items-center gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-700/30 rounded-lg p-2 backdrop-blur-sm"
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
                                {item}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  ) : (
                    // Desktop View - All Cards
                    <>
                      {cards.map((card, index) => (
                        <motion.div 
                          key={index}
                          className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-add8e6/50 focus:ring-offset-2 overflow-hidden"
                          whileHover={{ y: -5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {/* Glassmorphism effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50 dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50" />
                          
                          {/* Subtle pattern overlay */}
                          <div className="absolute inset-0 opacity-5">
                            <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px]" />
                          </div>

                          <div className="flex flex-col h-full relative z-10">
                            <motion.div 
                              className="p-2 md:p-3 bg-add8e6/10 rounded-lg md:rounded-xl group-hover:scale-110 transition-transform duration-500 mb-6"
                              whileHover={{ 
                                scale: 1.15,
                                rotate: [0, -5, 5, 0],
                                transition: { duration: 0.5 }
                              }}
                            >
                              {card.icon}
                            </motion.div>
                            
                            <motion.h3 
                              className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-add8e6 transition-colors"
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.2 }}
                            >
                              {card.title}
                            </motion.h3>
                            
                            <motion.p 
                              className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-6"
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.2 }}
                            >
                              {card.description}
                            </motion.p>

                            <div className="space-y-2 md:space-y-3">
                              {card.items.map((item, i) => (
                                <motion.div 
                                  key={i} 
                                  className="flex items-center gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-700/30 rounded-lg p-2 backdrop-blur-sm"
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
                                  {item}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </>
                  )}
                </div>

                {/* Mobile Navigation */}
                <div className="flex flex-col items-center gap-4 mt-8 md:hidden">
                  {/* Mobile Pagination Dots */}
                  <div className="flex items-center gap-3">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentPage(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          currentPage === index
                            ? 'bg-add8e6 w-6'
                            : 'bg-gray-300 dark:bg-gray-600 hover:bg-add8e6/50'
                        }`}
                        aria-label={`Go to value ${index + 1}`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
                  </div>

                  {/* Mobile Navigation Buttons */}
                  <div className="flex items-center gap-4">
                    <motion.button
                      onClick={prevPage}
                      className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50 active:scale-95"
                      aria-label="Previous value"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    </motion.button>
                    
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {currentPage + 1} of 3
                    </span>

                    <motion.button
                      onClick={nextPage}
                      className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50 active:scale-95"
                      aria-label="Next value"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Company History */}
      <div className="relative py-12 md:py-20">
        {/* Background matching home page pattern */}
        <div className="absolute inset-0 bg-white dark:bg-gray-900">
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,#add8e6_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
        </div>

        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-16">
                <motion.div 
                  className="inline-block mb-6 sm:mb-4 md:mb-6 mt-0 !mt-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2 shadow-sm mt-0 !mt-0">
                    <Sparkles className="w-4 h-4" />
                  Our Journey
                </span>
                </motion.div>
                <motion.h2 
                  className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-6 md:mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Our Growth{" "}
                  <motion.span 
                    className="text-add8e6 relative inline-block [text-shadow:0_2px_4px_rgba(173,216,230,0.3)] [-webkit-text-stroke:0.5px_rgba(173,216,230,0.3)] dark:[text-shadow:none] dark:[-webkit-text-stroke:none]"
                  >
                    Story
                    <motion.span 
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                  </motion.span>
                </motion.h2>
                <motion.p 
                  className="text-sm md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Our journey started with a simple idea: to provide a cleaning service our community could trust. Here's a look at how we've grown, thanks to wonderful clients like you.
                </motion.p>
              </div>

              {/* Timeline Container */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-add8e6/20 dark:bg-add8e6/30 hidden md:block" />

                <div className="space-y-6 md:space-y-8">
                  {/* 2015 */}
                  <motion.div 
                    className="relative pl-6 md:pl-8 pb-6 md:pb-8 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute left-0 top-0 w-0.5 h-full bg-add8e6/20 group-hover:bg-add8e6 transition-colors duration-300" />
                    <motion.div 
                      className="absolute w-4 h-4 md:w-6 md:h-6 bg-add8e6 rounded-full -left-[7px] md:-left-[11px] top-0 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <motion.span 
                          className="text-add8e6 font-bold text-sm md:text-base"
                          whileHover={{ scale: 1.1 }}
                        >
                          2015
                        </motion.span>
                        <motion.h3 
                          className="text-base md:text-lg font-bold text-gray-800 dark:text-white"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          Our Humble Start
                        </motion.h3>
                      </div>
                      <motion.p 
                        className="text-xs md:text-base text-gray-600 dark:text-gray-300"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        It all began in Nairobi with a small but dedicated team of 15 professionals and a big goal: to make homes and businesses feel welcoming and clean. We were thrilled to partner with our first 25+ residential and commercial clients, building relationships one spotless space at a time by offering everything from home cleaning to specialized office maintenance.
                      </motion.p>
                      <motion.div 
                        className="mt-3 md:mt-4 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="w-1.5 h-1.5 bg-add8e6 rounded-full"></span>
                        <span>25+ Foundational Clients</span>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* 2017 */}
                  <motion.div 
                    className="relative pl-6 md:pl-8 pb-6 md:pb-8 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="absolute left-0 top-0 w-0.5 h-full bg-add8e6/20 group-hover:bg-add8e6 transition-colors duration-300" />
                    <motion.div 
                      className="absolute w-4 h-4 md:w-6 md:h-6 bg-add8e6 rounded-full -left-[7px] md:-left-[11px] top-0 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <motion.span 
                          className="text-add8e6 font-bold text-sm md:text-base"
                          whileHover={{ scale: 1.1 }}
                        >
                          2017
                        </motion.span>
                        <motion.h3 
                          className="text-base md:text-lg font-bold text-gray-800 dark:text-white"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          Growing & Learning
                        </motion.h3>
                      </div>
                      <motion.p 
                        className="text-xs md:text-base text-gray-600 dark:text-gray-300"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        As more people trusted us with their spaces, our family grew! We expanded our services to Mombasa and Eldoret, welcoming over 50 new commercial clients in hospitality and healthcare. To ensure we always delivered the best, we proudly earned our ISO 9001:2015 certification, a testament to our commitment to top-quality, reliable service.
                      </motion.p>
                      <motion.div 
                        className="mt-3 md:mt-4 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="w-1.5 h-1.5 bg-add8e6 rounded-full"></span>
                        <span>ISO 9001 Certified Quality</span>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* 2020 */}
                  <motion.div 
                    className="relative pl-6 md:pl-8 pb-6 md:pb-8 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="absolute left-0 top-0 w-0.5 h-full bg-add8e6/20 group-hover:bg-add8e6 transition-colors duration-300" />
                    <motion.div 
                      className="absolute w-4 h-4 md:w-6 md:h-6 bg-add8e6 rounded-full -left-[7px] md:-left-[11px] top-0 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <motion.span 
                          className="text-add8e6 font-bold text-sm md:text-base"
                          whileHover={{ scale: 1.1 }}
                        >
                          2020
                        </motion.span>
                        <motion.h3 
                          className="text-base md:text-lg font-bold text-gray-800 dark:text-white"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          Caring for Your Home & Our Planet
                        </motion.h3>
                      </div>
                      <motion.p 
                        className="text-xs md:text-base text-gray-600 dark:text-gray-300"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        We've always believed in cleaning that's safe for your family and our planet. In 2020, we officially launched our Green Seal certified eco-friendly solutions. We also embraced new technology to ensure consistent, top-notch results, which helped us achieve a 98% client satisfaction rate that we're incredibly proud of.
                      </motion.p>
                      <motion.div 
                        className="mt-3 md:mt-4 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="w-1.5 h-1.5 bg-add8e6 rounded-full"></span>
                        <span>Green Seal Certified</span>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* 2023 */}
                  <motion.div 
                    className="relative pl-6 md:pl-8 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="absolute left-0 top-0 w-0.5 h-full bg-add8e6/20 group-hover:bg-add8e6 transition-colors duration-300" />
                    <motion.div 
                      className="absolute w-4 h-4 md:w-6 md:h-6 bg-add8e6 rounded-full -left-[7px] md:-left-[11px] top-0 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <motion.span 
                          className="text-add8e6 font-bold text-sm md:text-base"
                          whileHover={{ scale: 1.1 }}
                        >
                          2023
                        </motion.span>
                        <motion.h3 
                          className="text-base md:text-lg font-bold text-gray-800 dark:text-white"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          A Trusted Name in Cleaning
                        </motion.h3>
                      </div>
                      <motion.p 
                        className="text-xs md:text-base text-gray-600 dark:text-gray-300"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        Today, our team of over 100 dedicated professionals serves more than 200 clients across 6 major cities. Being named 'Best Cleaning Service Provider 2023' by the Kenya Business Awards was a wonderful honor, but our greatest achievement is the daily trust you place in us to care for your spaces.
                      </motion.p>
                      <motion.div 
                        className="mt-3 md:mt-4 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="w-1.5 h-1.5 bg-add8e6 rounded-full"></span>
                        <span>Kenya's Best Cleaning Service 2023</span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* National Footprint */}
      <div className="relative py-12 md:py-20">
        {/* Background matching home page pattern */}
        <div className="absolute inset-0 bg-gray-50 dark:bg-gray-800/50">
          <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px] opacity-5" />
        </div>

        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 md:mb-16">
                <motion.div 
                  className="inline-block mb-3 sm:mb-4 md:mb-6 mt-0 !mt-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2 shadow-sm mt-0 !mt-0">
                    <MapPin className="w-4 h-4" />
                  Our Coverage
                </span>
                </motion.div>
                <motion.h2 
                  className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Our National{" "}
                  <motion.span 
                    className="text-add8e6 relative inline-block [text-shadow:0_2px_4px_rgba(173,216,230,0.3)] [-webkit-text-stroke:0.5px_rgba(173,216,230,0.3)] dark:[text-shadow:none] dark:[-webkit-text-stroke:none]"
                  >
                    Footprint
                    <motion.span 
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                  </motion.span>
                </motion.h2>
                <motion.p 
                  className="text-sm md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Whether you're in the city or by the coast, our promise is the same: a spotless clean with a personal touch. We're proud to bring our trusted services to communities all across Kenya.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <motion.div 
                  className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl group"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <Image
                    src="/service-location.png?height=800&width=600"
                    alt="Map of Kenya showing Simca Agencies locations"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20">
                    <motion.div 
                      className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 md:p-4 rounded-xl"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        Your local cleaning experts, wherever you are.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                <div className="space-y-6 md:space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <motion.div 
                      className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-add8e6/5 via-transparent to-add8e6/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                          <motion.div 
                            className="bg-add8e6/10 p-1.5 md:p-2 rounded-lg group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <MapPin className="h-4 w-4 md:h-5 md:w-5 text-add8e6" />
                          </motion.div>
                          <h3 className="font-semibold text-xs md:text-base text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">Nairobi</h3>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">In the heart of the capital, we help businesses shine and homes feel like a sanctuary. We're here for you 24/7.</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-add8e6/5 via-transparent to-add8e6/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                          <motion.div 
                            className="bg-add8e6/10 p-1.5 md:p-2 rounded-lg group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <MapPin className="h-4 w-4 md:h-5 md:w-5 text-add8e6" />
                          </motion.div>
                          <h3 className="font-semibold text-xs md:text-base text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">Mombasa</h3>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">From bustling hotels to peaceful seaside homes, we provide a fresh, clean environment for the coastal community.</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-add8e6/5 via-transparent to-add8e6/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                          <motion.div 
                            className="bg-add8e6/10 p-1.5 md:p-2 rounded-lg group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <MapPin className="h-4 w-4 md:h-5 md:w-5 text-add8e6" />
                          </motion.div>
                          <h3 className="font-semibold text-xs md:text-base text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">Kaimosi</h3>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">We're honored to support the places that matter most, providing top-tier cleaning for schools and healthcare facilities.</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-add8e6/5 via-transparent to-add8e6/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                          <motion.div 
                            className="bg-add8e6/10 p-1.5 md:p-2 rounded-lg group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <MapPin className="h-4 w-4 md:h-5 md:w-5 text-add8e6" />
                          </motion.div>
                          <h3 className="font-semibold text-xs md:text-base text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">Eldoret</h3>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">In the City of Champions, we deliver championship-level cleaning for everything from sports complexes to industrial sites.</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-add8e6/5 via-transparent to-add8e6/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                          <motion.div 
                            className="bg-add8e6/10 p-1.5 md:p-2 rounded-lg group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <MapPin className="h-4 w-4 md:h-5 md:w-5 text-add8e6" />
                          </motion.div>
                          <h3 className="font-semibold text-xs md:text-base text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">Kisumu</h3>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Bringing a fresh sparkle to the vibrant lakeside city, we serve homes and businesses with care and dedication.</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-add8e6/5 via-transparent to-add8e6/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                          <motion.div 
                            className="bg-add8e6/10 p-1.5 md:p-2 rounded-lg group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <MapPin className="h-4 w-4 md:h-5 md:w-5 text-add8e6" />
                          </motion.div>
                          <h3 className="font-semibold text-xs md:text-base text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">Nakuru</h3>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">In the heart of the Rift Valley, we're proud to offer our reliable cleaning services to this bustling, growing city.</p>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div 
                    className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-add8e6/5 via-transparent to-add8e6/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className="bg-add8e6/10 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <MapPin className="h-6 w-6 text-add8e6" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-gray-800 dark:text-white mb-1 group-hover:text-add8e6 transition-colors md:text-base">Coming Soon to a Town Near You!</h3>
                          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                            We're excited to be growing! Our goal is to bring our friendly, reliable cleaning services to more communities across Kenya, with plans to reach 10 major cities by 2025.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* CEO Message */}
      <div className="relative py-12 md:py-20">
        {/* Background matching home page pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#add8e6_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
        </div>

        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-16">
                <motion.div 
                  className="inline-block mb-3 sm:mb-4 md:mb-6 mt-0 !mt-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2 shadow-sm mt-0 !mt-0">
                    <Sparkles className="w-4 h-4" />
                  Leadership
                </span>
                </motion.div>
                <motion.h2 
                  className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  A Message from Our{" "}
                  <motion.span 
                    className="text-add8e6 relative inline-block [text-shadow:0_2px_4px_rgba(173,216,230,0.3)] [-webkit-text-stroke:0.5px_rgba(173,216,230,0.3)] dark:[text-shadow:none] dark:[-webkit-text-stroke:none]"
                  >
                    CEO
                    <motion.span 
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                  </motion.span>
                </motion.h2>
              </div>

              <motion.div 
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-12">
                  {/* CEO Image */}
                  <motion.div 
                    className="relative h-full min-h-[300px] md:min-h-[500px] rounded-xl overflow-hidden group"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(173,216,230,0.1),transparent_70%)] animate-pulse" />
                    <Image
                      src="/ceo.jpg?height=800&width=600"
                      alt="David Simwa - Founder & CEO of Simca Agencies"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20">
                      <motion.div 
                        className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 md:p-4 rounded-xl shadow-lg"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="font-semibold text-xs md:text-sm text-gray-800 dark:text-white">David Simwa</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300">Founder & CEO</p>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Message Content */}
                  <div className="flex flex-col justify-center h-full">
                    <motion.blockquote 
                      className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-8 relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-add8e6/20 rounded-full" />
                      <div className="pl-4">
                        When I started Simca Agencies, my goal was simple: to create a cleaning service I'd want for my own family. I believe a clean home is more than just a tidy space—it's a place where you can feel happy, healthy, and at peace. We're not just a company; we're your neighbors, a team of caring people dedicated to making your life a little easier and your home a lot brighter. Thank you for trusting us. It means the world to us, and we'll always work our hardest to earn that trust, one spotless room at a time.
                      </div>
                    </motion.blockquote>

                    <div className="space-y-4 md:space-y-6">
                      <motion.div 
                        className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-add8e6/5 via-transparent to-add8e6/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative z-10 flex items-start gap-4">
                          <motion.div 
                            className="bg-add8e6/10 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Award className="h-5 w-5 text-add8e6" />
                          </motion.div>
                          <div>
                            <h3 className="font-semibold text-sm md:text-base text-gray-800 dark:text-white mb-1 group-hover:text-add8e6 transition-colors">Our Promise to You</h3>
                            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Our certifications are our promise that you'll always receive a reliable, top-quality clean you can trust.</p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-add8e6/5 via-transparent to-add8e6/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative z-10 flex items-start gap-4">
                          <motion.div 
                            className="bg-add8e6/10 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Sparkles className="h-5 w-5 text-add8e6" />
                          </motion.div>
                          <div>
                            <h3 className="font-semibold text-sm md:text-base text-gray-800 dark:text-white mb-1 group-hover:text-add8e6 transition-colors">A Fresh Approach</h3>
                            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">We love finding new ways to make your space shine, including using eco-friendly products that are safe for your family.</p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-add8e6/5 via-transparent to-add8e6/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative z-10 flex items-start gap-4">
                          <motion.div 
                            className="bg-add8e6/10 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Users className="h-5 w-5 text-add8e6" />
                          </motion.div>
                          <div>
                            <h3 className="font-semibold text-sm md:text-base text-gray-800 dark:text-white mb-1 group-hover:text-add8e6 transition-colors">Always Here for You</h3>
                            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">With 200+ happy clients and 24/7 support, we're always ready to create a custom cleaning plan that fits your life.</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />
    </div>
  )
}
