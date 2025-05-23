"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, User, BookOpen, Sparkles, Clock, List, Users, Home, Building2, Layers, Leaf, Construction, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("all")
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

  // Reset current page when changing categories
  useEffect(() => {
    setCurrentPage(0)
  }, [activeCategory])

  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Spring Cleaning Your Home",
      excerpt:
        "Learn the best techniques and tips for a thorough spring cleaning that will leave your home fresh and spotless.",
      date: "May 15, 2025",
      author: "Jane Mwangi",
      category: "Residential",
      image: "/blog/spring-cleaning.jpg?height=600&width=800",
    },
    {
      id: 2,
      title: "How to Maintain a Clean Office Environment",
      excerpt:
        "Discover strategies for keeping your workplace clean and organized, boosting productivity and employee satisfaction.",
      date: "April 28, 2025",
      author: "John Kamau",
      category: "Commercial",
      image: "/blog/office-cleaning.jpg?height=600&width=800",
    },
    {
      id: 3,
      title: "The Benefits of Professional Carpet Cleaning",
      excerpt:
        "Why professional carpet cleaning is essential for extending the life of your carpets and maintaining a healthy home.",
      date: "April 10, 2025",
      author: "Sarah Ochieng",
      category: "Carpet Care",
      image: "/blog/carpet-cleaning.jpg?height=600&width=800",
    },
    {
      id: 4,
      title: "Eco-Friendly Cleaning Solutions for Your Home",
      excerpt:
        "Explore environmentally friendly cleaning products and methods that are safe for your family and the planet.",
      date: "March 22, 2025",
      author: "David Njoroge",
      category: "Green Cleaning",
      image: "/blog/eco-friendly.jpg?height=600&width=800",
    },
    {
      id: 5,
      title: "Post-Construction Cleaning: What to Expect",
      excerpt:
        "A comprehensive guide to post-construction cleaning services and why they are essential after any building project.",
      date: "March 5, 2025",
      author: "Peter Wanjiku",
      category: "Construction",
      image: "/blog/post-construction.jpeg?height=600&width=800",
    },
    {
      id: 6,
      title: "How to Choose the Right Cleaning Service for Your Needs",
      excerpt: "Factors to consider when selecting a professional cleaning service for your home or business in Kenya.",
      date: "February 18, 2025",
      author: "Mary Akinyi",
      category: "Tips",
      image: "/blog/cleaning-services.png?height=600&width=800",
    },
  ]

  const categories = [
    { 
      name: "Residential", 
      count: blogPosts.filter(post => post.category === "Residential").length,
      icon: Home 
    },
    { 
      name: "Commercial", 
      count: blogPosts.filter(post => post.category === "Commercial").length,
      icon: Building2 
    },
    { 
      name: "Carpet Care", 
      count: blogPosts.filter(post => post.category === "Carpet Care").length,
      icon: Layers 
    },
    { 
      name: "Green Cleaning", 
      count: blogPosts.filter(post => post.category === "Green Cleaning").length,
      icon: Leaf 
    },
    { 
      name: "Construction", 
      count: blogPosts.filter(post => post.category === "Construction").length,
      icon: Construction 
    },
    { 
      name: "Tips", 
      count: blogPosts.filter(post => post.category === "Tips").length,
      icon: Lightbulb 
    },
  ]

  const filteredPosts = activeCategory === "all" 
    ? blogPosts.slice(1) 
    : blogPosts.slice(1).filter(post => post.category === activeCategory)

  // Calculate total pages based on filtered posts
  const totalPages = filteredPosts.length

  // Navigation functions
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  // Get current cards
  const getCurrentCards = () => {
    if (isMobile) {
      return [filteredPosts[currentPage]]
    }
    return filteredPosts
  }

  const recentPosts = blogPosts.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-16 md:py-24">
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
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-2">
                  <BookOpen className="w-3 h-3 md:w-4 md:h-4" />
                  Expert Insights
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight">
                Cleaning Tips &{" "}
                <span className="text-add8e6 relative">
                  Insights
                  <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full" />
                </span>
              </h1>
              <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                Discover expert cleaning techniques, industry insights, and practical tips to maintain pristine spaces. From residential deep cleaning to commercial maintenance, our comprehensive guides help you achieve professional-grade results.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-8">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center">
                  <div className="text-2xl md:text-3xl font-bold text-add8e6 mb-1 md:mb-2 flex items-center justify-center gap-2">
                    <BookOpen className="w-4 h-4 text-add8e6" />
                    <span className="group-hover:scale-110 transition-transform duration-300">50+</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    Expert Articles
                  </div>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center">
                  <div className="text-2xl md:text-3xl font-bold text-add8e6 mb-1 md:mb-2 flex items-center justify-center gap-2">
                    <List className="w-4 h-4 text-add8e6" />
                    <span className="group-hover:scale-110 transition-transform duration-300">6</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    Categories
                  </div>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center">
                  <div className="text-2xl md:text-3xl font-bold text-add8e6 mb-1 md:mb-2 flex items-center justify-center gap-2">
                    <Users className="w-4 h-4 text-add8e6" />
                    <span className="group-hover:scale-110 transition-transform duration-300">10k+</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    Monthly Readers
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Featured Post */}
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
            <div className="max-w-6xl mx-auto">
              <motion.div 
                className="text-center mb-12 md:mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium inline-flex items-center gap-2 mb-3 md:mb-4 shadow-sm">
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                  Featured Article
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight tracking-wide">
                  Latest{" "}
                  <span className="text-add8e6 relative inline-block tracking-wider">
                    Insights
                    <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full" />
                  </span>
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <motion.div 
                  className="relative group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="relative h-[300px] md:h-[500px] rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={blogPosts[0].image || "/placeholder.svg"}
                      alt={blogPosts[0].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          {blogPosts[0].title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {blogPosts[0].excerpt}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  <motion.div 
                    className="absolute -bottom-6 -right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="bg-add8e6/20 text-add8e6 px-4 py-2 rounded-full text-sm font-medium">
                      {blogPosts[0].category}
                    </span>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 leading-tight tracking-wide">
                        {blogPosts[0].title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        {blogPosts[0].excerpt}
                      </p>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{blogPosts[0].date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{blogPosts[0].author}</span>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <Link
                        href={`/blog/${blogPosts[0].id}`}
                        className="inline-flex items-center text-add8e6 hover:text-add8e6/80 transition-colors duration-300 group"
                      >
                        Read More
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          whileHover={{ x: 5 }}
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
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-16 md:py-24">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 animate-gradient">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(173,216,230,0.1),transparent_70%)] animate-pulse" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] dark:opacity-[0.03]" />
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-12 md:mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium inline-flex items-center gap-2 mb-3 md:mb-4">
                  <BookOpen className="w-3 h-3 md:w-4 md:h-4" />
                  Latest Articles
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight">
                  Explore Our{" "}
                  <span className="text-add8e6 relative">
                    Articles
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-add8e6/20 rounded-full" />
                  </span>
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Discover expert insights, tips, and industry trends in our latest articles
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                <div className="md:col-span-2">
                  {/* Mobile Categories - Only visible on mobile */}
                  <div className="md:hidden mb-8">
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      <motion.button
                        onClick={() => setActiveCategory("all")}
                        className={`group flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                          activeCategory === "all"
                            ? "bg-gradient-to-r from-add8e6 to-add8e6/90 text-white shadow-lg shadow-add8e6/20"
                            : "bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 backdrop-blur-sm"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <BookOpen className="w-4 h-4" />
                        All Posts
                      </motion.button>
                      {categories.map((category) => (
                        <motion.button
                          key={category.name}
                          onClick={() => setActiveCategory(category.name)}
                          className={`group flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                            activeCategory === category.name
                              ? "bg-gradient-to-r from-add8e6 to-add8e6/90 text-white shadow-lg shadow-add8e6/20"
                              : "bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 backdrop-blur-sm"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <category.icon className="w-4 h-4" />
                          {category.name}
                        </motion.button>
                      ))}
                    </div>
                    <motion.p 
                      className="text-sm text-gray-600 dark:text-gray-400 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {activeCategory === "all" 
                        ? "Browse all our cleaning insights and tips"
                        : `Explore our ${activeCategory.toLowerCase()} cleaning articles`}
                    </motion.p>
                  </div>

                  {/* Blog Posts Grid/Carousel */}
                  <div className="relative">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                      <AnimatePresence mode="wait">
                        {getCurrentCards().map((post, index) => (
                          <motion.div
                            key={post.id}
                            initial={{ opacity: 0, x: isMobile ? 100 : 0 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: isMobile ? -100 : 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <ScrollAnimation>
                              <motion.div 
                                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                                whileHover={{ y: -5 }}
                              >
                                <div className="relative h-48">
                                  <Image
                                    src={post.image || "/placeholder.svg"}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  <motion.div 
                                    className="absolute top-4 left-4"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <span className="bg-add8e6/20 text-add8e6 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                                      {post.category}
                                    </span>
                                  </motion.div>
                                </div>
                                <div className="p-6">
                                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                                    <div className="flex items-center gap-2">
                                      <Calendar className="w-4 h-4" />
                                      <span>{post.date}</span>
                                    </div>
                                  </div>
                                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-add8e6 transition-colors duration-300 line-clamp-2">
                                    {post.title}
                                  </h3>
                                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                                    {post.excerpt}
                                  </p>
                                  <Link
                                    href={`/blog/${post.id}`}
                                    className="inline-flex items-center text-add8e6 hover:text-add8e6/80 transition-colors duration-300 group"
                                  >
                                    Read More
                                    <motion.svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-5 w-5 ml-2"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      whileHover={{ x: 5 }}
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
                              </motion.div>
                            </ScrollAnimation>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>

                    {/* Mobile Navigation Buttons - Moved below articles */}
                    <div className="md:hidden flex flex-col items-center gap-4 mt-8">
                      {/* Mobile Pagination Dots */}
                      <div className="flex justify-center items-center gap-2">
                        {Array.from({ length: totalPages }).map((_, index) => (
                          <motion.button
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              currentPage === index
                                ? 'bg-add8e6 w-4'
                                : 'bg-gray-300 dark:bg-gray-600 hover:bg-add8e6/50'
                            }`}
                            aria-label={`Go to article ${index + 1}`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          />
                        ))}
                      </div>

                      <div className="flex items-center gap-4">
                        <motion.button
                          onClick={prevPage}
                          className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50 active:scale-95"
                          aria-label="Previous article"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                        </motion.button>
                        
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {currentPage + 1} of {totalPages}
                        </span>

                        <motion.button
                          onClick={nextPage}
                          className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50 active:scale-95"
                          aria-label="Next article"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 md:space-y-8">
                  {/* Categories Card - Only visible on desktop */}
                  <motion.div 
                    className="hidden md:block bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-4 md:p-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 md:h-5 md:w-5 text-add8e6" />
                      Categories
                    </h3>
                    <ul className="space-y-2 md:space-y-3">
                      <motion.li 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        <button
                          onClick={() => setActiveCategory("all")}
                          className={`w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group ${
                            activeCategory === "all" ? "bg-gray-50 dark:bg-gray-700/50" : ""
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="bg-add8e6/10 p-2 rounded-lg group-hover:bg-add8e6/20 transition-colors">
                              <BookOpen className="w-4 h-4 text-add8e6" />
                            </span>
                            <span className="text-gray-600 dark:text-gray-300 group-hover:text-add8e6 transition-colors">
                              All Posts
                            </span>
                          </div>
                          <motion.span 
                            className="bg-add8e6/10 text-add8e6 px-3 py-1 rounded-full text-sm font-medium"
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
                          transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                        >
                          <button
                            onClick={() => setActiveCategory(category.name)}
                            className={`w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group ${
                              activeCategory === category.name ? "bg-gray-50 dark:bg-gray-700/50" : ""
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="bg-add8e6/10 p-2 rounded-lg group-hover:bg-add8e6/20 transition-colors">
                                <category.icon className="w-4 h-4 text-add8e6" />
                              </span>
                              <span className="text-gray-600 dark:text-gray-300 group-hover:text-add8e6 transition-colors">
                                {category.name}
                              </span>
                            </div>
                            <motion.span 
                              className="bg-add8e6/10 text-add8e6 px-3 py-1 rounded-full text-sm font-medium"
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
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-4 md:p-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="flex items-center justify-between mb-4 md:mb-6">
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                        <Clock className="h-4 w-4 md:h-5 md:w-5 text-add8e6" />
                        Recent Posts
                      </h3>
                      <Link
                        href="/blog"
                        className="text-sm text-add8e6 hover:text-add8e6/80 transition-colors flex items-center gap-1 group"
                      >
                        View All
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          whileHover={{ x: 5 }}
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
                    <div className="space-y-4 md:space-y-6">
                      {recentPosts.map((post, index) => (
                        <motion.div 
                          key={post.id} 
                          className="group"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        >
                          <Link href={`/blog/${post.id}`} className="block">
                            <div className="flex items-start gap-3 md:gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300">
                              <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-xl overflow-hidden flex-shrink-0">
                                <Image
                                  src={post.image || "/placeholder.svg"}
                                  alt={post.title}
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                                  sizes="(max-width: 768px) 100vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2 mb-1 md:mb-2">
                                  <span className="bg-add8e6/10 text-add8e6 px-2 py-1 rounded-full text-xs font-medium">
                                    {post.category}
                                  </span>
                                </div>
                                <h4 className="font-medium text-sm md:text-base text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors line-clamp-2 mb-1">
                                  {post.title}
                                </h4>
                                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                                  {post.excerpt}
                                </p>
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
