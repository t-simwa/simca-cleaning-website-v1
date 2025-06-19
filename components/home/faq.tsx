"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What types of cleaning services do you offer?",
    answer:
      "We provide a full range of cleaning services including residential, office, post-construction, carpet, sofa, mattress, and vehicle interior cleaning. We also offer specialized and custom cleaning solutions to fit your needs.",
  },
  {
    question: "Do I have to sign a long-term contract?",
    answer:
      "No contracts are required! We offer flexible one-time, periodic, or regular cleaning services. You can book or cancel at any time with no obligation.",
  },
  {
    question: "How do you ensure quality and satisfaction?",
    answer:
      "We have a 100% satisfaction guarantee. If you're not happy with our service, let us know within 24 hours and we'll make it right at no extra cost.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Our prices are based on the type and size of the job. We offer free, no-obligation quotes and always strive to provide affordable, transparent pricing.",
  },
  {
    question: "Do I need to be home during cleaning?",
    answer:
      "No, as long as we have access, you don't need to be present. Our team is trustworthy and professional, and your privacy is always respected.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Nairobi and all major cities and towns across Kenya. Contact us to confirm availability in your area.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-16 md:py-24">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 animate-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(62,65,145,0.08),transparent_70%)] animate-pulse" />
      </div>
      {/* Floating decorative icon */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-16 right-1/4 w-16 h-16 bg-add8e6/10 dark:bg-add8e6/10 rounded-full blur-2xl flex items-center justify-center animate-float">
          <HelpCircle className="w-10 h-10 text-add8e6/20 dark:text-add8e6/10" />
        </div>
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-4 md:mb-16">
          <div className="inline-block mb-4 sm:mb-4 md:mb-6">
            <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight tracking-wide">
            Everything You Need to Know About <span className="text-add8e6 relative inline-block">Our Services
              <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full" />
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 tracking-wide mb-4">
            Answers to the most common questions about our cleaning, guarantees, pricing, and flexibility.
          </p>
          <p className="text-sm md:text-base text-add8e6 dark:text-add8e6/90 font-medium tracking-wide">
            Still have questions? <span className="underline">Contact us anytime!</span>
          </p>
        </div>
        <div className="max-w-2xl mx-auto flex flex-col gap-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-0 shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-200 hover:shadow-lg hover:scale-[1.015]"
            >
              <button
                className={`w-full flex justify-between items-center text-left text-lg md:text-xl font-semibold text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-add8e6/50 transition-colors px-8 py-6 md:py-7 md:px-10
                  ${openIndex === idx ? 'bg-add8e6/10 dark:bg-add8e6/10 text-add8e6' : 'hover:bg-add8e6/5 hover:text-add8e6 dark:hover:bg-add8e6/5'}`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                {faq.question}
                <ChevronDown className={`ml-2 h-5 w-5 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-add8e6' : ''}`} />
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`px-8 pb-8 text-gray-600 dark:text-gray-300 text-base md:text-lg transition-all duration-300 ${openIndex === idx ? 'block' : 'hidden'}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 