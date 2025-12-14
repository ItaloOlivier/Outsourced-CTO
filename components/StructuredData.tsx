export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.outsourcedcto.co.za/#organization",
    "name": "Outsourced CTO",
    "alternateName": "Outsourced CTO (Pty) Ltd",
    "url": "https://www.outsourcedcto.co.za",
    "logo": "https://www.outsourcedcto.co.za/images/logo.png",
    "description": "South African IT consulting company providing outsourced Chief Technology Officer services, digital transformation, IT recruitment, and digital marketing.",
    "foundingDate": "2014",
    "slogan": "Master your strengths. Outsource your weaknesses.",
    "email": "info@outsourcedcto.co.za",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Palazzo Towers West, William Nicol Drive",
      "addressLocality": "Fourways",
      "addressRegion": "Gauteng",
      "postalCode": "2086",
      "addressCountry": "ZA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -26.0241,
      "longitude": 28.0139
    },
    "areaServed": {
      "@type": "Country",
      "name": "South Africa"
    },
    "sameAs": [
      "https://za.linkedin.com/company/outsourcedcto"
    ],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 51,
      "maxValue": 200
    },
    "knowsAbout": [
      "Digital Transformation",
      "IT Consulting",
      "Business Architecture",
      "Project Management",
      "IT Recruitment",
      "Digital Marketing",
      "Change Management",
      "Agile Methodologies",
      "SCRUM",
      "SAFe"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.outsourcedcto.co.za/#localbusiness",
    "name": "Outsourced CTO",
    "image": "https://www.outsourcedcto.co.za/images/logo.png",
    "url": "https://www.outsourcedcto.co.za",
    "telephone": "",
    "email": "info@outsourcedcto.co.za",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Palazzo Towers West, William Nicol Drive",
      "addressLocality": "Fourways",
      "addressRegion": "Gauteng",
      "postalCode": "2086",
      "addressCountry": "ZA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -26.0241,
      "longitude": 28.0139
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.outsourcedcto.co.za/#website",
    "url": "https://www.outsourcedcto.co.za",
    "name": "Outsourced CTO",
    "description": "Your Partner In IT Innovation - Outsourced CTO services in South Africa",
    "publisher": {
      "@id": "https://www.outsourcedcto.co.za/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.outsourcedcto.co.za/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface ServiceSchemaProps {
  name: string
  description: string
  url: string
}

export function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    "provider": {
      "@id": "https://www.outsourcedcto.co.za/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "South Africa"
    },
    "serviceType": "IT Consulting"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
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
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
