"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What services do you offer?",
    answer: "Contract cleaning for hospitals, hotels, offices, and industrial facilities. Plus specialized cleaning, hygiene supplies, landscaping, and staff outsourcing.",
  },
  {
    question: "What facilities do you serve?",
    answer: "Hospitals, hotels, government offices, schools, banks, shopping centres, and industrial premises across Kenya.",
  },
  {
    question: "Are your staff trained and vetted?",
    answer: "Yes. All staff are Kenyan citizens, carefully vetted, and professionally trained to meet the highest standards.",
  },
  {
    question: "Is your company insured?",
    answer: "Fully insured with public liability, employer's liability, workman's compensation, and property damage coverage.",
  },
  {
    question: "How do I get a quote?",
    answer: "Call us at 0721 525 901, email info@simcaagencies.com, or fill out our contact form. We offer free, no-obligation quotes.",
  },
  {
    question: "Where are you located?",
    answer: "Our headquarters is in Mombasa at New Canon Towers, Moi Avenue. Serving Kenya since 2005.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-16 md:py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(62,65,145,0.05),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-add8e6/10 text-add8e6 px-4 py-2 rounded-full text-sm font-medium">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
            Frequently Asked{" "}
            <span className="text-add8e6 relative inline-block">
              Questions
              <motion.span
                className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-1 bg-add8e6/30 rounded-full origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </span>
          </h2>
          <p className="font-body text-base md:text-lg text-gray-600 dark:text-gray-300">
            Quick answers about our services, coverage, and how to get started.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <button
                className={`w-full flex items-center justify-between gap-4 text-left px-5 py-4 transition-colors duration-200 ${
                  openIndex === idx 
                    ? 'bg-add8e6/5 dark:bg-add8e6/10' 
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <span className={`font-body text-base font-semibold leading-tight transition-colors duration-200 ${
                  openIndex === idx 
                    ? 'text-add8e6' 
                    : 'text-gray-800 dark:text-white'
                }`}>
                  {faq.question}
                </span>

                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className={`w-5 h-5 transition-colors duration-200 ${
                    openIndex === idx ? 'text-add8e6' : 'text-gray-400'
                  }`} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 pt-0">
                      <p className="font-body text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
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
