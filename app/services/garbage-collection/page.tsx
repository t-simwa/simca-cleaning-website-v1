"use client";

import { Trash2, CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock, Sparkles, Shield, Users, Calendar, Star, Leaf, Settings, Award, Wallet, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ContactForm from "@/components/contact-form";

const MotionImage = motion(Image)

// CountUp component for animated numbers
function CountUp({ end, duration = 1.5, suffix = "" }: { end: string | number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const isPercent = typeof end === 'string' && end.includes('%');
    const isPlus = typeof end === 'string' && end.includes('+');
    const numericEnd = typeof end === 'number' ? end : parseInt(end);
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
  }, [end, duration]);
  let display: string | number = count;
  if (typeof end === 'string' && end.includes('%')) display = `${count}%`;
  if (typeof end === 'string' && end.includes('+')) display = `${count}+`;
  return <span>{display}{suffix}</span>;
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

// Placeholder data for Garbage Collection Services
const garbageCollectionService: ServiceDetail = {
  title: "Garbage Collection Services",
  description: "Reliable and efficient garbage collection services for residential and commercial properties. We ensure proper waste management and timely disposal.",
  icon: <Trash2 className="h-8 w-8 md:h-10 md:w-10 text-add8e6" />,
  features: [
    "Scheduled waste collection",
    "Provision of bins (upon request)",
    "Residential and commercial services",
    "Proper waste segregation guidance",
    "Environmentally responsible disposal",
    "Flexible collection frequencies",
    "Prevents odor and pest issues",
    "Experienced collection team"
  ],
  availability: "Weekly or customized schedules",
  process: {
    title: "Our Garbage Collection Process",
    steps: [
      {
        title: "Setup and Schedule",
        description: "We determine the best bin size and collection schedule for your needs."
      },
      {
        title: "Regular Collection",
        description: "Our team collects your waste on the agreed-upon schedule."
      },
      {
        title: "Transportation and Disposal",
        description: "Waste is transported to authorized disposal sites."
      },
      {
        title: "Area Cleaning",
        description: "We ensure the collection area is left clean."
      }
    ]
  },
  pricing: {
    title: "Garbage Collection Pricing",
    packages: [
      {
        name: "Residential Weekly",
        price: "From KES 500/month",
        features: [
          "Weekly collection",
          "Standard bin size",
          "Suitable for most households"
        ]
      },
      {
        name: "Commercial Weekly",
        price: "Custom Quote",
        features: [
          "Weekly collection",
          "Larger bin options",
          "Pricing based on volume and frequency"
        ]
      },
      {
        name: "Custom Schedule",
        price: "Custom Quote",
        features: [
          "Tailored collection frequency",
          "Suitable for specific business needs",
          "Pricing based on volume and schedule"
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
    title: "Why Choose Us for Garbage Collection",
    description: "We provide timely and responsible garbage collection, contributing to a cleaner and healthier environment.",
    points: [
      "Reliable and timely service",
      "Proper waste management practices",
      "Environmentally conscious disposal",
      "Flexible scheduling options",
      "Experienced and efficient team",
      "Competitive and transparent pricing",
      "Reduces health and odor issues",
      "Contributes to a cleaner community"
    ]
  },
  whatsIncluded: {
    title: "What Our Garbage Collection Includes",
    description: "Our service ensures your waste is collected and disposed of properly and on schedule.",
    items: [
      "Scheduled waste pickup",
      "Transportation to disposal site",
      "Proper disposal of waste",
      "Leaving the collection area tidy",
      "Optional bin provision and maintenance"
    ]
  }
};

export default function GarbageCollectionPage() {
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

  // Stats animation variants with enhanced micro-interactions
  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  const heroImage = {
    src: "/home-hero/cleaner-home.jpg",
    alt: "Professional garbage collection services in Kenya",
  }

  // State for the carousel
  const [carouselIndex, setCarouselIndex] = useState(0);
  const whatsIncludedImages = [
    { src: "/services/garbage-collection/garbage-bin.jpg", alt: "Garbage bin in a residential area" },
    { src: "/services/garbage-collection/waste-disposal.jpg", alt: "Waste disposal at a recycling center" },
    { src: "/services/garbage-collection/collection-area.jpg", alt: "Collection area after pickup" },
  ];

  const nextImage = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % whatsIncludedImages.length);
  };

  const prevImage = () => {
    setCarouselIndex((prevIndex) => (prevIndex - 1 + whatsIncludedImages.length) % whatsIncludedImages.length);
  };

  return (
    <div className="min-h-screen">
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
                  <CheckCircle2 className="w-4 h-4" />
                  Garbage Collection Services
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-wide"
              >
                Professional{" "}
                <span className="text-fff relative inline-block">
                  Garbage
                  <motion.span
                    className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </span>{" "}
                Collection
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-sm md:text-base lg:text-base text-gray-200 tracking-wide mb-10 md:mb-12 max-w-2xl mx-auto"
              >
                We care for your environment like it's our own. Our friendly, reliable team uses eco-friendly practices and proven techniques to give you a clean, healthy space—every time. No contracts, no hidden fees, just honest service that fits your schedule and your budget. Whether you need regular collection or one-time disposal, we're here to keep your space clean so you can focus on what matters most.
              </motion.p>

              {/* Quick stats with enhanced micro-interactions */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 max-w-3xl mx-auto mb-8 md:mb-12"
              >
                {[
                  { 
                    value: "100%", 
                    label: "Satisfaction Guaranteed", 
                    icon: <Shield className="w-4 h-4 text-white" />,
                  },
                  { 
                    value: "500+", 
                    label: "Happy Clients", 
                    icon: <Users className="w-4 h-4 text-white" />,
                  },
                  { 
                    value: "4.9", 
                    label: "Average Rating", 
                    icon: <Star className="w-4 h-4 text-white" />,
                  }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={statsVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-gradient-to-r from-add8e6 to-add8e6/90 p-4 md:p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center"
                  >
                    <div className="text-xl md:text-xl lg:text-xl font-bold text-white mb-1 md:mb-2 flex items-center justify-center gap-2">
                      {stat.icon}
                      <span className="group-hover:scale-110 transition-transform duration-300">
                        <CountUp end={stat.value} duration={1.2} />
                      </span>
                    </div>
                    <div className="text-xs md:text-sm text-white">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

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

      {/* Why Choose Our Garbage Collection Services Section */}
      <section className="relative py-12 md:py-16 lg:py-20">
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
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
            {/* Text Column */}
            <div className="w-full md:w-1/2 max-w-3xl md:pl-14 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-6 w-full flex justify-center md:justify-start">
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-3 sm:py-2 rounded-full text-xs font-medium inline-flex items-center gap-2 shadow-sm">
                    <CheckCircle2 className="w-4 h-4" />
                  Why Choose Us
                  </span>
                </div>
              <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-6 md:mb-8 leading-tight tracking-wide w-full">
                <span className="mb-1">Why Choose Our</span>
                <span className="text-add8e6 relative inline-block block mb-4 ml-2">
                  Garbage
                  <motion.span 
                    className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                      initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    style={{ display: 'block' }}
                    />
                </span>{" "}
                <span>Collection Services?</span>
              </h2>
              {/* Mobile image below heading, above paragraphs */}
              <div className="w-full mb-6 md:hidden">
                <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-2xl h-[20rem] xs:h-[24rem] sm:h-[28rem] mx-auto">
                  <Image
                    src="/home-hero/cleaner-home.jpg"
                    alt="Professional garbage collection services"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
              </div>
                    </div>
              <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-5">
                The pressures of job, family, and personal responsibilities can frequently leave little time for proper waste management in the fast-paced city of Nairobi. In such a vibrant and demanding environment, maintaining a clean and organized space can feel overwhelming. <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> offers a variety of expert garbage collection solutions designed to fit your busy lifestyle, ensuring your environment remains clean and healthy. We stand out as a beacon of excellence and convenience in the midst of the urban bustle, giving you more time to focus on what matters most.
              </p>
              <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-5">
                Among professional garbage collection services in Nairobi, <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> is recognized for our commitment to quality, reliability, and customer satisfaction. We are pleased to offer top-notch garbage collection services in Nairobi, Kenya, using eco-friendly practices and proven techniques. Our team is dedicated to constantly providing a clean, healthy, and organized environment for every client, no matter the size or type of your property.
              </p>
              <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-5">
                Our thorough garbage collection services in Nairobi are tailored to improve your environment's level of cleanliness and hygiene. We pay close attention to every detail, offering scheduled collection for residential and commercial properties, as well as flexible scheduling to suit your needs. With Simca, you can trust that every aspect of your waste management will be cared for by trained professionals who treat your space with respect and care.
              </p>
                </div>
            {/* Desktop image column */}
            <div className="w-full md:w-1/2 flex justify-center md:pr-8 mb-8 md:mb-0 hidden md:flex">
              <div className="relative rounded-xl overflow-hidden shadow-lg w-full max-w-2xl h-[47rem] mx-auto">
                    <Image
                      src="/home-hero/cleaner-home.jpg"
                      alt="Professional garbage collection services"
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

      {/* Benefits of Our Garbage Collection Services Section */}
      <section className="relative py-12 md:py-16 lg:py-20">
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
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-add8e6/20 to-add8e6/10 text-add8e6 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs font-medium mb-6 md:mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Benefits of Our Services
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-6 md:mb-6 leading-tight tracking-wide">
              <span className="block mb-1">Benefits of Our</span>
              <span className="inline-block block mb-1 ml-2">
                <span className="text-add8e6 relative inline-block">Garbage
                  <motion.span 
                    className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    style={{ display: 'block' }}
                  />
                </span>{" "}
                Collection Services
              </span>
            </h2>
            <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide">
              Experience the difference that professional garbage collection can make in your daily life. From time savings to environmental benefits, discover why property owners choose our services.
            </p>
          </motion.div>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 space-y-10 text-gray-700 dark:text-gray-200 text-sm md:text-base lg:text-base font-normal">
            {[
              {
                title: "Time-saving Convenience:",
                icon: <Clock className="w-5 h-5 text-add8e6 flex-shrink-0" />,
                content: (
                  <>
                    One of the most significant advantages of choosing <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> is the time-saving convenience it offers. Instead of spending your valuable time managing waste disposal and dealing with collection schedules, you can leave the garbage collection to our trained professionals. Whether it's regular weekly collection or customized schedules, our skilled team will efficiently handle the task, allowing you to focus on what matters most to you and your family.
                  </>
                )
              },
              {
                title: "Exceptional Quality Results:",
                icon: <Star className="w-5 h-5 text-add8e6 flex-shrink-0" />,
                content: (
                  <>
                    <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> prides itself on delivering exceptional quality garbage collection services in Kenya that surpasses expectations. Equipped with the latest equipment, techniques, and eco-friendly practices, our trained professionals ensure a thorough and effective collection every time. From residential properties to commercial establishments, we guarantee a clean environment that promotes health and well-being.
                  </>
                )
              },
              {
                title: "Healthier Living Environment:",
                icon: <Leaf className="w-5 h-5 text-add8e6 flex-shrink-0" />,
                content: (
                  <>
                    A clean environment is crucial for maintaining good health, and <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> understands this well. By eliminating waste accumulation, preventing odors, and reducing pest issues, our garbage collection solutions create healthier living spaces for you and your family. This is particularly beneficial for individuals with respiratory conditions, as well as families aiming to provide a safe and hygienic environment for their children and pets.
                  </>
                )
              },
              {
                title: "Customized Collection Services:",
                icon: <Settings className="w-5 h-5 text-add8e6 flex-shrink-0" />,
                content: (
                  <>
                    <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> offers flexible and customized garbage collection solutions tailored to your specific needs. Whether you require regular weekly collection, specialized services for different types of waste, or emergency collection services, we can accommodate your requirements. Our personalized approach ensures that every aspect of your waste management receives the attention it deserves.
                  </>
                )
              },
              {
                title: "Consistency and Reliability:",
                icon: <Shield className="w-5 h-5 text-add8e6 flex-shrink-0" />,
                content: (
                  <>
                    With <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span>, you can expect consistency and reliability in every collection session. Our dedicated team follows a strict collection regimen and schedule, ensuring that your property remains consistently clean and well-maintained. Whether it's a residential home, apartment, or commercial property, you can trust us to deliver impeccable results time and time again.
                  </>
                )
              },
              {
                title: "Professionalism and Expertise:",
                icon: <Award className="w-5 h-5 text-add8e6 flex-shrink-0" />,
                content: (
                  <>
                    <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> is staffed by trained professionals who possess the expertise and skills needed to handle various waste management challenges. Our attention to detail, professionalism, and commitment to customer satisfaction set us apart in the industry. Whether it's handling different types of waste, ensuring proper disposal, or maintaining clean collection areas, our team is up to the task.
                  </>
                )
              },
              {
                title: "Cost-effective Solutions:",
                icon: <Wallet className="w-5 h-5 text-add8e6 flex-shrink-0" />,
                content: (
                  <>
                    While some may perceive professional garbage collection services as a luxury, <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> offers cost-effective solutions that provide excellent value for money. When you consider the time saved, the quality of service delivered, and the benefits of a clean environment, investing in our collection services becomes a wise decision for your garbage collection needs in Kenya.
                  </>
                )
              }
            ].map((para, i) => (
              <motion.div
                key={i} 
                className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-add8e6/50 focus:ring-offset-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className="flex items-center gap-2 mb-1">
                  {para.icon}
                  <span className="font-bold text-add8e6 text-xs md:text-sm">{para.title}</span>
                </span>
                <span>{para.content}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* What's Included in Our Garbage Collection Services Section */}
      <section className="relative py-12 md:py-16 lg:py-20">
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
            {/* Text Column (Right Side) */}
            <div className="w-full md:w-1/2 max-w-3xl md:pl-2 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-6 w-full flex justify-center md:justify-start">
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-3 sm:py-2 rounded-full text-xs font-medium inline-flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  What's Included
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-6 md:mb-8 leading-tight tracking-wide w-full">
                <span className="mb-1">What's Included in Our</span>
                <span className="ml-2">
                  <span className="text-add8e6 relative inline-block block mb-4">
                    Garbage
                    <motion.span 
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      style={{ display: 'block' }}
                    />
                  </span>{' '}
                  Collection Services
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
                If you're looking for a reliable garbage collection service in Nairobi, Simca Agencies is your trusted choice. We offer a wide range of waste management services and always look for new ways to improve your experience. Our team is flexible, thorough, and ready to accommodate your specific needs—including special requests for additional services.
              </p>
              <ul className="list-disc pl-5 space-y-4 text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300">
                <li>
                  <span className="font-semibold text-gray-800 dark:text-white">Scheduled waste pickup</span> – Regular collection of household and commercial waste on agreed-upon schedules. Our team ensures timely pickup and maintains clean collection areas. If needed, you can request additional pickups or emergency collection services.
                </li>
                <li>
                  <span className="font-semibold text-gray-800 dark:text-white">Transportation and disposal</span> – Safe and responsible transportation of waste to authorized disposal sites. We handle different types of waste appropriately and ensure proper disposal methods are followed. You can also request specialized handling for specific waste types.
                </li>
                <li>
                  <span className="font-semibold text-gray-800 dark:text-white">Area cleaning</span> – Ensuring the collection area is left clean and tidy after pickup. Our team removes any spillage, cleans collection points, and maintains a hygienic environment. We also provide guidance on proper waste segregation.
                </li>
                <li>
                  <span className="font-semibold text-gray-800 dark:text-white">Bin provision and maintenance</span> – Optional provision of appropriate waste bins and regular maintenance services. We can supply different bin sizes and types, and ensure they remain in good condition throughout the service period.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Garbage Collection Service Plans Section */}
      <div id="pricing" className="relative py-12 md:py-20 scroll-mt-24">
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
              {/* Section Header */}
              <div className="text-center mb-8 md:mb-16">
                <motion.div 
                  className="inline-block mb-3 sm:mb-4 md:mb-6 mt-0 !mt-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2 shadow-sm mt-0 !mt-0">
                    <Phone className="w-4 h-4" />
                    Pricing & Packages
                  </span>
                </motion.div>
                <motion.h2 
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-6 leading-tight tracking-wide mt-0 !mt-0"
                >
                  <span className="text-add8e6 relative inline-block tracking-wider">
                    Garbage
                  <motion.span 
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      style={{ display: 'block' }}
                    />
                  </span>{' '}
                  Collection Plans
                </motion.h2>
                {/* New Introductory Paragraph */}
                <motion.p 
                  className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-6 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <strong>Note:</strong> The garbage collection service prices below are approximate and may vary based on the volume of waste, your specific requirements, your location in Nairobi, and the collection package you choose. For unique requirements or special requests, please contact us for a custom quote. All prices are per month and apply to Nairobi.
                </motion.p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Main three cards */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0 }}
                    className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-add8e6/50 focus:ring-offset-2 overflow-hidden flex flex-col"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50 dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50" />
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px]" />
                    </div>
                    <div className="flex flex-col h-full relative z-10">
                    <div className="p-2 md:p-3 bg-add8e6/10 rounded-lg md:rounded-xl group-hover:scale-110 transition-transform duration-500 mb-4">
                      <h3 className="font-semibold text-sm md:text-base text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">
                        Residential Weekly
                      </h3>
                      </div>
                    <div className="text-xs md:text-sm text-add8e6 font-bold mb-2">
                      KES 500 – 1,500
                    </div>
                      <ul className="space-y-2 flex-grow mb-6">
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Weekly waste collection
                      </li>
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Standard bin size included
                      </li>
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Suitable for most households
                      </li>
                      </ul>
                      <Link
                        href="/contact"
                      className="mt-auto inline-flex items-center justify-center gap-2 bg-add8e6 text-white px-6 py-2.5 md:py-3 font-semibold transition-all duration-300 text-center text-xs md:text-sm tracking-wide border-b-2 border-transparent hover:border-white/50 group"
                      >
                        Get a Quote
                        <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>
              <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-add8e6/50 focus:ring-offset-2 overflow-hidden flex flex-col"
                  >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50 dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50" />
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px]" />
                </div>
                  <div className="flex flex-col h-full relative z-10">
                    <div className="p-2 md:p-3 bg-add8e6/10 rounded-lg md:rounded-xl group-hover:scale-110 transition-transform duration-500 mb-4">
                      <h3 className="font-semibold text-sm md:text-base text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">
                        Commercial Weekly
                      </h3>
                    </div>
                    <div className="text-xs md:text-sm text-add8e6 font-bold mb-2">
                      Custom Quote
                    </div>
                    <ul className="space-y-2 flex-grow mb-6">
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Weekly collection service
                      </li>
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Larger bin options available
                      </li>
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Pricing based on volume and frequency
                      </li>
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-auto inline-flex items-center justify-center gap-2 bg-add8e6 text-white px-6 py-2.5 md:py-3 font-semibold transition-all duration-300 text-center text-xs md:text-sm tracking-wide border-b-2 border-transparent hover:border-white/50 group"
                    >
                      Get a Quote
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
              </motion.div>
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-add8e6/50 focus:ring-offset-2 overflow-hidden flex flex-col"
                >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50 dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50" />
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px]" />
                </div>
                  <div className="flex flex-col h-full relative z-10">
                    <div className="p-2 md:p-3 bg-add8e6/10 rounded-lg md:rounded-xl group-hover:scale-110 transition-transform duration-500 mb-4">
                      <h3 className="font-semibold text-sm md:text-base text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">
                        Custom Schedule
                      </h3>
                </div>
                    <div className="text-xs md:text-sm text-add8e6 font-bold mb-2">
                      Custom Quote
            </div>
                    <ul className="space-y-2 flex-grow mb-6">
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Tailored collection frequency
                      </li>
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Suitable for specific business needs
                      </li>
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Pricing based on volume and schedule
                      </li>
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-auto inline-flex items-center justify-center gap-2 bg-add8e6 text-white px-6 py-2.5 md:py-3 font-semibold transition-all duration-300 text-center text-xs md:text-sm tracking-wide border-b-2 border-transparent hover:border-white/50 group"
                    >
                      Get a Quote
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </div>
              {/* Centered specialized card below */}
              <div className="flex justify-center mt-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-add8e6/50 focus:ring-offset-2 overflow-hidden flex flex-col w-full md:w-1/3"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50 dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50" />
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px]" />
                    </div>
                  <div className="flex flex-col h-full relative z-10">
                    <div className="p-2 md:p-3 bg-add8e6/10 rounded-lg md:rounded-xl group-hover:scale-110 transition-transform duration-500 mb-4">
                      <h3 className="font-semibold text-sm md:text-base text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">
                        Specialized / Custom Collection
                      </h3>
                    </div>
                    <div className="text-xs md:text-sm text-add8e6 font-bold mb-2">
                      Negotiable / Custom Quote
                    </div>
                    <ul className="space-y-2 flex-grow mb-6">
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Large-scale waste disposal, construction debris, or special requests
                      </li>
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Custom collection plans for unique requirements
                      </li>
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Flexible scheduling and tailored services
                      </li>
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-auto inline-flex items-center justify-center gap-2 bg-add8e6 text-white px-6 py-2.5 md:py-3 font-semibold transition-all duration-300 text-center text-xs md:text-sm tracking-wide border-b-2 border-transparent hover:border-white/50 group"
                    >
                      Get a Quote
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    </div>
                  </motion.div>
              </div>

              {/* Explanatory Paragraph Below Cards */}
              <div className="max-w-3xl mx-auto mt-8 text-center">
                <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300">
                  When comparing garbage collection service prices in Nairobi, consider factors such as reputation, reliability, and the range of services offered in addition to cost. Choosing a reputable collection company ensures your waste is disposed of properly and your environment remains clean and healthy. For a personalized quote or to discuss your specific needs, please <Link href="/contact" className="text-add8e6 hover:underline">contact us</Link>.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Contact Section (with residential page background) */}
      <section className="relative py-12 md:py-16 lg:py-20">
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
            <div className="inline-flex items-center gap-2 bg-add8e6/10 text-add8e6 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs font-medium mb-4 md:mb-6">
              <MessageCircle className="w-4 h-4" />
              Contact Us
              </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight">
              Get in{' '}
              <span className="text-add8e6 relative">
                Touch
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-add8e6/20 rounded-full" />
                </span>
              </h2>
            <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300">
              Have questions about our services? Get a free garbage collection quote today! We're here to help.
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