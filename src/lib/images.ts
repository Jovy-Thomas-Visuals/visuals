import imageData from '$data/images.json';

export interface ImageData {
  id: string;
  filename: string;
  title: string;
  description: string;
  section: string;
  tags: string[];
  featured: boolean;
  dateAdded: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
  blogPostId?: string;
}

export interface Section {
  name: string;
  description: string;
}

interface ImageDataStructure {
  images: ImageData[];
  sections: Record<string, Section>;
  tags: Record<string, string>;
}

const data = imageData as ImageDataStructure;

const sectionFolderMap: Record<string, string> = {
  KIDS: 'kids',
  MATERNITY: 'maternity',
  FAMILY: 'family',
  'FINE ART': 'fine-art',
  "MEN'S PORTRAITS": 'mens-portraits',
  'SMALL EVENT': 'small-event',
  MENTIONS: 'mentions',
  BLOG: 'blog',
  HOME: 'home'
};

export function sectionToFolder(section: string): string {
  return sectionFolderMap[section] ?? section.toLowerCase().replace(/\s+/g, '-');
}

export async function loadGalleryFilenames(section: string): Promise<string[]> {
  const folder = sectionToFolder(section);
  const res = await fetch(`/galleries/${folder}/images.json`);
  if (!res.ok) return [];
  return (await res.json()) as string[];
}

export function getImagesBySection(section: string): ImageData[] {
  return data.images.filter((img) => img.section === section);
}

export function getImagesByTag(tag: string): ImageData[] {
  return data.images.filter((img) => img.tags?.includes(tag));
}

export function getFeaturedImages(): ImageData[] {
  return data.images.filter((img) => img.featured);
}

export function getBlogPostImages(blogPostId: string): ImageData[] {
  return data.images.filter((img) => img.blogPostId === blogPostId);
}

export function getSectionInfo(section: string): Section | undefined {
  return data.sections[section];
}

export function getAllSections(): Record<string, Section> {
  return data.sections;
}

export function getImagePath(section: string, filename: string): string {
  const folder = sectionFolderMap[section] ?? section.toLowerCase().replace(/\s+/g, '-');
  return `/galleries/${folder}/${filename}`;
}
