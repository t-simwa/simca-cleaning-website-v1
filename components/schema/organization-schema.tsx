/**
 * Organization & LocalBusiness Schema Component
 * Provides structured data for AI search engines (GEO)
 */

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://simca-agencies.com/#organization",
        "name": "Simca Agencies Ltd",
        "alternateName": ["SIMCA Agencies Limited", "Simca Agencies", "SIMCA"],
        "url": "https://simca-agencies.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://simca-agencies.com/simca-logo.png",
          "width": 512,
          "height": 512
        },
        "image": "https://simca-agencies.com/simca-logo.png",
        "description": "Professional cleaning company in Kenya offering contract cleaning, specialized cleaning, hygiene supplies, landscaping, and labour outsourcing services since 2005.",
        "foundingDate": "2005",
        "founder": {
          "@type": "Person",
          "name": "David Simwa"
        },
        "telephone": "+254721525901",
        "email": "info@simca-agencies.com",
        "sameAs": [
          "https://www.facebook.com/simcaagencies",
          "https://www.instagram.com/simcaagencies",
          "https://www.tiktok.com/@simcaagencies"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "New Canon Towers, Moi Avenue",
          "addressLocality": "Mombasa",
          "addressRegion": "Mombasa County",
          "postalCode": "80102",
          "addressCountry": "KE"
        },
        "areaServed": [
          {
            "@type": "Country",
            "name": "Kenya"
          },
          {
            "@type": "City",
            "name": "Mombasa"
          },
          {
            "@type": "City",
            "name": "Kisumu"
          },
          {
            "@type": "City",
            "name": "Lamu"
          },
          {
            "@type": "City",
            "name": "Lodwar"
          },
          {
            "@type": "City",
            "name": "Kaimosi"
          }
        ],
        "knowsAbout": [
          "Contract Cleaning",
          "Commercial Cleaning",
          "Hospital Cleaning",
          "Hotel Cleaning",
          "Industrial Cleaning",
          "Specialized Cleaning",
          "Carpet Cleaning",
          "Window Cleaning",
          "Post-Construction Cleaning",
          "Fumigation",
          "Pest Control",
          "Hygiene Supplies",
          "Landscaping",
          "Labour Outsourcing"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://simca-agencies.com/#localbusiness",
        "name": "Simca Agencies Ltd - Mombasa Headquarters",
        "image": "https://simca-agencies.com/simca-logo.png",
        "url": "https://simca-agencies.com",
        "telephone": "+254721525901",
        "email": "info@simca-agencies.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "New Canon Towers, Moi Avenue",
          "addressLocality": "Mombasa",
          "addressRegion": "Mombasa County",
          "postalCode": "80102",
          "addressCountry": "KE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -4.0434771,
          "longitude": 39.6682065
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "07:00",
            "closes": "17:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "07:00",
            "closes": "14:00"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Professional Cleaning Services",
          "itemListElement": [
            {
              "@type": "OfferCatalog",
              "name": "Contract Cleaning",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hospital Cleaning" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hotel Cleaning" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Cleaning" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial Cleaning" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "School Cleaning" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Government Office Cleaning" } }
              ]
            },
            {
              "@type": "OfferCatalog",
              "name": "Specialized Cleaning",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Carpet Cleaning" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Upholstery Cleaning" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Window Cleaning" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Post-Construction Cleaning" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Floor Strip and Seal" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "High-Pressure Cleaning" } }
              ]
            },
            {
              "@type": "OfferCatalog",
              "name": "Additional Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hygiene Supplies" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fumigation and Pest Control" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landscaping and Gardening" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Labour Outsourcing" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sanitary Bin Services" } }
              ]
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "150",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://simca-agencies.com/#website",
        "url": "https://simca-agencies.com",
        "name": "Simca Agencies Ltd",
        "description": "Professional Cleaning Services in Kenya",
        "publisher": {
          "@id": "https://simca-agencies.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://simca-agencies.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
