"use client"

import React from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
// Unique icons from different icon libraries - matching home page style
import { FaUserFriends } from "react-icons/fa" // Font Awesome - Personal Touch
import { FaTags } from "react-icons/fa" // Font Awesome - Honest & Fair
import { HiShieldCheck } from "react-icons/hi2" // Heroicons v2 - Reliable & Trustworthy
import { MdStars } from "react-icons/md" // Material Design - Sparkles/Stars
import { FaMapMarkerAlt } from "react-icons/fa" // Font Awesome - Map Pin
import { FaAward } from "react-icons/fa" // Font Awesome - Award
import { MdAutoAwesome } from "react-icons/md" // Material Design - Sparkles/Awesome
import { MdGroups } from "react-icons/md" // Material Design - Users/Team
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import WhoWeAre from "@/components/home/who-we-are"

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
      className="grid grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto"
    >
      {[
        { 
          value: "15", 
          label: "YEARS OF EXCELLENCE", 
        },
        { 
          value: "188", 
          label: "TRAINED PROFESSIONALS", 
        },
        { 
          value: "6+", 
          label: "CITIES SERVED", 
        }
      ].map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          className="text-center"
        >
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3 tracking-tight">
            <CountUp end={stat.value} duration={1.5} inView={inView} />
          </div>
          <div className="text-[10px] md:text-xs text-gray-300 uppercase tracking-wider font-medium pb-1 border-b border-gray-400/30 inline-block">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default function AboutPage() {

  // Cards data for the "Our Mission & Values" section
  const cards = [
    {
      icon: FaUserFriends,
      title: "A Personal Touch",
      description: "We treat your space with the same care we'd give our own. Our friendly, reliable team gets to know you and your needs, so we can deliver a clean that's just right for you."
    },
    {
      icon: FaTags,
      title: "Honest & Fair",
      description: "We believe in clear, upfront pricing with no surprises. You get top-quality service at a fair price, so you can enjoy a clean home or office without any stress."
    },
    {
      icon: HiShieldCheck,
      title: "Reliable & Trustworthy",
      description: "Your peace of mind is our priority. Our team is carefully vetted, trained, and dedicated to delivering spotless results you can count on, every single time."
    }
  ]


  const heroImage = {
    src: "/about/about-hero.webp",
    alt: "Professional cleaning services in Kenya",
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
                className="inline-block mb-4 sm:mb-3 md:mb-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2">
                  <HiShieldCheck className="w-3.5 h-3.5" />
                  Our Story
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-wide"
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
                className="text-sm md:text-base lg:text-base text-gray-200 tracking-wide mb-8 md:mb-10 max-w-2xl mx-auto"
              >
                We started Simca in 2011 with a simple goal: to offer a cleaning service you can truly count on. We're not just about cleaning; we're about creating a healthier, more comfortable space for you and your family. We're your local team, dedicated to providing a personal touch and a spotless result, every single time.
              </motion.p>

              {/* Minimalist Stats Section */}
              <StatsSectionWithAnimation />
            </motion.div>
          </div>
        </div>
      </div>
      
      <WhoWeAre />

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Mission & Values */}
      <div className="relative py-12 md:py-16 lg:py-20">
        {/* Background matching home page pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#add8e6_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
        </div>

        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-6 md:mb-10">
                <motion.div 
                  className="inline-block mb-4 sm:mb-3 md:mb-5"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2 shadow-sm">
                    <MdStars className="w-3.5 h-3.5" />
                    Our Core Values
                  </span>
                </motion.div>
                <motion.h2 
                  className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 md:mb-5 leading-tight tracking-wide"
                >
                  Our Mission &{" "}
                  <motion.span 
                    className="text-add8e6 relative inline-block"
                  >
                    Values
                    <motion.span 
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </motion.span>
                </motion.h2>
                <motion.p 
                  className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Our mission is simple: to make your space feel like new again. We believe a clean environment isn't just about looking good—it's about creating a place where you can relax, be productive, and feel your best. We're dedicated to delivering a spotless, healthy, and happy space for you, every time.
                </motion.p>
              </div>

              {/* Values Grid */}
              <div className="relative">
                {/* Show all cards in grid - single column on mobile, multi-column on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                  {cards.map((card, index) => (
                    <motion.div 
                      key={index}
                      className="group relative bg-white dark:bg-gray-900/50 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-add8e6/30 focus:ring-offset-1 border border-gray-100 dark:border-gray-800/50"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <div className="flex flex-col h-full relative z-10">
                        {/* Beautifully styled icon */}
                        <motion.div 
                          className="relative flex-shrink-0 mb-4"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="relative">
                            {/* Gradient glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                            {/* Icon container */}
                            <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover:border-add8e6/30 transition-all duration-300">
                              {React.createElement(card.icon, { 
                                className: 'h-3.5 w-3.5 text-add8e6 group-hover:scale-110 transition-transform duration-300'
                              })}
                            </div>
                          </div>
                        </motion.div>
                        
                        <motion.h3 
                          className="font-semibold text-add8e6 text-xs md:text-sm mb-2 group-hover:text-add8e6/80 transition-colors leading-tight"
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {card.title}
                        </motion.h3>
                        
                        <motion.p 
                          className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed"
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {card.description}
                        </motion.p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Company History */}
      <div className="relative py-12 md:py-16 lg:py-20">
        {/* Background matching home page pattern */}
        <div className="absolute inset-0 bg-white dark:bg-gray-900">
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,#add8e6_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
        </div>

        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6 md:mb-10">
                <motion.div 
                  className="inline-block mb-4 sm:mb-3 md:mb-5"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2 shadow-sm">
                    <MdStars className="w-3.5 h-3.5" />
                    Our Journey
                  </span>
                </motion.div>
                <motion.h2 
                  className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 md:mb-5 leading-tight tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Our Growth{" "}
                  <motion.span 
                    className="text-add8e6 relative inline-block"
                  >
                    Story
                    <motion.span 
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </motion.span>
                </motion.h2>
                <motion.p 
                  className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
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

                <div className="space-y-4 md:space-y-6">
                  {/* 2011 */}
                  <motion.div 
                    className="relative pl-6 md:pl-8 pb-4 md:pb-6 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute left-0 top-0 w-0.5 h-full bg-add8e6/20 group-hover:bg-add8e6 transition-colors duration-300" />
                    <motion.div 
                      className="absolute w-3 h-3 md:w-4 md:h-4 bg-add8e6 rounded-full -left-[5px] md:-left-[7px] top-0 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="bg-white dark:bg-gray-900/50 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800/50"
                      whileHover={{ 
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                        <motion.span 
                          className="text-add8e6 font-bold text-xs md:text-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          2011
                        </motion.span>
                        <motion.h3 
                          className="text-sm md:text-base font-semibold text-gray-800 dark:text-white"
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          Our Humble Start
                        </motion.h3>
                      </div>
                      <motion.p 
                        className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        It all began in Mombasa with a small but dedicated team of 15 professionals and a big goal: to make homes and businesses feel welcoming and clean. We were thrilled to partner with our first 25+ residential and commercial clients, building relationships one spotless space at a time by offering everything from home cleaning to specialized office maintenance.
                      </motion.p>
                      <motion.div 
                        className="mt-2 md:mt-3 flex items-center gap-2 text-[10px] md:text-xs text-gray-500 dark:text-gray-400"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="w-1 h-1 bg-add8e6 rounded-full"></span>
                        <span>25+ Foundational Clients</span>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* 2017 */}
                  <motion.div 
                    className="relative pl-6 md:pl-8 pb-4 md:pb-6 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="absolute left-0 top-0 w-0.5 h-full bg-add8e6/20 group-hover:bg-add8e6 transition-colors duration-300" />
                    <motion.div 
                      className="absolute w-3 h-3 md:w-4 md:h-4 bg-add8e6 rounded-full -left-[5px] md:-left-[7px] top-0 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="bg-white dark:bg-gray-900/50 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800/50"
                      whileHover={{ 
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                        <motion.span 
                          className="text-add8e6 font-bold text-xs md:text-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          2017
                        </motion.span>
                        <motion.h3 
                          className="text-sm md:text-base font-semibold text-gray-800 dark:text-white"
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          Growing & Learning
                        </motion.h3>
                      </div>
                      <motion.p 
                        className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        As more people trusted us with their spaces, our family grew! We expanded our services to Mombasa and Eldoret, welcoming over 50 new commercial clients in hospitality and healthcare. To ensure we always delivered the best, we maintained our commitment to top-quality, reliable service.
                      </motion.p>
                    </motion.div>
                  </motion.div>

                  {/* 2020 */}
                  <motion.div 
                    className="relative pl-6 md:pl-8 pb-4 md:pb-6 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="absolute left-0 top-0 w-0.5 h-full bg-add8e6/20 group-hover:bg-add8e6 transition-colors duration-300" />
                    <motion.div 
                      className="absolute w-3 h-3 md:w-4 md:h-4 bg-add8e6 rounded-full -left-[5px] md:-left-[7px] top-0 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="bg-white dark:bg-gray-900/50 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800/50"
                      whileHover={{ 
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                        <motion.span 
                          className="text-add8e6 font-bold text-xs md:text-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          2020
                        </motion.span>
                        <motion.h3 
                          className="text-sm md:text-base font-semibold text-gray-800 dark:text-white"
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          Caring for Your Home & Our Planet
                        </motion.h3>
                      </div>
                      <motion.p 
                        className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        We've always believed in cleaning that's safe for your family and our planet. In 2020, we officially launched our Green Seal certified eco-friendly solutions. We also embraced new technology to ensure consistent, top-notch results, which helped us achieve a 98% client satisfaction rate that we're incredibly proud of.
                      </motion.p>
                      <motion.div 
                        className="mt-2 md:mt-3 flex items-center gap-2 text-[10px] md:text-xs text-gray-500 dark:text-gray-400"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="w-1 h-1 bg-add8e6 rounded-full"></span>
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
                      className="absolute w-3 h-3 md:w-4 md:h-4 bg-add8e6 rounded-full -left-[5px] md:-left-[7px] top-0 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="bg-white dark:bg-gray-900/50 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800/50"
                      whileHover={{ 
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                        <motion.span 
                          className="text-add8e6 font-bold text-xs md:text-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          2023
                        </motion.span>
                        <motion.h3 
                          className="text-sm md:text-base font-semibold text-gray-800 dark:text-white"
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          A Trusted Name in Cleaning
                        </motion.h3>
                      </div>
                      <motion.p 
                        className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        Today, our team of 188 dedicated professionals serves more than 200 clients across 6 major cities. Being named 'Best Cleaning Service Provider 2023' by the Kenya Business Awards was a wonderful honor, but our greatest achievement is the daily trust you place in us to care for your spaces.
                      </motion.p>
                      <motion.div 
                        className="mt-2 md:mt-3 flex items-center gap-2 text-[10px] md:text-xs text-gray-500 dark:text-gray-400"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="w-1 h-1 bg-add8e6 rounded-full"></span>
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
      <div className="relative py-12 md:py-16 lg:py-20">
        {/* Background matching home page pattern */}
        <div className="absolute inset-0 bg-gray-50 dark:bg-gray-800/50">
          <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px] opacity-5" />
        </div>

        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6 md:mb-10">
                <motion.div 
                  className="inline-block mb-4 sm:mb-3 md:mb-5"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2 shadow-sm">
                    <FaMapMarkerAlt className="w-3.5 h-3.5" />
                    Our Coverage
                  </span>
                </motion.div>
                <motion.h2 
                  className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 md:mb-5 leading-tight tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Our National{" "}
                  <motion.span 
                    className="text-add8e6 relative inline-block"
                  >
                    Footprint
                    <motion.span 
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </motion.span>
                </motion.h2>
                <motion.p 
                  className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Whether you're in the city or by the coast, our promise is the same: a spotless clean with a personal touch. We're proud to bring our trusted services to communities all across Kenya.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                <motion.div 
                  className="relative h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-md group"
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
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-20">
                    <motion.div 
                      className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 md:p-3 rounded-lg"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        Your local cleaning experts, wherever you are.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                <div className="space-y-3 md:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <motion.div 
                      className="group relative bg-white dark:bg-gray-900/50 p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800/50"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ 
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                          <motion.div 
                            className="relative"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                              <div className="relative p-1.5 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover:border-add8e6/30 transition-all duration-300">
                                <FaMapMarkerAlt className="h-3 w-3 text-add8e6 group-hover:scale-110 transition-transform duration-300" />
                              </div>
                            </div>
                          </motion.div>
                          <h3 className="font-semibold text-xs md:text-sm text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">Lamu</h3>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Preserving heritage while maintaining modern cleanliness standards in this UNESCO World Heritage site. We specialize in coastal property maintenance and hospitality cleaning.</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="group relative bg-white dark:bg-gray-900/50 p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800/50"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      whileHover={{ 
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                          <motion.div 
                            className="relative"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                              <div className="relative p-1.5 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover:border-add8e6/30 transition-all duration-300">
                                <FaMapMarkerAlt className="h-3 w-3 text-add8e6 group-hover:scale-110 transition-transform duration-300" />
                              </div>
                            </div>
                          </motion.div>
                          <h3 className="font-semibold text-xs md:text-sm text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">Mombasa</h3>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Our headquarters. From bustling hotels to peaceful seaside homes, we provide a fresh, clean environment for the coastal community.</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="group relative bg-white dark:bg-gray-900/50 p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800/50"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      whileHover={{ 
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                          <motion.div 
                            className="relative"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                              <div className="relative p-1.5 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover:border-add8e6/30 transition-all duration-300">
                                <FaMapMarkerAlt className="h-3 w-3 text-add8e6 group-hover:scale-110 transition-transform duration-300" />
                              </div>
                            </div>
                          </motion.div>
                          <h3 className="font-semibold text-xs md:text-sm text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">Kaimosi</h3>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">We're honored to support the places that matter most, providing top-tier cleaning for schools and healthcare facilities.</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="group relative bg-white dark:bg-gray-900/50 p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800/50"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      whileHover={{ 
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                          <motion.div 
                            className="relative"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                              <div className="relative p-1.5 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover:border-add8e6/30 transition-all duration-300">
                                <FaMapMarkerAlt className="h-3 w-3 text-add8e6 group-hover:scale-110 transition-transform duration-300" />
                              </div>
                            </div>
                          </motion.div>
                          <h3 className="font-semibold text-xs md:text-sm text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">Lodwar</h3>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Serving Northern Kenya with specialized cleaning solutions for arid region facilities. We understand the unique challenges of desert climate maintenance.</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="group relative bg-white dark:bg-gray-900/50 p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800/50"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      whileHover={{ 
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                          <motion.div 
                            className="relative"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                              <div className="relative p-1.5 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover:border-add8e6/30 transition-all duration-300">
                                <FaMapMarkerAlt className="h-3 w-3 text-add8e6 group-hover:scale-110 transition-transform duration-300" />
                              </div>
                            </div>
                          </motion.div>
                          <h3 className="font-semibold text-xs md:text-sm text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">Kisumu</h3>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Bringing a fresh sparkle to the vibrant lakeside city, we serve homes and businesses with care and dedication.</p>
                      </div>
                    </motion.div>

                  </div>

                  <motion.div 
                    className="group relative bg-white dark:bg-gray-900/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ 
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center gap-3">
                        <motion.div 
                          className="relative"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                            <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover:border-add8e6/30 transition-all duration-300">
                              <FaMapMarkerAlt className="h-3.5 w-3.5 text-add8e6 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                          </div>
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-xs md:text-sm text-gray-800 dark:text-white mb-1 group-hover:text-add8e6 transition-colors">Coming Soon to a Town Near You!</h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
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
      <div className="relative py-12 md:py-16 lg:py-20">
        {/* Background matching home page pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#add8e6_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
        </div>

        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6 md:mb-10">
                <motion.div 
                  className="inline-block mb-4 sm:mb-3 md:mb-5"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2 shadow-sm">
                    <MdStars className="w-3.5 h-3.5" />
                    Leadership
                  </span>
                </motion.div>
                <motion.h2 
                  className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 md:mb-5 leading-tight tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  A Message from Our{" "}
                  <motion.span 
                    className="text-add8e6 relative inline-block"
                  >
                    CEO
                    <motion.span 
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </motion.span>
                </motion.h2>
              </div>

              <motion.div 
                className="bg-white dark:bg-gray-900/50 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-800/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-4 md:p-6">
                  {/* CEO Image */}
                  <motion.div 
                    className="relative h-full min-h-[250px] md:min-h-[400px] rounded-lg overflow-hidden group"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                    <Image
                      src="/ceo.jpg?height=800&width=600"
                      alt="David Simwa - Founder & CEO of Simca Agencies"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-20">
                      <motion.div 
                        className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 md:p-3 rounded-lg shadow-md"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="font-semibold text-xs text-gray-800 dark:text-white">David Simwa</p>
                        <p className="text-[10px] text-gray-600 dark:text-gray-300">Founder & CEO</p>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Message Content */}
                  <div className="flex flex-col justify-center h-full">
                    <motion.blockquote 
                      className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 md:mb-6 relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="absolute -left-3 top-0 bottom-0 w-0.5 bg-add8e6/20 rounded-full" />
                      <div className="pl-3">
                        When I started Simca Agencies, my goal was simple: to create a cleaning service I'd want for my own family. I believe a clean home is more than just a tidy space—it's a place where you can feel happy, healthy, and at peace. We're not just a company; we're your neighbors, a team of caring people dedicated to making your life a little easier and your home a lot brighter. Thank you for trusting us. It means the world to us, and we'll always work our hardest to earn that trust, one spotless room at a time.
                      </div>
                    </motion.blockquote>

                    <div className="space-y-3 md:space-y-4">
                      <motion.div 
                        className="group relative bg-white dark:bg-gray-900/50 rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800/50"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ y: -2 }}
                      >
                        <div className="relative z-10 flex items-start gap-3">
                          <motion.div 
                            className="relative flex-shrink-0"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                              <div className="relative p-1.5 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover:border-add8e6/30 transition-all duration-300">
                                <FaAward className="h-3 w-3 text-add8e6 group-hover:scale-110 transition-transform duration-300" />
                              </div>
                            </div>
                          </motion.div>
                          <div>
                            <h3 className="font-semibold text-xs md:text-sm text-gray-800 dark:text-white mb-1 group-hover:text-add8e6 transition-colors">Our Promise to You</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Our certifications are our promise that you'll always receive a reliable, top-quality clean you can trust.</p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="group relative bg-white dark:bg-gray-900/50 rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800/50"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ y: -2 }}
                      >
                        <div className="relative z-10 flex items-start gap-3">
                          <motion.div 
                            className="relative flex-shrink-0"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                              <div className="relative p-1.5 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover:border-add8e6/30 transition-all duration-300">
                                <MdAutoAwesome className="h-3 w-3 text-add8e6 group-hover:scale-110 transition-transform duration-300" />
                              </div>
                            </div>
                          </motion.div>
                          <div>
                            <h3 className="font-semibold text-xs md:text-sm text-gray-800 dark:text-white mb-1 group-hover:text-add8e6 transition-colors">A Fresh Approach</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">We love finding new ways to make your space shine, including using eco-friendly products that are safe for your family.</p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="group relative bg-white dark:bg-gray-900/50 rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800/50"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -2 }}
                      >
                        <div className="relative z-10 flex items-start gap-3">
                          <motion.div 
                            className="relative flex-shrink-0"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                              <div className="relative p-1.5 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover:border-add8e6/30 transition-all duration-300">
                                <MdGroups className="h-3 w-3 text-add8e6 group-hover:scale-110 transition-transform duration-300" />
                              </div>
                            </div>
                          </motion.div>
                          <div>
                            <h3 className="font-semibold text-xs md:text-sm text-gray-800 dark:text-white mb-1 group-hover:text-add8e6 transition-colors">Always Here for You</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">With 200+ happy clients and 24/7 support, we're always ready to create a custom cleaning plan that fits your life.</p>
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
