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
          title: "Gallery - Jovy Thomas Visuals | Family & Portrait Photographer Tennessee",
          description:
            "Browse our photography gallery featuring family portraits, kids photography, maternity sessions, and more. Serving Hendersonville, Gallatin, and Tennessee.",
          keywords: [
            "Family photographer Tennessee",
            "Family photographer Gallatin",
            "Kids photographer Tennessee",
            "Kids photographer Gallatin",
            "Child photographer Gallatin",
            "Portrait photographer Gallatin",
            "Portrait photographer Hendersonville",
            "Maternity photographer Tennessee",
            "photography gallery Tennessee",
          ],
        };
      case "SMALL EVENT PHOTOGRAPHY":
        return {
          title: "Small Event Photography - Jovy Thomas Visuals | Hendersonville, TN",
          description:
            "Professional small event photography services in Tennessee. Capture birthdays, celebrations, and intimate gatherings. $140/hour with 50+ edited images. Serving Hendersonville and Gallatin.",
          keywords: [
            "small event photographer Tennessee",
            "event photography Hendersonville",
            "party photographer Gallatin",
            "birthday photography Tennessee",
            "celebration photographer",
            "small gathering photographer",
            "event photographer near me",
          ],
        };
      case "PACKAGES":
        return {
          title:
            "Photography Packages - Jovy Thomas Visuals | Child, Maternity & Portfolio Sessions",
          description:
            "Affordable photography packages starting at $250. Child photo sessions, maternity photoshoots, and portfolio sessions in local parks. Serving Hendersonville, Gallatin, and Tennessee.",
          keywords: [
            "photography packages Tennessee",
            "child photo session Gallatin",
            "maternity photoshoot package",
            "portfolio photography session",
            "Kids photographer Tennessee",
            "Maternity photographer Tennessee",
            "Family photographer Gallatin",
            "affordable photography packages",
          ],
        };
      case "ABOUT ME":
        return {
          title:
            "About Me - Jovy Thomas Visuals | Family, Kids & Portrait Photographer - Hendersonville, Gallatin, TN",
          description:
            "Learn more about Jovy Thomas, a professional family, kids, maternity, and portrait photographer serving Hendersonville, Gallatin, and Tennessee. Outdoor photography and fashion portfolios. Preserve those moments forever.",
          keywords: [
            "Family photographer Tennessee",
            "Family photographer Gallatin",
            "Kids photographer Tennessee",
            "Kids photographer Gallatin",
            "Child photographer Gallatin",
            "Portrait photographer Gallatin",
            "Portrait photographer Hendersonville",
            "Maternity photographer Tennessee",
            "Outdoor photographer Tennessee",
            "Fashion portfolio photographer Gallatin",
            "Hendersonville photographer",
            "Tennessee photography",
            "small event photographer",
          ],
        };
      case "CONTACT":
        return {
          title: "Contact - Jovy Thomas Visuals | Book Your Photography Session",
          description:
            "Contact Jovy Thomas Visuals for family, kids, maternity, and portrait photography. Call 629-308-4828 or email Jovy.thomas@gmail.com. Serving Hendersonville and Gallatin, TN.",
          keywords: [
            "contact photographer Tennessee",
            "book photography session Hendersonville",
            "photography inquiry Gallatin",
            "Family photographer contact",
            "Kids photographer Tennessee",
            "Maternity photographer contact",
            "book portrait session",
          ],
        };
      case "FAQs":
        return {
          title: "FAQs - Jovy Thomas Visuals | Photography Questions Answered",
          description:
            "Find answers to frequently asked questions about photography sessions, packages, and services. Outdoor natural light portraits in Hendersonville and Gallatin, TN.",
          keywords: [
            "photography FAQ",
            "portrait photography questions",
            "outdoor photography info",
            "photography session duration",
            "digital images photography",
            "Family photographer Tennessee",
            "Kids photographer Gallatin",
          ],
        };
      case "MENTIONS":
        return {
          title: "Mentions & Awards - Jovy Thomas Visuals | Featured Photographer",
          description:
            "Awards and features including NPS Highly Commended, DSLR Official, Affinity Photo, Air India Magazine, and more. Award-winning photographer from Tennessee.",
          keywords: [
            "award winning photographer",
            "NPS highly commended",
            "featured photographer",
            "photography awards",
            "IAPCP photographer",
            "published photographer",
            "Tennessee photographer awards",
          ],
        };
      case "Blog":
        if (selectedBlogPostId) {
          return {
            title: "Blog Post - Jovy Thomas Visuals | Photography Stories & Tips",
            description:
              "Read photography tips, behind-the-scenes stories, and creative inspiration from Jovy Thomas, professional photographer serving Tennessee.",
            keywords: [
              "photography blog",
              "photography tips",
              "behind the scenes photography",
              "photographer stories",
              "Tennessee photographer blog",
              "portrait photography tips",
            ],
          };
        }
        return {
          title: "Blog - Jovy Thomas Visuals | Photography Tips & Stories",
          description:
            "Explore photography tips, behind-the-scenes stories, and creative inspiration. Learn from an award-winning photographer serving Tennessee.",
          keywords: [
            "photography blog",
            "photography tips",
            "behind the scenes photography",
            "photographer stories",
            "Tennessee photographer blog",
            "portrait photography tips",
            "creative photography",
          ],
        };
      case "HOME":
      default:
        return {
          title:
            "Jovy Thomas Visuals | Family, Kids & Portrait Photographer - Hendersonville, Gallatin, TN",
          description:
            "Professional family, kids, maternity, and portrait photographer serving Hendersonville, Gallatin, and Tennessee. Outdoor photography and fashion portfolios. Preserve those moments forever.",
          keywords: [
            "Family photographer Tennessee",
            "Family photographer Gallatin",
            "Kids photographer Tennessee",
            "Kids photographer Gallatin",
            "Child photographer Gallatin",
            "Portrait photographer Gallatin",
            "Portrait photographer Hendersonville",
            "Maternity photographer Tennessee",
            "Outdoor photographer Tennessee",
            "Fashion portfolio photographer Gallatin",
            "Hendersonville photographer",
            "Tennessee photography",
            "small event photographer",
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
