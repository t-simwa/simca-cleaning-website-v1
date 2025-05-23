"use client"

import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Sparkles, CheckCircle2, List, Star, Home, Building2, Sofa, Clock, ZoomIn } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const categories = [
    { id: "all", name: "All", icon: <Sparkles className="w-4 h-4" /> },
    { id: "residential", name: "Residential", icon: <Home className="w-4 h-4" /> },
    { id: "commercial", name: "Commercial", icon: <Building2 className="w-4 h-4" /> },
    { id: "carpet", name: "Carpet & Upholstery", icon: <Sofa className="w-4 h-4" /> },
    { id: "before-after", name: "Before & After", icon: <Clock className="w-4 h-4" /> },
  ]

  const galleryImages = [
    {
      id: 1,
      src: "/gallery/office-cleaning.jpg?height=600&width=800",
      alt: "Office cleaning in Nairobi",
      category: "commercial",
      title: "Office Cleaning",
      description: "Professional cleaning of a corporate office in Nairobi CBD",
    },
    {
      id: 2,
      src: "/gallery/residential-cleaning.jpeg?height=600&width=800",
      alt: "Residential deep cleaning",
      category: "residential",
      title: "Home Deep Cleaning",
      description: "Complete deep cleaning of a family home in Kaimosi",
    },
    {
      id: 3,
      src: "/gallery/carpet-cleaning.jpg?height=600&width=800",
      alt: "Carpet cleaning",
      category: "carpet",
      title: "Carpet Cleaning",
      description: "Professional carpet cleaning for a hotel in Mombasa",
    },
    {
      id: 4,
      src: "/gallery/clean-kitchen.png?height=600&width=800",
      alt: "Before and after kitchen cleaning",
      category: "before-after",
      title: "Kitchen Transformation",
      description: "Kitchen deep cleaning in Eldoret",
    },
    {
      id: 5,
      src: "/gallery/window-cleaning.jpg?height=600&width=800",
      alt: "Commercial window cleaning",
      category: "commercial",
      title: "Window Cleaning",
      description: "High-rise window cleaning in Nairobi",
    },
    {
      id: 6,
      src: "/gallery/bathroom-cleaning.jpg?height=600&width=800",
      alt: "Residential bathroom cleaning",
      category: "residential",
      title: "Bathroom Sanitization",
      description: "Complete bathroom cleaning and sanitization",
    },
    {
      id: 7,
      src: "/gallery/sofa-cleaning.jpg?height=600&width=800",
      alt: "Upholstery cleaning",
      category: "carpet",
      title: "Sofa Cleaning",
      description: "Upholstery cleaning for a residential client",
    },
    {
      id: 8,
      src: "/gallery/clean-office.jpeg?height=600&width=800",
      alt: "Before and after office cleaning",
      category: "before-after",
      title: "Office Transformation",
      description: "Complete office cleaning and organization",
    },
    {
      id: 9,
      src: "/gallery/construction-cleaning.jpg?height=600&width=800",
      alt: "Post-construction cleaning",
      category: "commercial",
      title: "Post-construction Cleanup",
      description: "Cleaning after construction in a new office building",
    },
    {
      id: 10,
      src: "/gallery/kitchen-cleaning.jpg?height=600&width=800",
      alt: "Residential kitchen cleaning",
      category: "residential",
      title: "Kitchen Cleaning",
      description: "Deep kitchen cleaning for a family in Nairobi",
    },
    {
      id: 11,
      src: "/gallery/clean-carpet.jpg?height=600&width=800",
      alt: "Before and after carpet cleaning",
      category: "before-after",
      title: "Carpet Transformation",
      description: "Carpet cleaning for a hotel in Mombasa",
    },
    {
      id: 12,
      src: "/gallery/floor-polishing.jpg?height=600&width=800",
      alt: "Commercial floor cleaning",
      category: "commercial",
      title: "Floor Polishing",
      description: "Commercial floor cleaning and polishing",
    },
  ]

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
                  <Camera className="w-3 h-3 md:w-4 md:h-4" />
                  Our Portfolio
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight">
                Our Work{" "}
                <span className="text-add8e6 relative">
                  Gallery
                  <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full" />
                </span>
              </h1>
              <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                Explore our comprehensive portfolio showcasing our commitment to excellence in cleaning services. From residential transformations to commercial spaces, witness the quality and attention to detail that sets us apart.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-8">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center">
                  <div className="text-2xl md:text-3xl font-bold text-add8e6 mb-1 md:mb-2 flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-add8e6" />
                    <span className="group-hover:scale-110 transition-transform duration-300">100+</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    Projects Completed
                  </div>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center">
                  <div className="text-2xl md:text-3xl font-bold text-add8e6 mb-1 md:mb-2 flex items-center justify-center gap-2">
                    <List className="w-4 h-4 text-add8e6" />
                    <span className="group-hover:scale-110 transition-transform duration-300">4</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    Service Categories
                  </div>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center">
                  <div className="text-2xl md:text-3xl font-bold text-add8e6 mb-1 md:mb-2 flex items-center justify-center gap-2">
                    <Star className="w-4 h-4 text-add8e6" />
                    <span className="group-hover:scale-110 transition-transform duration-300">100%</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Gallery Section */}
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
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 bg-transparent p-0">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="group flex items-center gap-2 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 backdrop-blur-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-add8e6 data-[state=active]:to-add8e6/90 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-add8e6/20 border border-gray-200 dark:border-gray-700 shadow-sm whitespace-nowrap"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {category.icon}
                    </motion.div>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-12 md:mt-16">
                  <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {galleryImages
                      .filter((img) => category.id === "all" || img.category === category.id)
                      .map((image, index) => (
                        <motion.div
                          key={image.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="relative h-48 sm:h-56 md:h-64 w-full">
                            <Image
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <motion.button
                              className="absolute top-4 right-4 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-add8e6 hover:text-white"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => setSelectedImage(image.id)}
                              aria-label="View full size image"
                            >
                              <ZoomIn className="w-5 h-5" />
                            </motion.button>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
                            <motion.h3 
                              className="text-white text-lg md:text-xl font-bold"
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.1 }}
                            >
                              {image.title}
                            </motion.h3>
                            <motion.p 
                              className="text-white/90 mt-1 md:mt-2 text-sm md:text-base"
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              {image.description}
                            </motion.p>
                          </div>
                        </motion.div>
                      ))}
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </ScrollAnimation>
        </div>
      </div>
      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages.find(img => img.id === selectedImage)?.src || ""}
                alt={galleryImages.find(img => img.id === selectedImage)?.alt || ""}
                width={1200}
                height={800}
                className="rounded-lg shadow-2xl"
              />
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-add8e6 hover:text-white transition-all duration-300"
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
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
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-4 md:mb-6">
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-2 shadow-sm">
                  <Camera className="w-3 h-3 md:w-4 md:h-4" />
                  Get Started
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight tracking-wide"
                style={{
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  WebkitTextStroke: "0.5px rgba(0,0,0,0.1)"
                }}
              >
                Ready to Experience{" "}
                <span className="text-add8e6 relative inline-block tracking-wider"
                  style={{
                    textShadow: "0 2px 4px rgba(173,216,230,0.3)",
                    WebkitTextStroke: "0.5px rgba(173,216,230,0.3)"
                  }}
                >
                  Our Service?
                  <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full" />
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                Book a cleaning service today and let us transform your space.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-add8e6 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-medium hover:bg-add8e6/90 transition-all duration-300 hover:shadow-lg hover:scale-105 transform group"
              >
                Book a Service
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
