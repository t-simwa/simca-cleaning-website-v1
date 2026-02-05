"use client"

import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ZoomIn } from "lucide-react"
import React from "react"
// Beautiful styled icons from react-icons
import { MdStars } from "react-icons/md" // Material Design - All/Sparkles
import { FaBuilding } from "react-icons/fa" // Font Awesome - Contract Cleaning
import { MdCleaningServices } from "react-icons/md" // Material Design - Specialized Cleaning
import { FaLeaf } from "react-icons/fa" // Font Awesome - Landscaping
import { FaUsers } from "react-icons/fa" // Font Awesome - Our Team
import { FaSprayCan } from "react-icons/fa" // Font Awesome - Sanitization
import { FaCamera } from "react-icons/fa" // Font Awesome - Camera
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import ContactForm from "@/components/home/contact-form"

// CountUp component for animated numbers with scroll trigger
function CountUp({ end, duration = 1.5, suffix = "", inView = false }: { end: string | number, duration?: number, suffix?: string, inView?: boolean }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return;
    // Handle non-numeric values (like "24/7", "1hr")
    if (typeof end === 'string' && !end.match(/^\d+/)) {
      return;
    }
    const isPercent = typeof end === 'string' && end.includes('%');
    const isPlus = typeof end === 'string' && end.includes('+');
    // Extract numeric value and any text suffix
    let numericEnd: number;
    let textSuffix = '';
    if (typeof end === 'number') {
      numericEnd = end;
    } else {
      const match = end.match(/^(\d+)(.*)$/);
      if (match) {
        numericEnd = parseInt(match[1]);
        textSuffix = match[2]; // Preserve text after number (e.g., "hr" from "1hr")
      } else {
        numericEnd = parseInt(end);
      }
    }
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
  
  // Handle non-numeric values (like "24/7", "1hr")
  if (typeof end === 'string' && !end.match(/^\d+/)) {
    return <span>{end}{suffix}</span>;
  }
  
  // Extract numeric value and any text suffix
  let display: string | number = count;
  let textSuffix = '';
  if (typeof end === 'string') {
    const match = end.match(/^(\d+)(.*)$/);
    if (match) {
      textSuffix = match[2]; // Preserve text after number (e.g., "hr" from "1hr")
    }
    if (end.includes('%')) display = `${count}%`;
    else if (end.includes('+')) display = `${count}+`;
    else if (textSuffix) display = `${count}${textSuffix}`;
  }
  return <span>{display}{suffix}</span>;
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
      variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } } }}
      className="grid grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto mb-8 md:mb-12"
    >
      {[
        {
          value: "19+",
          label: "YEARS IN SERVICE",
        },
        {
          value: "5",
          label: "CORE SERVICES",
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
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 tracking-tight">
            <CountUp end={stat.value} duration={1.5} inView={inView} />
          </div>
          <div className="text-[10px] md:text-xs text-gray-300 uppercase tracking-wider font-medium pb-1.5 border-b border-gray-400/40 inline-block">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const categories = [
    { id: "all", name: "All", icon: MdStars },
    { id: "team", name: "Our Team", icon: FaUsers },
    { id: "contract", name: "Contract Cleaning", icon: FaBuilding },
    { id: "specialized", name: "Specialized Cleaning", icon: MdCleaningServices },
    { id: "sanitization", name: "Sanitization", icon: FaSprayCan },
    { id: "landscaping", name: "Landscaping", icon: FaLeaf },
  ]

  const galleryImages = [
    // Our Team Photos
    {
      id: 1,
      src: "/gallery/team-photos/team-01.jpeg",
      alt: "Simca Agencies trained cleaning staff",
      category: "team",
      title: "Our Trained Professionals",
      description: "Dedicated Kenyan staff delivering excellence since 2005",
    },
    {
      id: 2,
      src: "/gallery/team-photos/team-02.jpeg",
      alt: "Simca Agencies team at work",
      category: "team",
      title: "Team in Action",
      description: "Our disciplined team serving Kenya's leading institutions",
    },
    {
      id: 3,
      src: "/gallery/team-photos/team-03.jpeg",
      alt: "Simca Agencies professional staff",
      category: "team",
      title: "Professional Excellence",
      description: "Highly trained and OHS compliant team members",
    },
    {
      id: 4,
      src: "/gallery/team-photos/team-04.jpeg",
      alt: "Simca Agencies cleaning crew",
      category: "team",
      title: "The Simca Family",
      description: "100% Kenyan-owned, 100% dedicated to quality",
    },
    // Contract Cleaning Images (Offices, Institutions, Commercial)
    {
      id: 5,
      src: "/residential/why-choose-simca.webp",
      alt: "Contract cleaning for offices and institutions",
      category: "contract",
      title: "Daily Maintenance Cleaning",
      description: "Professional contract cleaning for offices and commercial spaces",
    },
    {
      id: 6,
      src: "/residential/residential-01.jpeg",
      alt: "Contract cleaning services",
      category: "contract",
      title: "Office Cleaning Services",
      description: "Maintaining clean and healthy work environments",
    },
    {
      id: 7,
      src: "/residential/residential-02.jpeg",
      alt: "Contract cleaning services",
      category: "contract",
      title: "Institutional Facility Cleaning",
      description: "Professional cleaning for schools and healthcare facilities",
    },
    {
      id: 8,
      src: "/residential/residential-03.webp",
      alt: "Contract cleaning services",
      category: "contract",
      title: "Commercial Space Maintenance",
      description: "Keeping commercial spaces spotless and welcoming",
    },
    {
      id: 9,
      src: "/residential/residential-03.jpeg",
      alt: "Contract cleaning services",
      category: "contract",
      title: "Professional Facility Care",
      description: "Trained staff delivering quality cleaning services",
    },
    {
      id: 11,
      src: "/commercial/why-choose-simca.jpg",
      alt: "Contract cleaning for commercial buildings",
      category: "contract",
      title: "Commercial Building Cleaning",
      description: "Professional cleaning for hotels, hospitals, and government offices",
    },
    {
      id: 12,
      src: "/commercial/commercial-01.jpeg",
      alt: "Contract cleaning services",
      category: "contract",
      title: "Hotel and Hospitality Cleaning",
      description: "Maintaining world-class cleanliness standards",
    },
    {
      id: 13,
      src: "/commercial/commercial-02.jpeg",
      alt: "Contract cleaning services",
      category: "contract",
      title: "Government Office Cleaning",
      description: "Trusted by Kenya's leading institutions",
    },
    {
      id: 14,
      src: "/commercial/commercial-03.jpeg",
      alt: "Contract cleaning services",
      category: "contract",
      title: "Industrial Premises Cleaning",
      description: "Professional maintenance for industrial facilities",
    },
    {
      id: 15,
      src: "/commercial/commercial-04.jpeg",
      alt: "Contract cleaning services",
      category: "contract",
      title: "School and University Cleaning",
      description: "Creating clean learning environments",
    },
    // Specialized Cleaning Images (Carpet, Deep Cleaning, Floor Care)
    {
      id: 17,
      src: "/carpet/why-choose-us.jpeg",
      alt: "Specialized carpet and upholstery cleaning",
      category: "specialized",
      title: "Carpet Deep Cleaning",
      description: "Professional carpet and upholstery deep cleaning services",
    },
    {
      id: 18,
      src: "/carpet/carpet-01.webp",
      alt: "Specialized floor cleaning",
      category: "specialized",
      title: "Floor Strip and Seal",
      description: "Expert strip and seal services for all floor types",
    },
    {
      id: 19,
      src: "/carpet/carpet-02.webp",
      alt: "Specialized cleaning services",
      category: "specialized",
      title: "Upholstery Care",
      description: "Professional upholstery cleaning and maintenance",
    },
    {
      id: 20,
      src: "/carpet/carpet-03.jpeg",
      alt: "Specialized cleaning equipment",
      category: "specialized",
      title: "Modern Cleaning Equipment",
      description: "Using advanced equipment for superior results",
    },
    // Sanitization Images
    {
      id: 22,
      src: "/sanitization/santization-01.jpeg",
      alt: "Professional sanitization services",
      category: "sanitization",
      title: "Facility Sanitization",
      description: "Comprehensive sanitization for healthy environments",
    },
    {
      id: 23,
      src: "/sanitization/fumigation-01.jpeg",
      alt: "Professional sanitization services",
      category: "sanitization",
      title: "Deep Sanitization",
      description: "Thorough sanitization using eco-friendly products",
    },
    {
      id: 24,
      src: "/sanitization/fumigation-02.webp",
      alt: "Professional sanitization services",
      category: "sanitization",
      title: "Healthcare Facility Sanitization",
      description: "Meeting the highest hygiene standards for healthcare",
    },
    {
      id: 25,
      src: "/sanitization/fumigation-03.webp",
      alt: "Professional sanitization services",
      category: "sanitization",
      title: "Commercial Sanitization",
      description: "Keeping commercial spaces safe and hygienic",
    },
    // Landscaping & Gardening Images
    {
      id: 27,
      src: "/landscaping/landscaping.jpeg",
      alt: "Professional landscaping and gardening",
      category: "landscaping",
      title: "Grounds Maintenance",
      description: "Professional grounds maintenance for commercial properties",
    },
    {
      id: 28,
      src: "/landscaping/landscaping-01.jpeg",
      alt: "Office plant care",
      category: "landscaping",
      title: "Office Plant Care",
      description: "Keeping indoor plants healthy and thriving",
    },
    {
      id: 29,
      src: "/landscaping/landscaping-02.jpeg",
      alt: "Garden maintenance",
      category: "landscaping",
      title: "Garden Design and Upkeep",
      description: "Beautiful, well-maintained outdoor spaces",
    },
    {
      id: 30,
      src: "/landscaping/landscaping-03.jpeg",
      alt: "Lawn care services",
      category: "landscaping",
      title: "Lawn Care Services",
      description: "Professional lawn maintenance and care",
    },
    {
      id: 31,
      src: "/landscaping/landscaping-04.jpeg",
      alt: "Seasonal landscaping",
      category: "landscaping",
      title: "Seasonal Planting",
      description: "Seasonal planting and landscape maintenance",
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
                className="inline-block mb-6 sm:mb-4 md:mb-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2">
                  <FaCamera className="w-3.5 h-3.5" />
                  Gallery Portfolio
                </span>
              </motion.div>
              <motion.h1
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } } }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-wide"
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
                className="text-sm md:text-base lg:text-base text-gray-200 tracking-wide mb-10 md:mb-12 max-w-2xl mx-auto"
              >
                Every photo in our gallery tells a story of professionalism, dedication, and attention to detail. From hospitals and hotels to government offices and schools, our trained teams deliver world-class cleaning standards across Kenya. See the quality that has made Simca Agencies the trusted choice for leading institutions since 2005.
              </motion.p>
              {/* Minimalist Stats Section */}
              <StatsSectionWithAnimation />
            </motion.div>
          </div>
        </div>
      </div>
      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Gallery Section */}
      <div className="relative bg-white dark:bg-gray-900 py-12 md:py-16 lg:py-20">
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
          <ScrollAnimation>
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12 bg-transparent p-0">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="group flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs font-medium transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-add8e6 data-[state=active]:to-add8e6/90 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-add8e6/20 data-[state=inactive]:bg-white/80 data-[state=inactive]:dark:bg-gray-800/80 data-[state=inactive]:text-gray-600 data-[state=inactive]:dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 backdrop-blur-sm"
                  >
                    {React.createElement(category.icon, { 
                      className: 'w-3 h-3'
                    })}
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-8 md:mt-12">
                  <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
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
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 bg-white dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800/50 cursor-pointer"
                          onClick={() => setSelectedImage(image.id)}
                        >
                          <div className="relative h-40 sm:h-48 md:h-56 w-full">
                            <Image
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            <motion.button
                              className="absolute top-2 right-2 p-1.5 rounded-md bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-add8e6 hover:text-white"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedImage(image.id)
                              }}
                              aria-label="View full size image"
                            >
                              <ZoomIn className="w-3.5 h-3.5" />
                            </motion.button>
                          </div>
                          <div className="p-3 md:p-4">
                            <h3 
                              className="text-sm font-semibold text-gray-900 dark:text-white mb-1.5 group-hover:text-add8e6 transition-colors duration-200 leading-tight"
                            >
                              {image.title}
                            </h3>
                            <p 
                              className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed"
                            >
                              {image.description}
                            </p>
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
        {selectedImage !== null && (() => {
          const selectedImg = galleryImages.find(img => img.id === selectedImage);
          if (!selectedImg) return null;
          
          return (
            <motion.div
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full flex-1 min-h-0 mb-16 rounded-lg overflow-hidden bg-black/20">
                  <img
                    src={selectedImg.src || ""}
                    alt={selectedImg.alt || ""}
                    className="w-full h-full object-contain rounded-lg shadow-2xl"
                    style={{ maxHeight: '85vh' }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 md:p-6 rounded-b-lg">
                  <h3 className="text-sm md:text-base font-semibold text-white mb-1">
                    {selectedImg.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-200 tracking-wide mt-1">
                    {selectedImg.description}
                  </p>
                </div>
                <button
                  className="absolute top-2 right-2 p-1.5 rounded-md bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-add8e6 hover:text-white transition-all duration-300"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close modal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
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
          );
        })()}
      </AnimatePresence>

      <ContactForm />
    </div>
  )
}
