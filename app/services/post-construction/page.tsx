"use client";

import { Wrench, CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock, Sparkles, Shield, Users, Calendar, Star, Leaf } from "lucide-react";
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

const postConstructionService: ServiceDetail = {
  title: "Post-construction Cleaning",
  description: "Remove the dust and debris and get your new or renovated space ready for occupancy with our specialized post-construction cleaning services.",
  icon: <Wrench className="h-8 w-8 md:h-10 md:w-10 text-add8e6" />,
  features: [
    "Detailed debris removal",
    "Fine dust elimination",
    "Surface polishing",
    "Window and glass cleaning",
    "Floor stripping and waxing",
    "High-reach dusting",
    "Eco-friendly cleaning options",
    "Final walk-through and touch-ups"
  ],
  availability: "Flexible scheduling, including weekends",
  process: {
    title: "Our Cleaning Process",
    steps: [
      {
        title: "Initial Site Assessment",
        description: "We evaluate the site to determine the scope of work and specific cleaning needs."
      },
      {
        title: "Rough Clean",
        description: "Removal of large debris, trash, and construction materials."
      },
      {
        title: "Light Clean",
        description: "Detailed cleaning including surfaces, fixtures, and interior glass."
      },
      {
        title: "Final Clean",
        description: "Fine dusting, vacuuming, floor care, and polishing for a move-in ready space."
      }
    ]
  },
  pricing: {
    title: "Customized Pricing",
    packages: [
      {
        name: "Residential Post-Build",
        price: "Custom Quote",
        features: [
          "Homes and small renovations",
          "Debris removal",
          "Interior dusting & cleaning",
          "Window cleaning (interior)",
          "Floor care"
        ]
      },
      {
        name: "Commercial Post-Build",
        price: "Custom Quote",
        features: [
          "Offices, retail, industrial spaces",
          "Large-scale debris removal",
          "High-reach dusting",
          "Floor stripping & waxing",
          "Exterior window cleaning"
        ]
      },
      {
        name: "Detailed Final Clean",
        price: "Custom Quote",
        features: [
          "Enhanced fine dusting",
          "Appliance interior cleaning",
          "Cabinetry cleaning (interior/exterior)",
          "Vent and fixture cleaning",
          "Final touch-ups"
        ]
      }
    ]
  },
  serviceAreas: [
    "Nairobi Metropolitan Area",
    "Kisumu",
    "Nakuru",
    "Mombasa",
    "Eldoret",
    "Thika"
  ],
  whyChooseUs: {
    title: "Why Choose Us for Post-Construction Cleaning",
    description: "We specialize in turning construction sites into pristine, ready-to-use spaces with efficiency and attention to detail.",
    points: [
      "Experienced post-construction cleaning crew",
      "Specialized equipment for tough jobs",
      "Flexible scheduling to meet project timelines",
      "Comprehensive cleaning checklist",
      "Eco-friendly disposal of debris",
      "Insured and bonded staff",
      "Final inspection and client walk-through"
    ]
  },
  whatsIncluded: {
    title: "What's Included in Our",
    description: "Our service covers all aspects to ensure your space is spotless after construction.",
    items: [
      "Removal of dust, dirt, and debris",
      "Cleaning of all surfaces (walls, ceilings, fixtures)",
      "Window and glass cleaning (interior and exterior)",
      "Floor cleaning, waxing, and polishing",
      "Restroom cleaning and sanitization",
      "Kitchen/breakroom cleaning",
      "Cleaning of cabinets and drawers (interior and exterior)",
      "Detail cleaning of trim, baseboards, and door frames",
      "High dusting of vents, light fixtures, and pipes",
      "Trash and debris haul away"
    ]
  }
};

export default function PostConstructionCleaningPage() {
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
                  Post-construction
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight">
                {postConstructionService.title}{" "}
                <span className="text-add8e6 relative">
                  Services
                  <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full" />
                </span>
              </h1>
              <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                {postConstructionService.description}
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-8">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center">
                  <div className="text-2xl md:text-3xl font-bold text-add8e6 mb-1 md:mb-2 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-add8e6" />
                    <span className="group-hover:scale-110 transition-transform duration-300">100%</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    Quality Guaranteed
                  </div>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center">
                  <div className="text-2xl md:text-3xl font-bold text-add8e6 mb-1 md:mb-2 flex items-center justify-center gap-2">
                    <Wrench className="w-4 h-4 text-add8e6" />
                    <span className="group-hover:scale-110 transition-transform duration-300">1000+</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    Projects Completed
                  </div>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-center">
                  <div className="text-2xl md:text-3xl font-bold text-add8e6 mb-1 md:mb-2 flex items-center justify-center gap-2">
                    <Star className="w-4 h-4 text-add8e6" />
                    <span className="group-hover:scale-110 transition-transform duration-300">4.9</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    Average Rating
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
                  {postConstructionService.whatsIncluded.title}{" "}
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
                  {postConstructionService.whatsIncluded.description}
                </motion.p>
              </div>

              {/* Items Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {postConstructionService.whatsIncluded.items.map((item, index) => (
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
                    Post-Construction Cleaning
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
                  Experience the difference with our comprehensive post-construction cleaning services
                </motion.p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {postConstructionService.features.map((feature, index) => (
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
                  {postConstructionService.process.title}{" "}
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
                {postConstructionService.process.steps.map((step, index) => (
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
                  {postConstructionService.pricing.title}{" "}
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
                  Find the perfect cleaning package for your construction project. Contact us for a custom quote based on your specific needs.
                </motion.p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {postConstructionService.pricing.packages.map((pkg, index) => (
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

                    <div className="relative z-10">
                      <motion.h3 
                        className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-add8e6 transition-colors"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {pkg.name}
                      </motion.h3>
                      <motion.p 
                        className="text-2xl font-bold text-add8e6 mb-6 group-hover:scale-110 transition-transform"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {pkg.price}
                      </motion.p>
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-add8e6 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center w-full bg-add8e6 text-white px-6 py-3 rounded-full hover:bg-add8e6/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
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
                    {postConstructionService.whyChooseUs.title}{" "}
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
                    {postConstructionService.whyChooseUs.description}
                  </motion.p>
                </div>

                <ul className="space-y-3">
                  {postConstructionService.whyChooseUs.points.map((point, index) => (
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

                {/* Placeholder image - replace with actual post-construction cleaning image */}
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:scale-105 transition-transform duration-500">
                  <Wrench className="w-24 h-24" />
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
                  We provide our post-construction cleaning services in the following areas of Kenya
                </motion.p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {postConstructionService.serviceAreas.map((area, index) => (
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
                        className="p-2 md:p-3 bg-add8e6/10 rounded-lg md:rounded-xl group-hover:scale-110 transition-transform duration-500"
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
              <motion.div 
                className="inline-block mb-3 sm:mb-4 md:mb-6 mt-0 !mt-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm mt-0 !mt-0">
                  <Phone className="w-4 h-4" />
                  Get Started
                </span>
              </motion.div>
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight tracking-wide mt-0 !mt-0"
              >
                Ready to Clear the Dust and{" "}
                <motion.span 
                  className="text-add8e6 relative inline-block tracking-wider"
                  style={{
                    textShadow: "0 2px 4px rgba(173,216,230,0.3)",
                    WebkitTextStroke: "0.5px rgba(173,216,230,0.3)"
                  }}
                >
                  Reveal Your Space?
                  <motion.span 
                    className="absolute -bottom-2 left-0 w-full h-1 bg-add8e6/20 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                </motion.span>
              </motion.h2>
              <motion.p 
                className="text-base md:text-xl text-gray-600 dark:text-gray-300 tracking-wide mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Contact us today for a free consultation and customized quote for your post-construction cleaning needs.
              </motion.p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 bg-add8e6 text-white px-6 py-3 rounded-full hover:bg-add8e6/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Get a Free Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a 
                    href="tel:+254721979781" 
                    className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-add8e6 px-6 py-3 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <Phone className="w-4 h-4" />
                    Call Us Now
                  </a>
                </motion.div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
} 