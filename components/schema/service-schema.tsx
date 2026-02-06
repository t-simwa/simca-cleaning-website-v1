/**
 * Service Schema Component
 * Provides structured data for individual service pages
 */

interface ServiceSchemaProps {
  serviceName: string
  serviceType: string
  description: string
  url: string
  image?: string
  areaServed?: string[]
  features?: string[]
}

export default function ServiceSchema({
  serviceName,
  serviceType,
  description,
  url,
  image = "https://simca-agencies.com/simca-logo.png",
  areaServed = ["Mombasa", "Kisumu", "Lamu", "Lodwar", "Kaimosi", "Kenya"],
  features = []
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://simca-agencies.com${url}#service`,
    "name": serviceName,
    "serviceType": serviceType,
    "description": description,
    "url": `https://simca-agencies.com${url}`,
    "image": image,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://simca-agencies.com/#localbusiness",
      "name": "Simca Agencies Ltd",
      "telephone": "+254721525901",
      "email": "info@simca-agencies.com"
    },
    "areaServed": areaServed.map(area => ({
      "@type": area === "Kenya" ? "Country" : "City",
      "name": area
    })),
    "hasOfferCatalog": features.length > 0 ? {
      "@type": "OfferCatalog",
      "name": `${serviceName} Features`,
      "itemListElement": features.map(feature => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        }
      }))
    } : undefined,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "KES",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "KES",
        "eligibleQuantity": {
          "@type": "QuantitativeValue",
          "value": 1
        }
      }
    },
    "termsOfService": "https://simca-agencies.com/terms",
    "potentialAction": {
      "@type": "OrderAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://simca-agencies.com/contact",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Order",
        "orderStatus": "https://schema.org/OrderProcessing"
      }
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

// Pre-configured service schemas for common services
export const serviceConfigs = {
  contractCleaning: {
    serviceName: "Contract Cleaning Services in Kenya",
    serviceType: "Contract Cleaning",
    description: "Professional contract cleaning services for hospitals, hotels, offices, schools, government institutions, and industrial facilities across Kenya. OHS compliant with trained staff.",
    url: "/services/contract-cleaning",
    features: [
      "Hospital Cleaning",
      "Hotel Cleaning",
      "Office Cleaning",
      "School Cleaning",
      "Government Office Cleaning",
      "Industrial Premises Cleaning"
    ]
  },
  specializedCleaning: {
    serviceName: "Specialized Cleaning Services in Kenya",
    serviceType: "Specialized Cleaning",
    description: "Expert specialized cleaning including carpet cleaning, window cleaning, floor strip and seal, post-construction cleaning, and high-pressure cleaning services.",
    url: "/services/specialized",
    features: [
      "Carpet Deep Cleaning",
      "Upholstery Cleaning",
      "Window and Facade Cleaning",
      "Floor Strip and Seal",
      "Post-Construction Cleaning",
      "High-Pressure Cleaning"
    ]
  },
  hygieneSupplies: {
    serviceName: "Hygiene Supplies in Kenya",
    serviceType: "Hygiene Products & Services",
    description: "Complete hygiene supply solutions including soap dispensers, towel dispensers, sanitary bins, air fresheners, sanitizers, and consumables for commercial facilities.",
    url: "/services/hygiene-supplies",
    features: [
      "Soap Dispensers",
      "Towel Dispensers",
      "Sanitary Bins",
      "Air Fresheners",
      "Hand Sanitizers",
      "Toilet Paper & Consumables"
    ]
  },
  landscaping: {
    serviceName: "Landscaping & Gardening Services in Kenya",
    serviceType: "Landscaping",
    description: "Professional landscaping and gardening services including grounds maintenance, office plant care, and garden design for commercial and institutional properties.",
    url: "/services/landscaping-services",
    features: [
      "Grounds Maintenance",
      "Office Plant Care",
      "Garden Design",
      "Lawn Care",
      "Tree Trimming"
    ]
  },
  labourOutsourcing: {
    serviceName: "Labour Outsourcing Services in Kenya",
    serviceType: "Staff Outsourcing",
    description: "Trained cleaning staff, machine operators, and support personnel for permanent or temporary placement. All staff are vetted Kenyan citizens.",
    url: "/services/labour-outsourcing",
    features: [
      "Trained Cleaning Staff",
      "Machine Operators",
      "Permanent Placement",
      "Temporary Recruitment",
      "Staff Training"
    ]
  },
  fumigation: {
    serviceName: "Fumigation & Pest Control Services in Kenya",
    serviceType: "Pest Control",
    description: "Professional fumigation and pest control services for residential, commercial, and industrial properties. Effective solutions for coastal and inland climates.",
    url: "/services/fumigation-pest-control",
    features: [
      "Commercial Fumigation",
      "Residential Pest Control",
      "Industrial Pest Management",
      "Termite Treatment",
      "Rodent Control"
    ]
  },
  postConstruction: {
    serviceName: "Post-Construction Cleaning in Kenya",
    serviceType: "Post-Construction Cleaning",
    description: "Comprehensive post-construction cleaning services for new buildings, renovations, and construction sites. Safe handover-ready cleaning.",
    url: "/services/post-construction",
    features: [
      "Debris Removal",
      "Dust Cleaning",
      "Window Cleaning",
      "Floor Cleaning",
      "Final Touch Cleaning"
    ]
  },
  carpetCleaning: {
    serviceName: "Carpet & Upholstery Cleaning in Kenya",
    serviceType: "Carpet Cleaning",
    description: "Professional carpet and upholstery deep cleaning using modern steam cleaning and extraction methods. Removes stains, allergens, and odors.",
    url: "/services/carpet-upholstery",
    features: [
      "Steam Cleaning",
      "Stain Removal",
      "Odor Treatment",
      "Upholstery Cleaning",
      "Fabric Protection"
    ]
  },
  windowCleaning: {
    serviceName: "Window Cleaning Services in Kenya",
    serviceType: "Window Cleaning",
    description: "Professional window and facade cleaning for commercial buildings, offices, and residential properties. Safe high-rise window cleaning available.",
    url: "/services/window",
    features: [
      "Commercial Window Cleaning",
      "High-Rise Window Cleaning",
      "Facade Cleaning",
      "Glass Restoration"
    ]
  }
}
