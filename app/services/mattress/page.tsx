"use client";

import { Bed, ArrowRight, MapPin, Phone, Mail, Users, Calendar, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { FaBed } from "react-icons/fa"; // Font Awesome - Bed (same as contact form)
// Unique icons from different icon libraries - matching home page style
import { HiClock } from "react-icons/hi2"; // Heroicons v2 - Clock/Time
import { MdStars } from "react-icons/md"; // Material Design - Quality/Star
import { FaLeaf } from "react-icons/fa"; // Font Awesome - Leaf/Health
import { FaCog } from "react-icons/fa"; // Font Awesome - Settings/Customization
import { HiShieldCheck } from "react-icons/hi2"; // Heroicons v2 - Shield/Reliability
import { FaAward } from "react-icons/fa"; // Font Awesome - Award/Professionalism
import { FaTags } from "react-icons/fa"; // Font Awesome - Tags/Cost-effective
import { MdAutoAwesome } from "react-icons/md"; // Material Design - Benefits/Excellence
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
    // Handle non-numeric values (like "24/7", "1hr")
    if (typeof end === 'string' && !end.match(/^\d+/)) {
      return;
    }
    // Extract numeric value and any text suffix
    let numericEnd: number;
    let textSuffix = '';
    if (typeof end === 'number') {
      numericEnd = end;
    } else {
      const match = end.match(/^(\d+\.?\d*)(.*)$/);
      if (match) {
        numericEnd = parseFloat(match[1]);
        textSuffix = match[2]; // Preserve text after number (e.g., "hr" from "1hr")
      } else {
        numericEnd = parseFloat(end);
      }
    }
    const startTime = performance.now();
    function animate(now: number) {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const value = progress * numericEnd;
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
    const match = end.match(/^(\d+\.?\d*)(.*)$/);
    if (match) {
      textSuffix = match[2]; // Preserve text after number (e.g., "hr" from "1hr")
    }
    if (end.includes('%')) {
      const numPart = parseFloat(end);
      display = Number.isInteger(numPart) ? `${Math.round(count)}%` : `${count.toFixed(1)}%`;
    }
    else if (end.includes('+')) display = `${Math.floor(count)}+`;
    else if (textSuffix) {
      const numPart = parseFloat(end);
      display = Number.isInteger(numPart) ? `${Math.round(count)}${textSuffix}` : `${count.toFixed(1)}${textSuffix}`;
    }
    else if (end.includes('.')) display = count.toFixed(1);
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
          value: "100%", 
          label: "SATISFACTION GUARANTEED", 
        },
        { 
          value: "500+", 
          label: "HAPPY CLIENTS", 
        },
        { 
          value: "4.9", 
          label: "AVERAGE RATING", 
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

// Define the structure for a service, similar to what's used in the services page
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

// Placeholder data for Mattress Cleaning Services
const mattressService: ServiceDetail = {
  title: "Mattress Cleaning",
  description: "Enjoy a healthier sleep with our professional mattress cleaning services. We effectively remove dust mites, allergens, stains, and odors.",
  icon: <Bed className="h-8 w-8 md:h-10 md:w-10 text-add8e6" />,
  features: [
    "Deep cleaning to remove dust mites and allergens",
    "Effective stain and spot removal",
    "Odor elimination and sanitization",
    "Suitable for various mattress types",
    "Uses safe and non-toxic cleaning solutions",
    "Quick drying process",
    "Improves indoor air quality",
    "Experienced and trained technicians"
  ],
  availability: "Available on weekdays and weekends",
  process: {
    title: "Our Mattress Cleaning Process",
    steps: [
      {
        title: "Inspection",
        description: "We inspect the mattress to identify fabric type, stains, and areas needing special attention."
      },
      {
        title: "Vacuuming",
        description: "High-powered vacuuming removes dry particles, dust mites, and allergens."
      },
      {
        title: "Spot Treatment",
        description: "Stains and spots are pre-treated with appropriate cleaning solutions."
      },
      {
        title: "Deep Cleaning/Sanitization",
        description: "Using a suitable method (e.g., steam or extraction), the mattress is deep cleaned and sanitized."
      },
      {
        title: "Drying and Final Inspection",
        description: "We ensure the mattress is dried properly and perform a final quality check."
      }
    ]
  },
  pricing: {
    title: "Mattress Cleaning Pricing",
    packages: [
      {
        name: "Single Mattress",
        price: "From KES 2,000",
        features: [
          "Cleaning of one single-sized mattress",
          "Dust mite and allergen removal"
        ]
      },
      {
        name: "Double/Queen Mattress",
        price: "From KES 3,000",
        features: [
          "Cleaning of one double or queen-sized mattress",
          "Stain and odor treatment"
        ]
      },
      {
        name: "King Mattress",
        price: "From KES 4,000",
        features: [
          "Cleaning of one king-sized mattress",
          "Comprehensive deep clean"
        ]
      }
    ]
  },
  serviceAreas: [
    "Nairobi",
    "Mombasa",
    "Kisumu",
    "Nakuru",
    "Eldoret",
    "Thika",
    "Kitale"
  ],
  whyChooseUs: {
    title: "Why Choose Us for Mattress Cleaning",
    description: "We provide a thorough and hygienic mattress cleaning service for a healthier sleep environment.",
    points: [
      "Effective dust mite and allergen removal",
      "Deep cleaning and sanitization",
      "Removes stains and odors",
      "Uses safe and non-toxic products",
      "Improves indoor air quality",
      "Experienced and professional technicians",
      "Convenient on-site service",
      "Competitive pricing"
    ]
  },
  whatsIncluded: {
    title: "What Our Mattress Cleaning Includes",
    description: "Our mattress cleaning service focuses on deep cleaning and sanitization for a healthier mattress.",
    items: [
      "Mattress inspection",
      "High-powered vacuuming",
      "Targeted stain treatment",
      "Deep cleaning/Sanitization",
      "Odor neutralization",
      "Quick drying process",
      "Final inspection"
    ]
  }
};

export default function MattressCleaningPage() {
  const [isMobile, setIsMobile] = useState(false)

  // Handle window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  
  // Animation variants for the hero section
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
    src: "/mattress/hero.webp",
    alt: "Professional mattress cleaning services in Kenya",
  }

  const whyChooseUsImage = {
    src: "/mattress/why-choose-us.webp",
    alt: "Professional mattress cleaning team at work",
  }

  const whatsIncludedImages = [
    { src: "/mattress/mattress-01.webp", alt: "Mattress cleaning process" },
    { src: "/mattress/mattress-02.webp", alt: "Stain removal treatment" },
    { src: "/mattress/mattress-03.webp", alt: "Deep cleaning equipment" },
    { src: "/mattress/mattress-04.webp", alt: "Final inspection and quality check" }
  ]

  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextImage = () => setCarouselIndex((prev) => (prev + 1) % whatsIncludedImages.length);
  const prevImage = () => setCarouselIndex((prev) => (prev - 1 + whatsIncludedImages.length) % whatsIncludedImages.length);

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % whatsIncludedImages.length);
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(interval);
  }, [whatsIncludedImages.length]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Image */}
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
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 relative flex-grow flex flex-col justify-center">
          <div className="flex flex-col items-center">
            {/* Centered Content */}
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
                  <FaBed className="w-3.5 h-3.5" />
                  Mattress Services
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-wide"
              >
                Professional{" "}
                <span className="text-fff relative inline-block">
                  Mattress
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
                className="text-sm md:text-base lg:text-base text-gray-200 tracking-wide mb-10 md:mb-12 max-w-2xl mx-auto"
              >
                Enjoy a healthier sleep with our professional mattress cleaning services. We effectively remove dust mites, allergens, stains, and odors using eco-friendly products and proven techniques. Our trained technicians ensure your mattress is thoroughly cleaned and sanitized, improving your indoor air quality and sleep environment.
              </motion.p>

              {/* Minimalist Stats Section */}
              <StatsSectionWithAnimation />

              {/* CTA Button */}
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

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Why Choose Our Mattress Cleaning Services Section */}
      <section className="relative py-12 md:py-16 lg:py-20">
        {/* Background matching home page pattern */}
        <div className="absolute inset-0 bg-white dark:bg-gray-900">
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,#add8e6_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
            {/* Text Column */}
            <div className="w-full md:w-1/2 max-w-3xl md:pl-14 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-6 w-full flex justify-center md:justify-start">
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-3 sm:py-2 rounded-full text-xs font-medium inline-flex items-center gap-2 shadow-sm">
                    <FaBed className="w-3.5 h-3.5" />
                  Why Choose Us
                </span>
                </div>
              <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 leading-tight tracking-wide w-full">
                <span className="mb-1">Why Choose Our</span>
                <span className="text-add8e6 relative inline-block block mb-4 ml-2">
                  Mattress
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
              {/* Mobile image below heading, above paragraphs */}
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
                In the bustling city of Nairobi, where quality sleep is essential for maintaining a healthy lifestyle, mattress hygiene often gets overlooked. Dust mites, allergens, and accumulated debris can significantly impact your sleep quality and overall health. <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> offers professional mattress cleaning services designed to restore your mattress to its optimal condition, ensuring you enjoy a healthier, more restful sleep every night.
              </p>
              <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-5">
                Among professional mattress cleaning services in Nairobi, <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> is recognized for our commitment to quality, reliability, and customer satisfaction. We are pleased to offer top-notch mattress cleaning services in Nairobi, Kenya, using eco-friendly products and proven techniques. Our team is dedicated to providing a thorough, hygienic cleaning that removes dust mites, allergens, and stains while preserving your mattress's integrity.
              </p>
              <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-5">
                Our comprehensive mattress cleaning services in Nairobi are tailored to improve your sleep environment and overall health. We pay close attention to every detail, offering deep cleaning that removes dust mites, allergens, and stains, as well as sanitization to eliminate bacteria and odors. With Simca, you can trust that your mattress will be cared for by trained professionals who understand the importance of a clean, healthy sleep surface.
              </p>
                </div>
            {/* Desktop image column */}
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

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Benefits of Our Mattress Cleaning Services Section */}
      <section className="relative py-12 md:py-16 lg:py-20">
        {/* Background matching home page pattern */}
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
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 leading-tight tracking-wide">
              <span className="block mb-1">Benefits of Our</span>
              <span className="inline-block block mb-1 ml-2">
                <span className="text-add8e6 relative inline-block">Mattress
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
            <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide">
              Experience the difference that professional mattress cleaning can make in your sleep quality. From allergen removal to improved hygiene, discover why homeowners choose our mattress cleaning services.
            </p>
          </motion.div>
          <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-6 space-y-3 md:space-y-4">
            {[
              {
                title: "Time-saving Convenience:",
                icon: HiClock,
                content: (
                  <>
                    One of the most significant advantages of choosing <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> for mattress cleaning is the time-saving convenience it offers. Instead of spending hours trying to clean your mattress manually, you can leave the specialized cleaning to our trained professionals. Our skilled team will efficiently tackle the task using professional equipment and techniques, allowing you to focus on what matters most while ensuring your mattress receives the thorough cleaning it deserves.
                  </>
                )
              },
              {
                title: "Exceptional Quality Results:",
                icon: MdStars,
                content: (
                  <>
                    <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> prides itself on delivering exceptional quality mattress cleaning services in Kenya that surpasses expectations. Equipped with the latest cleaning tools, specialized techniques, and eco-friendly products, our trained professionals ensure a thorough and effective mattress clean every time. We guarantee a hygienic sleep surface that promotes better sleep quality and overall well-being.
                  </>
                )
              },
              {
                title: "Healthier Sleep Environment:",
                icon: FaLeaf,
                content: (
                  <>
                    A clean mattress is crucial for maintaining good health and quality sleep, and <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> understands this well. By eliminating dust mites, allergens, and harmful bacteria from your mattress, our cleaning solutions create a healthier sleep environment for you and your family. This is particularly beneficial for individuals with allergies or respiratory conditions, as well as families aiming to provide a safe and hygienic sleeping surface.
                  </>
                )
              },
              {
                title: "Customized Mattress Cleaning:",
                icon: FaCog,
                content: (
                  <>
                    <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> offers flexible and customized mattress cleaning solutions tailored to your specific needs. Whether you require deep cleaning for heavily soiled mattresses, specialized stain removal, or regular maintenance cleaning, we can accommodate your requirements. Our personalized approach ensures that every part of your mattress receives the attention it deserves.
                  </>
                )
              },
              {
                title: "Consistency and Reliability:",
                icon: HiShieldCheck,
                content: (
                  <>
                    With <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span>, you can expect consistency and reliability in every mattress cleaning session. Our dedicated team follows a strict cleaning regimen and schedule, ensuring that your mattress remains consistently clean and well-maintained. Whether it's a single, double, queen, or king mattress, you can trust us to deliver impeccable results time and time again.
                  </>
                )
              },
              {
                title: "Professionalism and Expertise:",
                icon: FaAward,
                content: (
                  <>
                    <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> is staffed by trained professionals who possess the expertise and skills needed to handle various mattress cleaning challenges. Our attention to detail, professionalism, and commitment to customer satisfaction set us apart in the industry. Whether it's tackling tough stains, removing allergens, or sanitizing your mattress, our team is up to the task.
                  </>
                )
              },
              {
                title: "Cost-effective Solutions:",
                icon: FaTags,
                content: (
                  <>
                    While some may perceive professional mattress cleaning services as a luxury, <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> offers cost-effective solutions that provide excellent value for money. When you consider the improved sleep quality, extended mattress lifespan, and health benefits of a clean mattress, investing in our cleaning services becomes a wise decision for your mattress cleaning needs in Kenya.
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

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* What's Included in Our Mattress Cleaning Services Section */}
      <section className="relative py-12 md:py-20">
        {/* Background matching home page pattern */}
        <div className="absolute inset-0 bg-white dark:bg-gray-900">
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,#add8e6_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8">
            {/* Desktop image column (Left Side) */}
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
                {/* Carousel navigation buttons */}
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
                {/* Pagination dots (desktop only) */}
                <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 gap-2 z-10">
                  {whatsIncludedImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCarouselIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === carouselIndex ? 'bg-add8e6 w-6' : 'bg-white/60 w-3'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                      type="button"
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Text Column (Right Side) */}
            <div className="w-full md:w-1/2 max-w-3xl md:pl-2 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-6 w-full flex justify-center md:justify-start">
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-3 sm:py-2 rounded-full text-xs font-medium inline-flex items-center gap-2 shadow-sm">
                    <FaBed className="w-3.5 h-3.5" />
                    What's Included
                  </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 leading-tight tracking-wide w-full">
                <span className="mb-1">What's Included in Our</span>
                <span className="ml-2">
                  <span className="text-add8e6 relative inline-block block mb-4">
                    Mattress
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
              {/* Mobile image below heading, above paragraphs */}
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
                  {/* Carousel navigation buttons (mobile) */}
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
                  {/* Pagination dots (mobile) */}
                  <div className="flex absolute bottom-4 left-1/2 -translate-x-1/2 gap-2 z-10">
                    {whatsIncludedImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCarouselIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === carouselIndex ? 'bg-add8e6 w-4' : 'bg-white/60 w-2'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                        type="button"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-5">
                If you're looking for a reliable mattress cleaning service in Nairobi, Simca Agencies is your trusted choice. We offer comprehensive mattress cleaning services and always look for new ways to improve your experience. Our team is flexible, thorough, and ready to accommodate your specific needs—including specialized stain removal and deep sanitization.
              </p>
              <ul className="list-disc pl-5 space-y-4 text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300">
                <li>
                  <span className="font-semibold text-gray-800 dark:text-white">Mattress Inspection</span> – Detailed assessment of mattress condition, fabric type identification, and comprehensive stain analysis. Our technicians thoroughly examine your mattress to determine the best cleaning approach and identify areas requiring special attention.
                </li>
                <li>
                  <span className="font-semibold text-gray-800 dark:text-white">Deep Vacuuming</span> – High-powered vacuuming to remove dust mites, allergens, and debris from mattress surface and crevices. We use specialized equipment to reach deep into the mattress fibers and extract accumulated particles that can affect your sleep quality.
                </li>
                <li>
                  <span className="font-semibold text-gray-800 dark:text-white">Stain Treatment</span> – Professional stain removal using appropriate cleaning solutions for different types of stains and fabrics. Our experts identify stain types and apply targeted treatments to effectively remove spots while preserving mattress integrity.
                </li>
                <li>
                  <span className="font-semibold text-gray-800 dark:text-white">Sanitization Process</span> – Complete sanitization using eco-friendly products to eliminate bacteria, odors, and allergens. We ensure your mattress is thoroughly sanitized to create a healthy sleep environment for you and your family.
                </li>
              </ul>
            </div>
        </div>
      </div>
      </section>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Mattress Cleaning Plans Section */}
      <div id="pricing" className="relative py-12 md:py-20 scroll-mt-24">
        {/* Background matching home page pattern */}
        <div className="absolute inset-0 bg-gray-50 dark:bg-gray-800/50">
          <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px] opacity-5" />
        </div>
        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
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
                  className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 leading-tight tracking-wide"
                >
                  <span className="text-add8e6 relative inline-block tracking-wider">
                    Mattress
                    <motion.span 
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </span>{' '}
                  Cleaning Plans
                </motion.h2>
                {/* New Introductory Paragraph */}
                <motion.p 
                  className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-6 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <strong>Note:</strong> The mattress cleaning service prices below are approximate and may vary based on the size and type of mattress, your specific requirements, your location in Nairobi, and the cleaning package you choose. For unique mattresses or special requests, please contact us for a custom quote. All prices are per mattress and apply to Nairobi.
                </motion.p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                {/* Main three cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0 }}
                    className="group relative bg-white dark:bg-gray-900/50 rounded-lg p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-add8e6/30 focus:ring-offset-1 border border-gray-100 dark:border-gray-800/50 overflow-hidden flex flex-col"
                >
                  <div className="flex flex-col h-full relative z-10">
                    <div className="p-2 bg-add8e6/10 rounded-lg group-hover:scale-105 transition-transform duration-300 mb-3">
                      <h3 className="font-semibold text-xs md:text-sm text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">
                        Single Mattress
                      </h3>
                    </div>
                    <div className="text-xs md:text-sm text-add8e6 font-bold mb-3">
                      KES 2,000 – 4,000
                    </div>
                    <ul className="space-y-1.5 flex-grow mb-4">
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <FaBed className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Deep cleaning and sanitization</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <FaBed className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Dust mite and allergen removal</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <FaBed className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Stain treatment and odor elimination</span>
                      </li>
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-auto inline-flex items-center justify-center gap-2 bg-add8e6 text-white px-5 py-2 font-medium transition-all duration-300 text-center text-xs tracking-wide border-b-2 border-transparent hover:border-white/50 group"
                    >
                      Get a Quote
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                    className="group relative bg-white dark:bg-gray-900/50 rounded-lg p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-add8e6/30 focus:ring-offset-1 border border-gray-100 dark:border-gray-800/50 overflow-hidden flex flex-col"
                >
                  <div className="flex flex-col h-full relative z-10">
                    <div className="p-2 bg-add8e6/10 rounded-lg group-hover:scale-105 transition-transform duration-300 mb-3">
                      <h3 className="font-semibold text-xs md:text-sm text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">
                        Multiple Mattresses (2-3)
                      </h3>
                    </div>
                    <div className="text-xs md:text-sm text-add8e6 font-bold mb-3">
                      KES 5,000 – 10,000
                    </div>
                    <ul className="space-y-1.5 flex-grow mb-4">
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <FaBed className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Deep cleaning for 2-3 mattresses</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <FaBed className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Comprehensive sanitization</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <FaBed className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Bulk discount pricing</span>
                      </li>
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-auto inline-flex items-center justify-center gap-2 bg-add8e6 text-white px-5 py-2 font-medium transition-all duration-300 text-center text-xs tracking-wide border-b-2 border-transparent hover:border-white/50 group"
                    >
                      Get a Quote
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                    className="group relative bg-white dark:bg-gray-900/50 rounded-lg p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-add8e6/30 focus:ring-offset-1 border border-gray-100 dark:border-gray-800/50 overflow-hidden flex flex-col"
                >
                  <div className="flex flex-col h-full relative z-10">
                    <div className="p-2 bg-add8e6/10 rounded-lg group-hover:scale-105 transition-transform duration-300 mb-3">
                      <h3 className="font-semibold text-xs md:text-sm text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">
                        Large Home (4+ Mattresses)
                      </h3>
                    </div>
                    <div className="text-xs md:text-sm text-add8e6 font-bold mb-3">
                      KES 12,000 – 20,000
                    </div>
                    <ul className="space-y-1.5 flex-grow mb-4">
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <FaBed className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Comprehensive mattress cleaning</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <FaBed className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>All mattresses in the home</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <FaBed className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Priority scheduling available</span>
                      </li>
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-auto inline-flex items-center justify-center gap-2 bg-add8e6 text-white px-5 py-2 font-medium transition-all duration-300 text-center text-xs tracking-wide border-b-2 border-transparent hover:border-white/50 group"
                    >
                      Get a Quote
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </div>
              {/* Centered specialized card below */}
              <div className="flex justify-center mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="group relative bg-white dark:bg-gray-900/50 rounded-lg p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-add8e6/30 focus:ring-offset-1 border border-gray-100 dark:border-gray-800/50 overflow-hidden flex flex-col w-full md:w-1/3"
                >
                  <div className="flex flex-col h-full relative z-10">
                    <div className="p-2 bg-add8e6/10 rounded-lg group-hover:scale-105 transition-transform duration-300 mb-3">
                      <h3 className="font-semibold text-xs md:text-sm text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">
                        Specialized / Custom Mattress Cleaning
                      </h3>
                    </div>
                    <div className="text-xs md:text-sm text-add8e6 font-bold mb-3">
                      Negotiable / Custom Quote
                    </div>
                    <ul className="space-y-1.5 flex-grow mb-4">
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <FaBed className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Luxury mattresses and special fabrics</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <FaBed className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Custom cleaning plans for unique mattresses</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <FaBed className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Flexible scheduling and tailored services</span>
                      </li>
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-auto inline-flex items-center justify-center gap-2 bg-add8e6 text-white px-5 py-2 font-medium transition-all duration-300 text-center text-xs tracking-wide border-b-2 border-transparent hover:border-white/50 group"
                    >
                      Get a Quote
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Explanatory Paragraph Below Cards */}
              <div className="max-w-3xl mx-auto mt-8 text-center">
                <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300">
                  When comparing mattress cleaning service prices in Nairobi, consider factors such as reputation, reliability, and the range of services offered in addition to cost. Choosing a reputable cleaning company ensures your mattresses remain clean, healthy, and comfortable for your family. For a personalized quote or to discuss your specific needs, please <Link href="/contact" className="text-add8e6 hover:underline">contact us</Link>.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Contact Section */}
      <section className="relative py-12 md:py-20">
        {/* Background matching home page pattern */}
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
              Have questions about our mattress cleaning services? Get a free quote today! We're here to help you sleep healthier and better.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />
      </section>


    </div>
  );
} 