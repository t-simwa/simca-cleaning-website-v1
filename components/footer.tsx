import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock, Youtube, Sparkles } from "lucide-react"
import Logo from "./logo"
import WhatsAppWidget from "./whatsapp-widget"
import NewsletterSignup from "./newsletter-signup"
import ScrollToTop from "./scroll-to-top"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative">
      <WhatsAppWidget />

      {/* Newsletter Section */}
      <div className="relative bg-gradient-to-br from-add8e6/20 to-add8e6/10 dark:from-add8e6/10 dark:to-add8e6/5 py-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px] animate-pulse" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-add8e6/10 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-add8e6/10 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative">
          <NewsletterSignup />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-3 md:gap-4">
              <Logo className="h-12 w-auto md:h-14" variant="white" />
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Simca Cleaning
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Professional cleaning services across Kenya. We provide residential, commercial, and specialized cleaning
              solutions to meet all your needs.
            </p>
            <div className="flex gap-3 md:gap-4">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="bg-gray-800 hover:bg-add8e6/20 p-2.5 md:p-3 rounded-xl text-gray-400 hover:text-add8e6 transition-all duration-300 hover:scale-110 transform group"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 md:h-5 md:w-5 group-hover:rotate-12 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-add8e6" />
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/locations", label: "Locations" },
                { href: "/gallery", label: "Gallery" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-add8e6 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-add8e6/50 rounded-full group-hover:scale-150 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-add8e6" />
              Our Services
            </h3>
            <ul className="space-y-4">
              {[
                { href: "/services#residential", label: "Residential Cleaning" },
                { href: "/services#commercial", label: "Commercial Cleaning" },
                { href: "/services#construction", label: "Post-construction Cleaning" },
                { href: "/services#carpet", label: "Carpet & Upholstery Cleaning" },
                { href: "/services#sanitization", label: "Sanitization & Disinfection" },
                { href: "/services#specialized", label: "Specialized Cleaning" },
              ].map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-add8e6 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-add8e6/50 rounded-full group-hover:scale-150 transition-transform" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-add8e6" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 group">
                <div className="bg-gray-800 p-3 rounded-xl group-hover:bg-add8e6/20 transition-all duration-300">
                  <MapPin className="h-5 w-5 text-add8e6" />
                </div>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  Kimathi Street, CBD, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="bg-gray-800 p-3 rounded-xl group-hover:bg-add8e6/20 transition-all duration-300">
                  <Phone className="h-5 w-5 text-add8e6" />
                </div>
                <a
                  href="tel:+254700123456"
                  className="text-gray-400 hover:text-add8e6 transition-colors"
                >
                  +254 700 123 456
                </a>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="bg-gray-800 p-3 rounded-xl group-hover:bg-add8e6/20 transition-all duration-300">
                  <Mail className="h-5 w-5 text-add8e6" />
                </div>
                <a
                  href="mailto:info@simcacleaning.co.ke"
                  className="text-gray-400 hover:text-add8e6 transition-colors"
                >
                  info@simcacleaning.co.ke
                </a>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="bg-gray-800 p-3 rounded-xl group-hover:bg-add8e6/20 transition-all duration-300">
                  <Clock className="h-5 w-5 text-add8e6" />
                </div>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  Mon-Fri: 8am-5pm, Sat: 9am-1pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8 md:my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
            &copy; {currentYear} Simca Cleaning Company. All rights reserved.
          </p>
          <div className="flex gap-6 md:gap-8">
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-add8e6 transition-colors text-xs md:text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-400 hover:text-add8e6 transition-colors text-xs md:text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </footer>
  )
}
