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
          value: "19+", 
          label: "YEARS IN SERVICE", 
        },
        { 
          value: "6+", 
          label: "SECTORS SERVED", 
        },
        { 
          value: "100%", 
          label: "KENYAN OWNED", 
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

  // Cards data for the "Why Choose SIMCA" section
  const cards = [
    {
      icon: FaUserFriends,
      title: "Highly Trained & Disciplined Staff",
      description: "Our team members are carefully selected, thoroughly trained, and committed to excellence. All our staff are Kenyan citizens who take pride in delivering exceptional service."
    },
    {
      icon: MdAutoAwesome,
      title: "Eco-Friendly Products & Modern Equipment",
      description: "We use environmentally responsible products and state-of-the-art machinery to deliver superior results while caring for our planet and your health."
    },
    {
      icon: HiShieldCheck,
      title: "Regular Supervision & Quality Inspections",
      description: "Our dedicated supervisors conduct regular quality checks to ensure every space meets our high standards. We never compromise on the results you deserve."
    },
    {
      icon: FaAward,
      title: "Fast Response to Your Needs",
      description: "When you need us, we are there. Our team responds quickly to your requests because we understand that timely service matters to you."
    },
    {
      icon: MdGroups,
      title: "Occupational Health & Safety Compliant",
      description: "Your safety is our priority. We follow strict OHS protocols and ensure all our operations meet the highest safety standards in the industry."
    },
    {
      icon: FaTags,
      title: "Comprehensive Insurance Coverage",
      description: "We provide complete peace of mind with third party and public liability insurance, employer's liability, workman's compensation, and insurance against loss and damage to property."
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
                Since 2005, Simca Agencies has been a fully Kenyan-owned professional cleaning company dedicated to delivering world-class standards. From government institutions and hospitals to hotels, schools, and industrial facilities, we care for Kenya's most important spaces with trained teams, modern equipment, and a genuine commitment to excellence.
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
                    Our Vision & Mission
                  </span>
                </motion.div>
                <motion.h2 
                  className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 md:mb-5 leading-tight tracking-wide"
                >
                  Why Choose{" "}
                  <motion.span 
                    className="text-add8e6 relative inline-block"
                  >
                    SIMCA
                    <motion.span 
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </motion.span>
                </motion.h2>
                {/* Vision Statement */}
                <motion.div 
                  className="mb-4 p-4 bg-add8e6/5 rounded-lg border border-add8e6/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <p className="text-xs font-semibold text-add8e6 uppercase tracking-wider mb-2">Our Vision</p>
                  <p className="text-sm md:text-base text-gray-700 dark:text-gray-200">
                    To be the most respected and trusted professional cleaning services provider in Kenya, delivering world-class standards through innovation, excellence, and a highly motivated workforce.
                  </p>
                </motion.div>
                {/* Mission Statement */}
                <motion.div 
                  className="text-left p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-xs font-semibold text-add8e6 uppercase tracking-wider mb-3">Our Mission</p>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-add8e6 rounded-full mt-1.5 flex-shrink-0"></span>
                      <span>Deliver superior quality through modern technology and efficient systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-add8e6 rounded-full mt-1.5 flex-shrink-0"></span>
                      <span>Build long-term client relationships based on trust and consistency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-add8e6 rounded-full mt-1.5 flex-shrink-0"></span>
                      <span>Empower staff through continuous training and motivation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-add8e6 rounded-full mt-1.5 flex-shrink-0"></span>
                      <span>Uphold the highest standards of hygiene, safety, and professionalism</span>
                    </li>
                  </ul>
                </motion.div>
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
                  From humble beginnings in Mombasa to becoming one of Kenya's largest and most specialized cleaning companies, our journey is built on trust, dedication, and a genuine passion for excellence.
                </motion.p>
              </div>

              {/* Timeline Container */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-add8e6/20 dark:bg-add8e6/30 hidden md:block" />

                <div className="space-y-4 md:space-y-6">
                  {/* 2005 */}
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
                          2005
                        </motion.span>
                        <motion.h3 
                          className="text-sm md:text-base font-semibold text-gray-800 dark:text-white"
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          A Dream Takes Root in Mombasa
                        </motion.h3>
                      </div>
                      <motion.p 
                        className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        Simca Agencies was born from a simple vision: to create a professional cleaning company that Kenyans could truly rely on. Starting in Mombasa with a dedicated team and a passion for excellence, we set out to serve our community with care, integrity, and a commitment to spotless results.
                      </motion.p>
                      <motion.div 
                        className="mt-2 md:mt-3 flex items-center gap-2 text-[10px] md:text-xs text-gray-500 dark:text-gray-400"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="w-1 h-1 bg-add8e6 rounded-full"></span>
                        <span>100% Kenyan-Owned from Day One</span>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* 2009 */}
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
                          2009
                        </motion.span>
                        <motion.h3 
                          className="text-sm md:text-base font-semibold text-gray-800 dark:text-white"
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          Officially Registered & Growing
                        </motion.h3>
                      </div>
                      <motion.p 
                        className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        After four years of building trust and serving our clients with excellence, Simca Agencies was officially registered (CPR/2009/10398). This milestone marked our commitment to professional standards and opened doors to serve government institutions, hospitals, and larger commercial clients.
                      </motion.p>
                      <motion.div 
                        className="mt-2 md:mt-3 flex items-center gap-2 text-[10px] md:text-xs text-gray-500 dark:text-gray-400"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="w-1 h-1 bg-add8e6 rounded-full"></span>
                        <span>Company Registration: CPR/2009/10398</span>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Growth Years */}
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
                          2010s
                        </motion.span>
                        <motion.h3 
                          className="text-sm md:text-base font-semibold text-gray-800 dark:text-white"
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          Expanding Our Reach & Services
                        </motion.h3>
                      </div>
                      <motion.p 
                        className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        As more organizations trusted us with their facilities, we expanded our services beyond contract cleaning to include specialized cleaning, hygiene supplies, landscaping, and labour outsourcing. Our team grew, our equipment modernized, and we invested heavily in training our staff to meet the stringent standards demanded by hospitals, hotels, and government institutions.
                      </motion.p>
                      <motion.div 
                        className="mt-2 md:mt-3 flex items-center gap-2 text-[10px] md:text-xs text-gray-500 dark:text-gray-400"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="w-1 h-1 bg-add8e6 rounded-full"></span>
                        <span>5 Core Service Areas Established</span>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Today */}
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
                          Today
                        </motion.span>
                        <motion.h3 
                          className="text-sm md:text-base font-semibold text-gray-800 dark:text-white"
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          Kenya's Trusted Cleaning Partner
                        </motion.h3>
                      </div>
                      <motion.p 
                        className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        After nearly two decades, Simca Agencies has evolved to become one of the largest and most specialized cleaning companies in Kenya. We are proud to serve prestigious organizations including Kenya Ports Authority, Kenya Maritime Authority, and Mombasa Polytechnic University. Our success lies in our ability to train and manage staff to achieve the stringent standards our clients deserve.
                      </motion.p>
                      <motion.div 
                        className="mt-2 md:mt-3 flex items-center gap-2 text-[10px] md:text-xs text-gray-500 dark:text-gray-400"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="w-1 h-1 bg-add8e6 rounded-full"></span>
                        <span>Trusted by Kenya's Leading Institutions</span>
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
                  From our headquarters in Mombasa, we extend our professional cleaning and facility services to communities across Kenya. Wherever we serve, our promise remains the same: world-class standards delivered with genuine care.
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
                      className="group relative bg-white dark:bg-gray-900/50 p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-2 border-add8e6/30 dark:border-add8e6/20"
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
                          <h3 className="font-semibold text-xs md:text-sm text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">Mombasa (Headquarters)</h3>
                          <span className="text-[10px] bg-add8e6/10 text-add8e6 px-2 py-0.5 rounded-full">HQ</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">New Canon Towers, Moi Avenue. Our home base where it all began. We proudly serve Kenya Ports Authority, Kenya Maritime Authority, and other leading institutions across the coastal region.</p>
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
                          <h3 className="font-semibold text-xs md:text-sm text-gray-800 dark:text-white mb-1 group-hover:text-add8e6 transition-colors">Growing Across Kenya</h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                            Our vision is to be the most respected and trusted professional cleaning services provider in Kenya. We continue to expand our reach, bringing world-class standards and genuine care to more communities every year.
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
                        When I founded Simca Agencies in 2005, my vision was clear: to build a professional cleaning company that Kenyans could truly rely on. A company where every staff member is trained, disciplined, and treats every facility with the same care they would give their own home. Today, I am proud that we serve some of Kenya's most important institutions, from hospitals and government offices to hotels and universities. Our success is built on the trust our clients place in us, and we work every day to honor that trust through excellence, innovation, and genuine care.
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
                            <h3 className="font-semibold text-xs md:text-sm text-gray-800 dark:text-white mb-1 group-hover:text-add8e6 transition-colors">Our Commitment to Excellence</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">We invest deeply in training our staff to meet the stringent standards demanded by Kenya's leading institutions.</p>
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
                            <h3 className="font-semibold text-xs md:text-sm text-gray-800 dark:text-white mb-1 group-hover:text-add8e6 transition-colors">Innovation & Modern Technology</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">We embrace modern equipment and eco-friendly products to deliver superior quality through efficient systems.</p>
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
                            <h3 className="font-semibold text-xs md:text-sm text-gray-800 dark:text-white mb-1 group-hover:text-add8e6 transition-colors">Our Kenyan Family</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">All our staff are Kenyan citizens. We are proud to provide employment and empower our people through continuous training and motivation.</p>
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
