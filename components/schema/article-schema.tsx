/**
 * Article Schema Component
 * Provides structured data for blog articles and how-to guides
 */

interface ArticleSchemaProps {
  title: string
  description: string
  url: string
  image: string
  datePublished: string
  dateModified?: string
  author?: string
  category?: string
}

export default function ArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author = "Simca Team",
  category = "Cleaning Tips"
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image.startsWith("http") ? image : `https://simca-agencies.com${image}`,
    "url": url.startsWith("http") ? url : `https://simca-agencies.com${url}`,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": author === "Simca Team" ? "Simca Agencies Ltd" : author,
      "@id": "https://simca-agencies.com/#organization"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://simca-agencies.com/#organization",
      "name": "Simca Agencies Ltd",
      "logo": {
        "@type": "ImageObject",
        "url": "https://simca-agencies.com/simca-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url.startsWith("http") ? url : `https://simca-agencies.com${url}`
    },
    "articleSection": category,
    "inLanguage": "en-KE"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * HowTo Schema Component
 * For step-by-step guides and tutorials (great for AI search)
 */

interface HowToStep {
  name: string
  text: string
  image?: string
}

interface HowToSchemaProps {
  title: string
  description: string
  url: string
  image: string
  steps: HowToStep[]
  totalTime?: string // ISO 8601 duration format, e.g., "PT30M" for 30 minutes
}

export function HowToSchema({
  title,
  description,
  url,
  image,
  steps,
  totalTime
}: HowToSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "description": description,
    "image": image.startsWith("http") ? image : `https://simca-agencies.com${image}`,
    "url": url.startsWith("http") ? url : `https://simca-agencies.com${url}`,
    "totalTime": totalTime,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "image": step.image ? (step.image.startsWith("http") ? step.image : `https://simca-agencies.com${step.image}`) : undefined
    })),
    "author": {
      "@type": "Organization",
      "@id": "https://simca-agencies.com/#organization"
    }
  }

  // Remove undefined fields
  const cleanSchema = JSON.parse(JSON.stringify(schema))

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanSchema) }}
    />
  )
}

// Example blog articles with schema-ready data
export const blogArticleConfigs = {
  healthcareCleaning: {
    title: "Contract Cleaning for Healthcare Facilities: Best Practices",
    description: "Essential protocols and standards for maintaining hygiene in hospitals and clinics. Learn how professional contract cleaning protects patients and staff.",
    url: "/blog/contract-cleaning-healthcare",
    image: "/blog/office-cleaning.jpg",
    datePublished: "2026-01-15",
    category: "Contract Cleaning"
  },
  ohsCompliance: {
    title: "Why OHS Compliance Matters in Professional Cleaning",
    description: "Understanding Occupational Health and Safety standards in the cleaning industry. How compliance protects your staff and clients.",
    url: "/blog/ohs-compliance-cleaning",
    image: "/blog/cleaning-services.png",
    datePublished: "2026-01-08",
    category: "Professional Tips"
  },
  floorStripSeal: {
    title: "The Complete Guide to Floor Strip and Seal",
    description: "Professional insights into strip and seal services. Learn when your floors need this treatment and what to expect from the process.",
    url: "/blog/floor-strip-seal-guide",
    image: "/blog/carpet-cleaning.jpg",
    datePublished: "2025-12-20",
    category: "Specialized Cleaning"
  },
  ecoFriendly: {
    title: "Eco-Friendly Cleaning Products: Better for Your Facility",
    description: "How modern eco-friendly cleaning products deliver superior results while protecting the environment and building occupant health.",
    url: "/blog/eco-friendly-cleaning",
    image: "/blog/eco-friendly.jpg",
    datePublished: "2025-12-10",
    category: "Eco-Friendly"
  },
  postConstruction: {
    title: "Post-Construction Cleaning: What Facility Managers Need to Know",
    description: "A comprehensive guide to post-construction cleaning for commercial and institutional buildings. Essential steps for a safe handover.",
    url: "/blog/post-construction-cleaning-guide",
    image: "/blog/post-construction.jpeg",
    datePublished: "2025-11-25",
    category: "Specialized Cleaning"
  },
  hygieneSupplies: {
    title: "Hygiene Supplies: Choosing the Right Solutions for Your Facility",
    description: "From soap dispensers to sanitary bins, learn how to select and maintain hygiene supplies that meet your facility's needs.",
    url: "/blog/choosing-hygiene-supplies",
    image: "/blog/spring-cleaning.jpg",
    datePublished: "2025-11-15",
    category: "Hygiene"
  }
}
