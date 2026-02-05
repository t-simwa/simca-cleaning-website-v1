"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
// Unique icons from different icon libraries
import { HiChevronDown, HiChevronUp } from "react-icons/hi2" // Heroicons v2 - Clean chevrons
import { MdQuestionAnswer } from "react-icons/md" // Material Design - FAQ icon
import { FaQuestionCircle } from "react-icons/fa" // Font Awesome - Header icon

const faqs = [
  {
    question: "What types of services do you offer?",
    answer:
      "We offer a complete range of facility solutions: Contract Cleaning for hospitals, hotels, government offices, schools, and industrial premises. Specialized Cleaning including carpet care, floor strip and seal, high-pressure washing, window cleaning, and post-construction cleanup. Hygiene Supplies such as dispensers, sanitary bins, and consumables. Landscaping and Gardening for grounds maintenance and office plants. And Labour Outsourcing for trained cleaning staff and machine operators. Whatever your facility needs, we're here to help.",
  },
  {
    question: "What types of facilities do you serve?",
    answer:
      "We proudly serve a wide range of institutions including hospitals and healthcare facilities, hotels and hospitality venues, government and institutional offices, schools and colleges, industrial premises, commercial buildings, shopping centres, and banks. Our experience across these sectors means we understand the unique requirements of each environment and deliver accordingly.",
  },
  {
    question: "How do you ensure quality and consistency?",
    answer:
      "Quality is at the heart of everything we do. Our supervisors conduct regular inspections, and we follow strict cleaning protocols to ensure consistent results. We invest in training our staff to meet the highest standards, use modern equipment, and maintain open communication with our clients. If something isn't right, we want to know so we can make it right.",
  },
  {
    question: "Are your staff trained and vetted?",
    answer:
      "Absolutely. All our staff are Kenyan citizens who are carefully selected, thoroughly vetted, and professionally trained. We invest deeply in developing our team to meet the stringent standards our clients expect. Every team member brings skill, discipline, and genuine care to their work.",
  },
  {
    question: "Is your company insured?",
    answer:
      "Yes, we carry comprehensive insurance coverage for your complete peace of mind. This includes third party and public liability insurance, employer's liability, workman's compensation, and coverage against loss or damage to property. Your facility is fully protected when you work with us.",
  },
  {
    question: "Are you compliant with health and safety standards?",
    answer:
      "We are fully Occupational Health and Safety (OHS) compliant. We follow strict safety protocols, train our staff in safe work practices, and use eco-friendly products and modern equipment that meet international standards. Your safety and the wellbeing of our team are always our priority.",
  },
  {
    question: "Where are you located?",
    answer:
      "Our headquarters is in Mombasa, located at New Canon Towers on Moi Avenue in the CBD. We've been proudly serving Kenya since 2005, and our clients include respected organizations such as Kenya Ports Authority, Kenya Maritime Authority, and Mombasa Polytechnic University. Contact us to discuss how we can serve your facility.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Our pricing is transparent and tailored to your specific needs. We consider factors like the type of service, facility size, frequency, and any special requirements. We offer free, no-obligation site surveys and quotes so you know exactly what to expect. Our goal is to provide excellent value and a partnership that works for you.",
  },
  {
    question: "What makes Simca different from other cleaning companies?",
    answer:
      "We're a fully Kenyan-owned company that has grown since 2005 into one of Kenya's largest and most specialized cleaning companies. Our success lies in our people, our commitment to quality, and the relationships we build with our clients. We're OHS compliant, fully insured, use eco-friendly products and modern equipment, and treat every space as if it were our own.",
  },
  {
    question: "Can I get a free quote?",
    answer:
      "Of course! We offer free, no-obligation quotes for all our services. Our team can conduct a site survey to assess your needs and provide an accurate estimate. Simply contact us by phone or email, and we'll be happy to discuss how we can help your facility.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy. Give us a call at 0721 525 901, send an email to info@simcaagencies.com, or fill out the contact form on our website. We'll arrange a conversation to understand your needs, conduct a site survey if needed, and provide a tailored proposal. We look forward to caring for your space.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-12 md:py-16 lg:py-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 animate-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(62,65,145,0.08),transparent_70%)] animate-pulse" />
      </div>
      {/* Floating decorative icon */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-16 right-1/4 w-16 h-16 bg-add8e6/10 dark:bg-add8e6/10 rounded-full blur-2xl flex items-center justify-center animate-float">
          <FaQuestionCircle className="w-8 h-8 text-add8e6/20 dark:text-add8e6/10" />
        </div>
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-4 md:mb-12">
          <div className="inline-block mb-6 sm:mb-4 md:mb-6">
            <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2 shadow-sm">
              <FaQuestionCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-6 md:mb-6 leading-tight tracking-wide">
            Everything You Need to Know About <span className="text-add8e6 relative inline-block">Our Services
              <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full" />
            </span>
          </h2>
          <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide mb-6">
            Answers to the most common questions about our cleaning, guarantees, pricing, and flexibility.
          </p>
          <p className="text-xs md:text-sm text-add8e6 dark:text-add8e6/90 font-medium tracking-wide">
            Still have questions? <span className="underline">Contact us anytime!</span>
          </p>
        </div>
        <div className="max-w-5xl mx-auto flex flex-col gap-3 md:gap-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="group bg-white dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800/50 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-add8e6/20"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
            >
              <button
                className={`w-full flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-add8e6/30 focus:ring-offset-1 transition-all duration-200 px-4 py-3
                  ${openIndex === idx ? 'bg-add8e6/5 dark:bg-add8e6/10' : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                {/* Beautiful icon */}
                <div className="relative flex-shrink-0">
                  <div className="relative">
                    {/* Gradient glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-add8e6/20 via-add8e6/10 to-transparent rounded-md blur-sm group-hover:blur-md transition-all duration-300" />
                    {/* Icon container */}
                    <div className={`relative p-1.5 bg-gradient-to-br from-add8e6/8 to-add8e6/4 dark:from-add8e6/12 dark:to-add8e6/6 rounded-md border transition-all duration-300 ${
                      openIndex === idx 
                        ? 'border-add8e6/30' 
                        : 'border-add8e6/10 group-hover:border-add8e6/25'
                    }`}>
                      <MdQuestionAnswer className={`h-3 w-3 transition-all duration-300 ${
                        openIndex === idx 
                          ? 'text-add8e6 scale-110' 
                          : 'text-add8e6/60 group-hover:text-add8e6'
                      }`} />
                    </div>
                  </div>
                </div>

                {/* Question text */}
                <span className={`flex-1 text-xs md:text-sm font-medium leading-tight transition-colors duration-200 ${
                  openIndex === idx 
                    ? 'text-add8e6' 
                    : 'text-gray-800 dark:text-white group-hover:text-add8e6/80'
                }`}>
                  {faq.question}
                </span>

                {/* Chevron icon */}
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === idx ? (
                    <HiChevronUp className="h-4 w-4 text-add8e6 transition-colors duration-300" />
                  ) : (
                    <HiChevronDown className="h-4 w-4 text-gray-400 group-hover:text-add8e6 transition-colors duration-300" />
                  )}
                </motion.div>
              </button>

              {/* Answer content */}
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    id={`faq-answer-${idx}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-3 pt-2 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 