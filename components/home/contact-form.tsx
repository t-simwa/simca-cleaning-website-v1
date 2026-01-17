"use client"

import React from "react"

import { useState } from "react"
import { Send, Loader2, CheckCircle2, Sparkles, ArrowRight, MessageSquare, CheckCircle, Shield, Clock, Home, Building2, HardHat, SprayCanIcon as Spray, ShieldCheck, Sofa, SquareStack, Car, Bed, Trash2, Package, Droplets, SprayCan } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

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

  const services = [
    { value: "Residential Cleaning", label: "Residential Cleaning", icon: Home },
    { value: "Commercial Cleaning", label: "Commercial Cleaning", icon: Building2 },
    { value: "Post-construction Cleaning", label: "Post-construction Cleaning", icon: HardHat },
    { value: "Carpet & Upholstery Cleaning", label: "Carpet & Upholstery Cleaning", icon: Sofa },
    { value: "Sanitization & Disinfection", label: "Sanitization & Disinfection", icon: SprayCan },
    { value: "Specialized Cleaning", label: "Specialized Cleaning", icon: Sparkles },
    { value: "Window Cleaning", label: "Window Cleaning", icon: SquareStack },
    { value: "Vehicle Interior Cleaning", label: "Vehicle Interior Cleaning", icon: Car },
    { value: "Mattress Cleaning", label: "Mattress Cleaning", icon: Bed },
    { value: "Garbage Collection Services", label: "Garbage Collection Services", icon: Trash2 },
    { value: "Sanitary Bins Services", label: "Sanitary Bins Services", icon: Package },
    { value: "Steam Cleaning", label: "Steam Cleaning", icon: Droplets },
    { value: "Sofa Set Cleaning", label: "Sofa Set Cleaning", icon: Sofa },
    { value: "Office Cleaning", label: "Office Cleaning", icon: Building2 },
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
              <MessageSquare className="w-4 h-4" />
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

          <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="group">
                <label htmlFor="name" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5 transition-colors duration-200 group-focus-within:text-add8e6">
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
                  className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-add8e6 focus:border-transparent transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500 text-xs md:text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div className="group">
                <label htmlFor="phone" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5 transition-colors duration-200 group-focus-within:text-add8e6">
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
                  className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-add8e6 focus:border-transparent transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500 text-xs md:text-sm"
                  placeholder="0712 345 678"
                />
              </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="group">
                  <label htmlFor="email" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5 transition-colors duration-200 group-focus-within:text-add8e6">
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
                    className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-add8e6 focus:border-transparent transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500 text-xs md:text-sm"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="group">
                  <label htmlFor="service" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5 transition-colors duration-200 group-focus-within:text-add8e6">
                    Service Interested In
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      className={`w-full flex items-center justify-between px-4 py-2.5 md:py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-add8e6 focus:border-transparent transition-all duration-300 text-left placeholder-gray-400 dark:placeholder-gray-500 text-xs md:text-sm ${focusedField === 'service' ? 'ring-2 ring-add8e6 border-transparent' : ''}`}
                      onClick={() => setFocusedField(focusedField === 'service' ? null : 'service')}
                      aria-haspopup="listbox"
                      aria-expanded={focusedField === 'service'}
                    >
                      {formData.service ? (
                        <span className="flex items-center gap-2 text-xs md:text-sm">
                          {services.find(s => s.value === formData.service)?.icon &&
                            React.createElement(services.find(s => s.value === formData.service)?.icon!, { className: "w-5 h-5 text-add8e6" })
                          }
                          {services.find(s => s.value === formData.service)?.label}
                        </span>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-500 text-xs md:text-sm">Select a service</span>
                      )}
                      <svg className="w-4 h-4 ml-2 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {focusedField === 'service' && (
                      <ul
                        tabIndex={-1}
                        role="listbox"
                        className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-1 max-h-60 overflow-auto"
                      >
                        {services.map((service) => (
                          <li
                            key={service.value}
                            role="option"
                            aria-selected={formData.service === service.value}
                            className={`flex items-center gap-2 px-4 py-2 cursor-pointer text-xs md:text-sm hover:bg-add8e6/10 dark:hover:bg-add8e6/20 transition-colors ${formData.service === service.value ? 'bg-add8e6/10 dark:bg-add8e6/20 text-add8e6 font-medium' : 'text-gray-900 dark:text-white'}`}
                            onClick={() => {
                              setFormData(prev => ({ ...prev, service: service.value }));
                              setFocusedField(null);
                            }}
                          >
                            {React.createElement(service.icon, { className: "w-5 h-5 text-add8e6 flex-shrink-0" })}
                            {service.label}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            <div className="group">
              <label htmlFor="message" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5 transition-colors duration-200 group-focus-within:text-add8e6">
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
                className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-add8e6 focus:border-transparent transition-all duration-300 resize-none placeholder-gray-400 dark:placeholder-gray-500 text-xs md:text-sm"
                placeholder="Tell us about your cleaning needs..."
              />
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-add8e6" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-add8e6" />
                <span>24h Response Time</span>
              </div>
            </div>

              <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-add8e6 text-white px-8 py-4 rounded-xl font-medium hover:bg-add8e6/90 transition-all duration-300 hover:shadow-lg hover:scale-105 transform group disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm"
              >
                {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                    <span>Sending...</span>
                    </>
                ) : (
                  <>
                    <span>Get Your Free Quote</span>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </form>

            {submitSuccess && (
            <div className="mt-6 md:mt-8 p-4 md:p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center animate-fade-in">
                <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 mb-2">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />
                <h3 className="text-base md:text-lg font-semibold">Message Sent Successfully!</h3>
                </div>
                <p className="text-xs md:text-sm text-green-600 dark:text-green-400">
                Thank you for choosing us. We'll get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
    </section>
  )
}
