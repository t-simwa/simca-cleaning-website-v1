/**
 * Breadcrumb Schema Component
 * Provides structured data for site navigation hierarchy
 */

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `https://simca-agencies.com${item.url}`
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Pre-configured breadcrumb paths for common pages
export const breadcrumbConfigs = {
  home: [
    { name: "Home", url: "/" }
  ],
  services: [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" }
  ],
  contractCleaning: [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Contract Cleaning", url: "/services/contract-cleaning" }
  ],
  specializedCleaning: [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Specialized Cleaning", url: "/services/specialized" }
  ],
  hygieneSupplies: [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Hygiene Supplies", url: "/services/hygiene-supplies" }
  ],
  landscaping: [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Landscaping Services", url: "/services/landscaping-services" }
  ],
  labourOutsourcing: [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Labour Outsourcing", url: "/services/labour-outsourcing" }
  ],
  fumigation: [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Fumigation & Pest Control", url: "/services/fumigation-pest-control" }
  ],
  postConstruction: [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Post-Construction Cleaning", url: "/services/post-construction" }
  ],
  carpetCleaning: [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Carpet & Upholstery Cleaning", url: "/services/carpet-upholstery" }
  ],
  windowCleaning: [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Window Cleaning", url: "/services/window" }
  ],
  locations: [
    { name: "Home", url: "/" },
    { name: "Locations", url: "/locations" }
  ],
  about: [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" }
  ],
  contact: [
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" }
  ],
  blog: [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" }
  ],
  gallery: [
    { name: "Home", url: "/" },
    { name: "Gallery", url: "/gallery" }
  ]
}
