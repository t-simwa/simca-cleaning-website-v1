"use client"

import { motion } from "framer-motion"
import { Shield, Users, Leaf, Clock, Award, CheckCircle, Heart } from "lucide-react"

const reasons = [
  {
    icon: Users,
    title: "Trained & Disciplined Staff",
    description: "Our people are our strength. Every team member is carefully selected, vetted, and trained to meet the highest standards.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "We use modern equipment and environmentally responsible products that protect your space and our planet.",
  },
  {
    icon: CheckCircle,
    title: "Regular Quality Inspections",
    description: "Our supervisors conduct regular inspections to ensure consistent, high-standard results every time.",
  },
  {
    icon: Clock,
    title: "Fast Response Time",
    description: "When you need us, we're there. Our team responds quickly to requests and works around your schedule.",
  },
  {
    icon: Shield,
    title: "OHS Compliant",
    description: "We follow strict safety protocols and train our staff in safe work practices for your peace of mind.",
  },
  {
    icon: Award,
    title: "Fully Insured",
    description: "Complete coverage including public liability, employer's liability, and property damage protection.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-add8e6/5 via-white to-blue-50 dark:from-add8e6/10 dark:via-gray-900 dark:to-blue-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(62,65,145,0.05),transparent_70%)]" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200/10 dark:bg-blue-400/5 rounded-full blur-3xl" />
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
              <Heart className="w-4 h-4" />
              Why Choose Us
            </span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
            Why Choose{" "}
            <span className="text-add8e6 relative inline-block">
              Simca?
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
            Professional cleaning backed by experience, quality, and care.
          </p>
        </motion.div>

        {/* Reasons Grid - 3 columns like Trusted Clients */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="group bg-white dark:bg-gray-900/50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-add8e6/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-add8e6/20 transition-colors duration-300">
                <reason.icon className="w-6 h-6 text-add8e6" />
              </div>
              
              {/* Title */}
              <h3 className="font-heading text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-add8e6 transition-colors">
                {reason.title}
              </h3>
              
              {/* Description */}
              <p className="font-body text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
