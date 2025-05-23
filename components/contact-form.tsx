"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, ChevronDown, Phone, Mail, Clock, MessageCircle, ShieldCheck, Loader2 } from "lucide-react"

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
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false)
  const serviceDropdownRef = useRef<HTMLDivElement>(null)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const services = [
    { value: "residential", label: "Residential Cleaning" },
    { value: "commercial", label: "Commercial Cleaning" },
    { value: "construction", label: "Post-construction Cleaning" },
    { value: "carpet", label: "Carpet & Upholstery Cleaning" },
    { value: "sanitization", label: "Sanitization & Disinfection" },
    { value: "specialized", label: "Specialized Cleaning" },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceSelect = (serviceValue: string) => {
    setFormData((prev) => ({ ...prev, service: serviceValue }))
    setIsServiceDropdownOpen(false)
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (serviceDropdownRef.current && !serviceDropdownRef.current.contains(event.target as Node)) {
        setIsServiceDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [serviceDropdownRef])

  const selectedServiceLabel = services.find(s => s.value === formData.service)?.label || "Select a service"

  return (
    <div>
      {submitSuccess ? (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 px-4 py-3 rounded-md relative mb-6 animate-fade-in">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" />
            <strong className="font-bold">Thank you!</strong>
          </div>
          <span className="block sm:inline mt-1">
            Your message has been sent successfully. We'll get back to you shortly.
          </span>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="group">
            <label htmlFor="name" className={`block text-sm font-medium mb-1.5 transition-colors duration-200 ${focusedField === 'name' ? 'text-add8e6' : 'text-gray-700 dark:text-gray-300'}`}>
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-add8e6 focus:border-transparent transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500"
              required
            />
          </div>
          <div className="group">
            <label htmlFor="email" className={`block text-sm font-medium mb-1.5 transition-colors duration-200 ${focusedField === 'email' ? 'text-add8e6' : 'text-gray-700 dark:text-gray-300'}`}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-add8e6 focus:border-transparent transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500"
              required
            />
          </div>
          <div className="group">
            <label htmlFor="phone" className={`block text-sm font-medium mb-1.5 transition-colors duration-200 ${focusedField === 'phone' ? 'text-add8e6' : 'text-gray-700 dark:text-gray-300'}`}>
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
              className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-add8e6 focus:border-transparent transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500"
              required
            />
          </div>
          <div className="relative group" ref={serviceDropdownRef}>
            <label htmlFor="service" className={`block text-sm font-medium mb-1.5 transition-colors duration-200 ${focusedField === 'service' || isServiceDropdownOpen ? 'text-add8e6' : 'text-gray-700 dark:text-gray-300'}`}>
              Service Interested In
            </label>
            {/* Custom Select Input */}
            <button
              type="button"
              id="service"
              aria-haspopup="listbox"
              aria-expanded={isServiceDropdownOpen}
              className={`w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-add8e6 focus:border-transparent transition-all duration-300 text-left flex items-center justify-between ${isServiceDropdownOpen ? 'ring-2 ring-add8e6 border-transparent' : ''}`}
              onClick={() => {
                setIsServiceDropdownOpen(!isServiceDropdownOpen)
                setFocusedField(isServiceDropdownOpen ? null : 'service')
              }}
              onBlur={() => setTimeout(() => setFocusedField(null), 100)}
            >
              {selectedServiceLabel}
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServiceDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>

            {/* Custom Select Dropdown List */}
            {isServiceDropdownOpen && (
              <div className="absolute z-10 mt-2 w-full rounded-md bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none animate-fade-in-up origin-top max-h-60 overflow-y-auto">
                <ul role="listbox" aria-labelledby="service">
                  {/* Default 'Select a service' option */}
                  <li
                    className="text-gray-500 dark:text-gray-400 cursor-default select-none relative py-2 px-4 hover:bg-add8e6/20 transition-colors"
                    onClick={() => handleServiceSelect("")}
                  >
                    Select a service
                  </li>
                  {/* Service options */}
                  {services.map((service) => (
                    <li
                      key={service.value}
                      className={`text-gray-900 dark:text-white cursor-pointer select-none relative py-2 px-4 hover:bg-add8e6/20 transition-colors ${formData.service === service.value ? 'bg-add8e6/20 font-semibold' : ''}`}
                      onClick={() => handleServiceSelect(service.value)}
                      role="option"
                      aria-selected={formData.service === service.value}
                    >
                      {service.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="md:col-span-2 group">
            <label htmlFor="message" className={`block text-sm font-medium mb-1.5 transition-colors duration-200 ${focusedField === 'message' ? 'text-add8e6' : 'text-gray-700 dark:text-gray-300'}`}>
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              rows={4}
              className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-add8e6 focus:border-transparent transition-all duration-300 resize-none placeholder-gray-400 dark:placeholder-gray-500"
              required
            ></textarea>
          </div>
        </div>
        <div className="mt-6 md:mt-8 flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 bg-add8e6 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-medium hover:bg-add8e6/90 transition-all duration-300 hover:shadow-lg hover:scale-105 transform group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
