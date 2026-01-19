import { useState, useEffect } from "react";

interface ThumbnailWallProps {
  section: string;
  onClick: () => void;
  title: string;
}

export function ThumbnailWall({ section, onClick, title }: ThumbnailWallProps) {
  const [images, setImages] = useState<string[]>([]);
  const [currentThumbs, setCurrentThumbs] = useState<string[]>([]);

  // Helper function to get folder name based on section
  const getFolderName = (section: string) => {
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

    return sectionMap[section] || section.toLowerCase().replace(/\s+/g, "-");
  };

  const folder = getFolderName(section);

  // Function to get 4 random images
  const getRandom4 = (arr: string[]) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(4, arr.length));
  };

  // Fetch images on mount
  useEffect(() => {
    fetch(`/assets/galleries/${folder}/images.json`)
      .then((res) => res.json())
      .then((data: string[]) => {
        setImages(data);
        setCurrentThumbs(getRandom4(data));
      })
      .catch((err) => console.error("Error loading images:", err));
  }, [folder]);

  // Set interval to change images every 2 minutes
  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentThumbs(getRandom4(images));
    }, 120000); // 2 minutes

    return () => clearInterval(interval);
  }, [images]);

  const getImagePath = (filename: string) => `/assets/galleries/${folder}/${filename}`;

  return (
    <div className="cursor-pointer" onClick={onClick}>
      <div className="mb-4 px-8 py-2 border border-[#8b7355] bg-[#f5f2ec] inline-block">
        <h3
          className="text-sm text-[#8b7355] tracking-wider"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          {title}
        </h3>
      </div>

      {currentThumbs.length > 0 ? (
        <div className="grid grid-cols-2 gap-1 max-w-[280px] mx-auto">
          {currentThumbs.map((filename, index) => (
            <div key={filename} className="aspect-square overflow-hidden">
              <img
                src={getImagePath(filename)}
                alt={filename}
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
          {/* Add empty cells if less than 4 images */}
          {Array.from({ length: Math.max(0, 4 - currentThumbs.length) }).map((_, index) => (
            <div
              key={`empty-${index}`}
              className="aspect-square bg-[#f5f2ec] border border-[#e8e4d8]"
            ></div>
          ))}
        </div>
      ) : (
        <div className="w-[280px] h-[280px] bg-[#f5f2ec] border border-[#e8e4d8] flex items-center justify-center">
          <span
            className="text-[#8b7355] text-sm"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Coming Soon
          </span>
        </div>
      )}

      <div className="mt-2 text-center">
        <span className="text-xs text-[#6b6b6b]" style={{ fontFamily: "'Courier New', monospace" }}>
          {images.length} {images.length === 1 ? "photo" : "photos"}
        </span>
      </div>
    </div>
  );
}
