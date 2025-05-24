"use client";

import { Sparkles, CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock, Shield, Users, Calendar, Star, Leaf } from "lucide-react";
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

const specializedService: ServiceDetail = {
  title: "Specialized Cleaning",
  description: "For cleaning needs that require extra care and expertise, our specialized cleaning services are tailored to handle unique challenges and delicate items.",
  icon: <Sparkles className="h-8 w-8 md:h-10 md:w-10 text-add8e6" />,
  features: [
    "Crime scene cleanup",
    "Hoarding cleanup",
    "Post-fire/flood restoration cleaning",
    "High-altitude window cleaning",
    "Mold remediation support",
    "Ventilation system cleaning",
    "Graffiti removal",
    "Discreet and sensitive service"
  ],
  availability: "Available upon consultation and scheduling",
  process: {
    title: "Our Specialized Cleaning Process",
    steps: [
      {
        title: "Consultation & Assessment",
        description: "We conduct a detailed assessment to understand the specific requirements and challenges of the specialized cleaning task."
      },
      {
        title: "Customized Plan Development",
        description: "A tailored cleaning plan is created, outlining the procedures, equipment, and safety protocols."
      },
      {
        title: "Expert Execution",
        description: "Our trained specialists carry out the cleaning with precision, using appropriate techniques and equipment."
      },
      {
        title: "Final Review",
        description: "A thorough review is conducted to ensure all requirements are met and the area is restored."
      }
    ]
  },
  pricing: {
    title: "Custom Pricing for Specialized Services",
    packages: [
      {
        name: "Assessment & Planning",
        price: "Custom Quote",
        features: [
          "Initial site visit",
          "Detailed assessment",
          "Custom plan creation",
          "Quotation"
        ]
      },
      {
        name: "Cleaning & Remediation",
        price: "Custom Quote",
        features: [
          "Execution of the cleaning plan",
          "Use of specialized equipment",
          "Safe disposal of waste",
          "Area restoration"
        ]
      },
      {
        name: "Full Project Management",
        price: "Custom Quote",
        features: [
          "End-to-end service",
          "Coordination with other services (if needed)",
          "Regular updates",
          "Final sign-off"
        ]
      }
    ]
  },
  serviceAreas: [
    "Nairobi Metropolitan Area",
    "Kisumu",
    "Nakuru",
    "Selected areas in Kenya upon consultation"
  ],
  whyChooseUs: {
    title: "Why Choose Us for Your Specialized Cleaning Needs",
    description: "We offer discreet, efficient, and expert cleaning services for situations that require sensitivity and specialized skills.",
    points: [
      "Highly trained specialized cleaning team",
      "Experience with sensitive cleaning scenarios",
      "Advanced equipment and safety protocols",
      "Customized solutions for unique needs",
      "Discreet and professional service",
      "Compliance with health and safety regulations",
      "Rapid response capability"
    ]
  },
  whatsIncluded: {
    title: "What Our Specialized Cleaning Includes",
    description: "Our services are tailored to the specific needs of each specialized cleaning project.",
    items: [
      "Site assessment and consultation",
      "Development of a detailed action plan",
      "Safe and effective cleaning procedures",
      "Use of appropriate PPE and equipment",
      "Removal and disposal of contaminated materials",
      "Disinfection and sanitization",
      "Area restoration (where possible)",
      "Post-service review"
    ]
  }
};

export default function SpecializedCleaningPage() {
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
                  {specializedService.icon}
                  Specialized
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight">
                {specializedService.title}
              </h1>
              <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                {specializedService.description}
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
                  {specializedService.whatsIncluded.title}
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {specializedService.whatsIncluded.description}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specializedService.whatsIncluded.items.map((item, index) => (
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
                  {specializedService.process.title}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {specializedService.process.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-add8e6/10 rounded-full flex items-center justify-center mb-4">
                        <span className="text-add8e6 font-bold">{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
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
      <div id="pricing" className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  {specializedService.pricing.title}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {specializedService.pricing.packages.map((pkg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-2xl font-bold text-add8e6 mb-6">
                      {pkg.price}
                    </p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-add8e6 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center justify-center w-full bg-add8e6 text-white px-6 py-3 rounded-full hover:bg-add8e6/90 transition-colors"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
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

      {/* Why Choose Us Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  {specializedService.whyChooseUs.title}
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {specializedService.whyChooseUs.description}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {specializedService.whyChooseUs.points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-add8e6 flex-shrink-0" />
                      <p className="text-gray-700 dark:text-gray-300">{point}</p>
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

      {/* Service Areas Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  Service Areas
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  We provide our specialized cleaning services in the following areas
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {specializedService.serviceAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-add8e6 flex-shrink-0" />
                      <p className="text-gray-700 dark:text-gray-300">{area}</p>
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
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Need Expert Cleaning for Unique Situations?
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8">
                Contact us today for a confidential consultation and customized solution.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-add8e6 text-white px-6 py-3 rounded-full hover:bg-add8e6/90 transition-colors">
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+254721979781" className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-add8e6 px-6 py-3 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <Phone className="w-4 h-4" />
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