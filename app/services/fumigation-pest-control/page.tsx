"use client";

import { Bug, ArrowRight, MapPin, Phone, Mail, Users, Calendar, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { FaBug } from "react-icons/fa"; // Font Awesome - Bug
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
    if (end.includes('%')) display = `${count.toFixed(1)}%`;
    else if (end.includes('+')) display = `${Math.floor(count)}+`;
    else if (textSuffix) display = `${count.toFixed(1)}${textSuffix}`;
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
          value: "99.9%", 
          label: "PEST ELIMINATION", 
        },
        { 
          value: "100%", 
          label: "SAFE TREATMENTS", 
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

const fumigationPestControlService: ServiceDetail = {
  title: "Fumigation & Pest Control",
  description: "Eliminate pests and protect your property with our professional fumigation and pest control services, using safe and effective treatment methods.",
  icon: <Bug className="h-8 w-8 md:h-10 md:w-10 text-add8e6" />,
  features: [
    "Comprehensive pest elimination",
    "Safe and eco-friendly treatments",
    "Residential and commercial services",
    "Rodent and insect control",
    "Preventive maintenance programs",
    "Certified pest control technicians",
    "Follow-up inspections",
    "Customized treatment plans"
  ],
  availability: "Available upon request, including emergency services",
  process: {
    title: "Our Process",
    steps: [
      {
        title: "Inspection",
        description: "We conduct a thorough inspection to identify pest types, infestation levels, and entry points."
      },
      {
        title: "Treatment Plan",
        description: "A customized treatment plan is developed based on the specific pest problem and property requirements."
      },
      {
        title: "Application",
        description: "Safe and effective treatments are applied using appropriate methods, targeting pests while ensuring safety for occupants."
      },
      {
        title: "Follow-up & Prevention",
        description: "Follow-up inspections and preventive measures are implemented to ensure long-term pest control."
      }
    ]
  },
  pricing: {
    title: "Service Pricing",
    packages: [
      {
        name: "Basic Pest Control",
        price: "From KES 150 per sq meter",
        features: [
          "Standard pest treatment",
          "Common pest elimination",
          "Single treatment session",
          "Suitable for minor infestations"
        ]
      },
      {
        name: "Comprehensive Fumigation",
        price: "Custom Quote",
        features: [
          "All Basic features",
          "Full property fumigation",
          "Multiple pest types",
          "Extended coverage"
        ]
      },
      {
        name: "Emergency Response",
        price: "Custom Quote",
        features: [
          "Rapid deployment",
          "Urgent pest elimination",
          "24/7 availability",
          "Detailed post-service report"
        ]
      }
    ]
  },
  serviceAreas: [
    "Mombasa",
    "Kisumu",
    "Lamu",
    "Lodwar",
    "Kaimosi",
    "Other areas upon consultation"
  ],
  whyChooseUs: {
    title: "Why Choose Our Fumigation & Pest Control",
    description: "We prioritize your safety and property protection with effective and reliable pest control services.",
    points: [
      "Safe and approved pest control products",
      "Advanced treatment technology",
      "Trained and certified pest control specialists",
      "Customized plans for different needs",
      "Safe for occupants and pets",
      "Prompt and reliable service",
      "Focus on prevention and long-term solutions",
      "Emergency response capability"
    ]
  },
  whatsIncluded: {
    title: "What's Included in the",
    description: "Our service provides comprehensive pest elimination and prevention for your property.",
    items: [
      "Thorough property inspection",
      "Identification of pest types and entry points",
      "Application of safe pest control treatments",
      "Treatment of common areas and entry points",
      "Rodent and insect elimination",
      "Preventive barrier treatments",
      "Follow-up inspection and monitoring",
      "Pest prevention recommendations"
    ]
  }
};

export default function FumigationPestControlPage() {
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
    src: "/sanitization/hero.webp",
    alt: "Professional fumigation and pest control services in Kenya",
  }

  const whyChooseUsImage = {
    src: "/sanitization/santization-01.jpeg",
    alt: "Professional fumigation and pest control team at work",
  }

  const whatsIncludedImages = [
    {
      src: "/sanitization/fumigation-01.jpeg",
      alt: "Professional fumigation and pest control services - treatment areas"
    },
    {
      src: "/sanitization/fumigation-02.webp",
      alt: "Fumigation and pest control - kitchen treatment"
    },
    {
      src: "/sanitization/fumigation-03.webp",
      alt: "Fumigation and pest control - bathroom treatment"
    }
  ];
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
                  <FaBug className="w-3.5 h-3.5" />
                  Fumigation & Pest Control
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-wide"
              >
                Professional{" "}
                <span className="text-fff relative inline-block">
                  Fumigation
                  <motion.span 
                    className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                      initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </span>{" "}
                & Pest Control
              </motion.h1>
                      
                      <motion.p 
                variants={itemVariants}
                className="text-sm md:text-base lg:text-base text-gray-200 tracking-wide mb-10 md:mb-12 max-w-2xl mx-auto"
                      >
                Eliminate pests and protect your property with our professional fumigation and pest control services. We use safe and effective treatment methods to eliminate 99.9% of pests, creating a pest-free environment for you and your family. Our certified technicians focus on comprehensive pest elimination and provide preventive solutions for long-term protection.
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

      {/* Why Choose Our Fumigation & Pest Control Services Section */}
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
                    <FaBug className="w-3.5 h-3.5" />
                  Why Choose Us
                  </span>
                </div>
              <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 leading-tight tracking-wide w-full">
                <span className="mb-1">Why Choose Our</span>
                <span className="text-add8e6 relative inline-block block mb-4 ml-2">
                  Fumigation & Pest Control
                  <motion.span 
                    className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                      initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    style={{ display: 'block' }}
                    />
                </span>{" "}
                <span>Services?</span>
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
                Pests can cause significant damage to your property and pose health risks to your family. The presence of rodents, insects, and other pests requires professional intervention to ensure complete elimination and prevention. <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> offers comprehensive fumigation and pest control solutions designed to protect your property and create safe, pest-free environments. We stand out as a trusted partner in maintaining pest-free spaces.
              </p>
              <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-5">
                Among professional fumigation and pest control services in Kenya, <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> is recognized for our commitment to excellence, safety, and customer satisfaction. We are pleased to offer top-notch fumigation and pest control services using safe and effective treatment methods. Our team is dedicated to providing thorough pest elimination and creating environments that are free from pests and health hazards for every client.
              </p>
              <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-5">
                Our comprehensive fumigation and pest control services are tailored to eliminate 99.9% of pests and create safe, pest-free environments. We pay close attention to entry points, focus on thorough treatment, and use safe pest control products that are effective yet safe for occupants and pets. With Simca, you can trust that every area will be treated by certified technicians who prioritize your safety and property protection above all else.
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

      {/* Benefits of Our Fumigation & Pest Control Services Section */}
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
                <span className="text-add8e6 relative inline-block">Fumigation & Pest Control
                  <motion.span 
                    className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                      initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    style={{ display: 'block' }}
                    />
                </span>{" "}
                Services
              </span>
            </h2>
            <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide">
              Experience the difference that professional fumigation and pest control can make in your daily life. From property protection to health safety, discover why businesses and homeowners choose our services.
            </p>
          </motion.div>
          <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-6 space-y-3 md:space-y-4">
            {[
              {
                title: "Time-saving Convenience:",
                icon: HiClock,
                content: (
                  <>
                    One of the most significant advantages of choosing <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> is the time-saving convenience it offers. Instead of spending your valuable time researching pest control methods or worrying about proper treatment protocols, you can leave the pest elimination to our trained professionals. Whether it's a one-time fumigation or regular maintenance, our skilled team will efficiently tackle the task, allowing you to focus on what matters most to you and your family.
                  </>
                )
              },
              {
                title: "Exceptional Quality Results:",
                icon: MdStars,
                content: (
                  <>
                    <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> prides itself on delivering exceptional quality fumigation and pest control services in Kenya that surpasses expectations. Equipped with safe and effective pest control products, advanced treatment technology, and proven techniques, our trained professionals ensure a thorough and effective pest elimination every time. From residential spaces to commercial properties, we guarantee a pest-free environment that promotes health and well-being.
                  </>
                )
              },
              {
                title: "Healthier Living Environment:",
                icon: FaLeaf,
                content: (
                  <>
                    A pest-free environment is crucial for maintaining good health, and <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> understands this well. By eliminating 99.9% of pests, rodents, and harmful insects, our fumigation and pest control solutions create healthier living spaces for you and your family. This is particularly beneficial for individuals with allergies, families with young children, and anyone aiming to provide a safe and hygienic environment.
                  </>
                )
              },
              {
                title: "Customized Pest Control Services:",
                icon: FaCog,
                content: (
                  <>
                    <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> offers flexible and customized fumigation and pest control solutions tailored to your specific needs. Whether you require comprehensive pest elimination, specialized services for specific pest types, or regular maintenance programs, we can accommodate your requirements. Our personalized approach ensures that every corner of your property receives the attention it deserves.
                  </>
                )
              },
              {
                title: "Consistency and Reliability:",
                icon: HiShieldCheck,
                content: (
                  <>
                    With <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span>, you can expect consistency and reliability in every pest control session. Our dedicated team follows strict treatment protocols and schedules, ensuring that your property remains consistently pest-free and well-maintained. Whether it's a residential home, office, or commercial facility, you can trust us to deliver impeccable results time and time again.
                  </>
                )
              },
              {
                title: "Professionalism and Expertise:",
                icon: FaAward,
                content: (
                  <>
                    <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> is staffed by certified pest control specialists who possess the expertise and skills needed to handle various pest challenges. Our attention to detail, professionalism, and commitment to customer satisfaction set us apart in the industry. Whether it's targeting specific pests, treating sensitive areas, or ensuring comprehensive coverage, our team is up to the task.
                  </>
                )
              },
              {
                title: "Cost-effective Solutions:",
                icon: FaTags,
                content: (
                  <>
                    While some may perceive professional fumigation and pest control services as a luxury, <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> offers cost-effective solutions that provide excellent value for money. When you consider the health benefits, property protection, and the peace of mind that comes with a properly treated environment, investing in our pest control services becomes a wise decision for your pest control needs in Kenya.
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

      {/* What's Included in Our Fumigation & Pest Control Services Section */}
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
                    <FaBug className="w-3.5 h-3.5" />
                    What's Included
                  </span>
      </div>
              <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 leading-tight tracking-wide w-full">
                <span className="mb-1">What's Included in Our</span>
                <span className="ml-2">
                  <span className="text-add8e6 relative inline-block block mb-4">
                    Fumigation & Pest Control
                    <motion.span 
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      style={{ display: 'block' }}
                    />
                  </span>{' '}
                  Services
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
                If you're looking for a reliable fumigation and pest control service in Kenya, Simca Agencies is your trusted choice. We offer comprehensive pest elimination services and always look for new ways to improve your property protection. Our team is flexible, thorough, and ready to accommodate your specific needs—including special requests for additional pest control services.
              </p>
              <ul className="list-disc pl-5 space-y-4 text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300">
                <li>
                  <span className="font-semibold text-gray-800 dark:text-white">Common areas and entry points</span> – Professional pest control treatment of all frequently accessed areas including doorways, windows, and ventilation points. We use safe and effective pest control products to ensure 99.9% pest elimination while maintaining safety for occupants and pets.
                </li>
                <li>
                  <span className="font-semibold text-gray-800 dark:text-white">Kitchen and food storage areas</span> – Thorough pest control treatment of all kitchen surfaces, storage areas, and food preparation spaces. Our certified technicians eliminate pests from countertops, cabinets, pantries, and other high-risk kitchen areas using safe pest control products suitable for food areas.
                </li>
                <li>
                  <span className="font-semibold text-gray-800 dark:text-white">Bathroom and moisture-prone areas</span> – Comprehensive pest control treatment of all bathroom surfaces and areas prone to moisture. We eliminate pests from toilets, sinks, shower areas, and other bathroom spaces to prevent pest infestations and health hazards.
                </li>
                <li>
                  <span className="font-semibold text-gray-800 dark:text-white">Living spaces and furniture</span> – Pest control treatment of living room areas, furniture, and other commonly used spaces. Our team focuses on areas where family members and guests frequently interact, ensuring a safe and pest-free environment.
                </li>
              </ul>
      </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Pricing Section */}
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
                  className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 leading-tight tracking-wide mt-0 !mt-0"
                >
                  <span className="text-add8e6 relative inline-block tracking-wider">
                    Fumigation & Pest Control
                  <motion.span 
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      style={{ display: 'block' }}
                    />
                  </span>{' '}
                  Service Plans
                </motion.h2>
                {/* New Introductory Paragraph */}
                <motion.p 
                  className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-6 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <strong>Note:</strong> The fumigation and pest control service prices below are approximate and may vary based on the size of your property, your specific requirements, your location, and the pest control package you choose. For unique spaces or special requests, please contact us for a custom quote. All prices are per session.
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
                        Small Area / Basic Pest Control
                      </h3>
                      </div>
                    <div className="text-xs md:text-sm text-add8e6 font-bold mb-3">
                      KES 150 – 300 per sq meter
                    </div>
                      <ul className="space-y-1.5 flex-grow mb-4">
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <FaBug className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Basic pest treatment</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <FaBug className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Common pest elimination</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <FaBug className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Up to 100 sq meters</span>
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
                        Medium Area / Standard Fumigation
                      </h3>
                    </div>
                    <div className="text-xs md:text-sm text-add8e6 font-bold mb-3">
                      KES 300 – 500 per sq meter
                    </div>
                    <ul className="space-y-1.5 flex-grow mb-4">
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <FaBug className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Comprehensive pest treatment</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <FaBug className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Multiple pest types</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <FaBug className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>100-300 sq meters</span>
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
                        Large Area / Comprehensive Treatment
                      </h3>
                </div>
                    <div className="text-xs md:text-sm text-add8e6 font-bold mb-3">
                      KES 500+ per sq meter
            </div>
                    <ul className="space-y-1.5 flex-grow mb-4">
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <FaBug className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Complete pest elimination</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <FaBug className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Advanced treatment technology</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <FaBug className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>300+ sq meters</span>
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
                        Specialized / Emergency Response
                      </h3>
                    </div>
                    <div className="text-xs md:text-sm text-add8e6 font-bold mb-3">
                      Custom Quote
                    </div>
                    <ul className="space-y-1.5 flex-grow mb-4">
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <FaBug className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Emergency pest elimination</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <FaBug className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Custom pest control protocols</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <FaBug className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>24/7 availability and rapid deployment</span>
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
                  When comparing fumigation and pest control service prices, consider factors such as pest elimination effectiveness, safety protocols, and the range of pest control services offered in addition to cost. Choosing a reputable pest control company ensures your property remains safe, pest-free, and protected from harmful pests. For a personalized quote or to discuss your specific pest control needs, please <Link href="/contact" className="text-add8e6 hover:underline">contact us</Link>.
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
              Have questions about our services? Get a free fumigation and pest control service quote today! We're here to help.
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
