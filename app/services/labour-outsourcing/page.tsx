"use client";

import { Users, ArrowRight, Phone, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { MdPeople } from "react-icons/md";
import { HiClock } from "react-icons/hi2";
import { MdStars } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { HiShieldCheck } from "react-icons/hi2";
import { FaAward } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { MdAutoAwesome } from "react-icons/md";
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
    if (typeof end === 'string' && !end.match(/^\d+/)) {
      return;
    }
    let numericEnd: number;
    if (typeof end === 'number') {
      numericEnd = end;
    } else {
      const match = end.match(/^(\d+)(.*)$/);
      if (match) {
        numericEnd = parseInt(match[1]);
      } else {
        numericEnd = parseInt(end);
      }
    }
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
  }, [end, duration, inView]);
  
  if (typeof end === 'string' && !end.match(/^\d+/)) {
    return <span>{end}{suffix}</span>;
  }
  
  let display: string | number = count;
  let textSuffix = '';
  if (typeof end === 'string') {
    const match = end.match(/^(\d+)(.*)$/);
    if (match) {
      textSuffix = match[2];
    }
    if (end.includes('%')) display = `${count}%`;
    else if (end.includes('+')) display = `${count}+`;
    else if (textSuffix) display = `${count}${textSuffix}`;
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
      className="grid grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto mb-8 md:mb-12"
    >
      {[
        { 
          value: "19+", 
          label: "YEARS OF EXPERIENCE", 
        },
        { 
          value: "100%", 
          label: "KENYAN STAFF", 
        },
        { 
          value: "100%", 
          label: "FULLY INSURED", 
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

interface ServiceDetail {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  availability: string;
  pricing: {
    title: string;
    packages: { name: string; price: string; features: string[] }[];
  };
  serviceAreas: string[];
  whyChooseUs: { title: string; description: string; points: string[] };
  whatsIncluded: { title: string; description: string; items: string[] };
}

const labourOutsourcingService: ServiceDetail = {
  title: "Labour Outsourcing",
  description: "Professional staffing solutions for your cleaning needs. We provide trained cleaning staff, skilled machine operators, and recruitment services for permanent and temporary positions.",
  icon: <Users className="h-8 w-8 md:h-10 md:w-10 text-add8e6" />,
  features: [
    "Trained cleaning staff",
    "Skilled machine operators",
    "Permanent recruitment",
    "Temporary staffing",
    "All staff are Kenyan citizens",
    "Comprehensive insurance coverage",
    "Customer care trained",
    "Regular training programs"
  ],
  availability: "Flexible staffing arrangements",
  pricing: {
    title: "Staffing Packages",
    packages: [
      {
        name: "Cleaning Staff",
        price: "Custom Quote",
        features: [
          "Trained cleaning personnel",
          "Daily or periodic staffing",
          "Supervised and managed"
        ]
      },
      {
        name: "Machine Operators",
        price: "Custom Quote",
        features: [
          "Skilled equipment operators",
          "Scrubber, polisher, burnisher",
          "Vacuum and floor boy operators"
        ]
      },
      {
        name: "Permanent Recruitment",
        price: "Custom Quote",
        features: [
          "Full recruitment process",
          "Vetted and trained candidates",
          "Ongoing support available"
        ]
      },
      {
        name: "Custom Staffing",
        price: "Negotiable",
        features: [
          "Tailored to your needs",
          "Flexible arrangements",
          "Volume options available"
        ]
      }
    ]
  },
  serviceAreas: [
    "Mombasa",
    "Other areas upon consultation"
  ],
  whyChooseUs: {
    title: "Why Choose Our Labour Outsourcing",
    description: "We provide reliable, trained, and insured staff for all your cleaning and facility management needs.",
    points: [
      "All staff are Kenyan citizens",
      "Comprehensive training programs",
      "Customer care and communication skills",
      "Full insurance coverage",
      "OHS compliant operations",
      "Regular supervision and quality checks",
      "Flexible staffing arrangements"
    ]
  },
  whatsIncluded: {
    title: "What's Included in Our",
    description: "Our labour outsourcing service provides complete staffing solutions for your facility.",
    items: [
      "Trained cleaning staff",
      "Machine operators",
      "Supervisors",
      "Recruitment services",
      "Training programs",
      "Insurance coverage",
      "Ongoing management",
      "Quality assurance"
    ]
  }
};

export default function LabourOutsourcingPage() {
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
    src: "/home-hero/hero-main.jpg",
    alt: "Professional labour outsourcing services in Kenya",
  }

  const whyChooseUsImage = {
    src: "/gallery/team-photos/team-01.jpeg",
    alt: "Professional cleaning team",
  }

  const whatsIncludedImages = [
    { src: "/gallery/team-photos/team-01.jpeg", alt: "Cleaning team" },
    { src: "/gallery/team-photos/team-02.jpeg", alt: "Machine operators" },
    { src: "/gallery/team-photos/team-03.jpeg", alt: "Supervisors" },
    { src: "/gallery/team-photos/team-04.jpeg", alt: "Training session" },
  ];

  const [carouselIndex, setCarouselIndex] = useState(0);

  const prevImage = () => {
    setCarouselIndex((carouselIndex - 1 + whatsIncludedImages.length) % whatsIncludedImages.length);
  };

  const nextImage = () => {
    setCarouselIndex((carouselIndex + 1) % whatsIncludedImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % whatsIncludedImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [whatsIncludedImages.length]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-black/55" />

        <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 relative flex-grow flex flex-col justify-center">
          <div className="flex flex-col items-center">
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
                  <MdPeople className="w-3.5 h-3.5" />
                  Labour Outsourcing
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-wide"
              >
                Professional{" "}
                <span className="text-fff relative inline-block">
                  Labour
                  <motion.span 
                    className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </span>{" "}
                Outsourcing
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-sm md:text-base lg:text-base text-gray-200 tracking-wide mb-10 md:mb-12 max-w-2xl mx-auto"
              >
                Reliable staffing solutions for your cleaning and facility management needs. We provide trained cleaning staff, skilled machine operators, and recruitment services. All our staff are Kenyan citizens with comprehensive insurance coverage and proper training.
              </motion.p>

              <StatsSectionWithAnimation />

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

      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Why Choose Our Labour Outsourcing Section */}
      <section className="relative py-12 md:py-16 lg:py-20">
        <div className="absolute inset-0 bg-white dark:bg-gray-900">
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,#add8e6_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-1/2 max-w-3xl md:pl-14 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-6 w-full flex justify-center md:justify-start">
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-3 sm:py-2 rounded-full text-xs font-medium inline-flex items-center gap-2 shadow-sm">
                  <MdPeople className="w-3.5 h-3.5" />
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 leading-tight tracking-wide w-full">
                <span className="mb-1">Why Choose Our</span>
                <span className="text-add8e6 relative inline-block block mb-4 ml-2">
                  Labour
                  <motion.span 
                    className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    style={{ display: 'block' }}
                  />
                </span>{" "}
                <span>Outsourcing?</span>
              </h2>
              <div className="w-full mb-6 md:hidden">
                <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-2xl h-[20rem] xs:h-[24rem] sm:h-[28rem] mx-auto">
                  <Image
                    src={whyChooseUsImage.src}
                    alt={whyChooseUsImage.alt}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-5">
                The employees are critical to the services we provide, and we are very selective in taking on new staff. <span className="font-semibold text-gray-800 dark:text-white"><Link href="/" className="text-add8e6 hover:text-add8e6/80 transition-colors duration-300">Simca Agencies Ltd</Link></span> has built a reputation for providing highly trained, disciplined, and reliable staff for cleaning and facility management. Our staff has an excellent track record and many years of experience, with regular training to maintain high standards.
              </p>
              <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-5">
                All our staff are citizens of Kenya, ensuring local expertise and accountability. We provide comprehensive training programs covering customer care, communication skills, discipline, and technical operations. Our machine operators are skilled in operating scrubbers, polishers, burnishers, wet and dry vacuum cleaners, industrial dry vacuum cleaners, and floor boys.
              </p>
              <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-5">
                We provide full insurance coverage including third party/public liability insurance, employer's liability, workman's compensation, and insurance against loss and damage to property. Our operations are fully OHS compliant, giving you peace of mind when you partner with us for your staffing needs.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:pr-8 mb-8 md:mb-0 hidden md:flex">
              <div className="relative rounded-xl overflow-hidden shadow-lg w-full max-w-2xl h-[40rem] mx-auto">
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

      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Our Staff & Services Section */}
      <section className="relative py-12 md:py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#add8e6_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
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
              <MdAutoAwesome className="w-3.5 h-3.5" />
              Our Staff & Services
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 leading-tight tracking-wide">
              <span className="block mb-1">Trained</span>
              <span className="inline-block block mb-1 ml-2">
                <span className="text-add8e6 relative inline-block">Professional
                  <motion.span 
                    className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    style={{ display: 'block' }}
                  />
                </span>{" "}
                Staff
              </span>
            </h2>
            <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide">
              We provide trained, disciplined, and reliable staff for all your cleaning and facility management needs. Our team is equipped with the skills and expertise to handle any challenge.
            </p>
          </motion.div>
          <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-6 space-y-3 md:space-y-4">
            {[
              {
                title: "Trained Cleaning Staff:",
                icon: HiClock,
                content: (
                  <>
                    All our cleaning staff have been trained in the use of cleaning equipment and machines. They are experienced in general housekeeping, sweeping and mopping floors, damp dusting of fixtures, spot cleaning surfaces, bathroom and toilet cleaning, and waste separation and disposal. Our cleaners are also experienced in specialized activities like strip and seal, buffing, carpet cleaning, upholstery care, and scrubbing.
                  </>
                )
              },
              {
                title: "Skilled Machine Operators:",
                icon: MdStars,
                content: (
                  <>
                    Our machine operators have intensive knowledge and experience operating professional cleaning equipment. They can operate scrubbers, polishers, burnishers, wet and dry vacuum cleaners, industrial dry vacuum cleaners, and floor boys. Their technical expertise ensures efficient and thorough cleaning of all types of flooring and surfaces.
                  </>
                )
              },
              {
                title: "Customer Care Training:",
                icon: FaLeaf,
                content: (
                  <>
                    Our staff is trained on customer care and the importance of professional conduct to our business and its growth. They are taught discipline, communication skills, and how to interact professionally with clients and their staff. This ensures a positive experience whenever our team is on your premises.
                  </>
                )
              },
              {
                title: "Permanent Recruitment:",
                icon: FaCog,
                content: (
                  <>
                    We offer full recruitment services for permanent positions. Our process includes thorough vetting, background checks, and skills assessment. We provide candidates who are pre-trained and ready to contribute to your organization. Ongoing support is available to ensure successful placements.
                  </>
                )
              },
              {
                title: "Temporary Staffing:",
                icon: HiShieldCheck,
                content: (
                  <>
                    For short-term needs, events, or fluctuating workloads, we provide temporary staffing solutions. Our temporary staff are fully trained and insured, giving you the flexibility to scale your cleaning workforce up or down as needed without the administrative burden of direct employment.
                  </>
                )
              },
              {
                title: "Comprehensive Insurance:",
                icon: FaAward,
                content: (
                  <>
                    All our staff are covered by comprehensive insurance including third party/public liability insurance, employer's liability, workman's compensation, and insurance against loss and damage to property. This provides complete peace of mind for you as our client.
                  </>
                )
              },
              {
                title: "Ongoing Management & Supervision:",
                icon: FaTags,
                content: (
                  <>
                    We provide area supervisors who oversee all activities, communicate with clients and management, maintain staff registers, keep service records, ensure quality assurance, monitor cleaning standards, and handle health and safety supervision. This ensures consistent, high-quality results across all placements.
                  </>
                )
              }
            ].map((para, i) => (
              <motion.div
                key={i} 
                className="group relative bg-white dark:bg-gray-900/50 rounded-lg p-3 md:p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-add8e6/30 focus:ring-offset-1 border border-gray-100 dark:border-gray-800/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="flex items-start gap-3">
                  <motion.div 
                    className="relative flex-shrink-0 mt-0.5"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-add8e6/30 via-add8e6/15 to-transparent rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
                      <div className="relative p-2 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-lg border border-add8e6/15 group-hover:border-add8e6/30 transition-all duration-300">
                        {React.createElement(para.icon, { 
                          className: 'h-3.5 w-3.5 text-add8e6 group-hover:scale-110 transition-transform duration-300'
                        })}
                      </div>
                    </div>
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-add8e6 text-xs md:text-sm mb-1.5 group-hover:text-add8e6/80 transition-colors leading-tight">
                      {para.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      {para.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* What's Included Section */}
      <section className="relative py-12 md:py-20">
        <div className="absolute inset-0 bg-white dark:bg-gray-900">
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,#add8e6_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8">
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
            <div className="w-full md:w-1/2 max-w-3xl md:pl-2 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-6 w-full flex justify-center md:justify-start">
                <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-3 sm:py-2 rounded-full text-xs font-medium inline-flex items-center gap-2 shadow-sm">
                  <MdPeople className="w-3.5 h-3.5" />
                  What's Included
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 leading-tight tracking-wide w-full">
                <span className="mb-1">What's Included in Our</span>
                <span className="ml-2">
                  <span className="text-add8e6 relative inline-block block mb-4">
                    Labour
                    <motion.span 
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      style={{ display: 'block' }}
                    />
                  </span>{' '}
                  Outsourcing Service
                </span>
              </h2>
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
                We provide trained, disciplined, and reliable staff for your cleaning and facility management needs. All our staff are Kenyan citizens with comprehensive insurance coverage.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300">
                <li>Trained cleaning staff</li>
                <li>Skilled machine operators (Scrubber, Polisher, Burnisher, Wet/Dry Vacuum, Floor Boy)</li>
                <li>Customer care and communication trained</li>
                <li>Permanent recruitment services</li>
                <li>Temporary staffing solutions</li>
                <li>Supervisors for quality assurance</li>
                <li>All staff are Kenyan citizens</li>
                <li>Comprehensive insurance coverage</li>
                <li>OHS compliant operations</li>
                <li>Regular training programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Pricing Section */}
      <div id="pricing" className="relative py-12 md:py-20 scroll-mt-24">
        <div className="absolute inset-0 bg-gray-50 dark:bg-gray-800/50">
          <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px] opacity-5" />
        </div>
        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 md:mb-16">
                <motion.div 
                  className="inline-block mb-3 sm:mb-4 md:mb-6 mt-0 !mt-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2 shadow-sm mt-0 !mt-0">
                    <Phone className="w-3.5 h-3.5" />
                    Pricing & Packages
                  </span>
                </motion.div>
                <motion.h2 
                  className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 leading-tight tracking-wide mt-0 !mt-0"
                >
                  <span className="text-add8e6 relative inline-block tracking-wider">
                    Staffing
                    <motion.span 
                      className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      style={{ display: 'block' }}
                    />
                  </span>{' '}
                  Packages
                </motion.h2>
                <motion.p 
                  className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-6 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <strong>Note:</strong> Staffing packages are customized based on the number of staff required, skill levels needed, duration of engagement, and specific requirements. Contact us for a detailed assessment and personalized quote.
                </motion.p>
              </div>

              <div className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group relative bg-white dark:bg-gray-900/50 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-add8e6/30 focus:ring-offset-1 border border-gray-100 dark:border-gray-800/50 overflow-hidden flex flex-col w-full max-w-md"
                >
                  <div className="flex flex-col h-full relative z-10">
                    <div className="p-3 bg-add8e6/10 rounded-lg group-hover:scale-105 transition-transform duration-300 mb-4">
                      <h3 className="font-semibold text-sm md:text-base text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors text-center">
                        Labour Outsourcing
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
                      Trained cleaning staff, skilled machine operators, and recruitment services for your facility management needs.
                    </p>
                    <ul className="space-y-2 flex-grow mb-6">
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <MdPeople className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>All staff are Kenyan citizens</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <MdPeople className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Comprehensive training and supervision</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <MdPeople className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>Full insurance coverage</span>
                      </li>
                      <li className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <MdPeople className="w-3.5 h-3.5 text-add8e6 mt-0.5 flex-shrink-0" />
                        <span>OHS compliant operations</span>
                      </li>
                    </ul>
                    <button
                      onClick={() => {
                        const contactSection = document.getElementById('contact-form')
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }
                      }}
                      className="mt-auto inline-flex items-center justify-center gap-2 bg-add8e6 text-white px-6 py-3 font-medium transition-all duration-300 text-center text-sm tracking-wide border-b-2 border-transparent hover:border-white/50 group rounded-lg"
                    >
                      Get a Quote
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              </div>

              <div className="max-w-3xl mx-auto mt-8 text-center">
                <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300">
                  Our staffing solutions can be bundled with our other services for a complete facility management package. For a personalized assessment and quote, please <Link href="/contact" className="text-add8e6 hover:underline">contact us</Link>.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />

      {/* Contact Section */}
      <section className="relative py-12 md:py-20">
        <div className="absolute inset-0 bg-white dark:bg-gray-900">
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,#add8e6_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-add8e6/10 text-add8e6 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs font-medium mb-4 md:mb-6">
              <MessageCircle className="w-3.5 h-3.5" />
              Contact Us
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight">
              Get in{' '}
              <span className="text-add8e6 relative">
                Touch
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-add8e6/20 rounded-full" />
              </span>
            </h2>
            <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300">
              Need professional staff for your facility? Get a free assessment and quote today. We're here to help with all your staffing needs.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm 
              preselectedService="Labour Outsourcing"
              formId="contact-form"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />
      </section>
    </div>
  );
}
