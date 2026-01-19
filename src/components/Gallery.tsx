import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { getImagesBySection } from "../utils/imageUtils";

interface GalleryProps {
  section?: string;
}

export function Gallery({ section = "HOME" }: GalleryProps) {
  // Load images from the JSON configuration
  const galleryImages = getImagesBySection(section);

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
    return <section></section>;
  }

  return (
    <section style={{ margin: 0, padding: 0 }}>
      <style>
        {`
          .masonry-column,
          [class*="masonry"] > div,
          .react-responsive-masonry-column,
          div[style*="display: flex"],
          div[style*="flex-direction: column"] {
            gap: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            column-gap: 0 !important;
            row-gap: 0 !important;
          }
        `}
      </style>
      <div style={{ margin: 0, padding: 0 }}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 3 }}
          style={{ margin: 0, padding: 0 }}
        >
          <Masonry
            gutter="-5px"
            style={{
              margin: 0,
              padding: 0,
              gap: 0,
              columnGap: 0,
              rowGap: 0,
            }}
          >
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="overflow-hidden"
                style={{
                  margin: 0,
                  padding: 0,
                  display: "inline-block",
                  border: "none",
                  gap: 0,
                  lineHeight: 0,
                  verticalAlign: "top",
                }}
              >
                <img
                  src={getImagePath(image.section, image.filename)}
                  alt={image.title}
                  className="w-full h-auto block hover:opacity-90 transition-opacity cursor-pointer"
                  style={{
                    margin: 0,
                    padding: 0,
                    display: "block",
                    border: "none",
                    gap: 0,
                  }}
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}
