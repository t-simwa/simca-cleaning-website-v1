"use client"

import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Sparkles, CheckCircle2, List, Star, Home, Building2, Sofa, Clock, ZoomIn, ArrowRight } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ContactForm from "@/components/home/contact-form"

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
      src: "/gallery/office-cleaning.webp?height=600&width=800",
      alt: "Office cleaning in Nairobi",
      category: "commercial",
      title: "Office Cleaning",
      description: "Professional cleaning of a corporate office in Nairobi CBD",
    },
    {
      id: 2,
      src: "/gallery/residential-cleaning.webp?height=600&width=800",
      alt: "Residential deep cleaning",
      category: "residential",
      title: "Home Deep Cleaning",
      description: "Complete deep cleaning of a family home in Kaimosi",
    },
    {
      id: 3,
      src: "/gallery/carpet-cleaning.webp?height=600&width=800",
      alt: "Carpet cleaning",
      category: "carpet",
      title: "Carpet Cleaning",
      description: "Professional carpet cleaning for a hotel in Mombasa",
    },
    {
      id: 4,
      src: "/gallery/clean-kitchen.webp?height=600&width=800",
      alt: "Before and after kitchen cleaning",
      category: "before-after",
      title: "Kitchen Transformation",
      description: "Kitchen deep cleaning in Eldoret",
    },
    {
      id: 5,
      src: "/gallery/window-cleaning.webp?height=600&width=800",
      alt: "Commercial window cleaning",
      category: "commercial",
      title: "Window Cleaning",
      description: "High-rise window cleaning in Nairobi",
    },
    {
      id: 6,
      src: "/gallery/bathroom-cleaning.webp?height=600&width=800",
      alt: "Residential bathroom cleaning",
      category: "residential",
      title: "Bathroom Sanitization",
      description: "Complete bathroom cleaning and sanitization",
    },
    {
      id: 7,
      src: "/gallery/sofa-cleaning.webp?height=600&width=800",
      alt: "Upholstery cleaning",
      category: "carpet",
      title: "Sofa Cleaning",
      description: "Upholstery cleaning for a residential client",
    },
    {
      id: 8,
      src: "/gallery/clean-office.webp?height=600&width=800",
      alt: "Before and after office cleaning",
      category: "before-after",
      title: "Office Transformation",
      description: "Complete office cleaning and organization",
    },
    {
      id: 9,
      src: "/gallery/construction-cleaning.webp?height=600&width=800",
      alt: "Post-construction cleaning",
      category: "commercial",
      title: "Post-construction Cleanup",
      description: "Cleaning after construction in a new office building",
    },
    {
      id: 10,
      src: "/gallery/kitchen-cleaning.webp?height=600&width=800",
      alt: "Residential kitchen cleaning",
      category: "residential",
      title: "Kitchen Cleaning",
      description: "Deep kitchen cleaning for a family in Nairobi",
    },
    {
      id: 11,
      src: "/gallery/clean-carpet.webp?height=600&width=800",
      alt: "Before and after carpet cleaning",
      category: "before-after",
      title: "Carpet Transformation",
      description: "Carpet cleaning for a hotel in Mombasa",
    },
    {
      id: 12,
      src: "/gallery/floor-polishing.webp?height=600&width=800",
      alt: "Commercial floor cleaning",
      category: "commercial",
      title: "Floor Polishing",
      description: "Commercial floor cleaning and polishing",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Image */}
        <motion.img
          src="/gallery/gallery-hero.webp"    
          alt="Simca Agencies - Gallery Portfolio"
          className="object-cover object-center w-full h-full absolute inset-0 z-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 10, ease: "easeOut" }}
          style={{ pointerEvents: 'none' }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 relative flex-grow flex flex-col justify-center z-20">
          <div className="flex flex-col items-center">
            {/* Centered Content */}
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } } }}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <motion.div
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } } }}
                className="inline-block mb-6 sm:mb-4 md:mb-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  Gallery Portfolio
                </span>
              </motion.div>
              <motion.h1
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } } }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-10 leading-tight tracking-wide"
              >
                Our Work at <span className="text-fff relative inline-block">Simca Agencies
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
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } } }}
                className="text-sm md:text-base lg:text-base text-gray-200 tracking-wide mb-12 max-w-2xl mx-auto"
              >
                Every photo in our gallery tells a story of care, trust, and attention to detail. We treat every space as if it were our own, working closely with you to deliver results you can see and feel. Whether it's a home, office, or something in between, our team is dedicated to making your environment shine—no shortcuts, no surprises, just honest work and real results. See what's possible when you choose a cleaning partner who truly cares.
              </motion.p>
              {/* Quick stats with enhanced micro-interactions */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } } }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-16"
              >
                {[
                  {
                    value: "100+",
                    label: "Projects Completed",
                    icon: <CheckCircle2 className="w-4 h-4 text-white" />,
                  },
                  {
                    value: "4",
                    label: "Service Categories",
                    icon: <List className="w-4 h-4 text-white" />,
                  },
                  {
                    value: "100%",
                    label: "Client Satisfaction",
                    icon: <Star className="w-4 h-4 text-white" />,
                  }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } }, hover: { scale: 1.05, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.2)', transition: { type: 'spring', stiffness: 400, damping: 10 } }, tap: { scale: 0.95, transition: { type: 'spring', stiffness: 400, damping: 10 } } }}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-gradient-to-r from-add8e6 to-add8e6/90 p-4 md:p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center"
                  >
                    <div className="text-xl md:text-xl font-bold text-white mb-1 md:mb-2 flex items-center justify-center gap-2">
                      {stat.icon}
                      <span className="group-hover:scale-110 transition-transform duration-300">{stat.value}</span>
                    </div>
                    <div className="text-xs md:text-sm text-white">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Gallery Section */}
      <div className="relative bg-white dark:bg-gray-900 py-12 md:py-16 lg:py-20">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#add8e6_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />

        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 md:mb-12 bg-transparent p-0">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="group flex items-center gap-2 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs font-medium transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-add8e6 data-[state=active]:to-add8e6/90 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-add8e6/20 data-[state=inactive]:bg-white/80 data-[state=inactive]:dark:bg-gray-800/80 data-[state=inactive]:text-gray-600 data-[state=inactive]:dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 backdrop-blur-sm"
                  >
                    {category.icon}
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-24 md:mt-16">
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
                              className="text-xl md:text-2xl font-bold text-white mb-1"
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.1 }}
                            >
                              {image.title}
                            </motion.h3>
                            <motion.p 
                              className="text-sm md:text-base lg:text-base text-white tracking-wide mt-1 md:mt-2"
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
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-6 rounded-b-lg">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {galleryImages.find(img => img.id === selectedImage)?.title}
                </h3>
                <p className="text-sm md:text-base lg:text-base text-gray-200 tracking-wide mt-1">
                  {galleryImages.find(img => img.id === selectedImage)?.description}
                </p>
              </div>
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

      <ContactForm />
    </div>
  )
}
