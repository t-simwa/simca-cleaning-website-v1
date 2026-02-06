"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowRight, Video } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const tiktokVideos = [
  { id: "7473409300124273925" },
  { id: "7466519192586423558" },
  { id: "7465935264108563717" },
  { id: "7463406093314575622" },
  { id: "7447834118919949574" },
]

export default function TikTokFeed() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const cardsPerPage = isMobile ? 1 : 3
  const totalPages = Math.ceil(tiktokVideos.length / cardsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const getCurrentCards = () => {
    const start = currentPage * cardsPerPage
    return tiktokVideos.slice(start, start + cardsPerPage)
  }

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
              <Video className="w-4 h-4" />
              TikTok
            </span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
            See Simca in{" "}
            <span className="text-add8e6 relative inline-block">
              Action
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
            Watch our team at work, cleaning tips, and behind-the-scenes moments.
          </p>
        </motion.div>

        {/* TikTok Feed Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Navigation Buttons */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-add8e6/50 hidden md:block"
            aria-label="Previous videos"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>

          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-add8e6/50 hidden md:block"
            aria-label="Next videos"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: isMobile ? 100 : 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isMobile ? -100 : 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {getCurrentCards().map((video, index) => (
                  <motion.div
                    key={`${currentPage}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-full max-w-[350px] h-[700px] bg-white dark:bg-gray-900/50 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden mx-auto hover:shadow-xl transition-shadow duration-300"
                  >
                    <iframe
                      className="w-full h-full"
                      src={`https://www.tiktok.com/embed/v2/${video.id}`}
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      loading="lazy"
                      title={`TikTok video ${video.id}`}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Navigation */}
          <div className="flex flex-col items-center gap-4 mt-8 md:hidden">
            <div className="flex items-center gap-2">
              {tiktokVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentPage === index
                      ? 'bg-add8e6 w-6'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-add8e6/50'
                  }`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={prevPage}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200"
                aria-label="Previous video"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>
              <span className="font-body text-sm text-gray-600 dark:text-gray-400">
                {currentPage + 1} of {tiktokVideos.length}
              </span>
              <button
                onClick={nextPage}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200"
                aria-label="Next video"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </div>

          {/* Desktop Navigation Dots */}
          <div className="hidden md:flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentPage === index
                    ? 'bg-add8e6 w-6'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-add8e6/50'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Follow CTA */}
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://www.tiktok.com/@simcacleaningcompany"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-add8e6 hover:bg-add8e6/90 text-white px-6 py-3 font-semibold transition-all duration-300 group text-sm tracking-wide rounded-lg shadow-md hover:shadow-lg"
          >
            Follow Us on TikTok
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
