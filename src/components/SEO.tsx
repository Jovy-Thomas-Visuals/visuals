import { useEffect } from "react";

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
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    if (description) {
      metaDescription.setAttribute("content", description);
    }

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    if (keywords && keywords.length > 0) {
      metaKeywords.setAttribute("content", keywords.join(", "));
    }

    // Add Open Graph meta tags
    const updateOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    if (title) updateOGTag("og:title", title);
    if (description) updateOGTag("og:description", description);
    updateOGTag("og:type", "website");
    updateOGTag("og:site_name", "Jovy Thomas Visuals");

    // Add Twitter meta tags
    const updateTwitterTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    updateTwitterTag("twitter:card", "summary_large_image");
    if (title) updateTwitterTag("twitter:title", title);
    if (description) updateTwitterTag("twitter:description", description);

    // Add structured data for local business (Photographer schema)
    let scriptTag = document.querySelector("#structured-data");
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.setAttribute("id", "structured-data");
      scriptTag.setAttribute("type", "application/ld+json");
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Photographer",
      name: "Jovy Thomas Visuals",
      image:
        "https://static.wixstatic.com/media/41d000_5444db7dae645ab535e3309351fa836c.png",
      description:
        "Award-winning professional family, portrait, maternity, kids, and event photographer serving Nashville, Hendersonville, Gallatin, and Middle Tennessee. Specializing in outdoor natural light photography, fine art portraits, and fashion portfolios.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hendersonville",
        addressRegion: "TN",
        postalCode: "37075",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "36.3047",
        longitude: "-86.6200",
      },
      url: window.location.origin,
      telephone: "+1-629-308-4828",
      email: "Jovy.thomas@gmail.com",
      priceRange: "$$",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Nashville",
          containedInPlace: {
            "@type": "State",
            name: "Tennessee",
          },
        },
        {
          "@type": "City",
          name: "Hendersonville",
          containedInPlace: {
            "@type": "State",
            name: "Tennessee",
          },
        },
        {
          "@type": "City",
          name: "Gallatin",
          containedInPlace: {
            "@type": "State",
            name: "Tennessee",
          },
        },
        {
          "@type": "City",
          name: "Mount Juliet",
          containedInPlace: {
            "@type": "State",
            name: "Tennessee",
          },
        },
        {
          "@type": "City",
          name: "Goodlettsville",
          containedInPlace: {
            "@type": "State",
            name: "Tennessee",
          },
        },
        {
          "@type": "City",
          name: "Lebanon",
          containedInPlace: {
            "@type": "State",
            name: "Tennessee",
          },
        },
        {
          "@type": "City",
          name: "Franklin",
          containedInPlace: {
            "@type": "State",
            name: "Tennessee",
          },
        },
        {
          "@type": "City",
          name: "Brentwood",
          containedInPlace: {
            "@type": "State",
            name: "Tennessee",
          },
        },
        {
          "@type": "AdministrativeArea",
          name: "Middle Tennessee",
        },
      ],
      serviceArea: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: "36.3047",
          longitude: "-86.6200",
        },
        geoRadius: "80000",
      },
      knowsAbout: [
        "Family Photography",
        "Kids Photography",
        "Child Portraits",
        "Maternity Photography",
        "Portrait Photography",
        "Outdoor Photography",
        "Natural Light Photography",
        "Fine Art Portraits",
        "Fashion Portfolio Photography",
        "Small Event Photography",
        "Birthday Party Photography",
        "Newborn Photography",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Photography Packages",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Express Photo Session",
              description:
                "Quick 10-minute photo session with 2 carefully edited digital pictures. Perfect for headshots, quick portraits, or social media photos in Nashville, Hendersonville, and Gallatin, TN.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "50",
              priceCurrency: "USD",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Regular Photo Session",
              description:
                "Comprehensive 1.5 hour photo session with 15 basic edited and 5 advanced edited digital images. Ideal for family, kids, maternity, and portrait photography in Nashville, Hendersonville, Gallatin, and Middle Tennessee.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "250",
              priceCurrency: "USD",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Small Event Photography",
              description:
                "Birthday party, celebration, and small event photography in Nashville, Hendersonville, Gallatin area",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "150",
              priceCurrency: "USD",
              unitText: "per hour",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Additional Edited Photo",
              description: "Extra edited pictures beyond package inclusions",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "18",
              priceCurrency: "USD",
              unitText: "per photo",
            },
          },
        ],
      },
      award: [
        "NPS Highly Commended Award",
        "Portrait Masters Bronze Award 2021",
        "GLOW Finalist Award",
      ],
      sameAs: [],
    };

    scriptTag.textContent = JSON.stringify(structuredData);
  }, [title, description, keywords]);

  return null;
}
