import { useState } from "react";
import { getImagesBySection } from "../utils/imageUtils";
import { ThumbnailWall } from "./ThumbnailWall";
import { Gallery } from "./Gallery";

const galleryCategories = [
  { id: 1, title: "KIDS", section: "KIDS" },
  { id: 2, title: "MATERNITY", section: "MATERNITY" },
  { id: 3, title: "FAMILY", section: "FAMILY" },
  { id: 4, title: "FINE ART", section: "FINE ART" },
  { id: 5, title: "MEN'S PORTRAITS", section: "MEN'S PORTRAITS" },
  { id: 6, title: "SMALL EVENTS", section: "SMALL EVENT" },
];

export function GalleryPage() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
  };

  const handleBackToOverview = () => {
    setSelectedSection(null);
  };

  // If a section is selected, show the full gallery
  if (selectedSection) {
    const sectionImages = getImagesBySection(selectedSection);
    const sectionTitle =
      galleryCategories.find((cat) => cat.section === selectedSection)?.title || selectedSection;

    return (
      <section className="py-8 md:py-12 px-2 md:px-4">
        <div className="mb-6 md:mb-8 text-center">
          <button
            onClick={handleBackToOverview}
            className="mb-4 px-3 md:px-4 py-2 text-xs md:text-sm text-[#8b7355] border border-[#8b7355] bg-[#f5f2ec] hover:bg-[#e8e4d8] transition-colors"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            ← Back to Gallery Overview
          </button>
          <h2 className="text-2xl md:text-4xl text-[#8b7355]">{sectionTitle}</h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <Gallery section={selectedSection} />
        </div>

        <footer
          className="mt-16 text-center text-xs text-[#8b7355]"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          <p>
            All photographs in this site are copyright of Jovy Thomas - © Jovy Thomas Visuals 2025.
            All Rights Reserved
          </p>
        </footer>
      </section>
    );
  }

  // Show thumbnail overview
  return (
    <section className="py-8 md:py-12 px-4">
      <div className="mb-8 md:mb-12 text-center">
        <h2 className="text-3xl md:text-5xl text-[#8b7355]">GALLERY</h2>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-8 md:gap-y-12">
          {galleryCategories.map((category) => {
            return (
              <div key={category.id} className="flex flex-col items-center">
                <ThumbnailWall
                  section={category.section}
                  onClick={() => handleSectionClick(category.section)}
                  title={category.title}
                />
              </div>
            );
          })}
        </div>
      </div>

      <footer
        className="mt-16 text-center text-xs text-[#8b7355]"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        <p>
          All photographs in this site are copyright of Jovy Thomas - © Jovy Thomas Visuals 2025.
          All Rights Reserved
        </p>
      </footer>
    </section>
  );
}
