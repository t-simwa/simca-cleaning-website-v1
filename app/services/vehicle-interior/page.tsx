"use client";

import { Car, CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock, Sparkles, Shield, Users, Calendar, Star, Leaf } from "lucide-react";
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

// Placeholder data for Vehicle Interior Cleaning Services
const vehicleInteriorService: ServiceDetail = {
  title: "Vehicle Interior Cleaning",
  description: "Refresh and sanitize your vehicle's interior with our professional cleaning services. We remove dirt, stains, and odors for a clean and pleasant ride.",
  icon: <Car className="h-8 w-8 md:h-10 md:w-10 text-add8e6" />,
  features: [
    "Thorough vacuuming of interior",
    "Cleaning of upholstery and carpets",
    "Dashboard and console cleaning",
    "Window cleaning (interior)",
    "Odor removal and air freshening",
    "Leather cleaning and conditioning (optional)",
    "Stain and spot treatment",
    "Uses safe cleaning products"
  ],
  availability: "Available by appointment",
  process: {
    title: "Our Vehicle Interior Cleaning Process",
    steps: [
      {
        title: "Initial Assessment",
        description: "We inspect the vehicle interior to assess its condition and identify areas needing special attention."
      },
      {
        title: "Vacuuming and Debris Removal",
        description: "Thorough vacuuming and removal of all trash and debris."
      },
      {
        title: "Surface Cleaning",
        description: "Cleaning of all interior surfaces including dashboard, console, door panels."
      },
      {
        title: "Upholstery/Carpet Cleaning",
        description: "Cleaning of seats, carpets, and floor mats using appropriate methods."
      },
      {
        title: "Window and Final Touches",
        description: "Interior windows are cleaned, followed by final detailing and odor treatment."
      }
    ]
  },
  pricing: {
    title: "Vehicle Interior Cleaning Pricing",
    packages: [
      {
        name: "Standard Clean",
        price: "From KES 2,500",
        features: [
          "Vacuuming",
          "Surface wiping",
          "Window cleaning",
          "Basic odor refresh"
        ]
      },
      {
        name: "Deep Clean",
        price: "From KES 4,000",
        features: [
          "Standard Clean features",
          "Upholstery/carpet deep clean",
          "Stain treatment",
          "Enhanced odor removal"
        ]
      },
      {
        name: "Premium Clean",
        price: "Custom Quote",
        features: [
          "Deep Clean features",
          "Leather cleaning and conditioning",
          "Detailed crack and crevice cleaning",
          "Complete interior sanitization"
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
    title: "Why Choose Us for Vehicle Interior Cleaning",
    description: "We provide a meticulous cleaning service for your vehicle's interior, ensuring a fresh and hygienic space.",
    points: [
      "Thorough cleaning of all interior surfaces",
      "Effective stain and odor removal",
      "Removes allergens and dust",
      "Uses safe and suitable cleaning products",
      "Enhances driving experience",
      "Experienced and detail-oriented technicians",
      "Convenient service options",
      "Competitive pricing"
    ]
  },
  whatsIncluded: {
    title: "What Our Vehicle Interior Cleaning Includes",
    description: "Our vehicle interior cleaning service covers key areas to leave your car's inside looking and feeling clean.",
    items: [
      "Vacuuming of floors, mats, and seats",
      "Wiping and cleaning of dashboard and console",
      "Cleaning of door panels and pockets",
      "Interior window cleaning",
      "Trash removal",
      "Basic surface stain treatment",
      "Light odor refresh"
    ]
  }
};

export default function VehicleInteriorCleaningPage() {
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
                  {vehicleInteriorService.icon}
                  Vehicle Interior Cleaning
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight">
                {vehicleInteriorService.title}
              </h1>
              <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                {vehicleInteriorService.description}
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
                  {vehicleInteriorService.whatsIncluded.title}
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {vehicleInteriorService.whatsIncluded.description}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vehicleInteriorService.whatsIncluded.items.map((item, index) => (
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
                  {vehicleInteriorService.process.title}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {vehicleInteriorService.process.steps.map((step, index) => (
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
                  Key Features of Our Vehicle Interior Cleaning
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Discover what makes our vehicle interior cleaning services stand out.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {vehicleInteriorService.features.map((feature, index) => (
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
                  {vehicleInteriorService.whyChooseUs.title}
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {vehicleInteriorService.whyChooseUs.description}
                </p>
                <ul className="space-y-3">
                  {vehicleInteriorService.whyChooseUs.points.map((point, index) => (
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
                {/* Placeholder image - replace with actual vehicle interior image */}
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <Car className="w-24 h-24" />
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
                  {vehicleInteriorService.pricing.title}
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Find the perfect cleaning package for your vehicle interior. Contact us for a custom quote based on the size and condition of your vehicle.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {vehicleInteriorService.pricing.packages.map((pkg, index) => (
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
                We proudly offer vehicle interior cleaning services in the following areas.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {vehicleInteriorService.serviceAreas.map((area, index) => (
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
                Ready for a Clean and Fresh Vehicle Interior?
              </h2>
              <p className="text-lg md:text-xl mb-8">
                Contact us today for a free quote and professional vehicle interior cleaning.
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