"use client"

import React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Calendar, MapPin } from "lucide-react"
import SuccessModal from "./success-modal"
// Unique icons from different icon libraries - matching home page contact form
import { FaHome } from "react-icons/fa" // Font Awesome - Home
import { MdBusiness } from "react-icons/md" // Material Design - Business
import { FaCouch } from "react-icons/fa" // Font Awesome - Upholstery
import { FaBug } from "react-icons/fa" // Font Awesome - Bug
import { FaLeaf } from "react-icons/fa" // Font Awesome - Leaf

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    preferredDate: "",
    referralSource: "",
    message: "",
  })

  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submittedData, setSubmittedData] = useState<{ name: string; service: string } | null>(null)
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false)
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false)
  const [isReferralDropdownOpen, setIsReferralDropdownOpen] = useState(false)
  const serviceDropdownRef = useRef<HTMLDivElement>(null)
  const locationDropdownRef = useRef<HTMLDivElement>(null)
  const referralDropdownRef = useRef<HTMLDivElement>(null)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const services = [
    { value: "Residential Cleaning", label: "Residential Cleaning", icon: FaHome },
    { value: "Commercial Cleaning", label: "Commercial Cleaning", icon: MdBusiness },
    { value: "Carpet & Upholstery Cleaning", label: "Carpet & Upholstery Cleaning", icon: FaCouch },
    { value: "Fumigation & Pest Control", label: "Fumigation & Pest Control", icon: FaBug },
    { value: "Landscaping Services", label: "Landscaping Services", icon: FaLeaf },
  ]

  const locations = [
    "Mombasa",
    "Kisumu",
    "Lamu",
    "Lodwar",
    "Kaimosi",
  ]

  const referralSources = [
    "Google Search",
    "Social Media (Facebook/Instagram)",
    "Friend/Family Referral",
    "Website",
    "Advertisement",
    "Other",
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceSelect = (serviceValue: string) => {
    setFormData((prev) => ({ ...prev, service: serviceValue }))
    setIsServiceDropdownOpen(false)
  }

  const handleLocationSelect = (locationValue: string) => {
    setFormData((prev) => ({ ...prev, location: locationValue }))
    setIsLocationDropdownOpen(false)
  }

  const handleReferralSelect = (referralValue: string) => {
    setFormData((prev) => ({ ...prev, referralSource: referralValue }))
    setIsReferralDropdownOpen(false)
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
      referralSource: "",
      message: "",
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
        referralSource: formData.referralSource,
        message: formData.message,
      }),
    }).catch((error) => {
      // Silently handle errors in background (emails will retry or be logged server-side)
      console.error('Background email send error:', error)
    })
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (serviceDropdownRef.current && !serviceDropdownRef.current.contains(event.target as Node)) {
        setIsServiceDropdownOpen(false)
      }
      if (locationDropdownRef.current && !locationDropdownRef.current.contains(event.target as Node)) {
        setIsLocationDropdownOpen(false)
      }
      if (referralDropdownRef.current && !referralDropdownRef.current.contains(event.target as Node)) {
        setIsReferralDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [serviceDropdownRef, locationDropdownRef, referralDropdownRef])

  const selectedServiceLabel = services.find(s => s.value === submittedData?.service)?.label || submittedData?.service || "your service"

  return (
    <div>
      <SuccessModal
        isOpen={submitSuccess && submittedData !== null}
        onClose={() => {
          setSubmitSuccess(false)
          setSubmittedData(null)
        }}
        name={submittedData?.name || ""}
        service={selectedServiceLabel}
      />

      {submitError && (
        <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
          <p className="text-sm text-red-600 dark:text-red-400">
            {submitError}
          </p>
        </div>
      )}

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
            {isServiceDropdownOpen && (
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
                      setIsServiceDropdownOpen(false);
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
                <span className="text-gray-400 dark:text-gray-500 text-xs">Select location/area</span>
              )}
              <svg className="w-3 h-3 ml-2 text-gray-400 dark:text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {isLocationDropdownOpen && (
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
                    onClick={() => {
                      handleLocationSelect(location)
                      setFocusedField(null)
                    }}
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
        <div className="group">
          <label htmlFor="message" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-200 group-focus-within:text-add8e6">
            Specific Requirements
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
            placeholder="Tell us about your specific cleaning requirements..."
          ></textarea>
        </div>
        <div className="relative group" ref={referralDropdownRef}>
          <label htmlFor="referralSource" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-200 group-focus-within:text-add8e6">
            How did you hear about us? <span className="text-gray-500 text-xs">(Optional)</span>
          </label>
          <button
            type="button"
            id="referralSource"
            aria-haspopup="listbox"
            aria-expanded={isReferralDropdownOpen}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-md border bg-white dark:bg-gray-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-add8e6/30 transition-all duration-200 text-left text-xs ${
              isReferralDropdownOpen || focusedField === 'referralSource'
                ? 'ring-2 ring-add8e6/30 border-add8e6/50' 
                : 'border-gray-200 dark:border-gray-700'
            }`}
            onClick={() => {
              setIsReferralDropdownOpen(!isReferralDropdownOpen)
              setFocusedField(isReferralDropdownOpen ? null : 'referralSource')
            }}
            onBlur={() => setTimeout(() => {
              setIsReferralDropdownOpen(false)
              setFocusedField(null)
            }, 100)}
          >
            {formData.referralSource ? (
              <span className="text-xs">{formData.referralSource}</span>
            ) : (
              <span className="text-gray-400 dark:text-gray-500 text-xs">Select an option</span>
            )}
            <svg className="w-3 h-3 ml-2 text-gray-400 dark:text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {isReferralDropdownOpen && (
            <ul
              tabIndex={-1}
              role="listbox"
              className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg py-1 max-h-60 overflow-auto"
            >
              {referralSources.map((source) => (
                <li
                  key={source}
                  role="option"
                  aria-selected={formData.referralSource === source}
                  className={`px-3 py-1.5 cursor-pointer text-xs hover:bg-add8e6/10 dark:hover:bg-add8e6/20 transition-colors ${
                    formData.referralSource === source 
                      ? 'bg-add8e6/10 dark:bg-add8e6/20 text-add8e6 font-medium' 
                      : 'text-gray-900 dark:text-white'
                  }`}
                  onClick={() => {
                    handleReferralSelect(source)
                    setFocusedField(null)
                  }}
                >
                  {source}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 bg-add8e6 text-white px-5 py-2 font-medium rounded-md transition-all duration-200 group text-xs hover:bg-add8e6/90"
          >
            <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            <span>Send Message</span>
          </button>
        </div>
      </form>
    </div>
  )
}
