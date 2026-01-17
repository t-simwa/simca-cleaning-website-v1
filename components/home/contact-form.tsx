"use client"

import React from "react"
import { useState } from "react"
import { Loader2, ArrowRight, CheckCircle } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
// Unique icons from different icon libraries
import { MdEmail } from "react-icons/md" // Material Design - Email/Contact
import { FaHome } from "react-icons/fa" // Font Awesome - Home
import { MdBusiness } from "react-icons/md" // Material Design - Business
import { FaHardHat } from "react-icons/fa" // Font Awesome - Construction
import { FaCouch } from "react-icons/fa" // Font Awesome - Upholstery
import { FaShieldVirus } from "react-icons/fa" // Font Awesome - Sanitization
import { MdStars } from "react-icons/md" // Material Design - Specialized
import { FaWindowMaximize } from "react-icons/fa" // Font Awesome - Window
import { FaCar } from "react-icons/fa" // Font Awesome - Car
import { FaBed } from "react-icons/fa" // Font Awesome - Bed
import { FaTrash } from "react-icons/fa" // Font Awesome - Trash
import { FaBox } from "react-icons/fa" // Font Awesome - Package
import { FaTint } from "react-icons/fa" // Font Awesome - Droplet/Steam
import { HiShieldCheck } from "react-icons/hi2" // Heroicons v2 - Shield
import { HiClock } from "react-icons/hi2" // Heroicons v2 - Clock

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  // Prevent hydration mismatch
  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  const services = [
    { value: "Residential Cleaning", label: "Residential Cleaning", icon: FaHome },
    { value: "Commercial Cleaning", label: "Commercial Cleaning", icon: MdBusiness },
    { value: "Post-construction Cleaning", label: "Post-construction Cleaning", icon: FaHardHat },
    { value: "Carpet & Upholstery Cleaning", label: "Carpet & Upholstery Cleaning", icon: FaCouch },
    { value: "Sanitization & Disinfection", label: "Sanitization & Disinfection", icon: FaShieldVirus },
    { value: "Specialized Cleaning", label: "Specialized Cleaning", icon: MdStars },
    { value: "Window Cleaning", label: "Window Cleaning", icon: FaWindowMaximize },
    { value: "Vehicle Interior Cleaning", label: "Vehicle Interior Cleaning", icon: FaCar },
    { value: "Mattress Cleaning", label: "Mattress Cleaning", icon: FaBed },
    { value: "Garbage Collection Services", label: "Garbage Collection Services", icon: FaTrash },
    { value: "Sanitary Bins Services", label: "Sanitary Bins Services", icon: FaBox },
    { value: "Steam Cleaning", label: "Steam Cleaning", icon: FaTint },
    { value: "Sofa Set Cleaning", label: "Sofa Set Cleaning", icon: FaCouch },
    { value: "Office Cleaning", label: "Office Cleaning", icon: MdBusiness },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

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
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-add8e6/10 text-add8e6 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs font-medium mb-4 md:mb-6">
              <MdEmail className="w-3.5 h-3.5" />
              Contact Us
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 leading-tight">
              Get in{" "}
              <span className="text-add8e6 relative">
                Touch
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-add8e6/20 rounded-full" />
              </span>
            </h2>
            <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300">
              Have questions about our services? Get a free cleaning service quote today! We're here to help.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="group">
                <label htmlFor="name" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-200 group-focus-within:text-add8e6">
                    Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-add8e6/30 focus:border-add8e6/50 transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 text-xs"
                  placeholder="John Doe"
                />
              </div>
              <div className="group">
                <label htmlFor="phone" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-200 group-focus-within:text-add8e6">
                    Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-add8e6/30 focus:border-add8e6/50 transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 text-xs"
                  placeholder="0712 345 678"
                />
              </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="group">
                  <label htmlFor="email" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-200 group-focus-within:text-add8e6">
                      Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-add8e6/30 focus:border-add8e6/50 transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 text-xs"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="group">
                  <label htmlFor="service" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-200 group-focus-within:text-add8e6">
                    Service Interested In
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-md border bg-white dark:bg-gray-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-add8e6/30 transition-all duration-200 text-left text-xs ${
                        focusedField === 'service' 
                          ? 'ring-2 ring-add8e6/30 border-add8e6/50' 
                          : 'border-gray-200 dark:border-gray-700'
                      }`}
                      onClick={() => setFocusedField(focusedField === 'service' ? null : 'service')}
                      aria-haspopup="listbox"
                      aria-expanded={focusedField === 'service'}
                    >
                      {formData.service ? (
                        <span className="flex items-center gap-1.5 text-xs">
                          {services.find(s => s.value === formData.service)?.icon &&
                            React.createElement(services.find(s => s.value === formData.service)?.icon!, { className: "w-3.5 h-3.5 text-add8e6" })
                          }
                          {services.find(s => s.value === formData.service)?.label}
                        </span>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-500 text-xs">Select a service</span>
                      )}
                      <svg className="w-3 h-3 ml-2 text-gray-400 dark:text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {isMounted && focusedField === 'service' && (
                      <ul
                        tabIndex={-1}
                        role="listbox"
                        className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg py-1 max-h-60 overflow-auto"
                      >
                        {services.map((service) => (
                          <li
                            key={service.value}
                            role="option"
                            aria-selected={formData.service === service.value}
                            className={`flex items-center gap-2 px-3 py-1.5 cursor-pointer text-xs hover:bg-add8e6/10 dark:hover:bg-add8e6/20 transition-colors ${
                              formData.service === service.value 
                                ? 'bg-add8e6/10 dark:bg-add8e6/20 text-add8e6 font-medium' 
                                : 'text-gray-900 dark:text-white'
                            }`}
                            onClick={() => {
                              setFormData(prev => ({ ...prev, service: service.value }));
                              setFocusedField(null);
                            }}
                          >
                            {React.createElement(service.icon, { className: "w-3.5 h-3.5 text-add8e6 flex-shrink-0" })}
                            {service.label}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            <div className="group">
              <label htmlFor="message" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-200 group-focus-within:text-add8e6">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                  required
                  rows={4}
                className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-add8e6/30 focus:border-add8e6/50 transition-all duration-200 resize-none placeholder-gray-400 dark:placeholder-gray-500 text-xs"
                placeholder="Tell us about your cleaning needs..."
              />
            </div>

            {/* Trust Indicators - Minimalist */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <HiShieldCheck className="w-3.5 h-3.5 text-add8e6" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-1">
                <HiClock className="w-3.5 h-3.5 text-add8e6" />
                <span>24h Response Time</span>
              </div>
            </div>

              <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-1.5 bg-add8e6 text-white px-5 py-2 font-medium rounded-md transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed text-xs hover:bg-add8e6/90"
              >
                {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Sending...</span>
                    </>
                ) : (
                  <>
                    <span>Get Your Free Quote</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </div>
          </form>

            {submitSuccess && (
            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md text-center">
                <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 mb-1">
                  <CheckCircle className="w-4 h-4" />
                <h3 className="text-sm font-semibold">Message Sent Successfully!</h3>
                </div>
                <p className="text-xs text-green-600 dark:text-green-400">
                Thank you for choosing us. We'll get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
    </section>
  )
}
