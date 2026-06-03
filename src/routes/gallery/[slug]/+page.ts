import { error } from '@sveltejs/kit';
import { categoryBySlug, galleryCategories } from '$lib/galleryCategories';
import type { PageLoad } from './$types';
import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () =>
  galleryCategories.map((c) => ({ slug: c.slug }));

export const load: PageLoad = ({ params }) => {
  const category = categoryBySlug(params.slug);
  if (!category) {
    throw error(404, 'Gallery not found');
  }

  return {
    category,
    seo: {
      title: `${category.title} Photography | Jovy Thomas Visuals - Nashville, Hendersonville, Gallatin, TN`,
      description: `${category.title} photography portfolio by Jovy Thomas Visuals. Award-winning photographer serving Nashville, Hendersonville, Gallatin, and Middle Tennessee.`,
      keywords: [
        `${category.title.toLowerCase()} photographer Nashville`,
        `${category.title.toLowerCase()} photographer Tennessee`,
        'Jovy Thomas Visuals'
      ]
    }
  };
};
