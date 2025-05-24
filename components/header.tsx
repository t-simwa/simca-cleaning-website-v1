"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Moon, Sun, Sparkles, Mail, ChevronDown } from "lucide-react"
import Logo from "./logo"
import { useTheme } from "next-themes"
import SocialIcons from "./social-icons"
import LanguageToggle from "./language-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

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
        { name: "Residential Cleaning", href: "/services/residential" },
        { name: "Commercial Cleaning", href: "/services/commercial" },
        { name: "Post-construction Cleaning", href: "/services/post-construction" },
        { name: "Carpet & Upholstery Cleaning", href: "/services/carpet-upholstery" },
        { name: "Sanitization & Disinfection", href: "/services/sanitization-disinfection" },
        { name: "Specialized Cleaning", href: "/services/specialized" },
        { name: "Office Cleaning", href: "/services/office" },
        { name: "Steam Cleaning", href: "/services/steam" },
        { name: "Sanitary Bins Services", href: "/services/sanitary-bins" },
        { name: "Garbage Collection Services", href: "/services/garbage-collection" },
        { name: "Mattress Cleaning Services", href: "/services/mattress" },
        { name: "Vehicle Interior Cleaning Services", href: "/services/vehicle-interior" },
        { name: "Window Cleaning", href: "/services/window" },
        { name: "Sofa Set Cleaning", href: "/services/sofa-set" },
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
        <div className="container mx-auto px-3 md:px-4">
          <div className="flex justify-between items-center h-12 md:h-14">
            {/* Left Section - Tagline */}
            <div className="flex items-center">
              <div className="flex items-center text-sm md:text-base text-gray-600 dark:text-gray-300">
                <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-add8e6 mr-2 md:mr-2.5 animate-pulse" />
                <span className="hidden md:inline font-medium">Professional Cleaning Services Across Kenya</span>
              </div>
            </div>

            {/* Center Section - Phone Number */}
            <div className="hidden md:flex items-center">
              <a
                href="tel:+25472356800"
                className="flex items-center text-sm md:text-base font-medium text-gray-600 dark:text-gray-300 hover:text-add8e6 dark:hover:text-add8e6 transition-all duration-300 group"
              >
                <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span>Call +254 72356800</span>
              </a>
            </div>

            {/* Right Section - Social Icons, Language, Theme */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <SocialIcons className="h-4 w-4 md:h-5 md:w-5" />
              <div className="h-4 md:h-5 w-px bg-gray-200 dark:bg-gray-700" />
              <LanguageToggle />
              <div className="h-4 md:h-5 w-px bg-gray-200 dark:bg-gray-700" />
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-1.5 md:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4 md:h-5 md:w-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Moon className="h-4 w-4 md:h-5 md:w-5 text-gray-600 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Logo 
              className="h-8 w-auto md:h-10 transition-transform duration-300 group-hover:scale-105" 
              variant={theme === "dark" ? "white" : "default"} 
            />
            <span className="ml-2 md:ml-3 text-lg md:text-xl font-bold text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">
              Simca Cleaning
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.subNav ? (
                  <button
                    className="text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-add8e6 dark:hover:text-add8e6 transition-colors font-medium py-2 flex items-center gap-1 focus:outline-none"
                    onClick={toggleServicesDropdown}
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-add8e6 dark:hover:text-add8e6 transition-colors font-medium py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-add8e6 after:transition-all hover:after:w-full hover:after:shadow-[0_0_8px_rgba(173,216,230,0.5)]"
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
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:text-add8e6 dark:hover:text-add8e6 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-add8e6 after:transition-all hover:after:w-full hover:after:shadow-[0_0_8px_rgba(173,216,230,0.5)]"
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

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+25472356800"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-add8e6 to-add8e6/90 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-add8e6/20 transition-all duration-300 group text-center text-sm sm:text-base relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 dark:text-gray-300 p-1.5 md:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5 md:h-6 md:w-6" /> : <Menu className="h-5 w-5 md:h-6 md:w-6" />}
          </button>

          {/* Mobile Menu Backdrop */}
          {isMenuOpen && (
            <div 
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
              onClick={toggleMenu}
              aria-hidden="true"
            />
          )}

          {/* Mobile Menu */}
          <div 
            className={`md:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
              <Link href="/" className="flex items-center group" onClick={() => setIsMenuOpen(false)}>
                <Logo 
                  className="h-8 w-auto transition-transform duration-300 group-hover:scale-105" 
                  variant={theme === "dark" ? "white" : "default"} 
                />
                <span className="ml-2 text-lg font-bold text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">
                  Simca Cleaning
                </span>
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
            <div className="flex flex-col h-[calc(100vh-4rem)] bg-white dark:bg-gray-900">
              <nav className="flex-1 overflow-y-auto">
                <div className="px-4 py-3 space-y-1">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.subNav ? (
                        <button
                          className="flex items-center justify-between w-full py-3 px-4 text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-add8e6 dark:hover:text-add8e6 transition-colors font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                          onClick={toggleMobileServices}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center justify-between py-3 px-4 text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-add8e6 dark:hover:text-add8e6 transition-colors font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 group"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span>{item.name}</span>
                          <span className="w-1.5 h-1.5 bg-add8e6/50 rounded-full group-hover:scale-150 transition-transform" />
                        </Link>
                      )}
                      {item.subNav && isMobileServicesOpen && (
                        <div className="pl-8 pr-4 py-1 space-y-1 bg-gray-50 dark:bg-gray-800">
                          {item.subNav.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block py-2 px-4 text-sm text-gray-600 dark:text-gray-300 hover:text-add8e6 dark:hover:text-add8e6 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
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
                  <h3 className="text-sm md:text-base font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                    Quick Actions
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="tel:+25472356800"
                      className="flex items-center justify-between py-3 px-4 text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-add8e6 dark:hover:text-add8e6 transition-colors font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="flex items-center">
                        <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                        Call Us
                      </span>
                      <span className="text-sm md:text-base text-gray-500">+254 72356800</span>
                    </a>
                    <Link
                      href="/contact"
                      className="flex items-center justify-between py-3 px-4 text-sm md:text-base text-gray-600 dark:text-gray-300 hover:text-add8e6 dark:hover:text-add8e6 transition-colors font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="flex items-center">
                        <Mail className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                        Email Us
                      </span>
                      <span className="text-sm md:text-base text-gray-500">info@simcacleaning.co.ke</span>
                    </Link>
                  </div>
                </div>
              </nav>

              {/* Mobile Menu Footer */}
              <div className="border-t border-gray-100 dark:border-gray-800 p-4 space-y-4 bg-gray-50 dark:bg-gray-800">
                {/* Social Icons */}
                <div className="flex justify-center space-x-6">
                  <SocialIcons className="h-5 w-5" />
                </div>

                {/* Theme Toggle */}
                <div className="flex justify-center">
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                    aria-label="Toggle dark mode"
                  >
                    {theme === "dark" ? (
                      <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    ) : (
                      <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    )}
                  </button>
                </div>

                {/* Language Toggle */}
                <div className="flex justify-center">
                  <LanguageToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
