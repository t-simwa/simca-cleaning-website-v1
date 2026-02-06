"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X, Phone, Moon, Sun, Sparkles, Mail, ChevronDown, ArrowRight, Globe } from "lucide-react"
import Logo from "./logo"
import { useTheme } from "next-themes"
import SocialIcons from "./social-icons"
import LanguageToggle from "./language-toggle"
import { useMobileMenu } from "@/contexts/mobile-menu-context"

// Mobile Language Toggle Component
function MobileLanguageToggle() {
  const [language, setLanguage] = useState("en")
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95 border border-gray-200 dark:border-gray-600 group"
        aria-label="Select language"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-add8e6/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative p-1.5 bg-gradient-to-br from-add8e6/10 to-add8e6/5 dark:from-add8e6/20 dark:to-add8e6/10 rounded-lg">
            <Globe className="h-4 w-4 text-add8e6 group-hover:rotate-12 transition-transform duration-300" />
          </div>
        </div>
        <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
          {language === "en" ? "EN" : "SW"}
        </span>
        <ChevronDown className={`h-3 w-3 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 bottom-full mb-2 w-36 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-1.5 z-50">
            <button
              onClick={() => {
                setLanguage("en")
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-2.5 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors rounded-lg mx-1 ${
                language === "en" ? "text-add8e6 bg-add8e6/10" : "text-gray-700 dark:text-gray-200"
              }`}
            >
              English
            </button>
            <button
              onClick={() => {
                setLanguage("sw")
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-2.5 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors rounded-lg mx-1 ${
                language === "sw" ? "text-add8e6 bg-add8e6/10" : "text-gray-700 dark:text-gray-200"
              }`}
            >
              Swahili
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default function Header() {
  const router = useRouter()
  const { isMenuOpen, setIsMenuOpen } = useMobileMenu()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const handleGetQuoteClick = () => {
    router.push('/contact#contact-form')
    // Scroll will be handled by the contact page after navigation
  }

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle theme mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Close mobile services dropdown when main menu is closed
    if (isMenuOpen) {
      setIsMobileServicesOpen(false)
    }
  }

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen)
  }

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen)
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      subNav: [
        { name: "Contract Cleaning", href: "/services/contract-cleaning" },
        { name: "Specialized Cleaning", href: "/services/specialized" },
        { name: "Hygiene Supplies", href: "/services/hygiene-supplies" },
        { name: "Landscaping & Gardening", href: "/services/landscaping-services" },
        { name: "Labour Outsourcing", href: "/services/labour-outsourcing" },
      ],
    },
    { name: "Locations", href: "/locations" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-add8e6/10 via-gray-50 to-add8e6/10 dark:from-add8e6/5 dark:via-gray-800/50 dark:to-add8e6/5 border-b border-gray-100 dark:border-gray-800 hidden md:block">
        <div className="container mx-auto px-3 md:px-3">
          <div className="grid grid-cols-3 items-center h-9 md:h-10">
            {/* Left Section - Call */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+254721525901"
                className="font-body flex items-center text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-add8e6 dark:hover:text-add8e6 transition-all duration-300 group"
              >
                <Phone className="h-3.5 w-3.5 mr-1.5 group-hover:scale-110 transition-transform duration-300" />
                <span>Call Us: +254 721 525 901</span>
              </a>
              <span className="text-gray-400 dark:text-gray-600">|</span>
              <a
                href="tel:+254412316600"
                className="font-body flex items-center text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-add8e6 dark:hover:text-add8e6 transition-all duration-300 group"
              >
                <Phone className="h-3.5 w-3.5 mr-1.5 group-hover:scale-110 transition-transform duration-300" />
                <span>041-2316600</span>
              </a>
            </div>

            {/* Center Section - Email */}
            <div className="flex items-center justify-center gap-3">
              <a
                href="mailto:info@simca-agencies.com"
                className="font-body flex items-center text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-add8e6 dark:hover:text-add8e6 transition-all duration-300 group"
              >
                <Mail className="h-3.5 w-3.5 mr-1.5 group-hover:scale-110 transition-transform duration-300" />
                <span>Email Us: info@simca-agencies.com</span>
              </a>
              <span className="text-gray-400 dark:text-gray-600">|</span>
              <a
                href="mailto:simka1974@hotmail.com"
                className="font-body flex items-center text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-add8e6 dark:hover:text-add8e6 transition-all duration-300 group"
              >
                <Mail className="h-3.5 w-3.5 mr-1.5 group-hover:scale-110 transition-transform duration-300" />
                <span>simka1974@hotmail.com</span>
              </a>
            </div>

            {/* Right Section - Social Icons, Language, Theme */}
            <div className="flex items-center space-x-3 md:space-x-4 justify-end">
              <SocialIcons className="h-3.5 w-3.5 md:h-3.5 md:w-3.5" />
              <div className="h-3.5 md:h-3.5 w-px bg-gray-200 dark:bg-gray-700" />
              <LanguageToggle />
              <div className="h-3.5 md:h-3.5 w-px bg-gray-200 dark:bg-gray-700" />
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center gap-1.5 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? (
                  <Sun className="h-3.5 w-3.5 md:h-3.5 md:w-3.5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Moon className="h-3.5 w-3.5 md:h-3.5 md:w-3.5 text-gray-600 dark:text-gray-300" />
                )}
                <span className="text-xs font-medium text-gray-600 dark:text-gray-300 hidden sm:inline">
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex items-center justify-between h-14 md:h-18 gap-2">
          {/* Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0 min-w-0 max-w-[220px] sm:max-w-[240px]">
            <Logo 
              className="w-52 h-11 sm:w-60 sm:h-12 md:w-60 md:h-30 transition-transform duration-300 group-hover:scale-105" 
              variant={theme === "dark" ? "white" : "default"} 
            />
            {/* <span className="ml-1 text-sm md:text-lg font-medium text-gray-600 dark:text-gray-300 group-hover:text-add8e6 transition-colors">
              SIMCA AGENCIES LIMITED
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-5 lg:space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.subNav ? (
                  <button
                    className="font-body inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:text-add8e6 dark:hover:text-add8e6 transition-colors font-medium py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-add8e6 after:transition-all hover:after:w-full hover:after:shadow-[0_0_8px_rgba(173,216,230,0.5)] appearance-none bg-transparent border-none"
                    onClick={toggleServicesDropdown}
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="font-body text-sm text-gray-600 dark:text-gray-300 hover:text-add8e6 dark:hover:text-add8e6 transition-colors font-medium py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-add8e6 after:transition-all hover:after:w-full hover:after:shadow-[0_0_8px_rgba(173,216,230,0.5)]"
                  >
                    {item.name}
                  </Link>
                )}

                {item.subNav && isServicesDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-60 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div className="py-1">
                      {item.subNav.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="font-body block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:text-add8e6 dark:hover:text-add8e6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                          onClick={() => setIsServicesDropdownOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Dual CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            {/* Secondary - Call Now (matches hero style) */}
            <a
              href="tel:+254721525901"
              className="font-body inline-flex items-center justify-center gap-1.5 bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 px-4 py-2.5 font-semibold transition-all duration-300 text-sm tracking-wide rounded-lg shadow-sm hover:shadow-md"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
            {/* Primary - Get Quote */}
            <button
              onClick={handleGetQuoteClick}
              className="font-body inline-flex items-center justify-center gap-1.5 bg-teal-500 hover:bg-teal-600 text-white px-5 py-2.5 font-semibold transition-all duration-300 group text-sm tracking-wide rounded-lg shadow-md hover:shadow-lg"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Header Actions */}
          <div className="md:hidden flex items-center gap-2">
            {/* Phone Icon - Click to Call */}
            <a
              href="tel:+254721525901"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 text-white shadow-md hover:bg-teal-600 transition-all duration-300 hover:scale-105"
              aria-label="Call us"
            >
              <Phone className="h-4 w-4" />
            </a>
            
            {/* Menu Button */}
            <button
              className="text-gray-600 dark:text-gray-300 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-shrink-0"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu Backdrop */}
          {isMenuOpen && (
            <div 
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300"
              onClick={toggleMenu}
              aria-hidden="true"
            />
          )}

          {/* Mobile Menu */}
          <div 
            className={`md:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-gray-900 z-[70] transform transition-transform duration-300 ease-in-out shadow-2xl ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-center px-4 py-2 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
              <Link href="/" className="flex items-center group justify-center w-full flex-shrink-0" onClick={() => setIsMenuOpen(false)}>
                <Logo 
                  className="w-52 h-11 sm:w-60 sm:h-12 md:w-60 md:h-30 transition-transform duration-300 group-hover:scale-105" 
                  variant={theme === "dark" ? "white" : "default"} 
                />
              </Link>
              <button
                className="text-gray-600 dark:text-gray-300 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="h-[calc(100vh-3.5rem)] overflow-y-auto bg-white dark:bg-gray-900">
              {/* Navigation Links */}
              <div className="px-4 py-2 space-y-0.5">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.subNav ? (
                      <button
                        className="font-body flex items-center justify-between w-full py-2.5 px-4 text-sm text-gray-600 dark:text-gray-300 hover:text-add8e6 dark:hover:text-add8e6 transition-colors font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                        onClick={toggleMobileServices}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="font-body flex items-center justify-between py-2.5 px-4 text-sm text-gray-600 dark:text-gray-300 hover:text-add8e6 dark:hover:text-add8e6 transition-colors font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span>{item.name}</span>
                        <span className="w-1.5 h-1.5 bg-add8e6/50 rounded-full group-hover:scale-150 transition-transform" />
                      </Link>
                    )}
                    {item.subNav && isMobileServicesOpen && (
                      <div className="pl-8 pr-4 py-0.5 space-y-0.5 bg-gray-50 dark:bg-gray-800">
                        {item.subNav.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="font-body block py-2 px-4 text-sm text-gray-600 dark:text-gray-300 hover:text-add8e6 dark:hover:text-add8e6 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => {
                              setIsMenuOpen(false)
                              setIsMobileServicesOpen(false)
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
                <h3 className="font-heading text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  <a
                    href="tel:+254721525901"
                    className="font-body flex items-center justify-between py-2.5 px-4 text-sm text-gray-600 dark:text-gray-300 hover:text-add8e6 dark:hover:text-add8e6 transition-colors font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Us
                    </span>
                    <span className="text-sm text-gray-500">+254 721 525 901</span>
                  </a>
                  <a
                    href="tel:+254412316600"
                    className="font-body flex items-center justify-between py-2.5 px-4 text-sm text-gray-600 dark:text-gray-300 hover:text-add8e6 dark:hover:text-add8e6 transition-colors font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      Office Line
                    </span>
                    <span className="text-sm text-gray-500">041-2316600</span>
                  </a>
                  <a
                    href="mailto:info@simca-agencies.com"
                    className="font-body flex items-center justify-between py-2.5 px-4 text-sm text-gray-600 dark:text-gray-300 hover:text-add8e6 dark:hover:text-add8e6 transition-colors font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Us
                    </span>
                    <span className="text-sm text-gray-500">info@simca-agencies.com</span>
                  </a>
                  <a
                    href="mailto:simka1974@hotmail.com"
                    className="font-body flex items-center justify-between py-2.5 px-4 text-sm text-gray-600 dark:text-gray-300 hover:text-add8e6 dark:hover:text-add8e6 transition-colors font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      Alternative Email
                    </span>
                    <span className="text-sm text-gray-500">simka1974@hotmail.com</span>
                  </a>
                </div>
              </div>

              {/* Spacer to ensure content doesn't get hidden behind sticky footer */}
              <div className="h-28"></div>

              {/* Sticky Mobile Menu Footer - Always visible at bottom */}
              <div className="sticky bottom-0 left-0 right-0 border-t border-gray-200 dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-800/95 backdrop-blur-sm shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                {/* Social Icons */}
                <div className="flex justify-center mb-3">
                  <SocialIcons className="h-5 w-5" />
                </div>

                {/* Dark Mode & Language Toggle Row - Beautiful Design */}
                <div className="flex items-center justify-center gap-3">
                  {/* Dark Mode Toggle */}
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95 border border-gray-200 dark:border-gray-600 group"
                    aria-label="Toggle dark mode"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-add8e6/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative p-1.5 bg-gradient-to-br from-add8e6/10 to-add8e6/5 dark:from-add8e6/20 dark:to-add8e6/10 rounded-lg">
                        {theme === "dark" ? (
                          <Sun className="h-4 w-4 text-add8e6 group-hover:rotate-180 transition-transform duration-500" />
                        ) : (
                          <Moon className="h-4 w-4 text-add8e6 group-hover:rotate-12 transition-transform duration-300" />
                        )}
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                      {theme === "dark" ? "Light" : "Dark"}
                    </span>
                  </button>

                  {/* Divider */}
                  <div className="h-8 w-px bg-gray-300 dark:bg-gray-600" />

                  {/* Language Toggle - Mobile Design */}
                  <MobileLanguageToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
