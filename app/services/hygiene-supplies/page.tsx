"use client";

import { Package, ArrowRight, Phone, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { MdSanitizer } from "react-icons/md";
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
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import ContactForm from "@/components/contact-form";

const MotionImage = motion(Image)

// CountUp component for animated numbers with scroll trigger
function CountUp({ end, duration = 1.5, suffix = "", inView = false }: { end: string | number, duration?: number, suffix?: string, inView?: boolean }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return;
    if (typeof end === 'string' && !end.match(/^\d+/)) {
      return;
    }
    let numericEnd: number;
    if (typeof end === 'number') {
      numericEnd = end;
    } else {
      const match = end.match(/^(\d+)(.*)$/);
      if (match) {
        numericEnd = parseInt(match[1]);
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
  
  if (typeof end === 'string' && !end.match(/^\d+/)) {
    return <span>{end}{suffix}</span>;
  }
  
  let display: string | number = count;
  let textSuffix = '';
  if (typeof end === 'string') {
    const match = end.match(/^(\d+)(.*)$/);
    if (match) {
      textSuffix = match[2];
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
          label: "YEARS OF SERVICE", 
        },
        { 
          value: "100%", 
          label: "QUALITY PRODUCTS", 
        },
        { 
          value: "100%", 
          label: "RELIABLE SUPPLY", 
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

interface ServiceDetail {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  availability: string;
  pricing: {
    title: string;
    packages: { name: string; price: string; features: string[] }[];
  };
  serviceAreas: string[];
  whyChooseUs: { title: string; description: string; points: string[] };
  whatsIncluded: { title: string; description: string; items: string[] };
}

const hygieneSuppliesService: ServiceDetail = {
  title: "Hygiene Supplies",
  description: "Complete hygiene solutions for your facility including dispensers, sanitary bins, air fresheners, sanitizers, and all essential consumables to maintain a clean and healthy environment.",
  icon: <Package className="h-8 w-8 md:h-10 md:w-10 text-add8e6" />,
  features: [
    "Towel dispensers and hand dryers",
    "Toilet roll holders",
    "Soap dispensers",
    "Sanitary bins",
    "Air fresheners and sanitizers",
    "Paper towels and toilet rolls",
    "Liquid hand soap",
    "Regular supply and maintenance"
  ],
  availability: "Flexible delivery schedules",
  pricing: {
    title: "Supply Packages",
    packages: [
      {
        name: "Essential Package",
        price: "Custom Quote",
        features: [
          "Basic dispensers and holders",
          "Monthly consumables supply",
          "Standard installation"
        ]
      },
      {
        name: "Professional Package",
        price: "Custom Quote",
        features: [
          "Premium dispensers and equipment",
          "Bi-weekly consumables supply",
          "Regular maintenance included"
        ]
      },
      {
        name: "Enterprise Package",
        price: "Custom Quote",
        features: [
          "Full hygiene solution",
          "Weekly supply and service",
          "Dedicated account manager"
        ]
      },
      {
        name: "Custom Solutions",
        price: "Negotiable",
        features: [
          "Tailored to your facility",
          "Flexible delivery schedule",
          "Volume discounts available"
        ]
      }
    ]
  },
  serviceAreas: [
    "Mombasa",
    "Other areas upon consultation"
  ],
  whyChooseUs: {
    title: "Why Choose Our Hygiene Supplies",
    description: "We provide quality hygiene products with reliable delivery and excellent service to keep your facility clean and compliant.",
    points: [
      "Quality products from trusted brands",
      "Reliable and timely delivery",
      "Competitive pricing",
      "Professional installation",
      "Regular maintenance and refills",
      "Eco-friendly options available",
      "Comprehensive hygiene solutions"
    ]
  },
  whatsIncluded: {
    title: "What's Included in Our",
    description: "Our hygiene supplies service covers all your facility's hygiene needs.",
    items: [
      "Towel dispensers",
      "Hand dryers",
      "Toilet roll holders",
      "Soap dispensers",
      "Sanitary bins",
      "Air fresheners",
      "Sanitizers",
      "Paper towels",
      "Toilet rolls",
      "Liquid hand soap"
    ]
  }
};

export default function HygieneSuppliesPage() {
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
    src: "/sanitization/hero.webp",
    alt: "Professional hygiene supplies and solutions in Kenya",
  }

  const whyChooseUsImage = {
    src: "/sanitization/sanitization-01.webp",
    alt: "Hygiene supplies and dispensers",
  }

  const whatsIncludedImages = [
    { src: "/sanitization/sanitization-01.webp", alt: "Hygiene dispensers" },
    { src: "/sanitization/sanitization-02.webp", alt: "Sanitary products" },
    { src: "/sanitization/sanitization-03.webp", alt: "Air fresheners" },
    { src: "/sanitization/sanitization-04.webp", alt: "Consumables" },
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
                  <MdSanitizer className="w-3.5 h-3.5" />
                  Hygiene Supplies
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-wide"
              >
                Complete{" "}
                <span className="text-fff relative inline-block">
                  Hygiene
                  <motion.span 
                    className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </span>{" "}
                Supplies
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-sm md:text-base lg:text-base text-gray-200 tracking-wide mb-10 md:mb-12 max-w-2xl mx-auto"
              >
                Quality hygiene products and supplies for your facility. From towel dispensers and soap dispensers to sanitary bins and air fresheners, we provide everything you need to maintain a clean, healthy environment for staff and visitors.
              </motion.p>

              <StatsSectionWithAnimation />

              <motion.div
                variants={itemVariants}
                className="flex justify-center mb-6"
              >
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-6 md:px-8 py-2.5 md:py-3 font-medium transition-all duration-300 group text-center text-xs sm:text-sm tracking-wide border-b-2 border-transparent hover:border-white/50"
                >
                  Get Your Free Quote
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Why Choose Our Hygiene Supplies Section */}
      <section className="relative py-12 md:py-16 lg:py-20">
        <div className="absolute inset-0 bg-white dark:bg-gray-900">
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,#add8e6_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-1/2 max-w-3xl md:pl-14 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-6 w-full flex justify-center md:justify-start">
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-3 sm:py-2 rounded-full text-xs font-medium inline-flex items-center gap-2 shadow-sm">
                  <MdSanitizer className="w-3.5 h-3.5" />
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 leading-tight tracking-wide w-full">
                <span className="mb-1">Why Choose Our</span>
                <span className="text-add8e6 relative inline-block block mb-4 ml-2">
                  Hygiene
                  <motion.span 
                    className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    style={{ display: 'block' }}
                  />
                </span>{" "}
                <span>Supplies?</span>
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
              <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-5">
                Maintaining proper hygiene in your facility is essential for the health and safety of staff, visitors, and customers. <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies Ltd</Link></span> provides comprehensive hygiene supply solutions, offering quality products and reliable service to keep your washrooms and facilities fully stocked and hygienic.
              </p>
              <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-5">
                Our hygiene supplies service goes beyond just delivering products. We provide professional installation of dispensers and equipment, regular maintenance checks, and timely refills to ensure your facility never runs out of essential hygiene items. Our team understands the importance of consistent supply and works to maintain your hygiene standards without disruption.
              </p>
              <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-5">
                With nearly two decades of experience serving hospitals, hotels, government offices, schools, and commercial buildings, we understand the unique hygiene requirements of different facilities. We offer customized solutions tailored to your specific needs, whether you need a small office setup or a comprehensive hygiene system for a large institution.
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

      {/* Products & Services Section */}
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
              Our Products & Services
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 leading-tight tracking-wide">
              <span className="block mb-1">Complete</span>
              <span className="inline-block block mb-1 ml-2">
                <span className="text-add8e6 relative inline-block">Hygiene
                  <motion.span 
                    className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    style={{ display: 'block' }}
                  />
                </span>{" "}
                Solutions
              </span>
            </h2>
            <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide">
              We provide a comprehensive range of hygiene products and supplies to meet all your facility's needs. From dispensers and equipment to consumables and maintenance.
            </p>
          </motion.div>
          <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-6 space-y-3 md:space-y-4">
            {[
              {
                title: "Towel Dispensers & Hand Dryers:",
                icon: HiClock,
                content: (
                  <>
                    We supply and install quality towel dispensers and hand dryers for your washrooms. Our range includes manual and automatic paper towel dispensers, wall-mounted hand dryers, and combination units. Professional installation and regular maintenance ensure your equipment functions optimally and maintains a professional appearance.
                  </>
                )
              },
              {
                title: "Toilet Roll Holders & Soap Dispensers:",
                icon: MdStars,
                content: (
                  <>
                    Our selection includes single and multi-roll toilet paper holders, jumbo roll dispensers for high-traffic facilities, manual and automatic soap dispensers, and foam soap systems. We provide both wall-mounted and freestanding options to suit your facility's layout and design requirements.
                  </>
                )
              },
              {
                title: "Sanitary Bins:",
                icon: FaLeaf,
                content: (
                  <>
                    We supply hygienic sanitary disposal bins with regular servicing and replacement. Our sanitary bins feature pedal-operated or touch-free designs, odor-control technology, and discreet appearance. Regular collection and replacement services ensure compliance with health and safety standards.
                  </>
                )
              },
              {
                title: "Air Fresheners & Sanitizers:",
                icon: FaCog,
                content: (
                  <>
                    Keep your facility smelling fresh and germ-free with our range of air fresheners and sanitizers. We offer automatic air freshener dispensers, urinal sanitizers, surface sanitizers, and hand sanitizer stations. A variety of fragrances and formulations are available to suit your preferences.
                  </>
                )
              },
              {
                title: "Consumables Supply:",
                icon: HiShieldCheck,
                content: (
                  <>
                    Never run out of essential hygiene consumables. We provide reliable supply of paper towels, toilet rolls (standard and jumbo), liquid hand soap, foam soap, sanitizer refills, and all other consumables your facility needs. Flexible delivery schedules ensure you're always stocked.
                  </>
                )
              },
              {
                title: "Professional Installation:",
                icon: FaAward,
                content: (
                  <>
                    Our team provides professional installation of all hygiene equipment and dispensers. We assess your facility's needs, recommend optimal placement, and install equipment securely and correctly. All installations are completed to high standards with minimal disruption to your operations.
                  </>
                )
              },
              {
                title: "Regular Maintenance & Refills:",
                icon: FaTags,
                content: (
                  <>
                    We don't just supply products. We provide ongoing maintenance and refill services to keep your hygiene systems running smoothly. Regular visits ensure dispensers are cleaned, refilled, and functioning properly. Any faulty equipment is repaired or replaced promptly.
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
                    <h3 className="font-semibold text-add8e6 text-xs md:text-sm mb-1.5 group-hover:text-add8e6/80 transition-colors leading-tight">
                      {para.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
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
                  <MdSanitizer className="w-3.5 h-3.5" />
                  What's Included
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 leading-tight tracking-wide w-full">
                <span className="mb-1">What's Included in Our</span>
                <span className="ml-2">
                  <span className="text-add8e6 relative inline-block block mb-4">
                    Hygiene
                    <motion.span 
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      style={{ display: 'block' }}
                    />
                  </span>{' '}
                  Supplies Service
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
              <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-5">
                Our hygiene supplies service provides everything your facility needs to maintain a clean and healthy environment. We supply quality products and provide regular maintenance.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300">
                <li>Towel dispensers</li>
                <li>Hand dryers</li>
                <li>Toilet roll holders</li>
                <li>Soap dispensers</li>
                <li>Sanitary bins</li>
                <li>Air fresheners</li>
                <li>Sanitizers</li>
                <li>Paper towels</li>
                <li>Toilet rolls</li>
                <li>Liquid hand soap</li>
                <li>Professional installation and setup</li>
                <li>Regular maintenance and refills</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Pricing Section */}
      <div id="pricing" className="relative py-12 md:py-20 scroll-mt-24">
        <div className="absolute inset-0 bg-gray-50 dark:bg-gray-800/50">
          <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px] opacity-5" />
        </div>
        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 md:mb-16">
                <motion.div 
                  className="inline-block mb-3 sm:mb-4 md:mb-6 mt-0 !mt-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2 shadow-sm mt-0 !mt-0">
                    <Phone className="w-3.5 h-3.5" />
                    Pricing & Packages
                  </span>
                </motion.div>
                <motion.h2 
                  className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 leading-tight tracking-wide mt-0 !mt-0"
                >
                  <span className="text-add8e6 relative inline-block tracking-wider">
                    Hygiene
                    <motion.span 
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      style={{ display: 'block' }}
                    />
                  </span>{' '}
                  Supply Packages
                </motion.h2>
                <motion.p 
                  className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-6 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <strong>Note:</strong> Hygiene supply packages are customized based on your facility size, number of washrooms, traffic levels, and specific product requirements. Contact us for a detailed assessment and personalized quote.
                </motion.p>
              </div>

              <div className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group relative bg-white dark:bg-gray-900/50 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-add8e6/30 focus:ring-offset-1 border border-gray-100 dark:border-gray-800/50 overflow-hidden flex flex-col w-full max-w-md"
                >
                  <div className="flex flex-col h-full relative z-10">
                    <div className="p-3 bg-add8e6/10 rounded-lg group-hover:scale-105 transition-transform duration-300 mb-4">
                      <h3 className="font-semibold text-sm md:text-base text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors text-center">
                        Hygiene Supplies
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
                      Complete hygiene solutions including dispensers, sanitary bins, air fresheners, and all consumables for your facility.
                    </p>
                    <ul className="space-y-2 flex-grow mb-6">
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <MdSanitizer className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Quality products from trusted brands</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <MdSanitizer className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Professional installation</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <MdSanitizer className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Regular maintenance and refills</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <MdSanitizer className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Flexible delivery schedules</span>
                      </li>
                    </ul>
                    <button
                      onClick={() => {
                        const contactSection = document.getElementById('contact-form')
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }
                      }}
                      className="mt-auto inline-flex items-center justify-center gap-2 bg-add8e6 text-white px-6 py-3 font-medium transition-all duration-300 text-center text-sm tracking-wide border-b-2 border-transparent hover:border-white/50 group rounded-lg"
                    >
                      Get a Quote
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              </div>

              <div className="max-w-3xl mx-auto mt-8 text-center">
                <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300">
                  Our hygiene supply packages can be bundled with our contract cleaning services for a complete facility hygiene solution. For a personalized assessment and quote, please <Link href="/contact" className="text-add8e6 hover:underline">contact us</Link>.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

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
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight">
              Get in{' '}
              <span className="text-add8e6 relative">
                Touch
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-add8e6/20 rounded-full" />
              </span>
            </h2>
            <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300">
              Need hygiene supplies for your facility? Get a free assessment and quote today. We're here to help keep your facility clean and well-stocked.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm 
              preselectedService="Hygiene Supplies"
              formId="contact-form"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />
      </section>
    </div>
  );
}
