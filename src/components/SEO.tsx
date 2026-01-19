import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
}

export function SEO({ title, description, keywords }: SEOProps) {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    if (description) {
      metaDescription.setAttribute('content', description);
    }

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    if (keywords && keywords.length > 0) {
      metaKeywords.setAttribute('content', keywords.join(', '));
    }

    // Add Open Graph meta tags
    const updateOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    if (title) updateOGTag('og:title', title);
    if (description) updateOGTag('og:description', description);
    updateOGTag('og:type', 'website');

    // Add structured data for local business
    let scriptTag = document.querySelector('#structured-data');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('id', 'structured-data');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Jovy Thomas Visuals",
      "image": "https://static.wixstatic.com/media/41d000_5444db7dae645ab535e3309351fa836c.png",
      "description": "Professional family, portrait, maternity, and kids photographer serving Hendersonville, Gallatin, and Tennessee. Specializing in outdoor photography and fashion portfolios.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hendersonville",
        "addressRegion": "TN",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "36.3047",
        "longitude": "-86.6200"
      },
      "url": window.location.origin,
      "telephone": "+1-XXX-XXX-XXXX",
      "priceRange": "$$",
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "36.3047",
          "longitude": "-86.6200"
        },
        "geoRadius": "50000"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Photography Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Family Photography",
              "description": "Professional family portrait photography in Tennessee and Gallatin"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Kids Photography",
              "description": "Child and kids portrait photography in Gallatin and Tennessee"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Maternity Photography",
              "description": "Maternity and pregnancy photography in Tennessee"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Portrait Photography",
              "description": "Professional portrait photography in Hendersonville and Gallatin"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Outdoor Photography",
              "description": "Outdoor and natural light photography in Tennessee"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Fashion Portfolio Photography",
              "description": "Fashion and portfolio photography in Gallatin"
            }
          }
        ]
      }
    };

    scriptTag.textContent = JSON.stringify(structuredData);
  }, [title, description, keywords]);

  return null;
}
