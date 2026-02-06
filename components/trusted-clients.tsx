"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Building2 } from "lucide-react"

  const clients = [
    {
      name: "Kenya Ports Authority",
      logo: "/trusted-clients/kpa-logo.png",
      link: "https://www.kpa.co.ke/",
    },
    {
      name: "Kenya Maritime Authority",
      logo: "/trusted-clients/kma-logo.png",
      link: "https://www.kma.go.ke/",
    },
    {
      name: "Mombasa Polytechnic University",
      logo: "/trusted-clients/mp-logo.jpg",
      link: "https://www.tum.ac.ke/",
  },
]

export default function TrustedClients() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(173,216,230,0.1),transparent_70%)]" />
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
              <Building2 className="w-4 h-4" />
              Our Clients
              </span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
            Trusted by Leading{" "}
            <span className="text-add8e6 relative inline-block">
              Organizations
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
            Proud to serve Kenya's top institutions since 2005.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {clients.map((client, index) => (
            <motion.a
              key={client.name}
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-white dark:bg-gray-900/50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Logo */}
              <div className="relative h-20 w-full mb-4">
                            <Image
                  src={client.logo}
                              alt={`${client.name} logo`}
                              fill
                  className="object-contain filter dark:brightness-90 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 200px, 180px"
                />
                        </div>

              {/* Company Name */}
              <span className="font-body text-sm font-semibold text-gray-700 dark:text-gray-200 text-center group-hover:text-add8e6 transition-colors">
                            {client.name}
                            </span>
                    </motion.a>
                  ))}
          </div>
        </div>
      </section>
  )
}
