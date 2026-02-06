"use client";

import { Building2, ArrowRight, Phone, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { MdBusiness } from "react-icons/md";
import { HiClock } from "react-icons/hi2";
import { MdStars } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { HiShieldCheck } from "react-icons/hi2";
import { FaAward } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { MdAutoAwesome } from "react-icons/md";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ContactForm from "@/components/contact-form";
import ServiceSchema, { serviceConfigs } from "@/components/schema/service-schema";
import BreadcrumbSchema, { breadcrumbConfigs } from "@/components/schema/breadcrumb-schema";
import FAQSchema, { contractCleaningFAQs } from "@/components/schema/faq-schema";

const MotionImage = motion(Image)

interface ServiceDetail {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  availability: string;
  process: {
    title: string;
    steps: { title: string; description: string }[];
  };
  pricing: {
    title: string;
    packages: { name: string; price: string; features: string[] }[];
  };
  serviceAreas: string[];
  whyChooseUs: { title: string; description: string; points: string[] };
  whatsIncluded: { title: string; description: string; items: string[] };
}

const contractCleaningService: ServiceDetail = {
  title: "Contract Cleaning",
  description: "Reliable day-to-day maintenance cleaning services for hospitals, hotels, government offices, industrial premises, schools, banks, and commercial buildings. Our trained staff and modern equipment ensure your facility stays clean and professional.",
  icon: <Building2 className="h-8 w-8 md:h-10 md:w-10 text-add8e6" />,
  features: [
    "Daily maintenance cleaning",
    "Trained and disciplined staff",
    "Modern cleaning equipment",
    "Regular supervision and quality inspections",
    "Eco-friendly cleaning products",
    "OHS compliant operations",
    "Comprehensive insurance coverage",
    "Customized cleaning schedules"
  ],
  availability: "Available 24/7 with flexible scheduling",
  process: {
    title: "Our Cleaning Process",
    steps: [
      {
        title: "Site Assessment",
        description: "We conduct a comprehensive evaluation of your facility to understand its unique cleaning requirements."
      },
      {
        title: "Customized Plan",
        description: "We develop a detailed cleaning plan tailored to your operations and schedule."
      },
      {
        title: "Professional Execution",
        description: "Our trained team follows the plan with attention to detail and quality standards."
      },
      {
        title: "Quality Assurance",
        description: "Regular inspections and quality checks ensure consistent, high-standard results."
      }
    ]
  },
  pricing: {
    title: "Transparent Pricing",
    packages: [
      {
        name: "Small Office / Clinic",
        price: "Custom Quote",
        features: [
          "Daily maintenance cleaning",
          "Up to 1,000 sq ft facility",
          "Trained cleaning staff"
        ]
      },
      {
        name: "Medium Facility",
        price: "Custom Quote",
        features: [
          "Comprehensive daily cleaning",
          "Up to 5,000 sq ft facility",
          "Dedicated supervisor"
        ]
      },
      {
        name: "Large Institution",
        price: "Custom Quote",
        features: [
          "Full contract cleaning services",
          "Unlimited square footage",
          "24/7 availability options"
        ]
      },
      {
        name: "Custom Solutions",
        price: "Negotiable",
        features: [
          "Hospitals, hotels, government facilities",
          "Custom cleaning plans",
          "Machine operators included"
        ]
      }
    ]
  },
  serviceAreas: [
    "Mombasa",
    "Other areas upon consultation"
  ],
  whyChooseUs: {
    title: "Why Choose Our Contract Cleaning",
    description: "We care for your facility like it's our own. Trained teams, modern equipment, and complete peace of mind with full insurance and safety compliance.",
    points: [
      "Highly trained and disciplined staff",
      "All staff are Kenyan citizens",
      "Eco-friendly products and modern equipment",
      "Regular supervision and quality inspections",
      "Occupational Health and Safety compliant",
      "Comprehensive insurance coverage",
      "Fast response to client needs"
    ]
  },
  whatsIncluded: {
    title: "What's Included in Our",
    description: "Our comprehensive contract cleaning service covers every aspect of your facility maintenance.",
    items: [
      "General housekeeping",
      "Sweeping and mopping floors",
      "Dusting fixtures and surfaces",
      "Bathroom sanitization",
      "Kitchen/tea room cleaning",
      "Window and glass cleaning",
      "Waste separation and disposal",
      "Carpet vacuuming",
      "High-touch point disinfection",
      "Office plant care"
    ]
  }
};

export default function ContractCleaningPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const heroImage = {
    src: "/services/window-cleaning.png",
    alt: "Professional contract cleaning services in Kenya",
  }

  const whyChooseUsImage = {
    src: "/commercial/why-choose-simca.webp",
    alt: "Professional contract cleaning team at work",
  }

  const whatsIncludedImages = [
    { src: "/commercial/commercial-01.jpeg", alt: "Office cleaning" },
    { src: "/commercial/commercial-02.jpeg", alt: "Bathroom sanitization" },
    { src: "/commercial/commercial-03.jpeg", alt: "Common areas maintenance" },
    { src: "/commercial/commercial-04.jpeg", alt: "Equipment cleaning" },
  ];

  const [carouselIndex, setCarouselIndex] = useState(0);

  const prevImage = () => {
    setCarouselIndex((carouselIndex - 1 + whatsIncludedImages.length) % whatsIncludedImages.length);
  };

  const nextImage = () => {
    setCarouselIndex((carouselIndex + 1) % whatsIncludedImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % whatsIncludedImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [whatsIncludedImages.length]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Schema Markup for AI Search Optimization (GEO) */}
      <ServiceSchema {...serviceConfigs.contractCleaning} />
      <BreadcrumbSchema items={breadcrumbConfigs.contractCleaning} />
      <FAQSchema faqs={contractCleaningFAQs} pageUrl="https://simcaagencies.com/services/contract-cleaning" />
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <MotionImage
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 relative flex-grow flex flex-col justify-center">
          <div className="flex flex-col items-center">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <motion.div
                variants={itemVariants}
                className="inline-block mb-6 sm:mb-4 md:mb-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2">
                  <MdBusiness className="w-3.5 h-3.5" />
                  Contract Cleaning Services
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-wide"
              >
                Professional{" "}
                <span className="text-fff relative inline-block">
                  Contract
                  <motion.span 
                    className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </span>{" "}
                Cleaning
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="font-body text-base md:text-lg lg:text-xl text-gray-200 tracking-wide mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                Kenya's trusted professional cleaners for hospitals, hotels, offices, and industrial facilities.
              </motion.p>

              <motion.div
                variants={itemVariants}
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

      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Why Choose Our Contract Cleaning Services Section */}
      <section className="relative py-12 md:py-16 lg:py-20">
        <div className="absolute inset-0 bg-white dark:bg-gray-900">
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,#add8e6_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-1/2 max-w-3xl md:pl-14 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-6 w-full flex justify-center md:justify-start">
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-3 sm:py-2 rounded-full text-xs font-medium inline-flex items-center gap-2 shadow-sm">
                  <MdBusiness className="w-3.5 h-3.5" />
                  Why Choose Us
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 leading-tight tracking-wide w-full">
                <span className="mb-1">Why Choose Our</span>
                <span className="text-add8e6 relative inline-block block mb-4 ml-2">
                  Contract
                  <motion.span 
                    className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    style={{ display: 'block' }}
                  />
                </span>{" "}
                <span>Cleaning Services?</span>
              </h2>
              <div className="w-full mb-6 md:hidden">
                <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-2xl h-[20rem] xs:h-[24rem] sm:h-[28rem] mx-auto">
                  <Image
                    src={whyChooseUsImage.src}
                    alt={whyChooseUsImage.alt}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <p className="font-body text-base md:text-lg text-gray-600 dark:text-gray-300 tracking-wide mb-5 leading-relaxed">
                <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies Ltd</Link></span> has been Kenya's trusted cleaning company since 2005. We deliver reliable, high-quality contract cleaning to hospitals, hotels, government offices, schools, banks, and industrial facilities. Our clients enjoy peace of mind knowing their facilities are maintained to the highest standards, creating healthier environments for staff and visitors.
              </p>
              <p className="font-body text-base md:text-lg text-gray-600 dark:text-gray-300 tracking-wide mb-5 leading-relaxed">
                Our trained Kenyan staff use modern equipment and eco-friendly products to deliver exceptional results every day. You get comprehensive insurance coverage, full OHS compliance, and regular quality inspections ensuring your facility always looks its best. We handle everything so you can focus on your core business.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:pr-8 mb-8 md:mb-0 hidden md:flex">
              <div className="relative rounded-xl overflow-hidden shadow-lg w-full max-w-2xl h-[40rem] mx-auto">
                <Image
                  src={whyChooseUsImage.src}
                  alt={whyChooseUsImage.alt}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Benefits Section */}
      <section className="relative py-12 md:py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#add8e6_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-add8e6/20 to-add8e6/10 text-add8e6 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs font-medium mb-6 md:mb-6 backdrop-blur-sm">
              <MdAutoAwesome className="w-3.5 h-3.5" />
              Benefits of Our Services
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 leading-tight tracking-wide">
              <span className="block mb-1">Benefits of Our</span>
              <span className="inline-block block mb-1 ml-2">
                <span className="text-add8e6 relative inline-block">Contract
                  <motion.span 
                    className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    style={{ display: 'block' }}
                  />
                </span>{" "}
                Cleaning Services
              </span>
            </h2>
            <p className="font-body text-base md:text-lg text-gray-600 dark:text-gray-300 tracking-wide leading-relaxed">
              Professional contract cleaning that improves hygiene and enhances your facility's image.
            </p>
          </motion.div>
          <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-6 space-y-3 md:space-y-4">
            {[
              {
                title: "Trained and Disciplined Staff:",
                icon: HiClock,
                content: (
                  <>
                    All our staff has been trained in the use of cleaning equipment and machines. Our machine operators can operate scrubbers, polishers, burnishers, wet and dry vacuum cleaners, industrial dry vacuum cleaners, and floor boys. Our cleaners are also experienced in strip and seal, buffing, carpet cleaning, upholstery care, and scrubbing. All our staff are Kenyan citizens with proper training in customer care and communication skills.
                  </>
                )
              },
              {
                title: "Quality Management System:",
                icon: MdStars,
                content: (
                  <>
                    <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> implements a comprehensive quality management system. We use quality, safety, and user-friendly machinery with regular service schedules. Our equipment and chemicals adhere to internationally recognized standards. We provide staff training in safety issues and good work practices, with monitoring tools and cleaning protocols to ensure just-in-time delivery.
                  </>
                )
              },
              {
                title: "Professional Supervision:",
                icon: FaLeaf,
                content: (
                  <>
                    Our Area Supervisors oversee all activities on site, communicating with both clients and management. They maintain registers of cleaners, keep service records of machinery and inventory, ensure quality assurance, monitor cleaning standards, and handle health and safety supervision. This structured approach ensures consistent, high-quality results across all our contract cleaning sites.
                  </>
                )
              },
              {
                title: "Comprehensive Daily Cleaning:",
                icon: FaCog,
                content: (
                  <>
                    Our contract cleaning includes general housekeeping, sweeping and mopping floors, damp dusting of fixtures and surfaces, spot cleaning metal and paintworks, hand basin and dispenser maintenance, waste separation and disposal, carpet vacuuming, window cleaning, telephone sanitization, and thorough bathroom and toilet cleaning with disinfection.
                  </>
                )
              },
              {
                title: "Full Insurance Coverage:",
                icon: HiShieldCheck,
                content: (
                  <>
                    <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> provides comprehensive insurance coverage for your peace of mind. This includes third party/public liability insurance, employer's liability, workman's compensation, and insurance against loss and damage to property. Our operations are fully Occupational Health and Safety compliant.
                  </>
                )
              },
              {
                title: "Eco-Friendly and Modern:",
                icon: FaAward,
                content: (
                  <>
                    We use eco-friendly cleaning products and modern equipment to deliver exceptional results while caring for the environment. Our chemicals and machinery adhere to internationally recognized standards, ensuring safe and effective cleaning for your facility, staff, and visitors.
                  </>
                )
              },
              {
                title: "Trusted by Leading Institutions:",
                icon: FaTags,
                content: (
                  <>
                    Our clients include Kenya Ports Authority, Kenya Maritime Authority, and Mombasa Polytechnic University. We have extensive experience cleaning all types of buildings including schools, offices, industrial premises, hotels, shopping centres, government offices, commercial premises, hospitals, and banks.
                  </>
                )
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
                  <motion.div 
                    className="relative flex-shrink-0 mt-0.5"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                      <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover:border-add8e6/30 transition-all duration-300">
                        {React.createElement(para.icon, { 
                          className: 'h-3.5 w-3.5 text-add8e6 group-hover:scale-110 transition-transform duration-300'
                        })}
                      </div>
                    </div>
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-semibold text-add8e6 text-sm md:text-base mb-1.5 group-hover:text-add8e6/80 transition-colors leading-tight">
                      {para.title}
                    </h3>
                    <p className="font-body text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {para.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* What's Included Section */}
      <section className="relative py-12 md:py-20">
        <div className="absolute inset-0 bg-white dark:bg-gray-900">
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,#add8e6_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8">
            <div className="w-full md:w-1/2 flex justify-center md:pr-2 mb-8 md:mb-0 hidden md:flex">
              <div className="relative rounded-xl overflow-hidden shadow-lg w-full max-w-2xl h-[47rem] mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={whatsIncludedImages[carouselIndex].src}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={whatsIncludedImages[carouselIndex].src}
                      alt={whatsIncludedImages[carouselIndex].alt}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </motion.div>
                </AnimatePresence>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50"
                  aria-label="Previous image"
                  type="button"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50"
                  aria-label="Next image"
                  type="button"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                </button>
                <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 gap-2 z-10">
                  {whatsIncludedImages.map((img, idx) => (
                    <button
                      key={img.src}
                      onClick={() => setCarouselIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${carouselIndex === idx ? 'bg-add8e6 w-6' : 'bg-gray-300 dark:bg-gray-600 hover:bg-add8e6/50'}`}
                      aria-label={`Go to image ${idx + 1}`}
                      type="button"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 max-w-3xl md:pl-2 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-6 w-full flex justify-center md:justify-start">
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-3 sm:py-2 rounded-full text-xs font-medium inline-flex items-center gap-2 shadow-sm">
                  <MdBusiness className="w-3.5 h-3.5" />
                  What's Included
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 leading-tight tracking-wide w-full">
                <span className="mb-1">What's Included in Our</span>
                <span className="ml-2">
                  <span className="text-add8e6 relative inline-block block mb-4">
                    Contract
                    <motion.span 
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      style={{ display: 'block' }}
                    />
                  </span>{' '}
                  Cleaning Services
                </span>
              </h2>
              <div className="w-full mb-6 md:hidden">
                <div className="relative rounded-xl overflow-hidden shadow-lg w-full max-w-2xl h-[20rem] xs:h-[24rem] sm:h-[28rem] mx-auto">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={whatsIncludedImages[carouselIndex].src}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image
                        src={whatsIncludedImages[carouselIndex].src}
                        alt={whatsIncludedImages[carouselIndex].alt}
                        width={800}
                        height={600}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </motion.div>
                  </AnimatePresence>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50"
                    aria-label="Previous image"
                    type="button"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-add8e6/50"
                    aria-label="Next image"
                    type="button"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                  </button>
                  <div className="flex absolute bottom-4 left-1/2 -translate-x-1/2 gap-2 z-10">
                    {whatsIncludedImages.map((img, idx) => (
                      <button
                        key={img.src}
                        onClick={() => setCarouselIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${carouselIndex === idx ? 'bg-add8e6 w-4' : 'bg-gray-300 dark:bg-gray-600 hover:bg-add8e6/50'}`}
                        aria-label={`Go to image ${idx + 1}`}
                        type="button"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="font-body text-base md:text-lg text-gray-600 dark:text-gray-300 tracking-wide mb-5 leading-relaxed">
                Comprehensive facility maintenance to keep your space spotless and professional.
              </p>
              <ul className="font-body list-disc pl-5 space-y-2 text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8">
                <li>General housekeeping and floor maintenance</li>
                <li>Dusting fixtures, woodworks, and surfaces</li>
                <li>Bathroom and toilet cleaning with disinfection</li>
                <li>Waste separation and disposal</li>
                <li>Carpet vacuuming and floor polishing</li>
                <li>Window and glass cleaning</li>
                <li>Kitchen and tea room cleaning</li>
                <li>High-touch point sanitization</li>
              </ul>
              
              {/* Get a Quote Button */}
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
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Contact Section */}
      <section className="relative py-12 md:py-20">
        <div className="absolute inset-0 bg-white dark:bg-gray-900">
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,#add8e6_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-add8e6/10 text-add8e6 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs font-medium mb-4 md:mb-6">
              <MessageCircle className="w-3.5 h-3.5" />
              Contact Us
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight">
              Get in{' '}
              <span className="text-add8e6 relative">
                Touch
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-add8e6/20 rounded-full" />
              </span>
            </h2>
            <p className="font-body text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Get a free assessment and quote for your facility today.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm 
              preselectedService="Contract Cleaning"
              formId="contact-form"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />
      </section>
    </div>
  );
}
