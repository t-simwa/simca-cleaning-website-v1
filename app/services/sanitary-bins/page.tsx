"use client";

import { Package, CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock, Sparkles, Shield, Users, Calendar, Star, Leaf } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";

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

// Placeholder data for Sanitary Bins Services
const sanitaryBinsService: ServiceDetail = {
  title: "Sanitary Bins Services",
  description: "Ensure a hygienic and discreet disposal of sanitary waste with our professional sanitary bins services. We provide scheduled collection and disposal.",
  icon: <Package className="h-8 w-8 md:h-10 md:w-10 text-add8e6" />,
  features: [
    "Discreet sanitary bin units",
    "Scheduled collection and disposal",
    "Compliance with health regulations",
    "Reduces odors and promotes hygiene",
    "Suitable for various commercial settings",
    "Flexible service frequencies",
    "Environmentally responsible disposal",
    "Experienced service personnel"
  ],
  availability: "Weekly, bi-weekly, or monthly schedules",
  process: {
    title: "Our Sanitary Bin Service Process",
    steps: [
      {
        title: "Consultation and Setup",
        description: "We assess your needs and install appropriate sanitary bin units in designated areas."
      },
      {
        title: "Scheduled Collection",
        description: "Our team visits on schedule to collect full bins and replace them with clean, sanitized units."
      },
      {
        title: "Safe Disposal",
        description: "Collected waste is transported and disposed of safely and in compliance with regulations."
      },
      {
        title: "Service Monitoring",
        description: "We monitor the service and adjust schedules as needed to ensure optimal hygiene."
      }
    ]
  },
  pricing: {
    title: "Sanitary Bins Pricing",
    packages: [
      {
        name: "Single Unit Service",
        price: "From KES 1,000/month",
        features: [
          "Service for one sanitary bin unit",
          "Weekly collection"
        ]
      },
      {
        name: "Multiple Units Service",
        price: "Custom Quote",
        features: [
          "Service for multiple sanitary bin units",
          "Flexible collection frequency",
          "Volume-based pricing"
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
    title: "Why Choose Us for Sanitary Bins",
    description: "We provide a reliable and discreet sanitary waste disposal service essential for maintaining hygiene standards.",
    points: [
      "Discreet and hygienic solutions",
      "Reliable scheduled collections",
      "Compliance with health and safety regulations",
      "Reduces odors effectively",
      "Flexible service tailored to your needs",
      "Environmentally responsible disposal",
      "Experienced and professional staff",
      "Competitive pricing"
    ]
  },
  whatsIncluded: {
    title: "What Our Sanitary Bins Service Includes",
    description: "Our service covers the provision, maintenance, and discreet disposal of sanitary waste bins.",
    items: [
      "Provision of sanitary bin units",
      "Scheduled emptying and cleaning of bins",
      "Replacement with clean units",
      "Safe transportation of waste",
      "Environmentally sound disposal",
      "Service log and compliance documentation"
    ]
  }
};

export default function SanitaryBinsPage() {
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
    alt: "Professional sanitary bins services in Kenya",
  }

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
        <div className="absolute inset-0 bg-black/60" />

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
                  Sanitary Bins Services
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6 md:mb-10 leading-tight tracking-wide"
              >
                Professional{" "}
                <span className="text-fff relative inline-block">
                  Sanitary Bins
                  <motion.span
                    className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </span>{" "}
                Services
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-sm md:text-lg text-gray-200 tracking-wide mb-12 max-w-2xl mx-auto"
              >
                Ensure a hygienic and discreet disposal of sanitary waste with our professional sanitary bins services. We provide scheduled collection and disposal that maintains the highest standards of cleanliness and compliance with health regulations.
              </motion.p>

              {/* Quick stats with enhanced micro-interactions */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-16"
              >
                {[
                  { 
                    value: "100%", 
                    label: "Hygiene Compliant", 
                    icon: <Shield className="w-4 h-4 text-white" />,
                  },
                  { 
                    value: "300+", 
                    label: "Businesses Served", 
                    icon: <Users className="w-4 h-4 text-white" />,
                  },
                  { 
                    value: "4.8", 
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


      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Call to Action Section */}
      <div className="relative bg-add8e6 dark:bg-add8e6/80 py-16 md:py-24">
        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ensure Hygiene with Professional Sanitary Bins Service
              </h2>
              <p className="text-lg md:text-xl mb-8">
                Contact us today for a free consultation and quote for our sanitary bins services.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-add8e6 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Mail className="w-5 h-5" />
                Get a Free Quote
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
} 