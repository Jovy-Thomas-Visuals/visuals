export interface GalleryCategory {
  id: number;
  title: string;
  section: string;
  slug: string;
}

export const galleryCategories: GalleryCategory[] = [
  { id: 1, title: 'KIDS', section: 'KIDS', slug: 'kids' },
  { id: 2, title: 'MATERNITY', section: 'MATERNITY', slug: 'maternity' },
  { id: 3, title: 'FAMILY', section: 'FAMILY', slug: 'family' },
  { id: 4, title: 'FINE ART', section: 'FINE ART', slug: 'fine-art' },
  { id: 5, title: "MEN'S PORTRAITS", section: "MEN'S PORTRAITS", slug: 'mens-portraits' },
  { id: 6, title: 'SMALL EVENTS', section: 'SMALL EVENT', slug: 'small-event' }
];

export function categoryBySlug(slug: string): GalleryCategory | undefined {
  return galleryCategories.find((c) => c.slug === slug);
}
