import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { getImagesBySection } from "../utils/imageUtils";

export function Gallery() {
  // Load images from the JSON configuration
  const galleryImages = getImagesBySection("HOME");

  // Helper function to get image path based on section
  const getImagePath = (section: string, filename: string) => {
    const sectionMap: { [key: string]: string } = {
      KIDS: "kids",
      MATERNITY: "maternity",
      FAMILY: "family",
      "FINE ART": "fine-art",
      "MEN'S PORTRAITS": "mens-portraits",
      "SMALL EVENT": "small-event",
      MENTIONS: "mentions",
      BLOG: "blog",
      HOME: "home",
    };

    const folderName = sectionMap[section] || section.toLowerCase().replace(/\s+/g, "-");
    return `/assets/galleries/${folderName}/${filename}`;
  };

  // If no images, just render empty section (site still works)
  if (galleryImages.length === 0) {
    return <section className="py-8"></section>;
  }

  return (
    <section className="py-8">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}>
        <Masonry gutter="-1px" style={{ margin: 0, padding: 0 }}>
          {galleryImages.map((image) => (
            <div key={image.id} className="overflow-hidden" style={{ margin: 0, padding: 0 }}>
              <img
                src={getImagePath(image.section, image.filename)}
                alt={image.title}
                className="w-full h-auto block hover:opacity-90 transition-opacity cursor-pointer"
                style={{ margin: 0, padding: 0 }}
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
}
