"use client"

import { Sparkles, Users, CheckCircle2, Star, Settings, Award, Handshake, Unlock, Wallet } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function WhyChooseUs() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])

  return (
    <section className="relative py-12 md:py-16 lg:py-20">
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
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-10 md:mb-12"
          style={{ opacity, scale }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-add8e6/20 to-add8e6/10 text-add8e6 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs font-medium mb-6 md:mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Why Choose Simca Agencies
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-6 md:mb-6 leading-tight tracking-wide">
            <span className="block mb-1">Why Choose Simca?</span>
            <span className="inline-block block mb-1 ml-2">
              Cleaning You Can <span className="text-add8e6 relative inline-block">Trust
                <motion.span
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-add8e6/20 rounded-full origin-left block"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  style={{ display: 'block' }}
                />
              </span>
            </span>
          </h2>
          <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 tracking-wide">
            We care for your space like it's our own. Friendly service, fair prices, and a spotless result—every time.
          </p>
        </motion.div>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 space-y-6 md:space-y-8 text-gray-700 dark:text-gray-200 text-xs sm:text-sm md:text-base font-normal">
          {[
            {
              title: "Personalized Cleaning, Every Time:",
              icon: <Sparkles className="w-5 h-5 text-add8e6 flex-shrink-0" />,
              text: "At Simca Agencies, we know every home and business is unique, and so are your cleaning needs. We take the time to listen to your requests, preferences, and priorities—whether it's a special area that needs extra care or a routine that fits your busy schedule. Our team creates a custom cleaning plan just for you, so you always get the results you want. With us, you'll never feel like just another client—your space is cleaned your way, every time."
            },
            {
              title: "Affordable Services:",
              icon: <Wallet className="w-5 h-5 text-add8e6 flex-shrink-0" />,
              text: "We believe everyone deserves a clean, healthy space—no matter their budget. That's why we keep our prices fair, honest, and easy to understand, with no hidden fees or surprises. If you have a specific budget in mind, just let us know: we'll work with you to create a cleaning plan that fits your needs and your wallet. Our goal is to make quality cleaning accessible and stress-free, so you can enjoy a spotless home or office without worrying about the cost. With Simca, you always know what you're paying for, and you always get real value for your money."
            },
            {
              title: "A Team You Can Trust:",
              icon: <Handshake className="w-5 h-5 text-add8e6 flex-shrink-0" />,
              text: "We're proud to be a local company, and our staff are friendly, reliable people you can count on. You'll see the same faces at every visit, so you always know who's in your home or office. We treat your property with respect, keep you informed, and are always happy to answer your questions or adjust to your needs. Our goal is to build a relationship with you based on honesty, care, and real service."
            },
            {
              title: "Satisfaction Guaranteed:",
              icon: <CheckCircle2 className="w-5 h-5 text-add8e6 flex-shrink-0" />,
              text: "Your peace of mind is our top priority. If you're ever less than 100% satisfied with our work, just let us know within 24 hours and we'll return to make it right—at no extra cost and with no hassle. We stand by our promise because we want you to feel confident and valued every time you choose Simca. Your feedback matters, and we're always here to listen and improve."
            },
            {
              title: "Spotless Results, Every Visit:",
              icon: <Star className="w-5 h-5 text-add8e6 flex-shrink-0" />,
              text: "We believe a truly clean space is one you can see, feel, and enjoy. Our team pays close attention to every detail, from the obvious to the overlooked, so your home or business always looks its best. We use safe, effective products and proven techniques to deliver a deep, lasting clean. You'll notice the difference right away—and so will your family, guests, or clients."
            },
            {
              title: "No Contracts, No Worries:",
              icon: <Unlock className="w-5 h-5 text-add8e6 flex-shrink-0" />,
              text: "We want you to stay with us because you love our service, not because you're locked into a contract. That's why we offer total flexibility: you can pause, cancel, or change your cleaning schedule at any time, for any reason. There are no hidden fees or long-term commitments—just honest, straightforward service. We make it easy to get the help you need, when you need it."
            }
                          ].map((para, i) => (
                          <motion.div 
                            key={i} 
              className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-add8e6/50 focus:ring-offset-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              >
              <span className="flex items-center gap-2 mb-1">
                {para.icon}
                <span className="font-bold text-add8e6 text-xs md:text-sm">{para.title}</span>
              </span>
              <span>{para.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
