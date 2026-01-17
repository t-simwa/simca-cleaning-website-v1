"use client";

import { Sofa, CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock, Sparkles, Shield, Users, Calendar, Star, Leaf, Award, Settings, Wallet, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
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
      className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto mb-8 md:mb-12"
    >
      {[
        { 
          value: "100%", 
          label: "SATISFACTION GUARANTEED", 
        },
        { 
          value: "300+", 
          label: "HAPPY CLIENTS", 
        },
        { 
          value: "4.8", 
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

// Placeholder data for Sofa Set Cleaning
const sofaSetService: ServiceDetail = {
  title: "Sofa Set Cleaning",
  description: "Restore the beauty and freshness of your sofa sets with our professional cleaning services. We use specialized techniques and eco-friendly solutions to remove dirt, stains, and odors.",
  icon: <Sofa className="h-8 w-8 md:h-10 md:w-10 text-add8e6" />,
  features: [
    "Fabric type identification and testing",
    "Deep cleaning to remove embedded dirt",
    "Effective stain and spot removal",
    "Odor elimination treatments",
    "Quick drying times",
    "Use of safe and eco-friendly products",
    "Protective treatments available",
    "Experienced and trained technicians"
  ],
  availability: "Available on weekdays and weekends",
  process: {
    title: "Our Sofa Set Cleaning Process",
    steps: [
      {
        title: "Inspection and Testing",
        description: "We assess the fabric type and condition to determine the best cleaning method."
      },
      {
        title: "Pre-treatment",
        description: "Stubborn stains and heavily soiled areas are pre-treated."
      },
      {
        title: "Deep Cleaning",
        description: "Using appropriate methods (e.g., hot water extraction), we deep clean the fabric."
      },
      {
        title: "Spot Treatment and Drying",
        description: "Remaining spots are treated, and the sofa is prepared for drying."
      }
    ]
  },
  pricing: {
    title: "Sofa Set Cleaning Pricing",
    packages: [
      {
        name: "Single Seater",
        price: "From KES 1,500",
        features: [
          "Cleaning of one single-seater sofa",
          "Standard fabric cleaning"
        ]
      },
      {
        name: "Two Seater",
        price: "From KES 2,500",
        features: [
          "Cleaning of one two-seater sofa",
          "Standard fabric cleaning"
        ]
      },
      {
        name: "Three Seater",
        price: "From KES 3,500",
        features: [
          "Cleaning of one three-seater sofa",
          "Standard fabric cleaning"
        ]
      },
      {
        name: "Sectional/L-Shaped",
        price: "Custom Quote",
        features: [
          "Cleaning of sectional or L-shaped sofas",
          "Includes all cushions",
          "Custom pricing based on size"
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
    title: "Why Choose Us for Sofa Set Cleaning",
    description: "We specialize in safe and effective sofa cleaning, extending the life of your furniture and improving air quality.",
    points: [
      "Expertise in various fabric types",
      "Use of gentle yet effective cleaning agents",
      "Quick drying process",
      "Removes allergens and odors",
      "Convenient on-site cleaning",
      "Satisfaction guaranteed",
      "Experienced and professional technicians",
      "Competitive and transparent pricing"
    ]
  },
  whatsIncluded: {
    title: "What Our Sofa Set Cleaning Includes",
    description: "Our service provides a thorough cleaning for your sofa sets, focusing on fabric care and hygiene.",
    items: [
      "Vacuuming to remove loose dirt",
      "Pre-treatment of stains and spots",
      "Deep cleaning using appropriate method",
      "Wiping down frame and legs",
      "Cushion cleaning on all sides",
      "Final inspection for quality",
      "Minor odor treatment",
      "Quick drying solutions"
    ]
  }
};

export default function SofaSetCleaningPage() {
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
    src: "/sofa-set/hero.webp",
    alt: "Professional sofa set cleaning services in Kenya",
  }

  const whatsIncludedImages = [
    {
      src: "/sofa-set/sofa-01.webp",
      alt: "Professional sofa set cleaning services - living room"
    },
    {
      src: "/sofa-set/sofa-02.webp",
      alt: "Sofa set cleaning - deep cleaning"
    },
    {
      src: "/sofa-set/sofa-03.webp",
      alt: "Sofa set cleaning - stain removal"
    },
    {
      src: "/sofa-set/sofa-04.webp",
      alt: "Sofa set cleaning - protective treatment"
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
                  <CheckCircle2 className="w-4 h-4" />
                  Sofa Set Services
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-wide"
              >
                Professional{" "}
                <span className="text-fff relative inline-block">
                  Sofa Set
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
                Restore the beauty and freshness of your sofa sets with our professional cleaning services. We use specialized techniques and eco-friendly solutions to remove dirt, stains, and odors, giving your furniture a new lease on life. Our experienced team ensures deep cleaning that extends the life of your furniture while improving your home's air quality.
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

      {/* Why Choose Our Sofa Set Cleaning Services Section */}
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
                  Sofa Set
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
                    src="/sofa-set/why-choose-us.webp"
                    alt="Professional sofa set cleaning services"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
              </div>
                    </div>
              <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-5">
                In the bustling city of Nairobi, maintaining clean and fresh furniture can be a challenge with busy schedules and limited time. <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> offers professional sofa set cleaning services designed to restore the beauty and freshness of your furniture. Our specialized techniques and eco-friendly solutions ensure your sofa sets look and feel like new, providing a comfortable and hygienic environment for your family and guests.
              </p>
              <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-5">
                Among professional furniture cleaning services in Nairobi, <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> is recognized for our expertise in fabric care and stain removal. We are pleased to offer top-notch sofa set cleaning services in Nairobi, Kenya, using advanced cleaning techniques and safe, eco-friendly products. Our trained technicians understand different fabric types and use the most appropriate methods to ensure optimal results while protecting your furniture.
              </p>
              <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-5">
                Our comprehensive sofa set cleaning services in Nairobi are tailored to extend the life of your furniture and improve your home's air quality. We pay close attention to every detail, offering deep cleaning for all types of upholstery, effective stain removal, and odor elimination treatments. With Simca, you can trust that your sofa sets will be cared for by experienced professionals who treat your furniture with the respect and care it deserves.
              </p>
                </div>
            {/* Desktop image column */}
            <div className="w-full md:w-1/2 flex justify-center md:pr-8 mb-8 md:mb-0 hidden md:flex">
              <div className="relative rounded-xl overflow-hidden shadow-lg w-full max-w-2xl h-[47rem] mx-auto">
                    <Image
                      src="/sofa-set/why-choose-us.webp"
                      alt="Professional sofa set cleaning services"
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

      {/* Benefits of Our Sofa Set Cleaning Services Section */}
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
                <span className="text-add8e6 relative inline-block">Sofa Set
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
              Experience the difference that professional sofa set cleaning can make in your home. From fabric restoration to health benefits, discover why homeowners choose our specialized furniture cleaning services.
            </p>
          </motion.div>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 space-y-10 text-gray-700 dark:text-gray-200 text-sm md:text-base lg:text-base font-normal">
            {[
              {
                title: "Time-saving Convenience:",
                icon: <Clock className="w-5 h-5 text-add8e6 flex-shrink-0" />,
                content: (
                  <>
                    One of the most significant advantages of choosing <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> for sofa set cleaning is the time-saving convenience it offers. Instead of spending hours scrubbing fabric or trying to remove stubborn stains, you can leave the specialized cleaning to our trained professionals. Whether it's a one-time deep clean or regular maintenance, our skilled team will efficiently restore your furniture, allowing you to focus on what matters most to you and your family.
                  </>
                )
              },
              {
                title: "Exceptional Quality Results:",
                icon: <Star className="w-5 h-5 text-add8e6 flex-shrink-0" />,
                content: (
                  <>
                    <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> prides itself on delivering exceptional quality sofa set cleaning services in Kenya that surpasses expectations. Equipped with the latest fabric cleaning tools, specialized techniques, and eco-friendly products, our trained professionals ensure a thorough and effective clean every time. From delicate fabrics to heavy-duty upholstery, we guarantee spotless results that restore the beauty and comfort of your furniture.
                  </>
                )
              },
              {
                title: "Healthier Living Environment:",
                icon: <Leaf className="w-5 h-5 text-add8e6 flex-shrink-0" />,
                content: (
                  <>
                    Clean furniture is crucial for maintaining good health, and <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> understands this well. By eliminating dust, allergens, and harmful bacteria from your sofa sets, our cleaning solutions create healthier living spaces for you and your family. This is particularly beneficial for individuals with allergies or respiratory conditions, as well as families aiming to provide a safe and hygienic environment for their children and pets.
                  </>
                )
              },
              {
                title: "Customized Cleaning Services:",
                icon: <Settings className="w-5 h-5 text-add8e6 flex-shrink-0" />,
                content: (
                  <>
                    <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> offers flexible and customized sofa set cleaning solutions tailored to your specific needs. Whether you require a comprehensive deep cleaning, specialized stain removal, fabric protection treatments, or regular maintenance cleaning, we can accommodate your requirements. Our personalized approach ensures that every type of fabric and furniture receives the specialized attention it deserves.
                  </>
                )
              },
              {
                title: "Consistency and Reliability:",
                icon: <Shield className="w-5 h-5 text-add8e6 flex-shrink-0" />,
                content: (
                  <>
                    With <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span>, you can expect consistency and reliability in every sofa cleaning session. Our dedicated team follows strict cleaning protocols and uses proven techniques, ensuring that your furniture remains consistently clean and well-maintained. Whether it's a single sofa, sectional, or multiple pieces, you can trust us to deliver impeccable results time and time again.
                  </>
                )
              },
              {
                title: "Professionalism and Expertise:",
                icon: <Award className="w-5 h-5 text-add8e6 flex-shrink-0" />,
                content: (
                  <>
                    <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> is staffed by trained professionals who possess the expertise and skills needed to handle various fabric types and cleaning challenges. Our attention to detail, professionalism, and commitment to customer satisfaction set us apart in the furniture cleaning industry. Whether it's tackling tough stains, sanitizing fabric surfaces, or restoring the luster of your upholstery, our team is up to the task.
                  </>
                )
              },
              {
                title: "Cost-effective Solutions:",
                icon: <Wallet className="w-5 h-5 text-add8e6 flex-shrink-0" />,
                content: (
                  <>
                    While some may perceive professional sofa set cleaning services as a luxury, <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> offers cost-effective solutions that provide excellent value for money. When you consider the time saved, the quality of service delivered, the extended life of your furniture, and the benefits of a clean environment, investing in our sofa cleaning services becomes a wise decision for your furniture care needs in Kenya.
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

      {/* What's Included in Our Sofa Set Cleaning Services Section */}
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
                    Sofa Set
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
                If you're looking for a reliable sofa set cleaning service in Nairobi, Simca Agencies is your trusted choice. We offer comprehensive furniture cleaning services and always look for new ways to improve your experience. Our team is flexible, thorough, and ready to accommodate your specific needs—including special requests for different fabric types and treatments.
              </p>
              <ul className="list-disc pl-5 space-y-4 text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300">
                <li>
                  <span className="font-semibold text-gray-800 dark:text-white">Fabric inspection and testing</span> – Professional assessment of fabric type and condition to determine the best cleaning method. We test cleaning solutions on a small area first to ensure compatibility and prevent damage to your furniture.
                </li>
                <li>
                  <span className="font-semibold text-gray-800 dark:text-white">Deep cleaning and stain removal</span> – Thorough cleaning of all fabric surfaces using specialized techniques and eco-friendly products. We target stubborn stains, embedded dirt, and odors to restore your sofa's original beauty and freshness.
                </li>
                <li>
                  <span className="font-semibold text-gray-800 dark:text-white">Cushion and upholstery care</span> – Comprehensive cleaning of all cushions, including sides and undersides. We clean the frame, legs, and all accessible areas to ensure your entire sofa set receives complete attention.
                </li>
                <li>
                  <span className="font-semibold text-gray-800 dark:text-white">Protective treatments and finishing</span> – Application of fabric protectors and finishing treatments to extend the life of your furniture. We ensure proper drying and provide care instructions to maintain your sofa's cleanliness.
                </li>
              </ul>
      </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Sofa Set Cleaning Plans Section */}
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
                    Sofa Set
                  <motion.span 
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      style={{ display: 'block' }}
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
                  <strong>Note:</strong> The sofa set cleaning service prices below are approximate and may vary based on the size of your furniture, fabric type, your specific requirements, your location in Nairobi, and the cleaning package you choose. For unique furniture or special requests, please contact us for a custom quote. All prices are per piece and apply to Nairobi.
                </motion.p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Main three cards */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0 }}
                    className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-add8e6/50 focus:ring-offset-2 overflow-hidden flex flex-col"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50 dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50" />
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px]" />
                    </div>
                    <div className="flex flex-col h-full relative z-10">
                    <div className="p-2 md:p-3 bg-add8e6/10 rounded-lg md:rounded-xl group-hover:scale-110 transition-transform duration-500 mb-4">
                      <h3 className="font-semibold text-sm md:text-base text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">
                        Single Seater Sofa
                      </h3>
                      </div>
                    <div className="text-xs md:text-sm text-add8e6 font-bold mb-2">
                      KES 1,500 – 2,500
                    </div>
                      <ul className="space-y-2 flex-grow mb-6">
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Deep cleaning of single seater
                      </li>
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Fabric inspection and testing
                      </li>
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Stain removal and odor treatment
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
                        Two Seater Sofa
                      </h3>
                    </div>
                    <div className="text-xs md:text-sm text-add8e6 font-bold mb-2">
                      KES 2,500 – 4,000
                    </div>
                    <ul className="space-y-2 flex-grow mb-6">
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Deep cleaning of two seater
                      </li>
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Fabric inspection and testing
                      </li>
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Stain removal and odor treatment
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
                        Three Seater Sofa
                      </h3>
                </div>
                    <div className="text-xs md:text-sm text-add8e6 font-bold mb-2">
                      KES 3,500 – 6,000
            </div>
                    <ul className="space-y-2 flex-grow mb-6">
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Deep cleaning of three seater
                      </li>
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Fabric inspection and testing
                      </li>
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Stain removal and odor treatment
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
                        Sectional / Custom Sofa Sets
                      </h3>
                    </div>
                    <div className="text-xs md:text-sm text-add8e6 font-bold mb-2">
                      Negotiable / Custom Quote
                    </div>
                    <ul className="space-y-2 flex-grow mb-6">
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        L-shaped, sectional, or custom furniture
                      </li>
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Custom cleaning plans for unique furniture
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
                  When comparing sofa set cleaning service prices in Nairobi, consider factors such as reputation, reliability, and the range of services offered in addition to cost. Choosing a reputable cleaning company ensures your furniture remains clean, fresh, and comfortable for your family and guests. For a personalized quote or to discuss your specific needs, please <Link href="/contact" className="text-add8e6 hover:underline">contact us</Link>.
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
              Have questions about our services? Get a free cleaning service quote today! We're here to help.
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