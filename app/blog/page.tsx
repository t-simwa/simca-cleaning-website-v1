"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight, Phone } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { motion } from "framer-motion"
import { useState } from "react"
import React from "react"
// Unique icons from different icon libraries matching home page style
import { FaBuilding } from "react-icons/fa" // Font Awesome - Contract Cleaning
import { MdCleaningServices } from "react-icons/md" // Material Design - Specialized Cleaning
import { FaPumpSoap } from "react-icons/fa" // Font Awesome - Hygiene
import { FaLeaf } from "react-icons/fa" // Font Awesome - Green/Eco-friendly
import { MdLightbulb } from "react-icons/md" // Material Design - Tips
import { MdBook } from "react-icons/md" // Material Design - Book/Articles
import { MdStars } from "react-icons/md" // Material Design - Stars/Featured
import { MdAccessTime } from "react-icons/md" // Material Design - Clock/Recent
import BreadcrumbSchema, { breadcrumbConfigs } from "@/components/schema/breadcrumb-schema"
import { blogPosts } from "@/lib/blog-data"

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { 
      name: "Contract Cleaning", 
      count: blogPosts.filter(post => post.category === "Contract Cleaning").length,
      icon: FaBuilding 
    },
    { 
      name: "Specialized Cleaning", 
      count: blogPosts.filter(post => post.category === "Specialized Cleaning").length,
      icon: MdCleaningServices 
    },
    { 
      name: "Hygiene", 
      count: blogPosts.filter(post => post.category === "Hygiene").length,
      icon: FaPumpSoap 
    },
    { 
      name: "Professional Tips", 
      count: blogPosts.filter(post => post.category === "Professional Tips").length,
      icon: MdLightbulb 
    },
  ]

  const filteredPosts = activeCategory === "all" 
    ? blogPosts.slice(1) 
    : blogPosts.slice(1).filter(post => post.category === activeCategory)

  const recentPosts = blogPosts.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Schema Markup for AI Search Optimization (GEO) */}
      <BreadcrumbSchema items={breadcrumbConfigs.blog} />
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Image */}
        <motion.img
          src="/blog/spring-cleaning.jpg"
          alt="Expert cleaning tips and insights"
          className="object-cover object-center w-full h-full absolute inset-0"
          style={{ zIndex: 0 }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 10, ease: 'easeOut' }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55 z-10" />

        <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 relative flex-grow flex flex-col justify-center z-20">
          <div className="flex flex-col items-center">
            {/* Centered Content */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.1 },
                },
              }}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <motion.div
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } } }}
                className="inline-block mb-4 sm:mb-4 md:mb-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2 shadow-sm">
                  <MdBook className="w-3.5 h-3.5" />
                  Expert Insights
                </span>
              </motion.div>

              <motion.h1
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } } }}
                className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-wide"
              >
                Cleaning Tips &{" "}
                <span className="text-fff relative inline-block">
                  Insights
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
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } } }}
                className="font-body text-base md:text-lg lg:text-xl text-gray-200 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed tracking-wide"
              >
                Expert cleaning insights from nearly two decades of professional experience.
              </motion.p>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } } }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact-form')
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className="font-body inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-6 md:px-8 py-3 md:py-3.5 font-semibold transition-all duration-300 group text-sm md:text-base tracking-wide rounded-lg shadow-lg hover:shadow-xl"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <a
                  href="tel:+254722839248"
                  className="font-body inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-6 md:px-8 py-3 md:py-3.5 font-semibold transition-all duration-300 group text-sm md:text-base tracking-wide rounded-lg shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  Call Us Now
                </a>
              </motion.div>
            </motion.div>
            </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Featured Post */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-12 md:py-16 lg:py-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(173,216,230,0.05),transparent_70%)]" />
        </div>
        
        {/* Subtle floating decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-200/5 dark:bg-blue-400/3 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-200/5 dark:bg-blue-400/3 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-6xl mx-auto">
              <motion.div 
                className="text-center mb-8 md:mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium inline-flex items-center gap-2 mb-3 md:mb-4 shadow-sm">
                  <MdStars className="w-3.5 h-3.5" />
                  Featured Article
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 md:mb-5 leading-tight tracking-wide">
                  Latest{" "}
                  <span className="text-add8e6 relative inline-block tracking-wider">
                    Insights
                    <motion.span
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      style={{ display: 'block' }}
                    />
                  </span>
                </h2>
                <p className="font-body text-base md:text-lg text-gray-600 dark:text-gray-300 tracking-wide leading-relaxed">
                  Expert cleaning insights and proven techniques for maintaining pristine spaces.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                <motion.div 
                  className="relative group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link href={`/blog/${blogPosts[0].slug}`}>
                    <div className="relative h-[240px] md:h-[360px] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800/50">
                      <Image
                        src={blogPosts[0].image || "/placeholder.svg"}
                        alt={blogPosts[0].title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm shadow-sm">
                          {blogPosts[0].category}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>

                <motion.div 
                  className="bg-white dark:bg-gray-900/50 rounded-lg p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800/50"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="font-heading text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-add8e6 transition-colors leading-tight">
                        {blogPosts[0].title}
                      </h3>
                      <p className="font-body text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                        {blogPosts[0].excerpt}
                      </p>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400 pt-3 border-t border-gray-100 dark:border-gray-800/50"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center gap-1.5">
                        <motion.div 
                          className="relative"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md" />
                            <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15">
                              <Calendar className="w-3.5 h-3.5 text-add8e6" />
                            </div>
                          </div>
                        </motion.div>
                        <span>{blogPosts[0].date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <motion.div 
                          className="relative"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md" />
                            <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15">
                              <User className="w-3.5 h-3.5 text-add8e6" />
                            </div>
                          </div>
                        </motion.div>
                        <span>{blogPosts[0].author}</span>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Link
                        href={`/blog/${blogPosts[0].slug}`}
                        className="inline-flex items-center text-add8e6 hover:text-add8e6/80 transition-colors duration-300 group text-xs md:text-sm font-medium"
                      >
                        Read More
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </motion.svg>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Blog Posts Grid */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-12 md:py-16 lg:py-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(173,216,230,0.05),transparent_70%)]" />
        </div>
        
        {/* Subtle floating decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-200/5 dark:bg-blue-400/3 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-200/5 dark:bg-blue-400/3 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-8 md:mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium inline-flex items-center gap-2 mb-3 md:mb-4 shadow-sm">
                  <MdBook className="w-3.5 h-3.5" />
                  Latest Articles
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 md:mb-5 leading-tight tracking-wide">
                  Explore Our{" "}
                  <span className="text-add8e6 relative inline-block tracking-wider">
                    Articles
                    <motion.span
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      style={{ display: 'block' }}
                    />
                  </span>
                </h2>
                <p className="font-body text-base md:text-lg text-gray-600 dark:text-gray-300 tracking-wide leading-relaxed">
                  Practical knowledge for facility managers and institutions.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                <div className="md:col-span-2">
                  {/* Mobile Categories - Only visible on mobile */}
                  <div className="md:hidden mb-6">
                    <div className="flex flex-wrap justify-center gap-2 mb-3">
                      <motion.button
                        onClick={() => setActiveCategory("all")}
                        className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                          activeCategory === "all"
                            ? "bg-gradient-to-r from-add8e6 to-add8e6/90 text-white shadow-md shadow-add8e6/20"
                            : "bg-white dark:bg-gray-900/50 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-800/50"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <MdBook className="w-3.5 h-3.5" />
                        All Posts
                      </motion.button>
                      {categories.map((category) => (
                        <motion.button
                          key={category.name}
                          onClick={() => setActiveCategory(category.name)}
                          className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                            activeCategory === category.name
                              ? "bg-gradient-to-r from-add8e6 to-add8e6/90 text-white shadow-md shadow-add8e6/20"
                              : "bg-white dark:bg-gray-900/50 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-800/50"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <category.icon className="w-3.5 h-3.5" />
                          {category.name}
                        </motion.button>
                      ))}
                    </div>
                    <motion.p 
                      className="text-xs text-gray-600 dark:text-gray-400 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {activeCategory === "all" 
                        ? "Browse all our cleaning insights and tips"
                        : `Explore our ${activeCategory.toLowerCase()} cleaning articles`}
                    </motion.p>
                  </div>

                  {/* Blog Posts Grid - Show all cards in grid - single column on mobile, multi-column on desktop */}
                  <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                      {filteredPosts.map((post, index) => (
                        <ScrollAnimation key={post.id}>
                          <Link href={`/blog/${post.slug}`}>
                            <motion.div 
                              className="group relative bg-white dark:bg-gray-900/50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 border border-gray-100 dark:border-gray-800/50"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: index * 0.05 }}
                              whileHover={{ y: -2 }}
                            >
                              <div className="relative h-40 mb-3">
                                <Image
                                  src={post.image || "/placeholder.svg"}
                                  alt={post.title}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                                {/* Category Badge */}
                                <div className="absolute top-2 left-2">
                                  <span className="bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm shadow-sm">
                                    {post.category}
                                  </span>
                                </div>
                              </div>
                              <div className="p-4">
                                <div className="flex items-center gap-2 mb-2.5">
                                  <motion.div 
                                    className="relative"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <div className="relative">
                                      <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md" />
                                      <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15">
                                        <Calendar className="w-3.5 h-3.5 text-add8e6" />
                                      </div>
                                    </div>
                                  </motion.div>
                                  <span className="text-xs text-gray-600 dark:text-gray-400">{post.date}</span>
                                </div>
                                <h3 className="font-heading text-sm md:text-base font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-add8e6 transition-colors duration-200 leading-tight">
                                  {post.title}
                                </h3>
                                <p className="font-body text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed line-clamp-2">
                                  {post.excerpt}
                                </p>
                                <div className="pt-2 border-t border-gray-100 dark:border-gray-800/50">
                                  <span className="text-xs text-add8e6 font-medium group-hover:gap-1.5 flex items-center gap-1 transition-all duration-200">
                                    Read more
                                    <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                                  </span>
                                </div>
                              </div>
                            </motion.div>
                          </Link>
                        </ScrollAnimation>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-5">
                  {/* Categories Card - Only visible on desktop */}
                  <motion.div 
                    className="hidden md:block bg-white dark:bg-gray-900/50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4 border border-gray-100 dark:border-gray-800/50"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="font-heading text-sm md:text-base font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                      <motion.div 
                        className="relative"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md" />
                          <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15">
                            <MdBook className="h-3.5 w-3.5 text-add8e6" />
                          </div>
                        </div>
                      </motion.div>
                      Categories
                    </h3>
                    <ul className="space-y-1.5">
                      <motion.li 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        <button
                          onClick={() => setActiveCategory("all")}
                          className={`w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group ${
                            activeCategory === "all" ? "bg-gray-50 dark:bg-gray-700/50" : ""
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <motion.div 
                              className="relative"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md" />
                                <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15">
                                  <MdBook className="w-3.5 h-3.5 text-add8e6" />
                                </div>
                              </div>
                            </motion.div>
                            <span className="text-xs text-gray-600 dark:text-gray-300 group-hover:text-add8e6 transition-colors">
                              All Posts
                            </span>
                          </div>
                          <motion.span 
                            className="bg-add8e6/10 text-add8e6 px-2 py-0.5 rounded-full text-xs font-medium"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {blogPosts.length}
                          </motion.span>
                        </button>
                      </motion.li>
                      {categories.map((category, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                        >
                          <button
                            onClick={() => setActiveCategory(category.name)}
                            className={`w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group ${
                              activeCategory === category.name ? "bg-gray-50 dark:bg-gray-700/50" : ""
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <motion.div 
                                className="relative"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="relative">
                                  <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md" />
                                  <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15">
                                    {React.createElement(category.icon, { 
                                      className: 'w-3.5 h-3.5 text-add8e6 group-hover:scale-110 transition-transform duration-300'
                                    })}
                                  </div>
                                </div>
                              </motion.div>
                              <span className="text-xs text-gray-600 dark:text-gray-300 group-hover:text-add8e6 transition-colors">
                                {category.name}
                              </span>
                            </div>
                            <motion.span 
                              className="bg-add8e6/10 text-add8e6 px-2 py-0.5 rounded-full text-xs font-medium"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              {category.count}
                            </motion.span>
                          </button>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Recent Posts Card */}
                  <motion.div 
                    className="bg-white dark:bg-gray-900/50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4 border border-gray-100 dark:border-gray-800/50"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-heading text-sm md:text-base font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                        <motion.div 
                          className="relative"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md" />
                            <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15">
                              <MdAccessTime className="h-3.5 w-3.5 text-add8e6" />
                            </div>
                          </div>
                        </motion.div>
                        Recent Posts
                      </h3>
                      <Link
                        href="/blog"
                        className="text-xs text-add8e6 hover:text-add8e6/80 transition-colors flex items-center gap-1 group"
                      >
                        View All
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </motion.svg>
                      </Link>
                    </div>
                    <div className="space-y-3">
                      {recentPosts.map((post, index) => (
                        <motion.div 
                          key={post.id} 
                          className="group"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                        >
                          <Link href={`/blog/${post.slug}`} className="block">
                            <div className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300">
                              <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                                <Image
                                  src={post.image || "/placeholder.svg"}
                                  alt={post.title}
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                                  sizes="(max-width: 768px) 100vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className="bg-add8e6/10 text-add8e6 px-1.5 py-0.5 rounded-full text-[10px] font-medium mb-1 inline-block">
                                  {post.category}
                                </span>
                                <h4 className="font-heading text-xs md:text-sm font-semibold text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors line-clamp-2 leading-tight">
                                  {post.title}
                                </h4>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
