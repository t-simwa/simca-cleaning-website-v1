"use client";

import { Building2, CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock, Sparkles, Shield, Users, Calendar, Star, Leaf } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

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

const commercialService: ServiceDetail = {
  title: "Commercial Cleaning",
  description: "Elevate your business environment with our comprehensive commercial cleaning solutions. Our certified team delivers consistent, high-quality cleaning services with minimal disruption to your operations.",
  icon: <Building2 className="h-8 w-8 md:h-10 md:w-10 text-add8e6" />,
  features: [
    "BOMA-certified cleaning standards",
    "After-hours cleaning with key-holding service",
    "Specialized equipment for large spaces",
    "Digital quality control system",
    "Customized cleaning schedules",
    "Emergency response service",
    "Green cleaning solutions",
    "Security protocol compliance"
  ],
  availability: "Available 24/7 with 2-hour emergency response",
  process: {
    title: "Our Cleaning Process",
    steps: [
      {
        title: "Facility Assessment",
        description: "We conduct a comprehensive evaluation of your facility to understand its unique cleaning requirements."
      },
      {
        title: "Customized Plan",
        description: "We develop a detailed cleaning plan tailored to your business operations and schedule."
      },
      {
        title: "Professional Execution",
        description: "Our trained team follows the plan with attention to detail and quality standards."
      },
      {
        title: "Quality Assurance",
        description: "We conduct regular inspections and maintain digital quality control records."
      }
    ]
  },
  pricing: {
    title: "Transparent Pricing",
    packages: [
      {
        name: "Basic Office Clean",
        price: "From KES 5,000",
        features: [
          "Daily cleaning service",
          "Common areas maintenance",
          "Bathroom sanitization",
          "Basic floor care",
          "Up to 1,000 sq ft"
        ]
      },
      {
        name: "Premium Office Clean",
        price: "From KES 10,000",
        features: [
          "All Basic Clean services",
          "Detailed cleaning of all areas",
          "Specialized surface cleaning",
          "Equipment maintenance",
          "Up to 3,000 sq ft"
        ]
      },
      {
        name: "Enterprise Clean",
        price: "Custom Quote",
        features: [
          "All Premium Clean services",
          "24/7 availability",
          "Emergency response",
          "Custom requirements",
          "Unlimited square footage"
        ]
      }
    ]
  },
  serviceAreas: [
    "Nairobi Central Business District",
    "Westlands",
    "Kilimani",
    "Industrial Area",
    "Karen",
    "Runda",
    "Gigiri",
    "Muthaiga"
  ],
  whyChooseUs: {
    title: "Why Choose Our Commercial Cleaning",
    description: "We're committed to delivering exceptional cleaning services that enhance your business environment while maintaining the highest standards of professionalism.",
    points: [
      "BOMA-certified cleaning standards",
      "Trained and certified cleaning professionals",
      "Eco-friendly cleaning products",
      "Customized cleaning schedules",
      "Quality assurance system",
      "Security protocol compliance",
      "Emergency response service",
      "Digital quality control"
    ]
  },
  whatsIncluded: {
    title: "What's Included in Our",
    description: "Our comprehensive commercial cleaning service covers every aspect of your facility with attention to detail.",
    items: [
      "Office space cleaning",
      "Common areas maintenance",
      "Bathroom sanitization",
      "Kitchen/breakroom cleaning",
      "Floor care and maintenance",
      "Window and glass cleaning",
      "Trash removal and recycling",
      "High-touch point disinfection",
      "Equipment cleaning",
      "Emergency cleaning services"
    ]
  }
};

export default function CommercialCleaningPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-16 md:py-24">
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
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-4 md:mb-6">
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-2">
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                  Commercial
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight">
                {commercialService.title}{" "}
                <span className="text-add8e6 relative">
                  Services
                  <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full" />
                </span>
              </h1>
              <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                {commercialService.description}
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-8">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center">
                  <div className="text-2xl md:text-3xl font-bold text-add8e6 mb-1 md:mb-2 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-add8e6" />
                    <span className="group-hover:scale-110 transition-transform duration-300">100%</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    BOMA Certified
                  </div>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center">
                  <div className="text-2xl md:text-3xl font-bold text-add8e6 mb-1 md:mb-2 flex items-center justify-center gap-2">
                    <Building2 className="w-4 h-4 text-add8e6" />
                    <span className="group-hover:scale-110 transition-transform duration-300">200+</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    Business Clients
                  </div>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center">
                  <div className="text-2xl md:text-3xl font-bold text-add8e6 mb-1 md:mb-2 flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4 text-add8e6" />
                    <span className="group-hover:scale-110 transition-transform duration-300">24/7</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    Service Availability
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link href="/contact" className="inline-flex items-center gap-2 bg-add8e6 hover:bg-add8e6/90 text-white px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* What's Included Section */}
      <div className="relative py-16 md:py-24">
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
                  <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm mt-0 !mt-0">
                    <CheckCircle2 className="w-4 h-4" />
                    What's Included
                  </span>
                </motion.div>
                <motion.h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight tracking-wide mt-0 !mt-0"
                >
                  {commercialService.whatsIncluded.title}{" "}
                  <motion.span 
                    className="text-add8e6 relative inline-block tracking-wider"
                    style={{
                      textShadow: "0 2px 4px rgba(173,216,230,0.3)",
                      WebkitTextStroke: "0.5px rgba(173,216,230,0.3)"
                    }}
                  >
                    Service
                    <motion.span 
                      className="absolute -bottom-2 left-0 w-full h-1 bg-add8e6/20 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                  </motion.span>
                </motion.h2>
                <motion.p 
                  className="text-base md:text-xl text-gray-600 dark:text-gray-300 tracking-wide mb-4 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {commercialService.whatsIncluded.description}
                </motion.p>
              </div>

              {/* Items Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {commercialService.whatsIncluded.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-add8e6/50 focus:ring-offset-2 overflow-hidden"
                  >
                    {/* Glassmorphism effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50 dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50" />
                    
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px]" />
                    </div>
                    
                    <div className="flex flex-col h-full relative z-10">
                      <motion.div 
                        className="p-2 md:p-3 bg-add8e6/10 rounded-lg md:rounded-xl group-hover:scale-110 transition-transform duration-500 mb-6"
                        whileHover={{ 
                          scale: 1.15,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-add8e6" />
                      </motion.div>
                      
                      <motion.p 
                        className="text-gray-700 dark:text-gray-300 text-base md:text-lg"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Key Features Section */}
      <div className="relative py-16 md:py-24">
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
                  <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm mt-0 !mt-0">
                    <Sparkles className="w-4 h-4" />
                    Key Features
                  </span>
                </motion.div>
                <motion.h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight tracking-wide mt-0 !mt-0"
                >
                  Key Features of Our{" "}
                  <motion.span 
                    className="text-add8e6 relative inline-block tracking-wider"
                    style={{
                      textShadow: "0 2px 4px rgba(173,216,230,0.3)",
                      WebkitTextStroke: "0.5px rgba(173,216,230,0.3)"
                    }}
                  >
                    Commercial Cleaning
                    <motion.span 
                      className="absolute -bottom-2 left-0 w-full h-1 bg-add8e6/20 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                  </motion.span>
                </motion.h2>
                <motion.p 
                  className="text-base md:text-xl text-gray-600 dark:text-gray-300 tracking-wide mb-4 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Discover what makes our commercial cleaning services stand out.
                </motion.p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {commercialService.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-add8e6/50 focus:ring-offset-2 overflow-hidden"
                  >
                    {/* Glassmorphism effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50 dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50" />
                    
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px]" />
                    </div>

                    <div className="flex flex-col h-full relative z-10">
                      <motion.div 
                        className="p-2 md:p-3 bg-add8e6/10 rounded-lg md:rounded-xl group-hover:scale-110 transition-transform duration-500 mb-6"
                        whileHover={{ 
                          scale: 1.15,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-add8e6" />
                      </motion.div>
                      
                      <motion.p 
                        className="text-gray-700 dark:text-gray-300 text-base md:text-lg"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {feature}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Our Process Section */}
      <div className="relative py-16 md:py-24">
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
                  <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm mt-0 !mt-0">
                    <Sparkles className="w-4 h-4" />
                    Our Process
                  </span>
                </motion.div>
                <motion.h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight tracking-wide mt-0 !mt-0"
                >
                  {commercialService.process.title}{" "}
                  <motion.span 
                    className="text-add8e6 relative inline-block tracking-wider"
                    style={{
                      textShadow: "0 2px 4px rgba(173,216,230,0.3)",
                      WebkitTextStroke: "0.5px rgba(173,216,230,0.3)"
                    }}
                  >
                    Steps
                    <motion.span 
                      className="absolute -bottom-2 left-0 w-full h-1 bg-add8e6/20 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                  </motion.span>
                </motion.h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {commercialService.process.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-add8e6/50 focus:ring-offset-2 overflow-hidden"
                  >
                    {/* Glassmorphism effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50 dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50" />
                    
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px]" />
                    </div>

                    <div className="flex flex-col items-center text-center relative z-10">
                      <motion.div 
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-add8e6/10 text-add8e6 font-bold mb-4 group-hover:scale-110 transition-transform duration-500"
                        whileHover={{
                          scale: 1.15,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        {index + 1}
                      </motion.div>
                      <motion.h3 
                        className="text-lg font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-add8e6 transition-colors"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {step.title}
                      </motion.h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Pricing Section */}
      <div id="pricing" className="relative py-16 md:py-24 scroll-mt-24">
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
                  <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm mt-0 !mt-0">
                    <Phone className="w-4 h-4" />
                    Pricing & Packages
                  </span>
                </motion.div>
                <motion.h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight tracking-wide mt-0 !mt-0"
                >
                  {commercialService.pricing.title}{" "}
                  <motion.span 
                    className="text-add8e6 relative inline-block tracking-wider"
                    style={{
                      textShadow: "0 2px 4px rgba(173,216,230,0.3)",
                      WebkitTextStroke: "0.5px rgba(173,216,230,0.3)"
                    }}
                  >
                    Plans
                    <motion.span 
                      className="absolute -bottom-2 left-0 w-full h-1 bg-add8e6/20 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                  </motion.span>
                </motion.h2>
                <motion.p 
                  className="text-base md:text-xl text-gray-600 dark:text-gray-300 tracking-wide mb-4 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Find the perfect cleaning package for your business. Contact us for a custom quote based on your specific needs.
                </motion.p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {commercialService.pricing.packages.map((pkg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-add8e6/50 focus:ring-offset-2 overflow-hidden flex flex-col"
                  >
                    {/* Glassmorphism effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50 dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50" />
                    
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px]" />
                    </div>

                    <div className="flex flex-col h-full relative z-10">
                      <motion.div 
                        className="p-2 md:p-3 bg-add8e6/10 rounded-lg md:rounded-xl group-hover:scale-110 transition-transform duration-500 mb-6"
                        whileHover={{ 
                          scale: 1.15,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">
                          {pkg.name}
                        </h3>
                      </motion.div>
                      
                      <div className="text-2xl font-bold text-add8e6 mb-4">
                        {pkg.price}
                      </div>
                      
                      <ul className="space-y-2 flex-grow mb-6">
                        {pkg.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className="flex items-center text-gray-700 dark:text-gray-300 text-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2 flex-shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                      
                      <Link
                        href="/contact"
                        className="mt-auto inline-flex items-center justify-center gap-2 bg-add8e6 text-white px-6 py-3 rounded-full font-semibold hover:bg-add8e6/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-center"
                      >
                        Get a Quote
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Why Choose Us Section */}
      <div className="relative py-16 md:py-24">
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
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Section Header */}
                <div className="mb-8 md:mb-12">
                  <motion.div 
                    className="inline-block mb-3 sm:mb-4 md:mb-6 mt-0 !mt-0"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm mt-0 !mt-0">
                      <Star className="w-4 h-4" />
                      Why Choose Us
                    </span>
                  </motion.div>
                  <motion.h2 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight tracking-wide mt-0 !mt-0"
                  >
                    {commercialService.whyChooseUs.title}{" "}
                    <motion.span 
                      className="text-add8e6 relative inline-block tracking-wider"
                      style={{
                        textShadow: "0 2px 4px rgba(173,216,230,0.3)",
                        WebkitTextStroke: "0.5px rgba(173,216,230,0.3)"
                      }}
                    >
                      Services
                      <motion.span 
                        className="absolute -bottom-2 left-0 w-full h-1 bg-add8e6/20 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      />
                    </motion.span>
                  </motion.h2>
                  <motion.p 
                    className="text-base md:text-lg text-gray-600 dark:text-gray-300 tracking-wide mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {commercialService.whyChooseUs.description}
                  </motion.p>
                </div>

                <ul className="space-y-3">
                  {commercialService.whyChooseUs.points.map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center text-gray-700 dark:text-gray-300 text-base md:text-lg"
                    >
                      <motion.div 
                        className="p-2 bg-add8e6/10 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-500"
                        whileHover={{ 
                          scale: 1.15,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-add8e6" />
                      </motion.div>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl group"
              >
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50 dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50" />
                
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px]" />
                </div>

                {/* Placeholder image - replace with actual commercial cleaning image */}
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:scale-105 transition-transform duration-500">
                  <Building2 className="w-24 h-24" />
                </div>
              </motion.div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Service Areas Section */}
      <div className="relative py-16 md:py-24">
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
                  <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm mt-0 !mt-0">
                    <MapPin className="w-4 h-4" />
                    Service Areas
                  </span>
                </motion.div>
                <motion.h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight tracking-wide mt-0 !mt-0"
                >
                  Our Service{" "}
                  <motion.span 
                    className="text-add8e6 relative inline-block tracking-wider"
                    style={{
                      textShadow: "0 2px 4px rgba(173,216,230,0.3)",
                      WebkitTextStroke: "0.5px rgba(173,216,230,0.3)"
                    }}
                  >
                    Coverage
                    <motion.span 
                      className="absolute -bottom-2 left-0 w-full h-1 bg-add8e6/20 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                  </motion.span>
                </motion.h2>
                <motion.p 
                  className="text-base md:text-xl text-gray-600 dark:text-gray-300 tracking-wide mb-4 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  We provide our commercial cleaning services in the following areas of Nairobi
                </motion.p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {commercialService.serviceAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-add8e6/50 focus:ring-offset-2 overflow-hidden"
                  >
                    {/* Glassmorphism effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50 dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50" />
                    
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px]" />
                    </div>

                    <div className="flex items-center gap-3 relative z-10">
                      <motion.div 
                        className="p-2 bg-add8e6/10 rounded-lg group-hover:scale-110 transition-transform duration-500"
                        whileHover={{ 
                          scale: 1.15,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        <MapPin className="w-5 h-5 text-add8e6" />
                      </motion.div>
                      <motion.p 
                        className="text-gray-700 dark:text-gray-300 text-base md:text-lg"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {area}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* CTA Section */}
      <div className="relative py-16 md:py-24">
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
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-4 md:mb-6">
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-2 shadow-sm">
                  <Phone className="w-3 h-3 md:w-4 md:h-4" />
                  Get Started
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight tracking-wide"
                style={{
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  WebkitTextStroke: "0.5px rgba(0,0,0,0.1)"
                }}
              >
                Ready to Experience Our{" "}
                <span className="text-add8e6 relative inline-block tracking-wider"
                  style={{
                    textShadow: "0 2px 4px rgba(173,216,230,0.3)",
                    WebkitTextStroke: "0.5px rgba(173,216,230,0.3)"
                  }}
                >
                  Premium Service?
                  <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full" />
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                Contact us today for a free consultation and customized quote for your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-add8e6 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-medium hover:bg-add8e6/90 transition-all duration-300 hover:shadow-lg hover:scale-105 transform group"
                >
                  Get a Free Quote
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <a
                  href="tel:+254721979781"
                  className="inline-flex items-center bg-white dark:bg-gray-800 text-add8e6 px-6 md:px-8 py-3 md:py-4 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105 transform group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
} 