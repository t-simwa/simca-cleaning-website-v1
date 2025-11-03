'use client';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
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
                About Simca
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4 leading-tight tracking-wide w-full">
              <span className="mb-1">Who Are</span>
              <span className="text-add8e6 relative inline-block block mb-4 ml-2">
                We?
                <motion.span
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  style={{ display: 'block' }}
                />
              </span>
            </h2>
            {/* Mobile image below heading, above paragraphs */}
            <div className="w-full mb-6 md:hidden">
              <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-2xl h-[20rem] xs:h-[24rem] sm:h-[28rem] mx-auto">
                <Image
                  src="/commercial/why-choose-us.webp"
                  alt="Simca Agencies cleaning team at work"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 840px"
                  quality={75}
                />
              </div>
            </div>
            <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 tracking-wide mb-5">
              Simca Agencies is a <span className="font-semibold text-gray-800 dark:text-white">registered and professional cleaning services company in Kenya</span>. We deliver customized cleaning solutions for homes, offices, and businesses, always prioritizing quality, reliability, and client satisfaction at affordable costs.
            </p>
            <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 tracking-wide mb-5">
              With over a decade of experience in the cleaning industry, we ensure you always get the best results for all your cleaning needs. We put every effort into giving our clients the best value for money. Our team is made up of skilled and well-trained employees who handle every job with professionalism and care. We strive to use the latest cleaning machine technology for outstanding results every time.
            </p>
            <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 tracking-wide mb-5">
              As a result, we have made a tremendous impact in the lives of people in Nairobi and its environs. That is why we are considered one of the most trusted and best cleaning services companies in Kenya.
            </p>
            <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 tracking-wide mb-5">
              We continue to set standards by offering outstanding cleaning services and are fully committed to delivering quality, affordable, efficient, and reliable cleaning solutions to our ever-growing base of clients. Our mission is to set the benchmark for cleaning excellence in Kenya—helping homes and businesses thrive with a spotless environment.
            </p>
            <div className="mt-6 hidden">
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 group text-xs sm:text-sm"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          {/* Desktop image column */}
          <div className="w-full md:w-1/2 flex justify-center md:pr-8 mb-8 md:mb-0 hidden md:flex">
            <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-2xl h-[47rem] mx-auto">
              <Image
                src="/commercial/why-choose-us.webp"
                alt="Simca Agencies Team"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                sizes="(max-width: 1200px) 50vw, 840px"
                quality={75}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
