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

      {/* Newsletter Section - Temporarily hidden */}
      {/* <div className="relative bg-gradient-to-br from-add8e6/20 to-add8e6/10 dark:from-add8e6/10 dark:to-add8e6/5 py-12">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px] animate-pulse" />
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-add8e6/10 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-add8e6/10 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative">
          <NewsletterSignup />
        </div>
      </div> */}

      <div className="container mx-auto px-4 py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {/* Company Info */}
          <div className="space-y-3 md:space-y-5">
            <div className="flex items-center gap-3 md:gap-4">
              <Logo className="w-60 h-12 md:w-60 md:h-30 transition-transform duration-300 group-hover:scale-105" variant="white" />
            </div>
            <p className="text-gray-400 leading-relaxed text-xs md:text-sm">
              Professional cleaning services across Kenya. We provide residential, commercial, and professional cleaning
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
                  className="bg-gray-800 hover:bg-add8e6/20 p-2 md:p-2 rounded-xl text-gray-400 hover:text-add8e6 transition-all duration-300 hover:scale-110 transform group"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 md:h-4 md:w-4 group-hover:rotate-12 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 md:space-y-5">
            <h3 className="text-base md:text-lg font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent flex items-center gap-2">
              <Sparkles className="w-4 h-4 md:h-4 md:w-4 text-add8e6" />
              Quick Links
            </h3>
            <ul className="space-y-3">
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
                    className="text-gray-400 hover:text-add8e6 transition-all duration-300 flex items-center gap-2 group text-xs md:text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-add8e6/50 rounded-full group-hover:scale-150 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3 md:space-y-5">
            <h3 className="text-base md:text-lg font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent flex items-center gap-2">
              <Sparkles className="w-4 h-4 md:h-4 md:w-4 text-add8e6" />
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/services/commercial", label: "Contract Cleaning" },
                { href: "/services/carpet-upholstery", label: "Specialized Cleaning" },
                { href: "/services/commercial", label: "Hygiene Supplies" },
                { href: "/services/landscaping-services", label: "Landscaping & Gardening" },
                { href: "/services/commercial", label: "Labour Outsourcing" },
              ].map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-add8e6 transition-all duration-300 flex items-center gap-2 group text-xs md:text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-add8e6/50 rounded-full group-hover:scale-150 transition-transform" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 md:space-y-5">
            <h3 className="text-base md:text-lg font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent flex items-center gap-2">
              <Sparkles className="w-4 h-4 md:h-4 md:w-4 text-add8e6" />
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 md:gap-4 group">
                <div className="bg-gray-800 p-2 md:p-2.5 rounded-xl group-hover:bg-add8e6/20 transition-all duration-300">
                  <MapPin className="h-4 w-4 md:h-4 md:w-4 text-add8e6" />
                </div>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors text-xs md:text-sm">
                  New Canon Towers, Moi Avenue, Mombasa
                </span>
              </li>
              <li className="flex items-center gap-3 md:gap-4 group">
                <div className="bg-gray-800 p-2 md:p-2.5 rounded-xl group-hover:bg-add8e6/20 transition-all duration-300">
                  <MapPin className="h-4 w-4 md:h-4 md:w-4 text-add8e6" />
                </div>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors text-xs md:text-sm">
                  P.O. Box 93169-80102, Mombasa
                </span>
              </li>
              <li className="flex items-center gap-3 md:gap-4 group">
                <div className="bg-gray-800 p-2 md:p-2.5 rounded-xl group-hover:bg-add8e6/20 transition-all duration-300">
                  <Phone className="h-4 w-4 md:h-4 md:w-4 text-add8e6" />
                </div>
                <a
                  href="tel:+254721525901"
                  className="text-gray-400 hover:text-add8e6 transition-colors text-xs md:text-sm"
                >
                  +254 721 525 901
                </a>
              </li>
              <li className="flex items-center gap-3 md:gap-4 group">
                <div className="bg-gray-800 p-2 md:p-2.5 rounded-xl group-hover:bg-add8e6/20 transition-all duration-300">
                  <Phone className="h-4 w-4 md:h-4 md:w-4 text-add8e6" />
                </div>
                <a
                  href="tel:+254412316600"
                  className="text-gray-400 hover:text-add8e6 transition-colors text-xs md:text-sm"
                >
                  041-2316600
                </a>
              </li>
              <li className="flex items-center gap-3 md:gap-4 group">
                <div className="bg-gray-800 p-2 md:p-2.5 rounded-xl group-hover:bg-add8e6/20 transition-all duration-300">
                  <Mail className="h-4 w-4 md:h-4 md:w-4 text-add8e6" />
                </div>
                <a
                  href="mailto:info@simcaagencies.com"
                  className="text-gray-400 hover:text-add8e6 transition-colors text-xs md:text-sm"
                >
                  info@simcaagencies.com
                </a>
              </li>
              <li className="flex items-center gap-3 md:gap-4 group">
                <div className="bg-gray-800 p-2 md:p-2.5 rounded-xl group-hover:bg-add8e6/20 transition-all duration-300">
                  <Mail className="h-4 w-4 md:h-4 md:w-4 text-add8e6" />
                </div>
                <a
                  href="mailto:simka1974@hotmail.com"
                  className="text-gray-400 hover:text-add8e6 transition-colors text-xs md:text-sm"
                >
                  simka1974@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-5 md:my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 relative">
          <p className="text-gray-400 text-xs text-center md:text-left">
            &copy; {currentYear} Simca Agencies Company. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm text-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            Proudly powered by{" "}
            <a
              href="https://tedsimwa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-add8e6 transition-colors font-medium uppercase"
            >
              Ted Simwa
            </a>
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </footer>
  )
}
