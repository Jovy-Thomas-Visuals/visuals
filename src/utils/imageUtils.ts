import imageData from "../data/images.json";

export interface ImageData {
  id: string;
  filename: string;
  title: string;
  description: string;
  section: string;
  tags: string[];
  featured: boolean;
  dateAdded: string;
  aspectRatio: "square" | "portrait" | "landscape";
  blogPostId?: string;
}

export interface Section {
  name: string;
  description: string;
}

export interface Tags {
  [key: string]: string;
}

interface ImageDataStructure {
  images: ImageData[];
  sections: { [key: string]: Section };
  tags: Tags;
}

// Get all images
export function getAllImages(): ImageData[] {
  return imageData.images;
}

// Get images by section
export function getImagesBySection(section: string): ImageData[] {
  return imageData.images.filter((img) => img.section === section);
}

// Get images by tag
export function getImagesByTag(tag: string): ImageData[] {
  return imageData.images.filter((img) => img.tags && img.tags.includes(tag));
}

// Get images by multiple tags (images must have ALL tags)
export function getImagesByTags(tags: string[]): ImageData[] {
  return imageData.images.filter((img) => img.tags && tags.every((tag) => img.tags.includes(tag)));
}

// Get featured images
export function getFeaturedImages(): ImageData[] {
  return imageData.images.filter((img) => img.featured);
}

// Get images for home page gallery
export function getHomeGalleryImages(): ImageData[] {
  return getImagesBySection("HOME");
}

// Get images for a specific blog post
export function getBlogPostImages(blogPostId: string): ImageData[] {
  return imageData.images.filter((img) => img.blogPostId === blogPostId);
}

// Get section metadata
export function getSectionInfo(section: string): Section | undefined {
  return imageData.sections[section];
}

// Get all sections
export function getAllSections(): { [key: string]: Section } {
  return imageData.sections;
}

// Get tag description
export function getTagDescription(tag: string): string | undefined {
  return imageData.tags[tag];
}

// Get all tags
export function getAllTags(): Tags {
  return imageData.tags;
}

// Get image by ID
export function getImageById(id: string): ImageData | undefined {
  return imageData.images.find((img) => img.id === id);
}

// Get image path (for when you add real images)
export function getImagePath(filename: string): string {
  return `/images/${filename}`;
}

// Sort images by date (newest first)
export function sortImagesByDate(images: ImageData[]): ImageData[] {
  return [...images].sort(
    (a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime(),
  );
}

// Filter images by multiple criteria
export interface ImageFilter {
  section?: string;
  tags?: string[];
  featured?: boolean;
  aspectRatio?: "square" | "portrait" | "landscape";
}

export function filterImages(filter: ImageFilter): ImageData[] {
  let filtered = getAllImages();

  if (filter.section) {
    filtered = filtered.filter((img) => img.section === filter.section);
  }

  if (filter.tags && filter.tags.length > 0) {
    filtered = filtered.filter((img) => filter.tags!.every((tag) => img.tags.includes(tag)));
  }

  if (filter.featured !== undefined) {
    filtered = filtered.filter((img) => img.featured === filter.featured);
  }

  if (filter.aspectRatio) {
    filtered = filtered.filter((img) => img.aspectRatio === filter.aspectRatio);
  }

  return filtered;
}

// Function to add images (you'll call this when you want to add photos)
export function addImage(image: ImageData): void {
  imageData.images.push(image);
}

// Function to update all image data (for bulk updates)
export function updateImageData(newData: ImageDataStructure): void {
  imageData.images = newData.images;
  imageData.sections = newData.sections;
  imageData.tags = newData.tags;
}
