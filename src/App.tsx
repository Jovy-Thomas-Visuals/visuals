import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Gallery } from "./components/Gallery";
import { GalleryPage } from "./components/GalleryPage";
import { SmallEventPhotography } from "./components/SmallEventPhotography";
import { Packages } from "./components/Packages";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { FAQs } from "./components/FAQs";
import { Mentions } from "./components/Mentions";
import { Blog } from "./components/Blog";
import { BlogPost } from "./components/BlogPost";
import { SEO } from "./components/SEO";

export default function App() {
  const [currentPage, setCurrentPage] = useState("HOME");
  const [selectedBlogPostId, setSelectedBlogPostId] = useState<string | null>(null);

  const handleSelectBlogPost = (postId: string) => {
    setSelectedBlogPostId(postId);
  };

  const handleBackToBlog = () => {
    setSelectedBlogPostId(null);
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    if (page === "Blog") {
      setSelectedBlogPostId(null);
    }
  };

  const getSEOData = () => {
    switch (currentPage) {
      case "GALLERY":
        return {
          title:
            "Photography Gallery | Jovy Thomas Visuals - Nashville, Hendersonville, Gallatin, TN",
          description:
            "Browse stunning photography by Jovy Thomas Visuals featuring family portraits, kids photography, maternity sessions, fine art portraits, and more. Award-winning photographer serving Nashville, Hendersonville, Gallatin, and Middle Tennessee.",
          keywords: [
            // Location-based keywords
            "photographer Nashville",
            "photographer Hendersonville",
            "photographer Gallatin",
            "photographer Tennessee",
            "Nashville photographer",
            "Hendersonville photographer",
            "Gallatin photographer",
            "Middle Tennessee photographer",
            // Service + Location combinations
            "family photographer Nashville",
            "family photographer Hendersonville",
            "family photographer Gallatin",
            "kids photographer Nashville",
            "kids photographer Hendersonville",
            "kids photographer Gallatin",
            "portrait photographer Nashville",
            "portrait photographer Hendersonville",
            "maternity photographer Nashville",
            "maternity photographer Tennessee",
            // General service keywords
            "photography gallery Tennessee",
            "fine art portraits",
            "outdoor photography",
            "Jovy Thomas Visuals",
          ],
        };
      case "SMALL EVENT PHOTOGRAPHY":
        return {
          title:
            "Small Event Photography | Jovy Thomas Visuals - Nashville, Hendersonville, Gallatin, TN",
          description:
            "Professional small event photography in Nashville, Hendersonville, and Gallatin, Tennessee. Capture birthdays, celebrations, baby showers, and intimate gatherings. $140/hour with 50+ professionally edited images.",
          keywords: [
            // Location-based event photography
            "event photographer Nashville",
            "event photographer Hendersonville",
            "event photographer Gallatin",
            "event photographer Tennessee",
            "small event photography Nashville",
            "small event photography Hendersonville",
            // Specific event types
            "birthday party photographer Nashville",
            "birthday photographer Hendersonville",
            "birthday photographer Gallatin",
            "celebration photographer Tennessee",
            "baby shower photographer Nashville",
            "baby shower photographer Hendersonville",
            "party photographer Tennessee",
            // General keywords
            "small gathering photographer",
            "intimate event photography",
            "event photographer near me",
            "Jovy Thomas Visuals",
          ],
        };
      case "PACKAGES":
        return {
          title:
            "Photography Packages | Jovy Thomas Visuals - Nashville, Hendersonville, Gallatin, TN",
          description:
            "Affordable photography packages starting at $50. Express sessions (10 min, 2 edited photos) and Regular sessions (1.5 hours, 20 edited photos). Professional photographer serving Nashville, Hendersonville, Gallatin, and Middle Tennessee.",
          keywords: [
            // Location-based package keywords
            "photography packages Nashville",
            "photography packages Hendersonville",
            "photography packages Gallatin",
            "photography packages Tennessee",
            "affordable photographer Nashville",
            "affordable photographer Hendersonville",
            // Package-specific keywords
            "express photo session Nashville",
            "quick photo session Tennessee",
            "mini photo session Hendersonville",
            "short photo session Gallatin",
            // Service + Location combinations
            "photo session Nashville",
            "photo session Hendersonville",
            "photo session Gallatin",
            "family photo session Nashville",
            "family photo session Hendersonville",
            "portrait session Tennessee",
            // General keywords
            "affordable photography packages",
            "professional photo session",
            "budget photography Nashville",
            "Jovy Thomas Visuals",
          ],
        };
      case "ABOUT ME":
        return {
          title:
            "About Jovy Thomas | Award-Winning Photographer - Nashville, Hendersonville, Gallatin, TN",
          description:
            "Meet Jovy Thomas, an award-winning professional photographer specializing in family, kids, maternity, and portrait photography. NPS Highly Commended and Portrait Masters Bronze Award winner. Serving Nashville, Hendersonville, Gallatin, and Middle Tennessee.",
          keywords: [
            // Location-based keywords
            "photographer Nashville",
            "photographer Hendersonville",
            "photographer Gallatin",
            "photographer Tennessee",
            "Nashville photographer",
            "Hendersonville photographer",
            "Gallatin photographer",
            "Middle Tennessee photographer",
            // Service + Location combinations
            "family photographer Nashville",
            "family photographer Hendersonville",
            "family photographer Gallatin",
            "kids photographer Nashville",
            "kids photographer Hendersonville",
            "child photographer Tennessee",
            "portrait photographer Nashville",
            "portrait photographer Hendersonville",
            "maternity photographer Nashville",
            "maternity photographer Hendersonville",
            "outdoor photographer Tennessee",
            "fashion portfolio photographer Nashville",
            // Award and brand keywords
            "award winning photographer Tennessee",
            "NPS highly commended photographer",
            "Portrait Masters award photographer",
            "Jovy Thomas Visuals",
            "Jovy Thomas photographer",
          ],
        };
      case "CONTACT":
        return {
          title:
            "Contact | Jovy Thomas Visuals - Book Your Photography Session in Nashville, Hendersonville, Gallatin",
          description:
            "Contact Jovy Thomas Visuals to book your family, kids, maternity, or portrait photography session. Call 629-308-4828 or email Jovy.thomas@gmail.com. Serving Nashville, Hendersonville, Gallatin, and Middle Tennessee.",
          keywords: [
            // Contact + Location keywords
            "contact photographer Nashville",
            "contact photographer Hendersonville",
            "contact photographer Gallatin",
            "book photographer Nashville",
            "book photographer Hendersonville",
            "book photographer Gallatin",
            "book photography session Tennessee",
            // Service booking keywords
            "book family photographer Nashville",
            "book kids photographer Hendersonville",
            "book maternity photographer Tennessee",
            "book portrait session Gallatin",
            "photography inquiry Nashville",
            "photography inquiry Hendersonville",
            // General keywords
            "hire photographer Tennessee",
            "photography booking Middle Tennessee",
            "Jovy Thomas Visuals contact",
          ],
        };
      case "FAQs":
        return {
          title: "Photography FAQs | Jovy Thomas Visuals - Nashville, Hendersonville, Gallatin, TN",
          description:
            "Find answers to frequently asked questions about photography sessions, packages, pricing, and services. Outdoor natural light portraits in Nashville, Hendersonville, Gallatin, and Middle Tennessee.",
          keywords: [
            // FAQ + Location keywords
            "photography FAQ Nashville",
            "photography FAQ Hendersonville",
            "photography FAQ Tennessee",
            "photographer questions Nashville",
            // Service-specific FAQ keywords
            "family photography questions",
            "portrait photography questions",
            "maternity photography info",
            "kids photography session info",
            "outdoor photography FAQ",
            // General keywords
            "photography session duration",
            "digital images photography",
            "photography pricing Tennessee",
            "what to wear photo session",
            "photo session preparation",
            "Jovy Thomas Visuals",
          ],
        };
      case "MENTIONS":
        return {
          title: "Awards & Features | Jovy Thomas Visuals - Award-Winning Tennessee Photographer",
          description:
            "Awards and features including NPS Highly Commended, Portrait Masters Bronze Award, GLOW Finalist, DSLR Official, Affinity Photo, Air India Magazine, and more. Award-winning photographer serving Nashville, Hendersonville, and Gallatin, Tennessee.",
          keywords: [
            // Award keywords
            "award winning photographer Nashville",
            "award winning photographer Tennessee",
            "NPS highly commended photographer",
            "Portrait Masters Bronze Award",
            "GLOW finalist photographer",
            "featured photographer Tennessee",
            "published photographer Nashville",
            // Location-based award keywords
            "best photographer Nashville",
            "best photographer Hendersonville",
            "best photographer Gallatin",
            "top photographer Tennessee",
            // Recognition keywords
            "IAPCP photographer",
            "photography awards Tennessee",
            "professional photographer recognition",
            "Jovy Thomas Visuals awards",
          ],
        };
      case "Blog":
        if (selectedBlogPostId) {
          return {
            title:
              "Photography Blog | Jovy Thomas Visuals - Nashville, Hendersonville, Gallatin, TN",
            description:
              "Read photography tips, behind-the-scenes stories, and creative inspiration from Jovy Thomas, award-winning photographer serving Nashville, Hendersonville, Gallatin, and Middle Tennessee.",
            keywords: [
              "photography blog Nashville",
              "photography blog Tennessee",
              "photography tips",
              "behind the scenes photography",
              "photographer stories Nashville",
              "portrait photography tips",
              "family photography tips",
              "maternity photography tips",
              "kids photography tips",
              "outdoor photography tips",
              "Jovy Thomas Visuals blog",
            ],
          };
        }
        return {
          title: "Photography Blog | Jovy Thomas Visuals - Tips & Stories from Nashville, TN",
          description:
            "Explore photography tips, behind-the-scenes stories, and creative inspiration. Learn from an award-winning photographer serving Nashville, Hendersonville, Gallatin, and Middle Tennessee.",
          keywords: [
            "photography blog Nashville",
            "photography blog Hendersonville",
            "photography blog Tennessee",
            "photography tips",
            "behind the scenes photography",
            "photographer stories",
            "portrait photography tips",
            "family photography tips",
            "maternity photography tips",
            "kids photography tips",
            "creative photography Tennessee",
            "Jovy Thomas Visuals blog",
          ],
        };
      case "HOME":
      default:
        return {
          title:
            "Jovy Thomas Visuals | Family, Kids & Portrait Photographer - Nashville, Hendersonville, Gallatin, TN",
          description:
            "Award-winning professional photographer specializing in family, kids, maternity, and portrait photography. Serving Nashville, Hendersonville, Gallatin, and Middle Tennessee. Outdoor natural light sessions, fine art portraits, and fashion portfolios. Book your session today!",
          keywords: [
            // Primary location-based keywords (highest priority)
            "photographer Nashville",
            "photographer Hendersonville",
            "photographer Gallatin",
            "photographer Tennessee",
            "Nashville photographer",
            "Hendersonville photographer",
            "Gallatin photographer",
            "Middle Tennessee photographer",
            // Family photography + locations
            "family photographer Nashville",
            "family photographer Hendersonville",
            "family photographer Gallatin",
            "family photographer Tennessee",
            "family portraits Nashville",
            "family portraits Hendersonville",
            // Kids photography + locations
            "kids photographer Nashville",
            "kids photographer Hendersonville",
            "kids photographer Gallatin",
            "kids photographer Tennessee",
            "child photographer Nashville",
            "child photographer Hendersonville",
            "children photographer Tennessee",
            // Portrait photography + locations
            "portrait photographer Nashville",
            "portrait photographer Hendersonville",
            "portrait photographer Gallatin",
            "portrait photographer Tennessee",
            "headshot photographer Nashville",
            // Maternity photography + locations
            "maternity photographer Nashville",
            "maternity photographer Hendersonville",
            "maternity photographer Tennessee",
            "pregnancy photographer Nashville",
            "pregnancy photos Tennessee",
            // Outdoor/natural light photography
            "outdoor photographer Nashville",
            "outdoor photographer Tennessee",
            "natural light photographer Nashville",
            "natural light photographer Hendersonville",
            // Event photography + locations
            "event photographer Nashville",
            "event photographer Hendersonville",
            "event photographer Gallatin",
            "birthday photographer Nashville",
            "party photographer Tennessee",
            // Fashion/portfolio photography
            "fashion photographer Nashville",
            "portfolio photographer Tennessee",
            "fashion portfolio Nashville",
            // Nearby areas
            "photographer Mount Juliet",
            "photographer Goodlettsville",
            "photographer Lebanon TN",
            "photographer Franklin TN",
            "photographer Brentwood TN",
            // Brand keywords
            "Jovy Thomas Visuals",
            "Jovy Thomas photographer",
            "award winning photographer Nashville",
            "professional photographer Tennessee",
          ],
        };
    }
  };

  const seoData = getSEOData();

  const renderPage = () => {
    switch (currentPage) {
      case "GALLERY":
        return <GalleryPage />;
      case "SMALL EVENT PHOTOGRAPHY":
        return <SmallEventPhotography />;
      case "PACKAGES":
        return <Packages />;
      case "ABOUT ME":
        return <AboutMe />;
      case "CONTACT":
        return <Contact />;
      case "FAQs":
        return <FAQs />;
      case "MENTIONS":
        return <Mentions />;
      case "Blog":
        if (selectedBlogPostId) {
          return <BlogPost postId={selectedBlogPostId} onBack={handleBackToBlog} />;
        }
        return <Blog onSelectPost={handleSelectBlogPost} />;
      case "HOME":
      default:
        return (
          <>
            <Gallery />
            <Hero />
          </>
        );
    }
  };

  const renderBlogPost = () => {
    if (selectedBlogPostId) {
      return <BlogPost postId={selectedBlogPostId} onBack={handleBackToBlog} />;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-[#e8e4d8]">
      <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} />
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      {renderPage()}
    </div>
  );
}
