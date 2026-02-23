import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock, Youtube, Sparkles, ArrowRight, Download } from "lucide-react"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-3 md:space-y-5">
            <div className="flex items-center gap-3 md:gap-4">
              <Logo className="w-60 h-12 md:w-60 md:h-30 transition-transform duration-300 group-hover:scale-105" variant="white" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Kenya's trusted professional cleaning company since 2005. We serve hospitals, hotels, government offices, and industrial facilities with trained teams and modern equipment.
            </p>
            {/* Download Company Profile */}
            <a
              href="/company-profile.pdf"
              download
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 font-semibold transition-all duration-300 text-sm tracking-wide rounded-lg shadow-md hover:shadow-lg"
            >
              <Download className="w-4 h-4" />
              Download Company Profile
            </a>
            <div className="flex gap-3 md:gap-4 pt-2">
              {[
                { icon: Facebook, href: "https://facebook.com/simcaagencies", label: "Facebook" },
                { icon: Twitter, href: "https://twitter.com/simcaagencies", label: "Twitter" },
                { icon: Instagram, href: "https://instagram.com/simcaagencies", label: "Instagram" },
                { icon: Linkedin, href: "https://linkedin.com/company/simcaagencies", label: "LinkedIn" },
                { icon: Youtube, href: "https://youtube.com/simcaagencies", label: "YouTube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
            <h3 className="text-base md:text-lg font-semibold text-white">
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
            <h3 className="text-base md:text-lg font-semibold text-white">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/services/contract-cleaning", label: "Contract Cleaning" },
                { href: "/services/specialized", label: "Specialized Cleaning" },
                { href: "/services/hygiene-supplies", label: "Hygiene Supplies" },
                { href: "/services/landscaping-services", label: "Landscaping & Gardening" },
                { href: "/services/labour-outsourcing", label: "Labour Outsourcing" },
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

          {/* Contact & Hours */}
          <div className="space-y-3 md:space-y-5">
            <h3 className="text-base md:text-lg font-semibold text-white">
              Contact Us
            </h3>
            <ul className="space-y-4 md:space-y-5">
              <li className="flex items-start gap-3 md:gap-4 group">
                <div className="bg-gray-800 p-2 md:p-2.5 rounded-xl group-hover:bg-add8e6/20 transition-all duration-300 flex-shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 md:h-4 md:w-4 text-add8e6" />
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors text-xs md:text-sm flex flex-col gap-1">
                  <p>New Canon Towers,</p>
                  <p>Moi Avenue, Mombasa</p>
                  <p className="mt-1">P.O. Box 93169-80102</p>
                </div>
              </li>
              <li className="flex items-center gap-3 md:gap-4 group">
                <div className="bg-gray-800 p-2 md:p-2.5 rounded-xl group-hover:bg-add8e6/20 transition-all duration-300 flex-shrink-0">
                  <Phone className="h-4 w-4 md:h-4 md:w-4 text-add8e6" />
                </div>
                <div className="flex flex-col gap-1">
                  <a href="tel:+254721525901" className="text-gray-400 hover:text-add8e6 transition-colors text-xs md:text-sm">
                    +254 721 525 901
                  </a>
                  <a href="tel:+254412316600" className="text-gray-400 hover:text-add8e6 transition-colors text-xs md:text-sm">
                    041-2316600
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 md:gap-4 group">
                <div className="bg-gray-800 p-2 md:p-2.5 rounded-xl group-hover:bg-add8e6/20 transition-all duration-300 flex-shrink-0">
                  <Mail className="h-4 w-4 md:h-4 md:w-4 text-add8e6" />
                </div>
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@simca-agencies.com" className="text-gray-400 hover:text-add8e6 transition-colors text-xs md:text-sm">
                    info@simca-agencies.com
                  </a>
                  <a href="mailto:simka1974@hotmail.com" className="text-gray-400 hover:text-add8e6 transition-colors text-xs md:text-sm">
                    simka1974@hotmail.com
                  </a>
                </div>
              </li>
              {/* Operating Hours */}
              <li className="flex items-start gap-3 md:gap-4 group pt-2">
                <div className="bg-gray-800 p-2 md:p-2.5 rounded-xl group-hover:bg-add8e6/20 transition-all duration-300 flex-shrink-0 mt-0.5">
                  <Clock className="h-4 w-4 md:h-4 md:w-4 text-add8e6" />
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors text-xs md:text-sm flex flex-col gap-1">
                  <p className="font-medium text-white">Operating Hours</p>
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 8:00 AM - 2:00 PM</p>
                  <p>24/7 Emergency Services</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-5 md:my-6" />

        {/* CTA Section - Before Copyright */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-6 md:p-8 mb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                Ready for a Cleaner Space?
              </h3>
              <p className="text-gray-400 text-sm">
                Get a free quote or call us directly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact#contact-form"
                className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 font-semibold transition-all duration-300 text-sm tracking-wide rounded-lg shadow-lg hover:shadow-xl min-w-[180px]"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+254721525901"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 font-semibold transition-all duration-300 text-sm tracking-wide rounded-lg shadow-lg hover:shadow-xl min-w-[180px]"
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 relative">
          <p className="text-gray-400 text-xs text-center md:text-left">
            &copy; {currentYear} Simca Agencies Company. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm text-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            Proudly powered by{" "}
            <a
              href="https://portfolio-website-flax-sigma-29.vercel.app/"
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
