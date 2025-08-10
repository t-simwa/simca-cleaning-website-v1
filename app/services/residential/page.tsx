"use client";

import { Home, CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock, Sparkles, Shield, Users, Calendar, Star, Leaf, Award, Settings, Wallet, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
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

// Placeholder data for Residential Cleaning
// Replace with actual detailed content for Residential Cleaning
const residentialService: ServiceDetail = {
  title: "Residential Cleaning",
  description: "Transform your home into a pristine sanctuary with our professional residential cleaning services. We combine expertise, eco-friendly products, and attention to detail to deliver exceptional results that exceed your expectations.",
  icon: <Home className="h-8 w-8 md:h-10 md:w-10 text-add8e6" />,
  features: [
    "Customized cleaning plans tailored to your home",
    "Flexible scheduling with 7-day availability",
    "Eco-friendly, hypoallergenic cleaning products",
    "Detailed room-by-room cleaning checklist",
    "Post-cleaning quality inspection",
    "Trained and certified cleaning professionals",
    "Satisfaction guaranteed service",
    "Secure key handling and privacy protection"
  ],
  availability: "Available 7 days a week, including holidays",
  process: {
    title: "Our Cleaning Process",
    steps: [
      {
        title: "Initial Consultation",
        description: "We discuss your specific needs, preferences, and any special requirements for your home."
      },
      {
        title: "Customized Plan",
        description: "We create a detailed cleaning plan tailored to your home's unique characteristics."
      },
      {
        title: "Professional Execution",
        description: "Our trained team follows the plan with attention to detail and quality standards."
      },
      {
        title: "Quality Inspection",
        description: "We conduct a thorough inspection to ensure every area meets our high standards."
      }
    ]
  },
  pricing: {
    title: "Transparent Pricing",
    packages: [
      {
        name: "Basic Clean",
        price: "From KES 2,500",
        features: [
          "General dusting and wiping",
          "Floor cleaning",
          "Bathroom sanitization",
          "Kitchen cleaning",
          "Up to 2 bedrooms"
        ]
      },
      {
        name: "Deep Clean",
        price: "From KES 4,500",
        features: [
          "All Basic Clean services",
          "Detailed cleaning of all rooms",
          "Inside cabinets and drawers",
          "Appliance cleaning",
          "Up to 4 bedrooms"
        ]
      },
      {
        name: "Premium Clean",
        price: "Custom Quote",
        features: [
          "All Deep Clean services",
          "Specialized surface cleaning",
          "Upholstery cleaning",
          "Window cleaning",
          "Custom requirements"
        ]
      }
    ]
  },
  serviceAreas: [
    "Nairobi Central",
    "Westlands",
    "Kilimani",
    "Lavington",
    "Karen",
    "Runda",
    "Gigiri",
    "Muthaiga"
  ],
  whyChooseUs: {
    title: "Why Choose Our Residential Cleaning",
    description: "We're committed to delivering exceptional cleaning services that make your home shine while respecting your time and privacy.",
    points: [
      "Trained and certified cleaning professionals",
      "Eco-friendly, hypoallergenic cleaning products",
      "Customized cleaning plans for your home",
      "Quality assurance and satisfaction guarantee",
      "Flexible scheduling options",
      "Secure key handling and privacy protection",
      "Regular quality inspections",
      "Emergency cleaning services available"
    ]
  },
  whatsIncluded: {
    title: "What's Included in Our",
    description: "Our comprehensive cleaning service covers every corner of your home with attention to detail.",
    items: [
      "Detailed dusting of all surfaces",
      "Floor cleaning and vacuuming",
      "Bathroom sanitization",
      "Kitchen deep cleaning",
      "Bedroom organization",
      "Living area cleaning",
      "Window and mirror cleaning",
      "Baseboard and corner cleaning",
      "Appliance cleaning",
      "Trash removal and recycling"
    ]
  }
};

export default function ResidentialCleaningPage() {
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
    src: "/residential/hero.jpg",
    alt: "Professional residential cleaning services in Kenya",
  }

  const whyChooseUsImage = {
    src: "/residential/why-choose-us.jpeg",
    alt: "Professional residential cleaning services"
  };

  const whatsIncludedImages = [
    {
      src: "/residential/living-cleaning.jpg",
      alt: "Professional residential cleaning services - living room"
    },
    {
      src: "/residential/kitchen-cleaning.jpg",
      alt: "Residential cleaning - kitchen"
    },
    {
      src: "/residential/bedroom-cleaning.jpeg",
      alt: "Residential cleaning - bedroom"
    },
    {
      src: "/residential/bathroom-cleaning.jpeg",
      alt: "Residential cleaning - bathroom"
    }
  ];
  const [carouselIndex, setCarouselIndex] = useState(0);
  const nextImage = () => setCarouselIndex((prev) => (prev + 1) % whatsIncludedImages.length);
  const prevImage = () => setCarouselIndex((prev) => (prev - 1 + whatsIncludedImages.length) % whatsIncludedImages.length);

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % whatsIncludedImages.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [whatsIncludedImages.length]);

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
        <div className="absolute inset-0 bg-black/40" />

        <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-32 relative flex-grow flex flex-col justify-center">
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
                className="inline-block mb-6 sm:mb-4 md:mb-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Residential Services
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6 md:mb-10 leading-tight tracking-wide"
              >
                Professional{" "}
                <span className="text-fff relative inline-block">
                  Residential
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
                className="text-sm md:text-lg text-gray-200 tracking-wide mb-12 max-w-2xl mx-auto"
              >
                We care for your home like it's our own. Our friendly, reliable team uses eco-friendly products and proven techniques to give you a spotless, healthy space—every time. No contracts, no hidden fees, just honest service that fits your schedule and your budget. Whether you need a one-time deep clean or regular maintenance, we're here to make your home shine so you can focus on what matters most.
              </motion.p>

              {/* Quick stats with enhanced micro-interactions */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-16"
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
                    className="bg-gradient-to-r from-add8e6 to-add8e6/90 p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center"
                  >
                    <div className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2 flex items-center justify-center gap-2">
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
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 group text-center text-xs sm:text-sm"
                >
                  Get Your Free Quote
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
            </div>
        </div>
      </div>

      {/* Why Choose Our Residential Cleaning Services Section */}
      <section className="relative py-12 md:py-20">
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
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-6 md:mb-8 leading-tight tracking-wide w-full">
                <span className="mb-1">Why Choose Our</span>
                <span className="text-add8e6 relative inline-block block mb-4 ml-2">
                  Residential
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
                    src="/residential/why-choose-us.jpeg"
                    alt="Professional residential cleaning services"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
              </div>
                    </div>
              <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 tracking-wide mb-5">
                The pressures of job, family, and personal responsibilities can frequently leave little time for home duties in the fast-paced city of Nairobi. In such a vibrant and demanding environment, maintaining a spotless home can feel overwhelming. <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> offers a variety of expert house cleaning solutions designed to fit your busy lifestyle, ensuring your home remains a haven of comfort and relaxation. We stand out as a beacon of excellence and convenience in the midst of the urban bustle, giving you more time to focus on what matters most.
              </p>
              <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 tracking-wide mb-5">
                Among professional house cleaning services in Nairobi, <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> is recognized for our commitment to quality, reliability, and customer satisfaction. We are pleased to offer top-notch house cleaning services in Nairobi, Kenya, using eco-friendly products and proven techniques. Our team is dedicated to constantly providing a beautiful, healthy, and clean environment for every client, no matter the size or type of your home.
              </p>
              <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 tracking-wide mb-5">
                Our thorough house cleaning services in Nairobi are tailored to improve your home's level of comfort and hygiene. We pay close attention to every detail, offering deep cleaning for living rooms, kitchens, bedrooms, and bathrooms, as well as flexible scheduling to suit your needs. With Simca, you can trust that every corner of your home will be cared for by trained professionals who treat your space with respect and care.
              </p>
                </div>
            {/* Desktop image column */}
            <div className="w-full md:w-1/2 flex justify-center md:pr-8 mb-8 md:mb-0 hidden md:flex">
              <div className="relative rounded-xl overflow-hidden shadow-lg w-full max-w-2xl h-[47rem] mx-auto">
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

      {/* Benefits of Our Residential Cleaning Services Section */}
      <section className="relative py-12 md:py-20">
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
                <span className="text-add8e6 relative inline-block">Residential
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
            <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 tracking-wide">
              Experience the difference that professional residential cleaning can make in your daily life. From time savings to health benefits, discover why homeowners choose our services.
            </p>
          </motion.div>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 space-y-10 text-gray-700 dark:text-gray-200 text-xs sm:text-sm md:text-base font-normal">
            {[
              {
                title: "Time-saving Convenience:",
                icon: <Clock className="w-5 h-5 text-add8e6 flex-shrink-0" />,
                content: (
                  <>
                    One of the most significant advantages of choosing <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> is the time-saving convenience it offers. Instead of spending your valuable time scrubbing floors or dusting shelves, you can leave the cleaning to our trained professionals. Whether it's a one-time deep clean or regular maintenance, our skilled team will efficiently tackle the task, allowing you to focus on what matters most to you and your family.
                  </>
                )
              },
              {
                title: "Exceptional Quality Results:",
                icon: <Star className="w-5 h-5 text-add8e6 flex-shrink-0" />,
                content: (
                  <>
                    <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> prides itself on delivering exceptional quality residential cleaning services in Kenya that surpasses expectations. Equipped with the latest tools, techniques, and eco-friendly products, our trained professionals ensure a thorough and effective clean every time. From living spaces to bedrooms and commercial properties, we guarantee a spotless environment that promotes health and well-being.
                  </>
                )
              },
              {
                title: "Healthier Living Environment:",
                icon: <Leaf className="w-5 h-5 text-add8e6 flex-shrink-0" />,
                content: (
                  <>
                    A clean environment is crucial for maintaining good health, and <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> understands this well. By eliminating dust, allergens, and harmful bacteria, our residential cleaning solutions create healthier living spaces for you and your family. This is particularly beneficial for individuals with allergies or respiratory conditions, as well as families aiming to provide a safe and hygienic environment for their children and pets.
                  </>
                )
              },
              {
                title: "Customized Cleaning Services:",
                icon: <Settings className="w-5 h-5 text-add8e6 flex-shrink-0" />,
                content: (
                  <>
                    <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> offers flexible and customized residential cleaning solutions tailored to your specific needs. Whether you require a comprehensive spring cleaning, specialized services like carpet or upholstery cleaning, or regular maintenance cleaning, we can accommodate your requirements. Our personalized approach ensures that every corner of your space receives the attention it deserves.
                  </>
                )
              },
              {
                title: "Consistency and Reliability:",
                icon: <Shield className="w-5 h-5 text-add8e6 flex-shrink-0" />,
                content: (
                  <>
                    With <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span>, you can expect consistency and reliability in every cleaning session. Our dedicated team follows a strict cleaning regimen and schedule, ensuring that your space remains consistently clean and well-maintained. Whether it's a residential home, apartment, or villa, you can trust us to deliver impeccable results time and time again.
                  </>
                )
              },
              {
                title: "Professionalism and Expertise:",
                icon: <Award className="w-5 h-5 text-add8e6 flex-shrink-0" />,
                content: (
                  <>
                    <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> is staffed by trained professionals who possess the expertise and skills needed to handle various cleaning challenges. Our attention to detail, professionalism, and commitment to customer satisfaction set us apart in the industry. Whether it's tackling tough stains, sanitizing surfaces, or restoring the luster of your floors, our team is up to the task.
                  </>
                )
              },
              {
                title: "Cost-effective Solutions:",
                icon: <Wallet className="w-5 h-5 text-add8e6 flex-shrink-0" />,
                content: (
                  <>
                    While some may perceive professional residential cleaning services as a luxury, <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies</Link></span> offers cost-effective solutions that provide excellent value for money. When you consider the time saved, the quality of service delivered, and the benefits of a clean environment, investing in our cleaning services becomes a wise decision for your residential cleaning needs in Kenya.
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

      {/* What's Included in Our Service Section */}
      <section className="relative py-12 md:py-20">
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
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-6 md:mb-8 leading-tight tracking-wide w-full">
                <span className="mb-1">What's Included in Our</span>
                <span className="ml-2">
                  <span className="text-add8e6 relative inline-block block mb-4">
                    Residential
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
              <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 tracking-wide mb-5">
                If you're looking for a reliable residential cleaning service in Nairobi, Simca Agencies is your trusted choice. We offer a wide range of house cleaning services and always look for new ways to improve your experience. Our team is flexible, thorough, and ready to accommodate your specific needs—including special requests for additional services.
              </p>
              <ul className="list-disc pl-5 space-y-4 text-sm md:text-lg text-gray-600 dark:text-gray-300">
                <li>
                  <span className="font-semibold text-gray-800 dark:text-white">Living room and bedroom</span> – Professional dusting of all surfaces (including furniture, bed frames, bookcases, etc.), wiping mirrors, mopping, vacuuming carpets, and wiping picture frames. If needed, you can request changing linens, bed covers, and other additional services.
                </li>
                <li>
                  <span className="font-semibold text-gray-800 dark:text-white">Kitchen</span> – Wiping and polishing all surfaces and worktops, mopping and vacuuming floors, cleaning equipment and appliances, washing dishes, cleaning doors and handles. You can also request cleaning inside the fridge, oven, microwave, and arranging things inside kitchen cabinets.
                </li>
                <li>
                  <span className="font-semibold text-gray-800 dark:text-white">Bathroom</span> – Polishing and sanitizing the sink, tiles, toilet, toilet seat, bathtubs and/or shower cubicle. Our cleaners also sweep and mop the floors, polish accessible surfaces, and clean mirrors and glass.
                </li>
                <li>
                  <span className="font-semibold text-gray-800 dark:text-white">Hallway and stairs</span> – Cleaning and polishing furniture, vacuuming carpets and rugs, washing floors, removing fingerprints and marks from surfaces, wiping skirting boards, and cleaning the inside of the front door.
                </li>
              </ul>
      </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Our Cleaning Process Steps section removed */}

      {/* Pricing Section */}
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
                    Residential
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
                  className="text-sm md:text-lg text-gray-600 dark:text-gray-300 tracking-wide mb-6 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <strong>Note:</strong> The residential cleaning service prices below are approximate and may vary based on the size of your home, your specific requirements, your location in Nairobi, and the cleaning package you choose. For unique homes or special requests, please contact us for a custom quote. All prices are per session and apply to Nairobi.
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
                        Small Apartment / Bedsitter
                      </h3>
                      </div>
                    <div className="text-xs md:text-sm text-add8e6 font-bold mb-2">
                      KES 3,000 – 6,000
                    </div>
                      <ul className="space-y-2 flex-grow mb-6">
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        General cleaning of all rooms
                      </li>
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Kitchen, bathroom, and living area
                      </li>
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Up to 1 bedroom
                      </li>
                      </ul>
                      <Link
                        href="/contact"
                      className="mt-auto inline-flex items-center justify-center gap-2 bg-add8e6 text-white px-6 py-3 rounded-full font-semibold hover:bg-add8e6/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-center text-xs md:text-sm"
                      >
                        Get a Quote
                        <ArrowRight className="w-4 h-4" />
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
                        Medium Home / 2-3 Bedrooms
                      </h3>
                    </div>
                    <div className="text-xs md:text-sm text-add8e6 font-bold mb-2">
                      KES 6,500 – 12,000
                    </div>
                    <ul className="space-y-2 flex-grow mb-6">
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Full home cleaning (all rooms)
                      </li>
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Kitchen, bathrooms, living areas
                      </li>
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        2-3 bedrooms
                      </li>
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-auto inline-flex items-center justify-center gap-2 bg-add8e6 text-white px-6 py-3 rounded-full font-semibold hover:bg-add8e6/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-center text-xs md:text-sm"
                    >
                      Get a Quote
                      <ArrowRight className="w-4 h-4" />
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
                        Large House / 4+ Bedrooms
                      </h3>
                </div>
                    <div className="text-xs md:text-sm text-add8e6 font-bold mb-2">
                      KES 13,000 – 25,000
            </div>
                    <ul className="space-y-2 flex-grow mb-6">
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Full home deep cleaning
                      </li>
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Kitchen, bathrooms, living areas
                      </li>
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        4+ bedrooms
                      </li>
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-auto inline-flex items-center justify-center gap-2 bg-add8e6 text-white px-6 py-3 rounded-full font-semibold hover:bg-add8e6/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-center text-xs md:text-sm"
                    >
                      Get a Quote
                      <ArrowRight className="w-4 h-4" />
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
                        Specialized / Custom Cleaning
                      </h3>
                    </div>
                    <div className="text-xs md:text-sm text-add8e6 font-bold mb-2">
                      Negotiable / Custom Quote
                    </div>
                    <ul className="space-y-2 flex-grow mb-6">
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Post-construction, move-in/out, or special requests
                      </li>
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Custom cleaning plans for unique homes
                      </li>
                      <li className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2" />
                        Flexible scheduling and tailored services
                      </li>
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-auto inline-flex items-center justify-center gap-2 bg-add8e6 text-white px-6 py-3 rounded-full font-semibold hover:bg-add8e6/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-center text-xs md:text-sm"
                    >
                      Get a Quote
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    </div>
                  </motion.div>
              </div>

              {/* Explanatory Paragraph Below Cards */}
              <div className="max-w-3xl mx-auto mt-8 text-center">
                <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300">
                  When comparing residential cleaning service prices in Nairobi, consider factors such as reputation, reliability, and the range of services offered in addition to cost. Choosing a reputable cleaning company ensures your home remains clean, healthy, and comfortable for your family and guests. For a personalized quote or to discuss your specific needs, please <Link href="/contact" className="text-add8e6 hover:underline">contact us</Link>.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Contact Section (with residential page background) */}
      <section className="relative py-12 md:py-20">
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
            <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300">
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