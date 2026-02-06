"use client"

import React from "react"
import { useState, useRef } from "react"
import { ArrowRight, Calendar, MapPin, Mail, Shield, Clock } from "lucide-react"
import { motion } from "framer-motion"
import SuccessModal from "@/components/success-modal"
import { FaBuilding } from "react-icons/fa"
import { MdCleaningServices } from "react-icons/md"
import { FaPumpSoap } from "react-icons/fa"
import { FaLeaf } from "react-icons/fa"
import { FaUsers } from "react-icons/fa"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    preferredDate: "",
  })

  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submittedData, setSubmittedData] = useState<{ name: string; service: string } | null>(null)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false)
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false)
  const serviceDropdownRef = useRef<HTMLDivElement>(null)
  const locationDropdownRef = useRef<HTMLDivElement>(null)

  // Prevent hydration mismatch
  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  const services = [
    { value: "Contract Cleaning", label: "Contract Cleaning", icon: FaBuilding },
    { value: "Specialized Cleaning", label: "Specialized Cleaning", icon: MdCleaningServices },
    { value: "Hygiene Supplies", label: "Hygiene Supplies", icon: FaPumpSoap },
    { value: "Landscaping & Gardening", label: "Landscaping & Gardening", icon: FaLeaf },
    { value: "Labour Outsourcing", label: "Labour Outsourcing", icon: FaUsers },
  ]

  const locations = [
    "Mombasa",
  ]


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceSelect = (serviceValue: string) => {
    setFormData((prev) => ({ ...prev, service: serviceValue }))
    setIsServiceDropdownOpen(false)
    setFocusedField(null)
  }

  const handleLocationSelect = (locationValue: string) => {
    setFormData((prev) => ({ ...prev, location: locationValue }))
    setIsLocationDropdownOpen(false)
    setFocusedField(null)
  }


  // Get minimum date (today) for date picker
  const getMinDate = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Store submitted data for success message
    const submittedName = formData.name
    const submittedService = formData.service

    // Show success modal immediately (optimistic UI)
    setSubmittedData({ name: submittedName, service: submittedService })
    setSubmitSuccess(true)
    setSubmitError(null)

    // Reset form immediately
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      location: "",
      preferredDate: "",
    })

    // Send emails in the background (fire and forget)
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: submittedName,
        email: formData.email,
        phone: formData.phone,
        service: submittedService,
        location: formData.location,
        preferredDate: formData.preferredDate,
      }),
    }).catch((error) => {
      // Silently handle errors in background (emails will retry or be logged server-side)
      console.error('Background email send error:', error)
    })
  }

  return (
    <section id="home-contact-form" className="relative py-16 md:py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-900/20 dark:via-gray-900 dark:to-blue-800/20">
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
              <Mail className="w-4 h-4" />
              Contact Us
              </span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
            Get a Free{" "}
            <span className="text-add8e6 relative inline-block">
              Quote
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
            Tell us about your cleaning needs and we'll get back to you within 24 hours.
          </p>
        </motion.div>

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
                <div className="relative group" ref={serviceDropdownRef}>
                  <label htmlFor="service" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-200 group-focus-within:text-add8e6">
                    Service Interested In
                  </label>
                  <button
                    type="button"
                    id="service"
                    aria-haspopup="listbox"
                    aria-expanded={isServiceDropdownOpen}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-md border bg-white dark:bg-gray-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-add8e6/30 transition-all duration-200 text-left text-xs ${
                      isServiceDropdownOpen || focusedField === 'service'
                        ? 'ring-2 ring-add8e6/30 border-add8e6/50' 
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                    onClick={() => {
                      setIsServiceDropdownOpen(!isServiceDropdownOpen)
                      setFocusedField(isServiceDropdownOpen ? null : 'service')
                    }}
                    onBlur={() => setTimeout(() => {
                      setIsServiceDropdownOpen(false)
                      setFocusedField(null)
                    }, 100)}
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
                  {isMounted && isServiceDropdownOpen && (
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
                          onClick={() => handleServiceSelect(service.value)}
                        >
                          {React.createElement(service.icon, { className: "w-3.5 h-3.5 text-add8e6 flex-shrink-0" })}
                          {service.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="relative group" ref={locationDropdownRef}>
                  <label htmlFor="location" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-200 group-focus-within:text-add8e6">
                    Location/Area <span className="text-red-500">*</span>
                  </label>
                  <button
                    type="button"
                    id="location"
                    aria-haspopup="listbox"
                    aria-expanded={isLocationDropdownOpen}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-md border bg-white dark:bg-gray-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-add8e6/30 transition-all duration-200 text-left text-xs ${
                      isLocationDropdownOpen || focusedField === 'location'
                        ? 'ring-2 ring-add8e6/30 border-add8e6/50' 
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                    onClick={() => {
                      setIsLocationDropdownOpen(!isLocationDropdownOpen)
                      setFocusedField(isLocationDropdownOpen ? null : 'location')
                    }}
                    onBlur={() => setTimeout(() => {
                      setIsLocationDropdownOpen(false)
                      setFocusedField(null)
                    }, 100)}
                  >
                    {formData.location ? (
                      <span className="flex items-center gap-1.5 text-xs">
                        <MapPin className="w-3.5 h-3.5 text-add8e6" />
                        {formData.location}
                      </span>
                    ) : (
                      <span className="text-gray-400 dark:text-gray-500 text-xs">Select location</span>
                    )}
                    <svg className="w-3 h-3 ml-2 text-gray-400 dark:text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {isMounted && isLocationDropdownOpen && (
                    <ul
                      tabIndex={-1}
                      role="listbox"
                      className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg py-1 max-h-60 overflow-auto"
                    >
                      {locations.map((location) => (
                        <li
                          key={location}
                          role="option"
                          aria-selected={formData.location === location}
                          className={`flex items-center gap-2 px-3 py-1.5 cursor-pointer text-xs hover:bg-add8e6/10 dark:hover:bg-add8e6/20 transition-colors ${
                            formData.location === location 
                              ? 'bg-add8e6/10 dark:bg-add8e6/20 text-add8e6 font-medium' 
                              : 'text-gray-900 dark:text-white'
                          }`}
                          onClick={() => handleLocationSelect(location)}
                        >
                          <MapPin className="w-3.5 h-3.5 text-add8e6 flex-shrink-0" />
                          {location}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="group">
                  <label htmlFor="preferredDate" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-200 group-focus-within:text-add8e6">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400 dark:text-gray-500 pointer-events-none" />
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('preferredDate')}
                      onBlur={() => setFocusedField(null)}
                      min={getMinDate()}
                      required
                      className="w-full pl-9 pr-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-add8e6/30 focus:border-add8e6/50 transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 text-xs"
                    />
                  </div>
                </div>
              </div>
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 font-body text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-add8e6" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-add8e6" />
                <span>24h Response</span>
              </div>
            </div>

              <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 font-semibold rounded-lg transition-all duration-300 group text-sm shadow-md hover:shadow-lg"
              >
                <span>Get Your Free Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </form>

            <SuccessModal
              isOpen={submitSuccess && submittedData !== null}
              onClose={() => {
                setSubmitSuccess(false)
                setSubmittedData(null)
              }}
              name={submittedData?.name || ""}
              service={services.find(s => s.value === submittedData?.service)?.label || submittedData?.service || ""}
            />

            {submitError && (
              <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                <p className="text-sm text-red-600 dark:text-red-400">
                  {submitError}
                </p>
              </div>
            )}
          </div>
        </div>
    </section>
  )
}
