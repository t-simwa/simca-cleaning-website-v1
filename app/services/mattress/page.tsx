"use client";

import { Bed, CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock, Sparkles, Shield, Users, Calendar, Star, Leaf } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

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
                  {mattressService.icon}
                  Mattress Cleaning
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight">
                {mattressService.title}
              </h1>
              <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                {mattressService.description}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-add8e6 text-white px-6 py-3 rounded-full hover:bg-add8e6/90 transition-colors">
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#pricing" className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-add8e6 px-6 py-3 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  View Pricing
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* What's Included Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  {mattressService.whatsIncluded.title}
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {mattressService.whatsIncluded.description}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mattressService.whatsIncluded.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-add8e6 flex-shrink-0" />
                      <p className="text-gray-700 dark:text-gray-300">{item}</p>
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
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  {mattressService.process.title}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {mattressService.process.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-add8e6/10 text-add8e6 font-bold mb-4">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        {step.title}
                      </h3>
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

      {/* Key Features Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  Key Features of Our Mattress Cleaning
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Discover what makes our mattress cleaning services stand out.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mattressService.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-add8e6 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">{feature}</p>
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
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  {mattressService.whyChooseUs.title}
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {mattressService.whyChooseUs.description}
                </p>
                <ul className="space-y-3">
                  {mattressService.whyChooseUs.points.map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-add8e6 mr-3 flex-shrink-0" />
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl"
              >
                {/* Placeholder image - replace with actual mattress image */}
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <Bed className="w-24 h-24" />
                </div>
              </motion.div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Pricing Section */}
      <div id="pricing" className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-16 md:py-24 scroll-mt-24">
        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  {mattressService.pricing.title}
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Find the perfect cleaning package for your mattress. Contact us for a custom quote based on the size and type of mattress.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {mattressService.pricing.packages.map((pkg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                      {pkg.name}
                    </h3>
                    <div className="text-2xl font-bold text-add8e6 mb-4">
                      {pkg.price}
                    </div>
                    <ul className="space-y-2 flex-grow mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-add8e6 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-auto inline-flex items-center justify-center gap-2 bg-add8e6 text-white px-6 py-3 rounded-full hover:bg-add8e6/90 transition-colors text-center"
                    >
                      Get a Quote
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Section Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Service Areas Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Service Areas
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                We proudly offer mattress cleaning services in the following areas.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {mattressService.serviceAreas.map((area, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="inline-flex items-center gap-2 bg-add8e6/10 text-add8e6 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    <MapPin className="w-4 h-4" />
                    {area}
                  </motion.span>
                ))}
              </div>
            </div>
          </ScrollAnimation>
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
                Ready for a Clean and Healthy Mattress?
              </h2>
              <p className="text-lg md:text-xl mb-8">
                Contact us today for a free quote and professional mattress cleaning.
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