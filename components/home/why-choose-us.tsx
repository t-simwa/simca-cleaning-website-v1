"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import React from "react"
// Unique icons from different icon libraries
import { FaUserCog } from "react-icons/fa" // Font Awesome - Personalized
import { FaTags } from "react-icons/fa" // Font Awesome - Affordable
import { MdGroups } from "react-icons/md" // Material Design - Team Trust
import { HiShieldCheck } from "react-icons/hi2" // Heroicons v2 - Guarantee
import { MdAutoAwesome } from "react-icons/md" // Material Design - Quality Results
import { HiLockOpen } from "react-icons/hi2" // Heroicons v2 - No Contracts
import { MdFavorite } from "react-icons/md" // Material Design - Favorite/Choice badge

export default function WhyChooseUs() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])

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
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-10 md:mb-12"
          style={{ opacity, scale }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-add8e6/20 to-add8e6/10 text-add8e6 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs font-medium mb-6 md:mb-6 backdrop-blur-sm">
            <MdFavorite className="w-3.5 h-3.5" />
            Why Choose Simca Agencies
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-6 md:mb-6 leading-tight tracking-wide">
            <span className="block mb-1">Why Choose Simca?</span>
            <span className="inline-block block mb-1 ml-2">
              Cleaning You Can <span className="text-add8e6 relative inline-block">Trust
                <motion.span
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  style={{ display: 'block' }}
                />
              </span>
            </span>
          </h2>
          <p className="text-sm md:text-base lg:text-sm text-gray-600 dark:text-gray-300 tracking-wide">
            We care for your space like it's our own. Friendly service, fair prices, and a spotless result—every time.
          </p>
        </motion.div>
        <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-6 space-y-3 md:space-y-4">
          {[
            {
              title: "Personalized Cleaning, Every Time:",
              icon: FaUserCog,
              text: "Every home and business is unique, and so are your cleaning needs. We listen to your requests and preferences, creating a custom cleaning plan that fits your schedule. Your space is cleaned your way, every time."
            },
            {
              title: "Affordable Services:",
              icon: FaTags,
              text: "Everyone deserves a clean, healthy space. We keep our prices fair and honest with no hidden fees. We'll work with your budget to create a cleaning plan that fits your needs and wallet. Quality cleaning that's accessible and stress-free."
            },
            {
              title: "A Team You Can Trust:",
              icon: MdGroups,
              text: "We're a local company with friendly, reliable staff you can count on. You'll see the same faces at every visit. We treat your property with respect, keep you informed, and are always happy to answer questions or adjust to your needs."
            },
            {
              title: "Satisfaction Guaranteed:",
              icon: HiShieldCheck,
              text: "Your peace of mind is our priority. If you're ever less than 100% satisfied, let us know within 24 hours and we'll return to make it right—at no extra cost. We stand by our promise because we want you to feel confident and valued every time."
            },
            {
              title: "Spotless Results, Every Visit:",
              icon: MdAutoAwesome,
              text: "A truly clean space is one you can see, feel, and enjoy. Our team pays attention to every detail, using safe, effective products and proven techniques to deliver a deep, lasting clean. You'll notice the difference right away."
            },
            {
              title: "No Contracts, No Worries:",
              icon: HiLockOpen,
              text: "Stay with us because you love our service, not because you're locked into a contract. Total flexibility—pause, cancel, or change your schedule anytime. No hidden fees or long-term commitments, just honest, straightforward service."
            }
          ].map((para, i) => (
            <motion.div 
              key={i} 
              className="group relative bg-white dark:bg-gray-900/50 rounded-lg p-3 md:p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-add8e6/30 focus:ring-offset-1 border border-gray-100 dark:border-gray-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="flex items-start gap-3">
                {/* Beautifully styled icon */}
                <motion.div 
                  className="relative flex-shrink-0 mt-0.5"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative">
                    {/* Gradient glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                    {/* Icon container */}
                    <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover:border-add8e6/30 transition-all duration-300">
                      {React.createElement(para.icon, { 
                        className: 'h-3.5 w-3.5 text-add8e6 group-hover:scale-110 transition-transform duration-300'
                      })}
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-add8e6 text-xs md:text-sm mb-1.5 group-hover:text-add8e6/80 transition-colors leading-tight">
                    {para.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {para.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
