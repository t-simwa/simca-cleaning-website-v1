"use client"

import { useState, useEffect } from "react"
import { Sparkles, TrendingUp, SprayCanIcon, Users, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function TikTokFeed() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [currentPage, setCurrentPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)

  const categories = [
    { id: "all", label: "All Content", icon: <Sparkles className="w-4 h-4" /> },
    { id: "cleaning", label: "Cleaning Tips", icon: <SprayCanIcon className="w-4 h-4" /> },
    { id: "before-after", label: "Before & After", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "team", label: "Team Stories", icon: <Users className="w-4 h-4" /> },
  ]

  const tiktokVideos = [
    { id: "7473409300124273925", category: "cleaning" },
    { id: "7466519192586423558", category: "before-after" },
    { id: "7465935264108563717", category: "team" },
    { id: "7463406093314575622", category: "cleaning" },
    { id: "7447834118919949574", category: "team" },
  ]

  const filteredVideos = activeCategory === "all" 
    ? tiktokVideos 
    : tiktokVideos.filter(video => video.category === activeCategory)

  // Carousel logic
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    setCurrentPage(0)
  }, [activeCategory])

  const cardsPerPage = isMobile ? 1 : 3
  const totalPages = Math.ceil(filteredVideos.length / cardsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const getCurrentCards = () => {
    const start = currentPage * cardsPerPage
    return filteredVideos.slice(start, start + cardsPerPage)
  }

  useEffect(() => {
    // Load TikTok embed script
    const script = document.createElement('script')
    script.src = 'https://www.tiktok.com/embed.js'
    script.async = true
    script.onload = () => setIsScriptLoaded(true)
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="relative py-12 md:py-20">
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
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-add8e6/10 text-add8e6 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs font-medium mb-6 md:mb-6">
            <Sparkles className="w-4 h-4" />
            Tiktok Content
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-6 md:mb-6 leading-tight">
            See Simca in Action on{' '}
            <span className="text-add8e6 relative inline-block">
              TikTok
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
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300">
            Get a closer look at how we care for your spaces, meet the team, and pick up simple tips to keep your home or business shining. We're proud to share our work and moments with you on TikTok—because your trust means everything to us.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center gap-2 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-xs font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-add8e6 to-add8e6/90 text-white shadow-lg shadow-add8e6/20"
                  : "bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 backdrop-blur-sm"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* TikTok Feed Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons - Enhanced design */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 bg-white/90 dark:bg-gray-800/90 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-add8e6/50 hidden md:block backdrop-blur-sm"
            aria-label="Previous TikTok videos"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>

          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 bg-white/90 dark:bg-gray-800/90 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-add8e6/50 hidden md:block backdrop-blur-sm"
            aria-label="Next TikTok videos"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Carousel Container - Enhanced design */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: isMobile ? 100 : 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isMobile ? -100 : 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {getCurrentCards().map((video, index) => (
                  <motion.div
                    key={`${currentPage}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-[98vw] max-w-full h-[805px] md:max-w-[350px] md:h-[784px] bg-white/90 dark:bg-gray-900/90 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-800/50 overflow-hidden flex flex-col items-center p-2 mx-auto hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <iframe
                      className="w-full h-full rounded-xl"
                      src={`https://www.tiktok.com/embed/v2/${video.id}`}
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      loading="lazy"
                      title={`TikTok video ${video.id}`}
                    />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Navigation - Enhanced design */}
          <div className="flex flex-col items-center gap-4 mt-8 md:hidden">
            {/* Mobile Pagination Dots - Enhanced design */}
            <div className="flex items-center gap-3">
              {Array.from({ length: filteredVideos.length }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentPage === index
                      ? 'bg-add8e6 w-6'
                      : 'bg-gray-300/50 dark:bg-gray-600/50 hover:bg-add8e6/50'
                  }`}
                  aria-label={`Go to TikTok video ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Mobile Navigation Buttons - Enhanced design */}
            <div className="flex items-center gap-4">
              <motion.button
                onClick={prevPage}
                className="p-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50 active:scale-95"
                aria-label="Previous TikTok video"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </motion.button>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {currentPage + 1} of {filteredVideos.length}
              </span>
              <motion.button
                onClick={nextPage}
                className="p-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50 active:scale-95"
                aria-label="Next TikTok video"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </motion.button>
            </div>
          </div>

          {/* Desktop Navigation Dots - Enhanced design */}
          <div className="hidden md:flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  currentPage === index
                    ? 'bg-add8e6 w-4'
                    : 'bg-gray-300/50 dark:bg-gray-600/50 hover:bg-add8e6/50'
                }`}
                aria-label={`Go to page ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <motion.a
            href="https://www.tiktok.com/@simcacleaningcompany"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-add8e6 text-white px-8 py-4 rounded-xl font-medium hover:bg-add8e6/90 transition-all duration-300 hover:shadow-lg hover:scale-105 transform group text-xs sm:text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Follow Us on TikTok
          </motion.a>
        </div>
      </div>
    </section>
  )
}
