import Hero from "@/components/home/hero"
import ServicesOverview from "@/components/home/services-overview"
import ServiceAreas from "@/components/home/service-areas"
import Testimonials from "@/components/home/testimonials"
import ContactForm from "@/components/home/contact-form"
import WhyChooseUs from "@/components/home/why-choose-us"
import TrustedClients from "@/components/trusted-clients"
import StatsCounter from "@/components/stats-counter"
import TikTokFeed from "@/components/instagram-feed"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import FAQ from "@/components/home/faq"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section - Full width with gradient */}
      <div className="relative">
      <Hero />
        {/* Section Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />
      </div>
      {/* Services Overview - White with gradient */}
      <ScrollAnimation>
        <div className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#add8e6_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
        <ServicesOverview />
          {/* Section Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />
        </div>
      </ScrollAnimation>
      
      {/* Why Choose Us - White with diagonal pattern */}
      <ScrollAnimation>
        <div className="relative bg-white dark:bg-gray-900">
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,#add8e6_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
        <WhyChooseUs />
          {/* Section Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />
        </div>
      </ScrollAnimation>

      {/* Trusted Clients - Light gray with subtle pattern */}
      <ScrollAnimation>
        <div className="relative bg-gray-50 dark:bg-gray-800/50">
          <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px] opacity-5" />
        <TrustedClients />
          {/* Section Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />
        </div>
      </ScrollAnimation>

      {/* Stats Counter - Light blue tint */}
      <ScrollAnimation>
        <div className="relative bg-add8e6/5 dark:bg-add8e6/10">
          <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:24px_24px] opacity-5" />
        <StatsCounter />
          {/* Section Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />
        </div>
      </ScrollAnimation>
       
       {/* Testimonials - White with subtle gradient */}
      <ScrollAnimation>
        <div className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#add8e6_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
        <Testimonials />
          {/* Section Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />
        </div>
      </ScrollAnimation>

      {/* Service Areas - Light gray with dots */}
      <ScrollAnimation>
        <div className="relative bg-gray-50 dark:bg-gray-800/50">
          <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px] opacity-5" />
        <ServiceAreas />
          {/* Section Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />
        </div>
      </ScrollAnimation>

      {/* FAQ Section - Styled to match other sections */}
      <ScrollAnimation>
        <div className="relative bg-gray-50 dark:bg-gray-800/50">
          <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:16px_16px] opacity-5" />
        <FAQ />
          {/* Section Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />
        </div>
      </ScrollAnimation>

      {/* TikTok Feed - Light blue tint */}
      <ScrollAnimation>
        <div className="relative bg-add8e6/5 dark:bg-add8e6/10">
          <div className="absolute inset-0 bg-[radial-gradient(#add8e6_1px,transparent_1px)] [background-size:24px_24px] opacity-5" />
        <TikTokFeed />
          {/* Section Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-add8e6/50 to-transparent" />
        </div>
      </ScrollAnimation>

      {/* Contact Form - White with diagonal pattern */}
      <ScrollAnimation>
        <div className="relative bg-white dark:bg-gray-900">
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,#add8e6_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
        <ContactForm />
        </div>
      </ScrollAnimation>
    </div>
  )
}
