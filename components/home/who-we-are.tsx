'use client';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Award, Leaf, Clock, Info } from "lucide-react";
import { motion } from "framer-motion";

const trustBadges = [
  { icon: Clock, label: "19+ Years Experience" },
  { icon: Shield, label: "Fully Insured & Certified" },
  { icon: Leaf, label: "Eco-Friendly Solutions" },
  { icon: Award, label: "100% Kenyan-Owned" },
];

export default function WhoWeAre() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-900/20 dark:via-gray-900 dark:to-blue-800/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(173,216,230,0.1),transparent_70%)]" />
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Column */}
          <motion.div 
            className="w-full lg:w-1/2 max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-add8e6/10 text-add8e6 px-4 py-2 rounded-full text-sm font-medium">
                <Info className="w-4 h-4" />
                About Simca
              </span>
            </div>

            {/* Section Title */}
            <h2 className="font-heading text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
              Who We{" "}
              <span className="text-add8e6 relative inline-block">
                Are
                <motion.span
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-1 bg-add8e6/30 rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              </span>
            </h2>

            {/* Mobile image below heading */}
            <div className="w-full mb-8 lg:hidden">
              <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-md h-[20rem] mx-auto">
                <Image
                  src="/who-we-are/hero.jpeg"
                  alt="Simca Agencies cleaning team at work"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={75}
                />
              </div>
            </div>

            {/* Two paragraphs */}
            <p className="font-body text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Simca Agencies Ltd is a fully Kenyan-owned professional cleaning company, proudly serving the nation since 2005. What started as a commitment to quality has grown into one of Kenya's most trusted cleaning companies.
            </p>
            <p className="font-body text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              We provide expert cleaning services to hospitals, hotels, government offices, schools, banks, and industrial facilities. Our trained teams and modern equipment deliver spotless results you can count on.
            </p>

            {/* Trust Badges Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8 w-full max-w-md">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  className="flex items-center gap-3 bg-white dark:bg-gray-800 px-4 py-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-add8e6/10 rounded-lg flex items-center justify-center">
                    <badge.icon className="w-5 h-5 text-add8e6" />
                  </div>
                  <span className="font-body text-sm font-medium text-gray-700 dark:text-gray-200">
                    {badge.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
              <Link 
                href="/about"
              className="inline-flex items-center gap-2 bg-add8e6 hover:bg-add8e6/90 text-white px-6 py-3 font-semibold transition-all duration-300 group text-sm tracking-wide rounded-lg shadow-md hover:shadow-lg"
              >
                Learn More About Us
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
          </motion.div>

          {/* Desktop image column */}
          <motion.div 
            className="hidden lg:flex w-full lg:w-1/2 justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-lg h-[32rem]">
              <Image
                src="/who-we-are/hero.jpeg"
                alt="Simca Agencies Team"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                sizes="(max-width: 1200px) 50vw, 600px"
                quality={75}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
