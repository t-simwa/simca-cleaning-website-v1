"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import React from "react"
import { FaBuilding, FaPumpSoap, FaLeaf, FaUsers } from "react-icons/fa"
import { MdCleaningServices } from "react-icons/md"
import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

type Service = {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  link: string
  image: string
}

const services: Service[] = [
  {
    title: "Contract Cleaning",
    description: "Daily maintenance for hospitals, hotels, offices, and industrial facilities.",
    icon: FaBuilding,
    link: "/services/contract-cleaning",
    image: "/services/commercial-service.png",
  },
  {
    title: "Specialized Cleaning",
    description: "Deep cleaning, carpet care, post-construction cleanup, and restoration services.",
    icon: MdCleaningServices,
    link: "/services/specialized",
    image: "/services/carpet-cleaning.jpeg",
  },
  {
    title: "Hygiene Supplies",
    description: "Dispensers, sanitizers, and consumables to keep your facility fresh and hygienic.",
    icon: FaPumpSoap,
    link: "/services/hygiene-supplies",
    image: "/sanitization/hero.webp",
  },
  {
    title: "Landscaping & Gardening",
    description: "Grounds maintenance, lawn care, and office plant services.",
    icon: FaLeaf,
    link: "/services/landscaping-services",
    image: "/services/landscaping.webp",
  },
  {
    title: "Labour Outsourcing",
    description: "Trained cleaning staff and machine operators for permanent or temporary placement.",
    icon: FaUsers,
    link: "/services/labour-outsourcing",
    image: "/home-hero/hero-main.jpg",
  },
]

export default function ServicesOverview() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-900/20 dark:via-gray-900 dark:to-blue-800/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(173,216,230,0.1),transparent_70%)]" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-add8e6/10 text-add8e6 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Our Services
            </span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
            Our{" "}
            <span className="text-add8e6 relative inline-block">
              Services
              <motion.span
                className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-1 bg-add8e6/30 rounded-full origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </span>
          </h2>
          <p className="font-body text-base md:text-lg text-gray-600 dark:text-gray-300">
            Complete cleaning and facility solutions for every need.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={service.link}
                className="group block bg-white dark:bg-gray-900/50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-800"
              >
                {/* Service Image */}
                <div className="relative w-full h-40 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={80}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute bottom-3 left-3">
                    <div className="p-2.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-md">
                      <service.icon className="w-5 h-5 text-add8e6" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-add8e6 transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="font-body inline-flex items-center gap-1.5 text-sm font-semibold text-add8e6 group-hover:gap-2.5 transition-all duration-300">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
