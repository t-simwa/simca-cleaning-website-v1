/**
 * FAQ Schema Component
 * Provides structured data for FAQ sections (FAQPage schema)
 */

interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  faqs: FAQItem[]
  pageUrl?: string
}

export default function FAQSchema({ faqs, pageUrl = "https://simcaagencies.com" }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })),
    "url": pageUrl
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Pre-configured FAQs for the homepage
export const homepageFAQs: FAQItem[] = [
  {
    question: "What cleaning services does Simca Agencies offer in Kenya?",
    answer: "Simca Agencies offers contract cleaning for hospitals, hotels, offices, and industrial facilities. We also provide specialized cleaning (carpet, window, post-construction), hygiene supplies, landscaping, and staff outsourcing services across Kenya."
  },
  {
    question: "What types of facilities does Simca Agencies serve?",
    answer: "We serve hospitals, hotels, government offices, schools, banks, shopping centres, and industrial premises across Kenya. Our clients include Kenya Ports Authority (KPA), Kenya Maritime Authority (KMA), and Mombasa Polytechnic University."
  },
  {
    question: "Are Simca Agencies staff trained and vetted?",
    answer: "Yes. All our staff are Kenyan citizens, carefully vetted, and professionally trained to meet the highest cleaning and safety standards. We provide regular training in customer care, equipment operation, and health & safety."
  },
  {
    question: "Is Simca Agencies insured?",
    answer: "Yes, we are fully insured with comprehensive coverage including public liability insurance, employer's liability, workman's compensation, and insurance against loss and damage to property."
  },
  {
    question: "How can I get a cleaning quote from Simca Agencies?",
    answer: "You can get a free, no-obligation quote by calling us at 0721 525 901, emailing info@simcaagencies.com, or filling out our online contact form. We respond quickly to all inquiries."
  },
  {
    question: "Where is Simca Agencies located?",
    answer: "Our headquarters is at New Canon Towers, Moi Avenue, Mombasa. We have been serving Kenya since 2005 with branch operations in Kisumu, Lamu, Lodwar, and Kaimosi."
  }
]

// Service-specific FAQs
export const contractCleaningFAQs: FAQItem[] = [
  {
    question: "What is contract cleaning?",
    answer: "Contract cleaning is an ongoing professional cleaning service where a company like Simca Agencies provides regular, scheduled cleaning for your facility. This includes daily maintenance, periodic deep cleaning, and specialized services based on your needs."
  },
  {
    question: "How much does contract cleaning cost in Kenya?",
    answer: "Contract cleaning costs vary based on facility size, cleaning frequency, and specific requirements. We provide customized quotes after assessing your facility. Contact us at 0721 525 901 for a free, no-obligation quote."
  },
  {
    question: "What is included in commercial office cleaning?",
    answer: "Our office cleaning includes daily sweeping and mopping, dusting of furniture and fixtures, bathroom sanitization, window cleaning, waste removal, and periodic deep cleaning services. We customize services to your specific needs."
  }
]

export const pestControlFAQs: FAQItem[] = [
  {
    question: "What pest control services does Simca Agencies offer in Mombasa?",
    answer: "We offer comprehensive fumigation and pest control services including treatment for cockroaches, termites, rodents, mosquitoes, and other pests. Our methods are effective for Mombasa's coastal climate conditions."
  },
  {
    question: "How often should commercial premises be fumigated in Kenya?",
    answer: "Commercial premises should typically be fumigated quarterly, though high-risk areas like food establishments and hospitals may require monthly treatments. We provide customized schedules based on your facility's needs."
  },
  {
    question: "Is fumigation safe for hospitals and food facilities?",
    answer: "Yes, we use approved, food-safe fumigation methods for sensitive environments. Our technicians are trained in healthcare and food industry safety standards, ensuring effective pest control without compromising safety."
  }
]
