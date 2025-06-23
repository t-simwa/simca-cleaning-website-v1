"use client"

import { useState } from "react"
import { Plus, Minus, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What types of cleaning services do you offer?",
    answer:
      "We provide a comprehensive range of cleaning services tailored for both residential and commercial clients. Our offerings include house cleaning, office and commercial space cleaning, post-construction cleaning, carpet and rug cleaning, sofa and upholstery cleaning, mattress cleaning, and vehicle interior cleaning. We also offer specialized cleaning solutions such as deep cleaning, move-in/move-out cleaning, and custom cleaning plans to fit your unique needs. If you have a specific cleaning requirement, please contact us for a personalized solution.",
  },
  {
    question: "Do I have to sign a long-term contract?",
    answer:
      "No, you are not required to sign any long-term contracts. We believe in flexibility and convenience for our clients. You can choose from one-time cleaning, periodic services, or regular ongoing maintenance. Our services are commitment-free, so you can book, pause, or cancel at any time without any penalties or obligations.",
  },
  {
    question: "How do you ensure quality and satisfaction?",
    answer:
      "We are committed to delivering the highest quality cleaning services and your satisfaction is our top priority. We offer a 100% satisfaction guarantee: if you are not completely happy with our service, please notify us within 24 hours of the cleaning. We will promptly return to address any concerns at no extra cost until you are fully satisfied. Our team is highly trained, uses the latest cleaning technology, and follows strict quality control procedures to ensure consistent, excellent results.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Our pricing is transparent and based on several factors, including the type of service, the size and condition of the area to be cleaned, and any special requirements you may have. We offer free, no-obligation surveys and quotes to assess your needs accurately. Our prices are competitive and we frequently provide discounts and special offers. For a detailed quote, simply contact us and we'll be happy to assist you.",
  },
  {
    question: "Do I need to be home during cleaning?",
    answer:
      "No, you do not need to be present while we clean, as long as we have access to the premises. Our cleaning team is trustworthy, professional, and respects your privacy and property. If you prefer to be present, you are welcome to stay and observe our process. We work efficiently and discreetly to minimize any disruption to your routine.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve Nairobi and all major cities and towns across Kenya, including but not limited to Kiambu, Machakos, Kajiado, Mombasa, Kisumu, Nakuru, Eldoret, and Nanyuki. We are continually expanding our reach. If you are unsure whether we cover your area, please contact us to confirm availability.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "For your convenience, we accept multiple payment methods including MPESA, cheque, and cash. Payment is typically made after the service is completed to your satisfaction. If you require an invoice or have specific payment preferences, please let us know in advance and we will accommodate your needs.",
  },
  {
    question: "Do you offer any services besides cleaning?",
    answer:
      "Yes, in addition to our core cleaning services, we also offer professional pest control and fumigation services. If you book pest control together with cleaning, you may be eligible for a discounted rate. We also provide sanitary bin management, garbage collection, and hygiene solutions for commercial washrooms. Please inquire for more details about our full range of services.",
  },
  {
    question: "What makes your company different from other cleaning companies?",
    answer:
      "We are a locally owned and operated company with a strong focus on customer satisfaction, flexibility, and affordability. Our services are fully customized to your needs, and we never require contracts. We use the latest cleaning technology, employ highly trained staff, and offer a 24-hour satisfaction guarantee. Our attention to detail, open communication, and commitment to quality set us apart from the competition. We treat every client as a valued partner and strive to exceed your expectations every time.",
  },
  {
    question: "Can I get a discount or a free quote?",
    answer:
      "Absolutely! We offer free, no-obligation quotes for all our services. Our team can conduct a survey of your premises to provide an accurate estimate. We also run regular promotions and discounts, so don't hesitate to ask about current offers when you contact us. Our goal is to provide the best value for your money.",
  },
  {
    question: "How can I provide feedback or leave a review?",
    answer:
      "Your feedback is very important to us. After your service, you can share your experience by contacting us directly via phone or email, or by leaving a review on our website or social media pages. We read every review and use your feedback to improve our services. If you have any concerns, please let us know within 24 hours so we can address them promptly.",
  },
  {
    question: "How do you ensure the security and privacy of my home or office?",
    answer:
      "We take your security and privacy very seriously. All our staff are thoroughly vetted, trained, and adhere to strict confidentiality and professional standards. We respect your property and personal space at all times. If you have any special instructions or security protocols, please inform us in advance and we will follow them diligently.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-12 md:py-20">
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
          <div className="inline-block mb-6 sm:mb-4 md:mb-6">
            <span className="bg-add8e6/10 text-add8e6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium flex items-center gap-2 shadow-sm">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-6 md:mb-6 leading-tight tracking-wide">
            Everything You Need to Know About <span className="text-add8e6 relative inline-block">Our Services
              <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full" />
            </span>
          </h2>
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 tracking-wide mb-6">
            Answers to the most common questions about our cleaning, guarantees, pricing, and flexibility.
          </p>
          <p className="text-xs md:text-sm text-add8e6 dark:text-add8e6/90 font-medium tracking-wide">
            Still have questions? <span className="underline">Contact us anytime!</span>
          </p>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-0 shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-200 hover:shadow-lg hover:scale-[1.015]"
            >
              <button
                className={`w-full flex justify-between items-center text-left text-sm md:text-base font-medium text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-add8e6/50 transition-colors px-8 py-6 md:py-7 md:px-10
                  ${openIndex === idx ? 'bg-add8e6/10 dark:bg-add8e6/10 text-add8e6' : 'hover:bg-add8e6/5 hover:text-add8e6 dark:hover:bg-add8e6/5'}`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                {faq.question}
                {openIndex === idx ? (
                  <Minus className="ml-2 h-5 w-5 text-add8e6 transition-colors duration-300" />
                ) : (
                  <Plus className="ml-2 h-5 w-5 text-gray-400 group-hover:text-add8e6 transition-colors duration-300" />
                )}
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`px-8 pb-8 pt-8 text-gray-600 dark:text-gray-300 text-sm md:text-base transition-all duration-300 ${openIndex === idx ? 'block' : 'hidden'}`}
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