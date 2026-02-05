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
            We care for your space like it's our own. Trained teams, modern equipment, and the peace of mind that comes with full insurance and safety compliance.
          </p>
        </motion.div>
        <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-6 space-y-3 md:space-y-4">
          {[
            {
              title: "Highly Trained & Disciplined Staff",
              icon: MdGroups,
              text: "Our people are our strength. Every team member is carefully selected, thoroughly trained, and committed to the highest standards. All our staff are Kenyan citizens who bring skill, discipline, and genuine care to every job."
            },
            {
              title: "Eco-Friendly Products & Modern Equipment",
              icon: MdAutoAwesome,
              text: "We invest in the latest cleaning technology and environmentally responsible products. From industrial scrubbers to specialized floor care machines, our equipment delivers exceptional results while protecting your space and our planet."
            },
            {
              title: "Regular Supervision & Quality Inspections",
              icon: FaUserCog,
              text: "Quality is never left to chance. Our supervisors conduct regular inspections to ensure consistent, high standards. We monitor every detail, follow strict cleaning protocols, and maintain open communication with our clients."
            },
            {
              title: "Fast Response to Your Needs",
              icon: FaTags,
              text: "When you need us, we're there. Our team responds quickly to requests, adjustments, and emergencies. We understand that your time matters, and we work around your schedule to minimize disruption to your operations."
            },
            {
              title: "Occupational Health & Safety Compliant",
              icon: HiShieldCheck,
              text: "Your safety and ours is paramount. We follow strict OHS standards, train our staff in safe work practices, and maintain a health-conscious approach to every job. You can trust that your facility is in responsible hands."
            },
            {
              title: "Comprehensive Insurance Coverage",
              icon: HiLockOpen,
              text: "Complete peace of mind, guaranteed. We carry third party and public liability insurance, employer's liability, workman's compensation, and coverage against loss or damage to property. Your facility is fully protected."
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
