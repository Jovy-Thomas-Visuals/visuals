import { getImagesBySection } from "../utils/imageUtils";

const galleryCategories = [
  { id: 1, title: "KIDS", section: "KIDS" },
  { id: 2, title: "MATERNITY", section: "MATERNITY" },
  { id: 3, title: "FAMILY", section: "FAMILY" },
  { id: 4, title: "FINE ART", section: "FINE ART" },
  { id: 5, title: "MEN'S PORTRAITS", section: "MEN'S PORTRAITS" },
  { id: 6, title: "SMALL EVENTS", section: "SMALL EVENT" }
];

export function GalleryPage() {
  // Helper function to get image path based on section
  const getImagePath = (section: string, filename: string) => {
    const sectionMap: { [key: string]: string } = {
      'KIDS': 'kids',
      'MATERNITY': 'maternity',
      'FAMILY': 'family',
      'FINE ART': 'fine-art',
      "MEN'S PORTRAITS": 'mens-portraits',
      'SMALL EVENT': 'small-event'
    };
    
    const folderName = sectionMap[section] || section.toLowerCase().replace(/\s+/g, '-');
    return `/images/${folderName}/${filename}`;
  };

  return (
    <section className="py-12 px-4">
      <div className="mb-12 text-center">
        <h2 className="text-5xl text-[#8b7355]">GALLERY</h2>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {galleryCategories.map((category) => {
            const categoryImages = getImagesBySection(category.section);
            const firstImage = categoryImages[0];

            return (
              <div key={category.id} className="flex flex-col items-center">
                <div className="mb-4 px-8 py-2 border border-[#8b7355] bg-[#f5f2ec] inline-block">
                  <h3 className="text-sm text-[#8b7355] tracking-wider" style={{ fontFamily: "'Courier New', monospace" }}>
                    {category.title}
                  </h3>
                </div>
                {firstImage && (
                  <div className="cursor-pointer hover:opacity-90 transition-opacity">
                    <img
                      src={getImagePath(firstImage.section, firstImage.filename)}
                      alt={firstImage.title}
                      className="w-full max-w-[280px] h-auto shadow-md"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <footer className="mt-16 text-center text-xs text-[#8b7355]" style={{ fontFamily: "'Courier New', monospace" }}>
        <p>All photographs in this site are copyright of Jovy Thomas  -  © Jovy Thomas Visuals 2025. All Rights Reserved</p>
      </footer>
    </section>
  );
}